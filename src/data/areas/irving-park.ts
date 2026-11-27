import type { AreaContent } from './types';

export const irvingPark: AreaContent = {
  slug: 'irving-park',
  targetQuery: 'condo management irving park chicago',
  title: 'Condo Management in Irving Park, Chicago | From $30/Unit',
  metaDescription:
    'Condo and HOA management for Irving Park boards: vintage two-flats, courtyard walk-ups and the Villa landmark district. Flat fee from $30 per unit a month.',
  // TODO(Mirsad): how many associations and about how many units does Stellar
  // manage in or near Irving Park? Until then the page says "we serve boards here".
  managed: null,
  context:
    'Irving Park is a northwest-side neighborhood of bungalows, two-flats and courtyard buildings, with a mix of owner-occupants and landlords. Condominium buildings here are mostly small and mostly old.',
  housing: {
    intro:
      'Irving Park is Community Area 16. The figures below are from the Census Bureau’s American Community Survey, summarized by the Chicago Metropolitan Agency for Planning, and they describe the whole community area.',
    stats: [
      { label: 'Median year a home was built', value: '1933' },
      { label: 'Share of homes built before 1940', value: '58.0%' },
      { label: 'Homes in single-family detached houses', value: '29.0%' },
      { label: 'Homes in two-unit buildings', value: '19.9%' },
      { label: 'Homes in buildings of three or four units', value: '16.4%' },
      { label: 'Homes in buildings of five to nine units', value: '14.9%' },
      { label: 'Owner-occupied households', value: '51.3%' },
      { label: 'Renter-occupied households', value: '48.7%' },
    ],
    takeaway:
      'Owners and renters are almost evenly split, so a typical board has to balance residents who live in the building with owners who do not. Rules about leasing, assessments and common-area use show up in every meeting.',
  },
  buildingTypes: [
    {
      name: 'Brick two-flats and three-flats',
      detail:
        'Neighbor-run associations, often with shared roofs and a rear porch. The declaration, where there is one, tends to be brief.',
    },
    {
      name: 'Courtyard walk-ups',
      detail:
        'Mid-sized buildings around a shared court. About 15 percent of the area’s homes are in buildings of five to nine units.',
    },
    {
      name: 'Bungalow-era conversions',
      detail:
        'Single-family houses converted to two or three units, where shared utilities and meters need a written allocation.',
    },
  ],
  issues: [
    {
      title: 'Collecting from absentee owners',
      body:
        'With nearly half of households renting, an owner may live across town. A collection policy adopted in advance gives the board a sequence of steps and a paper trail.',
      post: 'illinois-condo-hoa-collection-policy-january-2027',
      linkText: 'a collection policy for Illinois associations',
    },
    {
      title: 'Possession actions when a unit goes unpaid',
      body:
        'When an owner stops paying, Illinois law gives the association a path to recover assessments and, in some cases, possession. Knowing the steps before the first notice is sent avoids mistakes that can restart the clock.',
      post: 'illinois-condo-assessment-collection-possession-action',
      linkText: 'Illinois assessment collection and possession actions',
    },
    {
      title: 'Keeping elections valid in a small building',
      body:
        'A board of three can still be challenged over a missed notice. The election guide covers proxies, ballots and quorum in plain terms.',
      post: 'illinois-condo-board-elections-proxies-ballots',
      linkText: 'Illinois condo board elections, proxies and ballots',
    },
    {
      title: 'Planning for roofs and masonry over several years',
      body:
        'Parapets, lintels and flat roofs on a building from the 1930s can be staged over several years. A multi-year capital plan spreads the cost and gives lenders something to read.',
      post: 'vintage-chicago-condo-capital-planning',
      linkText: 'capital planning for vintage Chicago condominiums',
    },
    {
      title: 'Checking licenses before signing',
      body:
        'A board member can still hold a contractor to a scope. The guide explains how to verify that a manager or vendor holds the license Illinois requires.',
      post: 'verify-illinois-community-association-manager-license',
      linkText: 'verifying an Illinois community association manager license',
    },
  ],
  localItems: [
    {
      title: 'Villa Landmark District',
      body:
        'The Villa district was designated on November 23, 1983, and lies in Irving Park. Permit applications for exterior work on properties inside it are reviewed by the City’s historic preservation staff before they can be issued.',
    },
    {
      title: 'Hauling in buildings of five units or more',
      body:
        'The City collects garbage only from buildings of four units or fewer. Courtyards and larger buildings arrange private service, which becomes a line in the association’s budget.',
    },
    {
      title: 'Reassessment',
      body:
        'Chicago’s last reassessment year was 2024, with the next scheduled for 2027.',
    },
  ],
  feeRanges: null,
  photos: [],
  faqs: [
    {
      q: 'What is the Villa district and does it affect repairs?',
      a: 'It is a Chicago Landmark district designated in 1983. For a building inside it, a permit for exterior work goes through historic preservation review, so plan extra lead time for facade, window or roof projects.',
      post: 'condo-hoa-vendor-rfp-checklist',
    },
    {
      q: 'Is a courtyard building in Irving Park covered by the Illinois Condominium Property Act?',
      a: 'If the owners recorded a condominium declaration, yes. If they hold as a cooperative or under a different structure, other rules may apply.',
      post: 'which-illinois-law-governs-condo-hoa-townhome',
    },
    {
      q: 'How do I find the last reassessment for my building?',
      a: 'The Cook County Assessor’s website shows each property’s assessment history. Chicago’s last reassessment was in 2024.',
      post: 'cook-county-property-tax-appeal-condo-association',
    },
    {
      q: 'What should the board hand to a buyer’s attorney?',
      a: 'Illinois requires a disclosure package, including the budget, the reserve status and any pending special assessments. The guide lists each item.',
      post: 'illinois-section-22-1-disclosure-board-guide',
    },
    {
      q: 'Does the proposal assume a minimum building size?',
      a: 'No. We review the building, then quote what it needs. The pricing page lists what is included.',
      post: 'switch-condo-management-companies-chicago',
    },
  ],
  hasHighRises: false,
  sources: [
    { label: 'Irving Park community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Irving-Park.pdf' },
    { label: 'Chicago Landmarks, official list of landmark districts', href: 'https://webapps1.chicago.gov/landmarksweb/web/listings.htm' },
    { label: 'City of Chicago garbage collection eligibility', href: 'https://www.chicago.gov/city/en/depts/streets/provdrs/streets_san/svcs/grid-garbage-collection.html' },
    { label: 'Cook County property tax system and reassessment schedule', href: 'https://www.cookcountyassessoril.gov/cook-county-property-tax-system' },
  ],
};
