/**
 * Pure deterministic email generation. No imports, no I/O.
 * @param {{ todaySubmissions: object[], historicalSubmissions: object[], date?: string }} input
 * @param {string} [input.date] Meeting date as YYYY-MM-DD for subject line (defaults to today)
 * @returns {{ subject: string, body: string, hostFlags: string[] }}
 */
export function generateEmail({ todaySubmissions, historicalSubmissions, date }) {
  const CHAPTER_NAME = 'BNI Revenue by Referrals';
  const MEETING_DAY = 'Wednesday';
  const MEETING_LOCATION = 'Machine Shed';
  const SITE_LINE = 'drdatadecisionintelligence.com';

  const today = todaySubmissions || [];
  const historical = historicalSubmissions || [];

  const now = date ? new Date(`${date}T12:00:00`) : new Date();
  const subject = `${CHAPTER_NAME} - Weekly Recap ${formatMonthDayYear(now)}`;
  const greeting = buildGreeting(new Date());
  const intro = `We met this ${MEETING_DAY} at ${MEETING_LOCATION}. Here is everything your chapter shared this week.`;
  const sep = '─────────────────────────────────';

  const pitchesBlock = buildPitchesSection(today);
  const eventsBlock = buildEventsSection(today);
  const announcementsBlock = buildAnnouncementsSection(today);
  const insightBlock = buildInsightBlock(today, historical);

  const body = [
    greeting, '',
    intro, '',
    sep, '',
    pitchesBlock, '',
    sep, '',
    eventsBlock, '',
    sep, '',
    announcementsBlock, '',
    sep, '',
    insightBlock, '',
    `Givers Gain - what you give to this chapter comes back to you. See you next ${MEETING_DAY}.`,
    '',
    'Dr. Data Decision Intelligence',
    "Powering your chapter's communication, every Wednesday.",
    SITE_LINE,
  ].join('\n');

  const hostFlags = buildHostFlags(historical, today);

  return { subject, body, hostFlags };
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
  const part = h < 12 ? 'morning' : h < 17 ? 'afternoon' : 'evening';
  return `Good ${part},\nBNI Revenue by Referrals!`;
}

function nameCompanyLine(member) {
  const name = String(member.member_name || '').trim() || 'Member';
  const co = String(member.company || '').trim();
  return co ? `${name} (${co})` : name;
}

function buildPitchesSection(members) {
  const lines = ["THIS WEEK'S MEMBER PITCHES", ''];
  const withPitch = members.filter((m) => m.pitch && String(m.pitch).trim());
  if (!withPitch.length) {
    lines.push('No pitches submitted this week.');
    return lines.join('\n');
  }
  for (const m of withPitch) {
    lines.push(`${nameCompanyLine(m)}`);
    lines.push(`  ${String(m.pitch).trim()}`);
    lines.push('');
  }
  return lines.join('\n').trimEnd();
}

function buildEventsSection(members) {
  const lines = ['EVENTS AND RESOURCES', ''];
  const withEvent = members.filter((m) => m.event && String(m.event).trim());
  if (!withEvent.length) {
    lines.push('No events submitted this week.');
    return lines.join('\n');
  }
  for (const m of withEvent) {
    lines.push(`${nameCompanyLine(m)}`);
    lines.push(`  ${String(m.event).trim()}`);
    const link = String(m.event_link || '').trim();
    if (link) lines.push(`  ${link}`);
    lines.push('');
  }
  return lines.join('\n').trimEnd();
}

function buildAnnouncementsSection(members) {
  const lines = ['ANNOUNCEMENTS', ''];
  const withAnnouncement = members.filter((m) => m.announcement && String(m.announcement).trim());
  if (!withAnnouncement.length) {
    lines.push('No announcements this week.');
    return lines.join('\n');
  }
  for (const m of withAnnouncement) {
    lines.push(`${nameCompanyLine(m)}`);
    lines.push(`  ${String(m.announcement).trim()}`);
    lines.push('');
  }
  return lines.join('\n').trimEnd();
}

function ymd(d) {
  const y = d.getFullYear();
  const mo = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${mo}-${day}`;
}

function buildInsightBlock(todayRows, historicalRows) {
  const n = todayRows.length;
  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);
  const weekAgoStr = ymd(weekAgo);
  const lastWeek = historicalRows.filter((r) =>
    String(r.date || '').slice(0, 10) === weekAgoStr,
  ).length;

  const cmp = n > lastWeek ? 'up from' : n < lastWeek ? 'down from' : 'same as';
  return `This week ${n} member${n === 1 ? '' : 's'} contributed - ${cmp} ${lastWeek} last week.`;
}

function buildHostFlags(historicalRows, todayRows) {
  if (!historicalRows.length) return [];
  const todayNames = new Set(todayRows.map((r) => String(r.member_name || '').trim()));
  const recentNames = new Set();
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 4 * 7);
  for (const r of historicalRows) {
    if (new Date(r.date) >= cutoff) {
      recentNames.add(String(r.member_name || '').trim());
    }
  }
  const flags = [];
  for (const name of recentNames) {
    if (name && !todayNames.has(name)) flags.push(name);
  }
  return flags.sort();
}
