/**
 * Pure deterministic email generation. No imports, no I/O.
 * @param {{ todaySubmissions: object[], historicalSubmissions: object[] }} input
 * @returns {{ subject: string, body: string, hostFlags: string[] }}
 */
export function generateEmail({ todaySubmissions, historicalSubmissions }) {
  const CHAPTER_NAME = 'BNI Revenue by Referrals';
  const MEETING_DAY = 'Wednesday';
  const MEETING_LOCATION = 'Machine Shed';
  const SITE_LINE = 'drdatadecisionintelligence.com';

  const today = todaySubmissions || [];
  const historical = historicalSubmissions || [];

  const { pitches, events, announcements } = separateByType(today);

  const now = new Date();
  const subject = `${CHAPTER_NAME} — Weekly Recap ${formatMonthDayYear(now)}`;

  const greeting = buildGreeting(now);
  const intro = `We met this ${MEETING_DAY} at ${MEETING_LOCATION} and here is everything your chapter shared this week.`;

  const sep = '─────────────────────────────────';

  const pitchesBlock = buildPitchesSection(pitches);
  const eventsBlock = buildEventsSection(events);
  const announcementsBlock = buildAnnouncementsSection(announcements);

  const insightBlock = buildIntelligenceBlock(today, historical);

  const body = [
    greeting,
    '',
    intro,
    '',
    sep,
    '',
    pitchesBlock,
    '',
    sep,
    '',
    eventsBlock,
    '',
    sep,
    '',
    announcementsBlock,
    '',
    sep,
    '',
    insightBlock,
    '',
    `Givers Gain® — what you give to this chapter comes back to you. See you next ${MEETING_DAY}.`,
    '',
    'Dr. Data Decision Intelligence',
    "Powering your chapter's communication, every Wednesday.",
    SITE_LINE,
  ].join('\n');

  const hostFlags = buildHostFlags(historical);

  return { subject, body, hostFlags };
}

function separateByType(rows) {
  const pitches = [];
  const events = [];
  const announcements = [];
  for (const r of rows) {
    const t = String(r.type || '').trim();
    if (t === 'Pitch') pitches.push(r);
    else if (t === 'Event') events.push(r);
    else if (t === 'Announcement') announcements.push(r);
  }
  return { pitches, events, announcements };
}

function formatMonthDayYear(d) {
  try {
    return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  } catch {
    return d.toISOString().slice(0, 10);
  }
}

function buildGreeting(d) {
  const h = d.getHours();
  let part = 'evening';
  if (h < 12) part = 'morning';
  else if (h < 17) part = 'afternoon';
  return `Good ${part},\nBNI Revenue by Referrals!`;
}

function nameCompanyLine(r) {
  const name = String(r.member_name || '').trim() || 'Member';
  const co = String(r.company || '').trim();
  return co ? `${name} (${co})` : name;
}

function buildPitchesSection(pitches) {
  const lines = ["🎤 THIS WEEK'S MEMBER PITCHES", ''];
  if (!pitches.length) {
    lines.push('No pitches submitted this week.');
    return lines.join('\n');
  }
  for (const r of pitches) {
    lines.push(`• ${nameCompanyLine(r)}`);
    lines.push(`  ${String(r.content || '').trim()}`);
    const link = String(r.link || '').trim();
    if (link) lines.push(`  🔗 ${link}`);
    lines.push('');
  }
  return lines.join('\n').trimEnd();
}

function buildEventsSection(events) {
  const lines = ['📅 EVENTS, LINKS & RESOURCES', ''];
  if (!events.length) {
    lines.push('No events submitted this week.');
    return lines.join('\n');
  }
  for (const r of events) {
    lines.push(`• ${String(r.content || '').trim()}`);
    const link = String(r.link || '').trim();
    if (link) lines.push(`  🔗 ${link}`);
    lines.push('');
  }
  return lines.join('\n').trimEnd();
}

function buildAnnouncementsSection(announcements) {
  const lines = ['📢 ANNOUNCEMENTS', ''];
  if (!announcements.length) {
    lines.push('No announcements this week.');
    return lines.join('\n');
  }
  for (const r of announcements) {
    lines.push(`• ${String(r.content || '').trim()}`);
    lines.push('');
  }
  return lines.join('\n').trimEnd();
}

