import PageShell from '@/components/PageShell';
import { BOOKING_URL } from '@/lib/sitePaths';
import { Calendar, Quote, Shield, Sparkles } from 'lucide-react';

const startingStats = [
  { value: '340', label: 'leads in pipeline' },
  { value: '88%', label: 'never followed up more than once' },
  { value: '0%', label: 'visibility into which source closed deals' },
  { value: '$480/mo', label: 'portal spend with no conversion data' },
  { value: '14 hrs', label: 'per month lost to manual content' },
  { value: '0', label: 'blog posts in 12 months' },
  { value: '8', label: 'organic visitors per month' },
  { value: '6-18 hrs', label: 'average lead response time' },
] as const;

const actionPhases = [
  {
    title: 'Month 1, Foundation',
    body: 'A private AgentPulse instance and a 27-question voice profile interview became the brain behind every piece of content (her tone, her stories, her market knowledge). Her 340 leads imported and scored: 9 Hot, 23 Warm, 187 Stale (over a year old, zero contact), 121 Cold but workable. Website rebuilt on a fast SEO-optimized platform: neighborhood pages, home valuation form, a visitor-capture chatbot, schema markup, and an llms.txt so AI assistants could read it.',
  },
  {
    title: 'Month 2, Activation',
    body: 'The Morning Brief went live, top leads ranked by score with one-click call script, email, and text in her voice referencing what each lead wanted. She uploaded her monthly MLS report; the system extracted median price, days on market, closed-sales change, inventory, and stored it as market context. First AI newsletter to 187 leads: 34 opened, 6 responded, 2 booked calls.',
  },
  {
    title: 'Month 3, Content Engine',
    body: 'Podcast prep rebuilt (12 minutes of input produced a full episode outline with a 30-second hook, five talking points, and a close). First blog post, a 780-word market analysis with real local stats, published in one click, indexed by Google in 4 days, ranking page 2 for a target keyword within 3 weeks.',
  },
  {
    title: 'Months 4 to 6, Intelligence and Attribution',
    body: 'Her source-performance table after 90 days: referral leads 22% conversion (4 closed), website organic 14% (2 closed), Facebook 8% (1 closed), paid portal 1.2% (0 closed that quarter). She cancelled the $480/month portal and moved the budget to targeted Google Ads. Her dashboard surfaced 23 stale leads gone quiet 12 to 18 months earlier, flagged because closed sales in her area jumped 38% year over year. She emailed all 23: 7 responded, 2 converted, 1 closed in the window.',
  },
] as const;

