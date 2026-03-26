import PageShell from '@/components/PageShell';

const About = () => {
  return (
    <PageShell>
      <section className="px-4 pb-20 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wider text-teal sm:text-left">
            Company
          </p>
          <h1 className="mb-8 text-center font-display text-4xl font-bold text-navy sm:text-left sm:text-5xl">
            About Dr. Data
          </h1>

          <div className="space-y-6 rounded-2xl border border-navy/10 bg-white/90 p-8 shadow-card backdrop-blur-sm transition-shadow duration-300 hover:shadow-card-hover">
            <p className="text-lg leading-relaxed text-navy/80">
              Dr. Data Decision Intelligence was founded by Dr. Zubia Mughal, an enterprise AI and data research
              leader specializing in reliable machine learning, decision intelligence, and organizational adoption.
            </p>

            <p className="text-lg leading-relaxed text-navy/80">
              With years of experience in applied research and advisory for decision-ready AI systems, Dr. Mughal
              helps organizations bridge the gap between data collection and actionable insights.
            </p>

            <p className="text-lg leading-relaxed text-navy/80">
              Our mission is simple: transform scattered data into confident decisions. No drama. Just data that
              works.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default About;
