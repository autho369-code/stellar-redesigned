import type { AreaContent } from './types';

export const mayfair: AreaContent = {
  slug: 'mayfair',
  targetQuery: 'condo management mayfair chicago',
  title: 'Condo Management in Mayfair, Chicago | From $30/Unit',
  metaDescription:
    'Condo and HOA management for Mayfair boards: brick two-flats, courtyard walk-ups and small apartment-style buildings. Flat fee from $30 per unit a month.',
  // Per-area managed counts are company-private (owner decision, Nov 27, 2026), so this stays null and nothing is shown.
  managed: null,
  context:
    'Mayfair is a quiet residential neighborhood on the northwest side of Chicago. Brick two-flats, courtyard walk-ups and small apartment-style buildings fill most of its blocks.',
  housing: {
    intro:
      'Mayfair is part of Albany Park, Community Area 14. The Census-based data below, summarized by the Chicago Metropolitan Agency for Planning, describe Albany Park as a whole, so they reflect Mayfair’s mix without being a count of it alone.',
    stats: [
      { label: 'Median year a home was built', value: '1931' },
      { label: 'Homes built before 1940', value: '60.8%' },
      { label: 'Homes in buildings of two units', value: '17.3%' },
      { label: 'Homes in buildings of three or four units', value: '19.0%' },
      { label: 'Homes in buildings of five to nine units', value: '20.2%' },
      { label: 'Homes in buildings of ten to nineteen units', value: '8.6%' },
      { label: 'Homes in buildings of twenty or more units', value: '12.2%' },
      { label: 'Renter-occupied households', value: '56.3%' },
    ],
    takeaway:
      'No single building size dominates. Roughly one home in five is in a building of five to nine units and another one in five is in a building of three or four, so the area’s associations range from tiny to substantial, and most are old.',
  },
  buildingTypes: [
    {
      name: 'Courtyard buildings of six to twelve units',
      detail:
        'Brick buildings around a central court. A shared boiler, roof and stairwells make their boards responsible for the full range of building systems.',
    },
    {
      name: 'Converted two-flats and three-flats',
      detail:
        'Small buildings where the declaration is brief and a single repair can be a large share of the budget.',
    },
    {
      name: 'Mid-sized apartment-style buildings',
      detail:
        'Buildings of ten to nineteen units, about 9 percent of the area’s homes, with an elevator or a large boiler plant to maintain.',
    },
  ],
  issues: [
    {
      title: 'Delinquencies in a renter-heavy neighborhood',
      body:
        'Where more than half of households rent, the owners who pay assessments often live elsewhere. Written steps for notice, late fees and lien filing help the board act consistently.',
      post: 'condo-hoa-delinquency-escalation-process',
      linkText: 'a delinquency escalation process for associations',
    },
    {
      title: 'Possession actions',
      body:
        'The possession remedy for unpaid assessments under Illinois law has its own notice and timing rules. A board that follows the statute avoids losing a case on procedure.',
      post: 'illinois-condo-assessment-collection-possession-action',
      linkText: 'Illinois assessment collection and possession actions',
    },
    {
      title: 'Open board meetings',
      body:
        'Even a three-person board must give notice of meetings and let owners attend most sessions. The guide explains when a closed session is allowed.',
      post: 'illinois-condo-open-board-meetings-notice-comment',
      linkText: 'open board meetings in Illinois condominiums',
    },
    {
      title: 'Directors and officers coverage',
      body:
        'Volunteer board members can face claims over ordinary decisions. The guide explains what D&O coverage does and what it excludes.',
      post: 'condo-hoa-directors-officers-insurance-guide',
      linkText: 'directors and officers insurance for condo boards',
    },
    {
      title: 'Boilers, roofs and stairs in a 1930s courtyard',
      body:
        'A staged capital plan sorts what is due now from what can wait, and gives owners and lenders a schedule to read.',
      post: 'vintage-chicago-condo-capital-planning',
      linkText: 'capital planning for vintage Chicago condominiums',
    },
  ],
  localItems: [
    {
      title: 'Garbage collection depends on building size',
      body:
        'Chicago’s city crews collect only from buildings with four units or fewer. Courtyard buildings of five units and above hire private haulers under Municipal Code 7-28-240, which carries fines of up to $500 a day.',
    },
    {
      title: 'Porch safety',
      body:
        'Porches in older Chicago buildings must support 100 pounds per square foot. Structural repairs need a permit and stamped plans, and inspections follow 311 complaints.',
    },
    {
      title: 'Reassessment',
      body:
        'Chicago’s townships were last reassessed in 2024. The next reassessment is 2027, with those bills due in 2028.',
    },
  ],
  feeRanges: null,
  photos: [],
  faqs: [
    {
      q: 'Is Mayfair part of Albany Park?',
      a: 'Yes. Mayfair is a neighborhood inside the City’s Albany Park community area, and Census data are published for the community area as a whole.',
      post: 'first-time-condo-buyer-guide-chicago',
    },
    {
      q: 'How should a board choose between two roofers?',
      a: 'Ask both for bids against the same written scope, including warranty terms and insurance certificates. The checklist covers what to compare.',
      post: 'condo-hoa-vendor-rfp-checklist',
    },
    {
      q: 'What is the difference between a late fee and interest?',
      a: 'A late fee is a one-time charge for paying after the due date, while interest accrues on the unpaid balance. The declaration or an adopted rule must authorize each.',
      post: 'illinois-association-late-fees-interest-policy',
    },
    {
      q: 'How do we run a board election with proxies?',
      a: 'Illinois law sets rules for notice, quorum and proxies, which the guide summarizes. Small buildings are held to the same standard as large ones.',
      post: 'illinois-condo-board-elections-proxies-ballots',
    },
    {
      q: 'Does the proposal depend on how many units we have?',
      a: 'The fee is set per unit, and the pricing page explains what is included. We look at the building first.',
      post: 'score-condo-hoa-management-proposals',
    },
  ],
  hasHighRises: false,
  sources: [
    { label: 'Albany Park community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Albany-Park.pdf' },
    { label: 'City of Chicago garbage collection eligibility', href: 'https://www.chicago.gov/city/en/depts/streets/provdrs/streets_san/svcs/grid-garbage-collection.html' },
    { label: 'Chicago porch safety and permits', href: 'https://www.chicago.gov/city/en/depts/bldgs/supp_info/porch-safety.html' },
    { label: 'Cook County property tax system and reassessment schedule', href: 'https://www.cookcountyassessoril.gov/cook-county-property-tax-system' },
  ],
};
