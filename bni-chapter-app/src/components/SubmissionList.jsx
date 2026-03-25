import { memo } from 'react';

function SubmissionCard({ row, onDelete }) {
  return (
    <li className="rounded-xl border border-navy/10 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 flex-1 space-y-2">
          <p className="font-display text-base font-bold text-navy">
            {row.member_name || 'Member'}
            {row.company ? (
              <span className="font-sans font-normal text-navy/60"> · {row.company}</span>
            ) : null}
          </p>
          <p className="whitespace-pre-wrap break-words text-base text-navy/90">{row.content}</p>
          {row.link ? (
            <a
              href={row.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block min-h-[48px] break-all text-base text-teal underline underline-offset-2"
            >
              {row.link}
            </a>
          ) : null}
          <p className="text-sm text-navy/50">{row.timestamp}</p>
        </div>
        <button
          type="button"
          onClick={onDelete}
          className="flex h-12 min-w-[48px] shrink-0 items-center justify-center rounded-lg border border-coral/40 bg-cream text-lg font-semibold text-coral active:bg-coral/10 sm:self-start"
          aria-label="Remove from list"
        >
          ✕
        </button>
      </div>
    </li>
  );
}

function SubmissionList({ title, icon, items, onDelete }) {
  const count = items?.length ?? 0;
  return (
    <section className="mb-8 min-w-0">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="text-xl" aria-hidden>
          {icon}
        </span>
        <h2 className="font-display text-lg font-bold text-navy sm:text-xl">{title}</h2>
        <span className="rounded-full bg-navy/10 px-2.5 py-0.5 text-sm font-semibold text-navy">{count}</span>
      </div>
      {count === 0 ? (
        <div className="rounded-xl border-2 border-dashed border-navy/20 bg-cream/50 px-4 py-8 text-center text-base text-navy/60">
          Nothing submitted yet — check back soon
        </div>
      ) : (
        <ul className="space-y-3">
          {items.map((row, index) => (
            <SubmissionCard
              key={`${row.timestamp}-${index}`}
              row={row}
              onDelete={() => onDelete(index)}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default memo(SubmissionList);
