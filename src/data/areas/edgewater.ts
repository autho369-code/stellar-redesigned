import type { AreaContent } from './types';

export const edgewater: AreaContent = {
  slug: 'edgewater',
  targetQuery: 'condo management edgewater chicago',
  title: 'Condo Management in Edgewater, Chicago | From $30/Unit',
  metaDescription:
    'Condo and HOA management for Edgewater boards: lakefront high-rises, facade reports, life safety and reserves. Flat fee from $30 per unit per month.',
  // Per-area managed counts are company-private (owner decision, Nov 27, 2026), so this stays null and nothing is shown.
  managed: null,
  context:
    'Edgewater is known for its lakefront high-rises and for historic residential hotels converted to condominiums. Many buildings here are large, with complex mechanical systems and significant common areas.',
  housing: {
    intro:
      'Edgewater is Community Area 77, on the lakefront between Foster Avenue and Devon Avenue. The figures below are Census Bureau American Community Survey estimates for 2020 to 2024, as compiled by the Chicago Metropolitan Agency for Planning.',
    stats: [
      { label: 'Median year the housing stock was built', value: '1950' },
      { label: 'Pre-1940 construction', value: '14,231 (42.6%)' },
      { label: 'Construction since 2010', value: '849 (2.5%)' },
      { label: 'Buildings of five to nine units', value: '4,390 (13.1%)' },
      { label: 'Buildings of ten to nineteen units', value: '2,647 (7.9%)' },
      { label: 'Buildings of twenty or more units', value: '18,440 (55.2%)' },
      { label: 'Owner households', value: '11,412 (37.4%)' },
      { label: 'Renter households', value: '19,089 (62.6%)' },
    ],
    takeaway:
      'More than half of Edgewater’s homes (55.2 percent) are in buildings of twenty or more units, and the median home dates to 1950. Large mid-century and earlier towers mean elevators, boilers and facades on a board’s annual calendar, and 62.6 percent renter households mean owners in the building often have a different stake in a capital plan.',
  },
  buildingTypes: [
    {
      name: 'Lakefront high-rises',
      detail:
        'Tall buildings along the lake. Exterior walls, life-safety systems and the mechanical plant shape the budget year after year. Decisions here usually span several years, so each board should hand the next one a written plan.',
    },
    {
      name: 'Historic residential hotels converted to condominiums',
      detail:
        'Older, large buildings that became condominiums. They combine vintage construction with many units and big common areas. Large lobbies and long corridors need their own maintenance line.',
    },
    // TODO(Jojo): confirm "Mid-rise courtyard buildings".
  ],
  issues: [
    // TODO(Jojo): confirm each issue from real experience; delete any that do not fit.
    {
      title: 'Exterior wall (facade) reports',
      body:
        'Chicago’s exterior wall rules cover buildings 80 feet or more in height. A tower’s board should confirm its inspection cycle and filing dates with the City and a licensed engineer or architect. Then it should treat facade work as a planned, multi-year program. On the lakefront, ask the engineer to look closely at the joints and sealant that face the wind.',
      post: 'chicago-condo-facade-compliance-board-guide',
      linkText: 'Chicago facade compliance guide for condo boards',
    },
    {
      title: 'Life-safety planning',
      body:
        'What applies to a high-rise depends on its height, age, construction and existing systems. The board’s first job is a written, building-specific statement of the requirements from a qualified fire-protection engineer or life-safety consultant. Share the summary with owners, so the cost that follows is not a surprise.',
      post: 'chicago-condo-life-safety-board-planning',
      linkText: 'Chicago high-rise life-safety planning',
    },
    {
      title: 'Reserves and the new lender reserve test',
      body:
        'For loan applications dated on or after January 4, 2027, Fannie Mae and Freddie Mac look for a reserve allocation of at least 15% of budgeted assessment income, up from 10%. In a large building, the 2027 budget is where that is decided. Show owners the reserve line beside last year’s, so the change is easy to see.',
      post: 'fannie-freddie-condo-reserve-15-percent-2027',
      linkText: 'the 15% Fannie Mae and Freddie Mac reserve minimum for 2027',
    },
    {
      title: 'Capital project loans',
      body:
        'When an association borrows for a large project, the lender looks at two things: reliable assessment income and sound governance. A board can improve both in the months before it applies. Minutes, budgets and the delinquency report are the first things to put in order.',
      post: 'condo-hoa-capital-project-loan-preparation',
      linkText: 'preparing an association for a capital project loan',
    },
    {
      title: 'Emergency planning',
      body:
        'A burst riser in a tower reaches many units at once. A short written plan should say who can authorize emergency work, who gets called and in what order, how owners are told, and how it is all documented for insurance. Keep a printed copy at the front desk and in the engineer’s office.',
      post: 'condo-hoa-emergency-planning-checklist',
      linkText: 'association emergency planning playbook',
    },
  ],
  localItems: [
    {
      title: 'Exterior wall inspections',
      body:
        'Chicago’s facade rules in Municipal Code 13-196-032 through 037 cover buildings 80 feet and taller. Critical examinations recur every 4, 8 or 12 years depending on the building’s category, with short-form reports due each November 1 in between.',
    },
    {
      title: 'Annual elevator reporting',
      body:
        'Each year the City’s Annual Inspection Certification program has the owner hire a state-licensed third-party inspector and report the result through the Department of Buildings portal.',
    },
    {
      title: 'Energy benchmarking',
      body:
        'A residential building of 50,000 square feet or more reports energy and water use each year by June 1. Condominiums are included, and a licensed professional verifies the data every third year.',
    },
    {
      title: 'Reassessment',
      body:
        'The City was reassessed in 2024 and is reassessed again in 2027.',
    },
  ],
  // TODO(Jojo): typical monthly fee range for buildings of several sizes in
  // Edgewater, from real recent proposals. Never estimate.
  feeRanges: null,
  // TODO(Jojo): real photos only: the lakefront high-rise skyline along Sheridan
  // Rd (public view); a historic facade detail (public view).
  photos: [],
  faqs: [
    {
      q: 'Does our Edgewater high-rise fall under Chicago’s exterior wall program?',
      a: 'The program covers buildings 80 feet or more in height. Confirm your building’s obligations, inspection cycle and filing dates with the City of Chicago and a licensed structural engineer or architect.',
      post: 'chicago-condo-facade-compliance-board-guide',
    },
    {
      q: 'What reserve level will lenders look for in 2027?',
      a: 'For loan applications dated on or after January 4, 2027, Fannie Mae and Freddie Mac look for a replacement-reserve allocation of at least 15% of budgeted assessment income. Illinois law itself sets no fixed percentage.',
      post: 'fannie-freddie-condo-reserve-15-percent-2027',
    },
    {
      q: 'Who can approve an emergency repair in a large building at night?',
      a: 'That authority comes from your declaration, your bylaws and the statute that applies. Ask association counsel once what the board may authorize without a meeting, and write the answer into the emergency plan.',
      post: 'condo-hoa-emergency-planning-checklist',
    },
    {
      q: 'Does our Edgewater tower have to benchmark energy use?',
      a: 'A residential building of 50,000 square feet or more must report energy and water use to the City each year, and condominiums are covered. Many Edgewater towers are above that size.',
      post: 'chicago-condo-association-compliance-calendar',
    },
    {
      q: 'Who inspects the elevators in a lakefront high-rise?',
      a: 'The owner, which is the association, hires a state-licensed independent inspector each year and reports through the City’s AIC portal. The board should treat it as a fixed annual task.',
      post: 'chicago-condo-life-safety-board-planning',
    },
  ],
  hasHighRises: true,
  sources: [
    { label: 'Edgewater community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Edgewater.pdf' },
    { label: 'Chicago exterior wall inspection program', href: 'https://www.chicago.gov/city/en/depts/bldgs/provdrs/inspect/svcs/exterior_wall_program.html' },
    { label: 'Chicago Department of Buildings, annual elevator inspection reporting (AIC)', href: 'https://www.chicago.gov/city/en/depts/bldgs/provdrs/inspect/svcs/annual_inspectioncertificationaicprogramupdate.html' },
    { label: 'Chicago Energy Benchmarking', href: 'https://www.chicago.gov/city/en/depts/env/supp_info/energy-benchmarking.html' },
    { label: 'Cook County property tax system and reassessment schedule', href: 'https://www.cookcountyassessoril.gov/cook-county-property-tax-system' },
  ],
};
