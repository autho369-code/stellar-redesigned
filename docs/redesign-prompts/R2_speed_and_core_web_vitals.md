PASTE FROM HERE (after the CONTEXT BLOCK)

# R2 — Speed: get the homepage LCP under 2.5 s on mobile

Today: home mobile Lighthouse 84, LCP 4.4 s (the LCP element is the hero paragraph, delayed by render, not by network). Every page downloads `index-*.js` (≈242 KB gzip) and the homepage also preloads `article-content-*.js` (≈176 KB gzip) — all 75 posts' content.

1. **Split article content per post.** Change the blog data so each post's body is its own dynamic import (`import.meta.glob('./posts/*.ts')` or per-slug lazy modules). The blog index needs only titles/excerpts/dates/categories. Non-blog routes must not download or modulepreload any article body. Prerendered HTML for each post must still contain the full article text.
2. **Route-level code splitting** with `React.lazy` for heavy, below-the-fold or route-specific pieces (proposal scorecard tool, board toolkit, Ask Arthur widget — load the widget on idle or on first interaction).
3. **Hero must paint immediately.** Remove opacity/translate entrance animations from above-the-fold hero text, CTA and image (keep subtle motion below the fold, honour `prefers-reduced-motion`). Make sure hydration does not re-mount the hero (no flash).
4. **Fonts.** Load only the `latin` subsets of Inter and Fraunces (drop cyrillic, greek, vietnamese files), `<link rel="preload" as="font" crossorigin>` the two latin woff2 files used above the fold, keep `font-display: swap`, add size-adjusted fallbacks to avoid layout shift.
5. **Images.** Serve hero/neighborhood images as AVIF/WebP with explicit width/height, `fetchpriority="high"` on the single LCP image, `loading="lazy"` elsewhere, responsive `srcset`. Keep alt text.
6. **Third-party.** Confirm only Vercel Analytics + Speed Insights load (both deferred).
7. Turn the Lighthouse CI assertions from R0 into **errors** for performance ≥ 0.9 and LCP ≤ 2500 on the six templates.

Acceptance: mobile Lighthouse on the preview home ≥ 95 and LCP ≤ 2.5 s (attach the report); non-blog routes ship ≤ 170 KB gzip JS; blog posts still prerender full text; R0 URL/tracking tests pass; no visual change except the hero appears without fade-in.
