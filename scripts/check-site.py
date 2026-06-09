#!/usr/bin/env python3
"""Run lightweight offline checks for local links and blog scaffolding."""

from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
HTML_FILES = list(ROOT.glob("*.html")) + list((ROOT / "blog").rglob("*.html"))


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

required = [
    ROOT / "blog" / "post-template.html",
    ROOT / "blog" / "giscus-loader.js",
    ROOT / "blog" / "giscus-theme.css",
]
failures.extend(f"missing {path.relative_to(ROOT)}" for path in required if not path.exists())

if failures:
    raise SystemExit("Offline checks failed:\n" + "\n".join(f"- {failure}" for failure in failures))
print(f"Checked {len(HTML_FILES)} HTML files; local links and blog scaffolding are valid.")
