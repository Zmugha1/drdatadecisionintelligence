import PageShell from '@/components/PageShell';
import { BOOKING_URL } from '@/lib/sitePaths';
import { Calendar, Contact, Shield } from 'lucide-react';

const sections = [
  {
    title: 'The moment most businesses lose',
    body: 'Someone hands you a paper card, it ends up in a drawer. Someone calls after hours, they hang up and dial your competitor. Someone visits your site with a question, they leave without asking. Every one of those is a warm lead going cold because there was no system to catch it. Front Desk AI catches it.',
  },
  {
    title: 'Your digital card, in one tap',
    body: 'Share your contact by scan or tap, no app, no paper. Your photo, your details, your booking link, all saved to their phone instantly, spelled right, entered right, never fumbled. One tap to call you, book you, or text you. The card that never gets lost in a drawer.',
  },
  {
    title: 'An assistant that answers, day or night',
    body: 'A private AI assistant greets every visitor to your site and answers the real questions, what you do, whether their data is safe, how to get started, and routes each person to the right place. It never guesses, never makes things up, and when a question is bigger than a page, it books the call. Controlled, accurate, always on. The kind of AI you can actually trust in front of a customer.',
  },
  {
    title: 'Turn happy clients into proof',
    body: 'After good work, one tap sends your client to leave a Google review. Reviews are the trust signal that new customers and AI search engines weigh most. Front Desk AI makes asking effortless, so your reputation builds itself, in public, where it counts.',
  },
  {
    title: 'Every contact, captured and worked',
    body: 'A first impression is worthless if it falls through the cracks. Front Desk AI feeds every contact into your own intelligence dashboard, scored, tracked, and ready to work, so you always know who to follow up with and how each relationship is moving. Your leads, your data, on a system you own. Nothing forgotten. Nobody lost.',
  },
  {
    title: 'Private by principle',
    body: 'Front Desk AI runs on the Dr. Data principle. Your contacts, your client relationships, your pipeline, they belong to you, not to a platform that rents them back to you and mines them in between. Cloud where it belongs. Private where it matters.',
    subline: 'Own your front desk. Do not rent it.',
  },
  {
    title: "Who it's for",
    body: 'Any business where the first impression matters and follow-up is the difference between a closed deal and a lost one. Trades, real estate, coaching, professional services, anyone who meets people and needs every one of them to land in a system, not a drawer.',
  },
] as const;

const FrontDeskAI = () => {
  return (
    <PageShell>
      <section className="bg-cream px-4 pb-12 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-teal/10 px-4 py-2 text-sm font-medium text-teal">
            <Contact className="h-4 w-4" />
            Flagship product
          </div>

          <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-navy sm:text-5xl lg:text-6xl">
            Your front desk never sleeps, never fumbles a name, never forgets to follow up.
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-navy/70 sm:text-xl">
            Every business lives or dies on the first impression and the follow-through. A card that gets lost. A call
            that goes unanswered. A lead that never makes it into any system. The work does not go to the best business.
            It goes to the one that showed up first and followed up fastest. Front Desk AI is how you become that
            business.
          </p>

          <p className="mb-10 text-xl font-bold text-teal sm:text-2xl">
            Greet. Capture. Follow through. Own every contact.
          </p>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-coral px-10 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-coral/90 hover:shadow-xl"
          >
            <Calendar className="h-5 w-5" />
            Book a Discovery Call
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
            {'subline' in section && section.subline ? (
              <p className="mt-8 text-center text-lg font-bold text-teal sm:text-xl">{section.subline}</p>
            ) : null}
          </div>
        </section>
      ))}

      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl bg-gradient-to-br from-navy to-navy/90 p-8 text-center sm:p-12">
            <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal">
              <Shield className="h-8 w-8 text-white" />
            </div>

            <h2 className="mb-10 font-display text-3xl font-bold text-white sm:text-4xl">
              Ready to own your front desk?
            </h2>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-coral px-10 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-coral/90 hover:shadow-xl"
            >
              <Calendar className="h-5 w-5" />
              Book a Discovery Call
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default FrontDeskAI;
