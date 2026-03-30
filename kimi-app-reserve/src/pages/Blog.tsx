import PageShell from '@/components/PageShell';
import SurveyCTA from '@/components/SurveyCTA';
import { hrefPage } from '@/lib/sitePaths';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Compass,
  LineChart,
  Sparkles,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const CALENDLY = 'https://calendly.com/zubiaml4l/15min';

const posts: {
  pageKey: string;
  title: string;
  date: string;
  excerpt: string;
  Icon: LucideIcon;
}[] = [
  {
    pageKey: 'blog-data-to-money',
    title: 'From Data to $$$: How Decision Intelligence Recovers Hidden Revenue',
    date: 'February 2026',
    excerpt:
      'Most e-commerce businesses are sitting on a goldmine waiting to be uncovered. They have plenty of data. The opportunity lies in bridging the gap between raw data and revenue decisions.',
    Icon: LineChart,
  },
  {
    pageKey: 'blog-data-readiness',
    title: 'The "Data Doctor" Readiness Scorecard: Is Your Business AI-Ready?',
    date: 'February 2026',
    excerpt:
      'Most Milwaukee business owners are sitting on a goldmine of data, but the mine is currently unstructured and unprimed. Take this 2-minute assessment to discover where you stand.',
    Icon: BookOpen,
  },
  {
    pageKey: 'blog-coaching-compass',
    title: 'Why Your Next High-Performing Client Will Not Come From Hustle',
    date: 'February 2026',
    excerpt:
      'How one 30-year coaching veteran stopped drowning in sticky notes and started trusting her gut again.',
    Icon: Compass,
  },
];

const Blog = () => {
  return (
    <PageShell>
      <section className="relative overflow-hidden px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden
        >
          <div
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(78, 205, 196, 0.35) 0%, transparent 70%)' }}
          />
          <div
            className="absolute -bottom-24 left-1/4 h-64 w-64 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(224, 122, 95, 0.2) 0%, transparent 70%)' }}
          />
        </div>

        <div className="relative mx-auto max-w-5xl">
          <a
            href={hrefPage('home')}
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-teal transition hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </a>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            Insights
          </div>

          <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Dr. Data{' '}
            <span className="bg-gradient-to-r from-teal to-teal/70 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/75 sm:text-xl">
            Decision intelligence, data strategy, and AI systems you can trust. Practical ideas you can use this week.
          </p>
        </div>
      </section>

      <section className="relative px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-10">
          {posts.map((post, index) => {
            const href = hrefPage(post.pageKey);
            const accentTeal = index % 2 === 0;
            const Icon = post.Icon;

            return (
              <article
                key={post.pageKey}
                className={`group relative overflow-hidden rounded-3xl border border-navy/10 border-l-[5px] bg-white/95 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${
                  accentTeal ? 'border-l-teal' : 'border-l-coral'
                }`}
              >
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full opacity-[0.07] transition-opacity group-hover:opacity-[0.12]"
                  style={{
                    background: accentTeal
                      ? 'radial-gradient(circle, #4ECDC4 0%, transparent 70%)'
                      : 'radial-gradient(circle, #E07A5F 0%, transparent 70%)',
                  }}
                  aria-hidden
                />

                <div className="relative p-6 sm:p-8 lg:p-10">
                  <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <span
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-inner ${
                          accentTeal ? 'bg-teal/15 text-teal' : 'bg-coral/15 text-coral'
                        }`}
                      >
                        <Icon className="h-7 w-7" strokeWidth={1.75} />
                      </span>
                      <div>
                        <p className="text-sm text-navy/50">{post.date}</p>
                        <h2 className="mt-1 max-w-3xl font-display text-xl font-bold leading-snug text-navy sm:text-2xl">
                          {post.title}
                        </h2>
                      </div>
                    </div>
                    <span
                      className="font-display text-5xl font-bold tabular-nums leading-none text-navy/[0.08] sm:text-6xl"
                      aria-hidden
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <p className="mb-8 text-base leading-relaxed text-navy/75 sm:text-lg">{post.excerpt}</p>

                  <a
                    href={href}
                    className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 font-display text-sm font-semibold text-white shadow-md transition hover:scale-[1.02] hover:shadow-lg ${
                      accentTeal ? 'bg-teal text-navy hover:bg-teal/90' : 'bg-coral text-white hover:bg-coral/90'
                    }`}
                  >
                    Read article
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-navy px-6 py-14 text-center shadow-xl sm:px-10 sm:py-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              background:
                'radial-gradient(ellipse at 30% 20%, rgba(78, 205, 196, 0.25) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(224, 122, 95, 0.15) 0%, transparent 45%)',
            }}
            aria-hidden
          />
          <div className="relative">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Want this level of clarity for your business?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-base text-white/75">
              Book a short call. We will map where decision intelligence fits your goals.
            </p>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-teal px-8 py-3.5 font-display font-semibold text-navy shadow-lg transition hover:bg-teal/90"
            >
              Book a call
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SurveyCTA variant="light" />
        </div>
      </section>
    </PageShell>
  );
};

export default Blog;
