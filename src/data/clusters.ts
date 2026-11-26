/**
 * Reverse-silo cluster map for the blog (growth brief, Phase 2, 2026-11-26).
 *
 * Every published guide belongs to exactly ONE cluster. A cluster has one
 * pillar guide and one money page. This file drives:
 *   - SeriesNav ("More in this guide") at the end of each article,
 *   - NearbyAreas ("Association management in nearby neighborhoods"),
 *   - the curated guides block on the area pages,
 *   - scripts/check-links.mjs, which fails the build when a required link is
 *     missing from the built HTML.
 *
 * Body-link rules (one primary money page per guide, the pillar link) stay in
 * src/data/post-silos.ts and are enforced by scripts/verify-content-silos.mjs.
 *
 * To add a guide: add it to one cluster's `members` with three area slugs
 * from src/data/neighborhoods.ts. Do not put a guide in two clusters.
 */
import type { MoneyPage } from './post-silos';

export interface ClusterMember {
  slug: string;
  /** Area pages for the NearbyAreas module (slugs from neighborhoods.ts). */
  areas: string[];
  /** Sibling guides that "More in this guide" must always show. */
  siblings?: string[];
  /** Pillar guides only: guides from other clusters to show as related. */
  cross?: string[];
}

export interface Cluster {
  id: string;
  name: string;
  /** The pillar guide. It is also listed in `members`. */
  pillar: string;
  money: MoneyPage;
  members: ClusterMember[];
}

