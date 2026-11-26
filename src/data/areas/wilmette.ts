import type { AreaContent } from './types';

export const wilmette: AreaContent = {
  slug: 'wilmette',
  targetQuery: 'condo management wilmette',
  title: 'Condo Management in Wilmette, IL | From $30/Unit | Stellar',
  metaDescription:
    'Condo, HOA and townhome management for Wilmette boards: vintage condos near the Metra, snow contracts and reserves. Flat fee from $30 per unit per month.',
  // TODO(Jojo): how many associations and about how many units does Stellar
  // manage in or near Wilmette? Until then the page says "we serve boards here".
  managed: null,
  context:
    'Wilmette is a North Shore village on the lakefront. It has vintage condominium buildings near the Metra and CTA, and townhome communities with shared exteriors.',
  buildingTypes: [
    {
      name: 'Vintage condominium buildings near the village center',
      detail:
        'Compact buildings around the Metra corridor. Older masonry, roofing, windows, drainage and mechanical systems drive the reserve plan.',
    },
    {
      name: 'Townhome communities',
      detail:
        'Shared roofs, siding, drives, landscaping and snow contracts work best when they are planned as one system.',
    },
  ],
  issues: [
    // Each issue rests on the linked guide. Owner has not confirmed them from experience; wording stays general.
    {
      title: 'Which Illinois statute applies',
      body:
        'A condominium and a townhome association can sit on the same street and answer to different statutes. The recorded declaration shows whether the Condominium Property Act or the Common Interest Community Association Act applies.',
      post: 'which-illinois-law-governs-condo-hoa-townhome',
      linkText: 'which Illinois law governs your association',
    },
    {
      title: 'Snow and ice contracts',
      body:
        'Snow contracts are signed in early fall and tested on a January morning. The more specific the written contract, the fewer arguments during a storm.',
      post: 'illinois-condo-hoa-snow-removal-vendor-guide',
      linkText: 'snow and ice vendor oversight for Illinois associations',
    },
    {
      title: 'Reserves for older buildings',
      body:
        'Illinois law does not set a fixed reserve percentage. The Condominium Property Act asks a condo board to budget reasonable reserves for its own circumstances. In an older building that means roofs, windows, masonry and mechanical systems.',
      post: 'reasonable-reserves-illinois-condo-law',
      linkText: 'what reasonable reserves means under Illinois condo law',
    },
    {
      title: 'Comparable vendor bids',
      body:
        'Bids only compare when every vendor prices the same written scope. For shared roofs, siding or drives, one scope and one insurance standard keep three bids from describing three different projects.',
      post: 'condo-hoa-vendor-rfp-checklist',
      linkText: 'the vendor RFP checklist for boards',
    },
    {
      title: 'Resale disclosures',
      body:
        'When a condominium unit is resold, Section 22.1 of the Illinois Condominium Property Act governs what the association must provide. A standing packet and one responsible person keep a closing from waiting on a volunteer.',
      post: 'illinois-section-22-1-disclosure-board-guide',
      linkText: 'the board guide to Section 22.1 disclosures',
    },
  ],
  // TODO(Jojo): typical monthly fee range from real recent proposals. Never estimate; never below the $30 starting fee.
  feeRanges: null,
  // TODO(Jojo): real photos only (public view): a Wilmette residential street or courtyard from the sidewalk; a lakefront or downtown Wilmette view.
  photos: [],
  faqs: [
    {
      q: 'Is a Wilmette townhome association governed by the Condominium Property Act?',
      a: 'Not necessarily. Property submitted to condominium ownership generally falls under the Illinois Condominium Property Act. Many townhome and homeowner associations fall under the Common Interest Community Association Act. The recorded declaration settles it.',
      post: 'which-illinois-law-governs-condo-hoa-townhome',
    },
    {
      q: 'Does Illinois require a set reserve percentage for condominiums?',
      a: 'No. Illinois law sets no fixed percentage. The Condominium Property Act asks boards to budget reasonable reserves in light of the association’s circumstances.',
      post: 'reasonable-reserves-illinois-condo-law',
    },
    {
      q: 'When should an association sign its snow contract?',
      a: 'Before the season. Contracts are commonly signed in September, well ahead of the first storm, with the scope written out in detail.',
      post: 'illinois-condo-hoa-snow-removal-vendor-guide',
    },
  ],
  hasHighRises: false,
};