function ymd(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function parseYmd(s) {
  if (!s) return null;
  const d = new Date(String(s).slice(0, 10) + 'T12:00:00');
  return Number.isNaN(d.getTime()) ? null : d;
}

function uniqueSortedDates(rows) {
  const set = new Set();
  for (const r of rows) {
    const x = String(r.date || '').trim().slice(0, 10);
    if (x) set.add(x);
  }
  return [...set].sort();
}

function uniqueNamesOnDate(rows, dateStr) {
  const target = String(dateStr || '').slice(0, 10);
  const names = new Set();
  for (const r of rows) {
    if (String(r.date || '').slice(0, 10) !== target) continue;
    const n = String(r.member_name || '').trim();
    if (n) names.add(n);
  }
  return names.size;
}

function buildIntelligenceBlock(todayRows, historicalRows) {
  const lines = [];

  const nToday = new Set();
  for (const r of todayRows) {
    const n = String(r.member_name || '').trim();
    if (n) nToday.add(n);
  }
  const n = nToday.size;

  const refDateStr =
    todayRows[0]?.date != null
      ? String(todayRows[0].date).slice(0, 10)
      : ymd(new Date());
  const ref = parseYmd(refDateStr) || new Date();
  const weekAgo = new Date(ref);
  weekAgo.setDate(weekAgo.getDate() - 7);
  const weekAgoStr = ymd(weekAgo);
  const m = uniqueNamesOnDate(historicalRows, weekAgoStr);

  let cmp = 'same as';
  if (n > m) cmp = 'up from';
  else if (n < m) cmp = 'down from';

  lines.push(`This week ${n} members contributed — ${cmp} ${m} last week.`);

  const shout = streakShoutouts(historicalRows);
  for (const s of shout) {
    lines.push('');
    lines.push(s);
  }

  return lines.join('\n');
}

function hasFourConsecutive(memberDatesSet, globalSortedDates) {
  for (let i = 0; i <= globalSortedDates.length - 4; i++) {
    const a = globalSortedDates[i];
    const b = globalSortedDates[i + 1];
    const c = globalSortedDates[i + 2];
    const d = globalSortedDates[i + 3];
    if (memberDatesSet.has(a) && memberDatesSet.has(b) && memberDatesSet.has(c) && memberDatesSet.has(d)) {
      return true;
    }
  }
  return false;
}

function streakShoutouts(historicalRows) {
  const globalDates = uniqueSortedDates(historicalRows);
  if (globalDates.length < 4) return [];

  const byMember = new Map();
  for (const r of historicalRows) {
    const name = String(r.member_name || '').trim();
    if (!name) continue;
    const dt = String(r.date || '').trim().slice(0, 10);
    if (!dt) continue;
    if (!byMember.has(name)) byMember.set(name, new Set());
    byMember.get(name).add(dt);
  }

  const out = [];
  for (const [name, datesSet] of byMember) {
    if (hasFourConsecutive(datesSet, globalDates)) {
      out.push(`⭐ Shout out to ${name} for showing up 4 weeks in a row!`);
    }
  }
  return out.sort();
}

function buildHostFlags(historicalRows) {
  const dates = uniqueSortedDates(historicalRows);
  if (dates.length < 3) return [];

  const lastThree = dates.slice(-3);
  const now = new Date();
  const start = new Date(now);
  start.setDate(start.getDate() - 12 * 7);
  const end = new Date(now);
  end.setDate(end.getDate() - 4 * 7);

  const in412Window = (ymdStr) => {
    const d = parseYmd(ymdStr);
    return d && d >= start && d <= end;
  };

  const membersInWindow = new Set();
  for (const r of historicalRows) {
    const ds = String(r.date || '').slice(0, 10);
    if (!in412Window(ds)) continue;
    const n = String(r.member_name || '').trim();
    if (n) membersInWindow.add(n);
  }

  const flags = [];
  for (const name of membersInWindow) {
    const memberDates = new Set(
      historicalRows
        .filter((r) => String(r.member_name || '').trim() === name)
        .map((r) => String(r.date || '').slice(0, 10)),
    );
    const absentLastThree = lastThree.every((d) => !memberDates.has(d));
    if (absentLastThree) flags.push(name);
  }
  return flags.sort();
}
