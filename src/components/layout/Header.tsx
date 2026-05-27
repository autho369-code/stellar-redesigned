import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ExternalLink, Phone } from 'lucide-react';

const PORTAL_URL = 'https://stellarpropertygrp.appfolio.com/connect/';

interface DropItem {
  name: string;
  href: string;
  external?: boolean;
}

interface NavLink {
  name: string;
  href: string;
  dropdown?: DropItem[];
}

const services: DropItem[] = [
  { name: 'All Services', href: '/services' },
  { name: 'Condominium Management', href: '/services/condominium-management' },
  { name: 'HOA Management', href: '/services/hoa-management' },
  { name: 'Townhome Management', href: '/services/townhome-management' },
  { name: 'Financial Management', href: '/services/financial-management' },
  { name: 'Maintenance Coordination', href: '/services/maintenance-coordination' },
  { name: 'Board Support', href: '/services/board-support' },
  { name: 'Violation Management', href: '/services/violation-management' },
];

const resourceLinks: DropItem[] = [
  { name: 'All Owner Resources', href: '/resources' },
  { name: 'Make a Payment', href: PORTAL_URL, external: true },
  { name: 'Free Bank Bill Pay', href: '/resources#bill-pay' },
  { name: 'Online Forms', href: '/resources#forms-section' },
  { name: 'Owner FAQ', href: '/resources#faq' },
];

const navLinks: NavLink[] = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services', dropdown: services },
  { name: 'Service Areas', href: '/service-areas' },
  { name: 'Resources', href: '/resources', dropdown: resourceLinks },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileDropdown(null);
  }, [location.pathname, location.hash]);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  const dropItemClass = (active: boolean, emphasized: boolean) =>
    `flex items-center justify-between gap-2 rounded-xl px-4 py-2.5 text-sm transition-colors duration-150 ${
      emphasized
        ? 'font-semibold text-brand-700 hover:bg-brand-50'
        : active
        ? 'bg-brand-50 font-semibold text-brand-700'
        : 'text-ink-600 hover:bg-ink-50 hover:text-ink-900'
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'border-b border-ink-100 bg-white/90 shadow-soft backdrop-blur-lg'
          : 'border-b border-transparent bg-white/70 backdrop-blur-md'
      }`}
    >
      <div className="container-x">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link to="/" className="group flex items-center gap-3">
            <img
              src="/logo-icon.svg"
              alt="Stellar Property Management logo"
              className="h-11 w-11 transition-transform duration-300 group-hover:scale-105"
            />
            <span className="leading-none">
              <span className="block font-serif text-[1.6rem] font-bold leading-none text-brand-700">
                Stellar
              </span>
              <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-500">
                Chicago Property Management
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={link.href}
                    className={`flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors duration-200 ${
                      isActive(link.href)
                        ? 'bg-brand-50 text-brand-700'
                        : 'text-ink-600 hover:bg-ink-50 hover:text-ink-900'
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        openDropdown === link.name ? 'rotate-180' : ''
                      }`}
                    />
                  </Link>

                  <div
                    className={`absolute left-1/2 top-full -translate-x-1/2 pt-3 transition-all duration-200 ${
                      openDropdown === link.name
                        ? 'visible translate-y-0 opacity-100'
                        : 'invisible -translate-y-2 opacity-0'
                    }`}
                  >
                    <div className="w-72 rounded-2xl border border-ink-100 bg-white p-2 shadow-card-hover">
                      {link.dropdown.map((item, i) => {
                        const itemActive =
                          i !== 0 && !item.href.includes('#') && isActive(item.href);
                        return (
                          <div key={item.name}>
                            {item.external ? (
                              <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={dropItemClass(false, false)}
                              >
                                {item.name}
                                <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-60" />
                              </a>
                            ) : (
                              <Link to={item.href} className={dropItemClass(itemActive, i === 0)}>
                                {item.name}
                              </Link>
                            )}
                            {i === 0 && <div className="my-1 h-px bg-ink-100" />}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors duration-200 ${
                    isActive(link.href)
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-ink-600 hover:bg-ink-50 hover:text-ink-900'
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          <a
            href={PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-xl border border-ink-200 px-5 py-2.5 text-sm font-semibold text-ink-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 hover:shadow-soft lg:inline-flex"
          >
            Make a Payment
            <ExternalLink className="h-3.5 w-3.5" />
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-ink-700 transition-colors hover:bg-ink-50 lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          mobileOpen ? 'max-h-[92vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="max-h-[88vh] space-y-1 overflow-y-auto border-t border-ink-100 bg-white px-5 py-5">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name}>
                <button
                  onClick={() =>
                    setMobileDropdown(mobileDropdown === link.name ? null : link.name)
                  }
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-colors duration-200 ${
                    isActive(link.href)
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-ink-700 hover:bg-ink-50'
                  }`}
                >
                  {link.name}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      mobileDropdown === link.name ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    mobileDropdown === link.name
                      ? 'max-h-[32rem] opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="space-y-0.5 py-1 pl-3">
                    {link.dropdown.map((item) =>
                      item.external ? (
                        <a
                          key={item.name}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm text-ink-500 hover:bg-ink-50 hover:text-ink-900"
                        >
                          {item.name}
                          <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                        </a>
                      ) : (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block rounded-lg px-4 py-2 text-sm text-ink-500 hover:bg-ink-50 hover:text-ink-900"
                        >
                          {item.name}
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
                className={`block rounded-xl px-4 py-3 text-sm font-semibold transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'bg-brand-50 text-brand-700'
                    : 'text-ink-700 hover:bg-ink-50'
                }`}
              >
                {link.name}
              </Link>
            )
          )}

          <div className="flex gap-2.5 pt-3">
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-ink-200 px-4 py-3 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-700"
            >
              Make a Payment
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a
              href="tel:7737280652"
              className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-ink-200 px-4 py-3 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-700"
            >
              <Phone className="h-3.5 w-3.5" />
              Call Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
