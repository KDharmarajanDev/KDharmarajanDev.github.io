# Agents.md

This repository is now a static personal website. Treat the repository root as the source of truth.

## Site Structure

- Edit [`index.html`](./index.html) and [`styles.css`](./styles.css) for the live site.
- Keep static assets in [`assets/`](./assets).
- Keep [`CNAME`](./CNAME), [`robots.txt`](./robots.txt), and [`favicon.ico`](./favicon.ico) at the repository root.
- Do not reintroduce React, CRA, Redux, MUI, or other runtime app dependencies unless the user explicitly asks.

## Content Rules

- Preserve the biography, news, publication list, resume, CV, and external links.
- Keep the page semantic and simple: header, nav, main, sections, and articles.
- Use normal anchor links for navigation and external resources.
- Keep Dream2Flow and CHORD as MP4 video thumbnails.
- Use still thumbnails for the rest of the publication cards unless motion is specifically needed.

## Editing Rules

- Prefer `apply_patch` for manual file edits.
- Use `rg` for searches and `rg --files` for file discovery.
- Do not use destructive commands such as `git reset --hard` or `git checkout --` unless explicitly requested.
- If an operation writes outside the workspace or needs special privileges, ask for escalation instead of working around it.
- Leave unrelated user changes alone.

## Worktree Workflow

- Use a separate git worktree for each major feature, refactor, or cleanup.
- Start each worktree from `main` unless the user asks for a different base.
- Keep one feature per worktree so changes stay focused and easy to review.
- Before editing, make a short plan for the feature in that worktree, then implement and verify it there.
- Keep cross-cutting changes out of feature worktrees unless the feature truly requires them.
- When the worktree is no longer needed, stop and follow the cleanup rules below instead of deleting anything casually.

### Clean Up The Worktree

If the human says `clean up the worktree`, follow this sequence:

1. Review the worktree status and identify every intentional change.
2. Finish or revert any partial edits so the worktree contains only the intended feature work.
3. Commit the feature work back onto the branch that will land in `main`.
4. Make sure the branch is merged or fast-forwarded into `main` without losing any committed changes.
5. Confirm `main` is clean and up to date.
6. Delete the now-unneeded worktree and, if appropriate, delete the feature branch after the merge is complete.

- Do not delete a worktree until the changes have been committed back to `main` or a branch that will be merged into `main`.
- Do not use the cleanup command as a shortcut for discarding work.
- If there are unresolved conflicts or unclear ownership of changes, pause and ask before removing anything.

## Local Preview

- Preview the site with a basic static server, for example:

```bash
python3 -m http.server
```

- If a port is already in use, try another one such as `8080`.

## Docs and References

- If the user asks about a library, framework, SDK, API, or CLI tool, use Context7 documentation lookup first.
- Keep answers grounded in the current repo state rather than the old React app.

## Maintenance Notes

- `STATIC_SITE_MIGRATION_PLAN.md` is now a completion note for the static migration.
- The `website/` React app has been removed and should stay removed unless the user asks to restore it.
