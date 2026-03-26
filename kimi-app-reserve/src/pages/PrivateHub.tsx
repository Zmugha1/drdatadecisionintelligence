import PageShell from '@/components/PageShell';
import { Shield, Lock, Eye, FileCheck, Server, Database, BarChart3, CheckCircle } from 'lucide-react';

const PrivateHub = () => {
  const pillars = [
    {
      icon: Server,
      number: '01',
      title: 'Zero-Cloud Residency',
      description:
        'Your client interactions are your most valuable asset. In the Private Hub, the AI "brain" runs locally on a dedicated office server.',
      benefit: 'No data is sent to OpenAI, Google, or Microsoft. Your secrets stay yours.',
    },
    {
      icon: Eye,
      number: '02',
      title: '"Truth-Link" Auditability',
      description:
        'Every insight on your dashboard is backed by a digital receipt. If the system flags a "High-Risk Customer," you can click a single button to see the exact timestamp and transcript line that triggered the alert.',
      benefit: 'Total confidence during audits or legal reviews. No "black box" logic.',
    },
    {
      icon: Lock,
      number: '03',
      title: 'Deterministic Governance',
      description:
        'Standard AI is unpredictable. Dr. Data is prescriptive. We hard-code your specific business rules and compliance policies (GDPR, HIPAA, or internal standards) directly into the processing engine.',
      benefit: "The AI is forced to follow your rules, redacting sensitive info automatically before it's even analyzed.",
    },
  ];

  const phases = [
    {
      phase: '01. Ingest',
      action: 'Connects to your Zoom, Email, and Phone systems securely.',
      result: 'One stream for all client data.',
    },
    {
      phase: '02. Structure',
      action: 'Transcribes, redacts PII, and links records to your CRM.',
      result: 'A clean, searchable Knowledge Graph.',
    },
    {
      phase: '03. Decide',
      action: 'Runs local AI to score sentiment, risk, and opportunities.',
      result: 'A live Dashboard with clear "Next Steps."',
    },
  ];

  const prescriptionPoints = ['One-time hardware setup.', 'Zero per-user monthly fees.', '100% Audit-ready.'];

  return (
    <PageShell>
      <section className="px-4 pb-12 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-teal/10 px-4 py-2 text-sm font-medium text-teal">
            <Shield className="h-4 w-4" />
            For Small Businesses (1-30 Employees)
          </div>

          <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-navy sm:text-5xl lg:text-6xl">
            Finally: AI That Doesn&apos;t Leak Your <span className="text-teal">Business Secrets</span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-navy/70 sm:text-xl">
            You&apos;ve heard the AI hype, but you&apos;ve also heard the warnings. Most AI tools &quot;borrow&quot; your
            data to train their systems. For a small business, that&apos;s not just a risk—it&apos;s a liability.
          </p>

          <div className="mx-auto max-w-3xl rounded-2xl border border-teal/30 bg-white/90 p-8 shadow-card backdrop-blur-sm">
            <div className="flex items-start gap-4 text-left">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-teal">
                <Database className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-navy">The Dr. Data Private Hub</h3>
                <p className="text-navy/70">
                  A decision-ready intelligence system built inside your own four walls. We connect your &quot;dark
                  silos&quot;—Zoom calls, emails, and phone transcripts—into a single, auditable dashboard that lives on
                  your hardware.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-teal">Core Features</p>
            <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">The Three Pillars of Your Private Hub</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="rounded-2xl border border-navy/10 bg-cream p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-card-hover"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal">
                    <pillar.icon className="h-7 w-7 text-white" />
                  </div>
                  <span className="text-5xl font-bold text-navy/10">{pillar.number}</span>
                </div>

                <h3 className="mb-4 text-xl font-bold text-navy">{pillar.title}</h3>

                <p className="mb-6 leading-relaxed text-navy/70">{pillar.description}</p>

                <div className="rounded-lg bg-teal/10 p-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" />
                    <p className="text-sm font-medium text-navy">
                      <span className="text-teal">The Benefit:</span> {pillar.benefit}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-teal">Process</p>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">How It Works for You</h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full">
              <thead>
                <tr className="bg-white/10">
                  <th className="px-6 py-4 text-left font-semibold text-teal">Phase</th>
                  <th className="px-6 py-4 text-left font-semibold text-teal">What Dr. Data Does</th>
                  <th className="px-6 py-4 text-left font-semibold text-teal">What You Get</th>
                </tr>
              </thead>
              <tbody>
                {phases.map((phase, index) => (
                  <tr key={index} className="border-t border-white/10 transition-colors hover:bg-white/5">
                    <td className="px-6 py-5">
                      <span className="font-bold text-teal">{phase.phase}</span>
                    </td>
                    <td className="px-6 py-5 text-white/80">{phase.action}</td>
                    <td className="px-6 py-5 text-white/80">{phase.result}</td>
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

            <h2 className="mb-4 font-display text-3xl font-bold text-white sm:text-4xl">The Dr. Data &quot;Prescription&quot;</h2>

            <p className="mb-10 text-xl font-medium text-teal">Stop renting &quot;best-effort&quot; AI. Own your intelligence.</p>

            <div className="mb-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
              {prescriptionPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-2 text-white/90">
                  <CheckCircle className="h-5 w-5 text-teal" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <a
              href="https://calendly.com/zubiaml4l/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-coral px-10 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-coral/90 hover:shadow-xl"
            >
              <BarChart3 className="h-5 w-5" />
              Get Your AI Readiness Score
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default PrivateHub;
