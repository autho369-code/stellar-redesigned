import { neighborhoods, type Neighborhood } from './neighborhoods';

// Reverse-silo wiring between area pages (supporting content) and service
// pages (money pages). Area pages funnel property-type-matched, localized
// links UP to services; each service page links back to the hubs and the
// neighborhoods where that service concentrates, completing the loop.

export interface ServiceLink {
  title: string;
  link: string;
  description: string;
}

type PropertyType = 'condominiums' | 'high-rises' | 'HOAs' | 'townhomes';

interface ServiceDef {
  title: string;
  /** propertyTypes value this service monetizes; null = universal service */
  type: PropertyType | null;
  describe: (name: string) => string;
}

export const serviceCatalog: Record<string, ServiceDef> = {
  'condominium-management': {
    title: 'Condominium Management',
    type: 'condominiums',
    describe: (name) => `Full-service condominium association management for ${name} boards — financials, governance, maintenance, and 24/7 response.`,
  },
  'high-rise-condominium-management': {
    title: 'High-Rise Management',
    type: 'high-rises',
    describe: (name) => `Staffing, building systems, facade and life-safety compliance, and capital planning for ${name} high-rises.`,
  },
  'hoa-management': {
    title: 'HOA Management',
    type: 'HOAs',
    describe: (name) => `Homeowner association management for ${name} communities — common areas, covenant enforcement, budgets, and board support.`,
  },
  'townhome-management': {
    title: 'Townhome Management',
    type: 'townhomes',
    describe: (name) => `Townhome association management in ${name}: exterior maintenance, snow and landscape contracts, and reserve planning.`,
  },
  'small-condo-association-management': {
    title: 'Small Condo Management',
    type: null,
    describe: (name) => `Right-sized professional management for boutique and self-managed ${name} buildings, from $20 per unit per month.`,
  },
  'financial-management': {
    title: 'Financial Management',
    type: null,
    describe: (name) => `Transparent budgeting, assessments, reserve planning, and monthly financial reporting for ${name} associations.`,
  },
  'maintenance-coordination': {
    title: 'Maintenance & Operations',
    type: null,
    describe: (name) => `Proactive maintenance programs, vetted local vendors, and 24/7 emergency response across ${name}.`,
  },
  'board-support': {
    title: 'Board & Community Support',
    type: null,
    describe: (name) => `Meeting coordination, compliance enforcement, and communication tools for effective ${name} governance.`,
  },
  'violation-management': {
    title: 'Violation Management',
    type: null,
    describe: (name) => `Consistent, documented covenant and rules enforcement for ${name} associations.`,
  },
};

const MONEY_SERVICE_BY_TYPE: Record<PropertyType, string> = {
  condominiums: 'condominium-management',
  'high-rises': 'high-rise-condominium-management',
  HOAs: 'hoa-management',
  townhomes: 'townhome-management',
};

const OPERATIONS_FILL = ['financial-management', 'maintenance-coordination', 'board-support'];

/**
 * Reverse-silo up-links: the service pages an area page should funnel to,
 * ordered by the community's own property-type emphasis, padded with the
 * universal operations services. Descriptions are localized so every card
 * is a neighborhood-specific anchor rather than boilerplate.
 */
export function getNeighborhoodServices(neighborhood: Neighborhood, count = 4): ServiceLink[] {
  const slugs = neighborhood.propertyTypes
    .map((type) => MONEY_SERVICE_BY_TYPE[type as PropertyType])
    .filter((slug): slug is string => Boolean(slug));

  for (const filler of OPERATIONS_FILL) {
    if (slugs.length >= count) break;
    if (!slugs.includes(filler)) slugs.push(filler);
  }

  return slugs.slice(0, count).map((slug) => ({
    title: serviceCatalog[slug].title,
    link: `/services/${slug}`,
    description: serviceCatalog[slug].describe(neighborhood.name),
  }));
}

/**
 * Silo-completing down-links: the neighborhoods most relevant to a service
 * page, ranked by how prominently each community's housing stock features
 * the service's property type (stable within rank, so the flagship areas
 * listed first in the data lead). Chicago areas first, then up to two
 * North Shore communities.
 */
export function getServiceNeighborhoods(serviceSlug: string, count = 8): Neighborhood[] {
  const type = serviceCatalog[serviceSlug]?.type ?? null;
  const eligible = neighborhoods.filter((n) =>
    serviceSlug === 'small-condo-association-management'
      ? !n.propertyTypes.includes('high-rises')
      : type
        ? n.propertyTypes.includes(type)
        : true
  );
  const rank = (n: Neighborhood) => (type ? n.propertyTypes.indexOf(type) : 0);
  const sorted = [...eligible].sort((a, b) => rank(a) - rank(b));
  const northShore = sorted.filter((n) => n.region === 'north-shore').slice(0, 2);
  const chicago = sorted.filter((n) => n.region !== 'north-shore').slice(0, count - northShore.length);
  return [...chicago, ...northShore];
}
