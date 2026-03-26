import PageShell from '@/components/PageShell';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'Professional Services Firm',
      location: 'Milwaukee',
      result: '40% improvement in churn prediction accuracy',
      quote:
        "Dr. Data helped us see patterns in our client communications we'd been missing for years. Finally we understand WHY clients leave, not just who.",
    },
    {
      title: 'Manufacturing Company',
      location: 'Chicago',
      result: 'Reduced forecasting errors by 35%',
      quote:
        'The predictive models Dr. Data built transformed how we plan inventory. We went from reactive to proactive.',
    },
    {
      title: 'Healthcare Provider',
      location: 'Madison',
      result: 'Identified $2M in operational savings',
      quote:
        "Dr. Data's decision intelligence framework helped us spot inefficiencies we didn't know existed.",
    },
  ];

  return (
    <PageShell>
      <section className="px-4 pb-20 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-center font-display text-4xl font-bold text-navy sm:text-5xl">Case Studies</h1>

          <p className="mb-12 text-center text-lg leading-relaxed text-navy/70">
            Real results from real organizations. See how Dr. Data has helped businesses transform their data into
            confident decisions.
          </p>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <article
                key={index}
                className="rounded-2xl border border-navy/10 bg-white/90 p-8 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal/30 hover:shadow-card-hover"
              >
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <h3 className="text-xl font-bold text-navy">{study.title}</h3>
                  <span className="text-navy/50">• {study.location}</span>
                </div>
                <p className="mb-4 font-semibold text-teal">{study.result}</p>
                <blockquote className="italic text-navy/70">&ldquo;{study.quote}&rdquo;</blockquote>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default CaseStudies;
