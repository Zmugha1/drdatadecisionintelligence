import { useEffect, useState } from 'react';
import PageShell from '@/components/PageShell';
import SurveyCTA from '@/components/SurveyCTA';
import { ArrowLeft, Play, RotateCcw } from 'lucide-react';

const CALENDLY = 'https://calendly.com/zubiaml4l/15min';

/** Matches live kimi page: only step 1 body is in the fetch; other steps complete the pipeline. */
const darkDataSteps = [
  {
    title: 'Raw Data Ingestion',
    body: 'Unstructured documents, emails, and spreadsheets enter the system.',
  },
  {
    title: 'Semantic Chunking',
    body: 'Communications are split into semantic units for embedding and labeling.',
  },
  {
    title: 'Embedding Generation',
    body: 'Vectors capture meaning so similar client behavior clusters together.',
  },
  {
    title: 'Pattern Detection',
    body: 'Churn signals are detected across email, CRM, and support history.',
  },
  {
    title: 'Structured Intelligence',
    body: 'Scores and explanations feed the models and teams that act on them.',
  },
];

function DarkDataDemo() {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => {
      setStep((s) => (s >= darkDataSteps.length - 1 ? 0 : s + 1));
    }, 2800);
    return () => window.clearInterval(id);
  }, [playing]);

  const reset = () => {
    setPlaying(false);
    setStep(0);
  };

  const current = darkDataSteps[step];

  return (
    <div className="rounded-2xl border border-teal/25 bg-white p-6 shadow-card sm:p-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h4 className="font-display text-base font-bold text-navy sm:text-lg">
            Live Demo: Dark Data to Structured Intelligence
          </h4>
          <p className="mt-1 text-sm text-navy/60">
            See how unstructured documents become machine-interpretable
          </p>
        </div>
        <div className="flex flex-shrink-0 gap-2">
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            className="inline-flex items-center gap-2 rounded-lg bg-teal px-4 py-2.5 text-sm font-semibold text-navy shadow-sm transition hover:bg-teal/90"
          >
            <Play className="h-4 w-4" />
            Play
          </button>
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-lg border border-navy/15 bg-cream px-4 py-2.5 text-sm font-semibold text-navy transition hover:bg-cream/80"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </button>
        </div>
      </div>

      <p className="mb-6 text-center font-display text-xl font-bold text-teal sm:text-2xl">
        2,847 unstructured documents
      </p>

      <div className="rounded-xl border border-navy/10 bg-cream/40 p-6 sm:p-8">
        <p className="mb-2 text-center text-[11px] font-semibold uppercase tracking-widest text-navy/45">
          Step {step + 1} of {darkDataSteps.length}
        </p>
        <h5 className="mb-3 text-center font-display text-base font-bold text-navy sm:text-lg">{current.title}</h5>
        <p className="mb-4 text-center text-sm leading-relaxed text-navy/80 sm:text-base">{current.body}</p>
        <p className="text-center text-xs font-semibold uppercase tracking-wide text-navy/50">{current.title}</p>
      </div>
    </div>
  );
}

type Stat = { value: string; label: string };

const milwaukee = {
  tag: 'Data Annotation & AI (Artificial Intelligence) Readiness',
  org: 'Professional Services Firm · Milwaukee, WI',
  headline: 'From Dark Data to 40% Better Churn Prediction',
  stats: [
    { value: '40%', label: 'Churn prediction improvement' },
    { value: '12,000+', label: 'Labor hours saved annually' },
    { value: '8', label: 'Client data sources unified' },
  ] as Stat[],
  challenge:
    'A professional services firm had years of client communications scattered across emails, support tickets, and CRM notes. They knew patterns existed, why some clients stayed, why others left, but had no way to extract meaning from the chaos.',
  solution:
    'We implemented a comprehensive data annotation pipeline: semantic chunking of communications, embedding generation for meaning extraction, and pattern detection to identify churn signals. The dark data became structured intelligence.',
  results: [
    'Churn prediction accuracy improved 40%',
    '12,000+ labor hours saved annually',
    'Client retention improved 15%',
  ],
};

