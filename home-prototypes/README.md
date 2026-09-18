# Home Prototypes — Full Home in two directions

Two self-contained HTML files. Same content (v0.3 copy). Different visual and interaction language. Open either file in a browser.

- **`the-firm.html`** — warm-professional. Navy hero + brass accents, serif display + sans body, Roman-numeral section markers, centered display fee-hook, dark custody strip, side-by-side "next step" cards on cream. Feels like a firm you would trust with something serious.
- **`quiet-modern.html`** — quiet-modern. Sans throughout (Inter), near-monochrome + deep green accent, labeled-column section rhythm, asymmetric fee-hook split, dark custody surface for weight, "next step" cards on white. Feels current, careful, restrained.

## Section order (both)

1. Hero
2. **§ I / 01** — Why this firm exists → pull-quote
3. **§ II / 02** — Who this is for
4. **§ III / 03** — What it costs *(the "Potentially nothing" moment)*
5. **§ IV / 04** — Where your money actually is
6. **§ V / 05** — The next step *(two paths side by side)*
7. Real footer with verify links + regulatory disclosure placeholder

## Interaction layer (shared)

- **Reading-progress bar** at the top edge, filled left-to-right as you scroll
- **Fade-in on section enter** (14px translate, 640ms, once) — automatically disabled if `prefers-reduced-motion: reduce`
- **Right-side reading rail** (desktop only, > 1280px) with a dot per section; the active dot fills as you scroll through it, and the label reveals on hover
- **Nav underline slide-in** on hover, considered focus states
- **Skip-to-content** link (visible on tab focus)
- **CTA hover lift** (subtle 1px, 200ms)
- **Card hover lift + arrow-slide** on the two "next step" cards

**Nothing here breaks the brief's motion rules:** no scroll-jacking, no section-locking, no parallax, no carousels, no pop-ups, no cursor followers, no floating shapes, no auto-playing anything.

## To view

Double-click either file. Nothing to install.

## To deploy as two routes

The file naming already implies the deployment paths — `/the-firm/` and `/quiet-modern/` — pick whichever hosting the site ends up on, static drop-in works anywhere.

## What is not here yet

- Photograph of Alex (still a gap — see `../docs/open-gaps.md`)
- Diagram of the 21→7 narrowing (only used on Approach page, not Home)
- Contact form (that's on Contact page)
- Fee-wording page proper (linked to but not built — that's the /fees route)

## After Alex picks a direction

The winning direction gets applied to `/about` next (most important page, real photograph slot, full Vanguard origin story). If the direction holds up on About under all that content weight, it's safe to roll through the remaining 7 pages.
