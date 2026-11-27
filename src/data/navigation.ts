import { brand } from '../brand/brand.config';

/**
 * One list of links for the header, the phone menu and the footer.
 * tests/link-inventory.spec.ts holds every link the old header and footer
 * had; a link may move between menus but may not disappear.
 */
export interface NavLink {
  name: string;
  href: string;
  external?: boolean;
}

export interface NavGroup {
  title: string;
  links: NavLink[];
}

export const servicesByBuilding: NavGroup = {
  title: 'By building type',
  links: [
    { name: 'Condominium management', href: '/services/condominium-management' },
    { name: 'High-rise management', href: '/services/high-rise-condominium-management' },
    { name: 'Small condo associations', href: '/services/small-condo-association-management' },
    { name: 'HOA management', href: '/services/hoa-management' },
    { name: 'Townhome management', href: '/services/townhome-management' },
  ],
};

export const servicesByTask: NavGroup = {
  title: 'What we handle',
  links: [
    { name: 'Financial management', href: '/services/financial-management' },
    { name: 'Maintenance coordination', href: '/services/maintenance-coordination' },
    { name: 'Board support', href: '/services/board-support' },
    { name: 'Violation management', href: '/services/violation-management' },
    { name: 'Resale disclosures', href: '/services/resale-disclosures' },
  ],
};

export const allServicesLink: NavLink = { name: 'All services', href: '/services' };
export const pricingLink: NavLink = { name: 'Pricing', href: '/pricing' };
export const reviewsLink: NavLink = { name: 'Reviews', href: '/reviews' };

export const regionLinks: NavGroup = {
  title: 'Where we work',
  links: [
    { name: 'Chicago', href: '/property-management-chicago' },
    { name: 'North Shore', href: '/property-management-north-shore' },
    { name: 'All service areas', href: '/service-areas' },
  ],
};

/**
 * The eight area pages shown in the menu and footer. Order: Search Console
 * impressions, last 3 months (docs/gsc-area-pages-2026-11-26.md). Clicks per
 * page are still too few to rank by. Edit this list to change the menu.
 */
export const topNeighborhoods: NavGroup = {
  title: 'Popular areas',
  links: [
    { name: 'Wilmette', href: '/property-management-wilmette' },
    { name: 'Ravenswood', href: '/property-management-ravenswood' },
    { name: 'Lake Forest', href: '/property-management-lake-forest' },
    { name: 'Avondale', href: '/property-management-avondale' },
    { name: 'Hyde Park', href: '/property-management-hyde-park' },
    { name: 'River North', href: '/property-management-river-north' },
    { name: 'Morton Grove', href: '/property-management-morton-grove' },
    { name: 'Old Town', href: '/property-management-old-town' },
  ],
};

export const boardResources: NavGroup = {
  title: 'For boards',
  links: [
    { name: 'Board guides', href: '/blog' },
    { name: 'Governance & Illinois law', href: '/blog/topic/board-governance-illinois-law' },
    { name: 'Finance & reserves', href: '/blog/topic/association-finance-reserves' },
    { name: 'Building operations', href: '/blog/topic/building-operations-capital-planning' },
    { name: 'Choosing management', href: '/blog/topic/choosing-association-management' },
    { name: 'Board toolkit: RFP & checklists', href: '/board-toolkit' },
    { name: 'Proposal scorecard', href: '/tools/compare-management-proposals' },
  ],
};

export const residentResources: NavGroup = {
  title: 'For residents',
  links: [
    { name: "The Owner's Companion", href: '/condo-living' },
    { name: 'Resource center', href: '/resources' },
    { name: 'Report a violation', href: '/resources?form=violation' },
    { name: 'Board nomination', href: '/resources?form=nomination' },
  ],
};

export const aboutLinks: NavGroup = {
  title: 'About',
  links: [
    { name: 'About the firm', href: '/about' },
    { name: 'Mirsad Cerimovic, Principal', href: '/about/mirsad-cerimovic' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Contact', href: '/contact' },
  ],
};

/** Small row above the header on desktop; also in the phone menu. */
export const residentPortalLink: NavLink = { name: 'Pay & portal', href: brand.portalUrl, external: true };
export const agentsLink: NavLink = { name: 'Resale documents', href: '/services/resale-disclosures' };

export const legalLinks: NavLink[] = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms of Service', href: '/terms-of-service' },
  { name: 'AI Info', href: '/ai-info' },
];
