# 05 · Git & Retention

Not housekeeping — a **compliance requirement**. US advisory firms must retain published material and produce it on request for years.

## Repo

- Private repository, controlled by Arham / client. Not a personal account.
- `main` = whatever is on staging currently.
- Every production release = an annotated tag with the date.

## Commit standards

Follow the global commit format (see user rules). Concise `type: description`. Types: feat, fix, refactor, docs, chore.

Examples:
- `feat: about page copy + layout`
- `fix: contrast on fees page footnote`
- `docs: log gap — sean author archive owner`

## Tag every published state

At every push-to-production:

```bash
git tag -a v2026-09-16-live -m "Published to production 2026-09-16"
git push origin v2026-09-16-live
```

Convention: `vYYYY-MM-DD-live`. If multiple in one day: `-live-1`, `-live-2`.

## Retention artefacts

For each tag, ensure:
- Full source retrievable
- Built static output archived (either via CI artefact or a `dist/` snapshot in a separate `-releases` branch/repo)
- Any assets referenced (photo, PDF downloads) versioned alongside — do not rely on external URLs that can rot

## Do NOT

- Force-push `main`
- Rewrite history that has been tagged
- Squash-merge in a way that loses the exact published state
- Delete tags
- Store secrets in the repo (form service keys → env vars in host)

## When something changes on the live site

1. Change made and pushed.
2. Human review (Arham).
3. Counsel review if the change touches fee wording, custody wording, or any regulated claim.
4. Push to production.
5. **Tag** with new date.
6. Old tag stays — that is the retention.