export const clusters: Cluster[] = [
  {
    id: 'A',
    name: 'Section 22.1 resale disclosures',
    pillar: 'illinois-section-22-1-disclosure-board-guide',
    money: '/services/resale-disclosures',
    members: [
      { slug: 'illinois-section-22-1-disclosure-board-guide', areas: ['lincoln-park', 'lakeview', 'lincoln-square'], cross: ['illinois-condo-hoa-collection-policy-january-2027', 'first-time-condo-buyer-guide-chicago'] },
      { slug: 'illinois-22-1-disclosure-packet-checklist', areas: ['logan-square', 'wicker-park', 'bucktown'] },
      { slug: 'illinois-22-1-response-workflow', areas: ['roscoe-village', 'old-town', 'lincoln-park'] },
    ],
  },
  {
    id: 'B',
    name: 'Reserves and capital funding',
    pillar: 'reasonable-reserves-illinois-condo-law',
    money: '/services/financial-management',
    members: [
      { slug: 'reasonable-reserves-illinois-condo-law', areas: ['edgewater', 'uptown', 'rogers-park'], cross: ['vintage-chicago-condo-capital-planning'] },
      { slug: 'condo-reserve-funds-explained', areas: ['hyde-park', 'kenwood', 'south-loop'], siblings: ['fannie-freddie-condo-reserve-15-percent-2027'] },
      { slug: 'how-to-read-condo-reserve-study', areas: ['west-loop', 'loop', 'edgewater'], siblings: ['fannie-freddie-condo-reserve-15-percent-2027'] },
      { slug: 'fannie-freddie-condo-reserve-15-percent-2027', areas: ['uptown', 'rogers-park', 'hyde-park'], siblings: ['condo-reserve-funds-explained'] },
      { slug: 'fannie-freddie-condo-eligibility-board-guide', areas: ['kenwood', 'south-loop', 'west-loop'], siblings: ['illinois-association-reserve-funds-fdic-coverage'] },
      { slug: 'illinois-association-reserve-funds-fdic-coverage', areas: ['loop', 'edgewater', 'uptown'], siblings: ['condo-hoa-capital-project-loan-preparation', 'fannie-freddie-condo-eligibility-board-guide'] },
      { slug: 'condo-hoa-capital-project-loan-preparation', areas: ['rogers-park', 'hyde-park', 'kenwood'], siblings: ['illinois-association-reserve-funds-fdic-coverage'] },
      { slug: 'condo-special-assessments-illinois', areas: ['south-loop', 'west-loop', 'loop'], siblings: ['condo-hoa-capital-project-loan-preparation'] },
    ],
  },
  {
    id: 'C',
    name: 'Delinquency and collections',
    pillar: 'illinois-condo-hoa-collection-policy-january-2027',
    money: '/services/financial-management',
    members: [
      { slug: 'illinois-condo-hoa-collection-policy-january-2027', areas: ['avondale', 'irving-park', 'portage-park'] },
      { slug: 'condo-hoa-delinquency-escalation-process', areas: ['mayfair', 'north-park', 'albany-park'], siblings: ['illinois-association-late-fees-interest-policy'] },
      { slug: 'illinois-condo-association-liens-delinquency', areas: ['edison-park', 'ukrainian-village', 'avondale'], siblings: ['illinois-association-late-fees-interest-policy'] },
      { slug: 'illinois-condo-assessment-collection-possession-action', areas: ['irving-park', 'portage-park', 'mayfair'], siblings: ['illinois-association-late-fees-interest-policy', 'illinois-condo-association-liens-delinquency'] },
      { slug: 'illinois-association-late-fees-interest-policy', areas: ['north-park', 'albany-park', 'edison-park'], siblings: ['illinois-condo-assessment-collection-possession-action'] },
    ],
  },
  {
    id: 'D',
    name: 'Budgets and financial reporting',
    pillar: 'illinois-condo-hoa-budget-adoption-guide',
    money: '/services/financial-management',
    members: [
      { slug: 'illinois-condo-hoa-budget-adoption-guide', areas: ['ravenswood', 'andersonville', 'lincoln-square'], cross: ['reasonable-reserves-illinois-condo-law'] },
      { slug: 'condo-hoa-annual-budget-workbook', areas: ['roscoe-village', 'bucktown', 'wicker-park'], siblings: ['read-condo-hoa-financial-statements'] },
      { slug: 'read-condo-hoa-financial-statements', areas: ['ravenswood', 'andersonville', 'lincoln-square'], siblings: ['cook-county-property-tax-appeal-condo-association', 'condo-hoa-annual-budget-workbook'] },
      { slug: 'cook-county-property-tax-appeal-condo-association', areas: ['roscoe-village', 'bucktown', 'wicker-park'], siblings: ['illinois-condo-owners-independent-audit-rights', 'read-condo-hoa-financial-statements'] },
      { slug: 'illinois-condo-owners-independent-audit-rights', areas: ['ravenswood', 'andersonville', 'lincoln-square'], siblings: ['cook-county-property-tax-appeal-condo-association'] },
    ],
  },
  {
    id: 'E',
    name: 'Insurance',
    pillar: 'condo-master-policy-vs-ho6-board-guide',
    money: '/services/financial-management',
    members: [
      { slug: 'condo-master-policy-vs-ho6-board-guide', areas: ['gold-coast', 'river-north', 'streeterville'], cross: ['who-pays-condo-water-leak-illinois'] },
      { slug: 'hoa-insurance-costs-illinois', areas: ['old-town', 'loop', 'south-loop'], siblings: ['condo-hoa-directors-officers-insurance-guide'] },
      { slug: 'condo-hoa-insurance-renewal-checklist', areas: ['lakeview', 'gold-coast', 'river-north'], siblings: ['condo-hoa-directors-officers-insurance-guide'] },
      { slug: 'condo-hoa-directors-officers-insurance-guide', areas: ['streeterville', 'old-town', 'loop'], siblings: ['hoa-insurance-costs-illinois'] },
      { slug: 'illinois-association-fidelity-insurance-requirements', areas: ['south-loop', 'lakeview', 'gold-coast'], siblings: ['illinois-condo-insurance-deductible-charge-owner'] },
      { slug: 'illinois-condo-insurance-deductible-charge-owner', areas: ['river-north', 'streeterville', 'old-town'], siblings: ['illinois-association-fidelity-insurance-requirements'] },
    ],
  },
  {
    id: 'F',
    name: 'Choosing or switching a management company',
    pillar: 'switch-condo-management-companies-chicago',
    money: '/services/condominium-management',
    members: [
      { slug: 'switch-condo-management-companies-chicago', areas: ['rogers-park', 'edgewater', 'lakeview'] },
      { slug: 'score-condo-hoa-management-proposals', areas: ['lincoln-park', 'lincoln-square', 'evanston'], siblings: ['community-association-management-agreement-review'] },
      { slug: 'community-association-management-agreement-review', areas: ['uptown', 'andersonville', 'rogers-park'], siblings: ['how-many-associations-should-community-manager-handle'] },
      { slug: 'verify-illinois-community-association-manager-license', areas: ['edgewater', 'lakeview', 'lincoln-park'], siblings: ['how-many-associations-should-community-manager-handle'] },
      { slug: 'how-many-associations-should-community-manager-handle', areas: ['lincoln-square', 'evanston', 'uptown'], siblings: ['condominium-property-management-chicago-what-board-members-should-expect', 'verify-illinois-community-association-manager-license'] },
      { slug: 'condominium-property-management-chicago-what-board-members-should-expect', areas: ['andersonville', 'rogers-park', 'edgewater'], siblings: ['self-managed-condo-association-problems', 'how-many-associations-should-community-manager-handle'] },
      { slug: 'self-managed-condo-association-problems', areas: ['lakeview', 'lincoln-park', 'lincoln-square'], siblings: ['the-technology-behind-our-management', 'condominium-property-management-chicago-what-board-members-should-expect'] },
      { slug: 'the-technology-behind-our-management', areas: ['evanston', 'uptown', 'andersonville'], siblings: ['illinois-management-company-segregated-accounts-commingling', 'self-managed-condo-association-problems'] },
      { slug: 'illinois-management-company-segregated-accounts-commingling', areas: ['rogers-park', 'edgewater', 'lakeview'], siblings: ['ai-in-condo-management', 'the-technology-behind-our-management'] },
      { slug: 'ai-in-condo-management', areas: ['lincoln-park', 'lincoln-square', 'evanston'], siblings: ['illinois-management-company-segregated-accounts-commingling'] },
    ],
  },
  {
    id: 'G',
    name: 'Rules, fines and violations',
    pillar: 'adopting-enforcing-condo-hoa-rules-illinois',
    money: '/services/violation-management',
    members: [
      { slug: 'adopting-enforcing-condo-hoa-rules-illinois', areas: ['wicker-park', 'logan-square', 'ukrainian-village'], cross: ['renting-out-your-condo-chicago-rules'] },
      { slug: 'are-hoa-condo-rules-enforceable-illinois', areas: ['bucktown', 'roscoe-village', 'lakeview'], siblings: ['common-condo-rule-violations-chicago'] },
      { slug: 'illinois-association-fines-notice-hearing', areas: ['wicker-park', 'logan-square', 'ukrainian-village'], siblings: ['common-condo-rule-violations-chicago', 'are-hoa-condo-rules-enforceable-illinois'] },
      { slug: 'common-condo-rule-violations-chicago', areas: ['bucktown', 'roscoe-village', 'lakeview'], siblings: ['chicago-condo-short-term-rental-prohibited-buildings-list'] },
      { slug: 'chicago-condo-short-term-rental-prohibited-buildings-list', areas: ['wicker-park', 'logan-square', 'ukrainian-village'], siblings: ['common-condo-rule-violations-chicago'] },
    ],
  },
  {
    id: 'H',
    name: 'High-rise and life-safety compliance',
    pillar: 'chicago-condo-facade-compliance-board-guide',
    money: '/services/high-rise-condominium-management',
    members: [
      { slug: 'chicago-condo-facade-compliance-board-guide', areas: ['edgewater', 'uptown', 'gold-coast'], cross: ['vintage-chicago-condo-capital-planning', 'condo-hoa-capital-project-loan-preparation'] },
      { slug: 'chicago-condo-life-safety-board-planning', areas: ['streeterville', 'river-north', 'loop'], siblings: ['chicago-condo-porch-deck-safety-board-guide'] },
      { slug: 'chicago-condo-porch-deck-safety-board-guide', areas: ['south-loop', 'west-loop', 'edgewater'], siblings: ['chicago-condo-life-safety-board-planning'] },
      { slug: 'condo-hoa-emergency-planning-checklist', areas: ['uptown', 'gold-coast', 'streeterville'], siblings: ['chicago-condo-porch-deck-safety-board-guide'] },
    ],
  },
  {
    id: 'I',
    name: 'Building maintenance and operations',
    pillar: 'vintage-chicago-condo-capital-planning',
    money: '/services/maintenance-coordination',
    members: [
      { slug: 'vintage-chicago-condo-capital-planning', areas: ['rogers-park', 'lakeview', 'andersonville'], cross: ['chicago-condo-porch-deck-safety-board-guide'] },
      { slug: 'who-pays-condo-water-leak-illinois', areas: ['ravenswood', 'lincoln-park', 'hyde-park'], siblings: ['condo-hoa-vendor-rfp-checklist'] },
      { slug: 'can-condo-boards-enter-your-unit-illinois', areas: ['rogers-park', 'lakeview', 'andersonville'], siblings: ['condo-hoa-vendor-rfp-checklist'] },
      { slug: 'condo-hoa-vendor-rfp-checklist', areas: ['ravenswood', 'lincoln-park', 'hyde-park'], siblings: ['illinois-condo-hoa-ev-charging-board-process', 'can-condo-boards-enter-your-unit-illinois'] },
      { slug: 'illinois-condo-hoa-ev-charging-board-process', areas: ['rogers-park', 'lakeview', 'andersonville'], siblings: ['who-pays-condo-water-leak-illinois'] },
    ],
  },
  {
    id: 'J',
    name: 'HOA, townhome and North Shore',
    pillar: 'which-illinois-law-governs-condo-hoa-townhome',
    money: '/services/hoa-management',
    members: [
      { slug: 'which-illinois-law-governs-condo-hoa-townhome', areas: ['evanston', 'skokie', 'lincolnwood', 'morton-grove', 'norridge', 'glenview', 'wilmette'] },
      { slug: 'illinois-condo-hoa-snow-removal-vendor-guide', areas: ['winnetka', 'northbrook', 'highland-park', 'glencoe', 'kenilworth', 'lake-forest', 'deerfield'] },
    ],
  },
  {
    id: 'K',
    name: 'Board meetings and elections',
    pillar: 'illinois-association-annual-meeting-guide',
    money: '/services/board-support',
    members: [
      { slug: 'illinois-association-annual-meeting-guide', areas: ['evanston', 'skokie', 'wilmette'] },
      { slug: 'illinois-condo-board-elections-proxies-ballots', areas: ['highland-park', 'northbrook', 'glenview'], siblings: ['electronic-voting-illinois-condo-hoa'] },
      { slug: 'electronic-voting-illinois-condo-hoa', areas: ['edison-park', 'portage-park', 'evanston'], siblings: ['illinois-condo-open-board-meetings-notice-comment'] },
      { slug: 'illinois-condo-open-board-meetings-notice-comment', areas: ['skokie', 'wilmette', 'highland-park'], siblings: ['electronic-voting-illinois-condo-hoa'] },
      { slug: 'illinois-condo-board-closed-session-guide', areas: ['northbrook', 'glenview', 'edison-park'], siblings: ['removing-illinois-condo-board-member', 'illinois-condo-open-board-meetings-notice-comment'] },
      { slug: 'removing-illinois-condo-board-member', areas: ['portage-park', 'evanston', 'skokie'], siblings: ['illinois-condo-board-closed-session-guide'] },
    ],
  },
  {
    id: 'L',
    name: 'Board duties and transparency',
    pillar: 'new-condo-board-member-first-30-days',
    money: '/services/board-support',
    members: [
      { slug: 'new-condo-board-member-first-30-days', areas: ['rogers-park', 'edgewater', 'uptown'], cross: ['illinois-condo-owners-independent-audit-rights'] },
      { slug: 'illinois-condo-board-fiduciary-duty-audit', areas: ['albany-park', 'irving-park', 'avondale'], siblings: ['illinois-condo-board-conflicts-of-interest'] },
      { slug: 'illinois-condo-board-conflicts-of-interest', areas: ['mayfair', 'north-park', 'rogers-park'], siblings: ['illinois-condo-association-records-request-guide', 'illinois-condo-board-fiduciary-duty-audit'] },
      { slug: 'illinois-condo-association-records-request-guide', areas: ['edgewater', 'uptown', 'albany-park'], siblings: ['illinois-condominium-ombudsperson-act-board-duties', 'illinois-condo-board-conflicts-of-interest'] },
      { slug: 'illinois-condominium-ombudsperson-act-board-duties', areas: ['irving-park', 'avondale', 'mayfair'], siblings: ['illinois-condo-board-fiduciary-duty-audit'] },
      { slug: 'condo-hoa-board-communication-systems', areas: ['north-park', 'rogers-park', 'edgewater'], siblings: ['why-condo-boards-fail', 'illinois-condominium-ombudsperson-act-board-duties'] },
      { slug: 'why-condo-boards-fail', areas: ['uptown', 'albany-park', 'irving-park'], siblings: ['illinois-condo-board-fiduciary-duty-audit'] },
    ],
  },
  {
    id: 'M',
    name: 'Law, governing documents and compliance calendar',
    pillar: 'chicago-condo-association-compliance-calendar',
    money: '/services/board-support',
    members: [
      { slug: 'chicago-condo-association-compliance-calendar', areas: ['south-loop', 'west-loop', 'loop'], cross: ['which-illinois-law-governs-condo-hoa-townhome'] },
      { slug: 'illinois-condo-law-updates-2026', areas: ['river-north', 'hyde-park', 'kenwood'], siblings: ['amend-illinois-condo-declaration-section-27'] },
      { slug: 'amend-illinois-condo-declaration-section-27', areas: ['logan-square', 'avondale', 'south-loop'], siblings: ['illinois-condo-developer-turnover-checklist'] },
      { slug: 'illinois-condo-deconversion-75-or-85-percent', areas: ['west-loop', 'loop', 'river-north'], siblings: ['illinois-condo-developer-turnover-checklist'] },
      { slug: 'illinois-condo-developer-turnover-checklist', areas: ['hyde-park', 'kenwood', 'logan-square'], siblings: ['illinois-condo-deconversion-75-or-85-percent'] },
    ],
  },
  {
    id: 'N',
    name: 'Owner and resident guides (Condo Living)',
    pillar: 'condo-repairs-owner-vs-association-illinois',
    money: '/condo-living',
    members: [
      { slug: 'condo-repairs-owner-vs-association-illinois', areas: ['lakeview', 'lincoln-park', 'logan-square'], cross: ['chicago-condo-short-term-rental-prohibited-buildings-list'] },
      { slug: 'moving-into-chicago-condo-guide', areas: ['wicker-park', 'roscoe-village', 'lincoln-square'], siblings: ['renting-out-your-condo-chicago-rules'] },
      { slug: 'renting-out-your-condo-chicago-rules', areas: ['bucktown', 'andersonville', 'lakeview'], siblings: ['moving-into-chicago-condo-guide'] },
      { slug: 'first-time-condo-buyer-guide-chicago', areas: ['lincoln-park', 'logan-square', 'wicker-park'], siblings: ['renting-out-your-condo-chicago-rules'] },
    ],
  },
];

