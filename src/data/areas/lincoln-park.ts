import type { AreaContent } from './types';

export const lincolnPark: AreaContent = {
  slug: 'lincoln-park',
  targetQuery: 'condo management lincoln park chicago',
  title: 'Condo Management in Lincoln Park, Chicago | From $30/Unit',
  metaDescription:
    'Condo and HOA management for Lincoln Park boards, Sheffield to Wrightwood: resale disclosures, lender questions, reserves. Flat fee from $30 per unit.',
  // TODO(Jojo): how many associations and about how many units does Stellar
  // manage in or near Lincoln Park?
  managed: null,
  context:
    'Lincoln Park runs from vintage walk-ups to luxury high-rises along the lakefront. It includes Sheffield, the DePaul campus blocks, Ranch Triangle and Wrightwood.',
  buildingTypes: [
    {
      name: 'Vintage walk-ups',
      detail:
        'Converted three-flats and courtyard buildings on streets like Fremont, Seminary and Cleveland, where one deferred roof or porch decision matters to a tight budget.',
    },
    {
      name: 'Luxury lakefront high-rises',
      detail:
        'Towers along Lincoln Park West and Lakeview Avenue, with door staff, vintage elevators and masonry facades.',
    },
  ],
  issues: [
    // TODO(Jojo): confirm each issue from real experience; delete any that do not fit.
    {
      title: 'Resale disclosures (Section 22.1)',
      body:
        'Every condominium resale brings a Section 22.1 disclosure request to the association. The guide shows what to have ready before the request arrives, and why one accountable person should own the workflow.',
      post: 'illinois-section-22-1-disclosure-board-guide',
      linkText: 'Illinois Section 22.1 disclosures: a board guide',
    },
    {
      title: 'Fannie Mae and Freddie Mac project eligibility',
      body:
        'A lender’s project review runs on what the board and management supply: budgets, reserve figures, insurance certificates and litigation status. Keeping a current lender packet means a buyer’s loan does not wait on the association.',
      post: 'fannie-freddie-condo-eligibility-board-guide',
      linkText: 'Fannie Mae and Freddie Mac condo eligibility',
    },
    {
      title: 'Reserves',
      body:
        'There is no magic reserve threshold in Illinois. A board is judged on whether it weighed the right factors, in good faith and with real information, and wrote down what it concluded.',
      post: 'reasonable-reserves-illinois-condo-law',
      linkText: 'what “reasonable reserves” means for an Illinois condo board',
    },
    {
      title: 'Vendor RFPs',
      body:
        'Put the scope, the insurance requirements and the warranty terms in the request itself, so every vendor prices them. Have association counsel review the contract template once, then reuse it.',
      post: 'condo-hoa-vendor-rfp-checklist',
      linkText: 'vendor RFP checklist for condo and HOA boards',
    },
    {
      title: 'Choosing a manager',
      body:
        'Agree on the scoring criteria and their weights before proposals arrive, and have each director score on their own. That produces a decision the board can explain to owners.',
      post: 'score-condo-hoa-management-proposals',
      linkText: 'how to compare Chicago condo and HOA management companies',
    },
  ],
  // TODO(Jojo): typical monthly fee range for a 12-, 24- and 48-unit building
  // in Lincoln Park, from real recent proposals. Never estimate.
  feeRanges: null,
  // TODO(Jojo): real photos only: a vintage walk-up block (public view); a
  // lakefront high-rise (public view); a tree-lined street in Sheffield or Ranch Triangle.
  photos: [],
  faqs: [
    {
      q: 'What does Section 22.1 ask of a Lincoln Park condo board?',
      a: 'Section 22.1 of the Illinois Condominium Property Act covers the disclosure documents a condominium association provides when a unit is resold. It applies to condominiums. Have the documents ready before a request arrives, and have association counsel confirm the current requirements.',
      post: 'illinois-section-22-1-disclosure-board-guide',
    },
    {
      q: 'What will a buyer’s lender ask our association for?',
      a: 'Budgets, reserve figures, insurance certificates, litigation status and disclosures about deferred maintenance. The practical answer is to keep an always-current lender packet.',
      post: 'fannie-freddie-condo-eligibility-board-guide',
    },
    {
      q: 'How should our board compare management proposals?',
      a: 'Set the criteria and their weights before any proposal arrives. Then have each director score every firm independently before the board discusses them.',
      post: 'score-condo-hoa-management-proposals',
    },
  ],
  hasHighRises: true,
};
