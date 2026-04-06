import { useEffect } from 'react';
import PageShell from '@/components/PageShell';
import { hrefPage } from '@/lib/sitePaths';
import { ArrowLeft, Calendar, Clock, Mail, Sparkles } from 'lucide-react';

const BlogPostFollowUpEmail = () => {
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
            <span className="rounded-full bg-teal/10 px-3 py-1 text-xs font-medium text-teal">Productivity</span>
            <span className="rounded-full bg-coral/10 px-3 py-1 text-xs font-medium text-coral">Skill Threshold Zone</span>
            <span className="rounded-full bg-navy/10 px-3 py-1 text-xs font-medium text-navy">Professional Practice</span>
          </div>

          <h1 className="mb-4 font-display text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl">
            The Follow-Up Email Problem: How Much Expert Time Are You Actually Wasting?
          </h1>

          <p className="mb-6 text-lg font-medium leading-relaxed text-navy/80 sm:text-xl">
            A simple calculation that will change how you think about the first hour after every meeting.
          </p>

          <div className="mb-10 flex flex-wrap items-center gap-4 text-sm text-navy/50">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              March 2026
            </span>
            <span aria-hidden>•</span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              12 min read
            </span>
            <span aria-hidden>•</span>
            <span>By Dr. Zubia Mughal, Ed.D.</span>
          </div>
        </div>
      </section>

      <article className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-4 text-base leading-relaxed text-navy/80 sm:text-lg">
          <p>
            The meeting ends. It went well. You made a real connection, learned something important, and left feeling
            like something might actually happen.
          </p>
          <p>
            Then you sit down to write the follow-up email. Forty-five minutes later you are still writing it. You have
            rewritten the opening three times. You finally send something that is good enough but not great, and you
            know it.
          </p>
          <p>
            This happens after almost every meeting for almost every professional I have worked with. Attorney, financial
            advisor, coach, consultant, HR professional. It does not matter. The follow-up email is one of the most
            time-consuming, inconsistently executed jobs in professional practice.
          </p>
          <p>And almost no one has done the math on what it is actually costing them.</p>

          <h2 className="mt-12 font-display text-2xl font-bold text-navy sm:text-3xl">Do the calculation</h2>
          <div className="my-6 rounded-2xl border border-navy/10 bg-navy p-6 text-white shadow-card sm:p-8">
            <ul className="space-y-2 text-base sm:text-lg">
              <li className="flex justify-between gap-4 border-b border-white/10 pb-2">
                <span className="text-white/75">Average time to write one follow-up email</span>
                <span className="font-semibold text-teal">35 minutes</span>
              </li>
              <li className="flex justify-between gap-4 border-b border-white/10 pb-2">
                <span className="text-white/75">Meetings per week requiring a follow-up</span>
                <span className="font-semibold text-teal">5</span>
              </li>
              <li className="flex justify-between gap-4 border-b border-white/10 pb-2">
                <span className="text-white/75">Hours per week</span>
                <span className="font-semibold text-teal">2.9 hours</span>
              </li>
              <li className="flex justify-between gap-4 border-b border-white/10 pb-2">
                <span className="text-white/75">Your hourly rate</span>
                <span className="font-semibold text-teal">$150</span>
              </li>
              <li className="flex justify-between gap-4 border-b border-white/10 pb-2">
                <span className="text-white/75">Weekly cost</span>
                <span className="font-semibold text-coral">$435</span>
              </li>
              <li className="flex justify-between gap-4 pt-1">
                <span className="text-white/75">Annual cost</span>
                <span className="font-semibold text-coral">$20,880</span>
              </li>
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-white/80">
              That is not money you spend. It is expert time you lose. Every week. On one job.
            </p>
          </div>

          <h2 className="mt-12 font-display text-2xl font-bold text-navy sm:text-3xl">Why this job is so expensive</h2>
          <p>
            The follow-up email feels like a small task. It is not. It requires you to hold the entire context of a
            conversation in your head, make judgment calls about what to emphasize, adapt your tone to this specific
            person, and produce writing that represents your expertise and your brand.
          </p>
          <p>
            That is not execution work. That is judgment work. And you are spending the first 35 minutes after every
            meeting doing execution work, drafting, formatting, word choice, when what you were actually hired for is
            judgment.
          </p>
          <p>
            Your client is not paying for the email. They are paying for what the email represents. The email is just the
            delivery mechanism. So why are you spending 35 minutes on the mechanism?
          </p>

          <h2 className="mt-12 font-display text-2xl font-bold text-navy sm:text-3xl">
            What changes when you work inside your Zone
          </h2>
          <p>
            Below the Zone on this job looks like this: you write every email from scratch, spend 30 to 45 minutes per
            follow-up, quality varies depending on how tired you are, and sometimes you forget to send it at all.
          </p>
          <p>
            Inside the Zone looks like this: AI reads the transcript and drafts the email in your voice. You spend 4
            minutes reviewing it, change one sentence that only you would know to change, and send it within the hour.
            Every time. Regardless of how many other things are demanding your attention.
          </p>
          <p>
            The difference is not the quality of the email. Both versions can be excellent. The difference is where your
            expertise goes. Below the Zone it goes into execution. Inside the Zone it goes into the one judgment call
            that makes the email land, the sentence that shows you were actually listening.
          </p>

          <h2 className="mt-12 font-display text-2xl font-bold text-navy sm:text-3xl">
            Why generic AI tools do not fix this
          </h2>
          <p>
            If you have tried using ChatGPT to write your follow-ups you already know the problem. The output sounds like
            everyone else. It opens with &quot;I hope this email finds you well.&quot; Professionally worded. Completely
            forgettable.
          </p>
          <p>
            That is not a problem with AI. That is a problem with how it was instructed. A generic tool produces generic
            output because it has no idea how you think, what you always include, or why a specific detail from this
            specific conversation matters more than the three obvious points any assistant would pull out.
          </p>
          <p>
            When AI is trained on your voice, your reasoning, your language, your quality standard, it produces the
            structure and the substance. You add the one sentence only you could write. The email goes out in four minutes
            instead of forty-five.
          </p>
          <p>
            There is also the privacy question. If your meetings involve client financial data, legal matters, or health
            information, sending transcripts into a cloud tool creates a compliance risk most professionals have not fully
            thought through. A private, locally-run system eliminates that risk. The transcript stays on your machine. The
            draft appears. Nothing goes to the cloud.
          </p>

          <h2 className="mt-12 font-display text-2xl font-bold text-navy sm:text-3xl">The practical shift</h2>
          <p>Moving inside the Zone on the follow-up job requires three things.</p>
          <p>
            <strong className="text-navy">First,</strong> a way to capture the meeting. A transcript from Zoom, Fathom, or
            Tactiq. If you are already recording meetings you have this.
          </p>
          <p>
            <strong className="text-navy">Second,</strong> a system that knows your voice. How you write, what you always
            include, what you never say. This is what separates output that sounds like you from output that sounds like
            generic AI.
          </p>
          <p>
            <strong className="text-navy">Third,</strong> a boundary. You always read the draft before it sends. Always.
            The AI handles the execution. You keep the judgment. That boundary is what keeps you inside the Zone.
          </p>
          <p>
            With those three things in place the meeting ends, the transcript gets processed, and the draft is waiting
            before you have even opened your laptop bag.
          </p>

          <h2 className="mt-12 font-display text-2xl font-bold text-navy sm:text-3xl">
            What this is worth over a year
          </h2>
          <p>
            If the follow-up job costs you $20,880 a year in lost expert time, and you reduce each email from 35 minutes
            to 4 minutes, you recover roughly $18,000 of that time annually.
          </p>
          <p>
            That is three hours a week redirected from execution to judgment. From managing your practice to building it.
          </p>
          <p>
            And that is one job. Most professionals have five to eight recurring jobs with the same profile. The follow-up
            email is just the most visible because it happens after every meeting without exception.
          </p>
          <p>
            The question is not whether to automate the execution layer of your recurring work. The question is which job
            you start with.
          </p>
          <p>For most people I work with, the answer is this one.</p>

          <div className="mt-12 rounded-2xl border border-teal/25 bg-mint/50 p-6 sm:p-8">
            <div className="mb-3 flex items-center gap-2 text-teal">
              <Sparkles className="h-5 w-5" />
              <span className="text-xs font-semibold uppercase tracking-wider">Framework</span>
            </div>
            <h3 className="font-display text-lg font-bold text-navy">About the Skill Threshold Zone Framework</h3>
            <p className="mt-3 text-sm leading-relaxed text-navy/75">
              The Skill Threshold Zone (STZ) is a proprietary five-layer methodology developed by Dr. Zubia Mughal, Ed.D.
              and Dr. Data Decision Intelligence LLC. All rights reserved. The STZ Framework defines how human expertise
              and AI capability are structured, governed, and compounded inside any professional practice.
            </p>
          </div>

          <div className="mt-10 rounded-xl border border-navy/10 bg-cream/80 p-6 text-center">
            <Mail className="mx-auto mb-3 h-8 w-8 text-teal" />
            <p className="text-sm text-navy/75">
              Questions about bringing execution work inside your Zone?{' '}
              <a
                href="https://calendly.com/zubiaml4l/15min"
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

export default BlogPostFollowUpEmail;
