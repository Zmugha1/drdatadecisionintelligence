import { useEffect } from 'react';
import PageShell from '@/components/PageShell';
import SurveyCTA from '@/components/SurveyCTA';
import { hrefPage } from '@/lib/sitePaths';
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Brain,
  Briefcase,
  Calendar,
  Code2,
  Cpu,
  GraduationCap,
  Quote,
  Rocket,
  Scale,
  Shield,
  Sparkles,
  UserCheck,
  Users,
} from 'lucide-react';

const CALENDLY = 'https://calendly.com/zubiaml4l/15min';

const featureCards = [
  {
    icon: Brain,
    title: 'Agent Architecture',
    body:
      'GraphRAG • Neo4j • Vector DBs • LLM Orchestration (LangChain) • Azure AI Foundry • RAG Systems',
  },
  {
    icon: BarChart3,
    title: 'Decision Intelligence',
    body:
      'Churn Modeling • Survival Analysis • Forecasting • MLOps • KPI Architecture • Explainable AI (SHAP)',
  },
  {
    icon: GraduationCap,
    title: 'Research & Training Transfer',
    body: 'EdD Research • 70:20:10 Learning Frameworks • Organizational Change • Human-AI Interaction',
  },
];

const stats = [
  { value: '92,000+', label: 'Labor Hours Saved Annually' },
  { value: '23+', label: 'Years Technical Experience' },
  { value: '50+', label: 'ML Systems Deployed' },
  { value: '$4.6M+', label: 'Productivity Gains Delivered' },
];

const journey = [
  {
    year: '2002',
    title: 'Programming Foundations',
    icon: Code2,
    align: 'right' as const,
    body:
      'Started career teaching programming (C++, SQL, systems analysis) at community college level, building the technical foundation that would later power ML systems.',
  },
  {
    year: '2008',
    title: 'Enterprise Learning Leadership',
    icon: Users,
    align: 'left' as const,
    body:
      'Progressed to senior Instructional Design roles, specializing in technical training architecture for cloud, cybersecurity, and ERP systems adoption.',
  },
  {
    year: '2019',
    title: 'Doctoral Research Begins',
    icon: GraduationCap,
    align: 'right' as const,
    body:
      'Started EdD at UW-Stout, conducting quantitative research on workplace training transfer using statistical methods and ML algorithms for organizational effectiveness.',
  },
  {
    year: '2022',
    title: 'Decision Intelligence & AI',
    icon: Cpu,
    align: 'left' as const,
    body:
      'Pivoted to production AI/ML systems, architecting GraphRAG, MLOps governance, and predictive models that connect data to business KPIs.',
  },
  {
    year: '2024',
    title: 'Enterprise AI Leadership',
    icon: Briefcase,
    align: 'right' as const,
    body:
      'Served as Performance & Learning Analytics Lead, then promoted to Lead Data Researcher, part of team delivering 92,000+ labor hours saved annually.',
  },
  {
    year: '2025',
    title: 'Dr. Data + PhD Instructor',
    icon: Rocket,
    align: 'left' as const,
    body:
      'Launched Dr. Data consultancy while teaching Quantitative Research Methods to doctoral candidates at UW-Stout.',
  },
];

const governancePillars = [
  {
    icon: UserCheck,
    title: 'Human Accountability',
    body: 'Clear ownership and responsibility in every decision',
  },
  {
    icon: Shield,
    title: 'Deterministic Engineering',
    body: 'Predictable, repeatable outcomes you can rely on',
  },
  {
    icon: BarChart3,
    title: 'Transparent Decision Logic',
    body: 'Explainable AI with clear reasoning paths',
  },
  {
    icon: Scale,
    title: 'Regulatory Alignment',
    body: 'Governance designed for real compliance expectations',
  },
];

const approachSteps = [
  {
    title: 'Discover',
    body:
      'Uncover patterns in your data. Identify decision bottlenecks. Define KPIs that actually matter to executives.',
  },
  {
    title: 'Connect',
    body:
      'Build agents that unify fragmented systems. GraphRAG, LLM orchestration, and MLOps that connect data to meaning.',
  },
  {
    title: 'Decide',
    body:
      'Deliver decision-ready outputs. Clear actions tied to signals. Measurable outcomes that move the bottom line.',
  },
];

