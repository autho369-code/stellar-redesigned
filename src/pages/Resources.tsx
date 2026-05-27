import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  CreditCard, AlertTriangle, Users, MessageSquare, ArrowRight,
  ExternalLink, ChevronDown, HelpCircle, CheckCircle2, Landmark,
} from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import { CTASection } from '../components/ui/CTASection';
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
    q: "Where can I find my association's governing documents?",
    a: 'Governing documents including bylaws, declarations, and rules are available in the document section of your AppFolio portal. Contact your property manager if you need assistance locating specific documents.',
  },
  {
    q: 'How do I get access to the resident portal?',
    a: "New residents receive portal invitations during onboarding. If you haven't received yours or need a new invitation, contact our office and we'll send one to your registered email address within one business day.",
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
    icon: CreditCard,
    title: 'Make a Payment',
    desc: 'Pay assessments, dues, or fees through the secure AppFolio portal.',
    action: 'portal' as const,
  },
  {
    icon: AlertTriangle,
    title: 'Report a Violation',
    desc: 'Submit a formal violation report for your community.',
    action: 'violation' as const,
  },
  {
    icon: Users,
    title: 'Board Nomination',
    desc: 'Apply to serve on your condominium or HOA board.',
    action: 'nomination' as const,
  },
  {
    icon: MessageSquare,
    title: 'Contact Management',
    desc: 'Reach out to our team with questions or requests.',
    action: 'contact' as const,
  },
];

export default function Resources() {
  const [activeTab, setActiveTab] = useState<ActiveTab>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleQuickLink = (action: string) => {
    if (action === 'violation' || action === 'nomination') {
      setActiveTab(action);
      setTimeout(() => {
        document.getElementById('forms-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const cardClass =
    'group flex flex-col rounded-2xl border border-ink-100 bg-white p-7 text-left shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-card-hover';

  return (
    <>
      <Helmet>
        <title>Owner & Resident Resources | Stellar Property Management</title>
        <meta
          name="description"
          content="Access owner and resident resources from Stellar Property Management. Make payments, report violations, submit board nominations, and find answers to common questions."
        />
        <link rel="canonical" href="https://stellarpropertygroup.com/resources" />
      </Helmet>

      <PageHero
        eyebrow="Owner & Resident Portal"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Resources' }]}
        title="Owner & resident resources"
        description="Everything you need to manage your account, submit forms, and stay connected with your community — all in one place."
      />

      {/* Quick links */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Quick Links"
            title="What can we help you with?"
            description="Select an option below to get started."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map(({ icon: Icon, title, desc, action }) => {
              const inner = (
                <>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-ink-900">{title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{desc}</p>
                </>
              );

              if (action === 'portal') {
                return (
                  <a
                    key={title}
                    href="https://stellarpropertygrp.appfolio.com/connect/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClass}
                  >
                    {inner}
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                      Open Portal <ExternalLink className="h-3.5 w-3.5" />
                    </span>
                  </a>
                );
              }

              if (action === 'contact') {
                return (
                  <Link key={title} to="/contact" className={cardClass}>
                    {inner}
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                      Contact Us <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                );
              }

              return (
                <button key={title} onClick={() => handleQuickLink(action)} className={cardClass}>
                  {inner}
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                    Open Form <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bank Bill Pay */}
      <section id="bill-pay" className="scroll-mt-24 bg-white py-20 lg:py-28">
        <div className="container-x">
          <div className="grid items-start gap-10 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-gold-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-gold-600">
                <CheckCircle2 className="h-4 w-4" />
                No Processing Fees
              </span>
              <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-ink-900 sm:text-4xl">
                Free Assessment Payment Option: Bank Bill Pay
              </h2>
              <p className="mt-4 leading-relaxed text-ink-500">
                Owners are encouraged to use their personal bank's Bill Pay service to pay
                monthly assessments. This is usually the easiest way to avoid credit card or
                online processing fees.
              </p>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-ink-100 bg-ink-50 p-7 shadow-soft sm:p-9">
                <h3 className="flex items-center gap-3 font-display text-lg font-bold text-ink-900">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-white">
                    <Landmark className="h-5 w-5" />
                  </span>
                  When setting up Bill Pay, please use:
                </h3>
                <dl className="mt-6 divide-y divide-ink-200/70">
                  <div className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-6">
                    <dt className="w-44 shrink-0 text-xs font-bold uppercase tracking-[0.12em] text-ink-400">Payee</dt>
                    <dd className="text-sm font-medium text-ink-800">"Your Association Name"</dd>
                  </div>
                  <div className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-6">
                    <dt className="w-44 shrink-0 text-xs font-bold uppercase tracking-[0.12em] text-ink-400">Mailing Address</dt>
                    <dd className="text-sm font-medium text-ink-800">5107 N. Western Avenue, Suite 1S, Chicago, IL 60625</dd>
                  </div>
                  <div className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-6">
                    <dt className="w-44 shrink-0 text-xs font-bold uppercase tracking-[0.12em] text-ink-400">Memo</dt>
                    <dd className="text-sm font-medium text-ink-800">Association 4-number address (for example "1740") and Unit Number ###</dd>
                  </div>
                </dl>
                <div className="mt-6 space-y-3 border-t border-ink-200/70 pt-6 text-sm leading-relaxed text-ink-500">
                  <p>
                    Your bank will mail the payment directly to Stellar Property Management.
                    Please allow enough mailing time so your assessment is received before the
                    due date.
                  </p>
                  <p>
                    Credit card or online payment processing fees, if any, are charged directly
                    by the payment processor and are not retained by Stellar Property Management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forms */}
      <section id="forms-section" className="scroll-mt-24 bg-ink-50 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Online Forms"
            title="Submit a form"
            description="Select a form below to get started. All submissions are sent directly to our management team."
          />

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            {[
              { key: 'violation' as const, icon: AlertTriangle, label: 'Violation Report' },
              { key: 'nomination' as const, icon: Users, label: 'Board Nomination' },
            ].map(({ key, icon: Icon, label }) => (
              <button
                key={key}
                onClick={() => setActiveTab(activeTab === key ? null : key)}
                className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-semibold transition-all duration-200 ${
                  activeTab === key
                    ? 'bg-brand-600 text-white shadow-lift'
                    : 'border border-ink-200 bg-white text-ink-700 hover:border-brand-300 hover:text-brand-700'
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
          </div>

          <div className="mt-8">
            {activeTab === 'violation' && <ViolationReportForm />}
            {activeTab === 'nomination' && <BoardNominationForm />}

            {!activeTab && (
              <div className="rounded-2xl border border-dashed border-ink-200 bg-white py-16 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-50">
                  <HelpCircle className="h-7 w-7 text-brand-400" />
                </div>
                <p className="text-sm text-ink-500">
                  Select a form above to get started, or use the quick links to access the
                  owner portal.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24 bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Answers to common owner and resident questions."
            className="mb-12"
          />
          <div className="space-y-3">
            {faqs.map(({ q, a }, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-soft"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-ink-900">{q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-ink-400 transition-transform duration-200 ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5">
                    <p className="text-sm leading-relaxed text-ink-500">{a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Can't find what you need?"
        description="Our management team is here to help. Reach out and we'll get you the answers or resources you need."
        primaryText="Contact Us"
      />
    </>
  );
}