/**
 * Extra contextual money-page links the brief asks for, on top of each
 * guide's primary money page. Each named guide links the page once, in the
 * first third of its body. check-links.mjs verifies every one.
 */
export const extraMoneyLinks: Record<string, string[]> = {
  '/pricing': [
    'switch-condo-management-companies-chicago',
    'community-association-management-agreement-review',
    'how-many-associations-should-community-manager-handle',
    'condominium-property-management-chicago-what-board-members-should-expect',
  ],
  '/tools/compare-management-proposals': [
    'switch-condo-management-companies-chicago',
    'community-association-management-agreement-review',
    'verify-illinois-community-association-manager-license',
  ],
  '/board-toolkit': [
    'switch-condo-management-companies-chicago',
    'condo-hoa-vendor-rfp-checklist',
    'illinois-association-annual-meeting-guide',
    'chicago-condo-association-compliance-calendar',
  ],
  '/services/high-rise-condominium-management': [
    'chicago-condo-association-compliance-calendar',
    'condo-hoa-emergency-planning-checklist',
    'condo-hoa-capital-project-loan-preparation',
    'illinois-condo-hoa-ev-charging-board-process',
  ],
  '/services/small-condo-association-management': [
    'cook-county-property-tax-appeal-condo-association',
    'illinois-condo-hoa-budget-adoption-guide',
    'condo-hoa-insurance-renewal-checklist',
    'first-time-condo-buyer-guide-chicago',
  ],
  '/services/hoa-management': [
    'illinois-condo-hoa-snow-removal-vendor-guide',
    'illinois-association-late-fees-interest-policy',
  ],
  '/services/townhome-management': [
    'which-illinois-law-governs-condo-hoa-townhome',
    'adopting-enforcing-condo-hoa-rules-illinois',
  ],
  '/services/resale-disclosures': [
    'first-time-condo-buyer-guide-chicago',
    'illinois-condo-hoa-collection-policy-january-2027',
  ],
};

