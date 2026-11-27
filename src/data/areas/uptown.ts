import type { AreaContent } from './types';

export const uptown: AreaContent = {
  slug: 'uptown',
  targetQuery: 'condo management uptown chicago',
  title: 'Condo Management in Uptown, Chicago | From $30/Unit',
  metaDescription:
    'Condo and HOA management for Uptown boards: historic buildings and new development, facade planning, reserves and turnover. From $30 per unit per month.',
  // Per-area managed counts are company-private (owner decision, Nov 27, 2026), so this stays null and nothing is shown.
  managed: null,
  context:
    'Uptown pairs historic architecture around its entertainment venues with a steady run of new development. Boards here often manage renovation work and day-to-day operations at the same time.',
  housing: {
    intro:
      'Uptown is Community Area 3, on the lakefront. The figures below are Census Bureau American Community Survey estimates for 2020 to 2024, compiled by the Chicago Metropolitan Agency for Planning.',
    stats: [
      { label: 'Midpoint year of home construction', value: '1948' },
      { label: 'Homes older than 1940', value: '16,259 (44.9%)' },
      { label: 'Homes dating from 1940 to 1969', value: '8,273 (22.9%)' },
      { label: 'Homes dating from 2010 or later', value: '2,187 (6.0%)' },
      { label: 'Five-to-nine-unit buildings (homes)', value: '6,785 (18.7%)' },
      { label: 'Twenty-plus-unit buildings (homes)', value: '21,175 (58.5%)' },
      { label: 'Owner-occupied homes', value: '9,632 (29.3%)' },
      { label: 'Renter-occupied homes', value: '23,263 (70.7%)' },
    ],
    takeaway:
      'In Uptown, 58.5 percent of homes are in buildings of twenty or more units, another 27 percent are in buildings of five to nineteen units, and 44.9 percent of homes predate 1940. Boards here govern older buildings with big systems, and 70.7 percent of households rent.',
  },
  buildingTypes: [
    {
      name: 'Historic buildings near the entertainment district',
      detail:
        'Older structures with character and with systems that have a finite life. Their boards plan exterior and mechanical work years ahead.',
    },
    {
      name: 'New-development condominiums',
      detail:
        'Recently built associations, some only now passing from the developer to an owner-elected board. Records and warranties matter most in the first years.',
    },
    {
      name: 'Associations in the middle of renovation',
      detail:
        'Buildings where a capital project and ordinary operations run side by side, so cash planning and owner notices carry extra weight.',
    },
  ],
  issues: [
    // Each issue rests on the linked guide. Owner has not confirmed them from experience; wording stays general.
    {
      title: 'Facade work as a scheduled program',
      body:
        'Facade duties come from the Chicago Municipal Code, and what applies depends on a building’s height and construction. An Uptown board should confirm its own obligations in writing, then treat exterior work as a multi-year program with engineering, permits, contractor selection and financing on a timetable.',
      post: 'chicago-condo-facade-compliance-board-guide',
      linkText: 'the Chicago facade compliance guide for condo boards',
    },
    {
      title: 'Getting ready to borrow for a project',
      body:
        'A lender looks at two things: how dependable assessment income is and how well the association is governed. Neither can be repaired the week before an application. Confirm first that the recorded documents give the association power to borrow and to pledge assessments.',
      post: 'condo-hoa-capital-project-loan-preparation',
      linkText: 'how to prepare an association for a capital project loan',
    },
    {
      title: 'Reserves the board can defend',
      body:
        'Illinois gives no reserve percentage. It asks for a reasoned judgment, so the written record of how the board reached its number matters as much as the number. A modest reserve with a documented funding plan is a stronger position than a larger one nobody can explain.',
      post: 'reasonable-reserves-illinois-condo-law',
      linkText: 'what reasonable reserves mean under Illinois condo law',
    },
    {
      title: 'Developer turnover in newer buildings',
      body:
        'Turnover is when a new association has the most leverage to obtain complete records. Arrive with a written collection list covering governance, financial, construction and warranty documents, and have independent counsel and an engineer or accountant review what is handed over.',
      post: 'illinois-condo-developer-turnover-checklist',
      linkText: 'the Illinois developer turnover checklist',
    },
    {
      title: 'A calendar that owns every deadline',
      body:
        'Compliance trouble is seldom one large mistake. It is small recurring dates that nobody was assigned. Put inspections, registrations, insurance, the annual meeting and budget adoption on one shared schedule with a named person beside each entry.',
      post: 'chicago-condo-association-compliance-calendar',
      linkText: 'how to build a Chicago condo compliance calendar',
    },
  ],
  localItems: [
    {
      title: 'Hutchinson Street landmark district',
      body:
        'Chicago designated the Hutchinson Street district, on the 600 to 900 blocks of West Hutchinson Street, on August 31, 1977. Exterior work on a building within the district is reviewed by the City’s historic preservation staff before a permit is issued.',
    },
    {
      title: 'Exterior wall inspections',
      body:
        'Buildings 80 feet or taller fall under Chicago’s facade ordinance, with critical examinations every 4, 8 or 12 years depending on category.',
    },
    {
      title: 'Closing a building to short-term rentals',
      body:
        'The City’s Prohibited Buildings List excludes listed buildings from short-term-rental activity. The City describes an affidavit process on its site.',
    },
    {
      title: 'Reassessment',
      body:
        'Chicago was reassessed in 2024 and is reassessed again in 2027.',
    },
  ],
  // TODO(Jojo): typical monthly fee range from real recent proposals. Never estimate; never below the $30 starting fee.
  feeRanges: null,
  // TODO(Jojo): real photos only (public view): a historic building near Broadway; a new-construction building.
  photos: [],
  faqs: [
    {
      q: 'Which facade rules apply to our Uptown building?',
      a: 'It depends on the building. Facade obligations are set by the Chicago Municipal Code and vary with height, construction and other characteristics, so the board should confirm its specific duties before planning the work.',
      post: 'chicago-condo-facade-compliance-board-guide',
    },
    {
      q: 'What should our board collect when the developer turns the building over?',
      a: 'The complete governance, financial, construction and warranty record for the property. Bring a written list and have independent professionals review what you receive, because missing documents are costly to rebuild later.',
      post: 'illinois-condo-developer-turnover-checklist',
    },
    {
      q: 'Does Illinois require a set reserve percentage?',
      a: 'No. Illinois law sets no fixed percentage. The Condominium Property Act asks boards to budget reasonable reserves in light of the association’s circumstances and to be able to show how they decided.',
      post: 'reasonable-reserves-illinois-condo-law',
    },
    {
      q: 'Is any part of Uptown a landmark district?',
      a: 'Yes. The Hutchinson Street district, designated in 1977, is a Chicago Landmark district. A building inside it needs City review of exterior work, and the City’s landmark listing shows the boundaries.',
      post: 'vintage-chicago-condo-capital-planning',
    },
    {
      q: 'Can an Uptown condominium keep out short-term rentals?',
      a: 'The declaration and rules decide what owners can do, and the City lets a building ask to be excluded from short-term-rental activity through its Prohibited Buildings List.',
      post: 'chicago-condo-short-term-rental-prohibited-buildings-list',
    },
  ],
  hasHighRises: true,
  sources: [
    { label: 'Uptown community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Uptown.pdf' },
    { label: 'Chicago Landmarks, official list of landmark districts', href: 'https://webapps1.chicago.gov/landmarksweb/web/listings.htm' },
    { label: 'Chicago exterior wall inspection program', href: 'https://www.chicago.gov/city/en/depts/bldgs/provdrs/inspect/svcs/exterior_wall_program.html' },
    { label: 'City of Chicago House Share Prohibited Buildings List', href: 'https://data.cityofchicago.org/Buildings/House-Share-Prohibited-Buildings-List-Map/k75w-468b/about' },
    { label: 'Cook County property tax system and reassessment schedule', href: 'https://www.cookcountyassessoril.gov/cook-county-property-tax-system' },
  ],
};
