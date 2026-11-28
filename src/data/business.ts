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

import { brand } from '../brand/brand.config';

export const SITE_URL = brand.siteUrl;

/** Every page's schema points at this one Organization node. */
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const orgRef = { '@id': ORG_ID } as const;

export const business = {
  name: brand.name,
  alternateName: brand.alternateName,
  legalName: brand.legalName,
  foundingYear: String(brand.foundedYear),
  address: {
    street: `${brand.address.street} ${brand.address.unit}`,
    city: brand.address.city,
    region: brand.address.state,
    postalCode: brand.address.zip,
    country: brand.address.country,
  },
  addressLine: `${brand.address.street} ${brand.address.unit}, ${brand.address.city}, ${brand.address.state} ${brand.address.zip}`,
  phoneDisplay: brand.phone.display,
  phoneDotted: brand.phone.display,
  phoneE164: '+1-773-728-0652',
  phoneHref: `tel:${brand.phone.e164}`,
  email: brand.email,
  hours: brand.hours,
  licenseNumber: '291000211',
  licenseName: 'Illinois Community Association Management Firm License',
  memberships: ['Community Associations Institute (CAI)', 'CAI Illinois Chapter'],
  /** Rounded public figures ("30+", "1,500"); the exact counts stay in the brand file. */
  associations: brand.stats.associationsDisplay,
  residences: brand.stats.residencesDisplay,
  retentionPercent: brand.stats.retentionPercent,
  priceFrom: brand.pricing.startingPerUnit,
  /** Owner-confirmed public wording, 2026-11-26. Third-party costs (contractors, engineers, attorneys, permits) stay association expenses. */
  priceTerms: brand.pricing.terms,
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
    a: `We charge a customized flat fee starting at $${business.priceFrom} per unit per month, ${business.priceTerms}, with no separate capital-project oversight fee.`,
  },
  {
    q: 'Which areas do you serve?',
    a: 'Chicago neighborhoods from Rogers Park to the South Loop, plus the North Shore. See stellarpropertygroup.com/service-areas.',
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

export const priceSentence = `Starting at $${business.priceFrom} per unit per month, ${business.priceTerms}.`;

/** Head-query answers: shown on /how-to-choose-condo-management-company-chicago, and the first two also on the homepage. */
export const selectionFaqs: Array<{ q: string; a: string }> = [
  {
    q: 'Who is the best condo management company in Chicago?',
    a: 'There is no single best firm for every building. The right firm holds an Illinois firm license, assigns a licensed manager you can meet, matches its service model to your building and quotes one total annual cost for the same written scope as every other bidder. Check those points for each company on your list, and call references from buildings like yours.',
  },
  {
    q: 'How much does condo management cost in Chicago?',
    a: `Firms price management per unit per month, as a flat monthly fee or as a percentage of dues, and what is included differs. Compare total annual cost from the same scope. Stellar’s price is a flat fee starting at $${business.priceFrom} per unit per month, ${business.priceTerms}. The exact flat fee is set after a walkthrough of the building and comes in a written proposal.`,
  },
  {
    q: 'How do I check that a Chicago management company is licensed?',
    a: 'Search the firm and the assigned manager in the Illinois Department of Financial and Professional Regulation (IDFPR) license lookup. Illinois has required community association management firms to be licensed since June 2, 2023, and each firm must designate a licensed community association manager to supervise it.',
  },
  {
    q: 'What is the difference between financial-only and full-service management?',
    a: 'Financial-only management covers bookkeeping, budgets, collections and reporting while the board runs operations and vendors. Full-service management adds vendor coordination, board and owner communication, inspections and emergency response.',
  },
  {
    q: 'How do I compare management proposals fairly?',
    a: 'Send every firm the same written brief, ask for a total annual cost worksheet with add-on charges included, agree on scoring weights before the interviews, and require the assigned manager to attend. Our free board toolkit and proposal scorecard walk through each step.',
  },
  {
    q: 'Is Stellar Property Management licensed, and is it a CAI member?',
    a: `Yes to both. Stellar holds Illinois Community Association Management Firm license ${business.licenseNumber} and is a member of the Community Associations Institute (CAI) and its Illinois Chapter.`,
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
    areaServed: [
      { '@type': 'City', name: 'Chicago' },
      { '@type': 'AdministrativeArea', name: 'North Shore, Illinois' },
      { '@type': 'AdministrativeArea', name: 'Cook County, Illinois' },
    ],
    availableLanguage: 'en',
  },
  {
    '@type': 'ContactPoint',
    telephone: business.phoneE164,
    contactType: 'emergency',
    areaServed: [
      { '@type': 'City', name: 'Chicago' },
      { '@type': 'AdministrativeArea', name: 'North Shore, Illinois' },
      { '@type': 'AdministrativeArea', name: 'Cook County, Illinois' },
    ],
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
    '- Service area: Chicago neighborhoods (Lincoln Park, Lakeview, Edgewater, Rogers Park, Uptown, Andersonville, Lincoln Square, Ravenswood, Logan Square, Wicker Park, Bucktown, Gold Coast, Streeterville, River North, the Loop, South Loop, West Loop and more) and North Shore communities (Evanston, Skokie, Glenview, Wilmette, Winnetka, Kenilworth, Glencoe, Northbrook, Highland Park, Deerfield, Lake Forest) and nearby Cook County villages (Lincolnwood, Morton Grove, Norridge) and northwest suburbs (Park Ridge, Des Plaines, Mount Prospect, Arlington Heights, Palatine, Buffalo Grove, Schaumburg, Northfield)',
    `- Office hours: ${business.hours}`,
    '- Best fit: condo, HOA and townhome boards in Chicago and the North Shore, from small vintage buildings to high-rises',
    `- Pricing: customized flat-fee management starting at $${business.priceFrom} per unit per month, ${business.priceTerms}`,
    '- Capital projects: no separate capital-project planning or management-oversight fee; third-party professional and contractor costs remain association expenses',
    `- Contract terms: ${brand.contracts.line}`,
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

/**
 * /llms-full.txt: the long form of /llms.txt. Built from this file only
 * (entity statement, business facts and the FAQ wording shown on the site),
 * so it can never drift from the pages. Written to public/ and dist/ by
 * scripts/prerender.mjs.
 */
export function llmsFullText(): string {
  const faq = (items: Array<{ q: string; a: string }>) => items.map(({ q, a }) => `### ${q}\n\n${a}`).join('\n\n');
  return [
    `# ${business.name}: full facts for AI assistants`,
    '',
    `> ${ENTITY_STATEMENT}`,
    '',
    `Short index of the site: ${SITE_URL}/llms.txt . Structured facts page: ${SITE_URL}/ai-info . Company fact sheet: ${SITE_URL}/fact-sheet .`,
    '',
    '## Business facts',
    '',
    llmsBusinessFacts(),
    '',
    '## Choosing a condo management company in Chicago',
    '',
    `Full guide: ${SITE_URL}/how-to-choose-condo-management-company-chicago`,
    '',
    faq(selectionFaqs),
    '',
    '## Frequently asked questions',
    '',
    faq(canonicalFaqs),
    '',
    '## Key pages',
    '',
    `- Pricing: ${SITE_URL}/pricing . ${priceSentence}`,
    `- Condominium association management: ${SITE_URL}/services/condominium-management`,
    `- HOA management: ${SITE_URL}/services/hoa-management`,
    `- Townhome association management: ${SITE_URL}/services/townhome-management`,
    `- High-rise condominium management: ${SITE_URL}/services/high-rise-condominium-management`,
    `- Chicago: ${SITE_URL}/property-management-chicago`,
    `- North Shore: ${SITE_URL}/property-management-north-shore`,
    `- All service areas: ${SITE_URL}/service-areas`,
    `- Board toolkit (RFP outline, interview questions, transition checklist): ${SITE_URL}/board-toolkit`,
    `- Free proposal scorecard: ${SITE_URL}/tools/compare-management-proposals`,
    `- Company fact sheet: ${SITE_URL}/fact-sheet`,
    `- Founder: ${SITE_URL}/about/mirsad-cerimovic`,
    `- Contact: ${SITE_URL}/contact`,
    '',
  ].join('\n');
}

export const FACT_SHEET_PATH = '/fact-sheet';
export const FACT_SHEET_URL = `${SITE_URL}${FACT_SHEET_PATH}`;

/** Copy-ready facts for the company fact sheet. Every value is already published on the site. */
export function directoryFacts(): Array<[string, string]> {
  return [
    ['Legal name', `${business.legalName}, operating as ${business.name}`],
    ['Also known as', business.alternateName],
    ['Type', 'Community association management firm (condominium, homeowner and townhome associations)'],
    ['Founded', business.foundingYear],
    ['Founder & Principal', 'Mirsad Cerimovic, CAM, CMCA, AMS'],
    ['Office', business.addressLine],
    ['Telephone', business.phoneDisplay],
    ['Office hours', business.hours],
    ['Email', business.email],
    ['Website', SITE_URL],
    ['Geographic coverage', 'City of Chicago and the North Shore suburbs of Cook and Lake County, Illinois'],
    ['Portfolio', `${business.associations} associations, approximately ${business.residences} residences`],
    ['Client retention', `${business.retentionPercent} percent since ${business.foundingYear}`],
    ['Board and resident software', 'AppFolio portal'],
    ['Illinois CAM firm license', business.licenseNumber],
    ['Illinois CAM individual license', '261000524 (Mirsad Cerimovic) — active, no disciplinary history'],
    ['Pricing model', `Customized flat monthly fee, starting at $${business.priceFrom} per unit per month, ${business.priceTerms}. Never a percentage of the association budget.`],
    ['Contract terms', brand.contracts.line],
    ['Memberships', business.memberships.join('; ')],
    ['Not affiliated with', business.notAffiliatedWith.join('; ')],
  ];
}

/** The Organization node every page should point at. Values come from this file and brand.config. */
export function organizationNode() {
  return {
    '@type': ['ProfessionalService', 'LocalBusiness'],
    '@id': ORG_ID,
    name: business.name,
    legalName: business.legalName,
    alternateName: [business.alternateName],
    disambiguatingDescription:
      `Chicago community association (condo, HOA and townhome) management firm at ${brand.address.street}. Not affiliated with Stellar Properties Inc. of Carol Stream or Stellar Management of New York.`,
    description:
      `Condominium, HOA, and townhome association management firm serving Chicago and the North Shore since ${business.foundingYear}. ${PORTFOLIO} under management, with a ${RETENTION}. Community association management only.`,
    url: SITE_URL,
    logo: `${SITE_URL}${brand.logo.src}`,
    image: `${SITE_URL}${brand.ogImage}`,
    telephone: business.phoneE164,
    email: business.email,
    priceRange: `From $${business.priceFrom}/unit/month`,
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      name: business.licenseName,
      credentialCategory: 'Professional license',
      identifier: business.licenseNumber,
      recognizedBy: {
        '@type': 'GovernmentOrganization',
        name: 'Illinois Department of Financial and Professional Regulation',
        url: 'https://idfpr.illinois.gov/profs/cam.html',
      },
    },
    memberOf: [
      {
        '@type': 'Organization',
        name: 'Community Associations Institute',
        url: 'https://www.caionline.org/',
      },
      {
        '@type': 'Organization',
        name: 'Community Associations Institute Illinois Chapter',
        url: 'https://www.cai-illinois.org/',
      },
    ],
    hasMap: profiles.google,
    sameAs: [profiles.linkedin, profiles.google, profiles.yelp],
    foundingDate: business.foundingYear,
    founder: { '@id': `${SITE_URL}/about#mirsad-cerimovic` },
    employee: { '@id': `${SITE_URL}/about#mirsad-cerimovic` },
    slogan: 'The art of a well-run building.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.974506,
      longitude: -87.6887278,
    },
    openingHoursSpecification,
    contactPoint: contactPoints,
    areaServed: [
      { '@type': 'City', name: 'Chicago' },
      { '@type': 'AdministrativeArea', name: 'North Shore, Illinois' },
      { '@type': 'AdministrativeArea', name: 'Cook County, Illinois' },
    ],
  };
}