/** The choosing-a-manager pillar: shown on every area page. */
export const AREA_PILLAR = 'switch-condo-management-companies-chicago';

/**
 * Curated guides for the area pages, by area type. Each page shows the
 * choosing-a-manager pillar plus five guides from its type list, starting at
 * (page index mod list length) so every listed guide appears on several pages.
 */
export const areaTypes: Array<{ id: string; label: string; areas: string[]; guides: string[] }> = [
  {
    id: 'highrise',
    label: 'Lakefront and downtown high-rise',
    areas: ['edgewater', 'uptown', 'gold-coast', 'streeterville', 'river-north', 'loop', 'south-loop', 'west-loop', 'hyde-park', 'kenwood'],
    guides: [
      'chicago-condo-facade-compliance-board-guide',
      'chicago-condo-life-safety-board-planning',
      'reasonable-reserves-illinois-condo-law',
      'fannie-freddie-condo-reserve-15-percent-2027',
      'condo-hoa-capital-project-loan-preparation',
      'condo-hoa-directors-officers-insurance-guide',
      'condo-hoa-emergency-planning-checklist',
      'chicago-condo-association-compliance-calendar',
      'illinois-management-company-segregated-accounts-commingling',
    ],
  },
  {
    id: 'vintage',
    label: 'Vintage courtyard and walk-up neighborhoods',
    // old-town is not in the brief's lists; placed here (vintage walk-ups). Confirm with Mirsad.
    areas: ['rogers-park', 'lakeview', 'lincoln-park', 'lincoln-square', 'andersonville', 'ravenswood', 'roscoe-village', 'logan-square', 'bucktown', 'wicker-park', 'ukrainian-village', 'avondale', 'irving-park', 'albany-park', 'portage-park', 'edison-park', 'north-park', 'mayfair', 'old-town'],
    guides: [
      'vintage-chicago-condo-capital-planning',
      'chicago-condo-porch-deck-safety-board-guide',
      'who-pays-condo-water-leak-illinois',
      'illinois-section-22-1-disclosure-board-guide',
      'illinois-condo-hoa-collection-policy-january-2027',
      'condo-hoa-vendor-rfp-checklist',
      'illinois-condo-hoa-ev-charging-board-process',
      'verify-illinois-community-association-manager-license',
      'new-condo-board-member-first-30-days',
      'condo-hoa-annual-budget-workbook',
    ],
  },
  {
    id: 'northshore',
    label: 'North Shore and suburbs',
    areas: ['evanston', 'skokie', 'lincolnwood', 'morton-grove', 'norridge', 'glenview', 'wilmette', 'winnetka', 'northbrook', 'highland-park', 'glencoe', 'kenilworth', 'lake-forest', 'deerfield'],
    guides: [
      'which-illinois-law-governs-condo-hoa-townhome',
      'illinois-condo-hoa-snow-removal-vendor-guide',
      'illinois-association-annual-meeting-guide',
      'illinois-condo-board-elections-proxies-ballots',
      'illinois-condo-open-board-meetings-notice-comment',
      'illinois-condo-assessment-collection-possession-action',
      'illinois-condo-hoa-budget-adoption-guide',
      'illinois-condominium-ombudsperson-act-board-duties',
      'illinois-condo-association-records-request-guide',
    ],
  },
];

