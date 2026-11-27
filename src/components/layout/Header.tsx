import { lazy, Suspense, useEffect, useRef, useState, type ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, Phone } from 'lucide-react';
import { brand } from '../../brand/brand.config';
import { business } from '../../data/business';
import {
  aboutLinks,
  agentsLink,
  allServicesLink,
  boardResources,
  pricingLink,
  regionLinks,
  residentPortalLink,
  residentResources,
  reviewsLink,
  servicesByBuilding,
  servicesByTask,
  topNeighborhoods,
  type NavGroup,
  type NavLink,
} from '../../data/navigation';
import { cn } from '../../lib/cn';

// The phone menu (Radix dialog) loads on first use, so it is not in every page's JavaScript.
const MobileMenu = lazy(() => import('./MobileMenu'));

const focusRing = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-600';

// Sentence case, 15 px, normal tracking. Padding steps down so six menus, the
// phone and the button fit on one line from 1024 px.
const navItemClass =
  'inline-flex h-10 items-center gap-1 rounded-md px-2 text-[15px] font-medium transition-colors hover:text-ink xl:px-2.5 min-[1440px]:px-3 ' +
  focusRing;

/** One link inside a desktop menu panel. */
function PanelLink({ link, active }: { link: NavLink; active: boolean }) {
  const className = cn(
    'block rounded-md px-3 py-2 text-[15px] leading-snug transition-colors hover:bg-ivory-100 hover:text-ink',
    focusRing,
    active ? 'bg-ivory-100 text-gold-600' : 'text-slate-700',
  );
  return (
    <li>
      {link.external ? (
        <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
          {link.name}
        </a>
      ) : (
        <Link to={link.href} className={className} aria-current={active ? 'page' : undefined}>
          {link.name}
        </Link>
      )}
    </li>
  );
}

function PanelGroup({ group, isActive, columns = 1 }: { group: NavGroup; isActive: (href: string) => boolean; columns?: 1 | 2 }) {
  return (
    <div>
      <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-slate-600">{group.title}</p>
      <ul className={columns === 2 ? 'grid grid-cols-2 gap-x-2' : undefined}>
        {group.links.map((link) => (
          <PanelLink key={link.href} link={link} active={isActive(link.href)} />
        ))}
      </ul>
    </div>
  );
}

/**
 * One desktop menu: a button and its panel (the W3C "disclosure" pattern).
 * Opens on hover, click, Enter or Space; closes on Escape, on leaving, or on
 * a click elsewhere. The panel is always in the HTML and only hidden with
 * CSS, so every menu link is in the prerendered page for crawlers.
 */
