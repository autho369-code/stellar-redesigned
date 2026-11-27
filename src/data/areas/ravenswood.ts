import type { AreaContent } from './types';

export const ravenswood: AreaContent = {
  slug: 'ravenswood',
  targetQuery: 'condo management ravenswood chicago',
  title: 'Condo Management in Ravenswood, Chicago | From $30/Unit',
  metaDescription:
    'Condo and HOA management for Ravenswood boards: boutique buildings, budgets, insurance renewals and water leaks. Flat fee from $30 per unit per month.',
  // Per-area managed counts are company-private (owner decision, Nov 27, 2026), so this stays null and nothing is shown.
  managed: null,
  context:
    'Ravenswood is a quiet, tree-lined neighborhood with a mix of single-family homes and boutique condominium buildings near its craft brewery corridor. Smaller building associations define the neighborhood.',
  housing: {
    intro:
      'Ravenswood does not have a community area of its own. It lies across the Uptown and Lincoln Square community areas. The figures below are Census Bureau American Community Survey estimates for 2020 to 2024, compiled by the Chicago Metropolitan Agency for Planning, for Lincoln Square (Community Area 4).',
    stats: [
      { label: 'Median construction year, all homes', value: '1944' },
      { label: 'Homes built before 1940', value: '9,812 (46.3%)' },
      { label: 'Homes built from 1940 to 1969', value: '6,156 (29.1%)' },
      { label: 'Homes in two-unit buildings', value: '2,798 (13.2%)' },
      { label: 'Homes in three- and four-unit buildings', value: '4,301 (20.3%)' },
      { label: 'Homes in buildings of five to nine units', value: '4,692 (22.2%)' },
      { label: 'Households that own their home', value: '8,092 (40.7%)' },
      { label: 'Detached single-family houses', value: '3,022 (14.3%)' },
    ],
    takeaway:
      'In Lincoln Square, 46.3 percent of homes predate 1940 and 16.5 percent are in buildings of twenty or more units. Next door in Uptown that last share is 58.5 percent, so a Ravenswood board is often a small association in an older low-rise building rather than a tower board.',
  },
  buildingTypes: [
    {
      name: 'Boutique condominium buildings',
      detail:
        'Small buildings where a few volunteers carry the whole board. One slow project or one unpaid account is felt by every owner.',
    },
    {
      name: 'Townhome and homeowner associations',
      detail:
        'Communities with shared exteriors and grounds. Their governing statute may differ from the condominium next door.',
    },
  ],
  issues: [
    // Each issue rests on the linked guide. Owner has not confirmed them from experience; wording stays general.
    {
      title: 'Attention sized to a boutique building',
      body:
        'A boutique building needs attention sized to it. Before signing, ask how many communities the manager carries, what office support stands behind that person, and who steps in during a busy week.',
      post: 'how-many-associations-should-community-manager-handle',
      linkText: 'how many associations one manager should handle',
    },
    {
      title: 'Adopting the annual budget',
      body:
        'The board adopts the budget; it is not an owner vote. Most trouble comes from the notice and distribution steps, so begin roughly ninety days ahead of the new fiscal year.',
      post: 'illinois-condo-hoa-budget-adoption-guide',
      linkText: 'how Illinois boards adopt an annual budget',
    },
    {
      title: 'Cook County property tax appeals',
      body:
        'A single appeal can cover every unit in the building. The savings go to the owners and not into the association budget, so the board should decide early who files and how owners are told. The appeal runs in two stages, and the association should have an attorney prepare the filing.',
      post: 'cook-county-property-tax-appeal-condo-association',
      linkText: 'Cook County property tax appeals for condo boards',
    },
    {
      title: 'Insurance renewal',
      body:
        'Carriers respond better to an association that arrives with organized records, finished maintenance and context for past losses than to a bare application sent two weeks before renewal. Go through documentation, coverage, deductibles and the notice to owners well ahead of the date.',
      post: 'condo-hoa-insurance-renewal-checklist',
      linkText: 'the insurance renewal checklist for boards',
    },
    {
      title: 'Water leaks between units',
      body:
        'Who pays for a leak starts with the declaration, not with what seems fair. Read the documents before anyone promises to cover a repair, and treat the insurance question separately from the question of responsibility.',
      post: 'who-pays-condo-water-leak-illinois',
      linkText: 'who pays for a condo water leak',
    },
  ],
  localItems: [
    {
      title: 'Closing a building to short-term rentals',
      body:
        'Under Chicago’s Shared Housing Ordinance, a condominium can be added to the City’s Prohibited Buildings List through an affidavit process the City describes. Listed buildings are excluded from short-term-rental activity.',
    },
    {
      title: 'Garbage collection',
      body:
        'The City collects from buildings with up to four units, and those units pay its monthly garbage fee. Boutique buildings of five or more units hire a private hauler.',
    },
    {
      title: 'Reassessment',
      body:
        'The City of Chicago was reassessed in 2024. The next Cook County reassessment of the city is 2027.',
    },
  ],
  // TODO(Jojo): typical monthly fee range from real recent proposals. Never estimate; never below the $30 starting fee.
  feeRanges: null,
  // TODO(Jojo): real photos only (public view): a boutique condo building on a tree-lined street; a Ravenswood streetscape.
  photos: [],
  faqs: [
    {
      q: 'Who pays when a leak damages the unit below in a Ravenswood condo?',
      a: 'Start with the declaration. The answer rarely begins with fairness. It begins with what the governing documents assign to the owner and what they assign to the association.',
      post: 'who-pays-condo-water-leak-illinois',
    },
    {
      q: 'Can one property tax appeal cover our whole building?',
      a: 'Yes, one filing can cover every unit in a condominium building. Any reduction benefits the owners directly and does not flow into the association budget.',
      post: 'cook-county-property-tax-appeal-condo-association',
    },
    {
      q: 'What should a small board bring to an insurance renewal?',
      a: 'Records in order, maintenance completed and an explanation of any past claims. A bare application sent two weeks ahead puts the association in a weaker position.',
      post: 'condo-hoa-insurance-renewal-checklist',
    },
    {
      q: 'Is Ravenswood in Lincoln Square or Uptown?',
      a: 'Both. It is not an official community area, and parts of it fall in each. That matters for statistics and tax bills only in small ways, and the City’s rules for garbage, porches and landmark review are the same.',
      post: 'which-illinois-law-governs-condo-hoa-townhome',
    },
    {
      q: 'Can a boutique Ravenswood building ban Airbnb-style rentals?',
      a: 'The declaration and the board’s rules decide, and the City lets a building ask to be excluded from short-term-rental activity through its Prohibited Buildings List.',
      post: 'chicago-condo-short-term-rental-prohibited-buildings-list',
    },
  ],
  hasHighRises: false,
  sources: [
    { label: 'Lincoln Square community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Lincoln-Square.pdf' },
    { label: 'Uptown community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Uptown.pdf' },
    { label: 'City of Chicago House Share Prohibited Buildings List', href: 'https://data.cityofchicago.org/Buildings/House-Share-Prohibited-Buildings-List-Map/k75w-468b/about' },
    { label: 'City of Chicago garbage collection eligibility', href: 'https://www.chicago.gov/city/en/depts/streets/provdrs/streets_san/svcs/grid-garbage-collection.html' },
    { label: 'Cook County property tax system and reassessment schedule', href: 'https://www.cookcountyassessoril.gov/cook-county-property-tax-system' },
  ],
};
