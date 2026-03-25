import { memo, useMemo, useState } from 'react';

function EmailPreview({ subject, body }) {
  const [copied, setCopied] = useState(false);

  const fullText = useMemo(() => {
    const sub = subject ? `Subject: ${subject}` : '';
    return [sub, body].filter(Boolean).join('\n\n');
  }, [subject, body]);

  const charCount = fullText.length;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(fullText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex min-h-0 flex-col rounded-xl border border-navy/15 bg-white shadow-sm">
      <div className="shrink-0 border-b border-navy/10 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-navy/60">Subject</p>
        <p className="mt-1 font-display text-base font-semibold text-navy">{subject}</p>
      </div>

      <div className="flex min-h-0 flex-1 flex-col">
        <div className="max-h-[min(55vh,480px)] min-h-[200px] flex-1 overflow-y-auto p-4">
          <pre className="font-email whitespace-pre-wrap break-words rounded-lg bg-cream px-3 py-3 text-sm leading-relaxed text-navy sm:text-base">
            {body}
          </pre>
        </div>
        <div className="shrink-0 border-t border-navy/10 bg-white p-4">
          <button
            type="button"
            onClick={copy}
            className="min-h-[48px] w-full rounded-xl bg-teal px-4 text-base font-semibold text-navy active:bg-teal/90"
          >
            {copied ? '✓ Copied!' : 'Copy Full Email'}
          </button>
          <p className="mt-2 text-center text-sm text-navy/50">{charCount} characters</p>
        </div>
      </div>
    </div>
  );
}

export default memo(EmailPreview);
