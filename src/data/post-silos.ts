// Reverse silo for the blog. Every guide supports exactly ONE money page
// (a service page, /pricing, or /condo-living) and links to it in the body.
// It may also link at most one area page, and it links to its siblings and,
// when it belongs to an overlap cluster, to that cluster's pillar guide.
// scripts/verify-content-silos.mjs fails the build when a guide breaks this,
// so a new guide must get an entry here before it can ship.
// Source: stellar_blog_fix_plan.md (crawl of 2026-10-28), extended to the
// guides queued after that date.

export type MoneyPage =
  | '/services/financial-management'
  | '/services/board-support'
  | '/services/maintenance-coordination'
  | '/services/violation-management'
  | '/services/condominium-management'
  | '/services/resale-disclosures'
  | '/services/high-rise-condominium-management'
  | '/services/small-condo-association-management'
  | '/services/townhome-management'
  | '/services/hoa-management'
  | '/pricing'
  | '/condo-living';

export const moneyPageLabels: Record<MoneyPage, string> = {
  '/services/financial-management': 'Financial Management',
  '/services/board-support': 'Board Support',
  '/services/maintenance-coordination': 'Maintenance Coordination',
  '/services/violation-management': 'Violation Management',
  '/services/condominium-management': 'Condominium Management',
  '/services/resale-disclosures': '22.1 Resale Disclosures',
  '/services/high-rise-condominium-management': 'High-Rise Condominium Management',
  '/services/small-condo-association-management': 'Small Condo Association Management',
  '/services/townhome-management': 'Townhome Management',
  '/services/hoa-management': 'HOA Management',
  '/pricing': 'Management Pricing',
  '/condo-living': 'the Condo Living Guide',
};

export interface PostSilo {
  money: MoneyPage;
  /** The one area page the body may link, if any. */
  area?: string;
  /** Sibling and pillar guides the body must link. */
  links: string[];
}

const CHICAGO = '/property-management-chicago';
const NORTH_SHORE = '/property-management-north-shore';
const GLENVIEW = '/property-management-glenview';

const FIN = '/services/financial-management';
const BOARD = '/services/board-support';
const MAINT = '/services/maintenance-coordination';
const RULES = '/services/violation-management';
const CONDO = '/services/condominium-management';
const RESALE = '/services/resale-disclosures';
const HIGH_RISE = '/services/high-rise-condominium-management';
const SMALL = '/services/small-condo-association-management';
const TOWNHOME = '/services/townhome-management';
const HOA = '/services/hoa-management';

