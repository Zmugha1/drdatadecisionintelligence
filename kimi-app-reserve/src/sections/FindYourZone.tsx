import { useState, type FormEvent } from 'react';
import { BOOKING_URL } from '@/lib/sitePaths';
import { supabase } from '@/lib/supabase';
import { Calendar } from 'lucide-react';

type ScoreKey = 'b' | 'a' | 'i';

type QuizOption = {
  t: string;
} & Partial<Record<ScoreKey, number>>;

type QuizQuestion = {
  q: string;
  opts: QuizOption[];
};

type ZoneKey = 'below' | 'above' | 'inside';

type ZoneProfile = {
  zone: string;
  colorClass: string;
  borderClass: string;
  head: string;
  body: string;
};

const QS: QuizQuestion[] = [
  {
    q: 'Think about preparing for an important client meeting or session. How does it happen right now?',
    opts: [
      { t: 'AI prepares everything automatically - I just open it', i: 2 },
      { t: 'I use AI to help but I still do most of the work manually', b: 1 },
      { t: 'I do it manually from scratch every time', b: 2 },
      { t: 'I usually wing it or skip preparation entirely', b: 3 },
    ],
  },
  {
    q: 'When AI produces an output for a job you need done - how often do you check whether it actually did the job right?',
    opts: [
      { t: 'Always - I interrogate every output before acting on it', i: 1 },
      { t: 'Most of the time - I skim it then usually accept', a: 1 },
      { t: 'Sometimes - only if something looks obviously off', a: 1 },
      { t: 'Rarely - if it looks plausible I move on', a: 3 },
    ],
  },
  {
    q: 'When you follow up after a meeting, how long does it take you to write a good follow-up email?',
    opts: [
      { t: 'Under 5 minutes - I have a system that handles most of it', i: 2 },
      { t: '10 to 20 minutes - I have a rough process', b: 1 },
      { t: '30 to 45 minutes - I write every one from scratch', b: 2 },
      { t: 'Longer than that - or I often forget to send one at all', b: 3 },
    ],
  },
  {
    q: 'When you need to send a proposal after someone asks for your services, how long is the turnaround?',
    opts: [
      { t: 'Same day - my system drafts it and I review and send', i: 2 },
      { t: 'Next day - I have a template I customize', b: 1 },
      { t: '2 to 5 days - I write it from scratch each time', b: 2 },
      { t: 'Longer than that - or I put it off and lose the momentum', b: 3 },
    ],
  },
  {
    q: 'When AI does a job for you, does the result sound like YOU - your reasoning, your voice, your standard?',
    opts: [
      { t: 'Yes - I have built prompts that capture how I think', i: 2 },
      { t: 'Sometimes - when I put real effort into the request', b: 1 },
      { t: 'Rarely - it usually sounds like generic AI', b: 2 },
      { t: 'I have never thought to make it sound like me', b: 3 },
    ],
  },
  {
    q: 'How do you currently create content - LinkedIn posts, blog articles, newsletters?',
    opts: [
      { t: 'Consistently - AI drafts in my voice and I refine', i: 2 },
      { t: 'Occasionally - when I have time to sit down and write', b: 1 },
      { t: 'Rarely - I know I should but it takes too long', b: 2 },
      { t: 'Almost never - I do not have a process for this at all', b: 3 },
    ],
  },
  {
    q: 'Is there a clear line in your work between what AI handles and what only YOU can decide?',
    opts: [
      { t: 'Yes - I have drawn that line and AI respects it', i: 2 },
      { t: 'Roughly - I have a sense of it but it is not defined', b: 1 },
      { t: 'Not really - it depends on how I feel that day', a: 1 },
      { t: 'I have not thought about where that line should be', b: 2 },
    ],
  },
  {
    q: 'When you correct an AI output - what do you do with that correction?',
    opts: [
      { t: 'I log it so the AI learns not to make that mistake again', i: 2 },
      { t: 'I fix it this time but do not record the correction', b: 1 },
      { t: 'I redo the whole thing myself from scratch', b: 2 },
      { t: 'I rarely correct - I usually just accept or ignore', a: 2 },
    ],
  },
];

const PROFILES: Record<ZoneKey, ZoneProfile> = {
  below: {
    zone: 'BELOW THE ZONE',
    colorClass: 'text-coral',
    borderClass: 'border-coral',
    head: 'You are doing work AI should be doing for you.',
    body: 'You are spending expert time on execution - preparing manually, writing every email from scratch, delaying proposals, skipping content. Each of these jobs has an AI-ready workflow waiting to be built in your voice. The Zone shift starts with one job.',
  },
  above: {
    zone: 'ABOVE THE ZONE',
    colorClass: 'text-amber-600',
    borderClass: 'border-amber-600',
    head: 'You are using AI but your expertise is leaking.',
    body: 'You have handed jobs to AI but you have not taught it how YOU do them. The output goes out but it does not sound like you, it misses the judgment layer, and over time it erodes trust instead of building it. The fix is teaching AI your voice before it runs.',
  },
  inside: {
    zone: 'INSIDE THE ZONE',
    colorClass: 'text-teal',
    borderClass: 'border-teal',
    head: 'You have the right instinct. Now make it systematic.',
    body: 'You understand the boundary between what AI handles and what you decide. The next step is making it consistent across all your core jobs - meeting prep, follow-up, proposals, content - so the Zone holds even when you are running at full capacity.',
  },
};

