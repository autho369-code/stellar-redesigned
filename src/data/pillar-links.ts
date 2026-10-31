import { getChicagoPublicationDate } from '../utils/publication-date';

// Editorial assignments, not an inversion of every sibling relationship.
// Add a queued guide here once; the daily publishing build releases its link.
export const pillarGuides: Record<string, string[]> = {
  'new-condo-board-member-first-30-days': [
    'illinois-condo-accessible-parking-policy',
    'illinois-association-website-requirement-2028',
    'illinois-association-records-retention-schedule',
  ],
  'read-condo-hoa-financial-statements': [
    'illinois-association-annual-financial-report-email',
  ],
  'adopting-enforcing-condo-hoa-rules-illinois': [
    'illinois-association-police-firefighter-vehicle-parking',
    'illinois-association-flag-display-rules',
    'condo-pet-noise-smoking-complaints-illinois',
  ],
  'condo-hoa-delinquency-escalation-process': [
    'collection-policy-board-decisions-payment-plans',
    'illinois-condo-assessments-after-foreclosure-sale',
  ],
  'which-illinois-law-governs-condo-hoa-townhome': [
    'cicaa-small-association-exemptions-collection-policy',
    'illinois-hoa-board-duties-cicaa',
  ],
  'how-to-read-condo-reserve-study': [
    'reserve-study-lender-will-accept-2027',
  ],
  'fannie-freddie-condo-eligibility-board-guide': [
    'condo-critical-repairs-lender-questionnaire',
  ],
  'condo-hoa-insurance-renewal-checklist': [
    'illinois-condo-master-policy-section-12-requirements',
  ],
  'illinois-condo-hoa-budget-adoption-guide': [
    'illinois-condo-115-percent-assessment-petition',
  ],
  'condo-hoa-emergency-planning-checklist': [
    'illinois-association-snow-ice-sidewalk-liability',
    'illinois-condo-smoke-carbon-monoxide-alarms',
    'illinois-association-solar-panel-rights',
    'chicago-condo-heat-outage-protocol',
  ],
  'illinois-condo-hoa-snow-removal-vendor-guide': [
    'glenview-townhome-hoa-board-guide',
    'townhome-association-maintenance-responsibilities-illinois',
  ],
  'chicago-condo-life-safety-board-planning': [
    'high-rise-condo-management-chicago-whats-different',
    'chicago-condo-annual-building-inspection-checklist',
    'condo-move-in-move-out-elevator-policy',
    'edgewater-lakefront-condo-board-guide',
  ],
  'self-managed-condo-association-problems': [
    'small-condo-association-professional-manager',
    'lincoln-park-vintage-condo-board-guide',
  ],
  'illinois-section-22-1-disclosure-board-guide': [
    'illinois-resale-disclosure-fees-turnaround',
  ],
  'score-condo-hoa-management-proposals': [
    'chicago-condo-management-cost',
  ],
  'switch-condo-management-companies-chicago': [
    'evanston-condo-association-board-guide',
    'lakeview-condo-association-board-guide',
    'replace-condo-management-company-60-day-plan',
  ],
};

interface Guide { slug: string; date: string; title: string; content: string; excerpt: string }

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]!);
}

/** Body links only: never mutate authored content or bypass publication gates. */
export function getPillarGuides<T extends Guide>(pillar: T, posts: T[], cutoff = getChicagoPublicationDate()): T[] {
  if (pillar.date > cutoff) return [];
  const existing = new Set([...pillar.content.matchAll(/<a\b[^>]*\bhref\s*=\s*["']([^"']+)["']/gi)]
    .map((match) => match[1].replace(/^https:\/\/www\.stellarpropertygroup\.com/, '').replace(/[?#].*$/, '').replace(/\/$/, '')));
  const bySlug = new Map(posts.map((post) => [post.slug, post]));
  return [...new Set(pillarGuides[pillar.slug] ?? [])]
    .map((slug) => bySlug.get(slug))
    .filter((post): post is T => !!post && post.slug !== pillar.slug && post.date <= cutoff && !existing.has(`/blog/${post.slug}`));
}

export function getPillarContent<T extends Guide>(pillar: T, posts: T[], cutoff = getChicagoPublicationDate()): string {
  const guides = getPillarGuides(pillar, posts, cutoff);
  if (!guides.length) return pillar.content;
  return pillar.content + '<h2>More guidance on this topic</h2>' + guides.map((guide) =>
    `<p>${escapeHtml(guide.excerpt)} Read <a href="/blog/${escapeHtml(guide.slug)}">${escapeHtml(guide.title)}</a>.</p>`
  ).join('');
}
