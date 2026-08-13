import { Helmet } from 'react-helmet-async';

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
        provider: { '@id': 'https://www.stellarpropertygroup.com/#business' },
        areaServed: [
          { '@type': 'City', name: 'Chicago' },
          { '@type': 'AdministrativeArea', name: 'North Shore, Illinois' },
        ],
        offers: {
          '@type': 'Offer',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: 20,
            priceCurrency: 'USD',
            unitText: 'per unit per month',
            description: 'Starting price; customized flat monthly proposal.',
          },
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.stellarpropertygroup.com/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.stellarpropertygroup.com/services' },
          { '@type': 'ListItem', position: 3, name, item: canonical },
        ],
      },
    ],
  };

  return <Helmet><script type="application/ld+json">{JSON.stringify(schema)}</script></Helmet>;
}
