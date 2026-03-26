import { APPS_SCRIPT_URL } from './constants.js';

/**
 * @param {{ member_name: string, company?: string, type: string, content: string, link?: string }} data
 * @returns { Promise<{ success: true } | { success: false, error: string }> }
 */
export async function submitContribution(data) {
  try {
    const params = new URLSearchParams({
      action: 'submit',
      member_name: data.member_name || '',
      company: data.company || '',
      type: data.type || '',
      content: data.content || '',
      link: data.link || ''
    });

    const res = await fetch(
      APPS_SCRIPT_URL + '?' + params.toString(),
      {
        method: 'GET',
        mode: 'no-cors'
      }
    );

    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

/**
 * @returns { Promise<object[]> }
 */
export async function fetchToday() {
  try {
    const url = new URL(APPS_SCRIPT_URL);
    url.searchParams.set('mode', 'today');
    const res = await fetch(url.toString(), { method: 'GET', mode: 'cors' });
    const text = await res.text();
    let parsed = null;
    try {
      parsed = text ? JSON.parse(text) : null;
    } catch {
      return [];
    }
    if (!res.ok) return [];
    if (Array.isArray(parsed)) return parsed;
    if (parsed && Array.isArray(parsed.rows)) return parsed.rows;
    return [];
  } catch {
    return [];
  }
}

/**
 * @param { number } [weeks=12]
 * @returns { Promise<object[]> }
 */
export async function fetchHistory(weeks = 12) {
  try {
    const url = new URL(APPS_SCRIPT_URL);
    url.searchParams.set('mode', 'history');
    url.searchParams.set('weeks', String(weeks));
    const res = await fetch(url.toString(), { method: 'GET', mode: 'cors' });
    const text = await res.text();
    let parsed = null;
    try {
      parsed = text ? JSON.parse(text) : null;
    } catch {
      return [];
    }
    if (!res.ok) return [];
    if (Array.isArray(parsed)) return parsed;
    if (parsed && Array.isArray(parsed.rows)) return parsed.rows;
    return [];
  } catch {
    return [];
  }
}
