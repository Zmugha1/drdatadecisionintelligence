import PageShell from '@/components/PageShell';
import SurveyCTA from '@/components/SurveyCTA';
import { CASE_STUDIES_INDEX_INTRO, CASE_STUDY_ORDER, getCaseStudy } from '@/data/caseStudiesData';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const CALENDLY = 'https://calendly.com/zubiaml4l/15min';

function StatGrid({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div className="mb-8 grid gap-3 sm:grid-cols-3 sm:gap-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-xl border border-navy/10 bg-cream/60 px-3 py-4 text-center sm:px-4 sm:py-5"
        >
          <p className="font-display text-xl font-bold leading-tight text-teal sm:text-2xl md:text-3xl">{s.value}</p>
          <p className="mt-2 text-xs font-medium leading-snug text-navy/70 sm:text-sm">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

const CaseStudies = () => {
  return (
    <PageShell>
      <section className="px-4 pb-10 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <a
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-teal transition hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </a>

          <h1 className="mb-4 font-display text-4xl font-bold text-navy sm:text-5xl">Case Studies</h1>
          <p className="mb-14 max-w-2xl text-lg leading-relaxed text-navy/70">{CASE_STUDIES_INDEX_INTRO}</p>

          <div className="space-y-10">
            {CASE_STUDY_ORDER.map((page) => {
              const c = getCaseStudy(page);
              if (!c) return null;
              return (
                <article
                  key={page}
                  className="rounded-2xl border border-navy/10 bg-white/95 p-6 shadow-card sm:p-8"
                >
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-teal">{c.tag}</p>
                  <p className="mb-3 text-sm font-medium text-navy/85 sm:text-base">{c.org}</p>
                  <h2 className="mb-4 font-display text-xl font-bold leading-snug text-navy sm:text-2xl">{c.headline}</h2>
                  <p className="mb-8 font-semibold text-teal">{c.resultHighlight}</p>
                  <StatGrid stats={c.stats} />
                  <blockquote className="mt-8 border-l-4 border-teal/40 pl-4 text-base italic leading-relaxed text-navy/75">
                    &ldquo;{c.clientQuote}&rdquo;
                  </blockquote>
                  <a
                    href={`/?page=${c.page}`}
                    className="mt-6 inline-flex items-center gap-2 font-display font-semibold text-teal hover:underline"
                  >
                    Read full case study
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-navy/10 bg-cream/80 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-6 font-display text-2xl font-bold text-navy sm:text-3xl">
            Have a challenge that sounds similar?
          </h2>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display font-semibold text-teal underline-offset-4 hover:underline"
          >
            Let&apos;s talk about your situation →
          </a>
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
