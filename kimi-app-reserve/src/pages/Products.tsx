import { useState, type FormEvent } from 'react';
import PageShell from '@/components/PageShell';
import FindYourZone from '@/sections/FindYourZone';
import { BOOKING_URL, hrefPage } from '@/lib/sitePaths';
import { supabase } from '@/lib/supabase';
import { ArrowRight } from 'lucide-react';

const FALLBACK_EMAIL = 'zubiaml4l@gmail.com';

function looksLikeEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

type Product = {
  name: string;
  description: string;
  accent: 'teal' | 'coral';
  flagship?: boolean;
  detailLink?: { label: string; page: string };
};

type ProductGroup = {
  title: string;
  subtitle: string;
  products: Product[];
};

type Bundle = {
  title: string;
  audience: string;
  body: string;
  includes: string;
  accent: 'teal' | 'coral';
};

const bundles: Bundle[] = [
  {
    title: 'The Builder Suite',
    audience: 'For contractors, trades, and anyone who quotes work on site.',
    body: 'Find the job before your competitors, quote it on the spot from your own numbers, and never lose a contact. Bidding AI, Lead AI, and Front Desk AI, working together from the driveway to the deal.',
    includes: 'Bidding AI, Lead AI, Front Desk AI',
    accent: 'teal',
  },
  {
    title: 'The Advisor Suite',
    audience: 'For coaches, consultants, and professional services who handle confidential work.',
    body: 'Private AI for people who cannot risk client data in the cloud. Turn your method into software, read and organize sensitive documents, and make every first impression count. Coaching AI, Document AI, and Front Desk AI, private by design.',
    includes: 'Coaching AI, Document AI, Front Desk AI',
    accent: 'coral',
  },
  {
    title: 'The Growth Suite',
    audience: 'For real estate, sales-driven businesses, and anyone who runs on leads.',
    body: 'Capture every lead, nurture it in your voice, and know exactly who to work today. Dr. Data Pulse, your marketing engine, and Front Desk AI, turning contacts into closed deals.',
    includes: 'Dr. Data Pulse, Content AI, SEO & GEO AI, Review AI, Follow-Up AI, Front Desk AI',
    accent: 'teal',
  },
];

const productGroups: ProductGroup[] = [
  {
    title: 'Dr. Data Private AI',
    subtitle: 'Runs on your machine. Your data never leaves your building.',
    products: [
      {
        name: 'Lead Watch',
        description:
          'Finds your next customer from public signals: a permit filed, a business formed, a home sold, and hands you a morning call list. Runs on your machine. Your list is yours alone.',
        accent: 'teal',
        flagship: true,
        detailLink: { label: 'See how Lead AI works', page: 'lead-ai' },
      },
      {
        name: 'Bidding AI',
        description:
          "Quotes from your own past jobs, not a generic calculator. Your pricing, your margins, your history, and none of it ever leaves your shop to train a competitor's estimate.",
        accent: 'coral',
        flagship: true,
        detailLink: { label: 'See how Bidding AI works', page: 'bidding-ai' },
      },
      {
        name: 'Coaching AI',
        description:
          'Turns your coaching method into software your clients use between sessions. Your process, your voice, your client records, all private, all yours. Built for any coach with a method worth scaling.',
        accent: 'teal',
        flagship: true,
        detailLink: { label: 'See how Coaching AI works', page: 'coaching-ai' },
      },
      {
        name: 'Document AI',
        description:
          "Reads the PDFs, forms, and intake you retype every morning. Your clients' information is structured and searchable, and it never touches a cloud you don't control.",
        accent: 'coral',
      },
      {
        name: 'Briefing AI',
        description:
          "One page every morning on your field, written in your voice. Runs locally, so what you're tracking and why stays your business.",
        accent: 'teal',
      },
      {
        name: 'Call Prep AI',
        description:
          "Walk into every meeting knowing exactly who you're about to talk to. Your relationship history, surfaced, and kept in your building.",
        accent: 'coral',
      },
      {
        name: 'Intake AI',
        description:
          'Turns new-client paperwork into clean records automatically. Sensitive intake data is structured on your machine, never shipped out.',
        accent: 'teal',
      },
      {
        name: 'Records AI',
        description:
          'Makes your files answer questions. Ask your own records anything, and the answers come from your data, on your hardware, seen by no one else.',
        accent: 'coral',
      },
      {
        name: 'Scheduling AI',
        description:
          "Handles the booking back-and-forth so you don't. Runs on your systems, tied to your calendar, not a third party's.",
        accent: 'teal',
      },
      {
        name: 'Reminder AI',
        description:
          'Nudges your clients in your voice so nothing slips. Your client list and your tone stay private to you.',
        accent: 'coral',
      },
    ],
  },
  {
    title: 'Dr. Data Pulse',
    subtitle:
      'One intelligent home for your whole business. It watches every lead source, your website, your social, your pipeline, scores what is hot, and shows you who to work next and how your business is really doing. Your data, your dashboard, yours to own.',
    products: [
      {
        name: 'Pulse',
        description:
          'Scores your leads and tells you who to work today. Marketing data lives in a database you own, never shared, never sold.',
        accent: 'teal',
        flagship: true,
        detailLink: { label: 'See how AgentPulse works', page: 'agentpulse' },
      },
      {
        name: 'Follow-Up AI',
        description:
          'Knows who went quiet after a quote and writes the nudge. Your outreach, automated, with client details you control.',
        accent: 'coral',
      },
      {
        name: 'Marketing AI',
        description:
          'Shows which half of your marketing spend actually works, and runs your campaigns from one dashboard tied to your own website. Stop guessing where the money comes from.',
        accent: 'teal',
      },
      {
        name: 'SEO & GEO AI',
        description:
          'Makes both search engines and AI engines recommend you. Rank on Google and get cited by ChatGPT and Perplexity, with content published straight to your own website from your dashboard, because being invisible to AI search is the new being invisible.',
        accent: 'coral',
      },
      {
        name: 'Content AI',
        description:
          'Drafts your blogs and posts in your voice, built to rank and to be quoted by AI engines, and publishes them to your website in one click. Your public presence, multiplied, without hiring an agency.',
        accent: 'teal',
      },
      {
        name: 'Referral IQ',
        description:
          'Turns your networking into a system: who to connect, who owes who, where the next introduction lives.',
        accent: 'coral',
      },
      {
        name: 'Review AI',
        description:
          'Turns finished work into Google reviews and drafts your replies. Reviews are the trust signal AI engines weigh most, so this is how you get recommended.',
        accent: 'teal',
      },
      {
        name: 'Front Desk',
        description:
          'Your digital business card and contact capture. Share in one tap, and every contact lands in a system you own.',
        accent: 'coral',
      },
    ],
  },
];

