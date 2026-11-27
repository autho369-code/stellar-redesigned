import type { AreaContent } from './types';

export const loop: AreaContent = {
  slug: 'loop',
  targetQuery: 'condo management loop chicago',
  title: 'Condo Management in the Loop, Chicago | From $30/Unit',
  metaDescription:
    'Condo and HOA management for Loop boards: converted office towers, historic landmarks and new high-rises downtown. Flat fee from $30 per unit a month.',
  // Per-area managed counts are company-private (owner decision, Nov 27, 2026), so this stays null and nothing is shown.
  managed: null,
  context:
    'The Loop is Chicago’s downtown core, where residential towers share blocks with offices, hotels and theaters. Condominium buildings range from converted early-twentieth-century office towers to new high-rises.',
  housing: {
    intro:
      'The Loop is Community Area 32, and the Census-based figures below, compiled by the Chicago Metropolitan Agency for Planning, cover its roughly 25,000 occupied homes.',
    stats: [
      { label: 'Homes in buildings of twenty or more units', value: '26,899 (96.2%)' },
      { label: 'Median year a home was built', value: '2002' },
      { label: 'Homes built from 1990 through 2009', value: '34.1%' },
      { label: 'Homes built since 2010', value: '26.0%' },
      { label: 'Homes built before 1940', value: '16.2%' },
      { label: 'Homes built from 1970 through 1989', value: '16.7%' },
      { label: 'Owner-occupied households', value: '32.3%' },
      { label: 'Renter-occupied households', value: '67.7%' },
    ],
    takeaway:
      'Almost no one in the Loop lives in a house or a small building. 96 percent of homes are in buildings of twenty or more units. A median build year of 2002 hides a split between landmark conversions from before 1940 and glass towers from the last two decades, and each end of that range carries different risks.',
  },
  buildingTypes: [
    {
      name: 'Converted historic office and commercial towers',
      detail:
        'Early-twentieth-century buildings with masonry facades, now divided into condominiums. Facade work and any preservation review shape their capital plans.',
    },
    {
      name: 'Glass towers from the 1990s through the 2010s',
      detail:
        'Large associations with amenity floors, garages and curtain-wall systems whose glazing and sealants will need attention over time.',
    },
    {
      name: 'Mixed-use buildings',
      detail:
        'Residential floors above retail, hotel or parking space. Shared costs and access need to be allocated in a declaration that anticipates commercial use.',
    },
  ],
  issues: [
    {
      title: 'Facade compliance for downtown buildings',
      body:
        'Most Loop residential buildings are tall enough to be covered. The board needs the inspection calendar, a qualified engineer and a plan for funding repairs.',
      post: 'chicago-condo-facade-compliance-board-guide',
      linkText: 'facade compliance for Chicago condo boards',
    },
    {
      title: 'Large reserve studies',
      body:
        'A reserve study for a high-rise covers elevators, garage structures, fire-alarm systems and cladding. Reading one carefully tells the board whether its contribution is enough.',
      post: 'how-to-read-condo-reserve-study',
      linkText: 'how to read a condo reserve study',
    },
    {
      title: 'Special assessments',
      body:
        'A single facade or elevator project can exceed the reserve. The guide explains how boards authorize, bill and, where allowed, finance a special assessment.',
      post: 'condo-special-assessments-illinois',
      linkText: 'special assessments for Illinois condo associations',
    },
    {
      title: 'Where reserve cash is held',
      body:
        'Large reserve balances can exceed FDIC insurance at a single bank. The guide explains the options and what a manager should report.',
      post: 'illinois-association-reserve-funds-fdic-coverage',
      linkText: 'FDIC coverage for Illinois association reserve funds',
    },
    {
      title: 'Keeping the management company honest',
      body:
        'Funds should sit in segregated accounts in the association’s name. The guide explains what that means and how to verify it.',
      post: 'illinois-management-company-segregated-accounts-commingling',
      linkText: 'segregated accounts and commingling by Illinois managers',
    },
  ],
  localItems: [
    {
      title: 'Exterior wall inspections',
      body:
        'Chicago Municipal Code sections 13-196-032 through 037 require periodic inspection of the exterior walls of buildings 80 feet or taller. A building’s category sets the critical examination at 4, 8 or 12 years, with short-form reports filed in between. The City’s dates are November 1 for short forms and December 1 for critical examinations.',
    },
    {
      title: 'Energy benchmarking in large residential buildings',
      body:
        'Residential buildings of 50,000 square feet or more must report their energy and water use each year by June 1 through ENERGY STAR Portfolio Manager. Condominium buildings are identified by the first seven digits of their PIN, and a covered building must be at least 10 percent residential.',
    },
    {
      title: 'Private hauling is required',
      body:
        'The City does not collect garbage from buildings of five units or more. Loop associations contract a private hauler and carry the cost in their budgets.',
    },
    {
      title: 'Cook County reassessment',
      body:
        'Chicago’s last reassessment was 2024, and the next will be 2027.',
    },
  ],
  feeRanges: null,
  photos: [],
  faqs: [
    {
      q: 'How many Loop residents live in high-rises?',
      a: 'Census data show 96 percent of homes in the Loop are in buildings of twenty or more units, and about 1 percent are detached houses.',
      post: 'condominium-property-management-chicago-what-board-members-should-expect',
    },
    {
      q: 'Does a mixed-use building have to benchmark?',
      a: 'It does if the building is at least 50,000 square feet and 10 percent or more of it is residential. The City’s benchmarking page explains how condominium buildings are identified.',
      post: 'chicago-condo-association-compliance-calendar',
    },
    {
      q: 'Can a board prohibit short-term rentals downtown?',
      a: 'A condominium association can request that the City add its building to the Prohibited Buildings List, and its own declaration may also restrict leasing.',
      post: 'chicago-condo-short-term-rental-prohibited-buildings-list',
    },
    {
      q: 'What are directors and officers insurance claims usually about?',
      a: 'Common claims involve board decisions, rule enforcement and financial oversight. The guide explains what the policy covers and what it excludes.',
      post: 'condo-hoa-directors-officers-insurance-guide',
    },
    {
      q: 'How does a Loop board switch managers?',
      a: 'Review the management agreement’s notice and transition terms, then collect proposals against one scope. The guide walks through the steps.',
      post: 'switch-condo-management-companies-chicago',
    },
  ],
  hasHighRises: true,
  sources: [
    { label: 'The Loop community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/The-Loop.pdf' },
    { label: 'Chicago exterior wall inspection program', href: 'https://www.chicago.gov/city/en/depts/bldgs/provdrs/inspect/svcs/exterior_wall_program.html' },
    { label: 'Chicago Energy Benchmarking', href: 'https://www.chicago.gov/city/en/depts/env/supp_info/energy-benchmarking.html' },
    { label: 'City of Chicago garbage collection eligibility', href: 'https://www.chicago.gov/city/en/depts/streets/provdrs/streets_san/svcs/grid-garbage-collection.html' },
    { label: 'Cook County property tax system and reassessment schedule', href: 'https://www.cookcountyassessoril.gov/cook-county-property-tax-system' },
  ],
};
