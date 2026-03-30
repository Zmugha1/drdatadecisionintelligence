import PageShell from '@/components/PageShell';
import SurveyCTA from '@/components/SurveyCTA';
import { hrefPage } from '@/lib/sitePaths';
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BookOpen,
  Calendar,
  CheckCircle2,
  ClipboardList,
  Eye,
  FileText,
  Lock,
  Scale,
  Shield,
  Sparkles,
  UserCheck,
} from 'lucide-react';

const CALENDLY = 'https://calendly.com/zubiaml4l/15min';

const principles = [
  {
    icon: Shield,
    title: 'Data privacy first',
    description:
      'Your data stays under your control. We design for privacy by default: least privilege, encryption in transit and at rest where appropriate, and clear boundaries around what leaves your environment.',
  },
  {
    icon: FileText,
    title: 'Auditability',
    description:
      'Decisions should be traceable. We document model inputs, assumptions, and outputs so teams can explain what happened, when, and why. Transparency is not optional for decision-grade AI.',
  },
  {
    icon: CheckCircle2,
    title: 'Compliance-ready design',
    description:
      'Systems are shaped to support GDPR, HIPAA, and sector-specific expectations. We map requirements early so governance is part of the build, not a late scramble.',
  },
];

const pillars = [
  {
    icon: UserCheck,
    title: 'Human accountability',
    body: 'Clear ownership for data, models, and outcomes. Roles and escalation paths are defined before anything ships.',
  },
  {
    icon: Shield,
    title: 'Deterministic engineering',
    body: 'Repeatable pipelines, versioned artifacts, and controlled change management so behavior is predictable in production.',
  },
  {
    icon: BarChart3,
    title: 'Transparent decision logic',
    body: 'Explainable methods where it matters: feature attribution, documented rules, and reviewable prompts and retrieval context.',
  },
  {
    icon: Scale,
    title: 'Regulatory alignment',
    body: 'Controls and documentation structured to align with common frameworks and audits, not one-off heroics.',
  },
];

const deploymentChecklist = [
  {
    title: 'Data inventory and classification',
    detail: 'Know what you have, where it lives, and sensitivity labels before models consume it.',
  },
  {
    title: 'Access and least privilege',
    detail: 'Role-based access, service accounts, and logging for who touched what.',
  },
  {
    title: 'Model and prompt documentation',
    detail: 'Versioned definitions of models, prompts, retrieval corpora, and change history.',
  },
  {
    title: 'Monitoring and drift',
    detail: 'Dashboards and alerts for data drift, performance decay, and unexpected outputs.',
  },
  {
    title: 'Fairness and bias reviews',
    detail: 'Scheduled reviews of slices and protected attributes where your domain requires them.',
  },
  {
    title: 'Human review gates',
    detail: 'Defined thresholds for when a human must approve or override an automated recommendation.',
  },
  {
    title: 'Incident response',
    detail: 'Playbooks for rollback, communication, and root cause when something goes wrong.',
  },
  {
    title: 'Retention and deletion',
    detail: 'Policies that match legal and business requirements, with technical enforcement where possible.',
  },
];

const standardsAlignment = [
  {
    icon: ClipboardList,
    name: 'NIST AI Risk Management Framework',
    description:
      'We organize work around Govern, Map, Measure, and Manage so risks are identified early and owned explicitly.',
    accent: 'teal' as const,
  },
  {
    icon: BookOpen,
    name: 'ISO/IEC 42001 (AI management systems)',
    description:
      'Our delivery patterns support an AI management system mindset: policy, roles, lifecycle controls, and continual improvement.',
    accent: 'coral' as const,
  },
  {
    icon: Lock,
    name: 'Privacy and data protection',
    description:
      'Practices aligned with GDPR-style principles: purpose limitation, minimization, and accountability for cross-border or sensitive data.',
    accent: 'teal' as const,
  },
  {
    icon: Eye,
    name: 'Sector-specific care',
    description:
      'For regulated domains (for example health or finance), we layer controls and documentation appropriate to your obligations.',
    accent: 'coral' as const,
  },
];

const commitments = [
  'No wholesale export of your proprietary data to third-party model vendors without your explicit agreement and safeguards.',
  'Documentation of model behavior, data lineage, and decision logic suitable for internal audit and leadership review.',
  'Bias and fairness assessments on a cadence that matches your risk profile, not a one-time checkbox.',
  'Human-in-the-loop paths for high-impact or irreversible decisions.',
  'Clear contracts and SLAs around data handling, subprocessors, and incident notification.',
];

