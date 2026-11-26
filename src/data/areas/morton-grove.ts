import type { AreaContent } from './types';

export const mortonGrove: AreaContent = {
  slug: 'morton-grove',
  targetQuery: 'condo management morton grove',
  title: 'Condo Management in Morton Grove, IL | From $30/Unit | Stellar',
  metaDescription:
    'Condo, HOA and townhome management for Morton Grove boards: reserves, Cook County tax appeals and budgets. Flat fee from $30 per unit per month.',
  // TODO(Jojo): how many associations and about how many units does Stellar
  // manage in or near Morton Grove? Until then the page says "we serve boards here".
  managed: null,
  context:
    'Morton Grove is a Cook County village west of Skokie with a Metra station on the Milwaukee District North Line. It has condominium buildings, townhome communities and homeowner associations, many of them long-established.',
  buildingTypes: [
    {
      name: 'Long-established condominium buildings',
      detail:
        'Buildings now reaching the years when roofs, masonry and mechanical systems come due. Owners who bought decades ago may remember lower assessments, so the board has to show the plan behind each increase.',
    },
    {
      name: 'Townhome communities and homeowner associations',
      detail:
        'Communities where many owners commute and are away during the day, so written notices matter more than lobby notices. A board that meets in the evening and posts minutes promptly keeps those owners involved.',
    },
  ],
  issues: [
    // Each issue rests on the linked guide. Owner has not confirmed them from experience; wording stays general.
    {
      title: 'Reserves in the expensive decade',
      body:
        'In a long-established community, roofs, masonry and mechanical systems come due close together. Illinois sets no fixed reserve percentage, so the board’s own plan has to show what is needed and when. A phased calendar lets the board bid one project at a time and spread the cost over several years.',
      post: 'reasonable-reserves-illinois-condo-law',
      linkText: 'reasonable reserves under Illinois condo law',
    },
    {
      title: 'The lender reserve line for 2027',
      body:
        'For loan applications dated January 4, 2027 or later, Fannie Mae and Freddie Mac look for 15% of budgeted assessment income set aside for reserves, up from 10%. Check where your budget stands before owners list their units. The treasurer can read this line in the current budget in a few minutes.',
      post: 'fannie-freddie-condo-reserve-15-percent-2027',
      linkText: 'the 2027 reserve minimum for condo loans',
    },
    {
      title: 'Property tax appeals',
      body:
        'Morton Grove is in Cook County. One appeal can cover every unit in a condominium building, and any savings go to the owners, not to the association. Owners ask about it most in reassessment years, so decide ahead of time who files.',
      post: 'cook-county-property-tax-appeal-condo-association',
      linkText: 'how a condo board handles a Cook County tax appeal',
    },
    {
      title: 'Explaining the budget',
      body:
        'Give notice early, explain each change in plain words, and keep the board vote on a fixed calendar. Disputes usually start with a step that was skipped, not with the numbers. Many owners take the Metra downtown and read notices at night, so send them through the portal and by email as well as on paper.',
      post: 'illinois-condo-hoa-budget-adoption-guide',
      linkText: 'adopting the annual budget step by step',
    },
    {
      title: 'Bids for roofs and masonry',
      body:
        'A phased project still needs bids the board can compare. Use one written scope and one insurance standard for every contractor, and keep the bid sheets with the minutes.',
      post: 'condo-hoa-vendor-rfp-checklist',
      linkText: 'comparing contractor bids on capital work',
    },
  ],
  // TODO(Jojo): typical monthly fee range from real recent proposals. Never estimate; never below the $30 starting fee.
  feeRanges: null,
  // TODO(Jojo): real photos only (public view): a Morton Grove condominium building from the sidewalk; a townhome street.
  photos: [],
  faqs: [
    {
      q: 'Can a Morton Grove condo association appeal property taxes for all owners?',
      a: 'One filing can cover every unit in a condominium building. The savings land with the owners and not in the association budget.',
      post: 'cook-county-property-tax-appeal-condo-association',
    },
    {
      q: 'How much should go to reserves under the 2027 lender rule?',
      a: 'Fannie Mae and Freddie Mac look for at least 15% of budgeted assessment income on loan applications dated January 4, 2027 or later. Illinois law itself names no percentage.',
      post: 'fannie-freddie-condo-reserve-15-percent-2027',
    },
    {
      q: 'How does a Morton Grove board compare roofing or masonry bids?',
      a: 'Give each contractor the same written scope and the same insurance requirements, so every price describes the same job. Record why the board chose the winner.',
      post: 'condo-hoa-vendor-rfp-checklist',
    },
    {
      q: 'How far ahead should a board plan a roof or masonry project?',
      a: 'Far enough to bid it properly and fund it on purpose. Put the project on a multi-year calendar with a cost estimate and a funding source, and review it at every budget.',
      post: 'reasonable-reserves-illinois-condo-law',
    },
  ],
  hasHighRises: false,
};
