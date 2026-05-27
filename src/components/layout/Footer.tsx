import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ShieldCheck, ArrowUpRight } from 'lucide-react';

const serviceLinks = [
  { name: 'Condominium Management', href: '/services/condominium-management' },
  { name: 'HOA Management', href: '/services/hoa-management' },
  { name: 'Townhome Management', href: '/services/townhome-management' },
  { name: 'Financial Management', href: '/services/financial-management' },
  { name: 'Maintenance Coordination', href: '/services/maintenance-coordination' },
  { name: 'Board Support', href: '/services/board-support' },
  { name: 'Violation Management', href: '/services/violation-management' },
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Service Areas', href: '/service-areas' },
  { name: 'Blog', href: '/blog' },
  { name: 'Owner Resources', href: '/resources' },
  { name: 'Contact', href: '/contact' },
];

const legalLinks = [
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms of Service', href: '#' },
  { name: 'Sitemap', href: '#' },
];

const credentials = ['CAI Certified', 'IREM Member', 'IDFPR Licensed', 'CCIM Designated'];

const PORTAL_URL = 'https://stellarpropertygrp.appfolio.com/connect/';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-brand-950 text-white">
      <div className="absolute inset-0 bg-grid-light opacity-40" />
      <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-brand-600/20 blur-3xl" />

      <div className="container-x relative">
        <div className="grid grid-cols-1 gap-12 pb-12 pt-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link to="/" className="mb-5 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-soft">
                <img src="/logo-icon.svg" alt="Stellar Property Management logo" className="h-9 w-9" />
              </span>
              <span className="leading-none">
                <span className="block font-serif text-[1.6rem] font-bold leading-none text-white">
                  Stellar
                </span>
                <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-300">
                  Chicago Property Management
                </span>
              </span>
            </Link>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-brand-200/80">
              Chicago's trusted partner for condominium, HOA, and townhome management —
              delivering transparency, responsiveness, and community-focused care since 2007.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-brand-200/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <span>5107 N Western Ave, Suite 1S, Chicago, IL 60625</span>
              </div>
              <a
                href="tel:+17737280652"
                className="flex items-center gap-3 text-brand-200/80 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 shrink-0 text-brand-300" />
                773.728.0652
              </a>
              <a
                href="mailto:mirsad@stellarpropertygroup.com"
                className="flex items-center gap-3 text-brand-200/80 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0 text-brand-300" />
                mirsad@stellarpropertygroup.com
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-white">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-brand-200/80 transition-colors duration-200 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-white">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-brand-200/80 transition-colors duration-200 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-white">
              Residents &amp; Owners
            </h4>
            <p className="mb-4 text-sm leading-relaxed text-brand-200/80">
              Make a payment, submit a request, or view documents through our secure
              online portal.
            </p>
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-brand-700 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            >
              AppFolio Resident Portal
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/10 py-6">
          {credentials.map((cred) => (
            <div key={cred} className="flex items-center gap-2 text-brand-200/70">
              <ShieldCheck className="h-4 w-4 text-brand-300" />
              <span className="text-xs font-semibold uppercase tracking-wide">{cred}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 sm:flex-row">
          <p className="text-xs text-brand-200/60">
            &copy; {year} Stellar Property Management. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-5">
            {legalLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-xs text-brand-200/60 transition-colors hover:text-white"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
