import { Helmet } from 'react-helmet-async';
import { business, ORG_ID, SITE_URL } from '../../data/business';

interface ServiceSchemaProps {
  name: string;
  description: string;
  canonical: string;
  serviceType: string;
}

export function ServiceSchema({ name, description, canonical, serviceType }: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${canonical}#service`,
        name,
        description,
        url: canonical,
        serviceType,
        provider: { '@id': ORG_ID },
        areaServed: [
          { '@type': 'City', name: 'Chicago' },
          { '@type': 'AdministrativeArea', name: 'North Shore, Illinois' },
        ],
        offers: {
          '@type': 'Offer',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: business.priceFrom,
            priceCurrency: 'USD',
            unitText: 'per unit per month',
            description: 'Starting price; customized flat monthly proposal.',
          },
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
          { '@type': 'ListItem', position: 3, name, item: canonical },
        ],
      },
    ],
  };

  return <Helmet><script type="application/ld+json">{JSON.stringify(schema)}</script></Helmet>;
}
