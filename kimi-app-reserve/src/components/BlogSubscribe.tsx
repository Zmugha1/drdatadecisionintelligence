import { useState } from 'react';
import { ArrowRight, CheckCircle2, Mail } from 'lucide-react';

const FORMSPREE_URL = 'https://formspree.io/f/mykprpbd';

/**
 * Inline newsletter signup for the blog index (matches kimi.link subscribe block).
 */
export default function BlogSubscribe() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email?.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          subject: 'Blog newsletter signup',
          message: `Blog newsletter signup\n\nEmail: ${email}\nSource: Dr. Data blog page`,
        }),
      });
      if (response.ok) {
        setSubmitted(true);
        setEmail('');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    }
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-teal/30 bg-mint/50 p-8 text-center ring-1 ring-teal/15">
        <CheckCircle2 className="mx-auto mb-3 h-12 w-12 text-teal" strokeWidth={1.75} />
        <p className="font-display text-lg font-semibold text-navy">You are on the list.</p>
        <p className="mt-1 text-sm text-navy/70">Watch your inbox for new articles. No spam.</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-navy/10 bg-white p-8 shadow-card sm:p-10">
      <h3 className="font-display text-xl font-bold text-navy sm:text-2xl">Get new articles in your inbox</h3>
      <p className="mt-2 text-navy/70">
        No spam. Just insights on decision intelligence and building AI systems that work.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 flex max-w-xl flex-col gap-3 sm:flex-row sm:items-stretch">
        <div className="relative min-w-0 flex-1">
          <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-navy/40" aria-hidden />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="w-full rounded-xl border border-navy/15 bg-cream/50 py-3 pl-10 pr-4 text-navy outline-none ring-teal/0 transition focus:border-teal/50 focus:ring-2 focus:ring-teal/20"
            autoComplete="email"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-coral px-6 py-3 font-display text-sm font-semibold text-white shadow-md transition hover:bg-coral/90 disabled:opacity-60"
        >
          Subscribe
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>
      {error ? <p className="mt-2 text-sm text-coral">{error}</p> : null}
    </div>
  );
}