const FOUR_JOBS = [
  { n: '01', job: 'Meeting Preparation', time: '45 min saved per meeting' },
  { n: '02', job: 'Follow-Up Email', time: '35 min saved per email' },
  { n: '03', job: 'Proposal Turnaround', time: '4 hrs saved per proposal' },
  { n: '04', job: 'Content Creation', time: '3 hrs saved per week' },
];

function looksLikeEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function sumScores(answers: QuizOption[]) {
  let b = 0;
  let a = 0;
  let i = 0;
  for (const opt of answers) {
    b += opt.b ?? 0;
    a += opt.a ?? 0;
    i += opt.i ?? 0;
  }
  return { b, a, i };
}

function resolveZone(scores: { b: number; a: number; i: number }): ZoneKey {
  if (scores.a > 5 && scores.b > 5) return 'above';
  if (scores.a > 5) return 'above';
  if (scores.b <= 4 && scores.i >= 4) return 'inside';
  return 'below';
}

function computeStats(zone: ZoneKey, b: number) {
  const weeklyHours = zone === 'below' ? b * 1.5 : zone === 'above' ? 4 : 2;
  const annualCost = Math.round((weeklyHours * 150 * 48) / 100) * 100;
  const jobsLabel = zone === 'inside' ? 'Systematize' : '4 core jobs';
  return { weeklyHours, annualCost, jobsLabel };
}

