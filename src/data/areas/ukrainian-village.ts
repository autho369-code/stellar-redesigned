import type { AreaContent } from './types';

export const ukrainianVillage: AreaContent = {
  slug: 'ukrainian-village',
  targetQuery: 'condo management ukrainian village chicago',
  title: 'Condo Management in Ukrainian Village, Chicago | $30/Unit',
  metaDescription:
    'Condo and HOA management for Ukrainian Village boards: historic walk-ups and cottages in a Chicago landmark district. From $30 per unit a month.',
  // TODO(Mirsad): how many associations and about how many units does Stellar
  // manage in or near Ukrainian Village? Until then the page says "we serve boards here".
  managed: null,
  context:
    'Ukrainian Village is known for its onion-domed churches, its cottages and its tight, tree-lined blocks. Most condominium buildings here are brick walk-ups and converted houses that have stood for a century.',
  housing: {
    intro:
      'Ukrainian Village falls in West Town, Community Area 24. Numbers from the Census, as summarized by the Chicago Metropolitan Agency for Planning, cover the whole community area and are a guide to the housing mix, not a count of this one neighborhood.',
    stats: [
      { label: 'Homes occupied by their owners', value: '41.9%' },
      { label: 'Homes occupied by renters', value: '58.1%' },
      { label: 'Homes in single-family detached houses', value: '10.6%' },
      { label: 'Homes in two-unit buildings', value: '10.9%' },
      { label: 'Homes in buildings of three or four units', value: '32.1%' },
      { label: 'Homes in buildings of ten to nineteen units', value: '6.0%' },
      { label: 'Homes built before 1940', value: '40.0%' },
      { label: 'Median year built, West Town', value: '1968' },
    ],
    takeaway:
      'Only about one home in ten is a detached house. The rest live in buildings that share walls, roofs and risers, which is why a single failed roof or sewer line becomes an association problem rather than a private one.',
  },
  buildingTypes: [
    {
      name: 'Two-flats and three-flats',
      detail:
        'Brick or frame buildings with a front stair and a rear porch. Declarations are often short and informal, and a simple amendment can fix problems that have lingered for years.',
    },
    {
      name: 'Cottages and courtyard groupings',
      detail:
        'Small buildings or clusters of them on one parcel, with shared walks, fences and water lines that owners may not realize are common property.',
    },
    {
      name: 'Newer infill buildings',
      detail:
        'About 13 percent of West Town’s homes were built since 2010. Infill buildings carry modern systems, and a board’s early work is to adopt leasing, pet and parking rules before the first dispute.',
    },
  ],
  issues: [
    {
      title: 'Declaration rewrites for old buildings',
      body:
        'A declaration drafted decades ago may not match how the building runs today. The Condominium Property Act sets the process for amending it, including the vote thresholds.',
      post: 'amend-illinois-condo-declaration-section-27',
      linkText: 'how to amend an Illinois condominium declaration',
    },
    {
      title: 'Collecting assessments from absentee owners',
      body:
        'More than half of households here rent, which means many assessments come from owners who live elsewhere. Liens and late-fee policies matter most in the first ninety days.',
      post: 'illinois-condo-association-liens-delinquency',
      linkText: 'liens and delinquency under Illinois condo law',
    },
    {
      title: 'Boards that must open their books',
      body:
        'In small associations owners ask for budgets and minutes at the front step. A request guide shows what the statute requires, how long a board has and what can be withheld.',
      post: 'illinois-condo-association-records-request-guide',
      linkText: 'handling owner records requests',
    },
    {
      title: 'Older plumbing and masonry reserves',
      body:
        'A reserve study estimates when stacks, parapets and chimneys will need work and turns the cost into a yearly contribution instead of a surprise.',
      post: 'how-to-read-condo-reserve-study',
      linkText: 'how to read a condo reserve study',
    },
    {
      title: 'Insurance that matches the replacement cost',
      body:
        'The master policy has to cover the building as it stands, with its trim, stairs and period details. Review limits and deductibles before each renewal, not after a claim.',
      post: 'condo-hoa-insurance-renewal-checklist',
      linkText: 'a condo insurance renewal checklist',
    },
  ],
  localItems: [
    {
      title: 'Three landmark designations stacked together',
      body:
        'The Ukrainian Village Landmark District was designated December 4, 2002. The City extended it on July 27, 2005 and again on April 11, 2007. Permit review for exterior changes applies to buildings inside the district boundaries, which the Department of Planning and Development publishes.',
    },
    {
      title: 'Porch rules for a century-old stock',
      body:
        'Chicago requires porches to carry 100 pounds per square foot of live load. A structural repair needs a permit and plans stamped by an Illinois-licensed architect or structural engineer, while routine maintenance does not. The City inspects porches in response to 311 complaints rather than on a routine cycle.',
    },
    {
      title: 'Reassessment dates',
      body:
        'Chicago’s last reassessment was 2024, and the next is 2027. The Assessor’s calendar sets the appeal windows for each township.',
    },
  ],
  feeRanges: null,
  photos: [],
  faqs: [
    {
      q: 'Is every building in Ukrainian Village landmarked?',
      a: 'No. Only buildings inside the three designated boundaries are covered. The City’s landmark list and map show which blocks are in.',
      post: 'adopting-enforcing-condo-hoa-rules-illinois',
    },
    {
      q: 'What counts as structural work on a porch?',
      a: 'The City requires a permit and stamped plans for structural porch repairs, while routine maintenance does not need one. Ask the Department of Buildings whether a specific job counts as structural before work starts.',
      post: 'common-condo-rule-violations-chicago',
    },
    {
      q: 'Who pays when the building’s sewer line fails?',
      a: 'It depends on the declaration and on whether the line serves one unit or all of them. The guide lays out the common allocations and who holds the burden of proof.',
      post: 'condo-repairs-owner-vs-association-illinois',
    },
    {
      q: 'Can a two-unit building have a board?',
      a: 'Yes. Even a two-unit condominium has a declaration, bylaws and statutory duties. The guide explains which meetings and notices still apply.',
      post: 'illinois-association-annual-meeting-guide',
    },
    {
      q: 'Does the proposal include a site visit?',
      a: 'We read the declaration and budget, then walk the property before pricing. The pricing page lists exactly what the fee covers.',
      post: 'community-association-management-agreement-review',
    },
  ],
  hasHighRises: false,
  sources: [
    { label: 'West Town community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/West-Town.pdf' },
    { label: 'Chicago Landmarks, official list of landmark districts', href: 'https://webapps1.chicago.gov/landmarksweb/web/listings.htm' },
    { label: 'Chicago porch safety and permits', href: 'https://www.chicago.gov/city/en/depts/bldgs/supp_info/porch-safety.html' },
    { label: 'Cook County property tax system and reassessment schedule', href: 'https://www.cookcountyassessoril.gov/cook-county-property-tax-system' },
  ],
};
