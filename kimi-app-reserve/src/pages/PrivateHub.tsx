import PageShell from '@/components/PageShell';
import { BOOKING_URL } from '@/lib/sitePaths';
import { Shield, Lock, Eye, FileCheck, Server, Calendar, CheckCircle } from 'lucide-react';

const PrivateHub = () => {
  const pillars = [
    {
      icon: Server,
      number: '01',
      title: 'Zero-Cloud Residency',
      description:
        'The AI runs on hardware inside your walls. Nothing goes to OpenAI, Google, or Microsoft. Your secrets stay yours, because they physically never leave.',
    },
    {
      icon: Eye,
      number: '02',
      title: 'Truth-Link Auditability',
      description:
        'Every insight on your dashboard carries a digital receipt. Flag a high-risk client, and one click shows you the exact moment that triggered it. No black box. Total confidence in an audit or a legal review.',
    },
    {
      icon: Lock,
      number: '03',
      title: 'Deterministic Governance',
      description:
        'Standard AI guesses. Dr. Data obeys. Your compliance rules, HIPAA, GDPR, or your own standards, are built into the engine, so sensitive information is protected automatically, before anything is ever analyzed.',
    },
  ];

  const phases = [
    {
      phase: 'Ingest',
      description: 'Your calls, emails, and records become one secure stream.',
    },
    {
      phase: 'Structure',
      description: 'Everything is organized and secured into a searchable system you control.',
    },
    {
      phase: 'Decide',
      description: 'A live dashboard scores risk, sentiment, and opportunity, with clear next steps.',
    },
  ];

  const prescriptionPoints = [
    'One-time setup. No per-user monthly fees.',
    'Audit-ready from day one.',
    'Built in your building, for your business, owned by you.',
  ];

  return (
    <PageShell>
      <section className="bg-cream px-4 pb-12 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-teal/10 px-4 py-2 text-sm font-medium text-teal">
            <Shield className="h-4 w-4" />
            For small businesses that can&apos;t afford to leak
          </div>

          <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-navy sm:text-5xl lg:text-6xl">
            The cloud is not your friend. It&apos;s your competitor&apos;s training data.
          </h1>

          <p className="mx-auto mb-6 max-w-3xl text-lg leading-relaxed text-navy/70 sm:text-xl">
            Every AI tool on the market wants the same thing: your data. They call it the cloud. What it really means
            is that your client conversations, your pricing, your hard-won judgment get shipped to someone else&apos;s
            server, used to train a model your competitor also pays to use. You are not the customer. You are the raw
            material.
          </p>

          <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-navy/70 sm:text-xl">
            Dr. Data is built on the opposite belief. Your intelligence should live in your building, work for you
            alone, and never teach a machine that helps anyone else.
          </p>

          <p className="mx-auto mb-8 max-w-3xl rounded-2xl border border-navy/10 bg-white/60 px-6 py-5 text-lg leading-relaxed text-navy/80 sm:px-8">
            Dr. Data builds private AI for professional services that cannot risk client data in the cloud: law firms,
            accountants, financial advisors, and clinics. Everything runs on your own hardware, so confidential files
            never leave your building.
          </p>

          <p className="text-xl font-bold text-teal sm:text-2xl">Own your AI. Don&apos;t rent it.</p>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-navy sm:text-4xl">
            The problem nobody selling you AI will admit
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-navy/70">
            <p>
              Everyone is an AI consultant now. Most of them are reselling the same three cloud tools with a new logo on
              top. They will connect your business to a system they do not control, cannot audit, and do not own, and
              they will call it transformation.
            </p>
            <p>
              Here is what they will not tell you: the moment your data leaves your building, you have lost control of
              it. For a law firm, a clinic, a contractor with a pricing model built over twenty years, that is not a
              feature. It is a liability waiting to happen.
            </p>
            <p>
              Dr. Data was built by someone who spent years inside enterprise AI and decided the small business deserves
              the same protection the giants pay millions for. Not a wrapper. The real thing.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-navy sm:text-4xl">
            The line most people won&apos;t draw
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-navy/70">
            <p>
              Not all data is the same, and pretending it is gets small businesses hurt. Your client records, your
              pricing, your case files: that is your building&apos;s data, and it should never leave. Your marketing,
              your public presence, the content that helps people find you: that is meant for the world, and putting it
              in the cloud is the whole point.
            </p>
            <p>
              The tools flooding the market do not draw that line. They treat your confidential client data and your
              public marketing the same way, and ship all of it to someone else&apos;s server. That is the failure.
            </p>
            <p>
              Dr. Data draws the line and holds it. Your sensitive data stays in your building, always. Your public work
              goes out into the world, deliberately, with anything private masked before it ever leaves.{' '}
              <span className="font-bold text-teal">
                Cloud where it belongs. Local where it matters. Never the two confused.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-teal">Core Features</p>
            <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
              The Three Pillars of the Private Hub
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="rounded-2xl border border-navy/10 bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-card-hover"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal">
                    <pillar.icon className="h-7 w-7 text-white" />
                  </div>
                  <span className="text-5xl font-bold text-navy/10">{pillar.number}</span>
                </div>

                <h3 className="mb-4 text-xl font-bold text-navy">
                  {pillar.number}: {pillar.title}
                </h3>

                <p className="leading-relaxed text-navy/70">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-teal">Process</p>
            <h2 className="mb-6 font-display text-3xl font-bold text-white sm:text-4xl">How it works for you</h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/80">
              You bring the business. Dr. Data brings the system that turns your scattered client data into decisions
              you can defend.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full">
              <thead>
                <tr className="bg-white/10">
                  <th className="px-6 py-4 text-left font-semibold text-teal">Phase</th>
                  <th className="px-6 py-4 text-left font-semibold text-teal">What happens</th>
                </tr>
              </thead>
              <tbody>
                {phases.map((phase, index) => (
                  <tr key={index} className="border-t border-white/10 transition-colors hover:bg-white/5">
                    <td className="px-6 py-5">
                      <span className="font-bold text-teal">{phase.phase}</span>
                    </td>
                    <td className="px-6 py-5 text-white/80">{phase.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl bg-gradient-to-br from-navy to-navy/90 p-8 text-center sm:p-12">
            <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal">
              <FileCheck className="h-8 w-8 text-white" />
            </div>

            <h2 className="mb-4 font-display text-3xl font-bold text-white sm:text-4xl">
              The Dr. Data Prescription
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-xl font-medium leading-relaxed text-teal">
              Stop renting best-effort AI from people who profit when your data leaves. Own your intelligence.
            </p>

            <div className="mb-10 flex flex-col items-center justify-center gap-6 sm:flex-row sm:flex-wrap">
              {prescriptionPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-2 text-white/90">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-teal" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-coral px-10 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-coral/90 hover:shadow-xl"
            >
              <Calendar className="h-5 w-5" />
              Book a Discovery Call
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default PrivateHub;
