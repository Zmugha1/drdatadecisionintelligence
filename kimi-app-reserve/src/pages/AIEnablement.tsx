import { useState, type FormEvent } from 'react';
import PageShell from '@/components/PageShell';
import { BOOKING_URL } from '@/lib/sitePaths';
import { supabase } from '@/lib/supabase';
import { Calendar, Sparkles } from 'lucide-react';

const CURRICULUM_PATH = '/AI-Ready-Leadership-Program-Outline.pdf';

function looksLikeEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function triggerCurriculumDownload() {
  const link = document.createElement('a');
  link.href = CURRICULUM_PATH;
  link.download = 'AI-Ready-Leadership-Program-Outline.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const inputClassName =
  'w-full rounded-lg border border-navy/20 bg-white px-4 py-3 text-navy placeholder:text-navy/40 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 disabled:opacity-60';

const sections = [
  {
    title: 'The problem nobody owns',
    body: 'At a 40-person company, there is no AI admin. IT can turn the tools on, but nobody makes them usable. So Gemini is visible but can\'t reach your Drive. The prompt library, if there is one, is written for engineers, not for the office manager who needs it on a Tuesday. And because these tools inherit your existing file permissions, sloppy sharing becomes a search engine pointed at your own data. Enablement fails for human reasons, not technical ones. The configuration takes a day. Getting a company to actually change how it works takes a designed intervention.',
  },
  {
    title: 'What we actually do',
    body: 'We configure the tools you already sanction, and we teach the people who have to use them. On the Google side: license scoping by team, Gemini access per app, Drive cleanup, custom Gems by role. On the Claude side: organization instructions, shared Projects, standardized Skills so everyone runs the same version, verified connectors, usage analytics. Then the part most rollouts skip: a role-based prompt library in your team\'s own voice, a one-page sanctioned-use policy, and a plan to redirect the shadow AI. Configure, teach, measure. Owned end to end.',
  },
  {
    title: 'The outcome: your AI Enablement and Transformation Roadmap',
    body: 'Every engagement produces a clear deliverable: your AI Enablement and Transformation Roadmap. It maps which of your workflows are ready for AI today, which roles get which tools, where the risks are, and what to build next. It is the document your leadership uses to make AI a decision, not a guess. You own it, whether you keep working with us or not.',
  },
  {
    title: 'Why us',
    body: 'Our background is not IT. It is workforce development, an Ed.D. in how people actually adopt new ways of working. We configure the tool, we teach the people by role, and when the tool is not enough, we build the private system that is. That is the difference between buying AI and using it, and it is the entire job.',
  },
  {
    title: 'The AI Enablement Sprint',
    body: 'A fixed-scope engagement. It starts with an assessment of your real workflows, then configures your sanctioned tools, builds the role-based playbooks and prompt libraries, trains your people by role, and measures adoption before and after. Most enablement stops at \'we turned it on.\' We measure whether behavior actually changed and what it did for the business. Then a quarterly retune keeps it current, because Google and Anthropic ship changes every month.',
  },
] as const;

const leadershipBullets = [
  'See it clearly: what AI can realistically do for a business your size.',
  'Keep it safe: what data can leave your building and what must never, plus a one-page AI use policy.',
  'Find the money: spot the two or three AI uses that actually pay, and ignore the rest.',
  'Own it or rent it: when a subscription is fine, and when a private build you own wins.',
  'Bring the team: turn random results into a repeatable habit across your crew.',
  'Measure and scale: a 90-day rollout and governance that sticks.',
] as const;

const FRAMEWORK_DEMO_URL =
  'https://ai-adoption-universal-framework-vmc9fssq95qeyexjlhwbsb.streamlit.app/?embed_options=show_toolbar,light_theme,show_colored_line,show_padding,disable_scrolling,show_footer';

const frameworkPhases = [
  {
    title: 'Discovery and risk zoning',
    body: 'Every workflow classified GREEN (ready for AI now), YELLOW (needs configuration or guardrails first), or RED (regulated or confidential, must stay off any public AI). This becomes your one-page sanctioned-use policy.',
  },
  {
    title: 'Mapping skills and gaps',
    body: 'Connecting what your people do, what tools they use, and where the real gaps are, so training targets are measured, not guessed.',
  },
  {
    title: 'Targeted coaching and measurement',
    body: 'Short, specific coaching to close identified gaps, with adoption measured through to real behavior change, not just satisfaction scores.',
  },
] as const;

const closingSections = [
  {
    title: 'The workflows that should never touch the cloud',
    body: 'Every assessment surfaces two or three workflows that should not be in any public AI, sanctioned or not. Confidential client work, regulated data, your competitive edge. For those, configuring a public tool is the wrong answer. That is where we build you a private system that runs in your building, on the Dr. Data principle: cloud where it belongs, private where it matters.',
    subline: 'Own your AI. Don\'t rent it.',
  },
  {
    title: 'Who this is for',
    body: 'Small and mid-market companies across the Milwaukee and Chicago corridor, manufacturing, healthcare, professional services, that have paid for AI and are not getting the return. If your team has licenses they don\'t use, or people using personal accounts they shouldn\'t, this is the fix.',
  },
] as const;

const AIEnablement = () => {
  const [email, setEmail] = useState('');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'done'>('idle');
  const [validationError, setValidationError] = useState('');

  const completeCurriculumCapture = () => {
    triggerCurriculumDownload();
    setEmail('');
    setFormStatus('done');
  };

  const handleCurriculumSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setValidationError('');

    const trimmedEmail = email.trim();

    if (!trimmedEmail || !looksLikeEmail(trimmedEmail)) {
      setValidationError('Please enter a valid email address.');
      return;
    }

    setFormStatus('submitting');

    const leadId = crypto.randomUUID();

    const { error: leadError } = await supabase.from('leads').insert({
      id: leadId,
      email: trimmedEmail,
      source: 'leadership_training',
      card_id: 'ai_leadership_outline',
      stage: 'shared',
    });

    if (!leadError) {
      await supabase.from('events').insert({
        lead_id: leadId,
        type: 'download',
        source: 'leadership_training',
        card_id: 'ai_leadership_outline',
      });
    }

    completeCurriculumCapture();
  };

  return (
    <PageShell>
      <section className="bg-cream px-4 pb-12 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-teal/10 px-4 py-2 text-sm font-medium text-teal">
            <Sparkles className="h-4 w-4" />
            AI Enablement
          </div>

          <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-navy sm:text-5xl lg:text-6xl">
            You already pay for AI. Your team just isn&apos;t using it.
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-navy/70 sm:text-xl">
            Your company bought the licenses. Microsoft Copilot, Google Gemini, Claude. And still, the tools sit
            unused, while your people quietly paste client files and payroll into their own personal ChatGPT accounts
            at home. That is the real risk. Not the AI you sanctioned. The AI you can&apos;t see. We fix both sides: we
            make the AI you pay for actually get used, and we shut down the shadow AI you don&apos;t want.
          </p>

          <p className="mb-10 text-xl font-bold text-teal sm:text-2xl">
            We make AI actually get used. And we own it end to end.
          </p>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-coral px-10 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-coral/90 hover:shadow-xl"
          >
            <Calendar className="h-5 w-5" />
            Book an AI Readiness Call
          </a>
        </div>
      </section>

      {sections.map((section, index) => (
        <section
          key={section.title}
          className={`px-4 py-20 sm:px-6 lg:px-8 ${index % 2 === 0 ? 'bg-white' : 'bg-cream'}`}
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center font-display text-3xl font-bold text-navy sm:text-4xl">
              {section.title}
            </h2>
            <p className="text-lg leading-relaxed text-navy/70">{section.body}</p>
          </div>
        </section>
      ))}

      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-navy sm:text-4xl">
            Rather lead it yourself? Train your leaders.
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-navy/70">
            Some owners want it done for them. Others want to lead the change themselves. For them, we run AI-Ready
            Leadership: a small-cohort program that teaches owners and executives how to adopt AI safely, keep their
            data private, pick the uses that actually pay, and bring their team along. No hype. No jargon. Built for
            small business, with a track for your industry.
          </p>

          <ul className="mb-10 space-y-3 text-navy/80">
            {leadershipBullets.map((item) => (
              <li key={item} className="flex gap-3 text-base leading-relaxed sm:text-lg">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mb-10 text-center text-lg font-semibold text-navy">
            Every leader walks out with a written AI roadmap in hand.
          </p>

          <div className="mx-auto mb-10 max-w-xl rounded-2xl border border-navy/10 bg-white p-8 shadow-card sm:p-10">
            <h3 className="mb-3 text-center font-display text-2xl font-bold text-navy">See the full curriculum</h3>
            <p className="mb-6 text-center text-base leading-relaxed text-navy/80">
              Download the AI-Ready Leadership program outline: all six modules, the industry tracks, and how the
              cohort works.
            </p>

            {formStatus === 'done' ? (
              <p className="text-center font-medium text-teal">
                Thanks! Your curriculum is downloading. We&apos;ll be in touch.
              </p>
            ) : (
              <form onSubmit={handleCurriculumSubmit} className="space-y-4">
                {validationError ? (
                  <p className="rounded-lg bg-coral/10 px-4 py-3 text-sm text-navy/80">{validationError}</p>
                ) : null}
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  disabled={formStatus === 'submitting'}
                  className={inputClassName}
                />
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full rounded-lg bg-coral px-6 py-3 font-display font-semibold text-white transition-colors hover:bg-coral/90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send me the curriculum'}
                </button>
              </form>
            )}
          </div>

          <div className="text-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-coral px-10 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-coral/90 hover:shadow-xl"
            >
              <Calendar className="h-5 w-5" />
              Book a free AI Readiness for Leaders session
            </a>
          </div>
        </div>
      </section>

      {closingSections.map((section, index) => (
        <section
          key={section.title}
          className={`px-4 py-20 sm:px-6 lg:px-8 ${index % 2 === 0 ? 'bg-white' : 'bg-cream'}`}
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center font-display text-3xl font-bold text-navy sm:text-4xl">
              {section.title}
            </h2>
            <p className="text-lg leading-relaxed text-navy/70">{section.body}</p>
            {'subline' in section && section.subline ? (
              <p className="mt-8 text-center text-lg font-bold text-teal sm:text-xl">{section.subline}</p>
            ) : null}
          </div>
        </section>
      ))}

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-navy sm:text-4xl">
            The framework behind the work
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-navy/70">
            The AI Enablement Sprint is not theory. It comes from real enterprise practice. Dr. Zubia Mughal helped
            architect AI adoption across a 1,500-user enterprise: connecting siloed systems, classifying workflows by
            risk, and moving adoption from a small fraction of staff to the majority. That same methodology, simplified
            for small and mid-market business, is what we deliver today.
          </p>

          <h3 className="mb-8 text-center font-display text-2xl font-bold text-navy sm:text-3xl">
            How the framework works
          </h3>
          <div className="mx-auto mb-12 max-w-3xl space-y-8">
            {frameworkPhases.map((phase) => (
              <div key={phase.title}>
                <h4 className="mb-3 font-display text-lg font-bold text-teal sm:text-xl">{phase.title}</h4>
                <p className="text-base leading-relaxed text-navy/70 sm:text-lg">{phase.body}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mb-16 max-w-3xl text-center text-lg leading-relaxed text-navy/70">
            This is the backbone of both the AI Enablement Sprint and the AI-Ready Leadership program. Every engagement
            ends with your own risk classification, a one-page AI use policy, and a 90-day adoption plan.
          </p>

          <div className="rounded-2xl border border-navy/10 bg-cream/50 p-6 sm:p-8">
            <h3 className="mb-4 text-center font-display text-2xl font-bold text-navy sm:text-3xl">
              Try the framework yourself
            </h3>
            <p className="mx-auto mb-8 max-w-2xl text-center text-base leading-relaxed text-navy/70 sm:text-lg">
              Walk through the three phases, classify your own workflows, and get a prioritized recommendation. This is
              the same interactive framework we use inside engagements.
            </p>

            <div className="overflow-hidden rounded-xl border border-navy/10 bg-white shadow-sm">
              <iframe
                src={FRAMEWORK_DEMO_URL}
                title="AI Adoption Framework interactive demo"
                className="w-full min-h-[650px] border-0"
                loading="lazy"
                allow="fullscreen"
              />
            </div>

            <p className="mt-4 text-center text-sm text-navy/60">
              If the demo does not load,{' '}
              <a
                href={FRAMEWORK_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-teal underline-offset-4 hover:underline"
              >
                open it in a new tab
              </a>
              . Streamlit apps can sleep and need a moment to wake.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl bg-gradient-to-br from-navy to-navy/90 p-8 text-center sm:p-12">
            <h2 className="mb-10 font-display text-3xl font-bold text-white sm:text-4xl">
              Ready to put your AI licenses to work?
            </h2>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-coral px-10 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-coral/90 hover:shadow-xl"
            >
              <Calendar className="h-5 w-5" />
              Book an AI Readiness Call
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default AIEnablement;
