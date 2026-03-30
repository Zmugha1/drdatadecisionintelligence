import { useEffect, useState } from 'react';
import PageShell from '@/components/PageShell';
import { getCaseStudy, type CaseStudyDef } from '@/data/caseStudiesData';
import { hrefPage } from '@/lib/sitePaths';
import { ArrowLeft, ArrowRight, BarChart3, CheckCircle2, Play, RotateCcw, TrendingUp } from 'lucide-react';

const CALENDLY = 'https://calendly.com/zubiaml4l/15min';

function StatGrid({ stats }: { stats: CaseStudyDef['stats'] }) {
  return (
    <div className="mt-6 grid min-w-0 gap-3 sm:grid-cols-3 lg:mt-0 lg:max-w-md lg:flex-1">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-xl border border-navy/10 bg-white px-3 py-4 text-center shadow-sm sm:px-4"
        >
          <p className="font-display text-xl font-bold text-teal sm:text-2xl">{s.value}</p>
          <p className="mt-2 text-xs font-medium leading-snug text-navy/65 sm:text-sm">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

function DemoControls({
  onTogglePlay,
  onReset,
}: {
  onTogglePlay: () => void;
  onReset: () => void;
}) {
  return (
    <div className="flex flex-shrink-0 gap-2">
      <button
        type="button"
        onClick={onTogglePlay}
        className="inline-flex items-center gap-2 rounded-lg bg-teal px-4 py-2.5 text-sm font-semibold text-navy shadow-sm transition hover:bg-teal/90"
      >
        <Play className="h-4 w-4" />
        Play
      </button>
      <button
        type="button"
        onClick={onReset}
        className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/15"
      >
        <RotateCcw className="h-4 w-4" />
        Reset
      </button>
    </div>
  );
}

function ProgressBar({ total, current }: { total: number; current: number }) {
  return (
    <div className="mb-6 flex gap-1">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={`h-2 flex-1 rounded-full transition-colors ${i <= current ? 'bg-teal' : 'bg-white/20'}`}
        />
      ))}
    </div>
  );
}

