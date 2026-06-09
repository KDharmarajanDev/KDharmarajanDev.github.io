# Bare-Bones Personal Website Migration Plan

## Status

Complete.

The personal website now lives at the repository root as a static HTML and CSS
site. The React/Create React App workspace has been removed, and the live
content is served directly from:

- [`index.html`](/Users/karth1/Documents/KDharmarajanDev.github.io/index.html)
- [`styles.css`](/Users/karth1/Documents/KDharmarajanDev.github.io/styles.css)
- [`assets/`](/Users/karth1/Documents/KDharmarajanDev.github.io/assets)

## Result

- No runtime React, Redux, MUI, Emotion, Pixi, or CRA dependency remains in
  the site.
- Content is rendered with semantic HTML.
- Layout, responsiveness, and light/dark mode are handled by CSS alone.
- Resume, CV, profile image, and publication thumbnails are served as static
  files.

## Follow-Ups

- Prune any unused legacy media if desired.
- Optionally convert remaining large thumbnails or videos to lighter formats.
- Validate the final deploy on GitHub Pages once published.
