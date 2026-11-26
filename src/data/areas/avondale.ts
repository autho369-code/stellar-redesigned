import type { AreaContent } from './types';

export const avondale: AreaContent = {
  slug: 'avondale',
  targetQuery: 'condo management avondale chicago',
  title: 'Condo Management in Avondale, Chicago | From $30/Unit',
  metaDescription:
    'Condo and HOA management for Avondale boards: condo conversions, new townhomes, capital plans and lender questions. Flat fee from $30 per unit per month.',
  // TODO(Jojo): how many associations and about how many units does Stellar
  // manage in or near Avondale? Until then the page says "we serve boards here".
  managed: null,
  context:
    'Avondale is a growing northwest side neighborhood known for its craft breweries and dining scene. It has a growing number of condominium conversions and new townhome developments.',
  buildingTypes: [
    {
      name: 'Condominium conversions',
      detail:
        'Smaller buildings that became condominiums. Many start with a new board and no manager. The first board sets up the bank accounts, the insurance and the house rules, usually while its members are still unpacking.',
    },
    {
      name: 'New townhome developments',
      detail:
        'Newer communities where owners share exteriors and grounds, and where the first budgets set the pattern. A first budget that leaves out roof and siding reserves is hard to correct once owners are used to a low assessment.',
    },
  ],
  issues: [
    // Each issue rests on the linked guide. Owner has not confirmed them from experience; wording stays general.
    {
      title: 'Going without a manager',
      body:
        'A newly converted building often starts out self-managed. That can cut cost for a while, but the risks stay hidden until something goes wrong. Weigh them before the board decides to go it alone. Write down who handles the money, the records and the vendor calls, so the work does not sit with one neighbor.',
      post: 'self-managed-condo-association-problems',
      linkText: 'the hidden problems of a self-managed association',
    },
    {
      title: 'Old systems behind new finishes',
      body:
        'A converted building may still have older systems behind its new finishes. List the roof, the masonry, the plumbing risers and the heating plant, and give each one a date and a funding source.',
      post: 'vintage-chicago-condo-capital-planning',
      linkText: 'capital planning for older Chicago condo buildings',
    },
    {
      title: 'The statute behind a townhome association',
      body:
        'A townhome community next to a condominium may answer to a different Illinois statute. Read the recorded declaration before the board adopts a rule or a procedure. A conversion and a new townhome row on the same block can have very different documents.',
      post: 'which-illinois-law-governs-condo-hoa-townhome',
      linkText: 'which Illinois statute governs your community',
    },
    {
      title: 'Lender questionnaires',
      body:
        'A lender that sells its loan to Fannie Mae or Freddie Mac must confirm that the whole project is eligible, not only the buyer. Have the documents ready before the next questionnaire arrives. Keep the current budget, the insurance certificate and the reserve balance where the board can find them quickly.',
      post: 'fannie-freddie-condo-eligibility-board-guide',
      linkText: 'what lenders check about a condo project',
    },
    {
      title: 'Comparing management proposals',
      body:
        'Ask each firm for a written, flat-fee proposal with a defined scope. Then score them all on the same sheet, so price is not the only thing the board compares. Ask who the manager will be and how many other buildings that person handles.',
      post: 'score-condo-hoa-management-proposals',
      linkText: 'how to score management proposals',
    },
  ],
  // TODO(Jojo): typical monthly fee range from real recent proposals. Never estimate; never below the $30 starting fee.
  feeRanges: null,
  // TODO(Jojo): real photos only (public view): a converted Avondale building from the sidewalk; a new townhome row; a neighborhood street.
  photos: [],
  faqs: [
    {
      q: 'Is a newly converted Avondale condo building better off self-managed?',
      a: 'It can work for a small, stable building with engaged volunteers. The work and the legal duties stay with the board either way, and the risks are easy to miss until they surface.',
      post: 'self-managed-condo-association-problems',
    },
    {
      q: 'Why does a lender ask the association questions when one unit sells?',
      a: 'Lenders that sell loans to Fannie Mae or Freddie Mac must confirm that the whole project is eligible, not only the buyer. That is why the questionnaire comes to the board.',
      post: 'fannie-freddie-condo-eligibility-board-guide',
    },
    {
      q: 'How should a converted building plan its big repairs?',
      a: 'Write down each major system, when it will likely need work and how the association will pay for it. Review the list at every budget, so a repair is a planned project and not a surprise.',
      post: 'vintage-chicago-condo-capital-planning',
    },
    {
      q: 'What should a new Avondale condo board do in its first year?',
      a: 'Open the association’s own bank accounts, adopt a budget, confirm the insurance, and set a calendar for meetings and notices. Then decide who does the daily work.',
      post: 'illinois-condo-hoa-budget-adoption-guide',
    },
  ],
  hasHighRises: false,
};
