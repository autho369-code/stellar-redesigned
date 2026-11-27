import type { AreaContent } from './types';

export const portagePark: AreaContent = {
  slug: 'portage-park',
  targetQuery: 'condo management portage park chicago',
  title: 'Condo Management in Portage Park, Chicago | From $30/Unit',
  metaDescription:
    'Condo and HOA management for Portage Park boards: two-flats, bungalow-era conversions and small walk-ups on the northwest side. From $30 per unit a month.',
  // Per-area managed counts are company-private (owner decision, Nov 27, 2026), so this stays null and nothing is shown.
  managed: null,
  context:
    'Portage Park is a northwest-side neighborhood known for its park, its Six Corners shopping district and its blocks of brick bungalows and two-flats. Condominium associations are usually small buildings with a handful of owners.',
  housing: {
    intro:
      'Portage Park is Community Area 15. The numbers below come from the Census Bureau’s American Community Survey, as compiled by the Chicago Metropolitan Agency for Planning, and describe the whole community area.',
    stats: [
      { label: 'Median year a home was built', value: '1939' },
      { label: 'Homes built before 1940', value: '51.5%' },
      { label: 'Homes built since 2010', value: '3.2%' },
      { label: 'Detached single-family houses', value: '44.7%' },
      { label: 'Homes in two-unit buildings', value: '19.3%' },
      { label: 'Homes in buildings of three or four units', value: '15.7%' },
      { label: 'Homes in buildings of twenty or more units', value: '6.3%' },
      { label: 'Owner-occupied households', value: '61.3%' },
    ],
    takeaway:
      'Nearly half of Portage Park’s homes are detached houses, and most multi-unit buildings are small and old. Where condominiums exist they tend to be small associations in buildings that predate 1940, and very few are new.',
  },
  buildingTypes: [
    {
      name: 'Two-flats under one declaration',
      detail:
        'About 19 percent of homes are in two-unit buildings. A two-owner association still needs insurance, a bank account and a way to settle disagreements.',
    },
    {
      name: 'Three- and four-unit walk-ups',
      detail:
        'Small buildings where the board is every owner. A written budget and a standing annual meeting are the two habits that keep the association out of trouble.',
    },
    {
      name: 'The occasional larger building',
      detail:
        'About 6 percent of homes are in buildings of twenty units or more, usually older elevator or courtyard buildings with their own boilers and common systems.',
    },
  ],
  issues: [
    {
      title: 'Annual meetings with three owners',
      body:
        'A small building still has to hold an annual meeting, give notice and keep minutes. Missing one is a common reason a later decision gets challenged.',
      post: 'illinois-association-annual-meeting-guide',
      linkText: 'running the annual meeting',
    },
    {
      title: 'Funding repairs without a reserve',
      body:
        'A simple schedule of roof, porch and boiler dates tells owners what a reasonable monthly contribution would be, even in a building without a formal reserve study.',
      post: 'reasonable-reserves-illinois-condo-law',
      linkText: 'reasonable reserves under Illinois condo law',
    },
    {
      title: 'Insurance that fits a small building',
      body:
        'The guide explains what drives premiums and what coverage a master policy should include.',
      post: 'hoa-insurance-costs-illinois',
      linkText: 'what drives HOA and condo insurance costs in Illinois',
    },
    {
      title: 'Disclosure packages when one unit sells',
      body:
        'Every resale needs the association to produce documents on a deadline. A prepared folder makes a small building look organized to a buyer’s lender.',
      post: 'illinois-22-1-response-workflow',
      linkText: 'an Illinois Section 22.1 response workflow',
    },
    {
      title: 'Declarations that do not say enough',
      body:
        'An old or home-made declaration can leave gaps on leasing, parking and alterations. The Illinois statute lets owners amend it with a defined vote.',
      post: 'amend-illinois-condo-declaration-section-27',
      linkText: 'how to amend an Illinois condominium declaration',
    },
  ],
  localItems: [
    {
      title: 'Garbage collection in small buildings',
      body:
        'The City of Chicago collects from buildings of up to four units, which covers the small buildings that are common here. Those units pay the City’s $9.50-per-unit monthly garbage fee. A building of five or more units contracts with a private hauler.',
    },
    {
      title: 'Back porches and the 311 system',
      body:
        'Porch inspections in Chicago are triggered by complaints to 311, not by a routine schedule. A porch must support 100 pounds per square foot, and structural repairs require a permit and stamped plans.',
    },
    {
      title: 'Reassessment',
      body:
        'The City of Chicago was reassessed in 2024. The next reassessment is 2027.',
    },
  ],
  feeRanges: null,
  photos: [],
  faqs: [
    {
      q: 'Do I pay both the City garbage fee and a private hauler?',
      a: 'The City’s garbage fee applies to units it collects from. A building with five or more units that uses a private hauler pays that hauler instead.',
      post: 'condo-hoa-annual-budget-workbook',
    },
    {
      q: 'Does a two-flat need a condominium association?',
      a: 'If the owners recorded a condominium declaration, the Illinois Condominium Property Act applies and the building has an association. If not, the owners rely on their deed and any private agreement.',
      post: 'which-illinois-law-governs-condo-hoa-townhome',
    },
    {
      q: 'Who should have a key to the building’s boiler room?',
      a: 'The declaration or the board’s rules decide. The guide covers when a board or manager may enter a unit.',
      post: 'can-condo-boards-enter-your-unit-illinois',
    },
    {
      q: 'What is a reasonable late fee in a small building?',
      a: 'The declaration and the board’s adopted rules set it. The guide explains how late fees and interest policies are usually structured.',
      post: 'illinois-association-late-fees-interest-policy',
    },
    {
      q: 'Is a management company worth it for a four-unit building?',
      a: 'It depends on how much time the owners have and how complicated the building is. We quote a small association the way we quote a large one, from the building itself.',
      post: 'self-managed-condo-association-problems',
    },
  ],
  hasHighRises: false,
  sources: [
    { label: 'Portage Park community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Portage-Park.pdf' },
    { label: 'City of Chicago garbage collection eligibility', href: 'https://www.chicago.gov/city/en/depts/streets/provdrs/streets_san/svcs/grid-garbage-collection.html' },
    { label: 'City of Chicago garbage fee', href: 'https://www.chicago.gov/city/en/depts/fin/provdrs/city-of-chicago-garbage-fee-webpage.html' },
    { label: 'Chicago porch safety and permits', href: 'https://www.chicago.gov/city/en/depts/bldgs/supp_info/porch-safety.html' },
    { label: 'Cook County property tax system and reassessment schedule', href: 'https://www.cookcountyassessoril.gov/cook-county-property-tax-system' },
  ],
};
