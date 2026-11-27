import type { AreaContent } from './types';

export const lincolnwood: AreaContent = {
  slug: 'lincolnwood',
  targetQuery: 'condo management lincolnwood il',
  title: 'Condo Management in Lincolnwood, IL | Stellar',
  metaDescription:
    'Condo, HOA and townhome management for Lincolnwood boards, a short drive from our Chicago office: taxes, snow, resales. Flat fee from $30 per unit a month.',
  // Per-area managed counts are company-private (owner decision, Nov 27, 2026), so this stays null and nothing is shown.
  managed: null,
  context:
    'Lincolnwood is a compact Cook County village between Chicago’s far North Side and Skokie, a short drive from our office at 5107 N Western Ave. Its condominium buildings and townhome communities sit near Touhy Avenue and the Lincolnwood Town Center area.',
  housing: {
    intro:
      'Lincolnwood is a Cook County village of about 4,600 occupied homes. The figures below are Census Bureau American Community Survey estimates for 2020 to 2024, compiled by the Chicago Metropolitan Agency for Planning.',
    stats: [
      { label: 'Median year of construction', value: '1958' },
      { label: 'Built before 1940', value: '305 (6.2%)' },
      { label: 'Built 1940 to 1969', value: '3,075 (62.1%)' },
      { label: 'Built since 2010', value: '483 (9.7%)' },
      { label: 'Living in detached houses', value: '3,642 (73.5%)' },
      { label: 'Living in attached houses', value: '150 (3.0%)' },
      { label: 'Living in buildings of twenty or more units', value: '968 (19.5%)' },
      { label: 'Households that are owners', value: '3,874 (83.8%)' },
    ],
    takeaway:
      'Lincolnwood’s housing is mostly postwar. Nearly two thirds of homes (62.1 percent) were built between 1940 and 1969 and 73.5 percent are detached houses, while buildings of twenty or more units are 19.5 percent. The village has a median home year of 1958, so most of its buildings, houses and condominiums alike, are now more than sixty years old.',
  },
  buildingTypes: [
    {
      name: 'Condominium buildings',
      detail:
        'Buildings whose boards want accurate books, dependable vendors and quick answers. Most are small enough that every owner knows the board, which makes clear written rules more important, not less.',
    },
    {
      name: 'Townhome communities',
      detail:
        'Shared roofs, siding, drives, landscaping and snow contracts that work best as one coordinated plan. A single calendar for exterior work keeps every home on the same schedule.',
    },
  ],
  issues: [
    // Each issue rests on the linked guide. Owner has not confirmed them from experience; wording stays general.
    {
      title: 'Cook County reassessment years',
      body:
        'Lincolnwood is in Cook County. One property tax appeal can cover every unit in a condominium building, and any savings go to the owners. Time the budget letter around the assessment notices. Owners often ask the board about it the week the notices arrive, so have a short answer ready.',
      post: 'cook-county-property-tax-appeal-condo-association',
      linkText: 'Cook County tax appeals for a condo building',
    },
    {
      title: 'Snow on shared drives',
      body:
        'A townhome community lives on its drives. Sign the snow contract before the season, with the service level and the record of each visit written into it. Mark where plowed snow may be piled, so it does not block a neighbor’s garage.',
      post: 'illinois-condo-hoa-snow-removal-vendor-guide',
      linkText: 'a snow and ice contract that holds up',
    },
    {
      title: 'Paying a deductible after a loss',
      body:
        'Section 12(c) of the Condominium Property Act gives a condo board three options for who pays the master policy deductible. One of them requires notice and an opportunity for a hearing first. Decide the approach before a loss and put it in the rules, so no owner is surprised.',
      post: 'illinois-condo-insurance-deductible-charge-owner',
      linkText: 'who pays the master policy deductible',
    },
    {
      title: 'Resale requests',
      body:
        'When a condominium unit is sold, Section 22.1 of the Illinois Condominium Property Act governs what the association provides. A ready packet keeps the closing date safe. Name one person who answers resale requests, and a backup for vacations.',
      post: 'illinois-section-22-1-disclosure-board-guide',
      linkText: 'preparing a 22.1 resale packet',
    },
    {
      title: 'Two statutes, one village',
      body:
        'Condominiums follow the Condominium Property Act. Many townhome communities follow the Common Interest Community Association Act. Check the declaration before adopting a rule. A board that oversees both a condominium and a townhome section should keep two checklists.',
      post: 'which-illinois-law-governs-condo-hoa-townhome',
      linkText: 'condo law and townhome law in Illinois',
    },
  ],
  localItems: [
    {
      title: 'Refuse collection and hauler licensing',
      body:
        'Under the Village Code, the Village or a scavenger it authorizes collects from single-family and multifamily residences at least every seven days, and anyone who removes refuse from a premises on a private basis needs a Village business license. A board that hires its own hauler should confirm the license.',
    },
    {
      title: 'Short-term rentals',
      body:
        'The Village allows short-term rentals but permits a property to be rented that way only one time per calendar year, counting any stay shorter than 30 days as one. That limit applies in addition to an association’s own rules.',
    },
    {
      title: 'Reassessment cycle',
      body:
        'Lincolnwood is in Niles Township, on Cook County’s north suburban calendar. The county reassessed it in 2022 and 2025, and the next reassessment is 2028.',
    },
  ],
  // TODO(Jojo): typical monthly fee range from real recent proposals. Never estimate; never below the $30 starting fee.
  feeRanges: null,
  // TODO(Jojo): real photos only (public view): a Lincolnwood condominium building from the sidewalk; a townhome street near Touhy Avenue.
  photos: [],
  faqs: [
    {
      q: 'Can a Lincolnwood condo association file one tax appeal for the building?',
      a: 'One filing can cover every unit in a condominium building. The savings go to the owners, not to the association budget.',
      post: 'cook-county-property-tax-appeal-condo-association',
    },
    {
      q: 'Who pays the insurance deductible after a pipe breaks?',
      a: 'Under Section 12(c) of the Condominium Property Act the board has three options, and one of them requires notice and an opportunity for a hearing. Read it together with your declaration.',
      post: 'illinois-condo-insurance-deductible-charge-owner',
    },
    {
      q: 'When should the snow contract be signed?',
      a: 'Before the season, commonly in September, with the service level written out.',
      post: 'illinois-condo-hoa-snow-removal-vendor-guide',
    },
    {
      q: 'How quickly can a manager reach a Lincolnwood building?',
      a: 'Our office is at 5107 N Western Ave in Chicago, a short drive from Lincolnwood. For building emergencies, the same phone number is answered 24/7.',
      post: 'condo-hoa-emergency-planning-checklist',
    },
    {
      q: 'How often can a Lincolnwood owner rent a unit on a short-term basis?',
      a: 'The Village limits a property to one short-term rental, meaning a stay under 30 days, per calendar year. The association’s declaration and rules may restrict rentals further.',
      post: 'renting-out-your-condo-chicago-rules',
    },
  ],
  hasHighRises: false,
  sources: [
    { label: 'Lincolnwood community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Lincolnwood.pdf' },
    { label: 'Lincolnwood Code, Article 1 Garbage and Refuse', href: 'https://ecode360.com/15321850' },
    { label: 'Lincolnwood Code Enforcement (short-term rentals)', href: 'https://www.lincolnwoodil.org/255/Code-Enforcement' },
    { label: 'Cook County property tax system and reassessment schedule', href: 'https://www.cookcountyassessoril.gov/cook-county-property-tax-system' },
  ],
};
