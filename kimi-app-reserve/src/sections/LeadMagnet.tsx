import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Download } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const GUIDE_PATH = '/bidding-ai-ready-checklist.pdf';

function looksLikeEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

const inputClassName =
  'w-full rounded-lg border border-navy/20 bg-cream/50 px-4 py-3 text-navy placeholder:text-navy/40 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 disabled:opacity-60';

export default function LeadMagnet() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'done'>('idle');
  const [validationError, setValidationError] = useState('');
  const [saveWarning, setSaveWarning] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setValidationError('');

    const trimmedEmail = email.trim();

    if (!trimmedEmail || !looksLikeEmail(trimmedEmail)) {
      setValidationError('Please enter a valid email address.');
      return;
    }

    setFormStatus('submitting');
    setSaveWarning(false);

    const leadId = crypto.randomUUID();

    const { error: leadError } = await supabase.from('leads').insert({
      id: leadId,
      email: trimmedEmail,
      source: 'lead_magnet',
      card_id: 'bidding_checklist',
      stage: 'shared',
    });

    if (leadError) {
      setSaveWarning(true);
      setFormStatus('done');
      return;
    }

    await supabase.from('events').insert({
      lead_id: leadId,
      type: 'form_submitted',
      source: 'lead_magnet',
      card_id: 'bidding_checklist',
      payload: { guide: 'bidding-ai-ready-checklist' },
    });

    setEmail('');
    setFormStatus('done');
  };

  return (
    <section
      ref={sectionRef}
      id="lead-magnet"
      className="relative w-full overflow-hidden bg-white py-24 sm:py-32"
    >
      <div className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div
          className={`rounded-2xl border border-navy/10 bg-white/90 p-8 shadow-card backdrop-blur-sm transition-all duration-600 sm:p-10 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="mb-3 text-center text-sm font-medium uppercase tracking-wide text-teal">
            FREE FIELD GUIDE
          </p>
          <h2
            className="mb-4 text-center font-display font-bold text-navy"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
          >
            Is your bidding AI-ready?
          </h2>
          <p className="mb-8 text-center text-base leading-relaxed text-navy/80 sm:text-lg">
            A 60-second checklist for builders and trades. Run it on your own shop and see exactly
            what&apos;s slowing your bids down. No sales pitch, just the guide.
          </p>

          {formStatus === 'done' ? (
            <div className="text-center">
              <h3 className="mb-4 font-display text-2xl font-bold text-navy">Here&apos;s your guide.</h3>
              {saveWarning ? (
                <p className="mb-6 text-sm text-navy/80">
                  Something went wrong saving your email, but here&apos;s the guide.
                </p>
              ) : null}
              <a
                href={GUIDE_PATH}
                download
                className="inline-flex items-center gap-2 rounded-lg bg-coral px-8 py-4 font-display font-semibold text-white transition-colors hover:bg-coral/90"
              >
                <Download size={20} />
                Download the checklist
              </a>
              {!saveWarning ? (
                <p className="mt-4 text-sm text-navy/60">I&apos;ll follow up to see what you think.</p>
              ) : null}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-4">
              {validationError ? (
                <p className="rounded-lg bg-coral/10 px-4 py-3 text-sm text-navy/80">{validationError}</p>
              ) : null}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                disabled={formStatus === 'submitting'}
                className={inputClassName}
              />
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full rounded-lg bg-coral px-6 py-3 font-display font-semibold text-white transition-colors hover:bg-coral/90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send me the guide'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
