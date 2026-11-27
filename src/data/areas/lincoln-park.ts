import type { AreaContent } from './types';

export const lincolnPark: AreaContent = {
  slug: 'lincoln-park',
  targetQuery: 'condo management lincoln park chicago',
  title: 'Condo Management in Lincoln Park, Chicago | From $30/Unit',
  metaDescription:
    'Condo and HOA management for Lincoln Park boards, Sheffield to Wrightwood: resale disclosures, lender questions, reserves. Flat fee from $30 per unit.',
  // Per-area managed counts are company-private (owner decision, Nov 27, 2026), so this stays null and nothing is shown.
  managed: null,
  context:
    'Lincoln Park runs from vintage walk-ups to luxury high-rises along the lakefront. It includes Sheffield, the DePaul campus blocks, Ranch Triangle and Wrightwood.',
  housing: {
    intro:
      'Lincoln Park is Community Area 7. The figures below are Census Bureau American Community Survey estimates for 2020 to 2024, compiled by the Chicago Metropolitan Agency for Planning for the whole community area.',
    stats: [
      { label: 'Median year of construction', value: '1970' },
      { label: 'Built before 1940', value: '12,752 (34.0%)' },
      { label: 'Built since 2010', value: '3,281 (8.8%)' },
      { label: 'Living in three- and four-unit buildings', value: '5,481 (14.6%)' },
      { label: 'Living in five- to nine-unit buildings', value: '4,866 (13.0%)' },
      { label: 'Living in ten- to nineteen-unit buildings', value: '2,198 (5.9%)' },
      { label: 'Living in buildings of twenty or more units', value: '16,044 (42.8%)' },
      { label: 'Households that are owners', value: '15,117 (44.8%)' },
    ],
    takeaway:
      'Lincoln Park’s housing is a wide mix: 10.7 percent of homes are detached houses, 8.9 percent are attached houses and 42.8 percent are in buildings of twenty or more units. About a third of the homes (34.0 percent) predate 1940, so a vintage row-house association and a lakefront tower can be a few blocks apart with very different obligations.',
  },
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
  localItems: [
    {
      title: 'Mid-North and Armitage-Halsted districts',
      body:
        'Chicago designated the Mid-North district on August 31, 1977, the Armitage-Halsted district on February 5, 2003 and the Mid-North Extension on September 29, 2004. Exterior work on a building in one of these districts is reviewed by the City’s historic preservation staff before a permit is issued.',
    },
    {
      title: 'Exterior wall inspections',
      body:
        'Buildings 80 feet or taller fall under Chicago’s facade ordinance, Municipal Code 13-196-032 through 037, with critical examinations every 4, 8 or 12 years depending on category.',
    },
    {
      title: 'Energy benchmarking',
      body:
        'A residential building of 50,000 square feet or more reports energy and water use by June 1 each year. Condominiums are covered.',
    },
    {
      title: 'Reassessment',
      body:
        'The City was reassessed in 2024 and is reassessed again in 2027.',
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
    {
      q: 'Does our Lincoln Park building need City review for window or masonry work?',
      a: 'Only if it is inside a landmark district such as Mid-North or Armitage-Halsted, or is an individual landmark. The City’s landmark listing shows the districts. Elsewhere the normal permit process applies.',
      post: 'vintage-chicago-condo-capital-planning',
    },
    {
      q: 'Which Lincoln Park buildings are covered by the facade ordinance?',
      a: 'Buildings 80 feet or taller. The ordinance sets critical examination cycles of 4, 8 or 12 years depending on the building’s category, with short-form reports in between.',
      post: 'chicago-condo-facade-compliance-board-guide',
    },
  ],
  hasHighRises: true,
  sources: [
    { label: 'Lincoln Park community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Lincoln-Park.pdf' },
    { label: 'Chicago Landmarks, official list of landmark districts', href: 'https://webapps1.chicago.gov/landmarksweb/web/listings.htm' },
    { label: 'Chicago exterior wall inspection program', href: 'https://www.chicago.gov/city/en/depts/bldgs/provdrs/inspect/svcs/exterior_wall_program.html' },
    { label: 'Chicago Energy Benchmarking', href: 'https://www.chicago.gov/city/en/depts/env/supp_info/energy-benchmarking.html' },
    { label: 'Cook County property tax system and reassessment schedule', href: 'https://www.cookcountyassessoril.gov/cook-county-property-tax-system' },
  ],
};
