import PageShell from '@/components/PageShell';
import SurveyCTA from '@/components/SurveyCTA';
import { CASE_STUDIES_INDEX_INTRO, CASE_STUDY_ORDER, getCaseStudy } from '@/data/caseStudiesData';
import { hrefPage } from '@/lib/sitePaths';
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Cpu,
  Database,
  LayoutDashboard,
  Quote,
  Shield,
  Sparkles,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const CALENDLY = 'https://calendly.com/zubiaml4l/15min';

const CASE_ICONS: Record<string, LucideIcon> = {
  'case-study-milwaukee': Database,
  'case-study-austin': LayoutDashboard,
  'case-study-madison': Cpu,
  'case-study-chicago': Activity,
  'case-study-new-york': Shield,
};

function StatGrid({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-xl bg-gradient-to-b from-white to-teal/5 px-3 py-4 text-center shadow-inner ring-1 ring-navy/10 sm:px-4 sm:py-5"
        >
          <p className="font-display text-xl font-bold leading-tight text-teal sm:text-2xl md:text-3xl">{s.value}</p>
          <p className="mt-2 text-xs font-medium leading-snug text-navy/65 sm:text-sm">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

const CaseStudies = () => {
  return (
    <PageShell>
      {/* Hero */}
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
            Proof points
          </div>

          <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Case <span className="bg-gradient-to-r from-teal to-teal/70 bg-clip-text text-transparent">Studies</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/75 sm:text-xl">
            {CASE_STUDIES_INDEX_INTRO}
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="relative px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-10">
          {CASE_STUDY_ORDER.map((page, index) => {
            const c = getCaseStudy(page);
            if (!c) return null;
            const Icon = CASE_ICONS[page] ?? Database;
            const accentTeal = index % 2 === 0;

            return (
              <article
                key={page}
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
                        <p className="text-xs font-semibold uppercase tracking-wider text-teal">{c.tag}</p>
                        <p className="mt-1 text-sm font-medium text-navy/85 sm:text-base">{c.org}</p>
                      </div>
                    </div>
                    <span
                      className="font-display text-5xl font-bold tabular-nums leading-none text-navy/[0.08] sm:text-6xl"
                      aria-hidden
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h2 className="mb-3 max-w-3xl font-display text-2xl font-bold leading-snug text-navy sm:text-3xl">
                    {c.headline}
                  </h2>
                  <p className="mb-8 text-base font-semibold text-teal sm:text-lg">{c.resultHighlight}</p>

                  <StatGrid stats={c.stats} />

                  <div className="relative mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-mint/80 to-teal/[0.08] p-6 ring-1 ring-teal/15 sm:p-8">
                    <Quote
                      className="absolute right-4 top-4 h-16 w-16 text-teal/15 sm:h-20 sm:w-20"
                      strokeWidth={1}
                      aria-hidden
                    />
                    <blockquote className="relative text-base italic leading-relaxed text-navy/85 sm:text-lg">
                      &ldquo;{c.clientQuote}&rdquo;
                    </blockquote>
                  </div>

                  <a
                    href={hrefPage(c.page)}
                    className={`mt-8 inline-flex items-center gap-2 rounded-xl px-5 py-3 font-display text-sm font-semibold text-white shadow-md transition hover:scale-[1.02] hover:shadow-lg ${
                      accentTeal ? 'bg-teal text-navy hover:bg-teal/90' : 'bg-coral text-white hover:bg-coral/90'
                    }`}
                  >
                    Read full case study
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
              Have a challenge that sounds similar?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-base text-white/75">
              Tell us what you are solving. We will map where decision intelligence fits.
            </p>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-teal px-8 py-3.5 font-display font-semibold text-navy shadow-lg transition hover:bg-teal/90"
            >
              Let&apos;s talk about your situation
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

export default CaseStudies;