function MenuItem({
  name,
  active,
  open,
  setOpen,
  panelClass,
  anchored = true,
  children,
}: {
  name: string;
  active: boolean;
  open: boolean;
  setOpen: (name: string | null) => void;
  panelClass: string;
  anchored?: boolean;
  children: ReactNode;
}) {
  const key = name.toLowerCase();
  const button = useRef<HTMLButtonElement>(null);
  const viaMouse = useRef(false);
  const closeTimer = useRef<number>();
  const cancelClose = () => window.clearTimeout(closeTimer.current);

  return (
    <li
      className={anchored ? 'relative' : undefined}
      // Hover is for a mouse only; a finger opens and closes with a tap.
      onPointerEnter={(event) => {
        if (event.pointerType !== 'mouse') return;
        cancelClose();
        setOpen(name);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType !== 'mouse') return;
        closeTimer.current = window.setTimeout(() => setOpen(null), 120);
      }}
      onBlur={(event) => {
        // Keyboard focus moved to another part of the page. (No target: a click, handled elsewhere.)
        const next = event.relatedTarget as Node | null;
        if (next && !event.currentTarget.contains(next)) setOpen(null);
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && open) {
          setOpen(null);
          button.current?.focus();
        }
      }}
    >
      <button
        ref={button}
        type="button"
        id={`nav-${key}-button`}
        aria-expanded={open}
        aria-controls={`nav-${key}-panel`}
        onPointerDown={(event) => {
          viaMouse.current = event.pointerType === 'mouse';
        }}
        onClick={() => {
          // A mouse has already opened the panel by hovering; its click must not close it.
          if (viaMouse.current && open) return;
          setOpen(open ? null : name);
        }}
        className={cn(
          navItemClass,
          active || open ? 'text-ink' : 'text-ink/80',
          active && 'underline decoration-gold-500 decoration-2 underline-offset-8',
        )}
      >
        {name}
        <ChevronDown
          className={cn('h-4 w-4 text-ink/50 transition-transform duration-200 motion-reduce:transition-none', open && 'rotate-180')}
          aria-hidden
        />
      </button>
      <div
        id={`nav-${key}-panel`}
        role="group"
        aria-labelledby={`nav-${key}-button`}
        className={cn(
          'absolute top-full z-50 mt-2 rounded-[var(--radius-md)] border border-line bg-surface p-6 shadow-glass',
          panelClass,
          !open && 'hidden',
        )}
      >
        {children}
      </div>
    </li>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [sheetLoaded, setSheetLoaded] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setSheetOpen(false);
    setOpenMenu(null);
  }, [location.pathname, location.search]);

  // A click or tap outside the menu bar closes the open panel.
  useEffect(() => {
    if (!openMenu) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!(event.target as Element).closest('[data-main-menu]')) setOpenMenu(null);
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [openMenu]);

  const isActive = (href: string) => {
    if (href.includes('?')) return false;
    return href === '/' ? location.pathname === '/' : location.pathname === href || location.pathname.startsWith(`${href}/`);
  };
  const anyActive = (groups: NavGroup[]) => groups.some((g) => g.links.some((l) => isActive(l.href)));

  const plainLinkClass = (href: string) =>
    cn(navItemClass, isActive(href) ? 'text-ink underline decoration-gold-500 decoration-2 underline-offset-8' : 'text-ink/80');

  return (
    <header
      data-site-header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b bg-paper/95 backdrop-blur-md transition-shadow duration-300 motion-reduce:transition-none',
        scrolled ? 'border-line shadow-card' : 'border-transparent',
      )}
    >
      {/* Utility row: residents, agents and lenders, phone. Desktop only; folds away after scroll. */}
      <div
        className={cn(
          'hidden overflow-hidden border-b border-line/70 transition-[max-height] duration-300 motion-reduce:transition-none lg:block',
          scrolled ? 'max-h-0 border-transparent' : 'max-h-9',
        )}
        data-utility-row
      >
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-end gap-6 px-6 text-[13px] text-slate-600 lg:px-10">
          <a
            href={residentPortalLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn('inline-flex items-center gap-1 hover:text-ink', focusRing)}
            tabIndex={scrolled ? -1 : undefined}
          >
            <span className="font-semibold text-ink">Residents:</span> {residentPortalLink.name}
            <ArrowUpRight className="h-3.5 w-3.5 text-gold-600" aria-hidden />
          </a>
          <Link to={agentsLink.href} className={cn('hover:text-ink', focusRing)} tabIndex={scrolled ? -1 : undefined}>
            <span className="font-semibold text-ink">Agents &amp; lenders:</span> {agentsLink.name}
          </Link>
          <a
            href={business.phoneHref}
            data-track-location="header"
            className={cn('inline-flex items-center gap-1.5 font-semibold text-ink hover:text-gold-600 xl:hidden', focusRing)}
            tabIndex={scrolled ? -1 : undefined}
          >
            <Phone className="h-3.5 w-3.5 text-gold-600" aria-hidden />
            {business.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="mx-auto flex h-[60px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:h-[72px] lg:px-10">
        {/* Logo */}
        <Link to="/" className={cn('group flex shrink-0 items-center gap-2.5', focusRing)}>
          <img src={brand.logo.src} alt={brand.logo.alt} width={44} height={44} className="h-10 w-10 lg:h-11 lg:w-11" />
          {/* Wordmark only: six menus, the phone and the button fill the row. */}
          <span className="font-display text-[1.4rem] leading-none tracking-tight text-ink">{brand.shortName}</span>
        </Link>

        {/* Desktop menu */}
        <nav className="relative hidden lg:block" aria-label="Main" data-main-menu>
          <ul className="flex items-center">
            <MenuItem
              name="Services"
              active={anyActive([servicesByBuilding, servicesByTask])}
              open={openMenu === 'Services'}
              setOpen={setOpenMenu}
              panelClass="left-0 w-[46rem]"
              anchored={false}
            >
              <div className="grid grid-cols-[1fr_1fr_15rem] gap-4">
                <PanelGroup group={servicesByBuilding} isActive={isActive} />
                <PanelGroup group={servicesByTask} isActive={isActive} />
                <div className="flex flex-col gap-3">
                  <Link
                    to={pricingLink.href}
                    className={cn('block rounded-[var(--radius-md)] bg-ink p-5 text-paper transition-colors hover:bg-navy-800', focusRing)}
                  >
                    <span className="block font-display text-xl leading-tight">See pricing</span>
                    <span className="mt-2 block text-sm leading-snug text-paper/80">
                      Starting at ${brand.pricing.startingPerUnit} per unit per month
                    </span>
                    <ArrowRight className="mt-4 h-4 w-4 text-gold-300" aria-hidden />
                  </Link>
                  <Link
                    to={allServicesLink.href}
                    className={cn('inline-flex items-center gap-1.5 px-1 text-sm font-semibold text-ink hover:text-gold-600', focusRing)}
                  >
                    {allServicesLink.name}
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </Link>
                </div>
              </div>
            </MenuItem>

            <li>
              <Link to={pricingLink.href} className={plainLinkClass(pricingLink.href)}>
                {pricingLink.name}
              </Link>
            </li>

            <MenuItem
              name="Neighborhoods"
              active={anyActive([regionLinks, topNeighborhoods])}
              open={openMenu === 'Neighborhoods'}
              setOpen={setOpenMenu}
              panelClass="left-0 w-[34rem]"
            >
              <div className="grid grid-cols-[12rem_1fr] gap-4">
                <PanelGroup group={regionLinks} isActive={isActive} />
                <PanelGroup group={topNeighborhoods} isActive={isActive} columns={2} />
              </div>
            </MenuItem>

            <li>
              <Link to={reviewsLink.href} className={plainLinkClass(reviewsLink.href)}>
                {reviewsLink.name}
              </Link>
            </li>

            <MenuItem
              name="Resources"
              active={anyActive([boardResources, residentResources])}
              open={openMenu === 'Resources'}
              setOpen={setOpenMenu}
              panelClass="right-0 w-[34rem]"
            >
              <div className="grid grid-cols-2 gap-4">
                <PanelGroup group={boardResources} isActive={isActive} />
                <PanelGroup group={residentResources} isActive={isActive} />
              </div>
            </MenuItem>

            <MenuItem name="About" active={isActive('/about')} open={openMenu === 'About'} setOpen={setOpenMenu} panelClass="right-0 w-72">
              <ul>
                {aboutLinks.links.map((link) => (
                  <PanelLink key={link.href} link={link} active={isActive(link.href)} />
                ))}
              </ul>
            </MenuItem>
          </ul>
        </nav>

        {/* Desktop: phone and the proposal button */}
        <div className="hidden shrink-0 items-center gap-5 lg:flex">
          <a
            href={business.phoneHref}
            data-track-location="header"
            className={cn('hidden items-center gap-2 text-[15px] font-semibold text-ink hover:text-gold-600 xl:inline-flex', focusRing)}
          >
            <Phone className="h-4 w-4 text-gold-600" aria-hidden />
            {business.phoneDisplay}
          </a>
          <Link
            to="/contact?source=header"
            className={cn(
              'inline-flex h-11 items-center gap-2 rounded-md bg-ink px-3.5 text-[15px] font-semibold text-paper transition-colors hover:bg-navy-800 xl:px-5',
              focusRing,
            )}
          >
            Get my flat-fee proposal
          </Link>
        </div>

        {/* Phone: call and menu */}
        <div className="flex items-center lg:hidden">
          <a
            href={business.phoneHref}
            data-track-location="header"
            aria-label={`Call ${business.name} at ${business.phoneDisplay}`}
            className={cn('flex h-12 w-12 items-center justify-center text-ink hover:text-gold-600', focusRing)}
          >
            <Phone className="h-5 w-5" aria-hidden />
          </a>
          <button
            type="button"
            ref={menuButton}
            onClick={() => {
              setSheetLoaded(true);
              setSheetOpen(true);
            }}
            onPointerEnter={() => void import('./MobileMenu')}
            onFocus={() => void import('./MobileMenu')}
            aria-label="Open menu"
            aria-haspopup="dialog"
            aria-expanded={sheetOpen}
            className={cn('flex h-12 w-12 items-center justify-center text-ink hover:text-gold-600', focusRing)}
          >
            <Menu className="h-6 w-6" aria-hidden />
          </button>
          {sheetLoaded && (
            <Suspense fallback={null}>
              <MobileMenu open={sheetOpen} onOpenChange={setSheetOpen} returnFocusTo={menuButton} />
            </Suspense>
          )}
        </div>
      </div>
    </header>
  );
}
