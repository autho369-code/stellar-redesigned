import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone, ArrowRight, ArrowUpRight } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';

const contactDetails = [
  {
    title: 'Office Address',
    lines: ['5107 N Western Ave, Suite 1S', 'Chicago, Illinois 60625'],
    href: 'https://maps.google.com/?q=5107+N+Western+Ave+Suite+1S+Chicago+IL+60625',
    linkLabel: 'Get Directions',
  },
  {
    title: 'Phone',
    lines: ['773.728.0652'],
    href: 'tel:7737280652',
    linkLabel: 'Call Us',
    sub: 'Mon-Fri 9am-5pm CT',
  },
  {
    title: 'Email',
    lines: ['mirsad@stellarpropertygroup.com'],
    href: 'mailto:mirsad@stellarpropertygroup.com',
    linkLabel: 'Send Email',
    sub: 'We respond within 24 hours',
  },
  {
    title: 'Office Hours',
    lines: ['Monday - Friday: 9:00 AM - 5:00 PM', 'Saturday - Sunday: Closed'],
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

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative bg-paper overflow-hidden border-b border-slate-200">
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
                Get in Touch
              </p>
              <h1 className="font-display font-light text-5xl lg:text-6xl xl:text-7xl text-ink leading-[1.04] text-balance">
                Contact <em className="font-medium text-gold-600">us.</em>
              </h1>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Ready to discuss your property management needs? We&rsquo;d love to
                hear from you. Reach out for a free, no-obligation quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Form + Info ────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-16">
            {/* Left: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right: Contact details as definition rows */}
            <div className="lg:col-span-5">
              <div className="border-t border-slate-200">
                {contactDetails.map(({ title, lines, href, linkLabel, sub }) => (
                  <div key={title} className="py-7 border-b border-slate-200">
                    <p className="text-[10px] uppercase tracking-luxe text-slate-500 mb-3">{title}</p>
                    {lines.map((line) =>
                      href ? (
                        <a
                          key={line}
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="block font-display text-lg text-ink hover:text-gold-600 transition-colors leading-snug"
                        >
                          {line}
                        </a>
                      ) : (
                        <p key={line} className="font-display text-lg text-ink leading-snug">{line}</p>
                      )
                    )}
                    {sub && <p className="text-xs text-slate-500 font-light mt-2">{sub}</p>}
                    {href && linkLabel && (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-2 text-[10px] uppercase tracking-luxe text-gold-600 hover:text-gold-500 mt-3 transition-colors"
                      >
                        {linkLabel} <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {/* Existing Client Portal — dark panel, portals treatment */}
              <div className="bg-ink text-paper p-9 lg:p-10 mt-12">
                <p className="eyebrow text-gold-300 mb-5">Existing Clients</p>
                <p className="text-sm text-paper/70 font-light leading-relaxed mb-8">
                  Access your owner/resident portal to make payments, submit
                  requests, and view documents.
                </p>
                <a
                  href="https://stellarpropertygrp.appfolio.com/connect/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] uppercase tracking-luxe text-gold-300 hover:text-gold-200 transition-colors"
                >
                  AppFolio Portal <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Emergency Contact ──────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-ivory-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
                <span className="accent-rule" />
                24/7 Response
              </p>
              <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08]">
                Emergency after <em className="font-medium text-gold-600">hours?</em>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 self-center">
              <p className="text-slate-600 font-light text-lg leading-relaxed mb-8">
                For urgent issues like flooding, fire damage, elevator
                entrapment, or building system failures, our emergency line is
                available 24/7. A real person will answer and dispatch the
                appropriate response.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <a
                  href="tel:7737280652"
                  className="inline-flex items-center gap-3 bg-ink text-paper hover:bg-navy-700 font-medium px-9 py-4 transition-colors duration-300 text-sm tracking-wide"
                >
                  <Phone className="w-4 h-4" strokeWidth={1.25} />
                  Call 773.728.0652
                </a>
                <p className="text-[10px] uppercase tracking-luxe text-slate-500">
                  Available 24 hours a day, 7 days a week
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map Area ───────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-paper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
              <span className="accent-rule" />
              Our Location
            </p>
            <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08]">
              Visit our <em className="font-medium text-gold-600">office.</em>
            </h2>
          </div>
          <div className="border border-slate-200">
            <iframe
              title="Stellar Property Management Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.5!2d-87.6935!3d41.9745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd1e8c10fb5e5%3A0x0!2s5107+N+Western+Ave%2C+Chicago%2C+IL+60625!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full block"
            />
          </div>
        </div>
      </section>

      {/* ── Quick Links ────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="border-t border-slate-200">
            {[
              {
                n: '01',
                title: 'Explore Our Services',
                desc: 'Learn about our full range of property management solutions for condominiums, HOAs, and townhome communities.',
                href: '/services',
                label: 'View Services',
              },
              {
                n: '02',
                title: 'About Stellar Property Management',
                desc: "Discover our story, values, and the credentials that make us Chicago's trusted property management partner since 2007.",
                href: '/about',
                label: 'Learn More',
              },
            ].map(({ n, title, desc, href, label }) => (
              <Link
                key={n}
                to={href}
                className="group grid lg:grid-cols-12 gap-4 lg:gap-8 items-baseline py-10 lg:py-12 border-b border-slate-200 transition-colors duration-300 hover:bg-ivory-50 lg:px-6 lg:-mx-6"
              >
                <span className="lg:col-span-1 font-display font-light text-2xl text-gold-500 select-none">
                  {n}
                </span>
                <h3 className="lg:col-span-4 font-display text-2xl lg:text-3xl text-ink group-hover:text-navy-700 transition-colors duration-300">
                  {title}
                </h3>
                <p className="lg:col-span-6 text-slate-600 font-light leading-relaxed">{desc}</p>
                <span className="lg:col-span-1 justify-self-start lg:justify-self-end self-center inline-flex items-center gap-2 text-[10px] uppercase tracking-luxe text-gold-600">
                  {label} <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
