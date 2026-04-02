import { Component, useCallback, useEffect, useMemo, useState } from 'react';
import SubmissionList from '../components/SubmissionList.jsx';
import EmailPreview from '../components/EmailPreview.jsx';
import { generateEmail } from '../lib/emailAlgorithm.js';
import { fetchHistory, fetchToday } from '../lib/sheetsApi.js';
import { CHAPTER_NAME } from '../lib/constants.js';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 32, fontFamily: 'sans-serif', color: '#2D4459' }}>
          <h2>Something went wrong loading the host dashboard.</h2>
          <pre style={{ color: '#F05F57', fontSize: 12, marginTop: 16 }}>
            {this.state.error.message}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

function groupRows(rows) {
  const pitches = [];
  const events = [];
  const announcements = [];
  for (const r of rows || []) {
    const t = String(r.type || '').trim();
    if (t === 'Pitch') pitches.push(r);
    else if (t === 'Event') events.push(r);
    else if (t === 'Announcement') announcements.push(r);
  }
  return { pitches, events, announcements };
}

function formatHeaderDate(d) {
  try {
    return d.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return d.toISOString().slice(0, 10);
  }
}

function HostDashboard() {
  const [rawRows, setRawRows] = useState([]);
  const [historyRows, setHistoryRows] = useState([]);
  const [deletedTs, setDeletedTs] = useState(() => new Set());
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');

  const rows = useMemo(
    () => rawRows.filter((r) => !deletedTs.has(String(r.timestamp ?? ''))),
    [rawRows, deletedTs],
  );

  const grouped = useMemo(() => groupRows(rows), [rows]);

  const { hostFlags } = useMemo(
    () => generateEmail({ todaySubmissions: rows, historicalSubmissions: historyRows }),
    [rows, historyRows],
  );

  const uniqueSubmitters = useMemo(() => {
    const s = new Set();
    for (const r of rows) {
      const n = String(r.member_name || '').trim();
      if (n) s.add(n);
    }
    return s.size;
  }, [rows]);

  const poll = useCallback(async () => {
    const [today, hist] = await Promise.all([fetchToday(), fetchHistory(12)]);
    setRawRows(Array.isArray(today) ? today : []);
    setHistoryRows(Array.isArray(hist) ? hist : []);
    setLoading(false);
  }, []);

  useEffect(() => {
    poll();
    const id = setInterval(poll, 5000);
    return () => clearInterval(id);
  }, [poll]);

  const removeAt = (section, index) => {
    const list = grouped[section];
    const row = list[index];
    if (!row) return;
    const ts = String(row.timestamp ?? '');
    if (ts) setDeletedTs((prev) => new Set([...prev, ts]));
  };

  const generateRecap = async () => {
    setGenerating(true);
    setEmailSubject('');
    setEmailBody('');
    const hist = await fetchHistory(12);
    const { subject, body } = generateEmail({
      todaySubmissions: rows,
      historicalSubmissions: hist,
    });
    setEmailSubject(subject);
    setEmailBody(body);
    setGenerating(false);
  };

  const today = new Date();

  return (
    <div className="min-h-dvh overflow-x-hidden bg-cream">
      <header className="border-b border-navy/10 bg-white px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="font-display text-lg font-bold text-navy">{CHAPTER_NAME}</p>
            <p className="text-base text-navy/80">{formatHeaderDate(today)}</p>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span
                className="relative inline-flex h-3 w-3 shrink-0"
                aria-hidden
              >
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/80" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
              </span>
              <span className="text-sm font-semibold uppercase tracking-wide text-navy/80">Live</span>
              <span className="text-base text-navy">
                {uniqueSubmitters} member{uniqueSubmitters === 1 ? '' : 's'} submitted today
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
        {loading && rawRows.length === 0 ? (
          <p className="text-base text-navy/60">Loading…</p>
        ) : null}

        {hostFlags.length > 0 ? (
          <section
            className="mb-8 rounded-xl border border-amber-400/60 bg-amber-100 px-4 py-4 text-navy shadow-sm"
            aria-label="Host heads up"
          >
            <h2 className="font-display text-base font-bold text-navy">
              ⚠️ Host Heads Up — Not Included in Email
            </h2>
            <ul className="mt-2 list-inside list-disc space-y-1 text-base text-navy/90">
              {hostFlags.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </section>
        ) : null}

        <SubmissionList
          title="Pitches"
          icon="🎤"
          items={grouped.pitches}
          onDelete={(index) => removeAt('pitches', index)}
        />
        <SubmissionList
          title="Events & Links"
          icon="📅"
          items={grouped.events}
          onDelete={(index) => removeAt('events', index)}
        />
        <SubmissionList
          title="Announcements"
          icon="📢"
          items={grouped.announcements}
          onDelete={(index) => removeAt('announcements', index)}
        />

        <div className="mt-10 space-y-4">
          <button
            type="button"
            onClick={generateRecap}
            disabled={generating}
            className="min-h-[48px] w-full rounded-xl bg-navy px-4 text-base font-semibold text-cream disabled:opacity-60 active:bg-navy/90"
          >
            {generating ? 'Building your recap...' : "✨ Generate This Week's Recap Email"}
          </button>
          {emailSubject || emailBody ? (
            <EmailPreview subject={emailSubject} body={emailBody} />
          ) : null}
        </div>
      </main>
    </div>
  );
}

export function HostDashboardWithBoundary() {
  return (
    <ErrorBoundary>
      <HostDashboard />
    </ErrorBoundary>
  );
}
