import type { AreaContent } from './types';

export const lakeForest: AreaContent = {
  slug: 'lake-forest',
  targetQuery: 'condo management lake forest il',
  title: 'Condo Management in Lake Forest, IL | Stellar',
  metaDescription:
    'Condo, HOA and townhome management for Lake Forest boards: winter contracts, insurance renewals and budget season. Flat fee from $30 per unit per month.',
  // Per-area managed counts are company-private (owner decision, Nov 27, 2026), so this stays null and nothing is shown.
  managed: null,
  context:
    'Lake Forest is a historic North Shore community known for Market Square and long-standing property standards. Its condominium, townhome and homeowner associations expect careful financial reporting and well-kept common areas.',
  housing: {
    intro:
      'Lake Forest is a Lake County city on the lakefront, with about 6,900 occupied homes. The figures below are Census Bureau American Community Survey estimates for 2020 to 2024, compiled by the Chicago Metropolitan Agency for Planning.',
    stats: [
      { label: 'Midpoint year of home construction', value: '1976' },
      { label: 'Homes older than 1940', value: '1,310 (18.0%)' },
      { label: 'Homes dating from 1940 to 1969', value: '1,794 (24.6%)' },
      { label: 'Homes dating from 2010 or later', value: '452 (6.2%)' },
      { label: 'Detached houses', value: '5,577 (76.6%)' },
      { label: 'Attached houses (rowhouses and townhomes)', value: '490 (6.7%)' },
      { label: 'Twenty-plus-unit buildings (homes)', value: '776 (10.7%)' },
      { label: 'Owner-occupied homes', value: '6,124 (88.8%)' },
    ],
    takeaway:
      'In Lake Forest 88.8 percent of households own, 76.6 percent of homes are detached houses and 6.7 percent are attached houses. Buildings of twenty or more units are 10.7 percent of homes, so an association is a small part of a town of large single-family lots.',
  },
  buildingTypes: [
    {
      name: 'Condominium associations',
      detail:
        'Associations where owners expect clear monthly reporting and common areas kept to a high standard. A clear monthly package lets the board answer an owner’s question the same day.',
    },
    {
      name: 'Townhome and homeowner associations',
      detail:
        'Communities that share grounds, drives and exterior work, often under a different statute than a condominium. Landscaping is usually the largest visible contract, so the board should read its scope line by line every renewal.',
    },
  ],
  issues: [
    // Each issue rests on the linked guide. Owner has not confirmed them from experience; wording stays general.
    {
      title: 'Winter service',
      body:
        'Winter service is the contract owners judge first. Put response times, the areas covered and record-keeping in writing before the season, and review the log after each storm. Name the private drives and shared walks in the contract one by one.',
      post: 'illinois-condo-hoa-snow-removal-vendor-guide',
      linkText: 'managing snow and ice vendors',
    },
    {
      title: 'Knowing your governing statute',
      body:
        'Many homeowner and townhome associations operate under the Common Interest Community Association Act, while condominiums operate under the Condominium Property Act. A board should know which one it is before it copies a procedure from a neighbor.',
      post: 'which-illinois-law-governs-condo-hoa-townhome',
      linkText: 'how to tell which Illinois law governs an association',
    },
    {
      title: 'Preparing for insurance renewal',
      body:
        'Start early. An association that shows the carrier organized records, completed maintenance and the story behind past claims stands in a stronger position than one that files late. Keep a simple file through the year, so renewal is not rebuilt from memory.',
      post: 'condo-hoa-insurance-renewal-checklist',
      linkText: 'preparing an association for insurance renewal',
    },
    {
      title: 'Budget season',
      body:
        'Budget season either prevents disputes or creates them. A repeatable calendar for drafting, owner notice and the board vote keeps the final month calm. Owners accept a change more easily when they saw the draft early.',
      post: 'illinois-condo-hoa-budget-adoption-guide',
      linkText: 'a repeatable budget adoption process',
    },
    {
      title: 'Emergency decisions',
      body:
        'Decide before the emergency who may authorize urgent work, who is called first and how owners hear about it. Write it down, and keep the record for the insurance claim.',
      post: 'condo-hoa-emergency-planning-checklist',
      linkText: 'the emergency planning checklist for associations',
    },
  ],
  localItems: [
    {
      title: 'Certificate of Appropriateness for exterior work',
      body:
        'Under Chapter 155 of the Lake Forest Code, exterior alterations to a landmark or a structure inside a historic district need a Certificate of Appropriateness from the Historic Preservation Commission before the City issues a permit. Review looks at height, proportion, openings, materials and distinctive features.',
    },
    {
      title: 'Historic districts and landmarks',
      body:
        'The Commission reviews projects inside the City’s historic districts and on individual landmarks, including demolitions, additions, new construction and building scale variances. A townhome or condominium board should ask the City whether its parcel is inside a district before it bids exterior work.',
    },
    {
      title: 'Lake County assessments',
      body:
        'Lake Forest is in Lake County, not Cook County, so Cook County’s reassessment calendar does not apply. A board planning a tax appeal should confirm the township’s schedule with the county.',
    },
  ],
  // TODO(Jojo): typical monthly fee range from real recent proposals. Never estimate; never below the $30 starting fee.
  feeRanges: null,
  // TODO(Jojo): real photos only (public view): a residential street in Lake Forest from the sidewalk; a townhome or courtyard building from the sidewalk.
  photos: [],
  faqs: [
    {
      q: 'Which Illinois law covers a Lake Forest homeowners association?',
      a: 'Many homeowner and townhome associations are governed by the Common Interest Community Association Act. Condominiums are governed by the Condominium Property Act. Check the recorded declaration, then confirm with association counsel.',
      post: 'which-illinois-law-governs-condo-hoa-townhome',
    },
    {
      q: 'What helps an association at insurance renewal?',
      a: 'Organized documentation, completed maintenance and clear context for any losses. A bare application sent two weeks before renewal leaves the board in a weaker position.',
      post: 'condo-hoa-insurance-renewal-checklist',
    },
    {
      q: 'Who can approve emergency work when the board cannot meet?',
      a: 'Your declaration, your bylaws and the governing statute decide that. Ask association counsel once, and put the answer into a written emergency plan.',
      post: 'condo-hoa-emergency-planning-checklist',
    },
    {
      q: 'What should a Lake Forest board ask a management firm?',
      a: 'Ask for a written flat-fee proposal with a defined scope, the name of the manager, and how after-hours calls are handled. Compare every firm on the same points.',
      post: 'score-condo-hoa-management-proposals',
    },
    {
      q: 'Does re-roofing a Lake Forest townhome community need Historic Preservation Commission review?',
      a: 'It can, if the buildings are in a historic district or are landmarks and the work changes exterior appearance. The City’s planning staff can confirm before the board signs a contract.',
      post: 'condo-hoa-capital-project-loan-preparation',
    },
  ],
  hasHighRises: false,
  sources: [
    { label: 'Lake Forest community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Lake-Forest.pdf' },
    { label: 'Lake Forest Historic Preservation Commission', href: 'https://www.cityoflakeforest.com/government/boards_and_commissions/historic_preservation_commission.php' },
    { label: 'Lake Forest Code, Chapter 155 standards for review', href: 'https://codelibrary.amlegal.com/codes/lakeforest/latest/lakeforest_il/0-0-0-14364' },
    { label: 'Lake County Illinois, Supervisor of Assessments', href: 'https://www.lakecountyil.gov/FAQ.aspx?QID=242' },
  ],
};
