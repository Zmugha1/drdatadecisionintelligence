import PageShell from '@/components/PageShell';

const Blog = () => {
  const posts = [
    {
      title: 'Why Most AI Initiatives Fail (And How to Fix It)',
      date: 'January 15, 2026',
      excerpt:
        "The data exists, but it hasn't been translated into machine-interpretable meaning. Here's what successful organizations do differently.",
    },
    {
      title: 'From Dashboards to Decisions: The Trust Gap',
      date: 'January 8, 2026',
      excerpt:
        'Dashboards everywhere. Trust nowhere. Why teams still rely on intuition despite having data at their fingertips.',
    },
    {
      title: 'Decision Intelligence: A Practical Introduction',
      date: 'December 20, 2025',
      excerpt:
        'What is decision intelligence, and why should your organization care? A no-jargon guide for business leaders.',
    },
  ];

  return (
    <PageShell>
      <section className="px-4 pb-20 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-center font-display text-4xl font-bold text-navy sm:text-5xl">Blog</h1>

          <p className="mb-12 text-center text-lg leading-relaxed text-navy/70">
            Insights on decision intelligence, data strategy, and building AI systems that actually work.
          </p>

          <div className="space-y-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="cursor-pointer rounded-2xl border border-navy/10 bg-white/90 p-8 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-card-hover"
              >
                <p className="mb-2 text-sm text-navy/50">{post.date}</p>
                <h3 className="mb-3 font-display text-xl font-bold text-navy">{post.title}</h3>
                <p className="text-navy/70">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default Blog;