const Governance = () => {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-14 pt-6 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
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
            Trust &amp; accountability
          </div>

          <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Governance{' '}
            <span className="bg-gradient-to-r from-teal to-teal/70 bg-clip-text text-transparent">&amp; Responsibility</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-navy/80 sm:text-xl">
            Responsible AI is not an afterthought here. From data handling through model deployment, we prioritize
            transparency, accountability, and systems your legal and operations teams can defend.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-3 font-display text-2xl font-bold text-navy sm:text-3xl">What governance-first means</h2>
          <p className="mb-10 max-w-3xl text-lg text-navy/75">
            Decision intelligence only earns a seat at the table when leaders can trust the path from signal to action.
            These principles sit underneath every engagement.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((p, index) => {
              const Icon = p.icon;
              const accentTeal = index % 2 === 0;
              return (
                <div
                  key={p.title}
                  className={`rounded-2xl border border-navy/10 border-l-[5px] bg-white/95 p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover ${
                    accentTeal ? 'border-l-teal' : 'border-l-coral'
                  }`}
                >
                  <span
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${
                      accentTeal ? 'bg-teal text-white' : 'bg-coral text-white'
                    }`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <h3 className="mb-2 font-display text-lg font-bold text-navy">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-navy/75">{p.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-navy/10 bg-white/95 p-8 shadow-card sm:p-10">
          <div
            className="pointer-events-none absolute -left-12 bottom-0 h-40 w-40 rounded-full opacity-[0.07]"
            style={{ background: 'radial-gradient(circle, #2C3E50 0%, transparent 70%)' }}
            aria-hidden
          />
          <div className="relative">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-teal">Agent architecture</p>
            <h2 className="mb-8 font-display text-2xl font-bold text-navy sm:text-3xl">Pillars we design around</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {pillars.map((p, index) => {
                const Icon = p.icon;
                const accentTeal = index % 2 === 0;
                return (
                  <div
                    key={p.title}
                    className={`rounded-2xl border border-navy/10 bg-cream/60 p-6 ${
                      accentTeal ? 'border-t-[4px] border-t-teal' : 'border-t-[4px] border-t-coral'
                    }`}
                  >
                    <div className="mb-3 flex items-center gap-2">
                      <Icon className={`h-5 w-5 ${accentTeal ? 'text-teal' : 'text-coral'}`} strokeWidth={2} />
                      <h3 className="font-display text-lg font-bold text-navy">{p.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-navy/75">{p.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Deployment checklist — footer deep link */}
      <section id="checklist" className="scroll-mt-28 px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-3 font-display text-2xl font-bold text-navy sm:text-3xl">Deployment checklist</h2>
          <p className="mb-10 max-w-3xl text-lg text-navy/75">
            A practical list we use with clients before and during rollout. Your exact stack will vary; the pattern does
            not.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {deploymentChecklist.map((item, index) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-navy/10 bg-white/90 p-5 shadow-sm ring-1 ring-navy/5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/15 font-display text-sm font-bold text-teal">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display font-semibold text-navy">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-navy/70">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards — footer deep link */}
      <section id="standards" className="scroll-mt-28 px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-3 font-display text-2xl font-bold text-navy sm:text-3xl">Standards alignment</h2>
          <p className="mb-10 max-w-3xl text-lg text-navy/75">
            We do not claim certifications on your behalf. We do structure work so it lines up with frameworks your
            auditors and partners already recognize.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {standardsAlignment.map((s) => {
              const Icon = s.icon;
              const isTeal = s.accent === 'teal';
              return (
                <div
                  key={s.name}
                  className={`rounded-2xl border border-navy/10 bg-white/95 p-6 shadow-card transition-shadow hover:shadow-card-hover ${
                    isTeal ? 'border-l-[5px] border-l-teal' : 'border-l-[5px] border-l-coral'
                  }`}
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                        isTeal ? 'bg-teal/15 text-teal' : 'bg-coral/15 text-coral'
                      }`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <h3 className="font-display text-lg font-bold text-navy">{s.name}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-navy/75">{s.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-navy p-8 text-white shadow-xl sm:p-10">
          <div
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              background:
                'radial-gradient(ellipse at 20% 30%, rgba(78, 205, 196, 0.35) 0%, transparent 55%), radial-gradient(ellipse at 80% 70%, rgba(224, 122, 95, 0.2) 0%, transparent 50%)',
            }}
            aria-hidden
          />
          <div className="relative">
            <h2 className="mb-2 font-display text-2xl font-bold sm:text-3xl">Our commitment</h2>
            <p className="mb-8 max-w-2xl text-white/80">
              Concrete expectations when you work with Dr. Data on decision intelligence and agent systems.
            </p>
            <ul className="space-y-4">
              {commitments.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" strokeWidth={2} />
                  <span className="text-white/95">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Cross-link */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-teal/20 bg-gradient-to-br from-mint/80 to-teal/5 p-8 text-center ring-1 ring-teal/15">
          <p className="text-lg leading-relaxed text-navy/85">
            Want the founder story and how this shows up in delivery?{' '}
            <a href={hrefPage('about')} className="font-semibold text-teal underline-offset-4 hover:underline">
              Read About Dr. Data
            </a>
            .
          </p>
        </div>
      </section>

      {/* Calendly */}
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
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Talk through your governance gaps</h2>
            <p className="mx-auto mt-3 max-w-lg text-base text-white/75">
              Book a short call. We will map risks, controls, and a sensible path for your team.
            </p>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-teal px-8 py-3.5 font-display font-semibold text-navy shadow-lg transition hover:bg-teal/90"
            >
              <Calendar className="h-5 w-5" />
              Book a discovery call
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

export default Governance;
