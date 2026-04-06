import { useMemo, useState } from 'react';
import PageShell from '@/components/PageShell';
import BlogSubscribe from '@/components/BlogSubscribe';
import SurveyCTA from '@/components/SurveyCTA';
import { BLOG_FILTERS, BLOG_INDEX_INTRO, BLOG_POSTS, type BlogFilterId } from '@/data/blogPostsData';
import { hrefPage } from '@/lib/sitePaths';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Blog = () => {
  const [filter, setFilter] = useState<BlogFilterId>('all');

  const visiblePosts = useMemo(() => {
    if (filter === 'all') return BLOG_POSTS;
    return BLOG_POSTS.filter((p) => p.filter === filter);
  }, [filter]);

  return (
    <PageShell>
      <section className="relative overflow-hidden px-4 pb-10 pt-6 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 opacity-35" aria-hidden>
          <div
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(78, 205, 196, 0.35) 0%, transparent 70%)' }}
          />
          <div
            className="absolute -bottom-24 left-1/4 h-64 w-64 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(224, 122, 95, 0.18) 0%, transparent 70%)' }}
          />
        </div>

        <div className="relative mx-auto max-w-3xl">
          <a
            href={hrefPage('home')}
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-teal transition hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </a>

          <h1 className="font-display text-4xl font-bold tracking-tight text-navy sm:text-5xl">Blog</h1>
          <p className="mt-4 text-lg leading-relaxed text-navy/75 sm:text-xl">{BLOG_INDEX_INTRO}</p>

          {/* Category filters (matches kimi.link) */}
          <div
            className="mt-8 flex flex-wrap gap-2 border-b border-navy/10 pb-6"
            role="tablist"
            aria-label="Filter posts by topic"
          >
            {BLOG_FILTERS.map((f) => {
              const active = filter === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(f.id)}
                  className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition ${
                    active
                      ? 'bg-teal text-navy shadow-sm'
                      : 'bg-white/90 text-navy/70 ring-1 ring-navy/10 hover:bg-teal/10 hover:text-navy'
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-8">
          {visiblePosts.length === 0 ? (
            <p className="text-center text-navy/60">No posts in this category yet.</p>
          ) : (
            visiblePosts.map((post, index) => {
              const hasArticle = Boolean(post.pageKey);
              const href = hasArticle && post.pageKey ? hrefPage(post.pageKey) : undefined;
              const accentTeal = index % 2 === 0;

              return (
                <article
                  key={post.id}
                  className="rounded-2xl border border-navy/10 bg-white/95 p-6 shadow-sm transition hover:shadow-card sm:p-8"
                >
                  <div className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-navy/55">
                    <time dateTime={post.date}>{post.date}</time>
                    <span aria-hidden className="text-navy/30">
                      ·
                    </span>
                    <span>{post.readTime}</span>
                    <span aria-hidden className="text-navy/30">
                      ·
                    </span>
                    <span className="font-medium text-teal">{post.categoryLabel}</span>
                  </div>

                  <h2 className="font-display text-xl font-bold leading-snug text-navy sm:text-2xl">{post.title}</h2>
                  <p className="mt-3 leading-relaxed text-navy/75">{post.excerpt}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-navy/[0.06] px-2.5 py-1 text-xs font-medium text-navy/75"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6">
                    {hasArticle && href ? (
                      <a
                        href={href}
                        className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 font-display text-sm font-semibold text-white shadow-md transition hover:scale-[1.02] hover:shadow-lg ${
                          accentTeal ? 'bg-teal text-navy hover:bg-teal/90' : 'bg-coral text-white hover:bg-coral/90'
                        }`}
                      >
                        Read article
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    ) : (
                      <span
                        className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-navy/15 bg-navy/[0.04] px-5 py-2.5 font-display text-sm font-semibold text-navy/45"
                        title="Article page coming soon"
                      >
                        Coming soon
                      </span>
                    )}
                  </div>
                </article>
              );
            })
          )}
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <BlogSubscribe />
        </div>
      </section>

      <section className="px-4 pb-24 pt-2 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SurveyCTA variant="light" />
        </div>
      </section>
    </PageShell>
  );
};

export default Blog;
