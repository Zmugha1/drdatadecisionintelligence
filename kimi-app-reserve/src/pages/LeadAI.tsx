import PageShell from '@/components/PageShell';
import { BOOKING_URL } from '@/lib/sitePaths';
import {
  Calendar,
  ClipboardList,
  Eye,
  Filter,
  MapPin,
  Radar,
  Shield,
  Sun,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const capabilities: { icon: LucideIcon; number: string; description: string }[] = [
  {
    icon: MapPin,
    number: '01',
    description:
      'Finds where your customers become visible. Filings, licences, permits, approvals, registrations, transfers, almost always more sources than anyone expects.',
  },
  {
    icon: Radar,
    number: '02',
    description:
      'Works out the timing. When does each record appear relative to the moment your customer decides? A question about your business, answered in a proper conversation.',
  },
  {
    icon: Filter,
    number: '03',
    description:
      'Applies your rules. Your size threshold, your radius, the jobs you walk away from, the season you cannot take certain work. Written down, for the first time.',
  },
  {
    icon: Sun,
    number: '04',
    description: 'Watches the conditions. Some months are better than others. The system knows which month it is.',
  },
  {
    icon: ClipboardList,
    number: '05',
    description: 'Hands you a list with reasons attached. On your machine. Yours to keep.',
  },
];

const comparisonRows = [
  { platforms: 'National coverage, thin locally', leadAi: 'One county, every source in it' },
  { platforms: 'Records sold to everyone', leadAi: 'Yours alone' },
  { platforms: 'Generic industry filters', leadAi: 'Your rules, from your discovery session' },
  { platforms: 'Scores you cannot question', leadAi: 'Reasons on every lead' },
  { platforms: 'Your data on their servers', leadAi: 'Your data on your machine' },
  { platforms: 'Monthly, forever', leadAi: 'Bought once, owned' },
];

const LeadAI = () => {
  return (
    <PageShell>
      <section className="bg-cream px-4 pb-12 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-teal/10 px-4 py-2 text-sm font-medium text-teal">
            <Eye className="h-4 w-4" />
            Flagship product
          </div>

          <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-navy sm:text-5xl lg:text-6xl">
            The lead dashboard for builders and property pros.
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-navy/70 sm:text-xl">
            You are not short of data. You are short of the right moment. Every business has a window when a customer is
            still winnable. Before it, nothing has happened. After it, someone else got the job. Lead AI finds that
            window in public records and hands you a morning list of who to call, while they are still yours to win.
          </p>

          <p className="text-xl font-bold text-teal sm:text-2xl">
            Your dashboard. Your brand. Your data, on your machine.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-navy sm:text-4xl">
            The idea the whole thing is built on
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-navy/70">
            <p className="text-center font-display text-xl font-bold text-navy sm:text-2xl">
              Late records are records of a decision. Early records are records of a permission.
            </p>
            <p>
              A permit means the decision is already made: the contractor was chosen weeks ago. But a licence, a land
              purchase, a zoning approval, a subdivision plan say something different. Someone has been given permission
              to do a thing they have not done yet. The gap between permission and decision is where every winnable job
              lives. For some businesses that gap is eighteen months. For others it is a fortnight. Finding it is the
              first thing we do.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">What Lead AI does</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item, index) => (
              <div
                key={item.number}
                className={`rounded-2xl border border-navy/10 bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-card-hover ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal">
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <span className="text-5xl font-bold text-navy/10">{item.number}</span>
                </div>
                <p className="leading-relaxed text-navy/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center font-display text-3xl font-bold text-navy sm:text-4xl">
            Why it beats the big lead platforms
          </h2>

          <div className="overflow-hidden rounded-2xl border border-navy/10 shadow-card">
            <table className="w-full">
              <thead>
                <tr className="bg-navy">
                  <th className="px-6 py-4 text-left font-display text-sm font-semibold text-white sm:text-base">
                    Big lead platforms
                  </th>
                  <th className="px-6 py-4 text-left font-display text-sm font-semibold text-teal sm:text-base">
                    Lead AI
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, index) => (
                  <tr
                    key={row.platforms}
                    className={`border-t border-navy/10 ${index % 2 === 0 ? 'bg-cream/40' : 'bg-white'}`}
                  >
                    <td className="px-6 py-5 text-sm leading-relaxed text-navy/70 sm:text-base">{row.platforms}</td>
                    <td className="px-6 py-5 text-sm font-medium leading-relaxed text-navy sm:text-base">
                      {row.leadAi}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-navy sm:text-4xl">
            Where the AI works, and the one place it refuses
          </h2>

          <p className="text-lg leading-relaxed text-navy/70">
            It reads what was never structured: permit descriptions, plan commission PDFs, messy government records, and
            returns clean fields. It knows different words mean the same work. It turns your judgment into rules. It
            learns from what actually closed. And it does not do the scoring, because when you ask why a lead is at the
            top of your list, you need an answer, not a confidence number: Job value over your threshold. Inside your
            radius. No contractor named yet. We use AI everywhere except the one place you would have to trust it
            blindly.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-navy sm:text-4xl">
            What we tell you before you buy
          </h2>

          <p className="text-lg leading-relaxed text-navy/70">
            Every source carries a status from day one. Live now. Days away. Manual. To build. We would rather tell you a
            source does not exist than sell you a feature that quietly returns nothing.
          </p>
        </div>
      </section>

      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl bg-gradient-to-br from-navy to-navy/90 p-8 text-center sm:p-12">
            <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal">
              <Shield className="h-8 w-8 text-white" />
            </div>

            <h2 className="mb-6 font-display text-3xl font-bold text-white sm:text-4xl">
              Your rules are your business
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/80">
              Your value floor, your radius, the jobs you walk away from: that is your competitive advantage, written
              down for the first time. Public records come from the cloud, because they were public before anyone touched
              them. But your rules, your notes, your outcomes live on a machine you own. It works when the internet does
              not. It belongs to you after the last invoice.
            </p>

            <p className="mb-10 text-xl font-bold text-teal sm:text-2xl">Own your AI. Do not rent it.</p>

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

export default LeadAI;
