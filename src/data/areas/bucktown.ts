import type { AreaContent } from './types';

export const bucktown: AreaContent = {
  slug: 'bucktown',
  targetQuery: 'condo management bucktown chicago',
  title: 'Condo Management in Bucktown, Chicago | From $30/Unit',
  metaDescription:
    'Condo and HOA management for Bucktown boards: townhome courts and boutique elevator buildings near Milwaukee and Damen. Flat fee from $30 per unit a month.',
  // Per-area managed counts are company-private (owner decision, Nov 27, 2026), so this stays null and nothing is shown.
  managed: null,
  context:
    'Bucktown is known for its galleries, shops and renovated historic homes. Its side streets mix new-construction townhome communities with boutique elevator condominium buildings along Milwaukee and Damen, near the Bloomingdale Trail and Holstein Park.',
  housing: {
    intro:
      'Bucktown does not have a community area of its own. Its eastern half sits in West Town (Community Area 24) and its western half in Logan Square (Community Area 22). The figures below are for West Town from the Census Bureau’s 2020 to 2024 American Community Survey, as compiled by the Chicago Metropolitan Agency for Planning.',
    stats: [
      { label: 'Median year the housing stock was built', value: '1968' },
      { label: 'Pre-1940 construction', value: '18,621 (40.0%)' },
      { label: 'Construction since 2010', value: '6,170 (13.3%)' },
      { label: 'Buildings of two units', value: '5,052 (10.9%)' },
      { label: 'Buildings of three or four units', value: '14,940 (32.1%)' },
      { label: 'Owner households', value: '18,319 (41.9%)' },
      { label: '1990 to 2009 construction', value: '12,607 (27.1%)' },
      { label: 'Renter households', value: '25,438 (58.1%)' },
    ],
    takeaway:
      'West Town combines a large block of pre-1940 housing (40 percent) with a strong run of new construction: 13.3 percent of homes were built since 2010, against 6.3 percent for the city. For a Bucktown board that means two kinds of association on the same street, a vintage conversion with aging systems and a newer building still on its first reserve plan.',
  },
  buildingTypes: [
    {
      name: 'Townhome courts',
      detail:
        'New-construction communities with shared drives, gates and exteriors, and budgets still being tested by real costs.',
    },
    {
      name: 'Boutique elevator buildings',
      detail:
        'Small buildings with one elevator and a few shared systems. One service contract can be a large share of the budget.',
    },
    {
      name: 'Vintage conversions',
      detail:
        'Older buildings turned into condominiums, where renovated interiors sit on original structure.',
    },
  ],
  issues: [
    // Each issue rests on the linked guide. Owner has not confirmed them from experience; wording stays general.
    {
      title: 'Comparing management firms',
      body:
        'Many Bucktown owners are busy professionals who want to compare firms quickly. Ask each one for a written flat-fee proposal with a defined scope, and score them on one sheet. A short scorecard also keeps a board of busy people on the same page.',
      post: 'score-condo-hoa-management-proposals',
      linkText: 'scoring condo and HOA management proposals',
    },
    {
      title: 'EV charging in a garage or court',
      body:
        'Requests for chargers arrive one owner at a time. A written process, adopted once, lets the board answer each request in weeks. In a townhome court, decide where wiring may run across shared ground.',
      post: 'illinois-condo-hoa-ev-charging-board-process',
      linkText: 'setting up an EV charging process',
    },
    {
      title: 'The elevator and other service contracts',
      body:
        'In a boutique building the elevator contract deserves a real bid. Write one scope, ask for the same insurance from each vendor, and compare like with like. Check the renewal terms before the date passes.',
      post: 'condo-hoa-vendor-rfp-checklist',
      linkText: 'a checklist for vendor bids',
    },
    {
      title: 'How many buildings your manager carries',
      body:
        'A small building is easy to overlook in a large portfolio. Ask what the manager has already committed to, and who covers during a busy week. A boutique building should know its manager by name.',
      post: 'how-many-associations-should-community-manager-handle',
      linkText: 'manager workload and small associations',
    },
    {
      title: 'Portal-first notices and a written collection policy',
      body:
        'Owners who commute by the Blue Line or Metra read notices online. A written assessment collection policy, required by January 1, 2027 under Public Act 104-0734, belongs in that same portal. Post it where every owner can find it.',
      post: 'illinois-condo-hoa-collection-policy-january-2027',
      linkText: 'the written collection policy boards need by 2027',
    },
  ],
  localItems: [
    {
      title: 'Annual elevator inspections',
      body:
        'The City’s Annual Inspection Certification program has building owners hire a state-licensed third-party inspector each year and report the results through the Department of Buildings portal. A boutique elevator building along Milwaukee or Damen carries that duty every year.',
    },
    {
      title: 'Closing a building to short-term rentals',
      body:
        'Chicago’s Shared Housing Ordinance lets a building be excluded from short-term-rental activity and added to the City’s Prohibited Buildings List. The City describes the affidavit process on its site.',
    },
    {
      title: 'Reassessment',
      body:
        'The City was reassessed in 2024 and is reassessed again in 2027.',
    },
  ],
  // TODO(Jojo): typical monthly fee range from real recent proposals. Never estimate; never below the $30 starting fee.
  feeRanges: null,
  // TODO(Jojo): real photos only (public view): a Bucktown townhome court from the sidewalk; a boutique building on Milwaukee or Damen.
  photos: [],
  faqs: [
    {
      q: 'How does a Bucktown board compare two management proposals?',
      a: 'Put them on one scorecard: scope, the named manager, reporting, after-hours response and the full yearly cost. A flat fee with a written scope is the easiest to compare.',
      post: 'score-condo-hoa-management-proposals',
    },
    {
      q: 'How should a board handle a request for an EV charger?',
      a: 'Adopt a written process once. Each new request then follows the same steps and gets an answer in weeks.',
      post: 'illinois-condo-hoa-ev-charging-board-process',
    },
    {
      q: 'Is one manager with many buildings a problem?',
      a: 'There is no single right number. Ask what is already committed across the portfolio, what support the manager has, and who covers when several buildings need help at once.',
      post: 'how-many-associations-should-community-manager-handle',
    },
    {
      q: 'What does a new townhome association need in its first budgets?',
      a: 'Real numbers for snow, landscaping, insurance and the gate or drive, plus a reserve line for roofs and exteriors. Adjust after the first full year of actual costs.',
      post: 'illinois-condo-hoa-budget-adoption-guide',
    },
    {
      q: 'Does a boutique Bucktown building need an annual elevator inspection?',
      a: 'Chicago’s annual inspection program covers elevators, and the building owner hires a state-licensed independent inspector and reports the result through the City portal. The board should calendar it as a fixed yearly expense.',
      post: 'chicago-condo-association-compliance-calendar',
    },
  ],
  hasHighRises: false,
  sources: [
    { label: 'West Town community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/West-Town.pdf' },
    { label: 'Logan Square community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Logan-Square.pdf' },
    { label: 'Chicago Department of Buildings, annual elevator inspection reporting (AIC)', href: 'https://www.chicago.gov/city/en/depts/bldgs/provdrs/inspect/svcs/annual_inspectioncertificationaicprogramupdate.html' },
    { label: 'City of Chicago House Share Prohibited Buildings List', href: 'https://data.cityofchicago.org/Buildings/House-Share-Prohibited-Buildings-List-Map/k75w-468b/about' },
    { label: 'Cook County property tax system and reassessment schedule', href: 'https://www.cookcountyassessoril.gov/cook-county-property-tax-system' },
  ],
};
