/**
 * The brand, in one file. Name, logo, phone, email, address, founding year,
 * contract terms, portfolio numbers, pricing wording, review link and sign-off
 * all come from here; colors and fonts come from src/styles/tokens.css.
 * A future rename or rebrand is an edit to these two files.
 *
 * Every value is owner-confirmed. Do not add a fact here that is not.
 */
export const brand = {
  name: 'Stellar Property Management',
  alternateName: 'Stellar Property Group',
  legalName: 'Stellar Property Group Inc.',
  shortName: 'Stellar',
  tagline: 'Condo · HOA · Townhome Management',
  siteUrl: 'https://www.stellarpropertygroup.com',
  logo: { src: '/logo-icon.svg', alt: 'Stellar Property Management logo' },
  favicon: '/logo-icon.svg',
  ogImage: '/images/stellar-property-management-og.jpg',
  phone: { display: '773-728-0652', dotted: '773.728.0652', e164: '+17737280652', digits: '7737280652' },
  email: 'mirsad@stellarpropertygroup.com',
  address: { street: '5107 N Western Ave', unit: '#1S', city: 'Chicago', state: 'IL', zip: '60625', country: 'US' },
  hours: 'Monday to Friday, 9 AM to 5 PM Central; the same number answers building emergencies 24/7',
  foundedYear: 2007,
  contracts: { cancellationDays: 60, line: 'No long-term contracts — cancel with 60 days notice' },
  /**
   * Portfolio. `associations` and `residences` are the exact counts (owner,
   * 2026-11-26, after 737 Ridge signed). The site shows only the rounded
   * `...Display` values, so a new building does not mean a site edit. Change
   * the display values at a big step only (35 associations, 1,600 residences).
   */
  stats: { associations: 30, residences: 1495, associationsDisplay: '30+', residencesDisplay: '1,500', retentionPercent: 96 },
  pricing: {
    startingPerUnit: 30,
    /** Smallest association we manage (owner, 2026-11-26). The fee estimator starts here. */
    minUnits: 8,
    terms: 'everything included, with no extra fees',
    line: 'starting at $30 per unit per month, everything included, with no extra fees',
  },
  reviewUrl: 'https://g.page/r/CXsN7jc7d5JTEBM/review',
  portalUrl: 'https://stellarpropertygrp.appfolio.com/connect/',
  signOff: 'Your Property Management Team',
} as const;

export type Brand = typeof brand;
