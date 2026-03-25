import { useMemo, useState } from 'react';
import { submitContribution } from '../lib/sheetsApi.js';
import { CHAPTER_NAME } from '../lib/constants.js';

const TYPES = [
  { id: 'Pitch', emoji: '🎤', label: 'Pitch' },
  { id: 'Event', emoji: '📅', label: 'Event / Link' },
  { id: 'Announcement', emoji: '📢', label: 'Announcement' },
];

function messagePlaceholder(type) {
  if (type === 'Pitch') return 'What do you do and who is your ideal referral?';
  if (type === 'Event') return 'Event name, date, and what people should know...';
  return 'What do you want to share with the chapter?';
}

export default function MemberForm() {
  const [type, setType] = useState('Pitch');
  const [memberName, setMemberName] = useState('');
  const [company, setCompany] = useState('');
  const [content, setContent] = useState('');
  const [link, setLink] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  const [error, setError] = useState('');

  const placeholder = useMemo(() => messagePlaceholder(type), [type]);

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    const errs = [];
    if (!memberName.trim()) errs.push('Enter your name.');
    if (!content.trim()) errs.push('Enter your message.');
    if (errs.length) {
      setError(errs.join(' '));
      return;
    }
    setSubmitting(true);
    const result = await submitContribution({
      member_name: memberName.trim(),
      company: company.trim(),
      type,
      content: content.trim(),
      link: link.trim() || undefined,
    });
    if (result.success) {
      setSubmittedName(memberName.trim());
      setSuccess(true);
    } else {
      setError(result.error || 'Something went wrong. Try again.');
    }
    setSubmitting(false);
  };

  const addAnother = () => {
    setSuccess(false);
    setSubmittedName('');
    setType('Pitch');
    setMemberName('');
    setCompany('');
    setContent('');
    setLink('');
    setError('');
  };

  if (success) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-x-hidden bg-navy px-6 text-center">
        <p className="text-7xl leading-none sm:text-8xl" aria-hidden>
          ✅
        </p>
        <p className="mt-8 font-display text-3xl font-bold leading-tight text-cream sm:text-4xl">
          You&apos;re in, {submittedName}!
        </p>
        <p className="mt-4 max-w-md text-xl leading-snug text-cream/95">
          Your contribution has been added to this week&apos;s recap.
        </p>
        <button
          type="button"
          onClick={addAnother}
          className="mt-12 min-h-[48px] w-full max-w-sm rounded-xl bg-teal px-6 text-base font-semibold text-navy active:bg-teal/90"
        >
          Add Another
        </button>
      </div>
    );
  }

  return (
    <div className="flex min-h-dvh max-w-full flex-col overflow-x-hidden bg-cream pb-44">
      <header className="border-b border-navy/10 bg-cream px-4 py-5">
        <p className="font-display text-center text-xs font-semibold uppercase tracking-wider text-navy/70">
          Dr. Data Decision Intelligence
        </p>
        <p className="mt-2 text-center font-display text-xl font-bold leading-tight text-navy sm:text-2xl">
          {CHAPTER_NAME}
        </p>
        <p className="mt-2 text-center text-base text-navy/80">Add your contribution for today&apos;s meeting</p>
      </header>

      <main className="mx-auto w-full max-w-full flex-1 px-4 pt-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-navy/80">Contribution type</p>
        <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-3">
          {TYPES.map((t) => {
            const selected = type === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setType(t.id)}
                className={`flex min-h-[80px] flex-col items-center justify-center rounded-2xl border-2 px-2 py-3 text-center transition-colors active:opacity-95 ${
                  selected
                    ? 'border-navy bg-navy text-cream shadow-md'
                    : 'border-navy/15 bg-white text-navy'
                }`}
              >
                <span className="text-2xl leading-none sm:text-3xl" aria-hidden>
                  {t.emoji}
                </span>
                <span className="mt-2 font-display text-xs font-semibold leading-tight sm:text-sm">{t.label}</span>
              </button>
            );
          })}
        </div>

        <form id="member-form" onSubmit={submit} className="mt-8 space-y-5">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-semibold text-navy">
              Your Name <span className="text-coral">*</span>
            </label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              value={memberName}
              onChange={(e) => setMemberName(e.target.value)}
              className="box-border min-h-[48px] w-full min-w-0 rounded-xl border border-navy/20 bg-white px-4 text-base text-navy placeholder:text-navy/40 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30"
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label htmlFor="company" className="mb-2 block text-sm font-semibold text-navy">
              Company <span className="text-navy/50">(optional)</span>
            </label>
            <input
              id="company"
              name="company"
              autoComplete="organization"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="box-border min-h-[48px] w-full min-w-0 rounded-xl border border-navy/20 bg-white px-4 text-base text-navy placeholder:text-navy/40 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30"
              placeholder="Acme Inc."
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-semibold text-navy">
              Your Message <span className="text-coral">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={5}
              className="box-border min-h-[120px] w-full min-w-0 resize-y rounded-xl border border-navy/20 bg-white px-4 py-3 text-base text-navy placeholder:text-navy/40 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30"
              placeholder={placeholder}
            />
          </div>
          <div>
            <label htmlFor="url" className="mb-2 block text-sm font-semibold text-navy">
              Link <span className="text-navy/50">(optional)</span>
            </label>
            <input
              id="url"
              name="url"
              inputMode="url"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="box-border min-h-[48px] w-full min-w-0 rounded-xl border border-navy/20 bg-white px-4 text-base text-navy placeholder:text-navy/40 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30"
              placeholder="https://..."
            />
          </div>
        </form>
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-10 border-t border-navy/10 bg-cream pb-safe shadow-[0_-4px_20px_rgba(30,42,58,0.08)]">
        <div className="mx-auto max-w-lg px-4 py-3">
          <button
            type="submit"
            form="member-form"
            disabled={submitting}
            className="flex min-h-[48px] w-full items-center justify-center rounded-xl bg-navy text-base font-semibold text-cream disabled:opacity-60 active:bg-navy/90"
          >
            {submitting ? (
              <span className="inline-flex items-center gap-2">
                <span
                  className="h-5 w-5 animate-spin rounded-full border-2 border-cream border-t-transparent"
                  aria-hidden
                />
                Sending...
              </span>
            ) : (
              'Submit →'
            )}
          </button>
          {error ? (
            <p className="mt-3 text-center text-base font-medium text-coral" role="alert">
              {error}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
