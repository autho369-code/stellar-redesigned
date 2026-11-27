import type { AreaContent } from './types';

export const southLoop: AreaContent = {
  slug: 'south-loop',
  targetQuery: 'condo management south loop chicago',
  title: 'Condo Management in the South Loop, Chicago | From $30/Unit',
  metaDescription:
    'Condo and HOA management for South Loop boards: converted printing-house lofts, townhome blocks and 1990s to 2010s high-rises. From $30 per unit a month.',
  // Per-area managed counts are company-private (owner decision, Nov 27, 2026), so this stays null and nothing is shown.
  managed: null,
  context:
    'The South Loop grew from rail yards and warehouses into one of Chicago’s largest condominium neighborhoods. It mixes printing-house loft conversions, townhome streets and glass high-rises built over the past three decades.',
  housing: {
    intro:
      'The South Loop lies in the Near South Side, Community Area 33. The Census-based figures below, summarized by the Chicago Metropolitan Agency for Planning, cover the community area, which also includes Prairie Avenue and Dearborn Park.',
    stats: [
      { label: 'Homes in buildings of twenty or more units', value: '14,863 (82.3%)' },
      { label: 'Homes built from 1990 through 2009', value: '56.8%' },
      { label: 'Homes built since 2010', value: '22.1%' },
      { label: 'Median year a home was built', value: '2004' },
      { label: 'Attached single-family homes (townhomes)', value: '8.0%' },
      { label: 'Homes built before 1940', value: '8.3%' },
      { label: 'Owner-occupied households', value: '49.6%' },
      { label: 'Renter-occupied households', value: '50.4%' },
    ],
    takeaway:
      'More than half of the South Loop’s homes went up in two decades, 1990 to 2009. That produces a large cohort of buildings reaching the same milestones together: original roofs, windows, garage membranes and elevator controls, with warranties long expired.',
  },
  buildingTypes: [
    {
      name: 'Printing-house and warehouse lofts',
      detail:
        'Masonry and timber buildings with tall ceilings, and landmark review applies on some blocks.',
    },
    {
      name: 'Townhome blocks and attached communities',
      detail:
        'About 8 percent of homes are attached single-family homes, many in small associations with shared walls and drives.',
    },
    {
      name: 'High-rise condominiums',
      detail:
        'Towers of twenty units or more with amenity floors, parking structures and large annual budgets.',
    },
  ],
  issues: [
    {
      title: 'A generation of buildings out of warranty',
      body:
        'Many South Loop buildings were completed in the 1990s and 2000s. The first major roof, window and garage repairs arrive together, which is when reserves get tested.',
      post: 'condo-reserve-funds-explained',
      linkText: 'condo reserve funds explained',
    },
    {
      title: 'Meeting the lender’s reserve test',
      body:
        'Mortgage buyers look at a building’s reserve contribution. The 15 percent reserve guideline from Fannie Mae and Freddie Mac affects how easy it is for owners to sell.',
      post: 'fannie-freddie-condo-reserve-15-percent-2027',
      linkText: 'the Fannie Mae and Freddie Mac 15 percent reserve rule for 2027',
    },
    {
      title: 'Paying for one big project',
      body:
        'Garage structures and facade repairs often cost more than the reserve holds. A special assessment, a loan or a phased plan each have different consequences for owners.',
      post: 'condo-special-assessments-illinois',
      linkText: 'special assessments for Illinois condo associations',
    },
    {
      title: 'Liability and coverage in a tower',
      body:
        'A master policy and each owner’s own HO-6 policy should fit together, so a leak or fire claim does not fall into a gap between them.',
      post: 'condo-master-policy-vs-ho6-board-guide',
      linkText: 'condo master policy versus HO-6 coverage',
    },
    {
      title: 'Records for a large owner group',
      body:
        'With hundreds of owners, records requests are routine. A clear process for budgets, minutes and contracts keeps volunteer directors from fielding each one themselves.',
      post: 'illinois-condo-association-records-request-guide',
      linkText: 'answering owner records requests',
    },
  ],
  localItems: [
    {
      title: 'Printing House Row, Prairie Avenue and Motor Row',
      body:
        'The City designated the Printing House Row district on May 9, 1996, the Prairie Avenue district on December 27, 1979 and the Motor Row district on December 13, 2000. For properties inside these districts, exterior permits are reviewed by the City’s historic preservation staff.',
    },
    {
      title: 'Facade inspections for towers',
      body:
        'The City’s exterior wall program applies to buildings 80 feet or taller. A building’s category sets its full inspection cycle at 4, 8 or 12 years, and short-form reports are due each November 1 in the years between full inspections.',
    },
    {
      title: 'Annual energy benchmarking',
      body:
        'Residential buildings of 50,000 square feet or more must report energy use by June 1 each year, including condominiums. A licensed professional must verify the data every third year.',
    },
    {
      title: 'Reassessment',
      body:
        'The City’s last reassessment was in 2024, and the next is 2027.',
    },
  ],
  feeRanges: null,
  photos: [],
  faqs: [
    {
      q: 'Is the South Loop a historic neighborhood?',
      a: 'Parts of it are. Printing House Row, Prairie Avenue and Motor Row are Chicago Landmark districts, but most South Loop homes were built after 1990.',
      post: 'vintage-chicago-condo-capital-planning',
    },
    {
      q: 'What is the 15 percent reserve rule?',
      a: 'It is a lending standard. For loan applications dated on or after January 4, 2027, Fannie Mae and Freddie Mac look for a reserve allocation of at least 15 percent of budgeted assessment income, which affects mortgage eligibility for buyers in the building.',
      post: 'fannie-freddie-condo-eligibility-board-guide',
    },
    {
      q: 'Does a South Loop townhome community have a condo declaration?',
      a: 'Some do and some operate under a common-interest community declaration. The guide helps tell them apart.',
      post: 'which-illinois-law-governs-condo-hoa-townhome',
    },
    {
      q: 'How do boards pick a vendor for a big job?',
      a: 'Write one scope, send it to several qualified bidders and compare the answers side by side. The RFP checklist walks through it.',
      post: 'condo-hoa-vendor-rfp-checklist',
    },
    {
      q: 'What should a manager report each month?',
      a: 'At a minimum, a balance sheet, an income statement, a delinquency list and bank reconciliations. The guide shows how to read them.',
      post: 'read-condo-hoa-financial-statements',
    },
  ],
  hasHighRises: true,
  sources: [
    { label: 'Near South Side community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Near-South-Side.pdf' },
    { label: 'Chicago Landmarks, official list of landmark districts', href: 'https://webapps1.chicago.gov/landmarksweb/web/listings.htm' },
    { label: 'Chicago exterior wall inspection program', href: 'https://www.chicago.gov/city/en/depts/bldgs/provdrs/inspect/svcs/exterior_wall_program.html' },
    { label: 'Chicago Energy Benchmarking', href: 'https://www.chicago.gov/city/en/depts/env/supp_info/energy-benchmarking.html' },
    { label: 'Cook County property tax system and reassessment schedule', href: 'https://www.cookcountyassessoril.gov/cook-county-property-tax-system' },
  ],
};
