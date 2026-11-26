PASTE FROM HERE (after the CONTEXT BLOCK)

# R1 — Brand config + design tokens (looks the same; becomes swappable) + 3 small fixes

Goal: one file and one stylesheet control the brand, so a future name/logo/color change is a config edit, not a rewrite. The site should look pixel-identical except the three fixes at the end.

## A. `src/brand/brand.config.ts`
Create a typed config (export `brand`) with: `name` ("Stellar Property Management"), `legalName` ("Stellar Property Group Inc."), `shortName` ("Stellar"), `tagline`, `logo` ({ svg path or component, alt }), `favicon`, `ogImage`, `phone` ({ display "773-728-0652", e164 "+17737280652" }), `email`, `address` (street, unit, city, state, zip, geo), `hours`, `foundedYear` (2007 — confirmed by Jojo Nov 26, 2026), `contracts` ({ cancellationDays: 60, line: "No long-term contracts — cancel with 60 days notice" }), `stats` ({ associations: 29, residences: 1422, retention: keep today's value }), `pricing` ({ startingPerUnit: 30, line: "starting at $30 per unit per month, everything included, with no extra fees" }), `reviewUrl` ("https://g.page/r/CXsN7jc7d5JTEBM/review"), `portalUrl`, `social` (only the profiles already linked today; never BBB), `signOff` ("Your Property Management Team").
- Replace every hard-coded occurrence in components, head tags, JSON-LD, footer, CTA blocks and `llms.txt`/`ai-info` generators with reads from `brand`. Keep the rendered text identical.
- If pricing already lives in `src/data/business.ts`, make `brand.pricing` the single source and re-export from there so nothing breaks.

## B. Tokens as CSS variables (stay on Tailwind v3)
1. In `src/styles/tokens.css` define on `:root`, as space-separated RGB channels so Tailwind alpha still works:
   `--color-ink: 13 39 67; --color-paper: 246 248 250; --color-navy-50 … --color-navy-900` (copy today's exact values), `--color-gold-300 / -500 / -600` (today's italic accent), `--color-accent` (today's light-blue CTA), `--color-accent-ink`, `--color-surface: 255 255 255; --color-line`, `--color-muted` (must reach 4.5:1 on paper and white), `--color-star: 245 179 1; --color-success; --color-danger`, `--font-display: "Fraunces Variable", Fraunces, Georgia, serif; --font-body: "Inter Variable", Inter, system-ui, sans-serif`, `--radius-sm: 6px; --radius-md: 10px; --radius-lg: 16px; --radius-arch: 999px 999px 0 0`, `--shadow-card`, spacing rhythm `--section-y: clamp(4rem, 8vw, 7rem)`.
2. In `tailwind.config` map colors to `rgb(var(--color-…) / <alpha-value>)` and fonts/radius to the variables. Existing class names (`bg-ink`, `text-navy-600`, `bg-paper` …) must keep working unchanged.
3. Add `[data-brand="preview-alt"]` with a second palette (e.g. deep green + brass) **only** for the brand-swap dry run; do not use it anywhere in production.
4. Grep for raw hex/rgb values in components and replace with tokens.

## C. Three small fixes
1. `robots.txt`: the line `RSS: https://www.stellarpropertygroup.com/rss.xml` is not a valid directive (Lighthouse SEO 92). Change it to a comment: `# RSS: https://www.stellarpropertygroup.com/rss.xml`. Keep every other line.
2. Mobile: the floating "Ask Arthur" button overlaps the hero "Call 773-728-0652" link at 390 px width. Give the widget `bottom: calc(env(safe-area-inset-bottom) + 88px)` on screens < 768 px (it will sit above the sticky action bar added in R3), or collapse it to a 48 px round icon button with `aria-label="Ask Arthur"`.
3. Fix any contrast failures Lighthouse reports on `/pricing` and the service pages (muted text on paper) by using `--color-muted`.

Acceptance: R0 URL/tracking tests pass; visual diffs show no change except the chat button on mobile; switching `<html data-brand="preview-alt">` in the preview recolors the whole site; `grep -R "773-728-0652\|Stellar Property" src/components` returns nothing outside the config; Lighthouse SEO = 100 on home.
