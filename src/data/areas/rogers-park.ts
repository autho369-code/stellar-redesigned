import type { AreaContent } from './types';

export const rogersPark: AreaContent = {
  slug: 'rogers-park',
  targetQuery: 'condo management rogers park chicago',
  title: 'Condo Management in Rogers Park, Chicago | From $30/Unit',
  metaDescription:
    'Condo and HOA management for Rogers Park boards: vintage courtyard buildings, rear porches and reserves. Flat fee from $30 per unit. Chicago office.',
  // Per-area managed counts are company-private (owner decision, Nov 27, 2026), so this stays null and nothing is shown.
  managed: null,
  context:
    'Rogers Park is on Chicago’s far north side. Its housing is a mix of vintage courtyard condominium buildings and lakefront buildings of many ages and styles.',
  housing: {
    intro:
      'Rogers Park is Community Area 1, the city’s northernmost neighborhood on the lakefront. The figures below are Census Bureau American Community Survey estimates for 2020 to 2024, as compiled by the Chicago Metropolitan Agency for Planning.',
    stats: [
      { label: 'Median build year of the housing stock', value: '1942' },
      { label: 'Housing that predates 1940', value: '14,047 (48.5%)' },
      { label: 'Housing from 2010 on', value: '935 (3.2%)' },
      { label: 'Two-flats and duplexes', value: '945 (3.3%)' },
      { label: 'Three- and four-flats', value: '2,860 (9.9%)' },
      { label: 'Owners among all households', value: '7,372 (28.2%)' },
      { label: 'Five- to nine-unit buildings', value: '6,437 (22.2%)' },
      { label: 'Renters among all households', value: '18,814 (71.8%)' },
    ],
    takeaway:
      'Rogers Park is a renter-majority community area: 71.8 percent of households rent. Almost half of all homes predate 1940, 36 percent sit in buildings of five to nineteen units and 42.4 percent in buildings of twenty or more. A condominium board here often governs an older building with a long maintenance list and owners with a wide range of budgets.',
  },
  buildingTypes: [
    {
      name: 'Vintage courtyard condominium buildings',
      detail:
        'Brick walk-up buildings set around a shared court. For a small association, the rear porches are often the largest structural item the board looks after.',
    },
    // TODO(Jojo): confirm "Lakefront mid-rise and high-rise buildings near Sheridan Rd".
    // TODO(Jojo): confirm "Small brick buildings of roughly 6 to 24 units" and the typical range.
  ],
  issues: [
    // TODO(Jojo): confirm each issue from real experience; delete any that do not fit.
    {
      title: 'Masonry, porches and decks',
      body:
        'Rear wood porches are part of almost every courtyard building, and they often serve as a required exit. The City of Chicago sets the rules for permits and inspections. A board should run the porches as a yearly program, not as a surprise.',
      post: 'chicago-condo-porch-deck-safety-board-guide',
      linkText: 'Chicago condo porch and deck safety guide',
    },
    {
      title: 'Water intrusion: who pays',
      body:
        'When water comes through a ceiling in a walk-up, the first question is not who caused it. Stop the water, document it, find the part that failed, then read the declaration. Insurance is a second, separate question.',
      post: 'who-pays-condo-water-leak-illinois',
      linkText: 'who pays for a condo water leak in Illinois',
    },
    {
      title: 'Capital planning for vintage buildings',
      body:
        'Age alone does not decide what is urgent. A capital plan starts with a list of the building’s components, their condition and their remaining life. Then it becomes a funding schedule the board reviews every year.',
      post: 'vintage-chicago-condo-capital-planning',
      linkText: 'capital planning for vintage Chicago condominium buildings',
    },
    {
      title: 'Setting reasonable reserves',
      body:
        'Illinois law does not give condo boards a fixed reserve percentage. The standard is what is reasonable for the association’s circumstances, so a courtyard building’s board should write down how it reached its number.',
      post: 'reasonable-reserves-illinois-condo-law',
      linkText: 'reasonable reserves under Illinois condo law',
    },
    {
      title: 'Switching managers',
      body:
        'A board that is unhappy with its current firm should look for a pattern before it starts a search. Then it should review the contract and run a short, building-specific RFP. The guide gives the full sequence, through the handoff of records.',
      post: 'switch-condo-management-companies-chicago',
      linkText: 'how to switch condo management companies in Chicago',
    },
  ],
  localItems: [
    {
      title: 'Porch safety in courtyard buildings',
      body:
        'Chicago inspects porches after a complaint to 311, requires them to carry 100 pounds per square foot, and requires a permit and stamped plans for structural repairs. Rear porches on a Rogers Park courtyard building are common elements, so the association carries the repair.',
    },
    {
      title: 'Elevators in larger buildings',
      body:
        'Buildings with elevators fall under the City’s Annual Inspection Certification program, where the owner hires a state-licensed third-party inspector each year and reports through the City portal.',
    },
    {
      title: 'Reassessment',
      body:
        'The City of Chicago was reassessed in 2024 and will be reassessed again in 2027.',
    },
  ],
  // TODO(Jojo): typical monthly fee range for a 12-, 24- and 48-unit building
  // in Rogers Park, from real recent proposals. Never estimate.
  feeRanges: null,
  // TODO(Jojo): real photos only (public sidewalk or with a board's written
  // permission): a vintage brick courtyard building; a street scene near Sheridan Rd.
  photos: [],
  faqs: [
    {
      q: 'Who is responsible for the rear porches on a Rogers Park courtyard building?',
      a: 'In most Chicago condominiums the porches are common elements or limited common elements, so the association usually maintains, repairs and replaces them. Your declaration decides it for your building.',
      post: 'chicago-condo-porch-deck-safety-board-guide',
    },
    {
      q: 'Does Illinois law set a reserve percentage for a vintage condo building?',
      a: 'No. The Illinois Condominium Property Act asks the board to budget reasonable reserves in light of the association’s circumstances. It does not set a fixed percentage.',
      post: 'reasonable-reserves-illinois-condo-law',
    },
    {
      q: 'Can our board change management companies before the contract ends?',
      a: 'It depends on the termination terms in the agreement your board signed. Review those terms with association counsel before the board announces a search.',
      post: 'switch-condo-management-companies-chicago',
    },
    {
      q: 'What should a board do when a 311 complaint brings a porch inspection?',
      a: 'Get an engineer to assess the structure, find out whether the repair needs a permit with stamped plans, and decide whether the work is an association cost under the declaration. Owners should hear about it in writing early.',
      post: 'chicago-condo-porch-deck-safety-board-guide',
    },
    {
      q: 'How should a board handle owners with very different budgets?',
      a: 'Phase large projects, publish the reserve plan, and adopt a written payment-plan policy before a hardship case arises. Consistent treatment protects the board.',
      post: 'condo-special-assessments-illinois',
    },
  ],
  hasHighRises: false,
  sources: [
    { label: 'Rogers Park community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Rogers-Park.pdf' },
    { label: 'Chicago porch safety and permits', href: 'https://www.chicago.gov/city/en/depts/bldgs/supp_info/porch-safety.html' },
    { label: 'Chicago Department of Buildings, annual elevator inspection reporting (AIC)', href: 'https://www.chicago.gov/city/en/depts/bldgs/provdrs/inspect/svcs/annual_inspectioncertificationaicprogramupdate.html' },
    { label: 'Cook County property tax system and reassessment schedule', href: 'https://www.cookcountyassessoril.gov/cook-county-property-tax-system' },
  ],
};
