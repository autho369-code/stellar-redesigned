import type { AreaContent } from './types';

export const avondale: AreaContent = {
  slug: 'avondale',
  targetQuery: 'condo management avondale chicago',
  title: 'Condo Management in Avondale, Chicago | From $30/Unit',
  metaDescription:
    'Condo and HOA management for Avondale boards: condo conversions, new townhomes, capital plans and lender questions. Flat fee from $30 per unit per month.',
  // Per-area managed counts are company-private (owner decision, Nov 27, 2026), so this stays null and nothing is shown.
  managed: null,
  context:
    'Avondale is a growing northwest side neighborhood known for its craft breweries and dining scene. It has a growing number of condominium conversions and new townhome developments.',
  housing: {
    intro:
      'Avondale is Community Area 21, on the northwest side. These are 2020 to 2024 American Community Survey estimates for the whole community area, as compiled by the Chicago Metropolitan Agency for Planning.',
    stats: [
      { label: 'Typical home was built in (median year)', value: '1934' },
      { label: 'Share of homes that predate 1940', value: '9,190 (57.2%)' },
      { label: 'Newer homes, built 2010 or later', value: '1,017 (6.3%)' },
      { label: 'Two-flat style homes (two units)', value: '4,591 (28.6%)' },
      { label: 'Three- and four-flat style homes', value: '4,661 (29.0%)' },
      { label: 'Owner-occupied households', value: '6,540 (43.7%)' },
      { label: 'Homes from the 1990 to 2009 building years', value: '1,565 (9.7%)' },
      { label: 'Renter-occupied households', value: '8,425 (56.3%)' },
    ],
    takeaway:
      'Two-flats and three- and four-flats make up more than half of Avondale’s homes, and 57 percent of all homes predate 1940. Only about 6 percent were built since 2010, so most associations are in older buildings and the newer townhome and infill projects are only now reaching their first capital work.',
  },
  buildingTypes: [
    {
      name: 'Condominium conversions',
      detail:
        'Smaller buildings that became condominiums. Many start with a new board and no manager. The first board sets up the bank accounts, the insurance and the house rules, usually while its members are still unpacking.',
    },
    {
      name: 'New townhome developments',
      detail:
        'Newer communities where owners share exteriors and grounds, and where the first budgets set the pattern. A first budget that leaves out roof and siding reserves is hard to correct once owners are used to a low assessment.',
    },
  ],
  issues: [
    // Each issue rests on the linked guide. Owner has not confirmed them from experience; wording stays general.
    {
      title: 'Going without a manager',
      body:
        'A newly converted building often starts out self-managed. That can cut cost for a while, but the risks stay hidden until something goes wrong. Weigh them before the board decides to go it alone. Write down who handles the money, the records and the vendor calls, so the work does not sit with one neighbor.',
      post: 'self-managed-condo-association-problems',
      linkText: 'the hidden problems of a self-managed association',
    },
    {
      title: 'Old systems behind new finishes',
      body:
        'A converted building may still have older systems behind its new finishes. List the roof, the masonry, the plumbing risers and the heating plant, and give each one a date and a funding source.',
      post: 'vintage-chicago-condo-capital-planning',
      linkText: 'capital planning for older Chicago condo buildings',
    },
    {
      title: 'The statute behind a townhome association',
      body:
        'A townhome community next to a condominium may answer to a different Illinois statute. Read the recorded declaration before the board adopts a rule or a procedure. A conversion and a new townhome row on the same block can have very different documents.',
      post: 'which-illinois-law-governs-condo-hoa-townhome',
      linkText: 'which Illinois statute governs your community',
    },
    {
      title: 'Lender questionnaires',
      body:
        'A lender that sells its loan to Fannie Mae or Freddie Mac must confirm that the whole project is eligible, not only the buyer. Have the documents ready before the next questionnaire arrives. Keep the current budget, the insurance certificate and the reserve balance where the board can find them quickly.',
      post: 'fannie-freddie-condo-eligibility-board-guide',
      linkText: 'what lenders check about a condo project',
    },
    {
      title: 'Comparing management proposals',
      body:
        'Ask each firm for a written, flat-fee proposal with a defined scope. Then score them all on the same sheet, so price is not the only thing the board compares. Ask who the manager will be and how many other buildings that person handles.',
      post: 'score-condo-hoa-management-proposals',
      linkText: 'how to score management proposals',
    },
  ],
  localItems: [
    {
      title: 'Porches and the 311 process',
      body:
        'Chicago does not inspect porches on a schedule. Complaints to 311 trigger inspections, a porch must carry a load the code sets at 100 pounds per square foot, and structural repairs need a permit with stamped plans. In a converted two-flat, the rear porch is often the most expensive common element.',
    },
    {
      title: 'Short-term rentals in a condominium',
      body:
        'Under the Shared Housing Ordinance the City lists buildings that have been excluded from short-term-rental activity. The City describes an affidavit process for adding a building, and the association’s declaration and rules still apply either way.',
    },
    {
      title: 'Reassessment',
      body:
        'The City of Chicago was reassessed in 2024. The next Cook County reassessment of the city is 2027.',
    },
  ],
  // TODO(Jojo): typical monthly fee range from real recent proposals. Never estimate; never below the $30 starting fee.
  feeRanges: null,
  // TODO(Jojo): real photos only (public view): a converted Avondale building from the sidewalk; a new townhome row; a neighborhood street.
  photos: [],
  faqs: [
    {
      q: 'Is a newly converted Avondale condo building better off self-managed?',
      a: 'It can work for a small, stable building with engaged volunteers. The work and the legal duties stay with the board either way, and the risks are easy to miss until they surface.',
      post: 'self-managed-condo-association-problems',
    },
    {
      q: 'Why does a lender ask the association questions when one unit sells?',
      a: 'Lenders that sell loans to Fannie Mae or Freddie Mac must confirm that the whole project is eligible, not only the buyer. That is why the questionnaire comes to the board.',
      post: 'fannie-freddie-condo-eligibility-board-guide',
    },
    {
      q: 'How should a converted building plan its big repairs?',
      a: 'Write down each major system, when it will likely need work and how the association will pay for it. Review the list at every budget, so a repair is a planned project and not a surprise.',
      post: 'vintage-chicago-condo-capital-planning',
    },
    {
      q: 'What should a new Avondale condo board do in its first year?',
      a: 'Open the association’s own bank accounts, adopt a budget, confirm the insurance, and set a calendar for meetings and notices. Then decide who does the daily work.',
      post: 'illinois-condo-hoa-budget-adoption-guide',
    },
    {
      q: 'Who pays to rebuild a shared rear porch in a two-flat condominium?',
      a: 'The declaration says whether the porch is a common element or belongs to one unit. Chicago requires a permit and stamped plans for structural porch work, so the board should settle who pays before it hires anyone.',
      post: 'chicago-condo-porch-deck-safety-board-guide',
    },
  ],
  hasHighRises: false,
  sources: [
    { label: 'Avondale community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Avondale.pdf' },
    { label: 'Chicago porch safety and permits', href: 'https://www.chicago.gov/city/en/depts/bldgs/supp_info/porch-safety.html' },
    { label: 'City of Chicago House Share Prohibited Buildings List', href: 'https://data.cityofchicago.org/Buildings/House-Share-Prohibited-Buildings-List-Map/k75w-468b/about' },
    { label: 'Cook County property tax system and reassessment schedule', href: 'https://www.cookcountyassessoril.gov/cook-county-property-tax-system' },
  ],
};
