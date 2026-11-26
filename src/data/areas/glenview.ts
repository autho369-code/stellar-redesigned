import type { AreaContent } from './types';

export const glenview: AreaContent = {
  slug: 'glenview',
  targetQuery: 'hoa management glenview il',
  title: 'HOA & Condo Management in Glenview, IL | From $30/Unit',
  metaDescription:
    'HOA, townhome and condo management for Glenview boards: The Glen, snow contracts, roofing bids and reserves. Flat fee from $30 per unit per month.',
  // TODO(Jojo): how many associations and about how many units does Stellar
  // manage in or near Glenview? Until then the page says "we serve boards here".
  managed: null,
  context:
    'Glenview blends established tree-lined neighborhoods with newer master-planned communities like The Glen, built on the former Glenview Naval Air Station. Townhome and condominium associations are common, and the village has two Metra stations.',
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
  ],
  hasHighRises: false,
};
