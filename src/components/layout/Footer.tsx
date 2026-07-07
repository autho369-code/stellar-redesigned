import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

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
  { name: 'About', href: '/about' },
  { name: 'Neighborhoods', href: '/service-areas' },
  { name: 'Journal', href: '/blog' },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact', href: '/contact' },
];

const credentials = ['CAI Certified', 'IREM Member', 'IDFPR Licensed', 'CCIM Designated'];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      {/* Main */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Wordmark + contact */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-flex items-center gap-4 mb-6">
              <img
                src="/logo-icon.svg"
                alt="Stellar Property Management logo"
                className="w-14 h-14"
              />
              <span className="leading-none">
                <span className="block font-display text-3xl tracking-tight">
                  Stellar
                </span>
                <span className="block text-[9px] font-semibold uppercase tracking-luxe text-paper/40 mt-2">
                  Chicago Property Management · Est. 2007
                </span>
              </span>
            </Link>
            <p className="text-paper/50 text-sm leading-relaxed mb-8 font-light max-w-sm">
              Condominium, HOA, and townhome association management for
              Chicago&rsquo;s finest addresses — practiced with discretion,
              transparency, and an uncompromising standard of care.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-paper/60 font-light">
                <MapPin className="w-4 h-4 mt-0.5 text-gold-400 shrink-0" strokeWidth={1.5} />
                <span>5107 N Western Ave, Suite 1S, Chicago, IL 60625</span>
              </div>
              <a
                href="tel:+17737280652"
                className="flex items-center gap-3 text-sm text-paper/60 font-light hover:text-gold-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-gold-400 shrink-0" strokeWidth={1.5} />
                773.728.0652
              </a>
              <a
                href="mailto:mirsad@stellarpropertygroup.com"
                className="flex items-center gap-3 text-sm text-paper/60 font-light hover:text-gold-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-gold-400 shrink-0" strokeWidth={1.5} />
                mirsad@stellarpropertygroup.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-4 lg:col-start-7">
            <h4 className="text-[10px] font-semibold uppercase tracking-luxe text-gold-300 mb-6">
              The Practice
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-paper/55 font-light hover:text-paper transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-semibold uppercase tracking-luxe text-gold-300 mb-6">
              The Firm
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-paper/55 font-light hover:text-paper transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Credentials */}
      <div className="border-t border-paper/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-6 flex flex-wrap items-center justify-center gap-x-14 gap-y-2">
          {credentials.map((c) => (
            <span key={c} className="text-[10px] font-medium tracking-luxe uppercase text-paper/35">
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* Copyright + legal */}
      <div className="border-t border-paper/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-paper/30 font-light">
            &copy; {new Date().getFullYear()} Stellar Property Management. All rights reserved.
            {' · '}
            <a
              href="https://portier369.com"
              target="_blank"
              rel="noopener"
              className="text-paper/40 hover:text-gold-300 transition-colors"
              title="HOA & condo management software"
            >
              Powered by Portier369
            </a>
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-xs text-paper/40 font-light hover:text-gold-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-xs text-paper/40 font-light hover:text-gold-300 transition-colors">
              Terms of Service
            </Link>
            <a href="/sitemap.xml" className="text-xs text-paper/40 font-light hover:text-gold-300 transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
