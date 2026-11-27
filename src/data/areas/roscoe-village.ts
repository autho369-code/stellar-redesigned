import type { AreaContent } from './types';

export const roscoeVillage: AreaContent = {
  slug: 'roscoe-village',
  targetQuery: 'condo management roscoe village chicago',
  title: 'Condo Management in Roscoe Village, Chicago | From $30/Unit',
  metaDescription:
    'Condo and HOA management for Roscoe Village boards: greystone walk-ups, vintage two-flats and townhome infill. Flat fee from $30 per unit a month.',
  // Per-area managed counts are company-private (owner decision, Nov 27, 2026), so this stays null and nothing is shown.
  managed: null,
  context:
    'Roscoe Village is a family neighborhood on the north side, with a retail strip along Roscoe Street and a grid of walk-up blocks on either side. Renovated vintage buildings stand next to newer townhome developments.',
  housing: {
    intro:
      'Roscoe Village sits within North Center, Community Area 5. The Census-based figures below, summarized by the Chicago Metropolitan Agency for Planning, describe all of North Center, so treat them as the neighborhood’s backdrop.',
    stats: [
      { label: 'Median year a home was built', value: '1939' },
      { label: 'Homes built before 1940', value: '51.4%' },
      { label: 'Homes built since 2010', value: '11.1%' },
      { label: 'Single-family detached houses', value: '27.0%' },
      { label: 'Homes in two-unit buildings', value: '17.4%' },
      { label: 'Homes in buildings of three or four units', value: '25.4%' },
      { label: 'Homes in buildings of five to nine units', value: '11.9%' },
      { label: 'Owner-occupied households', value: '56.9%' },
    ],
    takeaway:
      'More than half of North Center’s homes predate 1940 and yet more than one in ten is new since 2010. Boards here often manage a hundred-year-old shell with a recent gut renovation inside, so the common elements are old and the units are new.',
  },
  buildingTypes: [
    {
      name: 'Greystone and brick two-flats',
      detail:
        'Two owners, one roof and one set of back stairs. These associations work best with a short written agreement for shared repairs.',
    },
    {
      name: 'Courtyard and corner-lot walk-ups',
      detail:
        'Buildings of five to nine units make up about 12 percent of homes in North Center. They share a court or a corner lot, and often a single boiler and one roof.',
    },
    {
      name: 'Townhome and infill developments',
      detail:
        'Newer attached homes with a small homeowners association for the shared drive and the exterior envelope.',
    },
  ],
  issues: [
    {
      title: 'Who owns the fix when a repair crosses unit lines',
      body:
        'A leaking window, a failed drain or a cracked chimney can sit on either side of the line between owner and association. The declaration usually answers the question once someone reads it.',
      post: 'condo-repairs-owner-vs-association-illinois',
      linkText: 'owner versus association repair responsibility in Illinois',
    },
    {
      title: 'Running a budget with a handful of owners',
      body:
        'Small associations need a budget that sets aside reserves even when the assessment is modest. Walking through each line against last year’s actuals takes an hour and prevents most surprises.',
      post: 'illinois-condo-hoa-budget-adoption-guide',
      linkText: 'an Illinois condo budget adoption guide',
    },
    {
      title: 'Dealing with a neighbor’s rule violation',
      body:
        'Noise, trash and parking disputes recur in walk-up buildings. A fine only holds up if the declaration allows it and the owner gets notice and a hearing first.',
      post: 'illinois-association-fines-notice-hearing',
      linkText: 'fines, notice and hearings in Illinois associations',
    },
    {
      title: 'Preparing for the first-time board member',
      body:
        'In a small building the new treasurer may never have opened the association’s bank statement. A thirty-day checklist covers insurance, accounts, minutes and the records the board is required to keep.',
      post: 'new-condo-board-member-first-30-days',
      linkText: 'the first thirty days for a new condo board member',
    },
    {
      title: 'Roofs, tuckpointing and special assessments',
      body:
        'When a roof has to be replaced and the reserve is thin, a special assessment is the usual fallback. The guide explains how the vote works and how installment plans can be offered.',
      post: 'condo-special-assessments-illinois',
      linkText: 'special assessments for Illinois condo associations',
    },
  ],
  localItems: [
    {
      title: 'Where Chicago garbage service ends',
      body:
        'City crews serve single-family homes and buildings of up to four units. A larger courtyard or corner building is above that line and needs a private hauler. Where the city still serves a unit, Chicago charges a garbage fee of $9.50 per unit per month.',
    },
    {
      title: 'Porch permits',
      body:
        'Under Chicago’s porch rules, a residential porch less than six feet off the ground with 50 square feet of landing or less does not need a permit. Structural repairs do, with stamped plans from an Illinois-licensed architect or structural engineer.',
    },
    {
      title: 'Energy benchmarking for the larger buildings',
      body:
        'The City’s energy benchmarking ordinance covers residential buildings of 50,000 square feet or more, including condominiums. Covered buildings report through ENERGY STAR Portfolio Manager each year by June 1.',
    },
    {
      title: 'Cook County reassessment cycle',
      body:
        'The City of Chicago was reassessed in 2024 and is next reassessed in 2027.',
    },
  ],
  feeRanges: null,
  photos: [],
  faqs: [
    {
      q: 'Is a Roscoe Village two-flat a condominium or a partnership?',
      a: 'Either is possible. A recorded condominium declaration creates a condominium association with statutory duties. Without one, two owners may only share an informal agreement.',
      post: 'which-illinois-law-governs-condo-hoa-townhome',
    },
    {
      q: 'Does my building need to benchmark its energy use?',
      a: 'Only if it is 50,000 square feet or larger. Most walk-ups in the neighborhood are smaller, but a larger courtyard building or a newer mid-rise may be covered, and the City’s benchmarking page lists the rules.',
      post: 'chicago-condo-association-compliance-calendar',
    },
    {
      q: 'What does the City charge for garbage service?',
      a: 'Chicago’s fee is $9.50 per unit per month for units the City collects from. Buildings of five or more units contract privately and pay their hauler instead.',
      post: 'condo-hoa-annual-budget-workbook',
    },
    {
      q: 'Can an owner’s contractor use the common stairs for a gut renovation?',
      a: 'Usually, if the rules and the declaration allow it. The guide covers move-in and renovation rules, deposits and insurance requirements.',
      post: 'moving-into-chicago-condo-guide',
    },
    {
      q: 'How do I compare proposals from management companies?',
      a: 'Ask each firm for the same scope and score them against a list. The guide has a scorecard you can use, whether or not you choose us.',
      post: 'score-condo-hoa-management-proposals',
    },
  ],
  hasHighRises: false,
  sources: [
    { label: 'North Center community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/North-Center.pdf' },
    { label: 'City of Chicago garbage collection eligibility', href: 'https://www.chicago.gov/city/en/depts/streets/provdrs/streets_san/svcs/grid-garbage-collection.html' },
    { label: 'City of Chicago garbage fee', href: 'https://www.chicago.gov/city/en/depts/fin/provdrs/city-of-chicago-garbage-fee-webpage.html' },
    { label: 'Chicago porch safety and permits', href: 'https://www.chicago.gov/city/en/depts/bldgs/supp_info/porch-safety.html' },
    { label: 'Chicago Energy Benchmarking', href: 'https://www.chicago.gov/city/en/depts/env/supp_info/energy-benchmarking.html' },
    { label: 'Cook County property tax system and reassessment schedule', href: 'https://www.cookcountyassessoril.gov/cook-county-property-tax-system' },
  ],
};
