import type { AreaContent } from './types';

export const northPark: AreaContent = {
  slug: 'north-park',
  targetQuery: 'condo management north park chicago',
  title: 'Condo Management in North Park, Chicago | From $30/Unit',
  metaDescription:
    'Condo and HOA management for North Park boards: condominium associations and townhome communities near the river. Flat fee from $30 per unit per month.',
  // Per-area managed counts are company-private (owner decision, Nov 27, 2026), so this stays null and nothing is shown.
  managed: null,
  context:
    'North Park is a quiet neighborhood on the North Branch of the Chicago River, home to North Park University and nature preserves. It has condominium associations and townhome communities, including the Peterson Park blocks.',
  housing: {
    intro:
      'North Park is Community Area 13, bordered by the North Branch of the Chicago River. The figures below come from the Census Bureau’s 2020 to 2024 American Community Survey, compiled by the Chicago Metropolitan Agency for Planning for the whole community area.',
    stats: [
      { label: 'Median year of construction', value: '1952' },
      { label: 'Built before 1940', value: '2,646 (34.8%)' },
      { label: 'Built since 2010', value: '89 (1.2%)' },
      { label: 'Living in two-unit buildings', value: '1,321 (17.4%)' },
      { label: 'Living in three- and four-unit buildings', value: '919 (12.1%)' },
      { label: 'Households that are owners', value: '3,283 (48.1%)' },
      { label: 'Built 1970 to 1989', value: '830 (10.9%)' },
      { label: 'Households that are renters', value: '3,542 (51.9%)' },
    ],
    takeaway:
      'Three in ten North Park homes are detached houses, yet about one in five sits in a building of twenty or more units. Associations range from small two-flats to larger complexes, so a board’s needs depend heavily on which end of that range it is on.',
  },
  buildingTypes: [
    {
      name: 'Condominium associations',
      detail:
        'Mid-size buildings in a residential setting, where the same owners often serve on the board for years.',
    },
    {
      name: 'Townhome communities',
      detail:
        'Homes that share roofs, drives and grounds, and that may follow a different Illinois statute than the condominium nearby.',
    },
  ],
  issues: [
    // Each issue rests on the linked guide. Owner has not confirmed them from experience; wording stays general.
    {
      title: 'Collections done the same way every time',
      body:
        'By January 1, 2027, Illinois condo and HOA boards must adopt a written assessment collection policy under Public Act 104-0734. A written policy also protects neighbors from having to judge each other. Send the policy to every owner once it is adopted.',
      post: 'illinois-condo-hoa-collection-policy-january-2027',
      linkText: 'adopting a collection policy before 2027',
    },
    {
      title: 'Elections with long-serving boards',
      body:
        'When the same directors have served for years, the election steps get rusty. Announce the candidate deadline, use a proxy form that is fair to every candidate, and let candidates watch the count. A neutral person to count the ballots is worth arranging in advance.',
      post: 'illinois-condo-board-elections-proxies-ballots',
      linkText: 'how to run an Illinois condo board election',
    },
    {
      title: 'Condominium or townhome law',
      body:
        'Property submitted to condominium ownership follows the Condominium Property Act. Many townhome communities follow the Common Interest Community Association Act. The declaration tells you which. Peterson Park townhome owners and condo owners may be reading different rulebooks.',
      post: 'which-illinois-law-governs-condo-hoa-townhome',
      linkText: 'which statute applies to a townhome community',
    },
    {
      title: 'Renewal of the master policy',
      body:
        'Give the carrier a full picture: maintenance done, repairs finished, and what happened in any past claim. Start early enough to answer questions. Ask the agent what the carrier wants to see this year.',
      post: 'condo-hoa-insurance-renewal-checklist',
      linkText: 'an insurance renewal checklist for associations',
    },
    {
      title: 'Reserves near the river',
      body:
        'Illinois names no reserve percentage for condominiums. The board budgets reasonable reserves for its own building, which near the river includes drainage, foundations and grounds. Walk the grounds each spring and note what changed.',
      post: 'reasonable-reserves-illinois-condo-law',
      linkText: 'reasonable reserves explained for boards',
    },
  ],
  localItems: [
    {
      title: 'Garbage collection',
      body:
        'The City hauls for buildings of up to four units. A North Park building with five or more units pays a private hauler, and its board should rebid that contract on a schedule.',
    },
    {
      title: 'Short-term rentals',
      body:
        'Chicago’s Shared Housing Ordinance includes a Prohibited Buildings List for buildings that have opted out of short-term-rental activity. The City’s affidavit process is described on its site and the declaration still governs owners.',
    },
    {
      title: 'Reassessment',
      body:
        'Chicago was reassessed in 2024. Cook County next reassesses the city in 2027.',
    },
  ],
  // TODO(Jojo): typical monthly fee range from real recent proposals. Never estimate; never below the $30 starting fee.
  feeRanges: null,
  // TODO(Jojo): real photos only (public view): a North Park condominium building from the sidewalk; a residential street near the river.
  photos: [],
  faqs: [
    {
      q: 'When is the Illinois collection policy deadline?',
      a: 'January 1, 2027. Illinois condo and HOA boards must adopt a written assessment collection policy by then, under Public Act 104-0734.',
      post: 'illinois-condo-hoa-collection-policy-january-2027',
    },
    {
      q: 'How does a board keep an election fair?',
      a: 'Publish the candidate deadline, use a proxy form that does not favor incumbents, and allow candidates to observe the count. Most disputes come from those three steps.',
      post: 'illinois-condo-board-elections-proxies-ballots',
    },
    {
      q: 'Do North Park townhomes follow condo law?',
      a: 'Not always. Many townhome associations are governed by the Common Interest Community Association Act. Your recorded declaration shows which statute applies.',
      post: 'which-illinois-law-governs-condo-hoa-townhome',
    },
    {
      q: 'What should a long-serving North Park board write down?',
      a: 'The yearly calendar, the vendor list with contract dates, where the records are kept, and who has access to the bank accounts. A new director should be able to take over from the page.',
      post: 'self-managed-condo-association-problems',
    },
    {
      q: 'How often should a small North Park board rebid its hauler or snow contract?',
      a: 'Every two to three years is a reasonable rhythm, because prices drift and contracts auto-renew. A written scope that two vendors can price the same way makes the comparison honest.',
      post: 'condo-hoa-vendor-rfp-checklist',
    },
  ],
  hasHighRises: false,
  sources: [
    { label: 'North Park community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/North-Park.pdf' },
    { label: 'City of Chicago garbage collection eligibility', href: 'https://www.chicago.gov/city/en/depts/streets/provdrs/streets_san/svcs/grid-garbage-collection.html' },
    { label: 'City of Chicago House Share Prohibited Buildings List', href: 'https://data.cityofchicago.org/Buildings/House-Share-Prohibited-Buildings-List-Map/k75w-468b/about' },
    { label: 'Cook County property tax system and reassessment schedule', href: 'https://www.cookcountyassessoril.gov/cook-county-property-tax-system' },
  ],
};
