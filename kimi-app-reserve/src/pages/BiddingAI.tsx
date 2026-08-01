import PageShell from '@/components/PageShell';
import { BOOKING_URL } from '@/lib/sitePaths';
import { Calendar, CheckCircle, Hammer, Shield } from 'lucide-react';

const capabilities = [
  'Runs where you are. In the driveway, on the loading dock, on your phone, not the laptop waiting at home.',
  'Uses your pricing, which you control. Your materials, costs, suppliers, margins. Update them when they change, no waiting on anyone.',
  'Follows your formula, not a generic calculator. Size bands, coverage, access difficulty, travel, your version of that, built from how you already work.',
  'Shows the margin as you build it. See what the job is worth before you say the number. Adjust in front of the customer knowing exactly what you are giving away.',
  'Writes the reasoning. Not just a total, a short plain explanation of why this price. A number with a reason invites a decision instead of a negotiation.',
  'Gets signed while you are there, then feeds the numbers into whatever you already use for invoicing. We do not replace your accounts system. We feed it.',
  'Remembers everything. Every quote a record: size, type, price, margin, and whether it closed.',
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

const BiddingAI = () => {
  return (
    <PageShell>
      <section className="bg-cream px-4 pb-12 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-teal/10 px-4 py-2 text-sm font-medium text-teal">
            <Hammer className="h-4 w-4" />
            Flagship product
          </div>

          <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-navy sm:text-5xl lg:text-6xl">
            Quote on the spot. Before you leave the driveway.
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-navy/70 sm:text-xl">
            You drive out, do the inspection, and know within ten minutes what the job needs and roughly what it should
            cost. Then you drive back, work out the number at the end of a long day, send it the next morning, and follow
            up twice. And then nothing. The work did not go to someone better. It went to someone who was still standing
            in the room when the customer was deciding. Bidding AI closes that gap.
          </p>

          <p className="mb-10 text-xl font-bold text-teal sm:text-2xl">
            Your prices. Your formula. Your margin, visible in the room.
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

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-navy sm:text-4xl">
            The moment you are losing
          </h2>
          <p className="text-lg leading-relaxed text-navy/70">
            Every hour between the inspection and the number is an hour the customer spends cooling off, calling someone
            else, or forgetting how bad the problem looked. Quoting happens twice, once in your head on site, once
            properly at a desk when you are tired. Evenings disappear. The follow-up treadmill never tells you whether
            the price was wrong or they just moved on. And numbers built from memory, priced from recall because the
            spreadsheet is not open in a car park, cost you margin you cannot see until the invoice clears.
          </p>
        </div>
      </section>

      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-navy sm:text-4xl">
            What Bidding AI does
          </h2>
          <BulletList items={capabilities} />
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-navy sm:text-4xl">
            Market Watch: why the price makes sense today
          </h2>
          <p className="text-lg leading-relaxed text-navy/70">
            A reason cannot be your opinion. It has to be checkable. Market Watch pulls the public data that moves your
            market, construction activity, material and energy costs, seasonal demand, permits, into one place, updated on
            its own. So standing in front of a customer you know what is happening in your market this month. It gives you
            a reason the price is what it is, a reason to act now rather than later, not pressure but information, and
            the language that makes you the expert in the room instead of a supplier compared on price.
          </p>
        </div>
      </section>

      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-navy sm:text-4xl">
            Then it starts to learn
          </h2>
          <p className="text-lg leading-relaxed text-navy/70">
            Every quote logged is a data point: which property types, which sizes, what closed. After a season, the system
            tells you what is actually true about your business: which work is most profitable, which quotes convert,
            which customers are worth driving further for. And once it knows that, the same rules can score your incoming
            leads, so the ones most like your best jobs come first. That is a later conversation, and it should be. It
            only works once the system has watched you work long enough to be right.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-navy sm:text-4xl">
            Yours, on your machine
          </h2>
          <p className="text-lg leading-relaxed text-navy/70">
            Your prices, your margins, your formula, your history of what converts. That is not preference data. That is
            the commercial core of your business, written down properly for the first time. It lives on your equipment,
            not a platform shared with everyone else in your trade. Public market data comes from the cloud, because it
            was public before anyone touched it. Everything about how you price stays with you, after the last invoice is
            paid.
          </p>
          <p className="mt-8 text-center text-xl font-bold text-teal sm:text-2xl">Own your AI. Do not rent it.</p>
        </div>
      </section>

      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-navy sm:text-4xl">Who this is for</h2>
          <p className="text-lg leading-relaxed text-navy/70">
            Anyone who prices work on site. Pest control, restoration, energy services, remediation, inspection,
            landscaping, HVAC, cleaning, specialist trades. If you assess in person and quote afterwards, this closes
            that gap.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl bg-gradient-to-br from-navy to-navy/90 p-8 text-center sm:p-12">
            <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal">
              <Shield className="h-8 w-8 text-white" />
            </div>
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

export default BiddingAI;
