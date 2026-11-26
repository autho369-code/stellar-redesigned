PASTE FROM HERE (after the CONTEXT BLOCK)

# R3 — Component kit, simpler header, sticky mobile action bar, trust bar

Goal: a calmer, more confident frame on every page. Today the header has 7 menus in tiny letter-spaced capitals ("Agents & Lenders" wraps to three lines at 1440 px) and nothing on the page shows social proof above the fold.

## A. Install the component kit
- Initialise **shadcn/ui** for Vite (`npx shadcn@latest init`), pointing its CSS variables at the R1 tokens (do not introduce a second palette). Add only: `button, card, accordion, sheet, navigation-menu, dialog, tabs, input, label, select, textarea, form, badge, separator, tooltip`. These are copied into `src/components/ui/` (Radix under the hood, MIT).
- Use `lucide-react` icons only. No Aceternity-style effects. From Magic UI copy at most `number-ticker` and `marquee` (they are used in R4/R6), and wrap both in `prefers-reduced-motion` guards.

## B. Header (all pages)
- Height 72 px desktop / 60 px mobile; sticky with subtle shadow after scroll.
- Left: logo from `brand.logo` (drop the tiny three-line tagline under the wordmark on mobile).
- Center nav (sentence case, 15 px, normal tracking): **Services ▾**, **Pricing**, **Neighborhoods ▾**, **Reviews**, **Resources ▾**, **About ▾**.
  - Services mega-menu: the 10 existing `/services/*` pages grouped "By building type" (condominium, high-rise, small condo, HOA, townhome) and "What we handle" (financial, maintenance, board support, violations, resale disclosures) + a card "See pricing — starting at $30 per unit per month".
  - Neighborhoods: `/property-management-chicago`, `/property-management-north-shore`, `/service-areas` + the top 8 neighborhood pages by GSC clicks (read them from a config list).
  - Resources: blog, the 4 blog topic hubs, `/board-toolkit`, `/tools/compare-management-proposals`, `/condo-living`.
  - About: `/about`, `/about/mirsad-cerimovic`, `/reviews`, `/contact`. Move "Residents" and "Agents & Lenders" items into a small utility row above the header (desktop) — "Residents: Pay & portal", "Agents & lenders: Resale documents", phone — and into the mobile sheet.
- Right: phone link (`data-track-location="header"`) + primary button **Get my flat-fee proposal** → `/contact?source=header` (keeps `Proposal CTA Click` behaviour already used for header CTAs; if the header CTA did not fire it before, do not start firing it now).
- Mobile: shadcn `Sheet` menu with large 48 px rows; all existing links reachable.
- Every link that exists in today's header and footer must still exist somewhere in the new header/footer (add a test listing them).

## C. Sticky mobile action bar (< 768 px)
Fixed bottom bar, 64 px + safe-area: **Call** (tel, `data-track-location="sticky-bar"`) | **Proposal** (`/contact?source=sticky-bar`). Hide it on `/contact` and `/contact/thanks`. Make sure "Ask Arthur" sits above it and nothing overlaps.

## D. Trust bar component `<TrustBar />`
A slim row used directly under every hero: `Condo & HOA only — no rentals` · `{brand.stats.associations} associations · ≈{brand.stats.residences} residences` · `Chicago office on N Western Ave` · `Illinois-licensed · CAI member` · `Flat fee from $30/unit, everything included` · `No long-term contracts — 60-day cancellation` (full approved line, "No long-term contracts — cancel with 60 days notice", can appear in a tooltip or on /pricing). Values from `brand`. Do **not** show a star rating number here yet (see R6). No BBB.

## E. Footer
Four columns (Services, Neighborhoods, Resources, Company) + NAP block from `brand` (matches Google Business Profile exactly) + review link + portal link + "Your Property Management Team". Keep every current footer link.

Acceptance: R0 tests pass (URLs, events, link inventory); axe shows no new violations; header fits on one line from 1024 px up; visual diff attached for the 13 templates; Lighthouse perf on home still ≥ 95.
