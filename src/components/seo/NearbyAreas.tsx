import { Link } from 'react-router-dom';

interface NearbyAreasProps {
  /** Area pages to link, in order. */
  areas: Array<{ slug: string; name: string }>;
}

/**
 * "Association management in nearby neighborhoods" (end of article, above
 * the call to action). Links each guide to the area pages assigned to it in
 * src/data/clusters.ts. Link text is the place name plus "condo and HOA
 * management".
 */
export default function NearbyAreas({ areas }: NearbyAreasProps) {
  if (!areas.length) return null;
  return (
    <nav aria-labelledby="nearby-areas" data-nearby-areas className="mt-12 border-t border-slate-200 pt-8">
      <h2 id="nearby-areas" className="font-display text-2xl text-ink">
        Association management in nearby neighborhoods
      </h2>
      <ul className="mt-5 flex flex-wrap gap-3">
        {areas.map(({ slug, name }) => (
          <li key={slug}>
            <Link
              to={`/property-management-${slug}`}
              className="inline-block border border-slate-200 bg-white px-4 py-2 text-sm text-ink no-underline transition-colors hover:border-gold-400 hover:text-gold-600"
            >
              {name} condo and HOA management
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
