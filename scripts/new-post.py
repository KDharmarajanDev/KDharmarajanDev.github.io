#!/usr/bin/env python3
"""Create a dependency-free blog post and add it to the blog index."""

import argparse
import datetime as dt
import html
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TEMPLATE = ROOT / "blog" / "post-template.html"
INDEX = ROOT / "blog" / "index.html"
POSTS = ROOT / "blog" / "posts"
MARKER = "      <!-- NEW_POSTS_START -->"


def slugify(value: str) -> str:
    slug = re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")
    if not slug:
        raise ValueError("title must contain at least one letter or number")
    return slug


def display_date(value: dt.date) -> str:
    return f"{value.strftime('%B')} {value.day}, {value.year}"


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("title")
    parser.add_argument("--description", default="A new note from Karthik Dharmarajan.")
    parser.add_argument("--date", default=dt.date.today().isoformat(), help="Publication date in YYYY-MM-DD format")
    parser.add_argument("--read-time", type=int, default=3)
    args = parser.parse_args()

    date = dt.date.fromisoformat(args.date)
    slug = slugify(args.title)
    destination = POSTS / f"{slug}.html"
    if destination.exists():
        raise SystemExit(f"Post already exists: {destination.relative_to(ROOT)}")

    replacements = {
        "{{TITLE}}": html.escape(args.title),
        "{{DESCRIPTION}}": html.escape(args.description),
        "{{SLUG}}": slug,
        "{{DATE_ISO}}": date.isoformat(),
        "{{DATE_DISPLAY}}": display_date(date),
        "{{READ_TIME}}": str(args.read_time),
    }
    post = TEMPLATE.read_text()
    for token, value in replacements.items():
        post = post.replace(token, value)
    destination.write_text(post)

    card = f"""      <article class="post-card">
        <p class="post-meta"><time datetime="{date.isoformat()}">{display_date(date)}</time> · {args.read_time} min read</p>
        <h2><a href="/blog/posts/{slug}.html">{html.escape(args.title)}</a></h2>
        <p>{html.escape(args.description)}</p>
      </article>
"""
    index = INDEX.read_text()
    if MARKER not in index:
        destination.unlink()
        raise SystemExit(f"Could not find insertion marker in {INDEX.relative_to(ROOT)}")
    INDEX.write_text(index.replace(MARKER, f"{MARKER}\n{card}", 1))
    print(f"Created {destination.relative_to(ROOT)} and updated blog/index.html")


if __name__ == "__main__":
    main()
