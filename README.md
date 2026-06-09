# KDharmarajanDev.github.io

Static personal website for Karthik Dharmarajan.

Preview locally with any basic static server, for example:

```bash
python3 -m http.server
```

The site is now served from the repository root with plain HTML and CSS.
Migration notes live in [`STATIC_SITE_MIGRATION_PLAN.md`](./STATIC_SITE_MIGRATION_PLAN.md).

## Blog

Create a dependency-free blog post with:

```bash
python3 scripts/new-post.py "Post title" --description "One-sentence summary."
```

See [`blog/README.md`](./blog/README.md) for the complete authoring and one-time Giscus setup
workflow.

## Pre-push check

Run this before pushing:

```bash
python3 scripts/check-site.py
```

Along with checking local links and blog scaffolding, it reports publication authors missing from
`author-links.js`. Add authors who intentionally do not need a link to
`AUTHORS_WITHOUT_LINKS_ALLOWED` in `scripts/check-site.py`.
