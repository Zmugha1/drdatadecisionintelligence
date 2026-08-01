import PageShell from '@/components/PageShell';
import { BOOKING_URL } from '@/lib/sitePaths';
import { Calendar, CheckCircle, Heart, Sparkles } from 'lucide-react';

const saveTimeBullets = [
  'Everything about a client in one place. No more hunting.',
  'Prep for any call in seconds with at-a-glance client cards.',
  'Session recordings and transcripts flow in on their own.',
  'Walk in already knowing exactly where you left off.',
];

const coachDeeperBullets = [
  'The hesitations under the words.',
  'The strengths worth naming.',
  'The emotional undercurrent, not just the facts.',
  'Exactly what to explore on the next call.',
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-lg leading-relaxed text-navy/70">
          <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-teal" strokeWidth={2} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const CoachingAI = () => {
  return (
    <PageShell>
      <section className="bg-cream px-4 pb-12 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-teal/10 px-4 py-2 text-sm font-medium text-teal">
            <Sparkles className="h-4 w-4" />
            Flagship product
          </div>

          <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-navy sm:text-5xl lg:text-6xl">
            Save time. Coach deeper.
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-navy/70 sm:text-xl">
            A private AI coaching partner that learns your method, remembers every client, and preps you in seconds. So
            you spend less time getting ready and more time doing the work only you can do.
          </p>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-coral px-10 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-coral/90 hover:shadow-xl"
          >
            <Calendar className="h-5 w-5" />
            See it in action
          </a>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-navy sm:text-4xl">The problem</h2>
          <p className="text-lg leading-relaxed text-navy/70">
            Great coaching runs on preparation. That is also where your hours go. Notes pile up. Client history scatters
            across folders, calendars, and your memory. Before every call you dig for where you left off. The deeper your
            practice, the heavier the admin. And the easy fix, pasting client details into a public AI tool, means
            handing private conversations to someone else&apos;s cloud. There is a better way.
          </p>
        </div>
      </section>

      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-navy sm:text-4xl">What it is</h2>
          <p className="text-center text-lg leading-relaxed text-navy/70 sm:text-xl">
            One private place that holds everything about every client, learns how you coach, and thinks right
            alongside you. It is not a generic chatbot. It is your practice, running on AI.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-navy sm:text-4xl">Save time</h2>
          <BulletList items={saveTimeBullets} />
          <p className="mt-10 text-center text-lg font-bold text-teal sm:text-xl">
            You get your prep time back. That time goes back into coaching.
          </p>
        </div>
      </section>

      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-navy sm:text-4xl">Coach deeper</h2>
          <BulletList items={coachDeeperBullets} />
          <p className="mt-10 text-lg leading-relaxed text-navy/70">
            Best of all, it thinks in your framework. Your criteria, your questions, your voice. Not a one-size model that
            flattens what makes your coaching yours.
          </p>
          <p className="mt-8 text-center text-lg font-bold text-teal sm:text-xl">
            You see more, sooner. You go where it matters.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-navy sm:text-4xl">Private by design</h2>
          <p className="text-lg leading-relaxed text-navy/70">
            Your client data stays on your machine. Local first. Masked before anything ever reaches the cloud. Built for
            coaches who treat confidentiality as non-negotiable. Because your clients trust you, and that trust does not
            belong in a public tool.
          </p>
        </div>
      </section>

      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-navy sm:text-4xl">Made yours</h2>
          <p className="text-center text-lg leading-relaxed text-navy/70 sm:text-xl">
            It carries your name and your brand. To your clients, it is simply how you work. The intelligence is
            powerful. The face of it is entirely you.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-navy sm:text-4xl">Built by Dr. Data</h2>
          <p className="text-center text-lg leading-relaxed text-navy/70 sm:text-xl">
            Private AI, shaped around how you already coach, grounded in the science of what makes learning and change
            actually stick. We build the tool. You stay the coach.
          </p>
        </div>
      </section>

      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl bg-gradient-to-br from-navy to-navy/90 p-8 text-center sm:p-12">
            <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal">
              <Heart className="h-8 w-8 text-white" />
            </div>

            <h2 className="mb-10 font-display text-3xl font-bold text-white sm:text-4xl">
              Ready to save time and coach deeper?
            </h2>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-coral px-10 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-coral/90 hover:shadow-xl"
            >
              <Calendar className="h-5 w-5" />
              Book a walkthrough
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default CoachingAI;
