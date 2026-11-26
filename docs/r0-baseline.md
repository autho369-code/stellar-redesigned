# R0 baseline (2026-11-26)

Built from `main` at the time of this PR. Nothing visible changed in R0.

## URLs
`tests/fixtures/urls.json` holds 150 URLs with title, H1, meta description, canonical, robots and JSON-LD types.

## Test run against the local production build
192 passed, 1 skipped (contact-form submit test, not written yet so that no real submission is ever sent).

## Accessibility baseline (axe, 13 templates, report-only)
- `color-contrast` (serious): 123 elements. Mostly small pale text.
- `landmark-unique` (moderate): 1.
- `label-content-name-mismatch` (serious): 1.

## Bundle (largest JS chunks)
| Chunk | Raw | Gzip |
| --- | --- | --- |
| `index-Bc54Ahy1.js` | 953 KB | 231 KB |
| `article-content-C591fmZv.js` | 615 KB | 168 KB |
| `ownerAuth-BiIXBrHf.js` | 210 KB | 54 KB |
| `area-data-Bw01vtEh.js` | 52 KB | 15 KB |
| `ArthurConcierge-CSHfn59Y.js` | 18 KB | 7 KB |
| `KnowledgeAdmin-BjzlkpPJ.js` | 19 KB | 6 KB |

`article-content` chunk referenced by the homepage HTML: yes; by /pricing: yes.

## Lighthouse
Runs in GitHub Actions on every preview deploy (`preview-checks.yml`), warnings only. Owner-supplied baseline from the redesign brief: home performance 84 (LCP 4.4 s), /pricing 100, condo service page 99, accessibility 96 to 100.

## Run it yourself
- `npm run build && npm run test:fixture` refreshes the URL fixture (only when a content PR is meant to change titles or headings).
- `npx vite preview --port 4173` then `PW_CHANNEL=chrome npx playwright test`.
- `npm run build:stats` writes `stats.html`.
- Full-site scan, monthly, not in CI: `npx unlighthouse --site https://www.stellarpropertygroup.com`.
