import type { AreaContent } from './types';

export const palatine: AreaContent = {
  slug: 'palatine',
  targetQuery: 'condo management palatine il',
  title: 'Condo Management in Palatine, IL | Stellar',
  metaDescription:
    'Condo and HOA management for Palatine boards: a third of homes are condos, with village rental licensing and creek flood planning. From $30 per unit.',
  // TODO(Mirsad): how many associations and about how many units does Stellar
  // manage in or near Palatine? Until then the page says "we serve boards here".
  managed: null,
  context:
    'Palatine is a condo town: more than a third of its housing is condominiums, according to DePaul’s housing data. Most of the housing was built in the 1970s and 1980s, and about a third of households rent.',
  housing: {
    intro:
      'The figures below come from the Census Bureau’s 2020 to 2024 American Community Survey as summarized by the Chicago Metropolitan Agency for Planning, and from DePaul’s Institute for Housing Studies.',
    stats: [
      { label: 'Median year a Palatine home was built', value: '1977' },
      { label: 'Homes built between 1970 and 1989', value: '12,946 (45.5%)' },
      { label: 'Share of housing that is condominium, 2025', value: '34.5%' },
      { label: 'Condominium sales in 2005 and in 2025', value: '1,394 and 555' },
      { label: 'Homes in buildings of 5 to 9 units', value: '4,613 (16.2%)' },
      { label: 'Homes in buildings of 20 or more units', value: '3,675 (12.9%)' },
      { label: 'Attached single-family homes (townhomes)', value: '4,409 (15.5%)' },
      { label: 'Renter-occupied households', value: '32.6%' },
    ],
    takeaway:
      'Palatine’s condo stock is unusual in its shape: far more small and mid-sized buildings than towers. Small buildings usually mean small, volunteer-run boards, which is where records, collections and vendor oversight tend to slip first.',
  },
  buildingTypes: [
    {
      name: 'Five-to-nine-unit garden buildings',
      detail:
        'One home in six sits in a building of this size, a higher share than on any of our other northwest suburb pages. Boards are small, budgets are tight and the same two or three people handle everything from the snow contract to the insurance renewal.',
    },
    {
      name: 'Townhome communities',
      detail:
        'About 4,400 attached single-family homes share roofs, drives and common land. They sit between the condo and HOA models, so the declaration and the Illinois statute that applies are worth confirming first.',
    },
    {
      name: 'Larger condominium buildings',
      detail:
        'Roughly 3,700 homes are in buildings of twenty or more units, with elevators, boilers and parking structures that behave like the larger buildings in neighboring suburbs.',
    },
  ],
  issues: [
    {
      title: 'Small boards and heavy workloads',
      body:
        'When a five-unit building has three owners on the board, a single sale or a single delinquency eats a quarter of the year. Set a standing calendar for the annual meeting, budget adoption and insurance renewal.',
      post: 'illinois-association-annual-meeting-guide',
      linkText: 'running the annual meeting',
    },
    {
      title: 'Collecting from owners who rent',
      body:
        'With a third of households renting, many assessments are paid by absentee owners. A written, consistently applied collection policy and prompt notices keep a small arrears problem from becoming a large one.',
      post: 'condo-hoa-delinquency-escalation-process',
      linkText: 'a delinquency escalation process for associations',
    },
    {
      title: 'Resale disclosures in a high-turnover market',
      body:
        'DePaul counts 555 condo sales in Palatine in 2025. Every one needs a Section 22.1 disclosure package, and a slow or incomplete response delays a closing and invites calls to board members.',
      post: 'illinois-22-1-disclosure-packet-checklist',
      linkText: 'a Section 22.1 disclosure packet checklist',
    },
    {
      title: 'Records requests from owners and buyers',
      body:
        'Owners in older buildings ask for budgets, minutes and contracts. A board that keeps records organized can answer inside the statutory time frame without a lawyer’s help.',
      post: 'illinois-condo-association-records-request-guide',
      linkText: 'answering owner records requests',
    },
    {
      title: 'Which Illinois statute governs the community',
      body:
        'Townhome and attached communities can be condominiums or common interest community associations. The answer decides the owner meeting rules, the budget process and the board’s collection tools.',
      post: 'which-illinois-law-governs-condo-hoa-townhome',
      linkText: 'which Illinois law governs a condo, HOA or townhome',
    },
  ],
  localItems: [
    {
      title: 'Rental Dwelling License',
      body:
        'Palatine’s rental licensing program covers every residential rental, including condominiums, townhomes and apartment buildings. An owner applies through the village’s self-service portal, pays an invoice, passes an inspection and completes a landlord seminar, then the license renews automatically each year unless the owner closes it. The village’s 2024 fee schedule lists $90 for a condo with up to three violations and $167 for four or more.',
    },
    {
      title: 'Rental Housing Tenant Protection Program',
      body:
        'The landlord seminar is a police-taught session of about four hours at the Palatine Police Department, with online refreshers for those who took the full course within the last three years. The village changed the ordinance’s wording in January 2025.',
    },
    {
      title: 'Salt Creek and Buffalo Creek floodplains',
      body:
        'The village publishes local flood-area maps for Salt Creek and Buffalo Creek and their tributaries, and Village Engineering will answer flood-hazard questions. Its assistance programs include storm-sewer extensions, reimbursement for private storm sewers and rain gardens, and low-interest sump-pump loans.',
    },
    {
      title: 'Cook County reassessment',
      body:
        'Palatine is in Cook County’s north and northwest suburban reassessment group, last reassessed in 2025 and next in 2028.',
    },
  ],
  feeRanges: null,
  photos: [],
  faqs: [
    {
      q: 'Does Palatine require a rental license for a condo?',
      a: 'Yes. The village requires every residential rental, including condominiums and townhomes, to hold an annual Rental Dwelling License and pass an inspection. The owner applies, not the association.',
      post: 'renting-out-your-condo-chicago-rules',
    },
    {
      q: 'What does the landlord seminar cover?',
      a: 'The Rental Housing Tenant Protection Program covers crime prevention through environmental design, the application process, community rules and leases, and managing non-compliance. It is taught by police personnel.',
      post: 'adopting-enforcing-condo-hoa-rules-illinois',
    },
    {
      q: 'Why does Palatine have so many small condo buildings?',
      a: 'About one home in six sits in a five-to-nine-unit building, according to Census data. Most of the village’s housing dates from the 1970s and 1980s.',
      post: 'self-managed-condo-association-problems',
    },
    {
      q: 'Are parts of Palatine in a floodplain?',
      a: 'Parts of the village sit in the regulatory floodplain of Salt Creek and Buffalo Creek. The village publishes maps, and FEMA’s Flood Map Service Center lets you check a specific address.',
      post: 'condo-hoa-insurance-renewal-checklist',
    },
    {
      q: 'Can an association with five units hire a manager?',
      a: 'Yes. Building size does not stop a board from asking for a proposal. The written proposal reflects the building we review, and the pricing page explains how the fee is set.',
      post: 'score-condo-hoa-management-proposals',
    },
  ],
  hasHighRises: false,
  sources: [
    { label: 'Palatine community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Palatine.pdf' },
    { label: 'Palatine housing data (DePaul Institute for Housing Studies)', href: 'https://www.housingstudies.org/data-portal/geography/palatine/' },
    { label: 'Palatine rental license process', href: 'https://www.palatine.il.us/370/Obtain-a-Rental-License' },
    { label: 'Palatine Rental Housing Tenant Protection Program', href: 'https://www.palatine.il.us/cfmh' },
    { label: 'Palatine local flood area maps', href: 'https://www.palatine.il.us/539/Local-Flood-Area-Maps' },
    { label: 'Cook County Assessor’s Office', href: 'https://www.cookcountyassessoril.gov/' },
  ],
};
