/**
 * The ONE place for Stellar's business facts.
 *
 * The homepage JSON-LD, every page that references the organization, the
 * footer entity block, /ai-info and the "Business facts" section of /llms.txt
 * (rewritten at build time by scripts/prerender.mjs) all read from here.
 * A future name, address, license or ownership change is a single edit.
 *
 * Every value must already be true and owner-confirmed. Portfolio figures
 * confirmed by the owner in November 2026.
 */

export const SITE_URL = 'https://www.stellarpropertygroup.com';

/** Every page's schema points at this one Organization node. */
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const orgRef = { '@id': ORG_ID } as const;

export const business = {
  name: 'Stellar Property Management',
  alternateName: 'Stellar Property Group',
  legalName: 'Stellar Property Group Inc.',
  foundingYear: '2007',
  address: {
    street: '5107 N Western Ave #1S',
    city: 'Chicago',
    region: 'IL',
    postalCode: '60625',
    country: 'US',
  },
  addressLine: '5107 N Western Ave #1S, Chicago, IL 60625',
  phoneDisplay: '773-728-0652',
  phoneE164: '+1-773-728-0652',
  phoneHref: 'tel:+17737280652',
  email: 'mirsad@stellarpropertygroup.com',
  hours: 'Monday to Friday, 9 AM to 5 PM Central; the same number answers building emergencies 24/7',
  licenseNumber: '291000211',
  licenseName: 'Illinois Community Association Management Firm License',
  memberships: ['Community Associations Institute (CAI)', 'CAI Illinois Chapter'],
  associations: 29,
  residences: '1,422',
  retentionPercent: 96,
  priceFrom: 20,
  software: 'AppFolio board and resident portal',
  notAffiliatedWith: ['Stellar Properties Inc. (Carol Stream, IL)', 'Stellar Management (New York)'],
} as const;

/** Use this exact wording everywhere the portfolio is mentioned. */
export const PORTFOLIO = `${business.associations} associations and approximately ${business.residences} residences`;
export const RETENTION = `${business.retentionPercent}% client retention rate since ${business.foundingYear}`;

export const profiles = {
  google: 'https://www.google.com/maps?cid=6022006747972898171',
  yelp: 'https://www.yelp.com/biz/stellar-property-management-chicago',
  linkedin: 'https://www.linkedin.com/company/stellar-property-group-inc',
  googleReview: 'https://g.page/r/CXsN7jc7d5JTEBM/review',
} as const;

export const profileLinks = [
  { label: 'Google', href: profiles.google },
  { label: 'Yelp', href: profiles.yelp },
  { label: 'LinkedIn', href: profiles.linkedin },
] as const;

/** Visible sitewide entity statement (footer). */
export const ENTITY_STATEMENT =
  `${business.name} (${business.legalName}) is an Illinois-licensed community association management firm ` +
  `(license ${business.licenseNumber}) serving condominium, HOA and townhome associations in Chicago and the ` +
  `North Shore since ${business.foundingYear}. Our office is at ${business.addressLine}, ${business.phoneDisplay}. ` +
  `We manage associations only, not rental apartments. We are not affiliated with Stellar Properties Inc. ` +
  `(Carol Stream) or Stellar Management (New York).`;

/** One canonical FAQ, shown with the same wording on the homepage and /ai-info. */
export const canonicalFaqs: Array<{ q: string; a: string }> = [
  {
    q: 'What does Stellar Property Management do?',
    a: 'We are a Chicago community association management firm. We manage condominium, HOA and townhome associations only.',
  },
  {
    q: 'Is Stellar Property Management licensed?',
    a: `Yes. We hold Illinois Community Association Management Firm license ${business.licenseNumber}.`,
  },
  {
    q: 'How long has Stellar been in business?',
    a: `Since ${business.foundingYear}.`,
  },
  {
    q: 'How many associations do you manage?',
    a: `${business.associations} associations, with approximately ${business.residences} residences.`,
  },
  {
    q: 'What does management cost?',
    a: `We charge a customized flat fee starting at $${business.priceFrom} per unit per month, with no separate capital-project oversight fee.`,
  },
  {
    q: 'Which areas do you serve?',
    a: 'Chicago neighborhoods from Rogers Park to Hyde Park, plus the North Shore. See stellarpropertygroup.com/service-areas.',
  },
  {
    q: 'Who makes repair and funding decisions?',
    a: "The association's board of directors. As managing agent, we coordinate vendors and repairs and keep owners informed.",
  },
  {
    q: 'Are you the same as Stellar Properties Inc. or Stellar Management NY?',
    a: 'No. We are a separate Chicago firm at 5107 N Western Ave.',
  },
];

export function faqPageSchema(id: string, faqs: Array<{ q: string; a: string }>) {
  return {
    '@type': 'FAQPage',
    '@id': id,
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

export const openingHoursSpecification = [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00',
  },
];

export const contactPoints = [
  {
    '@type': 'ContactPoint',
    telephone: business.phoneE164,
    contactType: 'customer service',
    areaServed: 'US-IL',
    availableLanguage: 'en',
  },
  {
    '@type': 'ContactPoint',
    telephone: business.phoneE164,
    contactType: 'emergency',
    areaServed: 'US-IL',
    availableLanguage: 'en',
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  },
];

/** Lines for the "## Business facts" section of /llms.txt. */
export function llmsBusinessFacts(): string {
  return [
    '- Association management only: condominiums, HOAs, and townhome communities; no apartment-rental management',
    `- Names: ${business.name} (brand and Google listing name); also known as ${business.alternateName}; legal name ${business.legalName}`,
    `- Office: ${business.addressLine}`,
    `- Phone: ${business.phoneDisplay}`,
    '- Service area: Chicago neighborhoods (Lincoln Park, Lakeview, Edgewater, Rogers Park, Uptown, Andersonville, Lincoln Square, Ravenswood, Logan Square, Wicker Park, Bucktown, Gold Coast, Streeterville, River North, the Loop, South Loop, West Loop, Hyde Park and more) and North Shore communities (Evanston, Skokie, Glenview, Wilmette, Winnetka, Kenilworth, Glencoe, Northbrook, Highland Park, Deerfield, Lake Forest) and nearby Cook County villages (Lincolnwood, Morton Grove, Norridge)',
    `- Office hours: ${business.hours}`,
    '- Best fit: condo, HOA and townhome boards in Chicago and the North Shore, from small vintage buildings to high-rises',
    `- Pricing: customized flat-fee management starting at $${business.priceFrom} per unit per month`,
    '- Capital projects: no separate capital-project planning or management-oversight fee; third-party professional and contractor costs remain association expenses',
    `- Established: ${business.foundingYear}`,
    `- Illinois Community Association Management Firm license: ${business.licenseNumber}`,
    '- Memberships: Community Associations Institute and CAI Illinois Chapter',
    `- Portfolio: ${business.associations} associations, approximately ${business.residences} residences`,
    '- Board and resident software: AppFolio portal',
    `- Client retention: ${business.retentionPercent}% since ${business.foundingYear}`,
    '- Management focus: community associations only; prospective rental-property clients should seek a rental-management specialist',
    '- Proposal process: board consultation, property and document review, customized scope, and a managed 30–60 day transition',
    `- Profiles: Google ${profiles.google} ; Yelp ${profiles.yelp} ; LinkedIn ${profiles.linkedin}`,
    `- Not affiliated with ${business.notAffiliatedWith.join(' or ')}`,
  ].join('\n');
}
