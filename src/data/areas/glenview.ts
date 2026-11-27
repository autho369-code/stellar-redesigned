import type { AreaContent } from './types';

export const glenview: AreaContent = {
  slug: 'glenview',
  targetQuery: 'hoa management glenview il',
  title: 'HOA & Condo Management in Glenview, IL | From $30/Unit',
  metaDescription:
    'HOA, townhome and condo management for Glenview boards: The Glen, snow contracts, roofing bids and reserves. Flat fee from $30 per unit per month.',
  // Per-area managed counts are company-private (owner decision, Nov 27, 2026), so this stays null and nothing is shown.
  managed: null,
  context:
    'Glenview blends established tree-lined neighborhoods with newer master-planned communities like The Glen, built on the former Glenview Naval Air Station. Townhome and condominium associations are common, and the village has two Metra stations.',
  housing: {
    intro:
      'Glenview is a Cook County village with about 18,400 occupied homes. The figures below are Census Bureau American Community Survey estimates for 2020 to 2024, compiled by the Chicago Metropolitan Agency for Planning.',
    stats: [
      { label: 'Typical home was built in (median year)', value: '1977' },
      { label: 'Share of homes that predate 1940', value: '749 (3.9%)' },
      { label: 'Mid-century homes, built 1940 to 1969', value: '6,888 (35.9%)' },
      { label: 'Newer homes, built 2010 or later', value: '1,917 (10.0%)' },
      { label: 'Homes that are detached houses', value: '11,869 (61.8%)' },
      { label: 'Homes that are attached houses', value: '2,478 (12.9%)' },
      { label: 'Large buildings, twenty or more units', value: '3,098 (16.1%)' },
      { label: 'Owner-occupied households', value: '14,555 (78.9%)' },
    ],
    takeaway:
      'Glenview is a village of owners: 78.9 percent of households own their home, 61.8 percent of homes are detached houses and another 12.9 percent are attached houses such as townhomes. A quarter of the housing (25.7 percent) went up between 1990 and 2009, and 10 percent since 2010, so many townhome and The Glen associations are now at the age when roofs, siding and roads come due.',
  },
  buildingTypes: [
    {
      name: 'Townhome associations',
      detail:
        'Communities from the 1970s to recent construction, where roofing, siding and private roads are the large shared costs. A community that replaces all of them in the same few years needs the order and the funding decided early.',
    },
    {
      name: 'Master and sub-associations at The Glen',
      detail:
        'Layered communities around Gallery Park and The Glen Town Center, where each layer has its own documents and budget.',
    },
    {
      name: 'Condominium buildings',
      detail:
        'Boutique buildings with shared systems and a small board. The same three or four owners often serve for years, so written procedures protect the building when they step down.',
    },
  ],
  issues: [
    // Each issue rests on the linked guide. Owner has not confirmed them from experience; wording stays general.
    {
      title: 'Which statute and which documents',
      body:
        'In a layered community, start with the documents for your own association, then the master documents. The recorded declaration also shows whether the Condominium Property Act or the Common Interest Community Association Act applies. Owners at The Glen can belong to more than one association, so one question may have two answers.',
      post: 'which-illinois-law-governs-condo-hoa-townhome',
      linkText: 'the Illinois statute that governs your association',
    },
    {
      title: 'Snow and landscape contracts',
      body:
        'Owners judge these contracts first. Write down the service level, the areas covered and how each visit is recorded, and sign before the season starts. With two Metra stations in the village, early-morning clearing times matter to commuters.',
      post: 'illinois-condo-hoa-snow-removal-vendor-guide',
      linkText: 'overseeing a snow and ice vendor',
    },
    {
      title: 'Bids for roofing, siding and roads',
      body:
        'Three bids only help when all three price the same written scope. Set the scope and the insurance requirements before any contractor walks the property. For private roads, ask each bidder to price the same base repair and the same surface.',
      post: 'condo-hoa-vendor-rfp-checklist',
      linkText: 'writing a vendor RFP the board can compare',
    },
    {
      title: 'Paying for the large projects',
      body:
        'When a roofing or road project is financed, the lender looks at assessment income and at governance. A board can improve both well before it asks for a loan. Start with the reserve plan, so the board knows how much to borrow and how much to pay from savings.',
      post: 'condo-hoa-capital-project-loan-preparation',
      linkText: 'preparing for an association project loan',
    },
    {
      title: 'When something breaks at night',
      body:
        'Decide ahead of time who may approve urgent work, who is called and in what order, and how owners are told. Keep the written record for the insurer. One page is enough if every board member has a copy.',
      post: 'condo-hoa-emergency-planning-checklist',
      linkText: 'an emergency plan for your association',
    },
  ],
  localItems: [
    {
      title: 'Village refuse contract for multi-unit properties',
      body:
        'Glenview’s refuse contract covers single-family homes and buildings with up to two attached units. A property with three or more attached units can opt in if every household participates and it buys the Village carts, but under Chapter 58 of the Village Code the choice cannot be reversed. An association that opts out contracts a private hauler.',
    },
    {
      title: 'Private haulers are licensed',
      body:
        'The Village licenses firms that collect from properties other than single-family homes, and a license can be cancelled by either side on 90 days’ written notice. A board bidding a hauler should confirm the firm holds the Village license.',
    },
    {
      title: 'Reassessment',
      body:
        'Glenview’s townships are on Cook County’s north suburban calendar, which was reassessed in 2022 and 2025. The next reassessment is 2028.',
    },
  ],
  // TODO(Jojo): typical monthly fee range from real recent proposals. Never estimate; never below the $30 starting fee.
  feeRanges: null,
  // TODO(Jojo): real photos only (public view): a Glenview townhome street from the sidewalk; Gallery Park or The Glen Town Center (public view).
  photos: [],
  faqs: [
    {
      q: 'Which Illinois law covers a Glenview townhome association?',
      a: 'Many townhome and homeowner associations are governed by the Common Interest Community Association Act, and condominiums by the Condominium Property Act. Your recorded declaration shows which applies. Confirm with association counsel.',
      post: 'which-illinois-law-governs-condo-hoa-townhome',
    },
    {
      q: 'How do we compare bids for a roofing or road project?',
      a: 'Give every contractor the same written scope and the same insurance requirements. Bids that describe different projects cannot be compared on price.',
      post: 'condo-hoa-vendor-rfp-checklist',
    },
    {
      q: 'When should a Glenview association sign its snow contract?',
      a: 'Before the season. Snow contracts are commonly signed in September, with the service level and the record-keeping written into the contract.',
      post: 'illinois-condo-hoa-snow-removal-vendor-guide',
    },
    {
      q: 'What is the first step for a Glenview board that wants a new manager?',
      a: 'Tell us the unit count, the age of the community and what is not working. We answer with a written flat-fee proposal and a defined scope, so your board can compare it with what it has today.',
      post: 'switch-condo-management-companies-chicago',
    },
    {
      q: 'Can a Glenview townhome association switch from the Village refuse program later?',
      a: 'No. Under the Village Code, a property with three or more attached units that opts into the Village contract gives up the right to hire another hauler, so the board should compare prices before it applies.',
      post: 'condo-hoa-vendor-rfp-checklist',
    },
  ],
  hasHighRises: false,
  sources: [
    { label: 'Glenview community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Glenview.pdf' },
    { label: 'Glenview garbage and recycling, multi-family opt-in program', href: 'https://www.glenview.il.us/620/Garbage-Recycling' },
    { label: 'Glenview Code of Ordinances, Chapter 58 Solid Waste', href: 'https://library.municode.com/IL/Glenview/codes/Code_of_Ordinances?nodeId=MUCO_CH58SOWA' },
    { label: 'Cook County property tax system and reassessment schedule', href: 'https://www.cookcountyassessoril.gov/cook-county-property-tax-system' },
  ],
};
