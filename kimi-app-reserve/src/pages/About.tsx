import PageShell from '@/components/PageShell';
import SurveyCTA from '@/components/SurveyCTA';
import { Button } from '@/components/ui/button';
import {
  BarChart3,
  Brain,
  Briefcase,
  Calendar,
  Code2,
  Cpu,
  GraduationCap,
  Rocket,
  Scale,
  Shield,
  Sparkles,
  UserCheck,
  Users,
} from 'lucide-react';

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
      className={`rounded-2xl border border-navy/10 bg-white p-6 shadow-card ${
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
 * Full About page aligned with production deploy (kimi.link).
 */
const About = () => {
  return (
    <PageShell>
      {/* Hero */}
      <section className="px-4 pb-10 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 inline-flex items-center justify-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            About the Founder
          </p>
          <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-navy sm:text-5xl lg:text-6xl">
            From Code to <span className="text-teal">KPIs</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-navy/80 sm:text-xl">
            Dr. Zubia Mughal, Ed.D., 23-year trajectory from programming instructor to Lead Data Researcher, now
            building and validating AI agents that move business metrics.
          </p>
        </div>
      </section>

      {/* Story + feature cards */}
      <section className="px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl border border-navy/10 bg-white/95 p-8 shadow-card backdrop-blur-sm sm:p-10 lg:p-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
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
              {featureCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-navy/10 bg-cream/80 p-6 shadow-sm transition-shadow hover:shadow-card"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal/15 text-teal">
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
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-navy/10 bg-white/90 px-4 py-8 text-center shadow-sm"
            >
              <p className="font-display text-3xl font-bold text-teal sm:text-4xl">{s.value}</p>
              <p className="mt-2 text-sm font-medium leading-snug text-navy/70">{s.label}</p>
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
            {governancePillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="rounded-2xl border border-navy/10 bg-white/90 p-6 shadow-card"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <Icon className="h-5 w-5 text-teal" strokeWidth={2} />
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
            href="/?page=governance"
            className="inline-flex items-center gap-2 font-display font-semibold text-teal underline-offset-4 hover:underline"
          >
            Visit Governance &amp; Responsibility
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
            {approachSteps.map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border border-navy/10 bg-cream/60 p-8 text-center shadow-sm"
              >
                <h3 className="mb-4 font-display text-xl font-bold text-teal">{step.title}</h3>
                <p className="text-left text-base leading-relaxed text-navy/80">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA + survey */}
      <section
        className="px-4 pb-24 sm:px-6 lg:px-8"
        style={{
          background: 'linear-gradient(135deg, #4ECDC4 0%, #3BA99F 100%)',
        }}
      >
        <div className="mx-auto max-w-3xl px-2 py-16 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-white sm:text-4xl">
            Stop Data Hunting. Start Decision-Making.
          </h2>
          <p className="mb-2 text-lg text-white/95">
            Dr. Data turns your scattered information into governance-first intelligence you can actually trust.
          </p>
          <p className="mb-10 text-2xl font-bold text-white/90">Make $$ With Your Data Faster</p>
          <Button
            size="lg"
            className="mb-14 bg-coral px-8 py-6 font-display text-base font-semibold text-white shadow-lg hover:bg-coral/90"
            onClick={() => window.open('https://calendly.com/zubiaml4l/15min', '_blank')}
          >
            <Calendar className="mr-2 h-5 w-5" />
            BOOK A DISCOVERY CALL
          </Button>

          <SurveyCTA variant="light" />
        </div>
      </section>
    </PageShell>
  );
};

export default About;
