import { useState, type RefObject } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronDown, Phone } from 'lucide-react';
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
import { Sheet, SheetContent, SheetDescription, SheetTitle } from '../ui/sheet';
import { cn } from '../../lib/cn';

const focusRing = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-600';

/** One collapsible group in the phone menu. Rows are 48 px tall. */
function SheetGroup({
  title,
  groups,
  open,
  onToggle,
}: {
  title: string;
  groups: NavGroup[];
  open: boolean;
  onToggle: () => void;
}) {
  const id = `sheet-group-${title.toLowerCase()}`;
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={id}
        className={cn('flex h-12 w-full items-center justify-between text-left text-base font-medium text-ink', focusRing)}
      >
        {title}
        <ChevronDown className={cn('h-5 w-5 text-ink/50 transition-transform motion-reduce:transition-none', open && 'rotate-180')} aria-hidden />
      </button>
      <div id={id} hidden={!open} className="pb-3">
        {groups.map((group) => (
          <div key={group.title}>
            {groups.length > 1 && (
              <p className="pt-2 text-xs font-semibold uppercase tracking-wider text-slate-600">{group.title}</p>
            )}
            <ul>
              {group.links.map((link) => (
                <li key={link.href}>
                  <SheetLink link={link} className="pl-3 text-[15px] text-slate-700" />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function SheetLink({ link, className }: { link: NavLink; className?: string }) {
  const classes = cn('flex min-h-12 items-center gap-2 hover:text-ink', focusRing, className);
  return link.external ? (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className={classes}>
      {link.name}
      <ArrowUpRight className="h-4 w-4 text-gold-600" aria-hidden />
    </a>
  ) : (
    <Link to={link.href} className={classes}>
      {link.name}
    </Link>
  );
}

/**
 * The phone menu. Loaded the first time the menu button is used. Every link
 * here is also in the desktop menu or the footer, which are in the static HTML.
 */
export default function MobileMenu({
  open,
  onOpenChange,
  returnFocusTo,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  returnFocusTo: RefObject<HTMLButtonElement>;
}) {
  const [sheetGroup, setSheetGroup] = useState<string | null>(null);
  const toggleGroup = (name: string) => setSheetGroup((current) => (current === name ? null : name));

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
  id="mobile-navigation"
  onCloseAutoFocus={(event) => {
    event.preventDefault();
    returnFocusTo.current?.focus();
  }}
>
        <div className="flex h-[60px] shrink-0 items-center border-b border-line px-5">
          <SheetTitle className="font-display text-xl text-ink">Menu</SheetTitle>
          <SheetDescription className="sr-only">Site navigation</SheetDescription>
        </div>
        <nav aria-label="Main" className="flex-1 overflow-y-auto px-5 pb-6">
          <SheetGroup
            title="Services"
            groups={[servicesByBuilding, servicesByTask, { title: 'Overview', links: [allServicesLink] }]}
            open={sheetGroup === 'Services'}
            onToggle={() => toggleGroup('Services')}
          />
          <div className="border-b border-line">
            <SheetLink link={pricingLink} className="text-base font-medium text-ink" />
          </div>
          <SheetGroup
            title="Neighborhoods"
            groups={[regionLinks, topNeighborhoods]}
            open={sheetGroup === 'Neighborhoods'}
            onToggle={() => toggleGroup('Neighborhoods')}
          />
          <div className="border-b border-line">
            <SheetLink link={reviewsLink} className="text-base font-medium text-ink" />
          </div>
          <SheetGroup
            title="Resources"
            groups={[boardResources, residentResources]}
            open={sheetGroup === 'Resources'}
            onToggle={() => toggleGroup('Resources')}
          />
          <SheetGroup
            title="About"
            groups={[aboutLinks]}
            open={sheetGroup === 'About'}
            onToggle={() => toggleGroup('About')}
          />

          <div className="border-b border-line">
            <SheetLink
              link={{ ...residentPortalLink, name: `Residents: ${residentPortalLink.name}` }}
              className="text-[15px] text-slate-700"
            />
            <SheetLink
              link={{ ...agentsLink, name: `Agents & lenders: ${agentsLink.name}` }}
              className="text-[15px] text-slate-700"
            />
          </div>

          <div className="space-y-3 pt-5">
            <Link
              to="/contact?source=mobile-header"
              className={cn('flex h-12 items-center justify-center rounded-md bg-ink text-base font-semibold text-paper', focusRing)}
            >
              Get my flat-fee proposal
            </Link>
            <a
              href={business.phoneHref}
              data-track-location="header"
              className={cn(
                'flex h-12 items-center justify-center gap-2 rounded-md border border-slate-300 text-base font-semibold text-ink',
                focusRing,
              )}
            >
              <Phone className="h-4 w-4 text-gold-600" aria-hidden />
              Call {business.phoneDisplay}
            </a>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