const compactCases: {
  tag: string;
  org: string;
  headline: string;
  stats: Stat[];
}[] = [
  {
    tag: 'Decision-Ready Data Foundations',
    org: 'SaaS Company · Austin, TX',
    headline: 'From Dashboard Chaos to a Single Source of Truth',
    stats: [
      { value: '12', label: 'Metric conflicts resolved' },
      { value: '15hrs/wk', label: 'Reporting time saved' },
      { value: '85%', label: 'Decision confidence' },
    ],
  },
  {
    tag: 'Governance-First ML (Machine Learning) Lifecycle',
    org: 'Manufacturing Company · Madison, WI',
    headline: 'From Notebook Chaos to Production-Ready Models in 10 Weeks',
    stats: [
      { value: '10 weeks', label: 'Time to production' },
      { value: '100%', label: 'Model reproducibility' },
      { value: '-60%', label: 'Analyst onboarding time' },
    ],
  },
  {
    tag: 'Predictive Decision Intelligence',
    org: 'Healthcare Provider Network · Chicago, IL',
    headline: 'Early Warning System Reduces Patient No-Shows by 25%',
    stats: [
      { value: '25%', label: 'No-show reduction' },
      { value: '$1.2M', label: 'Revenue recovered annually' },
      { value: '87%', label: 'Prediction accuracy' },
    ],
  },
  {
    tag: 'Governed AI (Artificial Intelligence) Systems & Agent Design',
    org: 'Financial Services Firm · New York, NY',
    headline: 'AI Agents with Built-In Governance from Day One',
    stats: [
      { value: '99.7%', label: 'Policy violations caught' },
      { value: '100%', label: 'Audit trail coverage' },
      { value: '0', label: 'Compliance incidents' },
    ],
  },
];

function StatGrid({ stats, className = '' }: { stats: Stat[]; className?: string }) {
  return (
    <div className={`grid gap-3 sm:grid-cols-3 sm:gap-4 ${className}`}>
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
          <p className="mb-14 max-w-2xl text-lg leading-relaxed text-navy/70">
            Real results from real organizations. See how decision intelligence transforms data into action.
          </p>

          {/* Featured case (Milwaukee): matches live — stats, demo, challenge/solution/results, one CTA */}
          <article className="mb-20">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-teal">{milwaukee.tag}</p>
            <p className="mb-4 text-base font-medium text-navy/85">{milwaukee.org}</p>
            <h2 className="mb-8 font-display text-2xl font-bold leading-snug text-navy sm:text-3xl lg:text-[1.75rem]">
              {milwaukee.headline}
            </h2>

            <StatGrid stats={milwaukee.stats} className="mb-10" />

            <DarkDataDemo />

            <div className="mt-12 space-y-10">
              <div>
                <h3 className="mb-3 font-display text-base font-bold text-navy">The Challenge</h3>
                <p className="leading-relaxed text-navy/80">{milwaukee.challenge}</p>
              </div>
              <div>
                <h3 className="mb-3 font-display text-base font-bold text-navy">The Solution</h3>
                <p className="leading-relaxed text-navy/80">{milwaukee.solution}</p>
              </div>
              <div>
                <h3 className="mb-3 font-display text-base font-bold text-navy">The Results</h3>
                <ul className="list-disc space-y-2 pl-5 text-navy/80">
                  {milwaukee.results.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex rounded-lg bg-coral px-6 py-3 font-display font-semibold text-white shadow-md transition hover:bg-coral/90"
            >
              Discuss a similar project
            </a>
          </article>

          {/* Compact cases: stats only (no challenge/solution/CTA per live) */}
          <div className="space-y-12 border-t border-navy/10 pt-16">
            {compactCases.map((c) => (
              <article
                key={c.headline}
                className="rounded-2xl border border-navy/10 bg-white/95 p-6 shadow-card sm:p-8"
              >
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-teal">{c.tag}</p>
                <p className="mb-3 text-sm font-medium text-navy/85 sm:text-base">{c.org}</p>
                <h2 className="mb-8 font-display text-xl font-bold leading-snug text-navy sm:text-2xl">
                  {c.headline}
                </h2>
                <StatGrid stats={c.stats} />
              </article>
            ))}
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