export const postSilos: Record<string, PostSilo> = {
  // ── Financial Management (pillars: reserve study, delinquency, budget, insurance, Fannie/Freddie)
  'how-to-read-condo-reserve-study': { money: FIN, area: CHICAGO, links: ['condo-reserve-funds-explained', 'reasonable-reserves-illinois-condo-law'] },
  'condo-reserve-funds-explained': { money: FIN, links: ['how-to-read-condo-reserve-study', 'reasonable-reserves-illinois-condo-law'] },
  'reasonable-reserves-illinois-condo-law': { money: FIN, links: ['how-to-read-condo-reserve-study', 'condo-reserve-funds-explained'] },
  'condo-special-assessments-illinois': { money: FIN, links: ['how-to-read-condo-reserve-study', 'reasonable-reserves-illinois-condo-law'] },
  'condo-hoa-capital-project-loan-preparation': { money: FIN, links: ['condo-special-assessments-illinois', 'how-to-read-condo-reserve-study'] },
  'illinois-condo-hoa-budget-adoption-guide': { money: FIN, area: CHICAGO, links: ['condo-hoa-annual-budget-workbook', 'how-to-read-condo-reserve-study'] },
  'condo-hoa-annual-budget-workbook': { money: FIN, area: CHICAGO, links: ['illinois-condo-hoa-budget-adoption-guide', 'how-to-read-condo-reserve-study'] },
  'cook-county-property-tax-appeal-condo-association': { money: FIN, area: CHICAGO, links: ['illinois-condo-hoa-budget-adoption-guide'] },
  'read-condo-hoa-financial-statements': { money: FIN, links: ['illinois-condo-owners-independent-audit-rights', 'illinois-condo-hoa-budget-adoption-guide'] },
  'illinois-condo-board-fiduciary-duty-audit': { money: FIN, area: CHICAGO, links: ['illinois-condo-owners-independent-audit-rights', 'read-condo-hoa-financial-statements'] },
  'illinois-condo-owners-independent-audit-rights': { money: FIN, links: ['read-condo-hoa-financial-statements', 'illinois-association-fidelity-insurance-requirements'] },
  'illinois-association-fidelity-insurance-requirements': { money: FIN, links: ['illinois-condo-owners-independent-audit-rights', 'condo-hoa-directors-officers-insurance-guide'] },
  'condo-hoa-delinquency-escalation-process': { money: FIN, area: CHICAGO, links: ['illinois-condo-association-liens-delinquency', 'illinois-condo-assessment-collection-possession-action'] },
  'illinois-condo-association-liens-delinquency': { money: FIN, links: ['condo-hoa-delinquency-escalation-process', 'illinois-condo-assessment-collection-possession-action'] },
  'illinois-condo-assessment-collection-possession-action': { money: FIN, links: ['condo-hoa-delinquency-escalation-process', 'illinois-condo-hoa-collection-policy-january-2027'] },
  'illinois-association-late-fees-interest-policy': { money: FIN, links: ['condo-hoa-delinquency-escalation-process', 'illinois-condo-hoa-collection-policy-january-2027'] },
  'illinois-condo-hoa-collection-policy-january-2027': { money: FIN, area: CHICAGO, links: ['condo-hoa-delinquency-escalation-process', 'illinois-association-late-fees-interest-policy'] },
  'condo-hoa-insurance-renewal-checklist': { money: FIN, area: CHICAGO, links: ['hoa-insurance-costs-illinois', 'condo-master-policy-vs-ho6-board-guide'] },
  'hoa-insurance-costs-illinois': { money: FIN, links: ['condo-hoa-insurance-renewal-checklist', 'condo-master-policy-vs-ho6-board-guide'] },
  'condo-master-policy-vs-ho6-board-guide': { money: FIN, area: CHICAGO, links: ['condo-hoa-insurance-renewal-checklist', 'illinois-association-fidelity-insurance-requirements'] },
  'condo-hoa-directors-officers-insurance-guide': { money: FIN, area: CHICAGO, links: ['condo-hoa-insurance-renewal-checklist', 'illinois-association-fidelity-insurance-requirements'] },
  'fannie-freddie-condo-eligibility-board-guide': { money: FIN, area: CHICAGO, links: ['fannie-freddie-condo-reserve-15-percent-2027', 'how-to-read-condo-reserve-study'] },
  'fannie-freddie-condo-reserve-15-percent-2027': { money: FIN, links: ['how-to-read-condo-reserve-study', 'fannie-freddie-condo-eligibility-board-guide'] },
  'illinois-management-company-segregated-accounts-commingling': { money: FIN, links: ['illinois-association-fidelity-insurance-requirements'] },
  'illinois-association-reserve-funds-fdic-coverage': { money: FIN, links: ['illinois-management-company-segregated-accounts-commingling', 'how-to-read-condo-reserve-study'] },
  'illinois-condo-insurance-deductible-charge-owner': { money: FIN, links: ['condo-master-policy-vs-ho6-board-guide', 'condo-hoa-insurance-renewal-checklist'] },
  'illinois-association-annual-financial-report-email': { money: FIN, links: ['read-condo-hoa-financial-statements', 'illinois-condo-owners-independent-audit-rights'] },
  'collection-policy-board-decisions-payment-plans': { money: FIN, links: ['illinois-condo-hoa-collection-policy-january-2027', 'condo-hoa-delinquency-escalation-process'] },
  'reserve-study-lender-will-accept-2027': { money: FIN, links: ['how-to-read-condo-reserve-study', 'fannie-freddie-condo-reserve-15-percent-2027'] },
  'condo-critical-repairs-lender-questionnaire': { money: FIN, links: ['fannie-freddie-condo-eligibility-board-guide', 'fannie-freddie-condo-reserve-15-percent-2027'] },
  'illinois-condo-master-policy-section-12-requirements': { money: FIN, links: ['condo-hoa-insurance-renewal-checklist', 'condo-master-policy-vs-ho6-board-guide'] },
  'illinois-condo-115-percent-assessment-petition': { money: FIN, links: ['illinois-condo-hoa-budget-adoption-guide', 'condo-hoa-annual-budget-workbook'] },
  'illinois-condo-assessments-after-foreclosure-sale': { money: FIN, links: ['condo-hoa-delinquency-escalation-process', 'illinois-condo-association-liens-delinquency'] },

  // ── Board Support (pillar: new board member, first 30 days)
  'new-condo-board-member-first-30-days': { money: BOARD, area: CHICAGO, links: ['illinois-condo-board-elections-proxies-ballots', 'illinois-association-annual-meeting-guide'] },
  'why-condo-boards-fail': { money: BOARD, links: ['new-condo-board-member-first-30-days', 'condo-hoa-board-communication-systems'] },
  'amend-illinois-condo-declaration-section-27': { money: BOARD, links: ['illinois-condo-law-updates-2026', 'illinois-condo-deconversion-75-or-85-percent'] },
  'illinois-condo-deconversion-75-or-85-percent': { money: BOARD, links: ['amend-illinois-condo-declaration-section-27', 'illinois-association-annual-meeting-guide'] },
  'chicago-condo-association-compliance-calendar': { money: BOARD, area: CHICAGO, links: ['illinois-association-annual-meeting-guide', 'illinois-condo-board-elections-proxies-ballots'] },
  'condo-hoa-board-communication-systems': { money: BOARD, area: CHICAGO, links: ['illinois-association-annual-meeting-guide', 'illinois-condo-association-records-request-guide'] },
  'condominium-property-management-chicago-what-board-members-should-expect': { money: BOARD, area: CHICAGO, links: ['score-condo-hoa-management-proposals', 'new-condo-board-member-first-30-days'] },
  'electronic-voting-illinois-condo-hoa': { money: BOARD, area: CHICAGO, links: ['illinois-condo-board-elections-proxies-ballots', 'illinois-association-annual-meeting-guide'] },
  'illinois-association-annual-meeting-guide': { money: BOARD, area: CHICAGO, links: ['illinois-condo-board-elections-proxies-ballots', 'condo-hoa-board-communication-systems'] },
  'illinois-condo-association-records-request-guide': { money: BOARD, area: CHICAGO, links: ['illinois-association-annual-meeting-guide', 'illinois-condo-board-closed-session-guide'] },
  'illinois-condo-board-closed-session-guide': { money: BOARD, area: CHICAGO, links: ['illinois-association-annual-meeting-guide', 'illinois-condo-association-records-request-guide'] },
  'illinois-condo-board-elections-proxies-ballots': { money: BOARD, links: ['illinois-association-annual-meeting-guide', 'condo-hoa-board-communication-systems'] },
  'illinois-condo-developer-turnover-checklist': { money: BOARD, area: CHICAGO, links: ['new-condo-board-member-first-30-days', 'illinois-condo-association-records-request-guide'] },
  'illinois-condo-law-updates-2026': { money: BOARD, links: ['illinois-condo-association-records-request-guide', 'illinois-condo-board-elections-proxies-ballots'] },
  'illinois-condominium-ombudsperson-act-board-duties': { money: BOARD, area: CHICAGO, links: ['illinois-condo-association-records-request-guide', 'condo-hoa-board-communication-systems'] },
  'illinois-condo-open-board-meetings-notice-comment': { money: BOARD, links: ['illinois-condo-board-closed-session-guide', 'illinois-association-annual-meeting-guide'] },
  'removing-illinois-condo-board-member': { money: BOARD, links: ['illinois-condo-board-elections-proxies-ballots', 'illinois-association-annual-meeting-guide'] },
  'illinois-condo-board-conflicts-of-interest': { money: BOARD, links: ['illinois-condo-open-board-meetings-notice-comment', 'illinois-condo-board-closed-session-guide'] },
  'illinois-association-website-requirement-2028': { money: BOARD, area: NORTH_SHORE, links: ['illinois-condo-association-records-request-guide', 'condo-hoa-board-communication-systems'] },
  'illinois-condo-accessible-parking-policy': { money: BOARD, links: ['illinois-condo-developer-turnover-checklist'] },
  'illinois-association-records-retention-schedule': { money: BOARD, links: ['illinois-condo-association-records-request-guide', 'illinois-association-website-requirement-2028'] },

  // ── Maintenance Coordination (pillar: emergency planning)
  'condo-hoa-emergency-planning-checklist': { money: MAINT, area: CHICAGO, links: ['condo-hoa-vendor-rfp-checklist', 'who-pays-condo-water-leak-illinois'] },
  'condo-hoa-vendor-rfp-checklist': { money: MAINT, area: CHICAGO, links: ['condo-hoa-emergency-planning-checklist', 'vintage-chicago-condo-capital-planning'] },
  'can-condo-boards-enter-your-unit-illinois': { money: MAINT, links: ['who-pays-condo-water-leak-illinois', 'condo-hoa-emergency-planning-checklist'] },
  'illinois-condo-hoa-ev-charging-board-process': { money: MAINT, area: CHICAGO, links: ['condo-hoa-vendor-rfp-checklist', 'condo-hoa-emergency-planning-checklist'] },
  'vintage-chicago-condo-capital-planning': { money: MAINT, area: CHICAGO, links: ['condo-hoa-vendor-rfp-checklist', 'condo-hoa-emergency-planning-checklist'] },
  'who-pays-condo-water-leak-illinois': { money: MAINT, area: CHICAGO, links: ['condo-hoa-emergency-planning-checklist', 'can-condo-boards-enter-your-unit-illinois'] },
  'chicago-condo-porch-deck-safety-board-guide': { money: MAINT, area: CHICAGO, links: ['condo-hoa-emergency-planning-checklist', 'vintage-chicago-condo-capital-planning'] },
  'chicago-condo-frozen-pipes-winter-checklist': { money: MAINT, area: CHICAGO, links: ['who-pays-condo-water-leak-illinois', 'condo-hoa-emergency-planning-checklist'] },
  'illinois-association-solar-panel-rights': { money: MAINT, links: ['illinois-condo-hoa-ev-charging-board-process'] },
  'illinois-association-snow-ice-sidewalk-liability': { money: MAINT, area: GLENVIEW, links: ['illinois-condo-hoa-snow-removal-vendor-guide', 'condo-hoa-vendor-rfp-checklist'] },
  'illinois-condo-smoke-carbon-monoxide-alarms': { money: MAINT, links: ['condo-hoa-emergency-planning-checklist', 'chicago-condo-frozen-pipes-winter-checklist'] },

  // ── Violation Management (pillar: adopting and enforcing rules)
  'adopting-enforcing-condo-hoa-rules-illinois': { money: RULES, area: CHICAGO, links: ['are-hoa-condo-rules-enforceable-illinois', 'illinois-association-fines-notice-hearing'] },
  'are-hoa-condo-rules-enforceable-illinois': { money: RULES, links: ['adopting-enforcing-condo-hoa-rules-illinois', 'illinois-association-fines-notice-hearing'] },
  'common-condo-rule-violations-chicago': { money: RULES, area: CHICAGO, links: ['adopting-enforcing-condo-hoa-rules-illinois', 'illinois-association-fines-notice-hearing'] },
  'illinois-association-fines-notice-hearing': { money: RULES, links: ['adopting-enforcing-condo-hoa-rules-illinois', 'chicago-condo-short-term-rental-prohibited-buildings-list'] },
  'chicago-condo-short-term-rental-prohibited-buildings-list': { money: RULES, area: CHICAGO, links: ['adopting-enforcing-condo-hoa-rules-illinois', 'illinois-association-fines-notice-hearing'] },
  'illinois-association-police-firefighter-vehicle-parking': { money: RULES, links: ['adopting-enforcing-condo-hoa-rules-illinois', 'illinois-association-fines-notice-hearing'] },
  'illinois-association-flag-display-rules': { money: RULES, links: ['adopting-enforcing-condo-hoa-rules-illinois', 'illinois-association-fines-notice-hearing'] },

  // ── Condominium Management (choosing and running management)
  'switch-condo-management-companies-chicago': { money: CONDO, area: CHICAGO, links: ['score-condo-hoa-management-proposals', 'verify-illinois-community-association-manager-license'] },
  'community-association-management-agreement-review': { money: CONDO, area: CHICAGO, links: ['score-condo-hoa-management-proposals', 'verify-illinois-community-association-manager-license'] },
  'verify-illinois-community-association-manager-license': { money: CONDO, area: CHICAGO, links: ['community-association-management-agreement-review', 'switch-condo-management-companies-chicago'] },
  'ai-in-condo-management': { money: CONDO, links: ['the-technology-behind-our-management', 'verify-illinois-community-association-manager-license'] },
  'the-technology-behind-our-management': { money: CONDO, links: ['ai-in-condo-management', 'community-association-management-agreement-review'] },
  'illinois-community-association-manager-what-they-can-do': { money: CONDO, links: ['verify-illinois-community-association-manager-license', 'community-association-management-agreement-review'] },

  // ── Condo Living (owners and buyers)
  'moving-into-chicago-condo-guide': { money: '/condo-living', area: CHICAGO, links: ['condo-repairs-owner-vs-association-illinois', 'first-time-condo-buyer-guide-chicago'] },
  'condo-repairs-owner-vs-association-illinois': { money: '/condo-living', links: ['first-time-condo-buyer-guide-chicago', 'moving-into-chicago-condo-guide'] },
  'first-time-condo-buyer-guide-chicago': { money: '/condo-living', area: CHICAGO, links: ['illinois-section-22-1-disclosure-board-guide', 'condo-repairs-owner-vs-association-illinois'] },
  'renting-out-your-condo-chicago-rules': { money: '/condo-living', area: CHICAGO, links: ['condo-repairs-owner-vs-association-illinois', 'first-time-condo-buyer-guide-chicago'] },

  // ── 22.1 Resale Disclosures (pillar: Section 22.1 board guide)
  'illinois-section-22-1-disclosure-board-guide': { money: RESALE, links: ['illinois-22-1-disclosure-packet-checklist', 'illinois-22-1-response-workflow'] },
  'illinois-22-1-disclosure-packet-checklist': { money: RESALE, links: ['illinois-section-22-1-disclosure-board-guide', 'illinois-22-1-response-workflow'] },
  'illinois-22-1-response-workflow': { money: RESALE, links: ['illinois-section-22-1-disclosure-board-guide', 'illinois-22-1-disclosure-packet-checklist'] },

  // ── High-Rise Condominium Management (pillar: life-safety planning)
  'chicago-condo-life-safety-board-planning': { money: HIGH_RISE, area: CHICAGO, links: ['chicago-condo-facade-compliance-board-guide'] },
  'chicago-condo-facade-compliance-board-guide': { money: HIGH_RISE, area: CHICAGO, links: ['chicago-condo-life-safety-board-planning'] },
  'chicago-condo-elevator-inspection-board-guide': { money: HIGH_RISE, area: CHICAGO, links: ['chicago-condo-life-safety-board-planning', 'chicago-condo-facade-compliance-board-guide'] },

  // ── Small Condo Association Management
  'self-managed-condo-association-problems': { money: SMALL, links: ['how-many-associations-should-community-manager-handle'] },
  'how-many-associations-should-community-manager-handle': { money: SMALL, area: CHICAGO, links: ['self-managed-condo-association-problems'] },

  // ── Townhome, HOA, Pricing
  'illinois-condo-hoa-snow-removal-vendor-guide': { money: TOWNHOME, area: CHICAGO, links: [] },
  'which-illinois-law-governs-condo-hoa-townhome': { money: HOA, area: CHICAGO, links: [] },
  'cicaa-small-association-exemptions-collection-policy': { money: HOA, area: GLENVIEW, links: ['which-illinois-law-governs-condo-hoa-townhome'] },
  'score-condo-hoa-management-proposals': { money: '/pricing', area: CHICAGO, links: ['condominium-property-management-chicago-what-board-members-should-expect', 'switch-condo-management-companies-chicago'] },

  // ── Silo-support guides queued 2026-11-23 to 2026-12-08 (plan section 6)
  'high-rise-condo-management-chicago-whats-different': { money: HIGH_RISE, area: CHICAGO, links: ['chicago-condo-life-safety-board-planning', 'chicago-condo-facade-compliance-board-guide'] },
  'chicago-condo-heat-outage-protocol': { money: MAINT, area: CHICAGO, links: ['chicago-condo-frozen-pipes-winter-checklist', 'condo-hoa-emergency-planning-checklist'] },
  'small-condo-association-professional-manager': { money: SMALL, area: CHICAGO, links: ['self-managed-condo-association-problems', 'how-many-associations-should-community-manager-handle'] },
  'glenview-townhome-hoa-board-guide': { money: TOWNHOME, area: GLENVIEW, links: ['illinois-condo-hoa-snow-removal-vendor-guide', 'which-illinois-law-governs-condo-hoa-townhome'] },
  'illinois-resale-disclosure-fees-turnaround': { money: RESALE, links: ['illinois-section-22-1-disclosure-board-guide', 'illinois-22-1-response-workflow'] },
  'chicago-condo-management-cost': { money: '/pricing', area: CHICAGO, links: ['score-condo-hoa-management-proposals', 'community-association-management-agreement-review'] },
  'townhome-association-maintenance-responsibilities-illinois': { money: TOWNHOME, links: ['which-illinois-law-governs-condo-hoa-townhome', 'condo-repairs-owner-vs-association-illinois'] },
  'condo-pet-noise-smoking-complaints-illinois': { money: RULES, links: ['illinois-association-fines-notice-hearing', 'adopting-enforcing-condo-hoa-rules-illinois'] },
  'evanston-condo-association-board-guide': { money: CONDO, area: '/property-management-evanston', links: ['vintage-chicago-condo-capital-planning', 'illinois-condo-association-records-request-guide'] },
  'chicago-condo-annual-building-inspection-checklist': { money: HIGH_RISE, area: CHICAGO, links: ['chicago-condo-elevator-inspection-board-guide', 'chicago-condo-life-safety-board-planning'] },
  'lincoln-park-vintage-condo-board-guide': { money: SMALL, area: '/property-management-lincoln-park', links: ['small-condo-association-professional-manager', 'vintage-chicago-condo-capital-planning'] },
  'condo-move-in-move-out-elevator-policy': { money: HIGH_RISE, links: ['adopting-enforcing-condo-hoa-rules-illinois', 'moving-into-chicago-condo-guide'] },
  'lakeview-condo-association-board-guide': { money: CONDO, area: '/property-management-lakeview', links: ['high-rise-condo-management-chicago-whats-different', 'common-condo-rule-violations-chicago'] },
  'illinois-hoa-board-duties-cicaa': { money: HOA, links: ['which-illinois-law-governs-condo-hoa-townhome', 'cicaa-small-association-exemptions-collection-policy'] },
  'edgewater-lakefront-condo-board-guide': { money: HIGH_RISE, area: '/property-management-edgewater', links: ['high-rise-condo-management-chicago-whats-different', 'chicago-condo-facade-compliance-board-guide'] },
  'replace-condo-management-company-60-day-plan': { money: CONDO, area: CHICAGO, links: ['switch-condo-management-companies-chicago', 'score-condo-hoa-management-proposals'] },
};

export const moneyPagePaths = Object.keys(moneyPageLabels) as MoneyPage[];

export function getPostSilo(slug: string): PostSilo | undefined {
  return postSilos[slug];
}

/** Published guides that share this guide's money page, siblings first. */
export function getSiloSiblings<T extends { slug: string; date: string }>(slug: string, posts: T[], count = 3): T[] {
  const silo = postSilos[slug];
  if (!silo) return [];
  const bySlug = new Map(posts.map((post) => [post.slug, post]));
  const picked: T[] = [];
  for (const linked of silo.links) {
    const post = bySlug.get(linked);
    if (post && !picked.includes(post)) picked.push(post);
  }
  const sameSilo = posts
    .filter((post) => post.slug !== slug && postSilos[post.slug]?.money === silo.money && !picked.includes(post))
    .sort((a, b) => b.date.localeCompare(a.date));
  return [...picked, ...sameSilo].slice(0, count);
}
