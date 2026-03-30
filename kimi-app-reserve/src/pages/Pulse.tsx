import { useCallback, useEffect, useMemo, useState, type HTMLAttributes, type ReactNode } from 'react';
import {
  AlertTriangle,
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  Search,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

/** Pulse — single-file demo. Dr. Data Decision Intelligence. All data hardcoded. */

const TEAL = '#1D9E75';
const CORAL = '#D85A30';
const AMBER = '#BA7517';
const TEXT = '#1a1a1a';
const MUTED = '#5f6368';
const BORDER = '#dadce0';
const NAV = '#1a1a1a';

const STYLE_META: Record<
  'A' | 'I' | 'S' | 'C',
  { label: string; bg: string; text: string }
> = {
  A: { label: 'Achiever', bg: '#FEE2E2', text: '#B91C1C' },
  I: { label: 'Influencer', bg: '#FEF9C3', text: '#A16207' },
  S: { label: 'Supporter', bg: '#DCFCE7', text: '#15803D' },
  C: { label: 'Analyst', bg: '#DBEAFE', text: '#1D4ED8' },
};

type ClientRow = {
  id: string;
  name: string;
  stage: number | 'Closed';
  style: keyof typeof STYLE_META;
  daysSince: number;
  signals: number;
  readiness: number;
  profileSummary: string;
  lastInteractionNote: string;
  riskSignals: string[];
  nextAction: string;
};

const CLIENTS: ClientRow[] = [
  {
    id: '1',
    name: 'Marcus Webb',
    stage: 4,
    style: 'A',
    daysSince: 8,
    signals: 0,
    readiness: 92,
    profileSummary:
      'Growth-focused operator. Prefers direct updates and clear timelines on next steps.',
    lastInteractionNote: 'Strong interaction. Asked about budget and implementation timing.',
    riskSignals: [],
    nextAction:
      'Send a concise follow-up with budget ranges and one recommended path. Achiever styles respond to outcomes and control.',
  },
  {
    id: '2',
    name: 'Jennifer Park',
    stage: 3,
    style: 'I',
    daysSince: 1,
    signals: 1,
    readiness: 78,
    profileSummary:
      'Collaborative decision-maker who values alignment and shared vision before details.',
    lastInteractionNote: 'Decision partner confirmed for today’s meeting.',
    riskSignals: ['Decision partner alignment pending until meeting'],
    nextAction:
      'Open with goals and success picture, then anchor to two options. Influencer styles need energy and clarity.',
  },
  {
    id: '3',
    name: 'David Torres',
    stage: 2,
    style: 'S',
    daysSince: 6,
    signals: 1,
    readiness: 65,
    profileSummary:
      'Steady relationship builder. Responds well to patience and explicit reassurance.',
    lastInteractionNote: 'Committed to send intake form; now overdue.',
    riskSignals: ['Overdue commitment on intake form'],
    nextAction:
      'Short, friendly reminder with a single link and offer to walk through it live. Supporter styles value support, not pressure.',
  },
  {
    id: '4',
    name: 'Robert Kim',
    stage: 2,
    style: 'C',
    daysSince: 14,
    signals: 0,
    readiness: 71,
    profileSummary:
      'Detail-oriented. Wants evidence, structure, and time to evaluate.',
    lastInteractionNote: 'Last touch was email with attachments; no reply yet.',
    riskSignals: [],
    nextAction:
      'Offer a brief working session with a written agenda and data appendix. Analyst styles trust process and proof.',
  },
  {
    id: '5',
    name: 'Lisa Monroe',
    stage: 3,
    style: 'S',
    daysSince: 3,
    signals: 2,
    readiness: 83,
    profileSummary:
      'Consensus-led; prioritizes team buy-in and low-friction change.',
    lastInteractionNote: 'Discussed scope; partner concerns surfaced.',
    riskSignals: [
      'Decision partner alignment unresolved',
      'Financial concern mentioned in last interaction',
    ],
    nextAction:
      'Schedule a structured alignment interaction with the partner on the calendar. Supporter styles need harmony and clarity.',
  },
  {
    id: '6',
    name: 'Alex Chen',
    stage: 4,
    style: 'I',
    daysSince: 0,
    signals: 0,
    readiness: 95,
    profileSummary:
      'Fast mover when the narrative is clear and the path feels collaborative.',
    lastInteractionNote: 'Advanced to Stage 4 yesterday after options review.',
    riskSignals: [],
    nextAction:
      'Keep momentum with a crisp summary of Client Goals and a single next milestone date.',
  },
  {
    id: '7',
    name: 'Patricia Wells',
    stage: 1,
    style: 'A',
    daysSince: 5,
    signals: 0,
    readiness: 45,
    profileSummary:
      'Early stage; evaluating fit and pace. Wants to see traction fast.',
    lastInteractionNote: 'Introductory interaction completed; intake pending.',
    riskSignals: [],
    nextAction:
      'Deliver a tight recap with three bullets: goal, plan, next Interaction. Achiever styles want speed and signal.',
  },
  {
    id: '8',
    name: 'James Rodriguez',
    stage: 2,
    style: 'C',
    daysSince: 9,
    signals: 1,
    readiness: 58,
    profileSummary:
      'Methodical; compares alternatives and references past engagements.',
    lastInteractionNote: 'One risk signal on follow-through after a reschedule.',
    riskSignals: ['Follow-up cadence drift'],
    nextAction:
      'Send a comparison table with assumptions labeled. Analyst styles want transparency.',
  },
  {
    id: '9',
    name: 'Michelle Kim',
    stage: 1,
    style: 'S',
    daysSince: 2,
    signals: 0,
    readiness: 40,
    profileSummary:
      'New relationship; building trust before deeper discovery.',
    lastInteractionNote: 'Warm intro; agreed on next touch this week.',
    riskSignals: [],
    nextAction:
      'Confirm the next Interaction with a calendar hold and one-sentence agenda.',
  },
  {
    id: '10',
    name: 'Thomas Grant',
    stage: 3,
    style: 'I',
    daysSince: 4,
    signals: 0,
    readiness: 76,
    profileSummary:
      'Engaged stakeholder network; prefers interactive working sessions.',
    lastInteractionNote: 'Workshop-style review went well; partner invited next.',
    riskSignals: [],
    nextAction:
      'Share a visual outline before the next meeting. Influencer styles engage with story-led flow.',
  },
  {
    id: '11',
    name: 'Sandra Lee',
    stage: 'Closed',
    style: 'I',
    daysSince: 0,
    signals: 0,
    readiness: 100,
    profileSummary:
      'Closed Engagement. Strong advocate; open to introductions.',
    lastInteractionNote: 'Closed Engagement completed last month.',
    riskSignals: [],
    nextAction:
      'Maintain quarterly check-in and referral touchpoint.',
  },
  {
    id: '12',
    name: 'Kevin Murphy',
    stage: 'Closed',
    style: 'A',
    daysSince: 0,
    signals: 0,
    readiness: 100,
    profileSummary:
      'Closed Engagement. Operational leader; values crisp execution.',
    lastInteractionNote: 'Final paperwork signed; onboarding complete.',
    riskSignals: [],
    nextAction:
      'Add to reference list for similar profiles.',
  },
];

const FUNNEL = [
  { name: 'Stage 1', value: 52 },
  { name: 'Stage 2', value: 38 },
  { name: 'Stage 3', value: 28 },
  { name: 'Stage 4', value: 19 },
  { name: 'Stage 5', value: 11 },
  { name: 'Closed', value: 7 },
];

const FUNNEL_COLORS = ['#A8E6CF', '#7DD3B4', '#52C49A', '#2FAF82', '#25966F', TEAL];

const REVENUE_MONTHS = [
  { month: 'Jan', actual: 0 as number | null, proj: null as number | null },
  { month: 'Feb', actual: 0, proj: null },
  { month: 'Mar', actual: 28000, proj: null },
  { month: 'Apr', actual: 56000, proj: null },
  { month: 'May', actual: 84000, proj: null },
  { month: 'Jun', actual: 112000, proj: null },
  { month: 'Jul', actual: 140000, proj: null },
  { month: 'Aug', actual: 196000, proj: 196000 },
  { month: 'Sep', actual: null, proj: 224000 },
  { month: 'Oct', actual: null, proj: 252000 },
  { month: 'Nov', actual: null, proj: 280000 },
  { month: 'Dec', actual: null, proj: 308000 },
];

const HOURS_COMPOUND = [
  { m: 'Jan', h: 8 },
  { m: 'Feb', h: 18 },
  { m: 'Mar', h: 31 },
  { m: 'Apr', h: 46 },
  { m: 'May', h: 60 },
  { m: 'Jun', h: 72 },
  { m: 'Jul', h: 83 },
  { m: 'Aug', h: 94 },
];

const DAY_RESPONSE = [
  { day: 'Mon', pct: 62 },
  { day: 'Tue', pct: 84 },
  { day: 'Wed', pct: 71 },
  { day: 'Thu', pct: 89 },
  { day: 'Fri', pct: 45 },
  { day: 'Sat', pct: 12 },
];

const DONUT = [
  { name: 'Achiever', value: 3, color: '#B91C1C' },
  { name: 'Influencer', value: 5, color: '#CA8A04' },
  { name: 'Supporter', value: 3, color: '#15803D' },
  { name: 'Analyst', value: 1, color: '#1D4ED8' },
];

const DECISIONS_ROWS = [
  ['Aug 15', 'Marcus Webb', 'Engagement gap 7d', 'Personal call', 'Re-engaged', '3 days'],
  ['Aug 12', 'Lisa Monroe', 'Decision partner flag', 'Invited partner to next meeting', 'Partner joined', '5 days'],
  ['Aug 10', 'Alex Chen', 'Stage 3 complete', 'Presented next stage options', 'Advanced to Stage 4', '1 day'],
  ['Aug 8', 'Robert Kim', 'Engagement gap 10d', 'Sent follow-up email', 'No response yet', 'Pending'],
  ['Aug 5', 'Jennifer Park', 'Risk signal', 'Addressed directly in meeting', 'Signal resolved', 'Same meeting'],
  ['Aug 2', 'David Torres', 'Overdue commitment', 'Sent reminder', 'Submitted intake form', '2 days'],
  ['Jul 28', 'Sandra Lee', 'Ready to close', 'Engagement submitted', 'Closed', '4 days'],
  ['Jul 25', 'Kevin Murphy', 'Budget concern', 'Sent resource guide', 'Concern resolved', '3 days'],
  ['Jul 20', 'Thomas Grant', 'Engagement gap 12d', 'Called and reconnected on goals', 'Re-engaged', '1 day'],
  ['Jul 15', 'Patricia Wells', 'New client', 'Intake profile created', 'Profile complete', 'Same day'],
  ['Jul 10', 'James Rodriguez', 'Missed meeting', 'Rescheduled', 'Attended', '7 days'],
  ['Jul 5', 'Michelle Kim', 'Stage 1 complete', 'Advanced to Stage 2', 'Active', 'Same day'],
] as const;

type FilterKey = 'all' | 'active' | 'atRisk' | 'engagementGap' | 'milestone';

function useCountUp(target: number, durationMs = 1400, decimals = 0) {
  const [v, setV] = useState(0);
  useEffect(() => {
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - t0) / durationMs);
      const eased = 1 - (1 - t) ** 3;
      setV(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
      else setV(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs]);
  if (decimals > 0) return v.toFixed(decimals);
  return Math.round(v).toLocaleString('en-US');
}

function formatMoney(n: number) {
  return n.toLocaleString('en-US', { maximumFractionDigits: 0 });
}

function CardShell({
  children,
  className = '',
  style,
  ...rest
}: { children: ReactNode; className?: string } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-xl border bg-white shadow-sm ${className}`}
      style={{ borderColor: BORDER, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}

function ProgressTeal({ pct }: { pct: number }) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-black/[0.06]">
      <div
        className="h-full rounded-full transition-all duration-700 ease-out"
        style={{ width: `${Math.min(100, pct)}%`, backgroundColor: TEAL }}
      />
    </div>
  );
}

function ReadinessBar({ pct }: { pct: number }) {
  const color =
    pct >= 85 ? TEAL : pct >= 65 ? AMBER : CORAL;
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-black/[0.06]">
      <div
        className="h-full rounded-full"
        style={{ width: `${pct}%`, backgroundColor: color }}
      />
    </div>
  );
}

const TABS = [
  { id: 'today', label: 'Today' },
  { id: 'revenue', label: 'Revenue' },
  { id: 'clients', label: 'Clients' },
  { id: 'decisions', label: 'Decisions' },
  { id: 'intelligence', label: 'Intelligence' },
] as const;

export default function Pulse() {
  const [tab, setTab] = useState<(typeof TABS)[number]['id']>('today');
  const [clientFilter, setClientFilter] = useState<FilterKey>('all');
  const [search, setSearch] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const todayStr = useMemo(
    () =>
      new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    [],
  );

  const greeting = useMemo(() => {
    const h = new Date().getHours();
    if (h < 12) return 'Good morning Alex';
    if (h < 18) return 'Good afternoon Alex';
    return 'Good evening Alex';
  }, []);

  const revDisplay = useCountUp(196000);
  const targetDisplay = useCountUp(300000);
  const pctDisplay = useCountUp(65, 1400, 0);
  const projDisplay = useCountUp(308000);
  const hoursYtd = useCountUp(94.3, 1400, 1);
  const patterns = useCountUp(47);
  const weeklyTouch = useCountUp(8);
  const velocity = useCountUp(18);
  const engagementsClosed = useCountUp(7);
  const responseRate = useCountUp(83);
  const avgDays = useCountUp(3.2, 1400, 1);

  const filteredClients = useMemo(() => {
    const q = search.trim().toLowerCase();
    return CLIENTS.filter((c) => {
      if (q && !c.name.toLowerCase().includes(q)) return false;
      if (clientFilter === 'all') return true;
      if (clientFilter === 'active') return c.stage !== 'Closed';
      if (clientFilter === 'atRisk') return c.signals > 0;
      if (clientFilter === 'engagementGap') return c.daysSince >= 8;
      if (clientFilter === 'milestone') return c.readiness >= 90;
      return true;
    });
  }, [search, clientFilter]);

  const toggleExpand = useCallback((id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] antialiased">
      <header className="text-white" style={{ backgroundColor: NAV }}>
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:flex-row sm:items-end sm:justify-between sm:px-6 lg:px-8">
          <div>
            <div className="text-xl font-semibold tracking-tight">Pulse</div>
            <p className="text-sm text-white/75">Your practice. Compounding.</p>
            <p className="mt-1 text-xs text-white/50">Dr. Data Decision Intelligence</p>
          </div>
        </div>
        <nav
          className="border-t border-white/10 bg-black/20"
          aria-label="Primary"
        >
          <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-2 py-2 sm:px-6 lg:px-8">
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  tab === t.id
                    ? 'bg-white text-[#1a1a1a] shadow-sm'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div
          key={tab}
          className="animate-in fade-in-0 slide-in-from-bottom-2 duration-300 motion-reduce:animate-none"
        >
          {tab === 'today' && (
            <section className="space-y-8">
              <div>
                <h1 className="text-2xl font-semibold tracking-tight" style={{ color: TEXT }}>
                  {greeting} — {todayStr}
                </h1>
                <p className="mt-1 text-base" style={{ color: MUTED }}>
                  Here is what needs your attention.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <CardShell className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-semibold" style={{ color: TEXT }}>
                        Marcus Webb
                      </p>
                      <p className="mt-1 text-sm" style={{ color: MUTED }}>
                        Stage 4 | Behavioral Style: Driver
                      </p>
                    </div>
                    <span
                      className="shrink-0 rounded-full px-2 py-0.5 text-xs font-medium"
                      style={{ backgroundColor: `${TEAL}18`, color: TEAL }}
                    >
                      Today
                    </span>
                  </div>
                  <p className="mt-3 text-sm" style={{ color: MUTED }}>
                    Engagement gap: <span className="font-medium text-[#1a1a1a]">8 days</span>
                  </p>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: TEXT }}>
                    <span className="font-medium text-[#5f6368]">Note:</span> Last interaction was strong.
                    He asked about budget. Follow up today.
                  </p>
                  <button
                    type="button"
                    className="mt-4 w-full rounded-lg py-2.5 text-sm font-medium text-white transition hover:opacity-90"
                    style={{ backgroundColor: TEAL }}
                  >
                    Review Profile
                  </button>
                </CardShell>

                <CardShell className="p-5 ring-1 ring-[#1D9E75]/25">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-semibold" style={{ color: TEXT }}>
                        Jennifer Park
                      </p>
                      <p className="mt-1 text-sm" style={{ color: MUTED }}>
                        Stage 3 | Behavioral Style: Influencer
                      </p>
                    </div>
                    <Calendar className="h-5 w-5 shrink-0" style={{ color: TEAL }} aria-hidden />
                  </div>
                  <p className="mt-3 text-sm font-medium" style={{ color: TEAL }}>
                    Meeting scheduled today
                  </p>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: TEXT }}>
                    <span className="font-medium text-[#5f6368]">Note:</span> Decision partner confirmed attending.
                    Review her profile before the meeting.
                  </p>
                  <button
                    type="button"
                    className="mt-4 w-full rounded-lg py-2.5 text-sm font-medium text-white transition hover:opacity-90"
                    style={{ backgroundColor: TEAL }}
                  >
                    Review Profile
                  </button>
                </CardShell>

                <CardShell className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-semibold" style={{ color: TEXT }}>
                        David Torres
                      </p>
                      <p className="mt-1 text-sm" style={{ color: MUTED }}>
                        Stage 2 | Behavioral Style: Supporter
                      </p>
                    </div>
                    <Clock className="h-5 w-5 shrink-0 text-amber-700" aria-hidden />
                  </div>
                  <p className="mt-3 text-sm" style={{ color: MUTED }}>
                    Committed to send intake form
                  </p>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: CORAL }}>
                    <span className="font-medium text-[#5f6368]">Note:</span> Promised it 6 days ago. Overdue.
                  </p>
                  <button
                    type="button"
                    className="mt-4 w-full rounded-lg border py-2.5 text-sm font-medium transition hover:bg-black/[0.03]"
                    style={{ borderColor: BORDER, color: TEXT }}
                  >
                    Send Reminder
                  </button>
                </CardShell>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <CardShell className="border-l-4 p-4" style={{ borderLeftColor: AMBER }}>
                  <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: AMBER }}>
                    <AlertTriangle className="h-4 w-4" aria-hidden />
                    Amber warning: Robert Kim
                  </div>
                  <p className="mt-2 text-sm" style={{ color: MUTED }}>
                    Engagement gap exceeded 14 days at Pipeline Stage 2
                  </p>
                </CardShell>
                <CardShell className="border-l-4 p-4" style={{ borderLeftColor: CORAL }}>
                  <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: CORAL }}>
                    <AlertTriangle className="h-4 w-4" aria-hidden />
                    Red flag: Lisa Monroe
                  </div>
                  <p className="mt-2 text-sm" style={{ color: MUTED }}>
                    Decision partner alignment unresolved
                  </p>
                </CardShell>
                <CardShell className="border-l-4 p-4" style={{ borderLeftColor: TEAL }}>
                  <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: TEAL }}>
                    <CheckCircle2 className="h-4 w-4" aria-hidden />
                    Green milestone: Alex Chen
                  </div>
                  <p className="mt-2 text-sm" style={{ color: MUTED }}>
                    Advanced to Pipeline Stage 4 yesterday
                  </p>
                </CardShell>
              </div>

              <CardShell className="p-6">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium" style={{ color: MUTED }}>
                      Revenue pulse
                    </p>
                    <p className="mt-1 text-2xl font-semibold tabular-nums" style={{ color: TEXT }}>
                      ${revDisplay} of ${targetDisplay}
                    </p>
                    <p className="text-sm" style={{ color: MUTED }}>
                      Annual target · {pctDisplay}% complete
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs uppercase tracking-wide" style={{ color: MUTED }}>
                      Projected
                    </p>
                    <p className="text-lg font-semibold tabular-nums" style={{ color: TEAL }}>
                      ${projDisplay} by year end
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <ProgressTeal pct={65} />
                </div>
              </CardShell>
            </section>
          )}

          {tab === 'revenue' && (
            <section className="space-y-8">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <CardShell className="p-5">
                  <p className="text-sm font-medium" style={{ color: MUTED }}>
                    Revenue target
                  </p>
                  <p className="mt-2 text-2xl font-semibold tabular-nums" style={{ color: TEXT }}>
                    ${revDisplay}
                  </p>
                  <p className="text-sm" style={{ color: MUTED }}>
                    of $300,000 annual target
                  </p>
                  <div className="mt-4">
                    <ProgressTeal pct={65} />
                    <p className="mt-2 text-xs" style={{ color: MUTED }}>
                      Projected ${projDisplay}
                    </p>
                  </div>
                </CardShell>

                <CardShell className="p-5">
                  <p className="text-sm font-medium" style={{ color: MUTED }}>
                    Weekly activity
                  </p>
                  <p className="mt-2 text-2xl font-semibold tabular-nums" style={{ color: TEXT }}>
                    {weeklyTouch} / 10
                  </p>
                  <p className="text-sm" style={{ color: MUTED }}>
                    Client touchpoints this week
                  </p>
                  <p className="mt-3 text-sm" style={{ color: TEXT }}>
                    Pipeline Stage 3 meetings: 2.1 of 2.5 target
                  </p>
                  <p className="mt-1 text-sm font-medium" style={{ color: AMBER }}>
                    Amber: one more needed this week
                  </p>
                </CardShell>

                <CardShell className="p-5">
                  <p className="text-sm font-medium" style={{ color: MUTED }}>
                    Pipeline velocity
                  </p>
                  <p className="mt-2 flex items-center gap-2 text-2xl font-semibold tabular-nums" style={{ color: TEXT }}>
                    {velocity} days
                    <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-800">
                      <ArrowUpRight className="h-3 w-3" aria-hidden />
                      Faster
                    </span>
                  </p>
                  <p className="text-sm" style={{ color: MUTED }}>
                    Average days per stage vs 22 days last month
                  </p>
                </CardShell>

                <CardShell className="p-5">
                  <p className="text-sm font-medium" style={{ color: MUTED }}>
                    Hours saved
                  </p>
                  <p className="mt-2 text-2xl font-semibold tabular-nums" style={{ color: TEXT }}>
                    {hoursYtd} hrs
                  </p>
                  <p className="text-sm" style={{ color: MUTED }}>
                    Saved this year
                  </p>
                  <ul className="mt-3 space-y-1 text-sm" style={{ color: MUTED }}>
                    <li>4.2 hrs this week</li>
                    <li>17.8 hrs this month</li>
                    <li className="font-medium text-[#1a1a1a]">Equivalent to 11.8 working days</li>
                  </ul>
                </CardShell>

                <CardShell className="p-5">
                  <p className="text-sm font-medium" style={{ color: MUTED }}>
                    Intelligence score
                  </p>
                  <p className="mt-2 text-2xl font-semibold tabular-nums" style={{ color: TEXT }}>
                    {patterns} patterns
                  </p>
                  <p className="text-sm" style={{ color: MUTED }}>
                    Learned by system
                  </p>
                  <p className="mt-3 text-xs italic leading-relaxed" style={{ color: MUTED }}>
                    Clients who involve a decision partner at meeting 3 close at 73%
                  </p>
                  <p className="mt-2 text-sm font-medium" style={{ color: TEAL }}>
                    2 new patterns this week
                  </p>
                </CardShell>

                <CardShell className="p-5">
                  <p className="text-sm font-medium" style={{ color: MUTED }}>
                    Engagements closed
                  </p>
                  <p className="mt-2 text-2xl font-semibold tabular-nums" style={{ color: TEXT }}>
                    {engagementsClosed} of 11
                  </p>
                  <p className="text-sm" style={{ color: MUTED }}>
                    Target engagements this year
                  </p>
                  <p className="mt-2 text-sm" style={{ color: MUTED }}>
                    $196,000 of $300,000 revenue
                  </p>
                  <div className="mt-4">
                    <ProgressTeal pct={64} />
                  </div>
                </CardShell>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <CardShell className="p-4">
                  <p className="mb-2 text-sm font-semibold" style={{ color: TEXT }}>
                    Pipeline conversion
                  </p>
                  <div className="h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        layout="vertical"
                        data={FUNNEL}
                        margin={{ top: 8, right: 24, left: 8, bottom: 8 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#eee" horizontal={false} />
                        <XAxis type="number" hide />
                        <YAxis
                          dataKey="name"
                          type="category"
                          width={72}
                          tick={{ fill: MUTED, fontSize: 12 }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <Tooltip
                          formatter={(val: number) => [`${val} clients`, 'Count']}
                          contentStyle={{ borderRadius: 8, border: `1px solid ${BORDER}` }}
                        />
                        <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={22}>
                          {FUNNEL.map((_, i) => (
                            <Cell key={FUNNEL[i].name} fill={FUNNEL_COLORS[i]} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardShell>

                <CardShell className="p-4">
                  <p className="mb-2 text-sm font-semibold" style={{ color: TEXT }}>
                    Revenue by month
                  </p>
                  <div className="h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={REVENUE_MONTHS} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                        <XAxis dataKey="month" tick={{ fill: MUTED, fontSize: 11 }} axisLine={false} tickLine={false} />
                        <YAxis
                          tickFormatter={(v) => `$${v / 1000}k`}
                          tick={{ fill: MUTED, fontSize: 11 }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <Tooltip
                          formatter={(val: number) => (val != null ? [`$${formatMoney(val)}`, ''] : ['', ''])}
                          contentStyle={{ borderRadius: 8, border: `1px solid ${BORDER}` }}
                        />
                        <Line
                          type="monotone"
                          dataKey="actual"
                          stroke={TEAL}
                          strokeWidth={2}
                          dot={{ r: 3, fill: TEAL }}
                          connectNulls
                        />
                        <Line
                          type="monotone"
                          dataKey="proj"
                          stroke={TEAL}
                          strokeWidth={2}
                          strokeDasharray="6 4"
                          dot={{ r: 3, fill: TEAL }}
                          connectNulls
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="mt-2 text-center text-xs font-medium" style={{ color: TEAL }}>
                    Projected $308,000
                  </p>
                </CardShell>
              </div>
            </section>
          )}

          {tab === 'clients' && (
            <section className="space-y-6">
              <div className="relative">
                <Search
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2"
                  style={{ color: MUTED }}
                  aria-hidden
                />
                <input
                  type="search"
                  placeholder="Search clients"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-xl border py-3 pl-10 pr-4 text-sm outline-none ring-teal-500/30 focus:ring-2"
                  style={{ borderColor: BORDER, color: TEXT }}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {(
                  [
                    ['all', 'All'],
                    ['active', 'Active'],
                    ['atRisk', 'At Risk'],
                    ['engagementGap', 'Engagement Gap'],
                    ['milestone', 'Milestone'],
                  ] as const
                ).map(([key, label]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setClientFilter(key)}
                    className={`rounded-full border px-3 py-1.5 text-sm font-medium transition ${
                      clientFilter === key
                        ? 'text-white'
                        : 'bg-white hover:bg-black/[0.03]'
                    }`}
                    style={
                      clientFilter === key
                        ? { backgroundColor: TEAL, borderColor: TEAL }
                        : { borderColor: BORDER, color: TEXT }
                    }
                  >
                    {label}
                  </button>
                ))}
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredClients.map((c) => {
                  const meta = STYLE_META[c.style];
                  const initials = c.name
                    .split(' ')
                    .map((w) => w[0])
                    .join('')
                    .slice(0, 2);
                  const stageLabel =
                    c.stage === 'Closed' ? 'Closed Engagement' : `Stage ${c.stage}`;
                  const expanded = expandedId === c.id;
                  return (
                    <CardShell
                      key={c.id}
                      className={`cursor-pointer overflow-hidden transition-shadow hover:shadow-md ${
                        expanded ? 'ring-2 ring-[#1D9E75]/35' : ''
                      }`}
                      onClick={() => toggleExpand(c.id)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          toggleExpand(c.id);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                    >
                      <div className="p-4">
                        <div className="flex items-start gap-3">
                          <div
                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
                            style={{ backgroundColor: TEAL }}
                          >
                            {initials}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-2">
                              <p className="truncate font-semibold" style={{ color: TEXT }}>
                                {c.name}
                              </p>
                              {expanded ? (
                                <ChevronUp className="h-4 w-4 shrink-0" style={{ color: MUTED }} />
                              ) : (
                                <ChevronDown className="h-4 w-4 shrink-0" style={{ color: MUTED }} />
                              )}
                            </div>
                            <div className="mt-2 flex flex-wrap items-center gap-2">
                              <span
                                className="rounded-full px-2 py-0.5 text-xs font-medium"
                                style={{ backgroundColor: `${TEAL}14`, color: TEAL }}
                              >
                                {stageLabel}
                              </span>
                              <span
                                className="rounded-full px-2 py-0.5 text-xs font-bold"
                                style={{ backgroundColor: meta.bg, color: meta.text }}
                              >
                                {c.style}
                              </span>
                              <span className="text-xs" style={{ color: MUTED }}>
                                {meta.label}
                              </span>
                            </div>
                            <p className="mt-2 text-xs" style={{ color: MUTED }}>
                              {c.daysSince} days since last interaction
                            </p>
                            <div className="mt-2 flex items-center gap-2">
                              {c.signals > 0 && (
                                <span className="rounded-full bg-red-600 px-2 py-0.5 text-xs font-semibold text-white">
                                  {c.signals} risk signal{c.signals > 1 ? 's' : ''}
                                </span>
                              )}
                            </div>
                            <div className="mt-3">
                              <div className="mb-1 flex justify-between text-xs" style={{ color: MUTED }}>
                                <span>Readiness</span>
                                <span className="tabular-nums">{c.readiness}%</span>
                              </div>
                              <ReadinessBar pct={c.readiness} />
                            </div>
                          </div>
                        </div>
                      </div>
                      {expanded && (
                        <div
                          className="space-y-3 border-t px-4 py-4 text-sm motion-reduce:animate-none animate-in slide-in-from-top-1 duration-200"
                          style={{ borderColor: BORDER, backgroundColor: '#fafafa' }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: MUTED }}>
                              Profile summary
                            </p>
                            <p className="mt-1 leading-relaxed" style={{ color: TEXT }}>
                              {c.profileSummary}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: MUTED }}>
                              Last interaction note
                            </p>
                            <p className="mt-1 leading-relaxed" style={{ color: TEXT }}>
                              {c.lastInteractionNote}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: MUTED }}>
                              Active risk signals
                            </p>
                            {c.riskSignals.length === 0 ? (
                              <p className="mt-1" style={{ color: MUTED }}>
                                None
                              </p>
                            ) : (
                              <ul className="mt-1 list-disc space-y-1 pl-4" style={{ color: TEXT }}>
                                {c.riskSignals.map((r) => (
                                  <li key={r}>{r}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: MUTED }}>
                              Recommended next action (behavioral style)
                            </p>
                            <p className="mt-1 leading-relaxed" style={{ color: TEXT }}>
                              {c.nextAction}
                            </p>
                          </div>
                        </div>
                      )}
                    </CardShell>
                  );
                })}
              </div>
            </section>
          )}

          {tab === 'decisions' && (
            <section className="space-y-8">
              <div>
                <h1 className="text-2xl font-semibold tracking-tight" style={{ color: TEXT }}>
                  Every signal. Every response. Every outcome.
                </h1>
                <p className="mt-2 max-w-2xl text-base" style={{ color: MUTED }}>
                  The loop between your actions and your results.
                </p>
              </div>

              <CardShell className="overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead>
                    <tr style={{ borderBottom: `1px solid ${BORDER}` }}>
                      {['Date', 'Client', 'Signal type', 'Action taken', 'Outcome', 'Days to advance'].map((h) => (
                        <th key={h} className="whitespace-nowrap px-4 py-3 text-xs font-semibold uppercase tracking-wide" style={{ color: MUTED }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {DECISIONS_ROWS.map((row, ri) => (
                      <tr key={`${ri}-${row[0]}-${row[1]}`} style={{ borderBottom: `1px solid ${BORDER}` }} className="hover:bg-black/[0.02]">
                        {row.map((cell, ci) => (
                          <td key={`${ri}-${ci}`} className="whitespace-nowrap px-4 py-3" style={{ color: TEXT }}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardShell>

              <div className="grid gap-4 sm:grid-cols-2">
                <CardShell className="flex items-center gap-4 p-6">
                  <Target className="h-10 w-10 shrink-0" style={{ color: TEAL }} aria-hidden />
                  <div>
                    <p className="text-sm" style={{ color: MUTED }}>
                      Response success rate
                    </p>
                    <p className="text-3xl font-semibold tabular-nums" style={{ color: TEXT }}>
                      {responseRate}%
                    </p>
                  </div>
                </CardShell>
                <CardShell className="flex items-center gap-4 p-6">
                  <TrendingUp className="h-10 w-10 shrink-0" style={{ color: TEAL }} aria-hidden />
                  <div>
                    <p className="text-sm" style={{ color: MUTED }}>
                      Average days to outcome
                    </p>
                    <p className="text-3xl font-semibold tabular-nums" style={{ color: TEXT }}>
                      {avgDays} days
                    </p>
                  </div>
                </CardShell>
              </div>
            </section>
          )}

          {tab === 'intelligence' && (
            <section className="space-y-10">
              <div>
                <h1 className="text-2xl font-semibold tracking-tight" style={{ color: TEXT }}>
                  What the system has learned about your practice.
                </h1>
                <p className="mt-2 max-w-2xl text-base" style={{ color: MUTED }}>
                  These patterns emerged from your interactions. No data was entered manually. The system discovered them.
                </p>
              </div>

              <div>
                <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold" style={{ color: TEXT }}>
                  <Sparkles className="h-5 w-5" style={{ color: TEAL }} aria-hidden />
                  Top 5 golden rules
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    'Clients who involve a decision partner at meeting 3 close at 73% vs 31% without a decision partner present.',
                    'Pipeline Stage 4 clients with an engagement gap over 10 days respond best to a personal call. Email response rate at this stage: 18%.',
                    'Clients who complete their intake profile within 7 days of first meeting advance twice as fast through the pipeline.',
                    'Clients with an unresolved financial concern at Pipeline Stage 3 have a 67% dropout rate before reaching Pipeline Stage 4.',
                    'Clients referred by closed engagements convert at 3x the rate of cold pipeline.',
                  ].map((text, i) => (
                    <CardShell
                      key={text}
                      className="border-l-4 p-5"
                      style={{ borderLeftColor: TEAL }}
                    >
                      <p className="text-xs font-semibold text-[#5f6368]">Rule {i + 1}</p>
                      <p className="mt-2 text-sm leading-relaxed" style={{ color: TEXT }}>
                        {text}
                      </p>
                    </CardShell>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-lg font-semibold" style={{ color: TEXT }}>
                  Hours saved (compound)
                </h2>
                <CardShell className="p-4">
                  <div className="h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={HOURS_COMPOUND} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                        <XAxis dataKey="m" tick={{ fill: MUTED, fontSize: 12 }} axisLine={false} tickLine={false} />
                        <YAxis tick={{ fill: MUTED, fontSize: 11 }} axisLine={false} tickLine={false} />
                        <Tooltip
                          formatter={(val: number) => [`${val} hrs`, 'Saved']}
                          contentStyle={{ borderRadius: 8, border: `1px solid ${BORDER}` }}
                        />
                        <Line type="monotone" dataKey="h" stroke={TEAL} strokeWidth={2} dot={{ fill: TEAL, r: 3 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="mt-3 text-center text-sm leading-relaxed" style={{ color: MUTED }}>
                    <span className="font-semibold text-[#1a1a1a]">94 hours saved</span>
                    {' '}
                    — equivalent to 11.8 working days given back to your practice this year.
                  </p>
                </CardShell>
              </div>

              <div>
                <h2 className="mb-4 text-lg font-semibold" style={{ color: TEXT }}>
                  Client profile distribution
                </h2>
                <CardShell className="p-4">
                  <div className="mx-auto flex max-w-md flex-col items-center sm:flex-row sm:gap-8">
                    <div className="h-56 w-full sm:w-1/2">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={DONUT}
                            dataKey="value"
                            nameKey="name"
                            innerRadius={58}
                            outerRadius={80}
                            paddingAngle={2}
                          >
                            {DONUT.map((e) => (
                              <Cell key={e.name} fill={e.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <ul className="mt-4 space-y-2 text-sm sm:mt-0">
                      {DONUT.map((d) => (
                        <li key={d.name} className="flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: d.color }} />
                          <span style={{ color: TEXT }}>
                            {d.name}: {d.value} client{d.value !== 1 ? 's' : ''}{' '}
                            <span style={{ color: MUTED }}>
                              ({d.name === 'Achiever' ? '25%' : d.name === 'Influencer' ? '42%' : d.name === 'Supporter' ? '25%' : '8%'})
                            </span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed" style={{ color: MUTED }}>
                    Most of your clients are Influencer style. Vision and excitement drive their decisions. Lead with possibilities not process.
                  </p>
                </CardShell>
              </div>

              <div>
                <h2 className="mb-4 text-lg font-semibold" style={{ color: TEXT }}>
                  Best engagement times
                </h2>
                <CardShell className="p-4">
                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={DAY_RESPONSE} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#eee" vertical={false} />
                        <XAxis dataKey="day" tick={{ fill: MUTED, fontSize: 12 }} axisLine={false} tickLine={false} />
                        <YAxis
                          domain={[0, 100]}
                          tickFormatter={(v) => `${v}%`}
                          tick={{ fill: MUTED, fontSize: 11 }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <Tooltip formatter={(v: number) => [`${v}%`, 'Response']} />
                        <Bar dataKey="pct" radius={[6, 6, 0, 0]} fill={TEAL} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="mt-3 text-sm" style={{ color: MUTED }}>
                    Tuesday and Thursday show highest client response rates.
                  </p>
                </CardShell>
              </div>
            </section>
          )}
        </div>
      </main>

      <footer
        className="mt-12 border-t py-8 text-center text-sm"
        style={{ borderColor: BORDER, color: MUTED }}
      >
        Pulse by Dr. Data Decision Intelligence
      </footer>
    </div>
  );
}