function DarkMilwaukeeDemo({
  def,
  step,
  steps,
  onTogglePlay,
  onReset,
}: {
  def: CaseStudyDef;
  step: number;
  steps: CaseStudyDef['demoSteps'];
  onTogglePlay: () => void;
  onReset: () => void;
}) {
  const cur = steps[step];
  return (
    <div className="rounded-2xl bg-navy px-5 py-6 text-white shadow-xl sm:px-8 sm:py-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h4 className="font-display text-lg font-bold text-white">{def.demoTitle}</h4>
          <p className="mt-1 text-sm text-white/65">{def.demoSubtitle}</p>
        </div>
        <DemoControls onTogglePlay={onTogglePlay} onReset={onReset} />
      </div>

      {def.demoCounter ? (
        <p className="mb-4 text-center font-display text-xl font-bold text-teal sm:text-2xl">{def.demoCounter}</p>
      ) : null}

      <ProgressBar total={steps.length} current={step} />

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-white/15 bg-white/5 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-white/50">Sample record</p>
          <p className="mt-2 font-display text-lg font-bold text-white">Acme Corp</p>
          <p className="mt-3 text-sm text-coral">High churn risk · 78%</p>
          <p className="mt-2 text-xs text-white/60">Support tickets · 12 open</p>
          <p className="text-xs text-white/60">Invoice delays · 3</p>
          <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-4 text-sm font-semibold text-teal">
            <CheckCircle2 className="h-5 w-5 shrink-0" />
            Actionable intelligence ready
          </div>
        </div>

        <div>
          <p className="text-center text-[11px] font-semibold uppercase tracking-widest text-white/45">
            Step {step + 1} of {steps.length}
          </p>
          <h5 className="mt-2 text-center font-display text-lg font-bold text-white">{cur.title}</h5>
          <p className="mt-3 text-center text-sm leading-relaxed text-white/80">{cur.body}</p>
          <ul className="mt-6 space-y-2">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className={`flex items-center gap-2 text-sm ${i <= step ? 'text-teal' : 'text-white/35'}`}
              >
                <CheckCircle2 className={`h-4 w-4 shrink-0 ${i <= step ? 'opacity-100' : 'opacity-40'}`} />
                <span>{s.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function MetricsAustinDemo({
  def,
  step,
  steps,
  onTogglePlay,
  onReset,
}: {
  def: CaseStudyDef;
  step: number;
  steps: CaseStudyDef['demoSteps'];
  onTogglePlay: () => void;
  onReset: () => void;
}) {
  const cur = steps[step];
  return (
    <div className="rounded-2xl bg-navy px-5 py-6 text-white shadow-xl sm:px-8 sm:py-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h4 className="font-display text-lg font-bold text-white">{def.demoTitle}</h4>
          <p className="mt-1 text-sm text-white/65">{def.demoSubtitle}</p>
        </div>
        <DemoControls onTogglePlay={onTogglePlay} onReset={onReset} />
      </div>

      {def.demoCounter ? (
        <p className="mb-4 text-center font-display text-lg font-bold text-coral sm:text-xl">{def.demoCounter}</p>
      ) : null}

      <ProgressBar total={steps.length} current={step} />

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-white/15 bg-white/5 p-5">
          <div className="grid grid-cols-3 gap-3">
            {['Sales', 'Marketing', 'Finance'].map((t) => (
              <div key={t} className="text-center">
                <BarChart3 className="mx-auto h-8 w-8 text-coral" strokeWidth={1.5} />
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-wide text-white/70">{t}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-sm font-semibold text-coral">12 conflicting metrics found</p>
          <p className="mt-1 text-center text-xs text-white/55">3 different &quot;customer counts&quot;</p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-white/45">
            Step {step + 1} of {steps.length}
          </p>
          <h5 className="mt-2 font-display text-lg font-bold text-white">{cur.title}</h5>
          <p className="mt-3 text-sm leading-relaxed text-white/80">{cur.body}</p>
        </div>
      </div>
    </div>
  );
}

function GenericDarkDemo({
  def,
  step,
  steps,
  onTogglePlay,
  onReset,
}: {
  def: CaseStudyDef;
  step: number;
  steps: CaseStudyDef['demoSteps'];
  onTogglePlay: () => void;
  onReset: () => void;
}) {
  const cur = steps[step];
  return (
    <div className="rounded-2xl bg-navy px-5 py-6 text-white shadow-xl sm:px-8 sm:py-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h4 className="font-display text-lg font-bold text-white">{def.demoTitle}</h4>
          <p className="mt-1 text-sm text-white/65">{def.demoSubtitle}</p>
        </div>
        <DemoControls onTogglePlay={onTogglePlay} onReset={onReset} />
      </div>
      <ProgressBar total={steps.length} current={step} />
      <div className="rounded-xl border border-white/10 bg-white/5 p-6">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-white/45">
          Step {step + 1} of {steps.length}
        </p>
        <h5 className="mt-2 font-display text-lg font-bold text-teal">{cur.title}</h5>
        <p className="mt-3 text-sm leading-relaxed text-white/85">{cur.body}</p>
      </div>
    </div>
  );
}

type Props = { pageKey: string };

export default function CaseStudyDetail({ pageKey }: Props) {
  const data = getCaseStudy(pageKey);
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);

  const steps = data?.demoSteps ?? [];

  useEffect(() => {
    if (!playing || steps.length === 0) return;
    const id = window.setInterval(() => {
      setStep((s) => (s >= steps.length - 1 ? 0 : s + 1));
    }, 2800);
    return () => window.clearInterval(id);
  }, [playing, steps.length]);

  useEffect(() => {
    setStep(0);
    setPlaying(false);
  }, [pageKey]);

  const reset = () => {
    setPlaying(false);
    setStep(0);
  };

  if (!data) {
    return (
      <PageShell>
        <section className="px-4 py-20 pt-6 sm:px-6">
          <div className="mx-auto max-w-lg text-center">
            <p className="text-navy/80">Case study not found.</p>
            <a href={hrefPage('case-studies')} className="mt-4 inline-block font-semibold text-teal hover:underline">
              Back to all case studies
            </a>
          </div>
        </section>
      </PageShell>
    );
  }

  const demoProps = {
    onTogglePlay: () => setPlaying((p) => !p),
    onReset: reset,
  };

  const demoBlock =
    data.demoVariant === 'dark' ? (
      <DarkMilwaukeeDemo def={data} step={step} steps={steps} {...demoProps} />
    ) : data.demoVariant === 'metrics' ? (
      <MetricsAustinDemo def={data} step={step} steps={steps} {...demoProps} />
    ) : (
      <GenericDarkDemo def={data} step={step} steps={steps} {...demoProps} />
    );

  return (
    <PageShell>
      <section className="px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <a
            href={hrefPage('case-studies')}
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-teal transition hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            All case studies
          </a>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="min-w-0 flex-1">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-teal">{data.tag}</p>
              <p className="mb-4 text-base font-medium text-navy/85">{data.org}</p>
              <h1 className="font-display text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-[2.1rem]">
                {data.headline}
              </h1>
            </div>
            <StatGrid stats={data.stats} />
          </div>

          <div className="mt-10">{demoBlock}</div>

          <div className="mt-14 grid gap-10 lg:grid-cols-3 lg:gap-8">
            <div>
              <h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-teal">The Challenge</h2>
              <p className="text-sm leading-relaxed text-navy/80 sm:text-base">{data.challenge}</p>
            </div>
            <div>
              <h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-teal">The Solution</h2>
              <p className="text-sm leading-relaxed text-navy/80 sm:text-base">{data.solution}</p>
            </div>
            <div>
              <h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-teal">The Results</h2>
              <ul className="space-y-3 text-sm text-navy/80 sm:text-base">
                {data.results.map((r) => (
                  <li key={r} className="flex gap-2">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal" aria-hidden>
                      <TrendingUp className="h-3 w-3" strokeWidth={2.5} />
                    </span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <figure className="mt-14 rounded-2xl border border-navy/10 bg-white/90 p-8 shadow-card">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal">Client perspective</p>
            <blockquote className="text-lg italic leading-relaxed text-navy/85">
              &ldquo;{data.clientQuote}&rdquo;
            </blockquote>
          </figure>

          <div className="mt-14 flex justify-center">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-navy px-8 py-3.5 font-display font-semibold text-white shadow-lg transition hover:bg-navy/90"
            >
              Discuss a similar project
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