const memberIndex = new Map<string, { cluster: Cluster; member: ClusterMember }>();
for (const cluster of clusters) {
  for (const member of cluster.members) memberIndex.set(member.slug, { cluster, member });
}

export function getClusterFor(slug: string): { cluster: Cluster; member: ClusterMember } | undefined {
  return memberIndex.get(slug);
}

export interface SeriesNavLinks {
  /** The cluster pillar; null when this guide IS the pillar. */
  pillar: string | null;
  /** Sibling guides (all members when this guide is the pillar). */
  guides: string[];
  /** Related guides from other clusters (pillars only). */
  cross: string[];
}

/**
 * "More in this guide": the pillar plus up to three siblings. The siblings
 * the brief names always come first; the rest are filled from the cluster,
 * preferring guides the article body does not already link.
 */
export function getSeriesNav(slug: string, linkedInBody: ReadonlySet<string> = new Set()): SeriesNavLinks | null {
  const entry = memberIndex.get(slug);
  if (!entry) return null;
  const { cluster, member } = entry;
  const others = cluster.members.map((m) => m.slug).filter((s) => s !== slug);

  if (slug === cluster.pillar) {
    return { pillar: null, guides: others, cross: member.cross ?? [] };
  }

  const siblings = others.filter((s) => s !== cluster.pillar);
  // Start the fill after this guide's own position so each guide shows a
  // different part of the cluster.
  const position = cluster.members.findIndex((m) => m.slug === slug);
  const ordered = [...cluster.members.slice(position + 1), ...cluster.members.slice(0, position)]
    .map((m) => m.slug)
    .filter((s) => siblings.includes(s));
  const picked = [...(member.siblings ?? [])];
  for (const candidate of [...ordered.filter((s) => !linkedInBody.has(s)), ...ordered]) {
    if (picked.length >= 3) break;
    if (!picked.includes(candidate)) picked.push(candidate);
  }
  return { pillar: cluster.pillar, guides: picked, cross: [] };
}

