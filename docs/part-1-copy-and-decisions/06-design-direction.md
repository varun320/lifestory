# 06 · Design Direction

## Design serves stated intent

Every page and section in `03-copy-deck.md` opens with a stated **intent** — the psychological job that page or section does for the reader. Design decisions should serve that intent, not decorate around it.

Concretely:

- **Page-level intent drives hero treatment and above-the-fold hierarchy.** If the page's job is "route to About within 30 seconds" (Home), the CTA and the About-signpost belong above the fold. If the job is "earn trust well enough that they reach out" (About), the photo and the origin story belong there, not a CTA.
- **Section-level intent drives visual weight.** A section marked *"answer the unspoken fear"* (Custody / short version) wants big type, generous space, no distraction. A section marked *"absence as intention"* (What this page does not show) wants quiet, small, low-key treatment — the reader should register the posture without being led to it.
- **If a design choice doesn't serve the stated intent, it's ornament.** Cut it.

Test for any design pass: for each section, can you point at the layout and say "this is why the reader reads this the way the intent says they should"? If not, redesign until you can.

## Reference register

**Closer to a good law firm or a research publication than a SaaS landing page.**

Calm. Spacious. Serious. Legible. The credibility here comes from restraint and specificity, not from motion or visual flourish.

## Explicitly forbidden (client-driven)

- **No scroll-jacking.** Client hated it on the Redwood site — "way too much… over the top."
- **No section-by-section scroll animation** of the same kind.
- **No carousels.**
- **No pop-ups.**
- **No countdowns / urgency devices.**
- **Nothing that will visibly rot** (client noticed "Upcoming Events" showing 2024 entries as "two and a half years out of date" on a competitor site).

## Positive direction

- **Editorial layout.** Real hierarchy from scale and space, not from decorative elements.
- **Generous whitespace.** Room to read.
- **Base type ≥ 18px.** Non-negotiable — the audience is ~60.
- **Real contrast.** No thin grey on white.
- **Visible focus states.** Keyboard-reachable everything.
- **Motion, if any:** small, purposeful, respects `prefers-reduced-motion`.

## Hierarchy

- Home = **signpost.** Above-the-fold: who + who-for + where + one CTA.
- About = **the destination.** Longest, most cared-for page. Real photo. Personal.
- Every other page = **quiet reassurance through specificity.**

## Layout skeleton (per page)

- Real semantic `<header>` with `<nav aria-label="Main navigation">`
- Real `<main>` with a single `<h1>`
- Section headings in order (no skipped levels)
- Real `<footer>` — location, minimal legal, links to any required regulatory disclosures (see gaps)

## Anti-patterns to refuse

- Testimonial carousels (also compliance-illegal — see rules doc)
- Hero video with music
- Chatbot widget
- Cookie modal (avoid by choosing analytics that doesn't need one)
- "Book a strategy call" CTA language — reads as sales
- Gradient meshes, blob shapes, animated background particles

## Design brief to yourself before building

Would a careful, wealthy, 60-year-old, referred stranger — who has spent 40 years spotting people trying to sell them things — trust this page? If any element makes them feel *marketed to*, remove it.
