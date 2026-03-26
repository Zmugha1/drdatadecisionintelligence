import PageShell from '@/components/PageShell';

const Blog = () => {
  const posts = [
    {
      href: '/?page=blog-data-to-money',
      title: 'From Data to $$$: How Decision Intelligence Recovers Hidden Revenue',
      date: 'February 2026',
      excerpt:
        'Most e-commerce businesses are sitting on a goldmine waiting to be uncovered. They have plenty of data. The opportunity lies in bridging the gap between raw data and revenue decisions.',
    },
    {
      href: '/?page=blog-data-readiness',
      title: 'The "Data Doctor" Readiness Scorecard: Is Your Business AI-Ready?',
      date: 'February 2026',
      excerpt:
        'Most Milwaukee business owners are sitting on a goldmine of data, but the mine is currently unstructured and unprimed. Take this 2-minute assessment to discover where you stand.',
    },
    {
      href: '/?page=blog-coaching-compass',
      title: 'Why Your Next High-Performing Client Will Not Come From Hustle',
      date: 'February 2026',
      excerpt:
        'How one 30-year coaching veteran stopped drowning in sticky notes and started trusting her gut again.',
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
              <a
                key={index}
                href={post.href}
                className="block rounded-2xl border border-navy/10 bg-white/90 p-8 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-card-hover"
              >
                <p className="mb-2 text-sm text-navy/50">{post.date}</p>
                <h3 className="mb-3 font-display text-xl font-bold text-navy">{post.title}</h3>
                <p className="text-navy/70">{post.excerpt}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default Blog;
