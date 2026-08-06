import { useEffect } from 'react';
import PageShell from '@/components/PageShell';
import { BOOKING_URL, hrefPage } from '@/lib/sitePaths';
import { ArrowLeft, Calendar, Clock, Server } from 'lucide-react';

const BlogPostMilwaukeeMspPrivateAiServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageShell>
      <section className="px-4 pb-6 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <a
            href={hrefPage('blog')}
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-teal transition hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </a>

          <div className="mb-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-teal/10 px-3 py-1 text-xs font-medium text-teal">AI Strategy</span>
            <span className="rounded-full bg-coral/10 px-3 py-1 text-xs font-medium text-coral">MSP</span>
            <span className="rounded-full bg-navy/10 px-3 py-1 text-xs font-medium text-navy">Private AI</span>
          </div>

          <h1 className="mb-4 font-display text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl">
            How Milwaukee MSPs Can Add Private AI to Their Services
          </h1>

          <p className="mb-6 text-lg font-medium leading-relaxed text-navy/80 sm:text-xl">
            Your clients are asking about AI. You do not want to send them to the cloud, and you cannot build models
            yourself. Here is the third option.
          </p>

          <div className="mb-10 flex flex-wrap items-center gap-4 text-sm text-navy/50">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              August 2026
            </span>
            <span aria-hidden>•</span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              6 min read
            </span>
            <span aria-hidden>•</span>
            <span>By Dr. Zubia Mughal, Ed.D.</span>
          </div>
        </div>
      </section>

      <article className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-4 text-base leading-relaxed text-navy/80 sm:text-lg">
          <p>
            If you run an MSP in the Milwaukee area, your clients are already asking you about AI. And you are stuck. You
            do not want to push them to the cloud with their sensitive data. You also cannot build large language models
            yourself, that is not what an MSP does. So the question sits there: how do you answer the AI question without
            either sending clients somewhere risky or pretending you have a solution you do not?
          </p>

          <h2 className="mt-12 font-display text-2xl font-bold text-navy sm:text-3xl">
            The opportunity most MSPs are missing
          </h2>
          <p>
            You do not have to build AI to offer it. You already own the two things that matter most: the client
            relationship and the hardware. What you are missing is the AI layer that sits on top. That layer is exactly
            what a private AI partner provides.
          </p>
          <p>
            Think about what you already do. You manage your clients&apos; machines. You handle their security, their
            backups, their networks. You are the trusted technical partner who shows up when something matters. Private AI
            fits directly into that. It runs on hardware, hardware you can spec, sell, and manage. It needs to be secure
            and maintained, which is your whole job. The only piece outside your wheelhouse is building and tuning the AI
            system itself. Partner for that piece, and you can offer private AI as a service under your own roof.
          </p>

          <h2 className="mt-12 font-display text-2xl font-bold text-navy sm:text-3xl">Why private and not cloud?</h2>
          <p>
            Because your clients trust you specifically because you protect their data. Sending them to a public AI tool
            undercuts the reason they hired you. A private AI system, running on hardware you manage, keeps their data in
            their building and keeps you as the owner of the relationship. It is an extension of what you already sell:
            control, security, ownership.
          </p>

          <h2 className="mt-12 font-display text-2xl font-bold text-navy sm:text-3xl">
            What does the partnership look like in practice?
          </h2>
          <p>
            You bring the client and the hardware. Your AI partner builds and maintains the private system that runs on
            it. You stay the face of the relationship. Your client gets AI that never sends their data to the cloud. And
            you add a new, high-value service line without hiring a machine-learning team.
          </p>
          <p>
            The MSPs who move first on this will own the category in their market. &quot;Private AI, managed by your
            MSP&quot; is a pitch almost no one in Wisconsin is making yet. The client demand is already here. The
            technology is ready. What is missing is the MSP willing to put their name on it, backed by a partner who
            builds the hard part.
          </p>
          <p>
            If you are a Milwaukee MSP and your clients keep asking about AI, there is a way to say yes that protects
            their data and grows your business. Private AI, on hardware you manage, built by a partner who handles the AI
            so you do not have to.
          </p>

          <div className="mt-10 rounded-xl border border-navy/10 bg-cream/80 p-6 text-center">
            <Server className="mx-auto mb-3 h-8 w-8 text-teal" />
            <p className="text-sm text-navy/75">
              MSP in the Milwaukee area exploring private AI for your clients?{' '}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-teal underline-offset-4 hover:underline"
              >
                Book a discovery call
              </a>
              .
            </p>
          </div>
        </div>
      </article>
    </PageShell>
  );
};

export default BlogPostMilwaukeeMspPrivateAiServices;