export default function FindYourZone() {
  const [cur, setCur] = useState(0);
  const [answers, setAnswers] = useState<QuizOption[]>([]);
  const [selected, setSelected] = useState<QuizOption | null>(null);
  const [pendingAdvance, setPendingAdvance] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [resultUnlocked, setResultUnlocked] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting'>('idle');

  const scores = quizComplete ? sumScores(answers) : null;
  const zoneKey = scores ? resolveZone(scores) : null;
  const profile = zoneKey ? PROFILES[zoneKey] : null;
  const stats = zoneKey && scores ? computeStats(zoneKey, scores.b) : null;

  const showIntro = cur === 0 && answers.length === 0 && !quizComplete;
  const showQuestion = !quizComplete && !pendingAdvance;
  const showEmailGate = quizComplete && !resultUnlocked;
  const showResult = quizComplete && resultUnlocked && profile && stats && zoneKey;

  const pick = (opt: QuizOption) => {
    if (selected || pendingAdvance) return;
    setSelected(opt);
    setPendingAdvance(true);
    window.setTimeout(() => {
      const nextAnswers = [...answers, opt];
      if (cur < QS.length - 1) {
        setAnswers(nextAnswers);
        setCur(cur + 1);
        setSelected(null);
        setPendingAdvance(false);
      } else {
        setAnswers(nextAnswers);
        setQuizComplete(true);
        setSelected(null);
        setPendingAdvance(false);
      }
    }, 320);
  };

  const handleEmailSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setEmailError('');
    const trimmed = email.trim();
    if (!trimmed || !looksLikeEmail(trimmed)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    if (!zoneKey || !stats) return;

    setSubmitStatus('submitting');
    const leadId = crypto.randomUUID();

    const { error: leadError } = await supabase.from('leads').insert({
      id: leadId,
      email: trimmed,
      source: 'find_your_zone',
      card_id: 'zone_quiz',
      notes: zoneKey,
      stage: 'shared',
    });

    if (!leadError) {
      await supabase.from('events').insert({
        lead_id: leadId,
        type: 'form_submitted',
        source: 'find_your_zone',
        card_id: 'zone_quiz',
        payload: {
          zone: zoneKey,
          weekly_hours: Math.round(stats.weeklyHours),
          annual_cost: stats.annualCost,
        },
      });
    }

    setSubmitStatus('idle');
    setResultUnlocked(true);
  };

  const retake = () => {
    setCur(0);
    setAnswers([]);
    setSelected(null);
    setPendingAdvance(false);
    setQuizComplete(false);
    setResultUnlocked(false);
    setEmail('');
    setEmailError('');
    setSubmitStatus('idle');
  };

  const pct = Math.round((cur / QS.length) * 100);

  return (
    <section className="mb-16 rounded-3xl border border-navy/10 bg-cream/60 px-4 py-12 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-2xl">
        {showIntro ? (
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-teal">Find your zone</p>
            <h2 className="mb-4 font-display text-3xl font-bold text-navy sm:text-4xl">
              Are you doing work AI should be doing for you?
            </h2>
            <p className="text-lg leading-relaxed text-navy/70">
              8 questions. One at a time. Find out which jobs in your practice are costing you the most expert time.
            </p>
          </div>
        ) : null}

        {showQuestion ? (
          <>
            <div className="mb-7">
              <div className="mb-2 h-1 overflow-hidden rounded-full bg-navy/10">
                <div
                  className="h-full rounded-full bg-teal transition-all duration-300"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <div className="flex justify-between text-xs font-medium uppercase tracking-wide text-navy/50">
                <span>
                  Question {cur + 1} of {QS.length}
                </span>
                <span>{pct}% complete</span>
              </div>
            </div>

            <div className="rounded-2xl border border-navy/10 border-t-4 border-t-teal bg-white p-6 shadow-card sm:p-8">
              <p className="mb-6 font-display text-xl font-bold leading-snug text-navy sm:text-2xl">
                {QS[cur].q}
              </p>
              <div className="space-y-2">
                {QS[cur].opts.map((opt) => (
                  <button
                    key={opt.t}
                    type="button"
                    disabled={selected !== null}
                    onClick={() => pick(opt)}
                    className={`w-full rounded-lg border px-4 py-3 text-left text-sm leading-relaxed transition-all sm:text-base ${
                      selected === opt
                        ? 'border-teal bg-teal text-white'
                        : 'border-navy/15 bg-cream/50 text-navy hover:border-teal/50 disabled:cursor-default'
                    }`}
                  >
                    {opt.t}
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : null}

        {showEmailGate && profile && stats && zoneKey ? (
          <div className="rounded-2xl border border-navy/10 bg-white p-8 shadow-card sm:p-10">
            <h3 className="mb-2 text-center font-display text-2xl font-bold text-navy">Your result is ready</h3>
            <p className="mb-8 text-center text-navy/70">
              Enter your email to see your Zone result.
            </p>
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              {emailError ? (
                <p className="rounded-lg bg-coral/10 px-4 py-3 text-sm text-navy/80">{emailError}</p>
              ) : null}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                disabled={submitStatus === 'submitting'}
                className="w-full rounded-lg border border-navy/20 bg-cream/50 px-4 py-3 text-navy placeholder:text-navy/40 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={submitStatus === 'submitting'}
                className="w-full rounded-lg bg-teal px-6 py-3 font-display font-semibold text-navy transition-colors hover:bg-teal/90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitStatus === 'submitting' ? 'Unlocking...' : 'See my Zone result'}
              </button>
            </form>
          </div>
        ) : null}

        {showResult ? (
          <div className="space-y-6">
            <div className="rounded-2xl bg-navy px-6 py-8 sm:px-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-teal">Your zone position</p>
              <h3 className="mb-4 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                {profile.head}
              </h3>
              <span
                className={`inline-block rounded px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white ${zoneKey === 'below' ? 'bg-coral' : zoneKey === 'above' ? 'bg-amber-600' : 'bg-teal'}`}
              >
                {profile.zone}
              </span>
            </div>

            <div className={`rounded-2xl border border-navy/10 border-l-4 bg-white p-6 ${profile.borderClass}`}>
              <p className="leading-relaxed text-navy/70">{profile.body}</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className={`rounded-xl border border-navy/10 border-t-2 bg-white p-4 text-center ${profile.borderClass}`}>
                <p className="font-display text-2xl font-bold text-navy">~{Math.round(stats.weeklyHours)} hrs</p>
                <p className={`mt-1 text-xs font-semibold uppercase tracking-wide ${profile.colorClass}`}>
                  Expert hours lost / week
                </p>
              </div>
              <div className="rounded-xl border border-navy/10 border-t-2 border-t-coral bg-white p-4 text-center">
                <p className="font-display text-2xl font-bold text-navy">${stats.annualCost.toLocaleString()}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-coral">Annual value at risk</p>
              </div>
              <div className="rounded-xl border border-navy/10 border-t-2 border-t-teal bg-white p-4 text-center">
                <p className="font-display text-2xl font-bold text-navy">{stats.jobsLabel}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-teal">Jobs to automate first</p>
              </div>
            </div>

            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-navy/50">
                The four jobs your system should be running
              </p>
              <div className="space-y-2">
                {FOUR_JOBS.map((j) => (
                  <div
                    key={j.n}
                    className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-navy/10 border-l-4 border-l-teal bg-white px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-teal">{j.n}</span>
                      <span className="text-sm font-semibold text-navy">{j.job}</span>
                    </div>
                    <span className="text-xs text-navy/60">{j.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-teal/20 bg-teal/5 p-6 sm:p-8">
              <h4 className="mb-3 font-display text-xl font-bold text-navy">
                What a private system looks like for you
              </h4>
              <p className="leading-relaxed text-navy/70">
                A private AI built around how you already work, so the four jobs above run in your voice, on your machine.
                We map your biggest gap and show you exactly what your system looks like, in one conversation.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-coral px-8 py-3.5 font-display font-semibold text-white transition-colors hover:bg-coral/90"
              >
                <Calendar className="h-5 w-5" />
                Book a Discovery Call
              </a>
              <button
                type="button"
                onClick={retake}
                className="rounded-lg border border-navy/20 px-6 py-3 text-sm font-semibold text-navy transition hover:border-teal hover:text-teal"
              >
                Retake the diagnostic
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
