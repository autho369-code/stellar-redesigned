import type { AreaContent } from './types';

export const wilmette: AreaContent = {
  slug: 'wilmette',
  targetQuery: 'condo management wilmette',
  title: 'Condo Management in Wilmette, IL | From $30/Unit | Stellar',
  metaDescription:
    'Condo, HOA and townhome management for Wilmette boards: vintage condos near the Metra, snow contracts and reserves. Flat fee from $30 per unit per month.',
  // Per-area managed counts are company-private (owner decision, Nov 27, 2026), so this stays null and nothing is shown.
  managed: null,
  context:
    'Wilmette is a North Shore village on the lakefront. It has vintage condominium buildings near the Metra and CTA, and townhome communities with shared exteriors.',
  housing: {
    intro:
      'Wilmette is a Cook County village of about 10,300 occupied homes. The figures below are Census Bureau American Community Survey estimates for 2020 to 2024, compiled by the Chicago Metropolitan Agency for Planning.',
    stats: [
      { label: 'Typical home was built in (median year)', value: '1957' },
      { label: 'Share of homes that predate 1940', value: '3,050 (28.6%)' },
      { label: 'Mid-century homes, built 1940 to 1969', value: '4,828 (45.2%)' },
      { label: 'Newer homes, built 2010 or later', value: '546 (5.1%)' },
      { label: 'Homes that are detached houses', value: '8,144 (76.3%)' },
      { label: 'Large buildings, twenty or more units', value: '1,524 (14.3%)' },
      { label: 'Homes that are attached houses', value: '569 (5.3%)' },
      { label: 'Owner-occupied households', value: '9,045 (87.9%)' },
    ],
    takeaway:
      'Wilmette’s median home dates to 1957 and 28.6 percent were built before 1940, but the larger group is the 45.2 percent built between 1940 and 1969. Owners are 87.9 percent of households and 76.3 percent of homes are detached houses, so condominium and townhome associations sit within a village of long-held single-family homes.',
  },
  buildingTypes: [
    {
      name: 'Vintage condominium buildings near the village center',
      detail:
        'Compact buildings around the Metra corridor. Older masonry, roofing, windows, drainage and mechanical systems drive the reserve plan. A compact site also means contractors need clear rules for parking, staging and working hours.',
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
        'Snow contracts are signed in early fall and tested on a January morning. The more specific the written contract, the fewer arguments during a storm. Walks to the Metra and shared drives deserve their own line in the scope.',
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
        'Bids only compare when every vendor prices the same written scope. For shared roofs, siding or drives, one scope and one insurance standard keep three bids from describing three different projects. File the bid sheets with the minutes, so the next board can see why a contractor was chosen.',
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
  localItems: [
    {
      title: 'Sewer laterals are the owner’s responsibility',
      body:
        'Under the Village Code, the property owner maintains the sewer lateral from the building up to and including the connection to the main sewer. For an association, that makes the lateral a common expense. The Village recommends cleaning and televising laterals regularly and keeps a list of firms that perform lateral cleaning, televising and flood assessments at fixed prices.',
    },
    {
      title: 'Backups and street flooding',
      body:
        'East of Ridge Road, standing water in streets can be caused by inlet restrictors that protect basements from sewer backups, so the Village asks residents to call Public Works rather than assume a fault. The Village also asks owners to report any sewer backup, because it tracks them to judge its sewer improvements.',
    },
    {
      title: 'Reassessment cycle',
      body:
        'Wilmette is in New Trier Township, on Cook County’s north suburban calendar. It was reassessed in 2022 and 2025, and the next reassessment is 2028.',
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
    {
      q: 'Can a Wilmette board see the fee before it commits to anything?',
      a: 'Yes. We send a written proposal with one flat monthly fee and a defined scope before your board decides anything.',
      post: 'score-condo-hoa-management-proposals',
    },
    {
      q: 'Who pays to repair a damaged sewer lateral at a Wilmette condominium?',
      a: 'Under the Village Code the property owner maintains the lateral up to the connection to the main. For a condominium, that is usually the association as a common expense, subject to the declaration.',
      post: 'condo-repairs-owner-vs-association-illinois',
    },
  ],
  hasHighRises: false,
  sources: [
    { label: 'Wilmette community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Wilmette.pdf' },
    { label: 'Wilmette flooding and flood prevention', href: 'https://www.wilmette.gov/372/Flooding-Flood-Prevention' },
    { label: 'Cook County property tax system and reassessment schedule', href: 'https://www.cookcountyassessoril.gov/cook-county-property-tax-system' },
  ],
};
