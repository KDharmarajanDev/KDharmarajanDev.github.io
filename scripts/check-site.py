#!/usr/bin/env python3
"""Run lightweight offline checks for the static site."""

from html.parser import HTMLParser
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
HTML_FILES = list(ROOT.glob("*.html")) + list((ROOT / "blog").rglob("*.html"))

# Authors listed here may intentionally appear without a profile link.
AUTHORS_WITHOUT_LINKS_ALLOWED = {
    "Hugo Zhan",
}


class LinkParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []

    def handle_starttag(self, tag, attrs):
        if tag not in {"a", "link", "script"}:
            return
        values = dict(attrs)
        target = values.get("href") or values.get("src")
        if target and target.startswith("/"):
            self.links.append(target)


class PublicationAuthorParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.authors = set()
        self._in_author_list = False
        self._author_text = []
        self._ignored_tag_depth = 0

    def handle_starttag(self, tag, attrs):
        classes = dict(attrs).get("class", "").split()
        if tag == "p" and "publication-authors" in classes:
            self._in_author_list = True
            self._author_text = []
        elif self._in_author_list and tag == "sup":
            self._ignored_tag_depth += 1

    def handle_endtag(self, tag):
        if self._in_author_list and tag == "sup":
            self._ignored_tag_depth -= 1
        elif self._in_author_list and tag == "p":
            self.authors.update(
                name.strip() for name in "".join(self._author_text).split(",") if name.strip()
            )
            self._in_author_list = False

    def handle_data(self, data):
        if self._in_author_list and not self._ignored_tag_depth:
            self._author_text.append(data)


def author_links():
    source = (ROOT / "author-links.js").read_text()
    mapping = re.search(r"const authorLinks = \{(.*?)\n\}", source, re.DOTALL)
    if not mapping:
        raise SystemExit("Offline checks failed:\n- could not read authorLinks from author-links.js")
    return set(re.findall(r'^\s*"([^"]+)":\s*"[^"]+",?\s*$', mapping.group(1), re.MULTILINE))


failures = []
for page in HTML_FILES:
    parser = LinkParser()
    parser.feed(page.read_text())
    for link in parser.links:
        target = ROOT / link.lstrip("/")
        if link.endswith("/"):
            target /= "index.html"
        if not target.exists():
            failures.append(f"{page.relative_to(ROOT)} -> {link}")

publication_parser = PublicationAuthorParser()
publication_parser.feed((ROOT / "index.html").read_text())
missing_author_links = sorted(
    publication_parser.authors - author_links() - AUTHORS_WITHOUT_LINKS_ALLOWED
)
failures.extend(
    f'publication author "{author}" is missing from author-links.js' for author in missing_author_links
)

required = [
    ROOT / "blog" / "post-template.html",
    ROOT / "blog" / "giscus-loader.js",
    ROOT / "blog" / "giscus-theme.css",
]
failures.extend(f"missing {path.relative_to(ROOT)}" for path in required if not path.exists())

if failures:
    raise SystemExit("Offline checks failed:\n" + "\n".join(f"- {failure}" for failure in failures))
print(
    f"Checked {len(HTML_FILES)} HTML files and {len(publication_parser.authors)} publication "
    "authors; site checks passed."
)
