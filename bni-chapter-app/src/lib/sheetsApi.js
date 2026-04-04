import { APPS_SCRIPT_URL } from './constants.js';

export async function submitContribution(data) {
  try {
    const params = new URLSearchParams({
      action: 'submit',
      member_name: data.member_name || '',
      company: data.company || '',
      pitch: data.pitch || '',
      event: data.event || '',
      event_link: data.event_link || '',
      announcement: data.announcement || '',
    });

    const res = await fetch(
      APPS_SCRIPT_URL + '?' + params.toString(),
      { method: 'GET', mode: 'cors' }
    );

    if (!res.ok) return { success: false, error: 'Server error' };
    const json = await res.json();
    return json.success ? { success: true } : { success: false, error: json.error };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

export async function fetchToday() {
  try {
    const url = new URL(APPS_SCRIPT_URL);
    url.searchParams.set('mode', 'today');
    const res = await fetch(url.toString(), { method: 'GET', mode: 'cors' });
    const text = await res.text();
    let parsed = null;
    try { parsed = text ? JSON.parse(text) : null; } catch { return []; }
    if (!res.ok) return [];
    if (Array.isArray(parsed)) return parsed;
    if (parsed && Array.isArray(parsed.rows)) return parsed.rows;
    return [];
  } catch { return []; }
}

export async function fetchHistory(weeks = 12) {
  try {
    const url = new URL(APPS_SCRIPT_URL);
    url.searchParams.set('mode', 'history');
    url.searchParams.set('weeks', String(weeks));
    const res = await fetch(url.toString(), { method: 'GET', mode: 'cors' });
    const text = await res.text();
    let parsed = null;
    try { parsed = text ? JSON.parse(text) : null; } catch { return []; }
    if (!res.ok) return [];
    if (Array.isArray(parsed)) return parsed;
    if (parsed && Array.isArray(parsed.rows)) return parsed.rows;
    return [];
  } catch { return []; }
}

export async function fetchByDate(dateStr) {
  try {
    const url = new URL(APPS_SCRIPT_URL);
    url.searchParams.set('mode', 'date');
    url.searchParams.set('date', dateStr);
    const res = await fetch(url.toString(), { method: 'GET', mode: 'cors' });
    const text = await res.text();
    let parsed = null;
    try { parsed = text ? JSON.parse(text) : null; } catch { return []; }
    if (!res.ok) return [];
    if (Array.isArray(parsed)) return parsed;
    if (parsed && Array.isArray(parsed.rows)) return parsed.rows;
    return [];
  } catch { return []; }
}
