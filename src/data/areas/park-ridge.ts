import type { AreaContent } from './types';

export const parkRidge: AreaContent = {
  slug: 'park-ridge',
  targetQuery: 'condo management park ridge il',
  title: 'Condo Management in Park Ridge, IL | Stellar',
  metaDescription:
    'Condo and HOA management for Park Ridge boards: mid-century buildings, Appearance Commission review and flood planning. Flat fee from $30 per unit a month.',
  // TODO(Mirsad): how many associations and about how many units does Stellar
  // manage in or near Park Ridge? Until then the page says "we serve boards here".
  managed: null,
  context:
    'Park Ridge is a Cook County city of mostly single-family streets, so its condominium buildings are a small, older slice of the housing stock. Roughly one in six homes here is a condo, and most of that stock was built before 1970.',
  housing: {
    intro:
      'These figures come from the Census Bureau’s American Community Survey, 2020 to 2024, as published in the Chicago Metropolitan Agency for Planning’s Park Ridge community snapshot, and from DePaul’s Institute for Housing Studies.',
    stats: [
      { label: 'Median year a Park Ridge home was built', value: '1960' },
      { label: 'Homes built between 1940 and 1969', value: '49.9%' },
      { label: 'Homes built before 1940', value: '16.2%' },
      { label: 'Homes in buildings of 20 or more units', value: '1,588 (10.2%)' },
      { label: 'Homes in buildings of 5 to 19 units', value: '1,150 (7.3%)' },
      { label: 'Share of housing that is condominium, 2025', value: '16.5%' },
      { label: 'Condominium sales recorded in 2025', value: '104' },
      { label: 'Owner-occupied households', value: '84.8%' },
    ],
    takeaway:
      'An owner-occupied city with an old building stock behaves differently from a rental-heavy one. Boards here spend less time on tenant turnover and more on roofs, boilers, parking lots and masonry that are now six or seven decades old.',
  },
  buildingTypes: [
    {
      name: 'Mid-century courtyard and walk-up condominiums',
      detail:
        'The 1940-to-1969 band is the largest slice of the city’s housing, and the older multi-unit buildings follow it: brick walk-ups, courtyard buildings and small elevator buildings near the Metra line and the downtown blocks. Original risers, flat roofs and tuckpointing are the usual long-range items.',
    },
    {
      name: 'Small buildings of two to nine units',
      detail:
        'Park Ridge has more than 900 homes in two-to-four-unit buildings and about 520 in buildings of five to nine units. Boards of three or four owners often run on informal agreements, which is fine until a sale, a refinance or an insurance claim asks for paper.',
    },
    {
      name: 'Newer infill buildings',
      detail:
        'About one home in twenty was built since 2010. Newer buildings have different problems: warranty expirations, first reserve studies and the handoff from a developer-era budget to a real one.',
    },
  ],
  issues: [
    {
      title: 'Roofs, risers and masonry at 60 years',
      body:
        'With a median build year of 1960, a Park Ridge board should assume the building’s major systems are at or past their design lives. A written reserve study turns that into a funding schedule instead of a surprise assessment.',
      post: 'reasonable-reserves-illinois-condo-law',
      linkText: 'what Illinois means by reasonable reserves',
    },
    {
      title: 'Appearance Commission review for exterior changes',
      body:
        'The city sends multi-family projects through its Appearance Commission, and approval comes before the building permit is issued. An association planning new siding, a rebuilt entry or replacement windows should build that review into the project calendar and the contractor’s schedule.',
      post: 'condo-hoa-vendor-rfp-checklist',
      linkText: 'a vendor bid checklist for exterior projects',
    },
    {
      title: 'Flood and sewer backup exposure',
      body:
        'Park Ridge publishes a stormwater master plan, and basements and garden units are the first places sewer backup shows up in older buildings. Boards should know what the master policy covers, what falls to each owner’s own policy, and who pays when water comes up through a floor drain.',
      post: 'condo-master-policy-vs-ho6-board-guide',
      linkText: 'master policy versus owner HO-6 coverage',
    },
    {
      title: 'Small-board governance',
      body:
        'Where three owners are the whole board, the biggest risk is a missed notice or an unrecorded vote. Calendar the annual meeting, adopt a simple budget by the book, and keep minutes that a lender or a buyer’s attorney can read.',
      post: 'illinois-condo-hoa-budget-adoption-guide',
      linkText: 'adopting an Illinois association budget step by step',
    },
    {
      title: 'Resales in a mostly owner-occupied market',
      body:
        'In a city where 85 percent of households own, buyers and their attorneys read the disclosure packet closely. A fast, complete Section 22.1 response keeps a closing on schedule and keeps the board out of the middle.',
      post: 'illinois-section-22-1-disclosure-board-guide',
      linkText: 'the Section 22.1 disclosure guide for boards',
    },
  ],
  localItems: [
    {
      title: 'Appearance Commission',
      body:
        'Park Ridge’s Appearance Commission reviews multi-family construction and exterior changes. Staff tell an applicant when to file, and the commission’s approval has to be in place before the building permit issues.',
    },
    {
      title: 'Permits and drainage plans',
      body:
        'The city’s permit submittal list asks for civil-engineering drawings on new multi-family work, and its building regulations require a drainage plan that does not push runoff onto neighboring lots. Ask a contractor to show you that plan before you sign.',
    },
    {
      title: 'Stormwater master plan',
      body:
        'The city’s 2017 Stormwater Master Plan is the public record of where flooding has occurred and what projects are proposed. Read it before you set a reserve line for sump pumps, ejector pits or grading.',
    },
    {
      title: 'Cook County reassessment',
      body:
        'Park Ridge is in Cook County’s north and northwest suburban reassessment group. The last reassessment was in 2025 and the next is 2028. Boards can still file appeals in other years during the Assessor’s open windows.',
    },
  ],
  feeRanges: null,
  photos: [],
  faqs: [
    {
      q: 'Does Park Ridge require a rental license for condominiums?',
      a: 'We found no general rental license for condominium units on the city’s published pages, but the building code, permit and inspection rules still apply to rented units. Confirm with the city before a board adopts a leasing rule, because the rule has to rest on your declaration and bylaws rather than on city law.',
      post: 'adopting-enforcing-condo-hoa-rules-illinois',
    },
    {
      q: 'How old are the condominium buildings in Park Ridge?',
      a: 'The Census Bureau puts the median home in Park Ridge at 1960, and about two-thirds of the housing was built before 1970. Condominium buildings follow that pattern, so most boards are planning around original building systems.',
      post: 'reasonable-reserves-illinois-condo-law',
    },
    {
      q: 'Do exterior projects need city approval beyond a permit?',
      a: 'For multi-family buildings, yes. The Appearance Commission reviews exterior and site changes, and its approval comes before the building permit. Ask staff which submittals your project needs before you collect bids.',
      post: 'condo-hoa-vendor-rfp-checklist',
    },
    {
      q: 'Who pays when a basement floods from a sewer backup?',
      a: 'It depends on the declaration, the cause of the water and the master policy’s sewer-backup endorsement, if there is one. Many associations cover the common elements and leave each owner’s finishes and belongings to the owner’s own policy.',
      post: 'who-pays-condo-water-leak-illinois',
    },
    {
      q: 'When is the next Cook County reassessment for Park Ridge?',
      a: 'Cook County reassesses its north and northwest suburbs every three years. The most recent reassessment was in 2025 and the next is scheduled for 2028.',
      post: 'cook-county-property-tax-appeal-condo-association',
    },
  ],
  hasHighRises: false,
  sources: [
    { label: 'Park Ridge community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Park-Ridge.pdf' },
    { label: 'Park Ridge housing data (DePaul Institute for Housing Studies)', href: 'https://www.housingstudies.org/data-portal/geography/park-ridge/' },
    { label: 'City of Park Ridge Appearance Commission', href: 'https://www.parkridge.us/appearance_commission/index.php' },
    { label: 'City of Park Ridge permits and inspections', href: 'https://www.parkridge.us/your_government/city_departments/permits_and_inspections_2.php' },
    { label: 'City of Park Ridge Stormwater Master Plan (2017)', href: 'https://cms9files.revize.com/parkridgeil/Journal%206%2014%202017.pdf' },
    { label: 'Cook County Assessor’s Office', href: 'https://www.cookcountyassessoril.gov/' },
  ],
};