function JourneyRow({
  year,
  title,
  body,
  icon: Icon,
  align,
}: (typeof journey)[number]) {
  const cardInner = (
    <div
      className={`rounded-2xl border border-navy/10 border-l-[4px] border-l-teal bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover ${
        align === 'left' ? 'md:text-right' : ''
      }`}
    >
      <div
        className={`mb-3 flex flex-wrap items-center gap-2 ${align === 'left' ? 'md:flex-row-reverse md:justify-end' : ''}`}
      >
        <Icon className="h-5 w-5 shrink-0 text-teal" strokeWidth={2} />
        <span className="font-display text-sm font-bold text-teal">{year}</span>
      </div>
      <h3 className="mb-2 font-display text-lg font-bold text-navy">{title}</h3>
      <p className="text-base leading-relaxed text-navy/75">{body}</p>
    </div>
  );

  return (
    <div className="relative grid grid-cols-1 items-start gap-6 pb-12 last:pb-0 md:grid-cols-2 md:gap-10">
      {align === 'right' ? (
        <>
          <div className="hidden md:block" />
          <div className="relative md:pl-4">{cardInner}</div>
        </>
      ) : (
        <>
          <div className="relative md:pr-4">{cardInner}</div>
          <div className="hidden md:block" />
        </>
      )}
      <div
        className="absolute left-1/2 top-8 z-10 hidden -translate-x-1/2 md:block"
        aria-hidden
      >
        <div className="h-4 w-4 rounded-full border-2 border-teal bg-cream ring-4 ring-teal/20" />
      </div>
    </div>
  );
}

