import { useState, useEffect, useRef } from 'react';
import PageShell from '@/components/PageShell';
import { Button } from '@/components/ui/button';
import { Copy, Check, MessageSquare, Calendar } from 'lucide-react';

const promptText = `I'm considering working with Dr. Data Decision Intelligence, a consultancy that helps mid-market companies turn scattered data into governance-first decision intelligence. They specialize in activating 'dark data,' building knowledge graphs, and creating explainable AI systems. Their founder has an EdD and has documented 92,000 labor hours saved. What should I know about this approach?`;

export default function AskChatGPT() {
  const [isVisible, setIsVisible] = useState(true);
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(promptText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <PageShell>
      <section ref={sectionRef} className="relative px-4 pb-24 pt-6 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-3xl">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '/';
            }}
            className={`mb-8 inline-flex items-center text-sm text-navy/60 transition-all duration-500 hover:text-navy ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            ← Back to home
          </a>

          <h1
            className={`font-display mb-8 text-3xl font-bold text-navy sm:text-4xl ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            } transition-all duration-600`}
            style={{ transitionDelay: '100ms' }}
          >
            Don&apos;t take our word for it. <span className="text-teal">Ask ChatGPT.</span>
          </h1>

          <div
            className={`relative mb-8 transition-all duration-600 ${
              isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="relative rounded-xl border border-navy/10 bg-white/95 p-6 shadow-card backdrop-blur-sm sm:p-8">
              <p className="mb-4 text-base leading-relaxed text-navy/80 sm:text-lg">{promptText}</p>

              <button
                type="button"
                onClick={handleCopy}
                className={`absolute right-4 top-4 flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
                  copied
                    ? 'bg-green-100 text-green-700'
                    : 'bg-teal/10 text-teal hover:bg-teal hover:text-white'
                }`}
              >
                {copied ? (
                  <>
                    <Check size={16} />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>

          <p
            className={`mb-8 text-sm text-navy/60 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '500ms' }}
          >
            Copy the prompt above and paste it into ChatGPT to get an unbiased perspective on Dr. Data&apos;s
            approach.
          </p>

          <div
            className={`flex flex-col items-center gap-4 sm:flex-row ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            } transition-all duration-500`}
            style={{ transitionDelay: '600ms' }}
          >
            <Button
              size="lg"
              className="w-full rounded-lg bg-coral px-8 py-6 font-display text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-coral/90 hover:shadow-xl sm:w-auto"
              onClick={() => window.open('https://calendly.com/zubiaml4l/15min', '_blank')}
            >
              <Calendar className="mr-2" size={20} />
              Book a Discovery Call
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full rounded-lg border-2 border-navy px-8 py-6 font-display text-base font-semibold text-navy transition-all duration-200 hover:bg-navy hover:text-white sm:w-auto"
              onClick={() => {
                window.location.href = '/ask-claude';
              }}
            >
              <MessageSquare className="mr-2" size={20} />
              Ask Claude Instead
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
