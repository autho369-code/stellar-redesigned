import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/**
 * "For boards" block: plain internal links from high-traffic utility pages
 * (/resources, /contact) to the money pages, each with its own descriptive
 * anchor. Adds no claims, prices or figures.
 */
const LINKS = [
  { to: '/services/condominium-management', label: 'Condo association management in Chicago' },
  { to: '/services/hoa-management', label: 'HOA management for Chicago-area communities' },
  { to: '/services/townhome-management', label: 'Townhome association management' },
  { to: '/services/high-rise-condominium-management', label: 'High-rise condominium management' },
  { to: '/services/small-condo-association-management', label: 'Management for small condo associations' },
  { to: '/property-management-chicago', label: 'Chicago condo and HOA management, neighborhood by neighborhood' },
  { to: '/how-to-choose-condo-management-company-chicago', label: 'How to choose a management company' },
  { to: '/service-areas', label: 'Neighborhoods and suburbs we serve' },
];

interface Props {
  heading?: string;
  intro?: string;
  className?: string;
}

export default function BoardServiceLinks({
  heading = 'Board member? Compare management for your association.',
  intro = 'Condominium, HOA and townhome associations are all we manage. Start with the page that fits your building.',
  className = '',
}: Props) {
  return (
    <section aria-labelledby="board-service-links" className={`py-16 lg:py-20 bg-white border-t border-slate-200 ${className}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl mb-8">
          <h2 id="board-service-links" className="font-display font-light text-3xl lg:text-4xl text-ink leading-[1.1] mb-4">
            {heading}
          </h2>
          <p className="text-slate-600 font-light leading-relaxed">{intro}</p>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-3">
          {LINKS.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className="group inline-flex items-start gap-2 text-ink underline decoration-gold-500 underline-offset-4 hover:text-gold-600"
              >
                <span>{label}</span>
                <ArrowRight aria-hidden="true" className="mt-1 w-3.5 h-3.5 shrink-0 transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
