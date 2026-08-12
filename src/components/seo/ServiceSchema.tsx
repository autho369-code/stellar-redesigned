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
  };

  return <Helmet><script type="application/ld+json">{JSON.stringify(schema)}</script></Helmet>;
}
