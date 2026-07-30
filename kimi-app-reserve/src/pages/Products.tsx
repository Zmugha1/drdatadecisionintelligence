import { useState, type FormEvent } from 'react';
import PageShell from '@/components/PageShell';
import { BOOKING_URL } from '@/lib/sitePaths';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    name: 'Lead Watch',
    description:
      'Finds your next customer before anyone else knows they exist. Watches for the moment someone becomes a buyer — a permit filed, a business formed, a home sold — and hands you a morning list of who to call and what to say.',
    promise: 'Stop finding out too late. Wake up to the lead.',
    accent: 'teal' as const,
  },
  {
    name: 'Bidding AI',
    description:
      'Turns your own past jobs into fast, defensible quotes. Assess, estimate, price — all from your history, not a generic calculator.',
    promise: 'Bidding goes from a weekend to an hour.',
    accent: 'coral' as const,
  },
  {
    name: 'Coaching AI',
    description:
      'Turns your method into software your clients use between sessions. Your process, your voice, working for you when you are not in the room.',
    promise: 'Scale your method without cloning yourself.',
    accent: 'teal' as const,
  },
  {
    name: 'Document AI',
    description:
      'Reads the PDFs, forms, and files you retype every morning and pulls out what matters.',
    promise: 'Stop retyping. Start reading what counts.',
    accent: 'coral' as const,
  },
  {
    name: 'Briefing AI',
    description:
      'One page every morning on your field, written in your voice. Keeps you current without the reading pile.',
    promise: 'Keep up with your field in five minutes a day.',
    accent: 'teal' as const,
  },
  {
    name: 'Pulse',
    description:
      'Scores your leads, shows which sources actually produce, and tells you who to work today.',
    promise: 'Know who to call before you open your inbox.',
    accent: 'coral' as const,
  },
  {
    name: 'Follow-Up AI',
    description: 'Knows who went quiet after a quote and writes the nudge for you.',
    promise: 'Stop losing deals to silence.',
    accent: 'teal' as const,
  },
  {
    name: 'Marketing AI',
    description: 'Shows which half of your marketing spend is actually working.',
    promise: 'Stop guessing where the money comes from.',
    accent: 'coral' as const,
  },
  {
    name: 'Referral IQ',
    description:
      'Turns your networking into a system — who to connect, who owes who, where the next introduction lives.',
    promise: 'Turn handshakes into referrals.',
    accent: 'teal' as const,
  },
  {
    name: 'Front Desk',
    description:
      'Your digital business card and review flow. Share your contact in one tap, and turn finished work into Google reviews automatically.',
    promise: 'Get remembered, and get reviewed.',
    accent: 'coral' as const,
  },
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
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageShell>
      <section className="px-4 pb-20 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-4 text-center font-display text-4xl font-bold text-navy sm:text-5xl">
            Private AI, built for the work that eats your week.
          </h1>
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-navy/80">
            Ten Dr. Data apps. Each one takes a job off your plate. They run on your machine. Your data never leaves
            your building.
          </p>

          <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => {
              const styles = accentStyles[product.accent];
              return (
                <div
                  key={product.name}
                  className={`relative overflow-hidden rounded-xl border-l-4 ${styles.border} bg-white p-6 shadow-card transition-all duration-300 hover:shadow-card-hover sm:p-8`}
                >
                  <h2 className="mb-3 font-display text-xl font-bold text-navy sm:text-2xl">{product.name}</h2>
                  <p className="mb-4 text-base leading-relaxed text-navy/80">{product.description}</p>
                  <p className={`font-medium ${styles.text}`}>{product.promise}</p>
                </div>
              );
            })}
          </div>

          <div className="mx-auto mb-12 max-w-2xl rounded-2xl border border-navy/10 bg-white/90 p-8 shadow-card backdrop-blur-sm sm:p-10">
            <h2 className="mb-2 text-center font-display text-2xl font-bold text-navy sm:text-3xl">
              Not finding what you need?
            </h2>
            <p className="mb-8 text-center text-navy/80">
              Tell me what eats your week, and I&apos;ll build it or point you to what fits.
            </p>

            {submitted ? (
              <p className="text-center font-medium text-teal">
                Got it. I&apos;ll be in touch to set up a call.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What eats your week?"
                  rows={4}
                  required
                  className="w-full resize-y rounded-lg border border-navy/20 bg-cream/50 px-4 py-3 text-navy placeholder:text-navy/40 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="w-full rounded-lg border border-navy/20 bg-cream/50 px-4 py-3 text-navy placeholder:text-navy/40 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                />
                <button
                  type="submit"
                  className="w-full rounded-lg bg-coral px-6 py-3 font-display font-semibold text-white transition-colors hover:bg-coral/90 sm:w-auto"
                >
                  Send it to Dr. Data
                </button>
              </form>
            )}
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
