import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  CreditCard, AlertTriangle, Users, MessageSquare, ArrowRight,
  ArrowUpRight, ExternalLink, Phone, Plus
} from 'lucide-react';
import { ViolationReportForm } from '../components/ViolationReportForm';
import { BoardNominationForm } from '../components/BoardNominationForm';

type ActiveTab = 'violation' | 'nomination' | null;

const faqs = [
  {
    q: 'How do I make a payment?',
    a: 'Log in to the AppFolio resident portal to make one-time or recurring payments via bank transfer or credit card. If you need portal access, contact our office at 773.728.0652 or email mirsad@stellarpropertygroup.com.',
  },
  {
    q: 'How do I submit a maintenance request?',
    a: 'Maintenance requests can be submitted through the AppFolio portal under "Maintenance Requests." For after-hours emergencies (flooding, fire, elevator issues), call 773.728.0652 directly.',
  },
  {
    q: 'Where can I find my association\'s governing documents?',
    a: 'Governing documents including bylaws, declarations, and rules are available in the document section of your AppFolio portal. Contact your property manager if you need assistance locating specific documents.',
  },
  {
    q: 'How do I get access to the resident portal?',
    a: 'New residents receive portal invitations during onboarding. If you haven\'t received yours or need a new invitation, contact our office and we\'ll send one to your registered email address within one business day.',
  },
  {
    q: 'When are board meetings held?',
    a: 'Board meeting schedules vary by community. Check your AppFolio portal for upcoming meeting dates and agendas, or contact your dedicated property manager for the schedule.',
  },
  {
    q: 'How do I report an emergency?',
    a: 'For life-threatening emergencies, call 911 first. For building emergencies (flooding, fire damage, elevator entrapment), call our 24/7 emergency line at 773.728.0652. A real person will answer and dispatch help.',
  },
];

const quickLinks = [
  {
    n: '01',
    icon: CreditCard,
    title: 'Make a Payment',
    desc: 'Pay assessments, dues, or fees through the secure AppFolio portal.',
    cta: 'Open Portal',
    action: 'portal' as const,
  },
  {
    n: '02',
    icon: AlertTriangle,
    title: 'Report a Violation',
    desc: 'Submit a formal violation report for your community.',
    cta: 'Open Form',
    action: 'violation' as const,
  },
  {
    n: '03',
    icon: Users,
    title: 'Board Nomination',
    desc: 'Apply to serve on your condominium or HOA board.',
    cta: 'Open Form',
    action: 'nomination' as const,
  },
  {
    n: '04',
    icon: MessageSquare,
    title: 'Contact Management',
    desc: 'Reach out to our team with questions or requests.',
    cta: 'Contact Us',
    action: 'contact' as const,
  },
];

