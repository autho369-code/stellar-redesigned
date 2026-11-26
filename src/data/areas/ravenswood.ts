import type { AreaContent } from './types';

export const ravenswood: AreaContent = {
  slug: 'ravenswood',
  targetQuery: 'condo management ravenswood chicago',
  title: 'Condo Management in Ravenswood, Chicago | From $30/Unit',
  metaDescription:
    'Condo and HOA management for Ravenswood boards: boutique buildings, budgets, insurance renewals and water leaks. Flat fee from $30 per unit per month.',
  // TODO(Jojo): how many associations and about how many units does Stellar
  // manage in or near Ravenswood? Until then the page says "we serve boards here".
  managed: null,
  context:
    'Ravenswood is a quiet, tree-lined neighborhood with a mix of single-family homes and boutique condominium buildings near its craft brewery corridor. Smaller building associations define the neighborhood.',
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
        'A single appeal can cover every unit in the building. The savings go to the owners and not into the association budget, so the board should decide early who files and how owners are told.',
      post: 'cook-county-property-tax-appeal-condo-association',
      linkText: 'Cook County property tax appeals for condo boards',
    },
    {
      title: 'Insurance renewal',
      body:
        'Carriers respond better to an association that arrives with organized records, finished maintenance and context for past losses than to a bare application sent two weeks before renewal.',
      post: 'condo-hoa-insurance-renewal-checklist',
      linkText: 'the insurance renewal checklist for boards',
    },
    {
      title: 'Water leaks between units',
      body:
        'Who pays for a leak starts with the declaration, not with what seems fair. Read the documents before anyone promises to cover a repair.',
      post: 'who-pays-condo-water-leak-illinois',
      linkText: 'who pays for a condo water leak',
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
  ],
  hasHighRises: false,
};
