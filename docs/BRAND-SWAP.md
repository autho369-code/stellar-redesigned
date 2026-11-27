# Brand swap (Stellar → new name)

Stellar closes Dec 31, 2026 and the business moves to Meho. The new name is not
decided. This note says what changes when it is, and how to rehearse it.

## Where the brand lives
- `src/brand/brand.config.ts`: name, legal name, short name, phone, email,
  address, founded year, contract line, pricing wording, review link, portal.
- `src/styles/tokens.css`: colors, fonts, radii. `[data-brand="preview-alt"]`
  is a second palette for rehearsals only.
- `src/data/business.ts`: reads from the config.
- Typed by hand as plain text: about 96 source files (blog posts, area pages,
  service pages, JSON-LD strings), `public/llms.txt`, `index.html`. This is
  copy, not code, so it is swapped by a scripted replace and reviewed as a diff,
  not rewritten page by page.

## Rehearse it (changes nothing in the working tree)
```
npm run brand:dry-run
# or with your own values:
node scripts/brand-swap-dry-run.mjs --name "New Name" --legal "New Name Inc." \
  --short NewName --domain newdomain.com --phone 312-555-0100
```
The script copies the repo to a temp folder, replaces name, domain and phone,
runs the full build (prerender, SEO check, link check, uniqueness check), and
prints how many built pages still contain the old name, domain or phone.
Last run (Nov 27, 2026, fictional "Northline Association Management"): build
passes, 0 built files still contain "Stellar", the old domain or the old phone.

## Real swap, in order
1. Decide the name, domain, phone and email. Do not guess them.
2. Branch. Edit `brand.config.ts`. Run the same replace rules as the script on
   `src/`, `public/`, `index.html` (the script's `rules` array is the list).
3. Replace `public/logo-icon.svg`, the favicon and `public/images/*-og.jpg`.
4. `npm run build`, `node scripts/seo-diff.mjs` (every title/description change
   is expected; canonicals and robots should only change if the domain changed).
5. If the domain changes: 301 every old URL to the same path on the new domain
   in `vercel.json`, keep the old domain live for at least a year, add the new
   property in Search Console and use the Change of Address tool, update Google
   Business Profile, directories, `sameAs` links, the AppFolio portal URL.
6. Merge, verify live, IndexNow every changed URL.

## Not text-replaceable (needs the owner)
Logo and og image files, Google Business Profile, directory listings, the
AppFolio portal URL, the Google review link, `sameAs` profiles, the 301 plan.
