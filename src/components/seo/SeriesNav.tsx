import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { SeriesNavLinks } from '../../data/clusters';

interface SeriesNavProps {
  links: SeriesNavLinks;
  /** Cluster name, e.g. "Reserves and capital funding". */
  clusterName: string;
  /** slug → title for every published guide. */
  titles: ReadonlyMap<string, string>;
}

const rowClass =
  'group flex items-baseline justify-between gap-4 border-b border-slate-200 py-4 text-ink no-underline transition-colors hover:text-gold-600';

/**
 * "More in this guide" (end of article). Shows the cluster pillar plus up to
 * three sibling guides; a pillar guide shows every member of its cluster.
 * Data: src/data/clusters.ts.
 */
export default function SeriesNav({ links, clusterName, titles }: SeriesNavProps) {
  const row = (slug: string, label?: string) => {
    const title = titles.get(slug);
    if (!title) return null;
    return (
      <li key={slug}>
        <Link to={`/blog/${slug}`} className={rowClass}>
          <span>
            {label && <span className="mr-3 text-[10px] uppercase tracking-luxe text-gold-600">{label}</span>}
            <span className="font-display text-lg">{title}</span>
          </span>
          <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-400 transition-colors group-hover:text-gold-600" strokeWidth={1.25} aria-hidden />
        </Link>
      </li>
    );
  };

  return (
    <nav aria-labelledby="series-nav" data-series-nav className="mt-16 border-t border-slate-200 pt-8">
      <h2 id="series-nav" className="font-display text-2xl text-ink">More in this guide</h2>
      <p className="mt-2 text-sm font-light text-slate-600">{clusterName}</p>
      <ul className="mt-5 border-t border-slate-200">
        {links.pillar && row(links.pillar, 'Start here')}
        {links.guides.map((slug) => row(slug))}
        {links.cross.map((slug) => row(slug, 'Related'))}
      </ul>
    </nav>
  );
}