/**
 * About Dr. Data: founder story, mission, and approach (aligned with site chrome and folder copy).
 */
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-12 pt-6 sm:px-6 lg:px-8">
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
            About Dr. Data
          </div>

          <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-6xl">
            From Code to{' '}
            <span className="bg-gradient-to-r from-teal to-teal/70 bg-clip-text text-transparent">KPIs</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-navy/80 sm:text-xl">
            Dr. Data Decision Intelligence was founded by Dr. Zubia Mughal, Ed.D., an enterprise AI and data research
            leader focused on reliable machine learning, decision intelligence, and adoption. With years of applied
            research and advisory for decision-ready AI systems, she helps organizations bridge the gap between data
            collection and confident action.
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-navy/80 sm:text-xl">
            Her path: 23 years from programming instructor to Lead Data Researcher, now building and validating AI
            agents that move business metrics.
          </p>

          <div className="relative mt-10 overflow-hidden rounded-2xl bg-gradient-to-br from-mint/80 to-teal/5 p-6 ring-1 ring-teal/15 sm:p-8">
            <Quote
              className="absolute right-4 top-4 h-14 w-14 text-teal/15 sm:h-16 sm:w-16"
              strokeWidth={1}
              aria-hidden
            />
            <p className="relative text-center font-display text-lg font-semibold leading-relaxed text-navy/90 sm:text-xl">
              Our mission: transform scattered data into confident decisions. No drama. Just data that works.
            </p>
          </div>
        </div>
      </section>

      {/* Story + feature cards */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-navy/10 bg-white/95 p-8 shadow-card backdrop-blur-sm sm:p-10 lg:p-12">
          <div
            className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full opacity-[0.06]"
            style={{ background: 'radial-gradient(circle, #4ECDC4 0%, transparent 70%)' }}
            aria-hidden
          />
          <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="min-w-0 space-y-6">
              <h2 className="font-display text-2xl font-bold leading-snug text-navy sm:text-3xl">
                Bridging <span className="text-teal">Learning Science</span> &amp; Production AI
              </h2>
              <p className="text-lg leading-relaxed text-navy/80">
                I didn&apos;t come to AI through a bootcamp. I came through{' '}
                <strong className="font-semibold text-navy">two decades of technical work</strong>, teaching
                programming, architecting enterprise learning systems, and conducting doctoral research on training
                transfer optimization using statistical methods and ML algorithms.
              </p>
              <p className="text-lg leading-relaxed text-navy/80">
                In my latest engagement, I served as a data consultant and lead researcher on an enterprise AI
                Services team. I architected <strong className="font-semibold text-navy">GraphRAG knowledge graphs</strong>, implemented MLOps governance, and deployed predictive models (churn, risk, survival forecasting) that connected fragmented enterprise data to{' '}
                <strong className="font-semibold text-navy">confident business decisions</strong>.
              </p>
              <p className="text-lg leading-relaxed text-navy/80">
                My team delivered <strong className="font-semibold text-navy">92,000+ labor hours saved annually</strong>, equivalent to{' '}
                <strong className="font-semibold text-navy">$4.6M+ in productivity gains</strong>, through automated analytics and governance systems serving{' '}
                <strong className="font-semibold text-navy">1,500+ business users</strong>.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {featureCards.map((card, index) => {
                const Icon = card.icon;
                const accentTeal = index % 2 === 0;
                return (
                  <div
                    key={card.title}
                    className={`rounded-2xl border border-navy/10 border-l-[5px] bg-cream/80 p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-card ${
                      accentTeal ? 'border-l-teal' : 'border-l-coral'
                    }`}
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                          accentTeal ? 'bg-teal/15 text-teal' : 'bg-coral/15 text-coral'
                        }`}
                      >
                        <Icon className="h-6 w-6" strokeWidth={2} />
                      </span>
                      <h3 className="font-display text-lg font-bold text-navy">{card.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-navy/75">{card.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl bg-gradient-to-b from-white to-teal/5 px-3 py-6 text-center shadow-inner ring-1 ring-navy/10 sm:px-4 sm:py-8"
            >
              <p className="font-display text-2xl font-bold leading-tight text-teal sm:text-3xl md:text-4xl">{s.value}</p>
              <p className="mt-2 text-xs font-medium leading-snug text-navy/65 sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Journey */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-14 text-center font-display text-3xl font-bold text-navy sm:text-4xl">
            The <span className="text-teal">Journey</span>
          </h2>

          <div className="space-y-8 border-l-2 border-teal/50 pl-6 md:hidden">
            {journey.map((m) => {
              const Icon = m.icon;
              return (
                <div key={m.year} className="relative">
                  <span className="absolute -left-[29px] top-1 flex h-4 w-4 rounded-full border-2 border-teal bg-cream" />
                  <div className="mb-2 flex items-center gap-2">
                    <Icon className="h-5 w-5 text-teal" />
                    <span className="font-display text-sm font-bold text-teal">{m.year}</span>
                  </div>
                  <h3 className="mb-2 font-display text-lg font-bold text-navy">{m.title}</h3>
                  <p className="text-base leading-relaxed text-navy/75">{m.body}</p>
                </div>
              );
            })}
          </div>

          <div className="relative hidden md:block">
            <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-teal/60" aria-hidden />
            {journey.map((m) => (
              <JourneyRow key={m.year} {...m} />
            ))}
          </div>
        </div>
      </section>

      {/* Governance-first */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wider text-teal sm:text-left">
            Governance-First Agent Architecture
          </p>
          <h2 className="mb-6 text-center font-display text-3xl font-bold text-navy sm:text-left sm:text-4xl">
            AI Systems You Can Trust, Audit &amp; Defend
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-navy/80">
            I design agentic AI systems that organizations can trust, audit, and defend.
          </p>
          <p className="mb-10 text-lg leading-relaxed text-navy/80">
            While many AI solutions focus on speed and automation, my work focuses on:
          </p>

          <div className="mb-10 grid gap-6 sm:grid-cols-2">
            {governancePillars.map((p, index) => {
              const Icon = p.icon;
              const accentTeal = index % 2 === 0;
              return (
                <div
                  key={p.title}
                  className={`rounded-2xl border border-navy/10 border-l-[5px] bg-white/90 p-6 shadow-card transition-shadow hover:shadow-card-hover ${
                    accentTeal ? 'border-l-teal' : 'border-l-coral'
                  }`}
                >
                  <div className="mb-2 flex items-center gap-2">
                    <Icon className={`h-5 w-5 ${accentTeal ? 'text-teal' : 'text-coral'}`} strokeWidth={2} />
                    <h3 className="font-display text-lg font-bold text-navy">{p.title}</h3>
                  </div>
                  <p className="text-navy/75">{p.body}</p>
                </div>
              );
            })}
          </div>

          <p className="mb-4 text-lg leading-relaxed text-navy/80">
            I help organizations deploy AI without losing control, by building systems that are explainable, reviewable,
            and designed for responsible scale.
          </p>
          <p className="mb-8 text-lg font-medium leading-relaxed text-navy">
            This is AI built for real organizations, real risk, and real decisions.
          </p>
          <a
            href={hrefPage('governance')}
            className="inline-flex items-center gap-2 rounded-xl bg-teal px-5 py-3 font-display text-sm font-semibold text-navy shadow-md transition hover:bg-teal/90"
          >
            Visit Governance &amp; Responsibility
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Dr. Data Approach */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center font-display text-3xl font-bold text-navy sm:text-4xl">
            The Dr. Data Approach
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-navy/80">
            I work with data. I build agents to do that. Every system follows one path:{' '}
            <span className="font-semibold text-navy">Discover → Connect → Decide</span>
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {approachSteps.map((step, index) => {
              const accentTeal = index % 2 === 0;
              return (
                <div
                  key={step.title}
                  className={`rounded-2xl border border-navy/10 bg-cream/60 p-8 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-card ${
                    accentTeal ? 'border-t-[4px] border-t-teal' : 'border-t-[4px] border-t-coral'
                  }`}
                >
                  <h3 className="mb-4 font-display text-xl font-bold text-navy">
                    <span className={accentTeal ? 'text-teal' : 'text-coral'}>{step.title}</span>
                  </h3>
                  <p className="text-left text-base leading-relaxed text-navy/80">{step.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Calendly + survey */}
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
              Stop data hunting. Start decision-making.
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-base text-white/75">
              Book a short discovery call. We will map where decision intelligence fits your goals.
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
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-8 font-display text-lg font-semibold text-navy/90">
            Make progress with your data faster. Dr. Data turns scattered information into governance-first intelligence
            you can trust.
          </p>
          <SurveyCTA variant="light" />
        </div>
      </section>
    </PageShell>
  );
};

export default About;
