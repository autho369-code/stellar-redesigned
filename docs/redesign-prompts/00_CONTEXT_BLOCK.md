PASTE FROM HERE

## CONTEXT BLOCK — paste once at the start of every Claude session, before any R-phase

You are redesigning the website for **Stellar Property Management** (legal name Stellar Property Group Inc.), https://www.stellarpropertygroup.com/ — a Chicago condo, HOA and townhome association-management firm. Office: 5107 N Western Ave #1S, Chicago, IL 60625. Phone 773-728-0652. 29 associations, about 1,422 residences.

**What the site is today (verified Nov 26, 2026):** Vite + React SPA with prerendered static HTML per route, hosted on Vercel. Tailwind CSS **v3** (custom colors `ink #0D2743`, `paper #F6F8FA`, `navy-*`), fonts Inter Variable + Fraunces Variable via Fontsource, `react-helmet(-async)` for head tags, `lucide-react`, `motion`, `@vercel/analytics` + Speed Insights. 150 URLs in `/sitemap.xml` (75 blog posts, 45 neighborhood pages). Main bundle `/assets/index-*.js` ≈ 978 KB raw / 242 KB gzip, plus `article-content-*.js` ≈ 630 KB raw / 176 KB gzip that is preloaded on the homepage. Lighthouse mobile today: home perf 84 (LCP 4.4 s), /pricing 100, condo service page 99; accessibility 96–100. The site is already faster than every competitor we tested — **do not trade that away for visual effects.**

**Work rules (apply to every phase):**
1. One phase = one branch = one PR = one Vercel **preview URL** for Jojo. Never push straight to production. After Jojo checks the preview, tell him exactly how to promote it.
2. **No URL changes.** Every one of the 150 sitemap URLs must keep returning 200 with the same path, canonical and indexability. If a URL truly must change, stop and ask; any approved change needs a 301 in `vercel.json` and a sitemap update.
3. **Preserve tracking.** Keep every existing Vercel Analytics event name and property exactly: `Contact Form Submit`, `Phone Click`, `Email Click`, `Proposal CTA Click`, `Proposal Tool Started`, `Proposal Tool Completed`, `Board Toolkit Download`, `Review Link Click`. Max 2 string properties per event. Keep `?source=` → `lead_source` on the contact form, keep `/contact/thanks` (noindex, not in sitemap). Keep every existing "Request a flat-fee proposal" CTA block and its `?source=` value.
4. **Pricing wording (exact):** "starting at $30 per unit per month, everything included, with no extra fees." Customized flat fee, never a percentage of budget. Never show any other per-unit number and never publish an average fee.
5. **No BBB** link, badge, logo, mention or `sameAs` anywhere.
6. Team voice ("we", "our team"); where a sign-off is used: **Your Property Management Team**.
7. Never invent facts, numbers, awards, client names, logos or testimonials. Where content is missing, render a clearly marked placeholder in the preview (e.g. `[CONFIRM WITH JOJO: …]`) and list it in the PR description. Do not ship placeholders to production.
8. Founding year is **2007** (`brand.foundedYear = 2007`). The site's "since 2007" is correct. Do not mention 2012 as a founding year and do not ask about it again.
9. Do not mention ownership changes, a new company name or any Dec 31, 2026 transition in public copy.
10. Brand must be swappable: after phase R1, the company name, short name, logo, phone, email, address, colors, fonts, founding year, contract terms, stats, review link and social links come only from `src/brand/brand.config.ts` + CSS variables. No hard-coded brand strings or hex colors in components.
11. Performance budget per template (mobile Lighthouse): Performance ≥ 90, LCP ≤ 2.5 s, CLS ≤ 0.05, TBT ≤ 200 ms, Accessibility ≥ 95, SEO = 100. JS on non-blog pages ≤ 170 KB gzip.
12. Before every PR: lint, type-check, build, prerender, and confirm the changed content is in the **static HTML** (view-source), not only in the JS-rendered DOM. Run the R0 test suite and attach the results.
13. Coordinate with the content prompts Jojo is pasting separately (`phase1b_service_page_titles.md`, `phase2_reverse_silo_linking.md`, `phase3_neighborhood_pages.md`, `phase4_switch_guide_and_cost.md`). Do not overwrite their titles, meta descriptions, H1s, body copy or internal links. R-phases change layout, components and styling; they move copy into new components without rewriting it unless the phase says so.

**Approved facts (confirmed by Jojo, Nov 26, 2026 — use these; do not invent anything else):**
- **Founded 2007.** The site's "since 2007" is correct.
- **Office:** 5107 N Western Ave #1S, Chicago, IL 60625. Office photos for the redesign are in `/workspace/stellar/redesign/assets/` (see `SOURCES.md` in that folder): a Google Street View of the storefront (blue Stellar awning, "5107", phone and logo; image date June 2019) and two interior photos of the work area, from this business's public listing photo set. For the live site, prefer a new storefront photo Jojo takes if he has one; the Street View image is © Google and must keep attribution (or be replaced). Do not use managed-building photos (for example a "Dominion Tower" lobby) as if they were the office.
- **Case study (approved, may go live):** 6150 N Kenmore, Chicago — a roof replacement that saved the association $150,000. Do not invent the year, building size, unit count, vendor, neighborhood nickname, or any other detail. If a template needs them, use clearly marked placeholders such as `[CONFIRM WITH JOJO: year of the roof project]`, `[CONFIRM WITH JOJO: number of units at 6150 N Kenmore]`, `[CONFIRM WITH JOJO: roofing vendor]`, and do not ship those placeholders to production.
- **Contracts (approved selling point, use this wording):** "No long-term contracts — cancel with 60 days notice."
