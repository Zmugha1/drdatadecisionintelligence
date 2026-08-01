import { useState } from 'react';
import { X } from 'lucide-react';
import { BOOKING_URL, hrefPage } from '@/lib/sitePaths';

type Destination =
  | { kind: 'page'; page: string; label: string }
  | { kind: 'booking'; label: string };

type AssistantItem = {
  id: string;
  question: string;
  answer: string;
  destination: Destination;
};

const GREETING = "Hi, I'm Dr. Data. What would you like to know?";

const ASSISTANT_ITEMS: AssistantItem[] = [
  {
    id: 'different-from-chatgpt',
    question: 'How is Dr. Data different from ChatGPT or other AI tools?',
    answer:
      'Standard AI tools like ChatGPT live in a shared cloud and use your data to train their models. Dr. Data builds custom, private AI apps that run on your own machine. Your data never leaves your building, there is no public cloud exposure, and you pay zero monthly per-user fees. You own your AI. You don\'t rent it.',
    destination: { kind: 'page', page: 'private-hub', label: 'See how it works' },
  },
  {
    id: 'data-leaves-office',
    question: 'Does my business data ever leave my office or get uploaded to the cloud?',
    answer:
      'No. Dr. Data operates on Zero-Cloud Residency. Your private client records, transcripts, quotes, and emails are processed locally on your own hardware. Anything private stays in your building, masked and protected.',
    destination: { kind: 'page', page: 'private-hub', label: 'Read the approach' },
  },
  {
    id: 'making-things-up',
    question: 'How do I know the AI isn\'t just making things up?',
    answer:
      'We use Truth-Link Auditability and Deterministic Governance. Every insight comes with a digital receipt, so you can see the exact timestamp, transcript line, or file that triggered it. We hard-code your business rules so the AI follows your policies, not generic guesses.',
    destination: { kind: 'page', page: 'private-hub', label: 'Learn more' },
  },
  {
    id: 'trade-contractor',
    question: 'I\'m a trade contractor. How can this help me close deals faster?',
    answer:
      'Our Bidding AI lets you build market-backed quotes on site, in your vehicle, before leaving the driveway. It uses your exact costs, margins, and formulas, paired with real-time Market Watch data, to give customers a clear reason to sign on the spot.',
    destination: { kind: 'page', page: 'bidding-ai', label: 'See Bidding AI' },
  },
  {
    id: 'lead-ai-competitors',
    question: 'How does Lead AI find customers before my competitors?',
    answer:
      'Lead AI scans public signals, preliminary plats, newly filed permits, business formations, and home sales, the moment they appear. It scores them and delivers a prioritized morning call list to your private dashboard, so you reach decision-makers first.',
    destination: { kind: 'page', page: 'lead-ai', label: 'See Lead AI' },
  },
  {
    id: 'agentpulse-realtor',
    question: 'I\'m a real estate agent. What is AgentPulse?',
    answer:
      'AgentPulse is a private lead intelligence and content engine built for real estate agents. Every morning it ranks your database to surface hot leads, drafts call scripts in your voice, and publishes hyper-local newsletters and social posts in ninety seconds, all hosted on your own system with no data lock-in.',
    destination: { kind: 'page', page: 'agentpulse', label: 'See AgentPulse' },
  },
  {
    id: 'monthly-subscription',
    question: 'Do I have to pay a monthly subscription for every user?',
    answer:
      'No. Dr. Data builds owned systems, not rented software. We set up your private AI on your hardware for a single, transparent cost, with zero recurring per-user fees. If you ever stop working with us, you keep your software and all your data.',
    destination: { kind: 'page', page: 'products', label: 'See what we build' },
  },
  {
    id: 'who-is-behind',
    question: 'Who is behind Dr. Data, and how do we get started?',
    answer:
      'Dr. Data was founded by Dr. Zubia Mughal, Ed.D., an enterprise AI research leader with over twenty years bridging machine learning, knowledge graphs, and human decision-making. The best first step is a short discovery call.',
    destination: { kind: 'booking', label: 'Book a Discovery Call' },
  },
];

type Turn = {
  id: string;
  question: string;
  answer: string;
  destination: Destination;
};

function destinationHref(destination: Destination): string {
  if (destination.kind === 'booking') {
    return BOOKING_URL;
  }
  return hrefPage(destination.page);
}

