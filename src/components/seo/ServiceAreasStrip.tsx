import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { getServiceNeighborhoods, serviceCatalog } from '../../data/neighborhood-services';

interface ServiceAreasStripProps {
  /** Service slug matching serviceCatalog, e.g. 'condominium-management'. */
  service: string;
}

/**
 * Reverse-silo module for service (money) pages: links back to the two
 * regional hubs and the neighborhoods where this service concentrates,
 * so crawl paths and topical relevance flow both ways through the silo.
 */
export function ServiceAreasStrip({ service }: ServiceAreasStripProps) {
  const areas = getServiceNeighborhoods(service);
  const title = serviceCatalog[service]?.title ?? 'This Practice';
  if (areas.length === 0) return null;

  return (
    <section className="py-24 lg:py-32 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow text-gold-600 mb-5 flex items-center gap-4">
              <span className="accent-rule" />
              The Atlas
            </p>
            <h2 className="font-display font-light text-3xl lg:text-4xl text-ink leading-tight mb-5">
              Where we practice <em className="font-medium text-gold-600">{title}.</em>
            </h2>
            <p className="text-slate-600 font-light leading-relaxed mb-8">
              This work looks different block to block. See how we serve the communities where it concentrates.
            </p>
            <div className="flex flex-col items-start gap-3">
              <Link to="/property-management-chicago" className="inline-flex items-center gap-2 text-sm text-gold-600 hover:text-gold-500 transition-colors">
                Chicago Property Management <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/property-management-north-shore" className="inline-flex items-center gap-2 text-sm text-gold-600 hover:text-gold-500 transition-colors">
                North Shore Property Management <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/service-areas" className="inline-flex items-center gap-2 text-sm text-gold-600 hover:text-gold-500 transition-colors">
                All Service Areas <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={140} className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 sm:gap-x-10 border-t border-slate-200">
              {areas.map((area) => (
                <Link
                  key={area.slug}
                  to={`/property-management-${area.slug}`}
                  className="group flex items-center justify-between gap-4 py-5 border-b border-slate-200"
                >
                  <span>
                    <span className="block font-display text-lg text-ink group-hover:text-gold-600 transition-colors duration-300">
                      {area.name}
                    </span>
                    <span className="text-[10px] uppercase tracking-luxe text-slate-400">
                      {area.region === 'north-shore' ? 'North Shore' : 'Chicago'} · {area.zipCodes[0]}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="w-4 h-4 flex-shrink-0 text-slate-400 group-hover:text-gold-600 transition-colors duration-300"
                    strokeWidth={1.25}
                  />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
