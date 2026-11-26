PASTE FROM HERE (after the CONTEXT BLOCK)

# R0 — Safety net and baseline (no visible changes)

Goal: make every later redesign PR provably safe. Nothing a visitor can see changes in this phase.

1. **URL inventory test.** Add `tests/urls.spec.ts` (Playwright). It reads the live `sitemap.xml` list committed as `tests/fixtures/urls.json` (150 URLs; generate it from today's production sitemap) and for each URL on the preview asserts: status 200, `<link rel="canonical">` equals the production URL, robots meta unchanged from the fixture (`index` vs `noindex`), exactly one `<h1>`, `<title>` not empty, JSON-LD parses. Store the baseline title/H1/meta description/canonical/robots/JSON-LD `@type` list per URL in the fixture so later PRs can diff them.
2. **Visual baseline.** Playwright screenshots of these templates at 1440×900 and 390×844: `/`, `/pricing`, `/services/condominium-management`, `/services/hoa-management`, `/property-management-chicago`, one neighborhood page, `/reviews`, `/about`, `/contact`, `/blog`, one blog post, `/tools/compare-management-proposals`, `/board-toolkit`. Commit as baselines (do not fail CI on diffs yet — just attach the diff images to each PR).
3. **Tracking test.** A Playwright test that stubs `window.va` / the analytics `track` call and asserts the existing events fire with their current names and property keys: tel click → `Phone Click`, mailto click → `Email Click`, blog CTA click → `Proposal CTA Click`, successful contact submit (mock the Web3Forms request) → `Contact Form Submit` and navigation to `/contact/thanks`.
4. **Accessibility.** Add `@axe-core/playwright` checks on the same template list; record current violations as the baseline (report-only).
5. **Lighthouse CI.** Add `@lhci/cli` with `lighthouserc.json` running mobile on `/`, `/pricing`, `/services/condominium-management`, one neighborhood page, one blog post, `/contact`. Assertions as warnings for now: performance ≥ 0.9, accessibility ≥ 0.95, seo ≥ 1, LCP ≤ 2500, CLS ≤ 0.05. Run it against the Vercel preview URL in a GitHub Action on every PR (use `treosh/lighthouse-ci-action` or `lhci autorun`).
6. **Bundle report.** Add `rollup-plugin-visualizer` (dev only) and output `stats.html` on build; note in the PR the current gzip size of every chunk and which routes load `article-content-*.js`.
7. Optional (monthly, not CI): document how to run `npx unlighthouse --site https://www.stellarpropertygroup.com` for a full-site scan.

Acceptance: CI is green on an unchanged site; PR description lists the 150-URL fixture count, the bundle sizes and the Lighthouse baseline. **No production-visible diff.**
