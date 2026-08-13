import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowUpRight, ArrowRight, Phone } from 'lucide-react';

interface NavChild {
  name: string;
  href: string;
  external?: boolean;
}

interface NavItem {
  name: string;
  href: string;
  children?: NavChild[];
}

const navLinks: NavItem[] = [
  { name: 'About', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    children: [
      { name: 'Condominium Management', href: '/services/condominium-management' },
      { name: 'HOA Management', href: '/services/hoa-management' },
      { name: 'Townhome Management', href: '/services/townhome-management' },
      { name: 'Financial Management', href: '/services/financial-management' },
      { name: 'Maintenance Coordination', href: '/services/maintenance-coordination' },
      { name: 'Board Support', href: '/services/board-support' },
      { name: 'Violation Management', href: '/services/violation-management' },
    ],
  },
  {
    name: 'Service Areas',
    href: '/service-areas',
    children: [
      { name: 'All Service Areas', href: '/service-areas' },
      { name: 'Chicago', href: '/property-management-chicago' },
      { name: 'North Shore', href: '/property-management-north-shore' },
    ],
  },
  { name: 'Pricing', href: '/pricing' },
  {
    name: 'Resources',
    href: '/resources',
    children: [
      { name: 'Resource Center', href: '/resources' },
      { name: 'Make a Payment', href: 'https://stellarpropertygrp.appfolio.com/connect/', external: true },
      { name: 'Bill Pay', href: '/resources?section=pay' },
      { name: 'Report a Violation', href: '/resources?form=violation' },
      { name: 'Board Nomination', href: '/resources?form=nomination' },
      { name: 'Blog', href: '/blog' },
    ],
  },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileDropdown(null);
  }, [location.pathname, location.search]);

  const isActive = (href: string) => {
    const path = href.split('?')[0];
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-paper/90 backdrop-blur-md border-b transition-all duration-300 ${
        scrolled || mobileOpen ? 'border-slate-200 shadow-card' : 'border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-3">
            <img
              src="/logo-icon.svg"
              alt="Stellar Property Management logo"
              className="w-12 h-12 transition-transform duration-300 group-hover:scale-105"
            />
            <span className="leading-none">
              <span className="block font-display text-[1.45rem] text-ink tracking-tight">
                Stellar
              </span>
              <span className="block text-[9px] font-semibold uppercase tracking-luxe text-slate-500 mt-1">
                Condo · HOA · Townhome Management
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={link.href}
                    className={`flex items-center gap-1.5 py-2 text-[11px] font-semibold uppercase tracking-luxe transition-colors duration-200 ${
                      isActive(link.href) ? 'text-gold-600' : 'text-ink/70 hover:text-ink'
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        openDropdown === link.name ? 'rotate-180' : ''
                      }`}
                    />
                  </Link>

                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                      openDropdown === link.name
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2'
                    }`}
                  >
                    <div className="bg-paper border border-slate-200 shadow-glass py-3 w-72">
                      {link.children.map((child) =>
                        child.external ? (
                          <a
                            key={child.name}
                            href={child.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between px-6 py-2.5 text-sm text-slate-600 hover:text-ink hover:bg-ivory-100 transition-colors duration-150"
                          >
                            {child.name}
                            <ArrowUpRight className="w-3.5 h-3.5 text-gold-500" />
                          </a>
                        ) : (
                          <Link
                            key={child.name}
                            to={child.href}
                            className={`block px-6 py-2.5 text-sm transition-colors duration-150 ${
                              isActive(child.href) && child.href.indexOf('?') === -1
                                ? 'text-gold-600 bg-ivory-100'
                                : 'text-slate-600 hover:text-ink hover:bg-ivory-100'
                            }`}
                          >
                            {child.name}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`py-2 text-[11px] font-semibold uppercase tracking-luxe transition-colors duration-200 ${
                    isActive(link.href) ? 'text-gold-600' : 'text-ink/70 hover:text-ink'
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}

            {/* Phone + primary prospect CTA — new business first; resident
                payments remain under Resources. */}
            <a
              href="tel:+17737280652"
              className="hidden xl:inline-flex items-center gap-2 text-[11px] font-semibold tracking-luxe text-ink/70 hover:text-gold-600 transition-colors duration-200"
            >
              <Phone className="w-3.5 h-3.5 text-gold-500" />
              773.728.0652
            </a>
            <Link
              to="/contact?inquiry=quote&source=header"
              className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-paper hover:bg-gold-600 text-[11px] font-semibold tracking-luxe uppercase transition-colors duration-300"
            >
              Request a Proposal
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </nav>

          {/* Mobile: click-to-call + proposal chip, visible without opening the menu */}
          <div className="flex items-center gap-1 lg:hidden">
            <a
              href="tel:+17737280652"
              aria-label="Call Stellar Property Management at 773-728-0652"
              className="p-2 text-ink hover:text-gold-600 transition-colors duration-200"
            >
              <Phone className="w-5 h-5" />
            </a>
            <Link
              to="/contact?inquiry=quote&source=mobile-header-visible"
              className="hidden items-center gap-1.5 bg-ink px-3 py-2 text-[9px] font-semibold uppercase tracking-luxe text-paper transition-colors hover:bg-gold-600 min-[390px]:inline-flex"
            >
              Proposal
              <ArrowUpRight className="h-3 w-3" />
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-ink transition-colors duration-200 hover:text-gold-600"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-navigation"
        className={`lg:hidden transition-all duration-300 overflow-y-auto ${
          mobileOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="bg-paper border-t border-slate-200 px-5 py-5 space-y-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.name}>
                <button
                  onClick={() => setMobileDropdown(mobileDropdown === link.name ? null : link.name)}
                  className={`w-full flex items-center justify-between py-3 text-[11px] font-semibold uppercase tracking-luxe transition-colors duration-200 ${
                    isActive(link.href) ? 'text-gold-600' : 'text-ink/70'
                  }`}
                >
                  {link.name}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileDropdown === link.name ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    mobileDropdown === link.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pl-4 py-1 space-y-0.5 border-l border-slate-200">
                    {link.children.map((child) =>
                      child.external ? (
                        <a
                          key={child.name}
                          href={child.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 py-2 text-sm text-slate-600 hover:text-ink"
                        >
                          {child.name}
                          <ArrowUpRight className="w-3.5 h-3.5 text-gold-500" />
                        </a>
                      ) : (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block py-2 text-sm text-slate-600 hover:text-ink transition-colors duration-150"
                        >
                          {child.name}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className={`block py-3 text-[11px] font-semibold uppercase tracking-luxe transition-colors duration-200 ${
                  isActive(link.href) ? 'text-gold-600' : 'text-ink/70'
                }`}
              >
                {link.name}
              </Link>
            )
          )}

          <div className="pt-3 space-y-2.5">
            <Link
              to="/contact?inquiry=quote&source=mobile-header"
              className="flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-ink text-paper text-[11px] font-semibold tracking-luxe uppercase transition-colors duration-300 hover:bg-gold-600"
            >
              Request a Proposal
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href="https://stellarpropertygrp.appfolio.com/connect/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-5 py-3.5 border border-slate-300 text-ink text-[11px] font-semibold tracking-luxe uppercase transition-colors duration-300 hover:border-gold-500 hover:text-gold-600"
            >
              Make a Payment
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
