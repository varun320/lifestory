# 03 · Staging & Launch

## Staging

- Deploy to a Vercel or Netlify **preview URL**.
- **`noindex` meta on every page** + `robots.txt` disallow — a staging copy of an adviser's site appearing in search is its own problem.
- Do **not** email a zip. Send the staging link to Arham.

### Staging headers/tags

```html
<meta name="robots" content="noindex, nofollow" />
```

`public/robots.txt`:
```
User-agent: *
Disallow: /
```

## What we do NOT touch

- DNS / domain settings — not ours to change.
- The live WordPress install at `lifestorywp.com` — leave running exactly as is.
- Hosting / billing accounts — do not sign the client up for anything, do not create accounts in his name.
- Anything on `drivechaincapital.com`.

## Cutover

Cutover is a **scheduled, approved event** — not something that happens because the build is finished.

Cutover sequence (owned by Arham, not us):
1. Compliance gate passes (see `06-pre-send-compliance-gate.md`)
2. Human review by Arham
3. Legal review by client's counsel of fee wording + any flagged items
4. Client approves live cutover
5. DNS change scheduled and executed
6. On go-live: **remove** the staging `noindex` + robots disallow from production
7. Verify indexing works
8. Tag production release in git with the date

## Post-launch

- Confirm analytics + Search Console reporting.
- Verify name search returns the site (Alex Hilbert + Life Story Wealth Planning).
- Retain the old WordPress site per client counsel guidance (do not delete without approval).
