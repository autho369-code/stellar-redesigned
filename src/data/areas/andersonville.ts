import type { AreaContent } from './types';

export const andersonville: AreaContent = {
  slug: 'andersonville',
  targetQuery: 'condo management andersonville chicago',
  title: 'Condo Management in Andersonville, Chicago | From $30/Unit',
  metaDescription:
    'Condo and HOA management for Andersonville boards: vintage conversions, capital plans, budgets, leaks and vendor bids. From $30 per unit per month.',
  // Per-area managed counts are company-private (owner decision, Nov 27, 2026), so this stays null and nothing is shown.
  managed: null,
  context:
    'Andersonville is known for well-kept vintage buildings converted to condominiums along the side streets off Clark Street. Most associations here are small, and the same few owners tend to serve year after year.',
  housing: {
    intro:
      'Andersonville does not have its own community area. It lies inside Edgewater, Community Area 77. The figures below are Census Bureau American Community Survey estimates for 2020 to 2024, compiled by the Chicago Metropolitan Agency for Planning for all of Edgewater, so they include the lakefront towers east of Broadway as well as the side streets around Clark Street.',
    stats: [
      { label: 'Typical home was built in (median year)', value: '1950' },
      { label: 'Share of homes that predate 1940', value: '14,231 (42.6%)' },
      { label: 'Two-flat style homes (two units)', value: '1,537 (4.6%)' },
      { label: 'Three- and four-flat style homes', value: '3,269 (9.8%)' },
      { label: 'Mid-size buildings, five to nine units', value: '4,390 (13.1%)' },
      { label: 'Larger buildings, ten to nineteen units', value: '2,647 (7.9%)' },
      { label: 'Owner-occupied households', value: '11,412 (37.4%)' },
      { label: 'Newer homes, built 2010 or later', value: '849 (2.5%)' },
    ],
    takeaway:
      'Across Edgewater as a whole, 42.6 percent of homes predate 1940 and 55.2 percent are in buildings of twenty or more units. The small vintage buildings on the Andersonville side streets belong to the remainder: about 35 percent of homes sit in buildings of two to nineteen units, and those buildings carry the same roofs, porches and boilers as any other.',
  },
  buildingTypes: [
    {
      name: 'Vintage buildings converted to condominiums',
      detail:
        'Older masonry buildings with original character. Roofs, tuckpointing, windows and boilers each run on their own clock.',
    },
    {
      name: 'Small self-run associations',
      detail:
        'Buildings where owners have handled the books and the contractors themselves and are now weighing professional help.',
    },
  ],
  issues: [
    // Each issue rests on the linked guide. Owner has not confirmed them from experience; wording stays general.
    {
      title: 'A capital plan built from the building itself',
      body:
        'Age alone does not set urgency. Start with an inventory of each component, its observed condition and its remaining useful life, then turn that list into a funding schedule the board reviews every year. A 1920s building with a newer roof and recent tuckpointing may need less than a younger one that was neglected. Keep two questions apart: what must be done and when, and how it will be paid for, whether from reserves, higher assessments, a special assessment or a loan.',
      post: 'vintage-chicago-condo-capital-planning',
      linkText: 'capital planning for vintage Chicago condo buildings',
    },
    {
      title: 'A budget built over three months',
      body:
        'A board that begins the month before the fiscal year is only raising last year’s figures. Work line by line over about three months and adopt the result in a single meeting. Check the notice rules with counsel before that meeting is called, and confirm which Illinois statute governs your association, because the adoption steps differ.',
      post: 'condo-hoa-annual-budget-workbook',
      linkText: 'the annual budget workbook for association boards',
    },
    {
      title: 'When water comes through a ceiling',
      body:
        'Deciding who caused it is the wrong first step. Stop the water, document everything, identify the part that failed, and then read the declaration. Insurance is a second question: the master policy, the owner’s HO-6 policy or both may respond, and deductibles can shift who bears the cost in practice. Work through responsibility and insurance as two separate analyses.',
      post: 'who-pays-condo-water-leak-illinois',
      linkText: 'who pays for a water leak in an Illinois condo',
    },
    {
      title: 'Bids that can be compared',
      body:
        'Boards overpay when three bids describe three different jobs. Write the scope of work before asking for prices, and put insurance requirements, payment terms and warranty into the request so every vendor prices the same thing. Treat the request as the first draft of the contract, and have association counsel review the contract template once so it can be reused.',
      post: 'condo-hoa-vendor-rfp-checklist',
      linkText: 'the vendor RFP checklist for condo and HOA boards',
    },
    {
      title: 'What to expect from a management company',
      body:
        'Volunteer directors protect their neighbors’ investment, look after the common areas and keep the association compliant. For a small board that workload grows quickly. Know what a management firm should deliver before comparing proposals: financial oversight, maintenance coordination, compliance support and clear communication with owners.',
      post: 'condominium-property-management-chicago-what-board-members-should-expect',
      linkText: 'what Chicago condo boards should expect from a manager',
    },
  ],
  localItems: [
    {
      title: 'Porches on small vintage buildings',
      body:
        'Chicago requires a porch to carry 100 pounds per square foot, inspects after a 311 complaint, and asks for a permit with stamped plans when the repair is structural. Many Andersonville side-street buildings have rear porches the association must maintain.',
    },
    {
      title: 'Hauling for buildings above four units',
      body:
        'City crews collect from buildings of up to four units. A converted building with five or more units contracts with a private hauler, so the contract belongs in the association budget.',
    },
    {
      title: 'Reassessment',
      body:
        'Chicago was reassessed in 2024, and Cook County reassesses the city again in 2027.',
    },
  ],
  // TODO(Jojo): typical monthly fee range from real recent proposals. Never estimate; never below the $30 starting fee.
  feeRanges: null,
  // TODO(Jojo): real photos only (public view): a vintage conversion on a Clark Street side street; an Andersonville streetscape.
  photos: [],
  faqs: [
    {
      q: 'How should an Andersonville vintage building plan its big repairs?',
      a: 'Begin with a physical inventory of the building’s components, their observed condition and estimated remaining life. Turn that into a multi-year funding schedule and revisit it annually. The engineering question of what to fix comes before the question of how to fund it.',
      post: 'vintage-chicago-condo-capital-planning',
    },
    {
      q: 'When should our board start next year’s budget?',
      a: 'About three months before the fiscal year begins. That leaves time to build each line with real figures and to give owners proper notice of the adoption meeting.',
      post: 'condo-hoa-annual-budget-workbook',
    },
    {
      q: 'How do we get vendor bids we can actually compare?',
      a: 'Write the scope of work yourselves before requesting bids. When each vendor writes its own scope, the board receives documents that cannot be compared and ends up choosing on price alone, which usually means choosing the narrowest scope.',
      post: 'condo-hoa-vendor-rfp-checklist',
    },
    {
      q: 'Does a six-flat on an Andersonville side street need a hauler contract?',
      a: 'Yes. The City collects only from buildings of up to four units, so a six-unit building contracts a private hauler and pays it from the association budget.',
      post: 'condo-hoa-annual-budget-workbook',
    },
    {
      q: 'When does a porch repair need a permit?',
      a: 'Chicago requires a permit and stamped plans for structural porch work, and inspections usually follow a complaint to 311. An engineer’s report tells the board whether a repair is structural.',
      post: 'chicago-condo-porch-deck-safety-board-guide',
    },
  ],
  hasHighRises: false,
  sources: [
    { label: 'Edgewater (Andersonville) community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Edgewater.pdf' },
    { label: 'Chicago porch safety and permits', href: 'https://www.chicago.gov/city/en/depts/bldgs/supp_info/porch-safety.html' },
    { label: 'City of Chicago garbage collection eligibility', href: 'https://www.chicago.gov/city/en/depts/streets/provdrs/streets_san/svcs/grid-garbage-collection.html' },
    { label: 'Cook County property tax system and reassessment schedule', href: 'https://www.cookcountyassessoril.gov/cook-county-property-tax-system' },
  ],
};
