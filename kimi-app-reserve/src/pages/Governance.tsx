import PageShell from '@/components/PageShell';
import { CheckCircle, Shield, FileText } from 'lucide-react';

const Governance = () => {
  const principles = [
    {
      icon: Shield,
      title: 'Data Privacy First',
      description: 'Your data never leaves your control. We design systems with privacy by default.',
    },
    {
      icon: FileText,
      title: 'Auditability',
      description: 'Every decision is traceable. Full transparency in how AI systems arrive at conclusions.',
    },
    {
      icon: CheckCircle,
      title: 'Compliance Ready',
      description: 'Built to meet GDPR, HIPAA, and industry-specific regulatory requirements.',
    },
  ];

  return (
    <PageShell>
      <section className="px-4 pb-20 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-center font-display text-4xl font-bold text-navy sm:text-5xl">
            Governance & Responsibility
          </h1>

          <p className="mb-12 text-center text-lg leading-relaxed text-navy/70">
            Responsible AI isn&apos;t an afterthought—it&apos;s built into everything we do. From data handling to
            model deployment, we prioritize transparency, accountability, and trust.
          </p>

          <div className="mb-12 grid gap-8 md:grid-cols-3">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="rounded-2xl border border-navy/10 bg-white/90 p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal">
                  <principle.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-navy">{principle.title}</h3>
                <p className="text-sm text-navy/70">{principle.description}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-white/10 bg-navy p-8 text-white shadow-card">
            <h2 className="mb-4 font-display text-2xl font-bold">Our Commitment</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" />
                <span>No data sharing with third-party AI providers</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" />
                <span>Full documentation of model decisions and logic</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" />
                <span>Regular bias audits and fairness assessments</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" />
                <span>Human-in-the-loop for critical decisions</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default Governance;
