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
          <h2 className="mb-4 text-center font-display text-3xl font-bold text-navy sm:text-4xl">
            Case Study: From buried in prep to booked out
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-navy/70 sm:text-xl">
            How a Milwaukee franchise business coach reclaimed her week, sharpened her coaching, and grew her practice in
            six months. Private AI, her brand, her machine.
          </p>

          <p className="mb-6 text-center text-sm font-semibold uppercase tracking-wide text-teal">By the numbers</p>
          <div className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-navy/10 bg-white p-6 text-center shadow-sm">
              <p className="font-display text-3xl font-bold text-teal sm:text-4xl">7 hrs</p>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">reclaimed every week</p>
            </div>
            <div className="rounded-xl border border-navy/10 bg-white p-6 text-center shadow-sm">
              <p className="font-display text-3xl font-bold text-coral sm:text-4xl">6.4 → 8.9</p>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">coaching score in six months</p>
            </div>
            <div className="rounded-xl border border-navy/10 bg-white p-6 text-center shadow-sm">
              <p className="font-display text-3xl font-bold text-navy sm:text-4xl">5</p>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">new clients added</p>
            </div>
            <div className="rounded-xl border border-navy/10 bg-white p-6 text-center shadow-sm">
              <p className="font-display text-3xl font-bold text-teal sm:text-4xl">100%</p>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">of client data stayed on her own laptop</p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl space-y-10 text-base leading-relaxed text-navy/70 sm:text-lg">
            <div>
              <h3 className="mb-4 font-display text-xl font-bold text-navy sm:text-2xl">Situation</h3>
              <p>
                A franchise business coach in the Milwaukee area. Eighteen active clients, all business owners. She ran
                DISC and motivational-driver assessments on every one, so the behavioral insight already existed. It just
                lived in PDFs she had to dig through before each call. Her week was eaten by preparation. Notes in one
                place, transcripts in another, client history in her head. She recorded her calls but had no way to mine
                them. And when she wanted a second read on a session, she pasted client details into a public AI chatbot,
                which meant her clients&apos; private conversations were leaving her control. Worst of all, she had no way
                to measure her own coaching.
              </p>
            </div>

            <div>
              <h3 className="mb-4 font-display text-xl font-bold text-navy sm:text-2xl">Task</h3>
              <p>
                Five goals: cut prep time in half, coach deeper using the DISC data she already collected, measure and lift
                her own coaching quality, keep every client&apos;s data private, and grow the practice without working more
                hours.
              </p>
            </div>

            <div>
              <h3 className="mb-4 font-display text-xl font-bold text-navy sm:text-2xl">Action</h3>
              <p>
                Dr. Data built her a private, local-first Coach AI, branded as her own practice. Over six months it pulled
                every client&apos;s DISC profile, motivational drivers, and full history into one intelligence card,
                ingested her session transcripts automatically, gave her at-a-glance prep cards, added an on-demand analyst
                that read a client&apos;s whole history and surfaced the hesitations under the words and exactly what to
                explore next in her own coaching framework, and graded her sessions against her five coaching competencies.
                It ran entirely on her machine, masked before anything reached the cloud. Across the engagement it analyzed
                more than 90 of her sessions.
              </p>
            </div>

            <div>
              <h3 className="mb-4 font-display text-xl font-bold text-navy sm:text-2xl">Result</h3>
              <div className="space-y-4">
                <p>
                  <strong className="text-navy">Time:</strong> Prep per session dropped from 45 minutes to 12, a 73% cut.
                  Weekly prep and admin fell from 10 hours to 3. Seven hours back every week, roughly 180 hours over six
                  months.
                </p>
                <p>
                  <strong className="text-navy">Coaching quality:</strong> Overall coaching score climbed from 6.4 to 8.9,
                  up 39%. Her two weakest areas moved most: Review rose from 5.1 to 8.6, Action from 5.8 to 8.7. More than
                  90 sessions analyzed and scored.
                </p>
                <p>
                  <strong className="text-navy">Growth:</strong> The reclaimed hours became capacity. She added 5 new
                  clients in six months, about $6,000 a month in new recurring revenue at full ramp, a $72,000 annual run
                  rate.
                </p>
                <p>
                  <strong className="text-navy">Retention:</strong> Client retention rose from 79% to 92%. She replaced
                  four disconnected tools with one, cutting about $180 a month in subscriptions.
                </p>
                <p>
                  <strong className="text-navy">Privacy:</strong> 100% of her client data stayed on her laptop.
                </p>
                <p>
                  <strong className="text-navy">Return:</strong> Six-month investment about $3,100. It paid for itself in
                  the first month on new client revenue alone. First-year return more than 10x.
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-4 font-display text-xl font-bold text-navy sm:text-2xl">The takeaway</h3>
              <p>
                She did not work more hours. She stopped losing them. The behavioral data she already collected finally
                worked for her. Her coaching got sharper because she could finally see it. And none of it ever left her
                building.
              </p>
              <p className="mt-6 text-center text-lg font-bold text-teal sm:text-xl">
                That is Coaching AI. Your method. Your clients. Your machine.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
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

          <p className="mx-auto mt-10 max-w-3xl text-center text-xs italic leading-relaxed text-navy/55">
            Representative engagement based on a real six-month build. Client anonymized at her request. Figures are
            estimates.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
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
