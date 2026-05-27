import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  MapPin, Phone, Mail, Clock, ArrowRight, Building2,
  AlertTriangle, ExternalLink, ChevronRight,
} from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import { ContactForm } from '../components/ContactForm';

const contactCards = [
  {
    icon: MapPin,
    title: 'Office Address',
    lines: ['5107 N Western Ave, Suite 1S', 'Chicago, Illinois 60625'],
    href: 'https://maps.google.com/?q=5107+N+Western+Ave+Suite+1S+Chicago+IL+60625',
    linkLabel: 'Get Directions',
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: ['773.728.0652'],
    href: 'tel:7737280652',
    linkLabel: 'Call Us',
    sub: 'Mon–Fri 9am–5pm CT',
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['mirsad@stellarpropertygroup.com'],
    href: 'mailto:mirsad@stellarpropertygroup.com',
    linkLabel: 'Send Email',
    sub: 'We respond within 24 hours',
  },
  {
    icon: Clock,
    title: 'Office Hours',
    lines: ['Monday – Friday: 9:00 AM – 5:00 PM', 'Saturday – Sunday: Closed'],
    sub: '24/7 Emergency Line Available',
  },
];

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Stellar Property Management | Get a Free Property Management Quote</title>
        <meta
          name="description"
          content="Contact Stellar Property Management for a free property management quote. Located at 5107 N Western Ave, Suite 1S, Chicago, IL 60625. Call 773.728.0652 or email mirsad@stellarpropertygroup.com."
        />
        <link rel="canonical" href="https://stellarpropertygroup.com/contact" />
      </Helmet>

      <PageHero
        eyebrow="Get in Touch"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
        title="Let's talk about your community"
        description="Ready to discuss your property management needs? Reach out for a free, no-obligation quote — we'd love to hear from you."
      />

      {/* Form + Info */}
      <section className="bg-ink-50 py-20 lg:py-28">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            <div className="space-y-5 lg:col-span-2">
              {contactCards.map(({ icon: Icon, title, lines, href, linkLabel, sub }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-ink-100 bg-white p-6 shadow-soft"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink-400">
                        {title}
                      </p>
                      <div className="mt-1.5">
                        {lines.map((line) =>
                          href ? (
                            <a
                              key={line}
                              href={href}
                              target={href.startsWith('http') ? '_blank' : undefined}
                              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="block text-sm font-medium text-ink-800 transition-colors hover:text-brand-600"
                            >
                              {line}
                            </a>
                          ) : (
                            <p key={line} className="text-sm font-medium text-ink-800">{line}</p>
                          )
                        )}
                      </div>
                      {sub && <p className="mt-1 text-xs text-ink-400">{sub}</p>}
                      {href && linkLabel && (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand-600 hover:text-brand-700"
                        >
                          {linkLabel}
                          <ChevronRight className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Existing client portal */}
              <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-brand-700 to-brand-950 p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-200">
                    <Building2 className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-300">
                      Existing Clients
                    </p>
                    <p className="mt-1.5 text-sm font-medium text-brand-100">
                      Access your owner/resident portal to make payments, submit requests,
                      and view documents.
                    </p>
                    <a
                      href="https://stellarpropertygrp.appfolio.com/connect/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-xs font-semibold text-brand-700 transition-colors hover:bg-brand-50"
                    >
                      AppFolio Portal
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-x">
          <div className="rounded-3xl border border-red-100 bg-red-50 p-8 lg:p-10">
            <div className="flex flex-col items-start gap-6 md:flex-row">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-100 text-red-600">
                <AlertTriangle className="h-7 w-7" />
              </span>
              <div className="flex-1">
                <h2 className="font-display text-2xl font-bold text-ink-900 lg:text-3xl">
                  Emergency after hours?
                </h2>
                <p className="mt-3 leading-relaxed text-ink-600">
                  For urgent issues like flooding, fire damage, elevator entrapment, or
                  building system failures, our emergency line is available 24/7. A real
                  person will answer and dispatch the appropriate response.
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <a
                    href="tel:7737280652"
                    className="btn inline-flex bg-red-600 px-6 py-3 text-sm text-white hover:bg-red-700"
                  >
                    <Phone className="h-4 w-4" />
                    Call 773.728.0652
                  </a>
                  <p className="text-sm text-ink-500">Available 24 hours a day, 7 days a week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-ink-50 py-20 lg:py-24">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Our Location"
            title="Visit our office"
            className="mb-10"
          />
          <div className="overflow-hidden rounded-3xl border border-ink-100 shadow-card">
            <iframe
              title="Stellar Property Management Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.5!2d-87.6935!3d41.9745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd1e8c10fb5e5%3A0x0!2s5107+N+Western+Ave%2C+Chicago%2C+IL+60625!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                to: '/services',
                title: 'Explore our services',
                desc: 'Learn about our full range of property management solutions for condominiums, HOAs, and townhome communities.',
                cta: 'View Services',
              },
              {
                to: '/about',
                title: 'About Stellar Property Management',
                desc: "Discover our story, values, and the credentials that make us Chicago's trusted property management partner since 2007.",
                cta: 'Learn More',
              },
            ].map(({ to, title, desc, cta }) => (
              <Link
                key={to}
                to={to}
                className="group rounded-2xl border border-ink-100 bg-ink-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card-hover"
              >
                <h3 className="font-display text-lg font-bold text-ink-900 transition-colors group-hover:text-brand-700">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{desc}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  {cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
