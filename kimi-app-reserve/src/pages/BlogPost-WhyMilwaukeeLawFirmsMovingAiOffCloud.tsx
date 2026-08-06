import { useEffect } from 'react';
import PageShell from '@/components/PageShell';
import { BOOKING_URL, hrefPage } from '@/lib/sitePaths';
import { ArrowLeft, Calendar, Clock, Scale } from 'lucide-react';

const BlogPostWhyMilwaukeeLawFirmsMovingAiOffCloud = () => {
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
            <span className="rounded-full bg-coral/10 px-3 py-1 text-xs font-medium text-coral">Private AI</span>
            <span className="rounded-full bg-navy/10 px-3 py-1 text-xs font-medium text-navy">Law Firms</span>
          </div>

          <h1 className="mb-4 font-display text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl">
            Why Milwaukee Law Firms Are Moving AI Off the Cloud
          </h1>

          <p className="mb-6 text-lg font-medium leading-relaxed text-navy/80 sm:text-xl">
            Every firm is being pitched AI. Then the managing partner asks where the client data goes, and the
            conversation ends. Here is the private answer.
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
            Every law firm in Milwaukee is being pitched AI right now. Draft faster. Summarize discovery. Research in
            seconds. The demos are impressive. And then the managing partner asks one question that ends the conversation:
            where does the client data go?
          </p>
          <p>
            That question is why a growing number of firms are moving their AI off the cloud and onto their own machines.
          </p>

          <h2 className="mt-12 font-display text-2xl font-bold text-navy sm:text-3xl">
            Here is the problem with cloud AI for a law firm
          </h2>
          <p>
            Attorney-client privilege does not have an exception for &quot;we pasted it into a chatbot.&quot; When an
            associate drops a confidential memo into a public AI tool to summarize it, that document has left the
            firm&apos;s control. It traveled to a server the firm does not own, governed by terms the firm did not
            write. For most business documents, that is a manageable risk. For privileged material, it is a problem that
            can follow you into a courtroom.
          </p>
          <p>
            The instinct at a lot of firms has been to ban AI entirely. That does not work either. Associates use it
            anyway, on their personal accounts, on their phones, where the firm has zero visibility. Banning the tool
            does not remove the risk. It just hides it.
          </p>

          <h2 className="mt-12 font-display text-2xl font-bold text-navy sm:text-3xl">There is a third path</h2>
          <p>
            This is the one careful firms are taking. Run the AI privately. On-premise, or on hardware the firm controls,
            where the model never sends a document anywhere. The associate still gets the speed. The firm keeps the data
            behind its own walls.
          </p>

          <h2 className="mt-12 font-display text-2xl font-bold text-navy sm:text-3xl">
            What does that actually look like?
          </h2>
          <p>
            A private AI system installed on the firm&apos;s own equipment. It reads and drafts and summarizes like the
            cloud tools do, but every document stays inside the building. No data leaves. No third party sees the file.
            Nothing trains on your work product. When a client asks how you protect their information, the answer is
            simple and true: it never leaves our office.
          </p>
          <p>
            The technology to do this is mature now. What was a research project two years ago runs on a well-specced local
            machine today. The models are good enough. The hardware is affordable enough. The only thing missing at most
            firms is someone to build it and stand behind it.
          </p>
          <p>
            If you run a firm in the Milwaukee area and you have been stuck between &quot;AI is too risky&quot; and
            &quot;we cannot ignore AI,&quot; private on-premise AI is the answer that resolves the tension. You get the
            capability. You keep the confidentiality. You own the system.
          </p>
          <p>
            That is the whole idea behind private AI: your data never leaves your building. For a law firm, that is not a
            nice-to-have. It is the practice of law.
          </p>

          <div className="mt-10 rounded-xl border border-navy/10 bg-cream/80 p-6 text-center">
            <Scale className="mx-auto mb-3 h-8 w-8 text-teal" />
            <p className="text-sm text-navy/75">
              Running a Milwaukee-area firm and need AI that stays inside your walls?{' '}
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

export default BlogPostWhyMilwaukeeLawFirmsMovingAiOffCloud;
