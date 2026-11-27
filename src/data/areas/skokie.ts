import type { AreaContent } from './types';

export const skokie: AreaContent = {
  slug: 'skokie',
  targetQuery: 'condo management skokie il',
  title: 'Condo Management in Skokie, IL | From $30/Unit | Stellar',
  metaDescription:
    'Condo and HOA management for Skokie boards: 4,700 homes in large buildings and a village rental rule with a condo exemption. From $30 per unit.',
  // TODO(Mirsad): how many associations and about how many units does Stellar
  // manage in or near Skokie? Until then the page says "we serve boards here".
  managed: null,
  context:
    'Skokie is a north suburb bordering Chicago, with mid-century single-family blocks, garden apartments and larger multi-story buildings. Most of its housing dates from the 1950s and 1960s.',
  housing: {
    intro:
      'These figures come from the Census Bureau’s 2020 to 2024 American Community Survey, as compiled by the Chicago Metropolitan Agency for Planning. Skokie has about 24,400 occupied homes.',
    stats: [
      { label: 'Median year a Skokie home was built', value: '1959' },
      { label: 'Homes built from 1940 through 1969', value: '16,281 (64.7%)' },
      { label: 'Homes in buildings of twenty or more units', value: '4,726 (18.8%)' },
      { label: 'Homes in buildings of three or four units', value: '2,263 (9.0%)' },
      { label: 'Homes in buildings of five to nine units', value: '1,331 (5.3%)' },
      { label: 'Homes in two-unit buildings', value: '1,094 (4.3%)' },
      { label: 'Detached single-family houses', value: '54.5%' },
      { label: 'Renter-occupied households', value: '25.3%' },
    ],
    takeaway:
      'About 41 percent of Skokie’s homes are in buildings of two or more units, and the single biggest group is the 4,700 homes in buildings of twenty units or more. Those buildings are now mostly sixty or seventy years old, so boilers, parking lots, balconies and masonry are the shared capital problems.',
  },
  buildingTypes: [
    {
      name: 'Large mid-century buildings',
      detail:
        'Buildings of twenty or more units, many with elevators and central boiler plants. They hold nearly a fifth of Skokie’s homes.',
    },
    {
      name: 'Three- and four-unit buildings and small courtyards',
      detail:
        'Together, two-, three- and four-unit buildings hold about 13 percent of homes, and many are owner-run.',
    },
    {
      name: 'Townhome and attached communities',
      detail:
        'About 1,100 attached single-family homes share walls, roofs and, often, common land governed by a declaration.',
    },
  ],
  issues: [
    {
      title: 'Aging mid-century systems',
      body:
        'Boilers, risers and balconies in buildings from the 1950s and 1960s are well past their first decades. A phased plan avoids paying for several failures at once.',
      post: 'vintage-chicago-condo-capital-planning',
      linkText: 'capital planning for older condominium buildings',
    },
    {
      title: 'Which rules a townhome community follows',
      body:
        'An attached community can be a condominium or a common interest community association, and the statutes differ on meetings, budgets and collection.',
      post: 'which-illinois-law-governs-condo-hoa-townhome',
      linkText: 'which Illinois law governs a condo, HOA or townhome',
    },
    {
      title: 'Insurance renewals on large old buildings',
      body:
        'A renewal checklist gives the board time to market the policy and compare terms well before the expiration date.',
      post: 'condo-hoa-insurance-renewal-checklist',
      linkText: 'a condo and HOA insurance renewal checklist',
    },
    {
      title: 'Keeping the budget adopted on time',
      body:
        'The budget has to be prepared, distributed and approved on a calendar. The guide gives the sequence and the notice that is required.',
      post: 'illinois-condo-hoa-budget-adoption-guide',
      linkText: 'an Illinois condo budget adoption guide',
    },
    {
      title: 'Fiduciary duties of volunteer directors',
      body:
        'A board member who is also a neighbor still owes the association loyalty and care. The guide explains what that means for conflicts and audits.',
      post: 'illinois-condo-board-fiduciary-duty-audit',
      linkText: 'fiduciary duties and audits for Illinois condo boards',
    },
  ],
  localItems: [
    {
      title: 'Rental unit registration',
      body:
        'Skokie requires residential rental units to be registered each year before they are rented, with a $25 fee per unit due by May 1. The village exempts rental units in condominium buildings with more than four units and an active management association. A condominium building of four units or fewer is not covered by that exemption.',
    },
    {
      title: 'Pre-sale inspections',
      body:
        'The village code also provides for a pre-sale inspection of some rental units, with its own fee. Check the village’s building and inspection pages for what applies to a given property.',
    },
    {
      title: 'Cook County reassessment',
      body:
        'Skokie is in Niles Township. Cook County reassessed the north suburbs in 2022 and 2025, and the next reassessment is 2028.',
    },
  ],
  feeRanges: null,
  photos: [],
  faqs: [
    {
      q: 'Does an owner who rents out a Skokie condo have to register?',
      a: 'Not if the unit is in a condominium building of more than four units with an active management association. A condominium building of four or fewer units, or any other rental, is covered by the village’s registration rule.',
      post: 'renting-out-your-condo-chicago-rules',
    },
    {
      q: 'When is the next reassessment for Skokie?',
      a: 'Skokie follows the north suburban group, which Cook County reassessed in 2025. The next reassessment is 2028.',
      post: 'cook-county-property-tax-appeal-condo-association',
    },
    {
      q: 'Are most Skokie condos in large buildings?',
      a: 'Census data show 4,726 homes in buildings of twenty or more units, compared with 2,263 in buildings of three or four. The count includes rental apartment buildings as well as condominiums.',
      post: 'condominium-property-management-chicago-what-board-members-should-expect',
    },
    {
      q: 'What should a board expect from a first-year manager?',
      a: 'A transition plan, monthly financials, a records handoff and a clear point of contact. The agreement review guide lists the clauses to check.',
      post: 'community-association-management-agreement-review',
    },
    {
      q: 'How do we enforce a parking rule fairly?',
      a: 'Adopt the rule in writing, give owners notice and offer a hearing before any fine. The guide explains the sequence.',
      post: 'illinois-association-fines-notice-hearing',
    },
  ],
  hasHighRises: false,
  sources: [
    { label: 'Skokie community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Skokie.pdf' },
    { label: 'Skokie rental unit registration', href: 'https://www.skokie.gov/524/Rental-Unit-Registration' },
    { label: 'Cook County property tax system and reassessment schedule', href: 'https://www.cookcountyassessoril.gov/cook-county-property-tax-system' },
  ],
};
