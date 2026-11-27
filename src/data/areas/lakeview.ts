import type { AreaContent } from './types';

export const lakeview: AreaContent = {
  slug: 'lakeview',
  targetQuery: 'condo management lakeview chicago',
  title: 'Condo Management in Lakeview, Chicago | From $30/Unit',
  metaDescription:
    'Condo and HOA management for Lakeview boards, from Wrigleyville to Lakeview East: leasing rules, short-term rentals, porches. Flat fee from $30 per unit.',
  // Per-area managed counts are company-private (owner decision, Nov 27, 2026), so this stays null and nothing is shown.
  managed: null,
  context:
    'Lakeview is a lakefront neighborhood with vintage courtyard buildings, mid-rises and newer construction. It includes Wrigleyville, Northalsted (Boystown) and Lakeview East along the harbor. Buildings near Wrigley Field live with 81 home games a season, plus concerts and street festivals.',
  housing: {
    intro:
      'Lakeview is the Census Bureau’s Lake View, Community Area 6. The figures below are 2020 to 2024 American Community Survey estimates compiled by the Chicago Metropolitan Agency for Planning for the whole community area.',
    stats: [
      { label: 'Midpoint year of home construction', value: '1962' },
      { label: 'Homes older than 1940', value: '21,528 (34.7%)' },
      { label: 'Homes dating from 2010 or later', value: '4,321 (7.0%)' },
      { label: 'Three- and four-unit buildings (homes)', value: '8,984 (14.5%)' },
      { label: 'Five-to-nine-unit buildings (homes)', value: '8,923 (14.4%)' },
      { label: 'Ten-to-nineteen-unit buildings (homes)', value: '4,025 (6.5%)' },
      { label: 'Twenty-plus-unit buildings (homes)', value: '31,183 (50.2%)' },
      { label: 'Owner-occupied homes', value: '21,896 (37.5%)' },
    ],
    takeaway:
      'Half of Lake View’s homes (50.2 percent) are in buildings of twenty or more units, yet another 35 percent sit in buildings of three to nineteen units, and 34.7 percent of homes predate 1940. The community area is a mix of lakefront and Broadway towers and older courtyard and walk-up buildings, so board needs vary block by block.',
  },
  buildingTypes: [
    {
      name: 'Vintage courtyard buildings',
      detail:
        'Walk-up buildings with rear wood porches and shared masonry. The porches and the masonry are the board’s main structural items. A walk-up board usually has three to five volunteers, so each inspection and repair needs one named owner on the board.',
    },
    {
      name: 'Mid-rises',
      detail:
        'Elevator buildings with more units and more shared systems for the board to budget for. Elevator service contracts and boiler work are easier to plan when the board keeps a simple log of every service call.',
    },
    {
      name: 'Newer construction',
      detail:
        'Newer condominium buildings with modern systems. The board’s work is keeping the reserve plan and the rules current. Early years are the time to set leasing and pet rules, before a dispute forces the question.',
    },
  ],
  issues: [
    // TODO(Jojo): confirm each issue from real experience; delete any that do not fit.
    {
      title: 'Porch and deck safety',
      body:
        'A porch on a courtyard walk-up often serves as a required exit. The guide covers when a building permit is needed, what a City inspector checks, and a yearly porch checklist for the board.',
      post: 'chicago-condo-porch-deck-safety-board-guide',
      linkText: 'porch and deck safety for Chicago condo boards',
    },
    {
      title: 'Renting out units',
      body:
        'Leasing runs through two rulebooks: the association’s governing documents and the City’s rental ordinances. Many Chicago condominiums limit leasing with rental caps, minimum lease terms or board approval.',
      post: 'renting-out-your-condo-chicago-rules',
      linkText: 'the rules for renting out a Chicago condo',
    },
    {
      title: 'Short-term rentals',
      body:
        'Under Chicago’s Shared Housing Ordinance a building can be placed on the City’s Prohibited Buildings List. For a condominium, that request comes from the association. The guide explains how this differs from fining one owner at a time.',
      post: 'chicago-condo-short-term-rental-prohibited-buildings-list',
      linkText: 'Chicago’s Prohibited Buildings List for short-term rentals',
    },
    {
      title: 'EV charging requests',
      body:
        'A written process answers four questions once: does the building have electrical capacity, who pays for the electricity, who owns and maintains the equipment, and what happens when the owner sells the unit.',
      post: 'illinois-condo-hoa-ev-charging-board-process',
      linkText: 'an EV charging process for Illinois association boards',
    },
    {
      title: 'Insurance renewals',
      body:
        'Start roughly 90 to 120 days before the policy expires. Have counsel confirm the insurance your documents and the statute require, and work with a licensed broker who knows Illinois community associations.',
      post: 'condo-hoa-insurance-renewal-checklist',
      linkText: 'insurance renewal checklist for association boards',
    },
  ],
  localItems: [
    {
      title: 'Landmark districts in Lake View',
      body:
        'Chicago has designated three residential landmark districts in Lake View: Newport Avenue on February 9, 2005, Oakdale Avenue on March 29, 2006 and Surf-Pine Grove on July 19, 2007. Exterior work on a building in a landmark district is reviewed by the City’s historic preservation staff before a permit is issued.',
    },
    {
      title: 'Annual elevator inspections',
      body:
        'Elevators fall under the City’s Annual Inspection Certification program: a state-licensed third-party inspector examines them each year and the owner reports the result through the Department of Buildings portal.',
    },
    {
      title: 'Energy benchmarking',
      body:
        'A residential building of 50,000 square feet or more reports energy and water use each year by June 1, and condominiums are covered. Many Lake View mid-rises and towers meet the threshold.',
    },
    {
      title: 'Reassessment',
      body:
        'Chicago was reassessed in 2024, and the next reassessment of the city is 2027.',
    },
  ],
  // TODO(Jojo): typical monthly fee range for a 12-, 24- and 48-unit building
  // in Lakeview, from real recent proposals. Never estimate.
  feeRanges: null,
  // TODO(Jojo): real photos only: a vintage courtyard building (public view);
  // a mid-rise on a Lakeview block; optional, the harbor area in Lakeview East.
  photos: [],
  faqs: [
    {
      q: 'Can our Lakeview building stop short-term rentals?',
      a: 'Chicago’s Shared Housing Ordinance lets a building be placed on the City’s Prohibited Buildings List. That makes short-term rental activity in the building unlawful under City rules, not only a breach of the declaration. For a condominium, the association makes the request.',
      post: 'chicago-condo-short-term-rental-prohibited-buildings-list',
    },
    {
      q: 'Can an owner rent out a condo in Lakeview?',
      a: 'Only if the association’s governing documents allow it. Many Chicago condominiums limit leasing with rental caps, minimum lease terms or board approval. Ask for the current leasing rules in writing before listing the unit.',
      post: 'renting-out-your-condo-chicago-rules',
    },
    {
      q: 'How should the board handle an owner’s request for an EV charger?',
      a: 'With one written process. It should settle whether the building has electrical capacity, who pays for the electricity, who owns and maintains the equipment, and what happens when the owner sells the unit.',
      post: 'illinois-condo-hoa-ev-charging-board-process',
    },
    {
      q: 'Is our Lakeview building inside a landmark district?',
      a: 'Only if it falls within one of the designated boundaries, such as Newport Avenue, Oakdale Avenue or Surf-Pine Grove. The City’s landmark listing shows each district, and exterior permits inside one get extra review.',
      post: 'vintage-chicago-condo-capital-planning',
    },
    {
      q: 'Does a Lakeview mid-rise have to benchmark its energy use?',
      a: 'If the building is 50,000 square feet or larger, yes. The City requires annual energy and water reporting, condominiums included, with third-party verification every third year.',
      post: 'chicago-condo-association-compliance-calendar',
    },
  ],
  hasHighRises: true,
  sources: [
    { label: 'Lake View community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Lake-View.pdf' },
    { label: 'Chicago Landmarks, official list of landmark districts', href: 'https://webapps1.chicago.gov/landmarksweb/web/listings.htm' },
    { label: 'Chicago Department of Buildings, annual elevator inspection reporting (AIC)', href: 'https://www.chicago.gov/city/en/depts/bldgs/provdrs/inspect/svcs/annual_inspectioncertificationaicprogramupdate.html' },
    { label: 'Chicago Energy Benchmarking', href: 'https://www.chicago.gov/city/en/depts/env/supp_info/energy-benchmarking.html' },
    { label: 'Cook County property tax system and reassessment schedule', href: 'https://www.cookcountyassessoril.gov/cook-county-property-tax-system' },
  ],
};