const expertiseAreas = [
  'Machine Learning Governance & Reliability',
  'Decision Intelligence Architecture',
  'Applied AI Research & Model Evaluation',
  'Data Readiness & Knowledge Engineering',
  'AI Adoption & Organizational Enablement',
  'Private AI Systems Design',
];

const accentStyles = {
  teal: {
    border: 'border-teal',
    bg: 'bg-teal/10',
    text: 'text-teal',
  },
  coral: {
    border: 'border-coral',
    bg: 'bg-coral/10',
    text: 'text-coral',
  },
};

export default function Products() {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [validationError, setValidationError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setValidationError('');

    const description = message.trim();
    const trimmedEmail = email.trim();

    if (!description) {
      setValidationError('Please tell us what eats your week.');
      return;
    }
    if (!trimmedEmail || !looksLikeEmail(trimmedEmail)) {
      setValidationError('Please enter a valid email address.');
      return;
    }

    setFormStatus('submitting');

    const leadId = crypto.randomUUID();

    const { error: leadError } = await supabase.from('leads').insert({
      id: leadId,
      email: trimmedEmail,
      source: 'products_page',
      card_id: 'products_capture_box',
      notes: description,
      stage: 'shared',
    });

    if (leadError) {
      setFormStatus('error');
      return;
    }

    await supabase.from('events').insert({
      lead_id: leadId,
      type: 'form_submitted',
      source: 'products_page',
      card_id: 'products_capture_box',
      payload: { description },
    });

    setMessage('');
    setEmail('');
    setFormStatus('success');
  };

  return (
    <PageShell>
      <section className="px-4 pb-20 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-4 text-center font-display text-4xl font-bold text-navy sm:text-5xl">What We Build</h1>
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-navy/80">
            Private AI apps for Milwaukee small business. Each one takes a job off your plate. Your data stays where it
            belongs.
          </p>

          <div className="mb-16">
            <h2 className="mb-8 text-center font-display text-3xl font-bold text-navy sm:text-4xl">
              Start here. Pick your suite.
            </h2>

            <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {bundles.map((bundle) => {
                const styles = accentStyles[bundle.accent];
                return (
                  <div
                    key={bundle.title}
                    className={`relative overflow-hidden rounded-xl border-l-4 ${styles.border} bg-white p-6 shadow-card transition-all duration-300 hover:shadow-card-hover sm:p-8`}
                  >
                    <p className={`mb-3 text-sm font-semibold ${styles.text}`}>{bundle.audience}</p>
                    <h3 className="mb-4 font-display text-xl font-bold text-navy sm:text-2xl">{bundle.title}</h3>
                    <p className="mb-4 text-base leading-relaxed text-navy/80">{bundle.body}</p>
                    <p className="text-sm font-medium text-navy/60">{bundle.includes}</p>
                  </div>
                );
              })}
            </div>

            <p className="mx-auto mb-6 max-w-2xl text-center text-lg leading-relaxed text-navy/80">
              Not sure which fits? Book a discovery call and we&apos;ll build the right mix for your business.
            </p>

            <div className="text-center">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-coral px-8 py-4 font-display font-semibold text-white transition-colors hover:bg-coral/90"
              >
                Book a Discovery Call
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 font-display text-2xl font-bold text-navy sm:text-3xl">
              Two ways to work, one principle.
            </h2>
            <p className="text-lg leading-relaxed text-navy/80">
              Not all your data belongs in the cloud, and not all of it needs to stay home. Dr. Data Private AI keeps
              your confidential work in your building. Dr. Data Pulse brings your whole public-facing business
              into one intelligent view. You draw the line. We hold it.
            </p>
          </div>

          <p className="mx-auto mb-16 max-w-3xl rounded-2xl border border-navy/10 bg-cream/60 px-6 py-5 text-center text-lg leading-relaxed text-navy/80 sm:px-8">
            Dr. Data builds custom private AI apps for small business that run on your own machine instead of a shared
            cloud, so your data stays yours and there are no monthly per-user fees.
          </p>

          {productGroups.map((group) => (
            <div key={group.title} className="mb-16">
              <div className="mb-8 text-center">
                <h2 className="mb-3 font-display text-3xl font-bold text-navy sm:text-4xl">{group.title}</h2>
                <p className="mx-auto max-w-2xl text-lg text-navy/80">{group.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {group.products.map((product) => {
                  const styles = accentStyles[product.accent];
                  return (
                    <div
                      key={product.name}
                      className={`relative overflow-hidden rounded-xl border-l-4 ${styles.border} bg-white p-6 shadow-card transition-all duration-300 hover:shadow-card-hover sm:p-8 ${
                        product.flagship ? 'border-t-2 border-t-teal ring-1 ring-teal/15' : ''
                      }`}
                    >
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-xl font-bold text-navy sm:text-2xl">{product.name}</h3>
                        {product.flagship ? (
                          <span className="rounded-full bg-teal/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-teal">
                            Flagship
                          </span>
                        ) : null}
                      </div>
                      <p className="text-base leading-relaxed text-navy/80">{product.description}</p>
                      {product.detailLink ? (
                        <a
                          href={hrefPage(product.detailLink.page)}
                          className="mt-4 inline-block text-sm font-semibold text-teal transition hover:underline"
                        >
                          {product.detailLink.label}
                        </a>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <FindYourZone />

          <div className="mx-auto mb-12 max-w-2xl rounded-2xl border border-navy/10 bg-white/90 p-8 shadow-card backdrop-blur-sm sm:p-10">
            <h2 className="mb-2 text-center font-display text-2xl font-bold text-navy sm:text-3xl">
              Not finding what you need?
            </h2>
            <p className="mb-8 text-center text-navy/80">
              Tell me what eats your week, and I&apos;ll build it or point you to what fits.
            </p>

            {formStatus === 'success' ? (
              <p className="text-center font-medium text-teal">
                Got it. I&apos;ll be in touch to set up a call.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {validationError ? (
                  <p className="rounded-lg bg-coral/10 px-4 py-3 text-sm text-navy/80">{validationError}</p>
                ) : null}
                {formStatus === 'error' ? (
                  <p className="rounded-lg bg-coral/10 px-4 py-3 text-sm text-navy/80">
                    Something went wrong. Email me directly at{' '}
                    <a href={`mailto:${FALLBACK_EMAIL}`} className="font-medium text-teal hover:underline">
                      {FALLBACK_EMAIL}
                    </a>
                    .
                  </p>
                ) : null}
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What eats your week?"
                  rows={4}
                  disabled={formStatus === 'submitting'}
                  className="w-full resize-y rounded-lg border border-navy/20 bg-cream/50 px-4 py-3 text-navy placeholder:text-navy/40 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 disabled:opacity-60"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  disabled={formStatus === 'submitting'}
                  className="w-full rounded-lg border border-navy/20 bg-cream/50 px-4 py-3 text-navy placeholder:text-navy/40 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full rounded-lg bg-coral px-6 py-3 font-display font-semibold text-white transition-colors hover:bg-coral/90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send it to Dr. Data'}
                </button>
              </form>
            )}
          </div>

          <div className="mx-auto mb-12 max-w-4xl rounded-2xl bg-cream px-6 py-12 sm:px-10 sm:py-14">
            <h2 className="mb-4 text-center font-display text-3xl font-bold text-navy sm:text-4xl">
              The depth behind the builds
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-center text-lg leading-relaxed text-navy/80">
              Every Dr. Data product rests on two decades of enterprise AI, applied where it actually helps a small
              business.
            </p>
            <ul className="mx-auto mb-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-5">
              {expertiseAreas.map((area) => (
                <li key={area} className="flex items-center gap-3 border-l-2 border-teal pl-4">
                  <span className="font-display text-base font-semibold text-navy sm:text-lg">{area}</span>
                </li>
              ))}
            </ul>
            <p className="text-center text-lg font-medium text-teal">
              This is the expertise behind every build. Not a menu. The foundation.
            </p>
          </div>

          <div className="text-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-coral px-8 py-4 font-display font-semibold text-white transition-colors hover:bg-coral/90"
            >
              Book a Discovery Call
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