export default function Resources() {
  const [activeTab, setActiveTab] = useState<ActiveTab>(null);
  const [searchParams] = useSearchParams();
  const { hash } = useLocation();

  // Deep links:
  //   /resources?form=violation | nomination  → opens that form
  //   /resources?section=pay                  → scrolls to How to Pay
  //   /resources#bill-pay (legacy URL)        → scrolls to How to Pay
  useEffect(() => {
    const form = searchParams.get('form');
    const section = searchParams.get('section');
    if (form === 'violation' || form === 'nomination') {
      setActiveTab(form);
      setTimeout(() => {
        document.getElementById('forms-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else if (section === 'pay' || hash === '#bill-pay' || hash === '#how-to-pay') {
      setTimeout(() => {
        document.getElementById('bill-pay')?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  }, [searchParams, hash]);

  const handleQuickLink = (action: string) => {
    if (action === 'violation') {
      setActiveTab('violation');
      setTimeout(() => {
        document.getElementById('forms-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (action === 'nomination') {
      setActiveTab('nomination');
      setTimeout(() => {
        document.getElementById('forms-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      <Helmet>
        <title>Owner & Resident Resources | Stellar Property Management</title>
        <meta
          name="description"
          content="Access owner and resident resources from Stellar Property Management. Make payments, report violations, submit board nominations, and find answers to common questions."
        />
        <link rel="canonical" href="https://www.stellarpropertygroup.com/resources" />
      </Helmet>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative bg-paper overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.35] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#dfe8ef 1px, transparent 1px), linear-gradient(90deg, #dfe8ef 1px, transparent 1px)',
            backgroundSize: '96px 96px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-36 lg:pt-44 pb-16 lg:pb-20">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
                <span className="accent-rule" />
                Owner &amp; Resident Portal
              </p>
              <h1 className="font-display font-light text-5xl lg:text-6xl xl:text-7xl text-ink leading-[1.04] text-balance">
                Owner &amp; Resident
                <br />
                <em className="font-medium text-gold-600">Resources.</em>
              </h1>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Everything you need to manage your account, submit forms, and
                stay connected with your community — all in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Links ────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl mb-16">
            <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
              <span className="accent-rule" />
              Quick Links
            </p>
            <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08] mb-6">
              What can we <em className="font-medium text-gold-600">help</em> you with?
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Select an option below to get started.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
            {quickLinks.map(({ n, icon: Icon, title, desc, cta, action }) => {
              const inner = (
                <>
                  <div className="flex items-start justify-between mb-8">
                    <span className="font-display font-light text-2xl text-gold-500 select-none">{n}</span>
                    <Icon className="w-5 h-5 text-slate-400 group-hover:text-gold-600 transition-colors duration-300" strokeWidth={1.25} />
                  </div>
                  <h3 className="font-display text-xl text-ink mb-3">{title}</h3>
                  <p className="text-sm text-slate-600 font-light leading-relaxed mb-8 flex-1">{desc}</p>
                  <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-luxe text-gold-600">
                    {cta}
                    {action === 'portal' ? (
                      <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.25} />
                    ) : (
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.25} />
                    )}
                  </span>
                </>
              );

              const cellClass =
                'group bg-white p-9 flex flex-col text-left transition-colors duration-300 hover:bg-ivory-50';

              if (action === 'portal') {
                return (
                  <a
                    key={title}
                    href="https://stellarpropertygrp.appfolio.com/connect/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cellClass}
                  >
                    {inner}
                  </a>
                );
              }

              if (action === 'contact') {
                return (
                  <Link key={title} to="/contact" className={cellClass}>
                    {inner}
                  </Link>
                );
              }

              return (
                <button key={title} onClick={() => handleQuickLink(action)} className={cellClass}>
                  {inner}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Bill Pay (free, non-AppFolio option) ───────────────── */}
      <span id="how-to-pay" aria-hidden className="block h-0" />
      <section id="bill-pay" className="py-24 lg:py-32 bg-ivory-100 border-y border-slate-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-14">
            <div className="lg:col-span-5">
              <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
                <span className="accent-rule" />
                Paying Your Assessments
              </p>
              <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08] mb-8">
                Free Assessment Payment Option:
                <br />
                Bank <em className="font-medium text-gold-600">Bill Pay.</em>
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-10">
                Owners are encouraged to use their personal bank&rsquo;s Bill Pay
                service to pay monthly assessments. This is usually the easiest
                way to avoid credit card or online processing fees.
              </p>
              <p className="text-sm text-slate-600 font-light leading-relaxed mb-10">
                Prefer to pay online instead? Use the secure AppFolio portal for
                one-time payments or autopay.
              </p>
              <a
                href="https://stellarpropertygrp.appfolio.com/connect/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-slate-300 text-ink hover:border-gold-500 hover:text-gold-600 font-medium px-9 py-4 transition-colors duration-300 text-sm tracking-wide"
              >
                Open the Online Portal <ExternalLink className="w-4 h-4" strokeWidth={1.25} />
              </a>
            </div>

            <div className="lg:col-span-7">
              <p className="text-[10px] uppercase tracking-luxe text-slate-500 pb-4 border-b border-slate-200">
                When setting up Bill Pay, please use:
              </p>
              <dl>
                <div className="flex flex-col gap-1 py-6 sm:flex-row sm:gap-8 border-b border-slate-200">
                  <dt className="w-44 shrink-0 text-[10px] uppercase tracking-luxe text-slate-500 pt-1.5">Payee</dt>
                  <dd className="font-display text-xl text-ink">&ldquo;Your Association Name&rdquo;</dd>
                </div>
                <div className="flex flex-col gap-1 py-6 sm:flex-row sm:gap-8 border-b border-slate-200">
                  <dt className="w-44 shrink-0 text-[10px] uppercase tracking-luxe text-slate-500 pt-1.5">Mailing Address</dt>
                  <dd className="font-display text-xl text-ink">5107 N. Western Avenue, Suite 1S, Chicago, IL 60625</dd>
                </div>
                <div className="flex flex-col gap-1 py-6 sm:flex-row sm:gap-8 border-b border-slate-200">
                  <dt className="w-44 shrink-0 text-[10px] uppercase tracking-luxe text-slate-500 pt-1.5">Memo</dt>
                  <dd className="font-display text-xl text-ink">
                    Association 4-number address (for example &ldquo;1740&rdquo;) and Unit Number ###
                  </dd>
                </div>
              </dl>
              <div className="mt-8 space-y-3 text-sm text-slate-600 font-light leading-relaxed">
                <p>
                  Your bank will mail the payment directly to Stellar Property
                  Management. Please allow enough mailing time so your assessment
                  is received before the due date.
                </p>
                <p>
                  Credit card or online payment processing fees, if any, are
                  charged directly by the payment processor and are not retained
                  by Stellar Property Management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tab Forms Section ──────────────────────────────────── */}
      <section id="forms-section" className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="text-center mb-14">
            <p className="eyebrow text-gold-600 mb-6 flex items-center justify-center gap-4">
              <span className="accent-rule" />
              Online Forms
              <span className="accent-rule" />
            </p>
            <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08] mb-6">
              Submit a <em className="font-medium text-gold-600">form.</em>
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed max-w-xl mx-auto">
              Select a form below to get started. All submissions are sent directly to our management team.
            </p>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <button
              onClick={() => setActiveTab(activeTab === 'violation' ? null : 'violation')}
              className={`flex-1 flex items-center justify-center gap-3 px-9 py-4 font-medium text-sm tracking-wide transition-colors duration-300 ${
                activeTab === 'violation'
                  ? 'bg-ink text-paper'
                  : 'border border-slate-300 text-ink hover:border-gold-500 hover:text-gold-600'
              }`}
            >
              <AlertTriangle className="w-4 h-4" strokeWidth={1.25} />
              Violation Report
            </button>
            <button
              onClick={() => setActiveTab(activeTab === 'nomination' ? null : 'nomination')}
              className={`flex-1 flex items-center justify-center gap-3 px-9 py-4 font-medium text-sm tracking-wide transition-colors duration-300 ${
                activeTab === 'nomination'
                  ? 'bg-ink text-paper'
                  : 'border border-slate-300 text-ink hover:border-gold-500 hover:text-gold-600'
              }`}
            >
              <Users className="w-4 h-4" strokeWidth={1.25} />
              Board Nomination
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'violation' && <ViolationReportForm />}
          {activeTab === 'nomination' && <BoardNominationForm />}

          {!activeTab && (
            <div className="text-center py-16 border border-slate-200 bg-ivory-50">
              <p className="text-slate-500 text-sm font-light max-w-md mx-auto px-6">
                Select a form above to get started, or use the quick links to access the owner portal.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── FAQ Section ────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-ivory-100 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl mb-16">
            <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
              <span className="accent-rule" />
              FAQ
            </p>
            <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08] mb-6">
              Frequently asked <em className="font-medium text-gold-600">questions.</em>
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Answers to common owner and resident questions.
            </p>
          </div>

          <div className="border-t border-slate-200">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group border-b border-slate-200">
                <summary className="flex items-center justify-between gap-6 py-7 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="font-display text-lg lg:text-xl text-ink group-open:text-gold-600 transition-colors">{q}</h3>
                  <Plus className="w-5 h-5 text-gold-500 flex-shrink-0 transition-transform duration-300 group-open:rotate-45" strokeWidth={1.25} />
                </summary>
                <p className="pb-8 text-slate-600 leading-relaxed font-light max-w-3xl">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="relative py-28 lg:py-36 bg-ink text-paper overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#f6f8fa 1px, transparent 1px), linear-gradient(90deg, #f6f8fa 1px, transparent 1px)',
            backgroundSize: '96px 96px',
          }}
          aria-hidden
        />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <p className="eyebrow text-gold-300 mb-8 flex items-center justify-center gap-4">
            <span className="accent-rule" /> Need Help? <span className="accent-rule" />
          </p>
          <h2 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl leading-[1.06] mb-8 text-balance">
            Can&rsquo;t find what
            <br />
            you <em className="font-medium text-gold-300">need?</em>
          </h2>
          <p className="text-paper/55 text-lg font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            Our management team is here to help. Reach out and we&rsquo;ll get you the answers or resources you need.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-white font-medium px-10 py-4 transition-colors duration-300 text-sm tracking-wide"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:7737280652"
              className="inline-flex items-center gap-3 border border-paper/25 text-paper hover:border-gold-400 hover:text-gold-300 font-medium px-10 py-4 transition-colors duration-300 text-sm tracking-wide"
            >
              <Phone className="w-4 h-4" strokeWidth={1.25} /> Call 773.728.0652
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