const roiRows = [
  { label: 'Additional gross commission', value: '$41,600' },
  { label: 'Technology cost savings (6 months)', value: '$3,180' },
  { label: 'Content time savings (14 hrs/month x 6 x $150/hr)', value: '$12,600' },
  { label: 'Total value created', value: '$57,380' },
  { label: 'AgentPulse investment (build + 6 months)', value: '$3,094' },
  { label: 'ROI multiple', value: '18.5x' },
] as const;

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
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center font-display text-3xl font-bold text-navy sm:text-4xl">
            Case Study: A Wisconsin real estate agent, 6-month engagement
          </h2>

          <div className="mx-auto max-w-3xl space-y-10 text-base leading-relaxed text-navy/70 sm:text-lg">
            <div>
              <h3 className="mb-4 font-display text-xl font-bold text-navy sm:text-2xl">Situation</h3>
              <p>
                A solo real estate agent in Wisconsin, three years in the business, generating leads from her website,
                Facebook, a paid portal, and referrals. On paper the pipeline looked healthy. In practice it was bleeding.
                Of 340 leads, fewer than 12% had been contacted more than once. Her paid portal sent shared leads (the
                same contact going to three or four competing agents) at $480 a month with no way to tell if it ever
                closed a deal. Her content was expensive too: a monthly podcast that ate two hours of prep per episode, a
                newsletter that had not gone out in four months, sporadic social posts, a website untouched since her
                broker&apos;s template.
              </p>
            </div>

            <div>
              <p className="mb-6 text-center text-sm font-semibold uppercase tracking-wide text-teal">
                Starting numbers
              </p>
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                {startingStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-navy/10 bg-cream/50 p-4 text-center shadow-sm"
                  >
                    <p className="font-display text-2xl font-bold text-navy sm:text-3xl">{stat.value}</p>
                    <p className="mt-2 text-xs leading-snug text-navy/65 sm:text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 font-display text-xl font-bold text-navy sm:text-2xl">Task</h3>
              <p>
                Build a private decision intelligence system to score and prioritize her pipeline (who to call each
                morning and what to say), connect her monthly MLS market data to her pipeline so outreach referenced real
                local numbers, replace her content workflow with an AI engine that wrote newsletters, social, podcast
                outlines, and blog posts in her voice using real market data, track which sources actually converted, and
                give her a website that ranked and captured leads.
              </p>
            </div>

            <div>
              <h3 className="mb-6 font-display text-xl font-bold text-navy sm:text-2xl">Action</h3>
              <div className="space-y-6">
                {actionPhases.map((phase) => (
                  <div key={phase.title}>
                    <h4 className="mb-2 font-display text-lg font-bold text-teal">{phase.title}</h4>
                    <p>{phase.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-6 font-display text-xl font-bold text-navy sm:text-2xl">Result</h3>

              <div className="mb-8 space-y-4">
                <p>
                  <strong className="text-navy">Pipeline:</strong> Response time from 6 to 18 hours down to under 22
                  minutes; 34 leads worked per week (up from 8); 23 stale leads re-engaged, 7 responded, 2 converted, 1
                  closed; 91% of Hot/Warm leads contacted within 24 hours (up from 31%).
                </p>
                <p>
                  <strong className="text-navy">Revenue:</strong> 3 additional closed deals from pipeline management plus
                  1 recovered stale-lead deal, average commission $10,400, total additional gross commission $41,600.
                </p>
                <p>
                  <strong className="text-navy">Tech savings:</strong> Portal cancelled ($480/month) and CRM replaced
                  ($50/month) = $530/month, $6,360/year.
                </p>
                <p>
                  <strong className="text-navy">Content:</strong> Newsletter now monthly (was 0 in the prior 4 months),
                  31% average open rate (industry 19%), 6 blog posts in 6 months (was 0 in 12), organic traffic from 8
                  to 94 visitors/month (a 1,075% increase), 6 podcast episodes with prep cut from 2 hours to 14 minutes.
                </p>
              </div>

              <div className="overflow-hidden rounded-xl border border-navy/10 bg-navy text-white shadow-card">
                <table className="w-full text-left text-sm sm:text-base">
                  <thead>
                    <tr className="border-b border-white/15 bg-navy/80">
                      <th className="px-4 py-3 font-display font-semibold sm:px-6" scope="col">
                        ROI summary
                      </th>
                      <th className="px-4 py-3 text-right font-display font-semibold sm:px-6" scope="col">
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {roiRows.map((row, index) => (
                      <tr
                        key={row.label}
                        className={index < roiRows.length - 1 ? 'border-b border-white/10' : ''}
                      >
                        <td className="px-4 py-3 text-white/85 sm:px-6">{row.label}</td>
                        <td
                          className={`px-4 py-3 text-right font-semibold sm:px-6 ${
                            row.label === 'ROI multiple' ? 'text-teal' : 'text-coral'
                          }`}
                        >
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="mb-4 font-display text-xl font-bold text-navy sm:text-2xl">In her words</h3>
              <blockquote className="rounded-2xl border border-teal/25 bg-mint/50 p-6 sm:p-8">
                <Quote className="mb-4 h-8 w-8 text-teal" aria-hidden="true" />
                <p className="text-base italic leading-relaxed text-navy/80 sm:text-lg">
                  &quot;I always knew I had more business sitting in my pipeline than I was actually closing. I just could
                  not see it clearly enough to act on it. Now every morning I know exactly who to call and what to say
                  before I pick up the phone. The market data just shows up in my emails automatically. My clients think I
                  am remarkably well-informed. I just have a better system.&quot;
                </p>
              </blockquote>
            </div>

            <div>
              <h3 className="mb-4 font-display text-xl font-bold text-navy sm:text-2xl">What made the difference</h3>
              <ol className="list-decimal space-y-4 pl-5">
                <li>
                  The system connected market data to specific leads, not just stored them, flagging the 23 stale leads
                  who needed a market-shift conversation, which generated $10,400.
                </li>
                <li>
                  The content was in her voice via the 27-question profile, 31% open rates vs a 19% industry average.
                </li>
                <li>
                  The data told her where to stop spending: $480/month for 1.2% conversion vs 22% on referrals, so she
                  cancelled and redeployed.
                </li>
              </ol>
            </div>

            <p className="text-center font-medium text-navy">
              Build $2,500 one-time. Hosting and support $99/month. Total 6-month investment $3,094, total 6-month
              return $57,380.
            </p>
          </div>

          <div className="mt-12 text-center">
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

          <p className="mx-auto mt-10 max-w-3xl text-center text-xs italic leading-relaxed text-navy/55">
            Representative engagement. Client anonymized. Figures are estimates.
          </p>
        </div>
      </section>

      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl bg-gradient-to-br from-navy to-navy/90 p-8 text-center sm:p-12">
            <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h2 className="mb-10 font-display text-3xl font-bold text-white sm:text-4xl">
              Ready to own your pipeline?
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

export default AgentPulse;
