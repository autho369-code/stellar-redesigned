import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { brand } from '../../brand/brand.config';
import { business, ENTITY_STATEMENT, profileLinks } from '../../data/business';
import {
  aboutLinks,
  allServicesLink,
  boardResources,
  legalLinks,
  pricingLink,
  regionLinks,
  residentResources,
  servicesByBuilding,
  servicesByTask,
  topNeighborhoods,
  type NavLink,
} from '../../data/navigation';

const columns: Array<{ title: string; links: NavLink[] }> = [
  { title: 'Services', links: [...servicesByBuilding.links, ...servicesByTask.links, allServicesLink] },
  { title: 'Neighborhoods', links: [...regionLinks.links, ...topNeighborhoods.links] },
  { title: 'Resources', links: [...boardResources.links, ...residentResources.links] },
  { title: 'Company', links: [aboutLinks.links[0], { name: 'Our founder', href: '/about/mirsad-cerimovic' }, pricingLink, ...aboutLinks.links.slice(2)] },
];

const credentials = ['CAI Member', 'CAI Illinois Chapter', 'Illinois Licensed CAM Firm', `Serving Chicago Since ${brand.foundedYear}`];

const linkClass = 'text-sm text-paper/75 transition-colors duration-200 hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-300';

export default function Footer() {
  return (
    <footer className="bg-ink text-paper" data-site-footer>
      <div className="mx-auto max-w-7xl px-5 pb-14 pt-16 sm:px-8 lg:px-10 lg:pt-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Name, address, phone: the same as the Google Business Profile */}
          <div className="lg:col-span-4">
            <Link to="/" className="mb-6 inline-flex items-center gap-3">
              <img src={brand.logo.src} alt={brand.logo.alt} width={52} height={52} className="h-[52px] w-[52px]" loading="lazy" />
              <span className="leading-none">
                <span className="block font-display text-3xl tracking-tight">{brand.shortName}</span>
                <span className="mt-2 block text-xs font-medium text-paper/65">
                  Chicago Property Management · Est. {brand.foundedYear}
                </span>
              </span>
            </Link>
            <p className="mb-7 max-w-sm text-sm font-light leading-relaxed text-paper/70">
              Condominium, HOA, and townhome association management for
              Chicago&rsquo;s finest addresses — practiced with discretion,
              transparency, and an uncompromising standard of care.
            </p>
            <address className="space-y-3 text-sm not-italic text-paper/75">
              <p className="font-semibold text-paper">{business.name}</p>
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" strokeWidth={1.5} aria-hidden />
                <span>{business.addressLine}</span>
              </p>
              <a href={business.phoneHref} data-track-location="footer" className="flex items-center gap-3 hover:text-gold-300">
                <Phone className="h-4 w-4 shrink-0 text-gold-400" strokeWidth={1.5} aria-hidden />
                {business.phoneDotted}
              </a>
              <a href={`mailto:${business.email}`} data-track-location="footer" className="flex items-center gap-3 hover:text-gold-300">
                <Mail className="h-4 w-4 shrink-0 text-gold-400" strokeWidth={1.5} aria-hidden />
                {business.email}
              </a>
            </address>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={brand.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-md border border-paper/30 px-4 text-sm font-semibold text-paper transition-colors hover:border-gold-300 hover:text-gold-300"
              >
                Resident portal
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={brand.reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-review-link="footer"
                className="inline-flex h-11 items-center gap-2 rounded-md border border-paper/30 px-4 text-sm font-semibold text-paper transition-colors hover:border-gold-300 hover:text-gold-300"
              >
                Review us on Google
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
            <p className="mt-7 text-sm text-paper/75">{brand.signOff}</p>
          </div>

          {/* Four link columns */}
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 lg:col-span-8">
            {columns.map((column) => (
              <div key={column.title}>
                <p className="mb-5 text-sm font-semibold text-gold-300">{column.title}</p>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link to={link.href} className={linkClass}>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Entity statement — the same facts AI assistants should repeat */}
      <div className="border-t border-paper/10">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
          <p className="max-w-4xl text-xs font-light leading-relaxed text-paper/65">{ENTITY_STATEMENT}</p>
          <p className="mt-3 text-xs font-light text-paper/65">
            Find us on{' '}
            {profileLinks.map((p, i) => (
              <span key={p.label}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 transition-colors hover:text-gold-300"
                >
                  {p.label}
                </a>
                {i < profileLinks.length - 2 ? ', ' : i === profileLinks.length - 2 ? ' and ' : '.'}
              </span>
            ))}
          </p>
        </div>
      </div>

      {/* Credentials */}
      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-2 px-5 py-6 sm:px-8 lg:px-10">
          {credentials.map((c) => (
            <span key={c} className="text-xs font-medium text-paper/65">
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* Copyright + legal */}
      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 sm:flex-row sm:px-8 lg:px-10">
          <p className="text-xs font-light text-paper/65">
            &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
            {' · '}
            <a
              href="https://portier369.com"
              target="_blank"
              rel="noopener"
              className="text-paper/65 transition-colors hover:text-gold-300"
              title="HOA & condo management software"
            >
              Powered by Portier369
            </a>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link key={link.href} to={link.href} className="text-xs font-light text-paper/65 transition-colors hover:text-gold-300">
                {link.name}
              </Link>
            ))}
            <a href="/sitemap.xml" className="text-xs font-light text-paper/65 transition-colors hover:text-gold-300">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
