# 02 · Pages & Routes — build order

## Prerequisites (do not start until true)

1. Copy deck (Part 1 · 03) approved by Arham.
2. Photo delivered (or explicit approval to ship About with placeholder).
3. Stack + host chosen per Part 1 · 04.
4. Contact-form target decision from Arham (or approval to ship as `[NEEDS DECISION]`).

## Build order

Front-load the pages with the highest scrutiny → catch problems early.

1. **`/about`** — the destination. Get its layout, type scale, and photo treatment right first. Everything else inherits its type + spacing system.
2. **`/`** — home. Signpost to About. Above-the-fold must land the "who + who-for + where" test in 5 seconds.
3. **`/approach`** — Tzur Magen. Diagram (SVG) for 21 → 7.
4. **`/fees`** — verbatim wording. Zero deviation. Zero examples.
5. **`/custody`** — reassurance page.
6. **`/who-i-work-with`** — situation-based.
7. **`/how-we-start`** — structure only; steps marked `[NEEDS CONFIRMATION]`.
8. **`/contact`** — form markup + booking placeholder pending Arham.
9. **`/insights`** — empty shell. Layout ready for future PDF + newsletter.

## Route rules

- Each page = its own file at its own URL.
- No `/#section` fakery. If a link in nav goes to a `<section>` on another page, it's still a real page.
- Consistent nav across all pages. Same `<header>` and `<footer>`.
- 404 page exists and matches site type/tone.

## Per-page checklist

For each page:

- [ ] Unique hand-written `<title>` and meta description
- [ ] Single `<h1>`, semantic heading order
- [ ] Real `<main>` landmark
- [ ] Uses approved copy exactly
- [ ] No forbidden elements (see compliance rules)
- [ ] Type ≥ 18px body, AA contrast
- [ ] Keyboard-reachable + visible focus
- [ ] Responsive at 320 / 375 / 768 / 1024 / 1440
- [ ] `[NEEDS …]` markers logged in `../open-gaps.md`

## Do not add during build

- Analytics (separate approved step)
- Contact form submission target (build markup only)
- Any email-capture gate on `/insights`
