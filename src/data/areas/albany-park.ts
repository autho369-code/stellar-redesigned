import type { AreaContent } from './types';

export const albanyPark: AreaContent = {
  slug: 'albany-park',
  targetQuery: 'condo management albany park chicago',
  title: 'Condo Management in Albany Park, Chicago | From $30/Unit',
  metaDescription:
    'Condo and HOA management for Albany Park boards: condominiums and multi-unit conversions near the river and the Brown Line. Flat fee from $30 per unit.',
  // Per-area managed counts are company-private (owner decision, Nov 27, 2026), so this stays null and nothing is shown.
  managed: null,
  context:
    'Albany Park sits along the North Branch of the Chicago River with good transit access. It is one of Chicago’s most diverse neighborhoods, with a mix of condominiums and multi-unit conversions.',
  housing: {
    intro:
      'Albany Park is Community Area 14, on the North Branch of the Chicago River. The figures below are Census Bureau American Community Survey estimates for 2020 to 2024, compiled by the Chicago Metropolitan Agency for Planning for the whole community area.',
    stats: [
      { label: 'Median construction year, all homes', value: '1931' },
      { label: 'Homes built before 1940', value: '11,493 (60.8%)' },
      { label: 'Homes built since 2010', value: '655 (3.5%)' },
      { label: 'Homes in two-unit buildings', value: '3,262 (17.3%)' },
      { label: 'Homes in three- and four-unit buildings', value: '3,589 (19.0%)' },
      { label: 'Households that own their home', value: '7,624 (43.7%)' },
      { label: 'Homes in buildings of five to nine units', value: '3,818 (20.2%)' },
      { label: 'Households that rent their home', value: '9,811 (56.3%)' },
    ],
    takeaway:
      'Six in ten Albany Park homes predate 1940, and the rest of the stock is spread almost evenly across two-flats (17.3 percent), three- and four-flats (19.0 percent) and buildings of five to nine units (20.2 percent). For a board, that points to pre-war buildings where roofs, porches and boilers are the main capital items.',
  },
  buildingTypes: [
    {
      name: 'Multi-unit conversions',
      detail:
        'Two-flats to courtyard buildings that became condominiums. The board is small and the building is older than its paperwork.',
    },
    {
      name: 'Condominium buildings',
      detail:
        'Well-kept buildings where owners come from many backgrounds, so notices need to be short, clear and sent more than one way.',
    },
  ],
  issues: [
    // Each issue rests on the linked guide. Owner has not confirmed them from experience; wording stays general.
    {
      title: 'Running a small building',
      body:
        'A conversion with a few units often has no manager. The duties are the same as in a large building, so decide who keeps the books, the records and the calendar. A shared folder and a bank account in the association’s own name are the first two steps.',
      post: 'self-managed-condo-association-problems',
      linkText: 'the risks of managing your own association',
    },
    {
      title: 'Back porches',
      body:
        'Wood rear porches are common on Chicago walk-ups. Know what the City requires and when a permit is needed, and keep each inspection on file. Photograph the porches each spring, so changes are easy to see from year to year.',
      post: 'chicago-condo-porch-deck-safety-board-guide',
      linkText: 'a board guide to Chicago porch and deck rules',
    },
    {
      title: 'Leaks between floors',
      body:
        'In a stacked building, water finds the unit below. The declaration decides who pays, so read it before anyone agrees to cover a repair. Ask every owner to know where their own shut-off valve is.',
      post: 'who-pays-condo-water-leak-illinois',
      linkText: 'who is responsible for a condo water leak',
    },
    {
      title: 'A written collection policy',
      body:
        'Illinois condo and HOA boards must adopt a written assessment collection policy by January 1, 2027, under Public Act 104-0734. A small board should adopt it now and apply it the same way to every owner. If owners read different languages, a short translated summary can sit beside the official policy.',
      post: 'illinois-condo-hoa-collection-policy-january-2027',
      linkText: 'the 2027 collection policy requirement',
    },
    {
      title: 'A manager with time for you',
      body:
        'Ask how many buildings the manager carries and who answers when that person is out. A small association should get a named person, not a queue. Ask to meet that person before the board signs.',
      post: 'how-many-associations-should-community-manager-handle',
      linkText: 'how to judge a manager’s workload',
    },
  ],
  localItems: [
    {
      title: 'Garbage service depends on building size',
      body:
        'The City collects from buildings with up to four units and bills those units its monthly garbage fee. Buildings with five or more units hire a private hauler, so an Albany Park walk-up with six units budgets that contract itself.',
    },
    {
      title: 'Closing a building to short-term rentals',
      body:
        'The City keeps a House Share Prohibited Buildings List under its Shared Housing Ordinance. A condominium can be added through the affidavit process the City describes, after which short-term-rental registrations for its units are refused.',
    },
    {
      title: 'Reassessment',
      body:
        'Chicago was reassessed in 2024, and Cook County reassesses the city again in 2027. A board that plans a tax appeal for the building should note that date.',
    },
  ],
  // TODO(Jojo): typical monthly fee range from real recent proposals. Never estimate; never below the $30 starting fee.
  feeRanges: null,
  // TODO(Jojo): real photos only (public view): an Albany Park courtyard or two-flat conversion from the sidewalk; a street near the river.
  photos: [],
  faqs: [
    {
      q: 'Does a small Albany Park condo association need a written collection policy?',
      a: 'Yes. Illinois condo and HOA boards must adopt a written assessment collection policy by January 1, 2027, under Public Act 104-0734. Size does not change the requirement.',
      post: 'illinois-condo-hoa-collection-policy-january-2027',
    },
    {
      q: 'Who pays when water from one unit damages another?',
      a: 'It starts with the declaration, which assigns responsibility for each part of the building. Read it first, then look at insurance.',
      post: 'who-pays-condo-water-leak-illinois',
    },
    {
      q: 'Can a four-unit building hire a professional manager?',
      a: 'Yes. The legal duties are the same at four units as at forty. A per-unit flat fee lets a small board see the cost before it decides.',
      post: 'self-managed-condo-association-problems',
    },
    {
      q: 'How should a board send notices where owners speak several languages?',
      a: 'Keep notices short and plain, send them more than one way, and follow the notice rules in your declaration and the statute. A translated summary can sit beside the official notice.',
      post: 'illinois-condo-hoa-budget-adoption-guide',
    },
    {
      q: 'Who is responsible for garbage in a six-unit building?',
      a: 'The City collects from buildings of up to four units. A building with six units contracts and pays a private hauler, and the association budgets that contract with its other common expenses.',
      post: 'condo-hoa-annual-budget-workbook',
    },
  ],
  hasHighRises: false,
  sources: [
    { label: 'City of Chicago garbage collection eligibility', href: 'https://www.chicago.gov/city/en/depts/streets/provdrs/streets_san/svcs/grid-garbage-collection.html' },
    { label: 'City of Chicago House Share Prohibited Buildings List', href: 'https://data.cityofchicago.org/Buildings/House-Share-Prohibited-Buildings-List-Map/k75w-468b/about' },
    { label: 'Cook County property tax system and reassessment schedule', href: 'https://www.cookcountyassessoril.gov/cook-county-property-tax-system' },
  ],
};
