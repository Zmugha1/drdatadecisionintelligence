import PageShell from '@/components/PageShell';
import { BOOKING_URL } from '@/lib/sitePaths';
import { Calendar, Shield, Sparkles } from 'lucide-react';

const AgentPulse = () => {
  return (
    <PageShell>
      <section className="bg-cream px-4 pb-12 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-teal/10 px-4 py-2 text-sm font-medium text-teal">
            <Sparkles className="h-4 w-4" />
            Flagship product
          </div>

          <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-navy sm:text-5xl lg:text-6xl">
            The agent who shows up prepared wins the deal.
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-navy/70 sm:text-xl">
            Real estate is a contact sport. The agent who responds first, follows up most specifically, and walks into
            every conversation prepared is the one who closes. AgentPulse is built to make that agent you.
          </p>

          <p className="mb-10 text-xl font-bold text-teal sm:text-2xl">
            Your leads. Your voice. Your system. Hosted for you, owned by you.
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
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-navy sm:text-4xl">The Morning Brief</h2>
          <p className="text-lg leading-relaxed text-navy/70">
            Every morning, AgentPulse surfaces your highest-priority leads in a ranked brief. Not a list sorted by date, a
            scored recommendation built from source quality, recency, contact history, engagement, and pipeline stage.
            The leads worth calling today are at the top. The cold ones are flagged. One click opens a call script in
            your voice for that lead. Another drafts a follow-up referencing exactly what they told you they wanted. A
            third pulls public research on them before you dial. Your whole morning takes twenty minutes.
          </p>
        </div>
      </section>

      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-navy sm:text-4xl">
            Lead intelligence that actually thinks
          </h2>
          <p className="text-lg leading-relaxed text-navy/70">
            AgentPulse scores every lead in your pipeline every night, weighing source, recency, contact, stage, and
            whether they have a home to sell. Hot leads rise. Leads that haven&apos;t moved in a year get a Stale flag.
            You can override any score. The system suggests. You decide.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-navy sm:text-4xl">
            Market intel from your own data
          </h2>
          <p className="text-lg leading-relaxed text-navy/70">
            Most agents have no idea which lead source actually converts. AgentPulse tracks every source in one table:
            leads, worked, advanced, closed, and conversion rate side by side. In ninety days you have real data on
            whether your paid-portal spend is worth it. Not the portal&apos;s sales pitch. Your numbers.
          </p>
        </div>
      </section>

      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-navy sm:text-4xl">
            Content Studio: your voice, not AI voice
          </h2>
          <p className="text-lg leading-relaxed text-navy/70">
            AgentPulse writes in your voice because it learns your voice profile. Newsletters from your market report in
            ninety seconds. Social posts from listing details instantly. Blog posts, SEO-ready, published to your site in
            one click and indexed on Google within days. All in your voice, all with real local data, none of it sounding
            like a template.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-navy sm:text-4xl">
            Built in, ready to send
          </h2>
          <p className="text-lg leading-relaxed text-navy/70">
            AgentPulse sends your newsletter from your own Gmail to the segment you choose: hot, warm, cold,
            never-contacted. It counts recipients, you review, it goes out from your real address. Update your listing
            headlines and status on your website from inside AgentPulse, live in two minutes, no developer.
          </p>
        </div>
      </section>

      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-10">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center font-display text-3xl font-bold text-navy sm:text-4xl">
              Private, yours, permanent
            </h2>
            <p className="text-lg leading-relaxed text-navy/70">
              AgentPulse is not a shared platform. It is a private system built for your business: your leads in your
              database, your voice profile yours, your market data yours. Cancel and you take everything with you. There
              is no lock-in, because there is no platform holding your data hostage. This is the difference between
              renting software and owning a system.
            </p>
            <p className="mt-8 text-center text-xl font-bold text-teal sm:text-2xl">Own your AI. Do not rent it.</p>
          </div>

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

export default AgentPulse;
