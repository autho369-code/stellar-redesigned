PASTE FROM HERE (after the CONTEXT BLOCK)

# R8 — About/team and a better proposal form

## A. `/about` and `/about/mirsad-cerimovic`
Keep URLs, titles and H1s. Layout: story timeline ("From a small firm to 29 associations" — founding year is **2007**, from `brand.foundedYear`; this is confirmed, do not flag it for confirmation and do not mention 2012), **real team photos** with name, role and credentials (only people and credentials Jojo confirms; placeholder cards in preview only), "Independent, and staying that way" values, the approved contract line ("No long-term contracts — cancel with 60 days notice"), the Kenmore results card (R6 — $150,000 saved on a roof replacement at 6150 N Kenmore, Chicago; no invented details), memberships (CAI, Illinois licence — no BBB), **office photos + map link**, final CTA. `Person` JSON-LD on the principal page stays.

Office photos are in `/workspace/stellar/redesign/assets/` (see `SOURCES.md`):
- Exterior: `office_exterior_5107_n_western_streetview.jpg` — Google Street View of the 5107 N Western Ave storefront (blue Stellar awning, June 2019). This is © Google. Keep attribution if you use it, or replace it with a new photo from Jojo. A Maps UI capture with Google's credit visible is `office_exterior_5107_n_western_streetview_maps_ui.jpg`.
- Interior: `office_interior_workstations.jpg` and `office_interior_desks.jpg` — work-area photos from this business's public listing photo set. Use these on `/about` and `/contact` (office block). Do not use managed-building photos (for example a "Dominion Tower" lobby) as the office. If Jojo later provides a sharper original, swap it in via the brand/assets config.

## B. `/contact` — multi-step proposal form (keep URL, Web3Forms backend, every field the backend gets today, `lead_source`, `/contact/thanks` redirect and `Contact Form Submit` event)
Rebuild with shadcn `Form` + `react-hook-form` + `zod`:
1. Step 1 "Your association": property type (Condo / HOA / Townhome / Other), number of units (prefilled from `?units=`), neighborhood or city, current situation (self-managed / switching managers / new building).
2. Step 2 "Timing & priorities": when the current contract ends, top 3 concerns (chips), optional message.
3. Step 3 "You": name, role on board, email, phone, preferred contact method.
- Progress indicator, back button, inline validation, keyboard/screen-reader friendly, autosave to `sessionStorage`, honeypot spam field.
- Side panel: what happens next ("written flat-fee proposal within two business days"), the pricing line, **"No long-term contracts — cancel with 60 days notice."**, one review card, phone, and a small office photo or map link to 5107 N Western Ave #1S.
- Optional: "Prefer to talk? Book a 20-minute board consultation" using a Cal.com embed **only if Jojo provides a Cal.com link**; lazy-load it on click.
- Analytics: keep `Contact Form Submit` (props `source`, `page`) firing once on success. Optionally add `Proposal Form Step` with props `step`, `source` — nothing else; never send personal data.

Acceptance: a mocked submit posts the same field names Web3Forms receives today plus any new ones, lands on `/contact/thanks`, fires `Contact Form Submit` once; axe clean; R0 tests pass.
