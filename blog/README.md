# Blog workflow

Create a post from the repository root:

```bash
python3 scripts/new-post.py "Post title" \
  --description "One-sentence summary." \
  --read-time 4
```

The command creates `blog/posts/post-title.html` from `blog/post-template.html` and adds the
newest card to `blog/index.html`. Edit the generated HTML, then preview and verify:

```bash
python3 scripts/check-site.py
python3 -m http.server
```

Open <http://localhost:8000/blog/>. The workflow has no package dependencies or build step.

## One-time Giscus setup

1. Enable GitHub Discussions for `KDharmarajanDev/KDharmarajanDev.github.io`.
2. Install the [Giscus GitHub App](https://github.com/apps/giscus) for the repository.
3. Open [giscus.app](https://giscus.app/), enter the repository, and select the `Announcements`
   category.
4. Copy the generated `data-repo-id` and `data-category-id` values into
   `blog/giscus-loader.js`.

Until those IDs are configured, post pages show a setup message instead of a broken comment widget.
The embedded widget uses `blog/giscus-theme.css` so its light and dark modes match the site.

## Homepage promotion

The blog remains available at `/blog/`, but its homepage navigation link and feature card are hidden.
To promote it on the homepage, remove `hidden` from the blog link and blog section in `index.html`.
