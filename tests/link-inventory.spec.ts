import { test, expect } from '@playwright/test';

/**
 * R3: every link the old header and footer had (recorded 2026-11-26, before
 * the new header and footer) must still be in the static HTML of every page.
 * A link may move between menus; it may not disappear. Proposal links are
 * matched by path only, because R3 changed their query string on purpose.
 */
const LEGACY_HEADER = [
  '/',
  '/services',
  '/services/condominium-management',
  '/services/hoa-management',
  '/services/townhome-management',
  '/services/high-rise-condominium-management',
  '/services/small-condo-association-management',
  '/services/financial-management',
  '/services/maintenance-coordination',
  '/services/board-support',
  '/services/violation-management',
  '/services/resale-disclosures',
  '/blog',
  '/blog/topic/board-governance-illinois-law',
  '/blog/topic/association-finance-reserves',
  '/blog/topic/building-operations-capital-planning',
  '/blog/topic/choosing-association-management',
  '/board-toolkit',
  '/tools/compare-management-proposals',
  '/pricing',
  'https://stellarpropertygrp.appfolio.com/connect/',
  '/condo-living',
  '/resources',
  '/resources?form=violation',
  '/resources?form=nomination',
  '/reviews',
  '/service-areas',
  '/property-management-chicago',
  '/property-management-north-shore',
  '/about',
  '/about/mirsad-cerimovic',
  '/contact',
  'tel:+17737280652',
];

const LEGACY_FOOTER = [
  '/',
  '/services/condominium-management',
  '/services/hoa-management',
  '/services/townhome-management',
  '/services/financial-management',
  '/services/maintenance-coordination',
  '/services/board-support',
  '/services/violation-management',
  '/services/high-rise-condominium-management',
  '/services/small-condo-association-management',
  '/services/resale-disclosures',
  '/about',
  '/about/mirsad-cerimovic',
  '/pricing',
  '/service-areas',
  '/property-management-chicago',
  '/property-management-north-shore',
  '/reviews',
  '/blog',
  '/condo-living',
  '/board-toolkit',
  '/tools/compare-management-proposals',
  '/resources',
  '/contact',
  '/privacy-policy',
  '/terms-of-service',
  '/ai-info',
  '/sitemap.xml',
  'https://portier369.com',
  'https://www.google.com/maps?cid=6022006747972898171',
  'https://www.yelp.com/biz/stellar-property-management-chicago',
  'https://www.linkedin.com/company/stellar-property-group-inc',
  'tel:+17737280652',
  'mailto:mirsad@stellarpropertygroup.com',
];

const PAGES = ['/', '/pricing', '/services/condominium-management', '/property-management-wilmette', '/blog', '/contact'];

function hrefsIn(html: string, tag: 'header' | 'footer'): Set<string> {
  const block = html.match(new RegExp(`<${tag}[\\s>][\\s\\S]*?</${tag}>`))?.[0] ?? '';
  const found = new Set<string>();
  for (const m of block.matchAll(/<a\b[^>]*\bhref="([^"]*)"/g)) {
    const href = m[1].replace(/&amp;/g, '&');
    found.add(href);
    // Proposal links: also record the bare path.
    if (href.startsWith('/contact?')) found.add('/contact');
  }
  return found;
}

for (const path of PAGES) {
  test(`link inventory ${path}`, async ({ request }) => {
    const html = await (await request.get(path)).text();
    const header = hrefsIn(html, 'header');
    const footer = hrefsIn(html, 'footer');
    const all = new Set([...header, ...footer]);
    expect(header.size, 'header links found').toBeGreaterThan(20);
    expect(footer.size, 'footer links found').toBeGreaterThan(30);
    const missing = [...new Set([...LEGACY_HEADER, ...LEGACY_FOOTER])].filter((href) => !all.has(href));
    expect(missing, 'old header/footer links missing from the new header and footer').toEqual([]);
    // Links that were in the footer stay in the footer (sitewide crawl paths).
    expect(LEGACY_FOOTER.filter((href) => !footer.has(href)), 'old footer links missing from the footer').toEqual([]);
  });
}
