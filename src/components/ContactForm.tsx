import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, Building, Mail, MessageSquare, Phone, Send, User } from 'lucide-react';
import { submitLeadToOps } from '../lib/leads';
import { track } from '@vercel/analytics';

type InquiryType = 'quote' | 'general';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  inquiry_type: InquiryType;
  property_address: string;
  number_of_units: string;
  property_type: string;
  board_role: string;
  contract_timing: string;
  primary_concern: string;
  preferred_contact: string;
  preferred_time: string;
  reason: string;
  how_heard: string;
  message: string;
}

const emptyForm = (inquiryType: InquiryType): FormData => ({
  name: '',
  email: '',
  phone: '',
  company: '',
  inquiry_type: inquiryType,
  property_address: '',
  number_of_units: '',
  property_type: '',
  board_role: '',
  contract_timing: '',
  primary_concern: '',
  preferred_contact: 'email',
  preferred_time: '',
  reason: '',
    how_heard: '',
  message: '',
});

const inputClass = 'w-full border border-slate-300 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold-500 focus:ring-1 focus:ring-gold-500';
const labelClass = 'mb-2 flex items-center text-xs font-semibold uppercase tracking-wide text-slate-600';

export function ContactForm() {
  const [searchParams] = useSearchParams();
  const requestedInquiry = searchParams.get('inquiry');
  const initialInquiry: InquiryType = requestedInquiry === 'general' ? 'general' : 'quote';
  const leadSource = searchParams.get('source') || 'contact-page';
  const [formData, setFormData] = useState<FormData>(() => emptyForm(initialInquiry));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submittedEmail, setSubmittedEmail] = useState('');
  const isBoardInquiry = formData.inquiry_type === 'quote';

  const setInquiryType = (inquiryType: InquiryType) => {
    setFormData((current) => ({ ...current, inquiry_type: inquiryType }));
    setSubmitStatus('idle');
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const leadSummary = isBoardInquiry
      ? [
          `Property: ${formData.property_address}`,
          `Type: ${formData.property_type}`,
          `Units: ${formData.number_of_units}`,
          `Board role: ${formData.board_role}`,
          `Contract timing: ${formData.contract_timing || 'Not provided'}`,
          `Primary concern: ${formData.primary_concern}`,
          `Preferred contact: ${formData.preferred_contact}`,
          `Preferred time: ${formData.preferred_time || 'Not provided'}`,
          `What is prompting the search: ${formData.reason || 'Not provided'}`,
          `How they found Stellar: ${formData.how_heard || 'Not provided'}`,
          `Phone: ${formData.phone || 'Not provided'}`,
          `Message: ${formData.message || 'No additional message'}`,
          `Landing page: ${window.location.href}`,
          `Referrer: ${document.referrer || 'Direct / unavailable'}`,
        ].join('\n')
      : `Phone: ${formData.phone || 'Not provided'}\nMessage: ${formData.message}`;

    try {
      const [emailResponse] = await Promise.all([
        fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
            ...formData,
            subject: isBoardInquiry
              ? `Board Consultation — ${formData.company} [${leadSource}]`
              : `Website Inquiry — ${formData.name} [${leadSource}]`,
            lead_source: leadSource,
            landing_page: window.location.href,
            referrer: document.referrer || 'Direct / unavailable',
            utm_source: searchParams.get('utm_source') || '',
            utm_medium: searchParams.get('utm_medium') || '',
            utm_campaign: searchParams.get('utm_campaign') || '',
            from_name: formData.name,
            replyto: formData.email,
          }),
        }),
        submitLeadToOps({
          name: formData.name,
          email: formData.email,
          building: formData.company || formData.property_address,
          source: `contact-${formData.inquiry_type}-${leadSource}`,
          transcript: leadSummary,
        }),
      ]);

      if (!emailResponse.ok) throw new Error('Form submission failed');

      track('Proposal Form Submitted', {
        inquiryType: formData.inquiry_type,
        leadSource,
        propertyType: formData.property_type || 'not-provided',
      });
      setSubmittedEmail(formData.email);
      setSubmitStatus('success');
      setFormData(emptyForm(formData.inquiry_type));
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  return (
    <div className="border border-slate-200 bg-paper p-7 sm:p-9 lg:p-11">
      <div className="mb-8">
        <p className="eyebrow mb-4 text-gold-600">Start here</p>
        <h2 className="font-display text-3xl font-light text-ink sm:text-4xl">
          {isBoardInquiry ? 'Request a board consultation.' : 'Send a general inquiry.'}
        </h2>
        <p className="mt-4 max-w-2xl font-light leading-relaxed text-slate-600">
          {isBoardInquiry
            ? 'Tell us about your association so we can review the property and prepare for a focused 20-minute conversation.'
            : 'Use this path for partnerships, vendors, employment, and other non-management questions.'}
        </p>
      </div>

      <div className="mb-9 grid grid-cols-2 gap-px border border-slate-200 bg-slate-200" aria-label="Choose inquiry type">
        <button
          type="button"
          onClick={() => setInquiryType('quote')}
          aria-pressed={isBoardInquiry}
          className={`px-4 py-4 text-sm font-medium transition-colors ${isBoardInquiry ? 'bg-ink text-paper' : 'bg-white text-slate-600 hover:text-ink'}`}
        >
          Board / Proposal
        </button>
        <button
          type="button"
          onClick={() => setInquiryType('general')}
          aria-pressed={!isBoardInquiry}
          className={`px-4 py-4 text-sm font-medium transition-colors ${!isBoardInquiry ? 'bg-ink text-paper' : 'bg-white text-slate-600 hover:text-ink'}`}
        >
          General Inquiry
        </button>
      </div>

      {submitStatus === 'success' && (
        <div role="status" className="mb-7 border border-green-200 bg-green-50 p-5 text-green-900">
          <p className="font-semibold">Your request has been received.</p>
          <p className="mt-1 text-sm">We will follow up at {submittedEmail} within one business day.</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div role="alert" className="mb-7 border border-red-200 bg-red-50 p-5 text-red-900">
          <p className="font-semibold">The form could not be submitted.</p>
          <p className="mt-1 text-sm">Please call 773.728.0652 or email mirsad@stellarpropertygroup.com.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-7">
        <input type="hidden" name="inquiry_type" value={formData.inquiry_type} />

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClass}><User className="mr-2 h-4 w-4" />Full name *</label>
            <input id="name" name="name" required autoComplete="name" value={formData.name} onChange={handleChange} className={inputClass} placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}><Mail className="mr-2 h-4 w-4" />Email *</label>
            <input type="email" id="email" name="email" required autoComplete="email" value={formData.email} onChange={handleChange} className={inputClass} placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}><Phone className="mr-2 h-4 w-4" />Phone</label>
            <input type="tel" id="phone" name="phone" autoComplete="tel" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="(773) 555-0123" />
          </div>
          <div>
            <label htmlFor="company" className={labelClass}><Building className="mr-2 h-4 w-4" />{isBoardInquiry ? 'Association name' : 'Organization'}</label>
            <input id="company" name="company" value={formData.company} onChange={handleChange} className={inputClass} placeholder={isBoardInquiry ? 'Optional — you can leave this blank' : 'Optional'} />
          </div>
        </div>

        {isBoardInquiry && (
          <>
            <div className="border-t border-slate-200 pt-7">
              <h3 className="font-display text-xl text-ink">About your association</h3>
              <p className="mt-2 text-sm font-light text-slate-600">These details let us research the property before we call.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="md:col-span-2">
                <label htmlFor="property_address" className={labelClass}>Property address</label>
                <input id="property_address" name="property_address" value={formData.property_address} onChange={handleChange} className={inputClass} placeholder="Street address, city and ZIP" />
              </div>
              <div>
                <label htmlFor="property_type" className={labelClass}>Property type</label>
                <select id="property_type" name="property_type" value={formData.property_type} onChange={handleChange} className={inputClass}>
                  <option value="">Select one</option>
                  <option>Condominium association</option>
                  <option>Homeowners association</option>
                  <option>Townhome association</option>
                  <option>High-rise condominium</option>
                  <option>Other community association</option>
                </select>
              </div>
              <div>
                <label htmlFor="number_of_units" className={labelClass}>Number of units</label>
                <input type="number" id="number_of_units" name="number_of_units" min="1" value={formData.number_of_units} onChange={handleChange} className={inputClass} placeholder="Approximate is fine" />
              </div>
              <div>
                <label htmlFor="board_role" className={labelClass}>Your role *</label>
                <select id="board_role" name="board_role" value={formData.board_role} onChange={handleChange} className={inputClass}>
                  <option value="">Select one</option>
                  <option>Board president</option>
                  <option>Board officer or director</option>
                  <option>Committee member</option>
                  <option>Unit owner</option>
                  <option>Developer or authorized representative</option>
                </select>
              </div>
              <div>
                <label htmlFor="contract_timing" className={labelClass}>Current contract timing</label>
                <select id="contract_timing" name="contract_timing" value={formData.contract_timing} onChange={handleChange} className={inputClass}>
                  <option value="">Not sure / prefer to discuss</option>
                  <option>Within 30 days</option>
                  <option>1–3 months</option>
                  <option>3–6 months</option>
                  <option>6–12 months</option>
                  <option>More than 12 months</option>
                  <option>Currently self-managed</option>
                </select>
              </div>
              <div>
                <label htmlFor="primary_concern" className={labelClass}>Primary concern</label>
                <select id="primary_concern" name="primary_concern" value={formData.primary_concern} onChange={handleChange} className={inputClass}>
                  <option value="">Select one</option>
                  <option>Financial reporting or budgeting</option>
                  <option>Manager responsiveness</option>
                  <option>Maintenance and vendors</option>
                  <option>Capital project planning</option>
                  <option>Board governance or compliance</option>
                  <option>Transition from current manager</option>
                  <option>General management proposal</option>
                </select>
              </div>
              <div>
                <label htmlFor="preferred_contact" className={labelClass}>Preferred contact *</label>
                <select id="preferred_contact" name="preferred_contact" required value={formData.preferred_contact} onChange={handleChange} className={inputClass}>
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="preferred_time" className={labelClass}>Best day or time to reach you</label>
                <input id="preferred_time" name="preferred_time" value={formData.preferred_time} onChange={handleChange} className={inputClass} placeholder="Example: Tuesday after 3 PM" />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="reason" className={labelClass}>What is prompting the search?</label>
                <select id="reason" name="reason" value={formData.reason} onChange={handleChange} className={inputClass}>
                  <option value="">Select one — optional</option>
                  <option>Responsiveness — messages go unanswered</option>
                  <option>Follow-through — work does not get done</option>
                  <option>Financial reporting is late or unclear</option>
                  <option>Fees increased, or charges we did not expect</option>
                  <option>Our manager keeps changing</option>
                  <option>Our management company was acquired</option>
                  <option>Moving on from self-management</option>
                  <option>Developer turnover to owner control</option>
                  <option>Contract is up for renewal — reviewing options</option>
                  <option>A specific project or problem we need help with</option>
                  <option>Something else</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="how_heard" className={labelClass}>How did you find Stellar?</label>
                <select id="how_heard" name="how_heard" value={formData.how_heard} onChange={handleChange} className={inputClass}>
                  <option value="">Select one — optional</option>
                  <option>Google or other search</option>
                  <option>ChatGPT, Claude, Perplexity or another AI assistant</option>
                  <option>Referral from another board</option>
                  <option>Referral from our attorney</option>
                  <option>Referral from a vendor or contractor</option>
                  <option>CAI or CAI Illinois</option>
                  <option>We read one of your board guides</option>
                  <option>Someone at Stellar</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </>
        )}

        <div>
          <label htmlFor="message" className={labelClass}><MessageSquare className="mr-2 h-4 w-4" />{isBoardInquiry ? 'Anything else we should know?' : 'Message *'}</label>
          <textarea id="message" name="message" required={!isBoardInquiry} value={formData.message} onChange={handleChange} rows={isBoardInquiry ? 4 : 6} className={`${inputClass} resize-none`} placeholder={isBoardInquiry ? 'Optional context about your board, building, or current management concerns' : 'How can we help?'} />
        </div>

        {isBoardInquiry && (
          <div className="border border-slate-200 bg-ivory-50 p-5">
            <p className="mb-2 text-[10px] uppercase tracking-luxe text-slate-500">Confidential</p>
            <p className="text-sm font-light leading-relaxed text-slate-600">
              Most boards contact us while still under contract with their
              current manager. That is the normal case, not an awkward one. We
              will not contact your existing management company, your board, or
              anyone at your association. Only the name and email fields are
              required — leave the rest blank if you would rather not identify
              the building yet.
            </p>
          </div>
        )}

        <button type="submit" disabled={isSubmitting} className="flex w-full items-center justify-center gap-3 bg-gold-600 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-gold-700 disabled:cursor-not-allowed disabled:bg-slate-400">
          {isSubmitting ? (
            <><span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />Submitting…</>
          ) : (
            <><Send className="h-5 w-5" />{isBoardInquiry ? 'Request My Board Consultation' : 'Send Inquiry'}</>
          )}
        </button>

        <p className="text-center text-xs leading-relaxed text-slate-600">
          By submitting, you agree that Stellar may contact you about this request. See our <Link to="/privacy-policy" className="text-gold-600 underline underline-offset-2 hover:text-gold-500">privacy policy</Link>.
        </p>
      </form>

      <div className="mt-8 border-t border-slate-200 pt-7 text-sm text-slate-600">
        <p className="mb-6 border-l-2 border-gold-500 pl-4 font-medium leading-relaxed text-ink">A licensed community association manager will respond within one business day.</p>
        <p className="font-medium text-ink">Already live in a Stellar-managed community?</p>
        <p className="mt-2 font-light leading-relaxed">Payments, maintenance requests, documents, and account questions belong in the secure resident portal.</p>
        <a href="https://stellarpropertygrp.appfolio.com/connect/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-gold-600 hover:text-gold-500">
          Open AppFolio Portal <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
