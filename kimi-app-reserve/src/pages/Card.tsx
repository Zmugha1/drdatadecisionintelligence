import { useEffect, useState, type FormEvent } from 'react';
import { BOOKING_URL } from '@/lib/sitePaths';
import { supabase } from '@/lib/supabase';
import {
  Calendar,
  Download,
  Globe,
  Linkedin,
  Mail,
  MessageSquare,
  Phone,
} from 'lucide-react';

const VCF_PATH = '/dr-zubia-mughal.vcf';
const VCF_DOWNLOAD = 'dr-zubia-mughal.vcf';
const WEBSITE_URL = 'https://drdatadecisionintelligence.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/zubia-m-947b3578';
const PHONE_HREF = 'tel:+14145447777';
const SMS_HREF = 'sms:+14145447777';
const EMAIL_HREF = 'mailto:zubiam@drdatadecisionintelligence.com';

function looksLikeEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function buildNotes(phone: string, business: string, needs: string): string {
  return `Phone: ${phone || 'n/a'} | Business: ${business || 'n/a'} | Needs: ${needs || 'n/a'}`;
}

function triggerVcardDownload() {
  const link = document.createElement('a');
  link.href = VCF_PATH;
  link.download = VCF_DOWNLOAD;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const actions = [
  {
    label: 'Save Contact',
    href: VCF_PATH,
    download: VCF_DOWNLOAD,
    icon: Download,
    className: 'bg-coral text-white hover:bg-coral/90',
  },
  {
    label: 'Book a Call',
    href: BOOKING_URL,
    external: true,
    icon: Calendar,
    className: 'bg-teal text-white hover:bg-teal/90',
  },
  {
    label: 'Call',
    href: PHONE_HREF,
    icon: Phone,
    className: 'border-2 border-teal bg-white text-navy hover:bg-teal/5',
  },
  {
    label: 'Text Me',
    href: SMS_HREF,
    icon: MessageSquare,
    className: 'border-2 border-teal bg-white text-navy hover:bg-teal/5',
  },
  {
    label: 'Email',
    href: EMAIL_HREF,
    icon: Mail,
    className: 'border-2 border-teal bg-white text-navy hover:bg-teal/5',
  },
  {
    label: 'Website',
    href: WEBSITE_URL,
    external: true,
    icon: Globe,
    className: 'border-2 border-teal bg-white text-navy hover:bg-teal/5',
  },
  {
    label: 'LinkedIn',
    href: LINKEDIN_URL,
    external: true,
    icon: Linkedin,
    className: 'border-2 border-teal bg-white text-navy hover:bg-teal/5',
  },
] as const;

const Card = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [business, setBusiness] = useState('');
  const [needs, setNeeds] = useState('');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [validationError, setValidationError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const completeSwap = () => {
    triggerVcardDownload();
    setName('');
    setEmail('');
    setPhone('');
    setBusiness('');
    setNeeds('');
    setFormStatus('success');
  };

  const handleConnectSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setValidationError('');

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();
    const trimmedBusiness = business.trim();
    const trimmedNeeds = needs.trim();

    if (!trimmedName) {
      setValidationError('Please enter your name.');
      return;
    }
    if (!trimmedEmail || !looksLikeEmail(trimmedEmail)) {
      setValidationError('Please enter a valid email address.');
      return;
    }

    setFormStatus('submitting');

    const leadId = crypto.randomUUID();
    const notes = buildNotes(trimmedPhone, trimmedBusiness, trimmedNeeds);

    const { error: leadError } = await supabase.from('leads').insert({
      id: leadId,
      name: trimmedName,
      email: trimmedEmail,
      source: 'card_capture',
      card_id: 'digital_card',
      notes,
      stage: 'shared',
    });

    if (!leadError) {
      await supabase.from('events').insert({
        lead_id: leadId,
        type: 'form_submitted',
        source: 'card_capture',
        card_id: 'digital_card',
        payload: {
          phone: trimmedPhone || undefined,
          business: trimmedBusiness || undefined,
          needs: trimmedNeeds || undefined,
        },
      });
    }

    completeSwap();
  };

  return (
    <div className="min-h-screen bg-cream px-4 py-8 sm:py-12">
      <div className="mx-auto flex w-full max-w-md flex-col items-center">
        <img
          src="/dr-zubia-mughal-edd.png"
          alt="Dr. Zubia Mughal, Ed.D."
          className="mb-6 h-36 w-36 rounded-full border-4 border-white object-cover object-top shadow-card sm:h-40 sm:w-40"
        />

        <h1 className="mb-2 text-center font-display text-2xl font-bold text-navy sm:text-3xl">
          Dr. Zubia Mughal, Ed.D.
        </h1>

        <p className="mb-4 text-center text-base text-navy/70 sm:text-lg">
          Founder, Dr. Data Decision Intelligence
        </p>

        <p className="mb-8 text-center text-sm font-semibold text-teal sm:text-base">
          Private AI. Own your AI. Don&apos;t rent it.
        </p>

        <div className="mb-10 flex flex-col items-center gap-2">
          <img
            src="/mascot-hero.png"
            alt="Dr. Data mascot"
            className="h-24 w-24 object-contain sm:h-28 sm:w-28"
          />
          <p className="font-display text-sm font-semibold text-navy/80 sm:text-base">
            Make $$$ with your data
          </p>
        </div>

        <div className="flex w-full flex-col gap-3">
          {actions.map((action) => {
            const Icon = action.icon;
            const external = 'external' in action && action.external;
            const download = 'download' in action ? action.download : undefined;

            return (
              <a
                key={action.label}
                href={action.href}
                download={download}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className={`flex min-h-[3.25rem] w-full items-center justify-center gap-3 rounded-xl px-6 py-4 font-display text-lg font-semibold transition-colors ${action.className}`}
              >
                <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                {action.label}
              </a>
            );
          })}
        </div>

        <div className="mt-10 w-full rounded-2xl border border-navy/10 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="mb-2 text-center font-display text-xl font-bold text-navy sm:text-2xl">
            Let&apos;s connect
          </h2>
          <p className="mb-6 text-center text-sm leading-relaxed text-navy/80 sm:text-base">
            Send me your details and I&apos;ll be in touch. You&apos;ll get my card back, too.
          </p>

          {formStatus === 'success' ? (
            <p className="text-center font-medium text-teal">
              Thanks! Dr. Zubia will be in touch. Here&apos;s my card too.
            </p>
          ) : (
            <form onSubmit={handleConnectSubmit} className="space-y-4">
              {validationError ? (
                <p className="rounded-lg bg-coral/10 px-4 py-3 text-sm text-navy/80">{validationError}</p>
              ) : null}
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
                disabled={formStatus === 'submitting'}
                className="w-full rounded-lg border border-navy/20 bg-cream/50 px-4 py-3 text-navy placeholder:text-navy/40 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 disabled:opacity-60"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                disabled={formStatus === 'submitting'}
                className="w-full rounded-lg border border-navy/20 bg-cream/50 px-4 py-3 text-navy placeholder:text-navy/40 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 disabled:opacity-60"
              />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone (optional)"
                disabled={formStatus === 'submitting'}
                className="w-full rounded-lg border border-navy/20 bg-cream/50 px-4 py-3 text-navy placeholder:text-navy/40 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 disabled:opacity-60"
              />
              <input
                type="text"
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                placeholder="Business name / website (optional)"
                disabled={formStatus === 'submitting'}
                className="w-full rounded-lg border border-navy/20 bg-cream/50 px-4 py-3 text-navy placeholder:text-navy/40 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 disabled:opacity-60"
              />
              <textarea
                value={needs}
                onChange={(e) => setNeeds(e.target.value)}
                placeholder="What do you need from Dr. Data? (optional)"
                rows={3}
                disabled={formStatus === 'submitting'}
                className="w-full resize-y rounded-lg border border-navy/20 bg-cream/50 px-4 py-3 text-navy placeholder:text-navy/40 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="flex min-h-[3.25rem] w-full items-center justify-center rounded-xl bg-coral px-6 py-4 font-display text-lg font-semibold text-white transition-colors hover:bg-coral/90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send'}
              </button>
            </form>
          )}
        </div>

        <div className="mt-10 flex w-full flex-col items-center">
          <p className="mb-4 text-center font-display text-sm font-semibold text-navy sm:text-base">
            Scan to save my card
          </p>
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <img
              src="/dr-data-card-qr.png"
              alt="Scan to open Dr. Zubia Mughal's digital card"
              className="mx-auto w-[65%] min-w-[200px] max-w-[260px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