function isExternalDestination(destination: Destination): boolean {
  return destination.kind === 'booking';
}

function MascotAvatar({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <img
      src="/mascot-hero.png"
      alt=""
      aria-hidden="true"
      className={`shrink-0 rounded-full bg-white object-contain ${className}`}
    />
  );
}

export default function DrDataAssistant() {
  const [open, setOpen] = useState(false);
  const [turns, setTurns] = useState<Turn[]>([]);

  const handleQuestion = (item: AssistantItem) => {
    setTurns((prev) => [
      ...prev,
      {
        id: item.id,
        question: item.question,
        answer: item.answer,
        destination: item.destination,
      },
    ]);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-[55] bg-navy/20 sm:bg-transparent"
          aria-hidden="true"
          onClick={handleClose}
        />
      )}

      <div className="fixed bottom-4 right-4 z-[60] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
        {open && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Dr. Data assistant"
            className="flex w-[min(calc(100vw-2rem),24rem)] flex-col overflow-hidden rounded-2xl border border-navy/10 bg-cream shadow-card"
          >
            <div className="flex items-center justify-between border-b border-navy/10 bg-white px-4 py-3">
              <div className="flex items-center gap-3">
                <MascotAvatar className="h-10 w-10" />
                <p className="font-display text-sm font-bold text-navy">Dr. Data</p>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="rounded-lg p-2 text-navy/70 transition-colors hover:bg-navy/5 hover:text-navy"
                aria-label="Close assistant"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="max-h-[min(52vh,28rem)] space-y-4 overflow-y-auto px-4 py-4">
              <div className="flex gap-2">
                <MascotAvatar />
                <div className="rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-sm leading-relaxed text-navy shadow-sm">
                  {GREETING}
                </div>
              </div>

              {turns.map((turn, index) => (
                <div key={`${turn.id}-${index}`} className="space-y-3">
                  <div className="flex justify-end">
                    <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-teal px-4 py-3 text-sm font-medium leading-relaxed text-white">
                      {turn.question}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <MascotAvatar />
                    <div className="min-w-0 flex-1 space-y-3">
                      <div className="rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-sm leading-relaxed text-navy shadow-sm">
                        {turn.answer}
                      </div>
                      <a
                        href={destinationHref(turn.destination)}
                        target={isExternalDestination(turn.destination) ? '_blank' : undefined}
                        rel={isExternalDestination(turn.destination) ? 'noopener noreferrer' : undefined}
                        className="inline-flex min-h-[2.75rem] items-center justify-center rounded-xl bg-coral px-4 py-2 font-display text-sm font-semibold text-white transition-colors hover:bg-coral/90"
                      >
                        {turn.destination.label}
                      </a>
                    </div>
                  </div>
                </div>
              ))}

              <div className="space-y-2">
                <p className="font-display text-xs font-semibold uppercase tracking-wide text-navy/60">
                  Tap a question
                </p>
                <div className="flex flex-wrap gap-2">
                  {ASSISTANT_ITEMS.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleQuestion(item)}
                      className="rounded-full border border-teal/30 bg-white px-3 py-2 text-left font-display text-xs font-semibold leading-snug text-navy transition-colors hover:border-teal hover:bg-teal/5 sm:text-sm"
                    >
                      {item.question}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-navy/10 bg-white p-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[3rem] w-full items-center justify-center rounded-xl bg-teal px-4 py-3 font-display text-sm font-semibold text-white transition-colors hover:bg-teal/90 sm:text-base"
              >
                Book a call with Dr. Zubia
              </a>
            </div>
          </div>
        )}

        {!open && (
          <span className="rounded-full bg-navy px-3 py-1 font-display text-xs font-semibold text-white shadow-sm">
            Ask Dr. Data
          </span>
        )}

        <button
          type="button"
          onClick={open ? handleClose : handleOpen}
          className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-cream shadow-card transition-transform hover:scale-105 sm:h-[4.5rem] sm:w-[4.5rem]"
          aria-label={open ? 'Close Dr. Data assistant' : 'Open Dr. Data assistant'}
          aria-expanded={open}
        >
          <img
            src="/mascot-hero.png"
            alt=""
            className="h-11 w-11 object-contain sm:h-12 sm:w-12"
          />
        </button>
      </div>
    </>
  );
}