export function getNearbyAreas(slug: string): string[] {
  return memberIndex.get(slug)?.member.areas ?? [];
}

// ── Area pages ───────────────────────────────────────────────────────────

const curatedByArea = new Map<string, string[]>();
for (const type of areaTypes) {
  type.areas.forEach((area, pageIndex) => {
    const offset = pageIndex % type.guides.length;
    const five = Array.from({ length: 5 }, (_, k) => type.guides[(offset + k) % type.guides.length]);
    curatedByArea.set(area, [AREA_PILLAR, ...five]);
  });
}

// Every guide must have at least one link from an area page. The curated
// lists cover 29 guides. Each remaining guide is shown on ONE of the area
// pages its own NearbyAreas module links to (the least-loaded one), so the
// link is reciprocal and matched to the neighborhood.
const matchedByArea = new Map<string, string[]>();
{
  const covered = new Set([...curatedByArea.values()].flat());
  for (const cluster of clusters) {
    for (const member of cluster.members) {
      if (covered.has(member.slug)) continue;
      const candidates = member.areas.filter((area) => curatedByArea.has(area));
      if (!candidates.length) continue;
      const target = candidates.reduce((best, area) =>
        (matchedByArea.get(area)?.length ?? 0) < (matchedByArea.get(best)?.length ?? 0) ? area : best);
      matchedByArea.set(target, [...(matchedByArea.get(target) ?? []), member.slug]);
    }
  }
}

/** Guides shown on an area page: six curated, then any matched extras. */
export function getAreaGuides(areaSlug: string): { curated: string[]; matched: string[] } {
  return { curated: curatedByArea.get(areaSlug) ?? [], matched: matchedByArea.get(areaSlug) ?? [] };
}
