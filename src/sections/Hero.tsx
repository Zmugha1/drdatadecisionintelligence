import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

type HeroProps = {
  onOpenDecisionIntel: () => void;
};

export default function Hero({ onOpenDecisionIntel }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[min(100dvh,920px)] w-full overflow-hidden bg-[#FFFCF5]">
      {/* Background gradient mesh */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 30% 20%, rgba(78, 205, 196, 0.18) 0%, transparent 55%), radial-gradient(ellipse at 70% 75%, rgba(224, 122, 95, 0.12) 0%, transparent 50%)',
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          {/* Mascot */}
          <div
            className={`relative mb-8 transition-all duration-1000 ${
              isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
            style={{
              transitionDelay: '200ms',
              animation: isVisible ? 'hero-float 4s ease-in-out infinite' : 'none',
            }}
          >
            <img
              src="/mascot-hero.png"
              alt="Dr. Data Mascot"
              className="mx-auto h-48 w-48 object-contain drop-shadow-2xl sm:h-56 sm:w-56 md:h-64 md:w-64"
            />
          </div>

          {/* Headlines */}
          <div className="mb-6 space-y-2">
            <h1
              className={`font-display text-[#2C3E50] transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{
                fontSize: 'clamp(1.75rem, 5vw, 3rem)',
                lineHeight: 1.2,
                transitionDelay: '350ms',
                fontFamily: "'Space Grotesk', Inter, system-ui, sans-serif",
                fontWeight: 700,
              }}
            >
              <span className="text-[#4ECDC4]">&ldquo;</span>OUR DATA IS PERFECTLY ORGANIZED
            </h1>
            <h1
              className={`font-display text-[#2C3E50] transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{
                fontSize: 'clamp(1.75rem, 5vw, 3rem)',
                lineHeight: 1.2,
                transitionDelay: '500ms',
                fontFamily: "'Space Grotesk', Inter, system-ui, sans-serif",
                fontWeight: 700,
              }}
            >
              AND WE USE ALL OF IT!<span className="text-[#4ECDC4]">&rdquo;</span>
            </h1>
            <p
              className={`font-display text-xl text-[#E07A5F] transition-all duration-700 sm:text-2xl ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '700ms', fontWeight: 500 }}
            >
              Said no business leader, ever
            </p>
          </div>

          <p
            className={`mx-auto mb-10 max-w-2xl text-base text-[#2C3E50]/80 transition-all duration-600 sm:text-lg ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
            style={{ transitionDelay: '850ms' }}
          >
            Stop searching for answers in scattered spreadsheets. Start making confident decisions. Dr. Data
            organizes your information into clear, actionable insights you can trust.
          </p>

          <p
            className={`mb-8 text-xl font-bold text-[#4ECDC4] transition-all duration-600 sm:text-2xl ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            Make $$ With Your Data Faster
          </p>

          <div
            className={`flex flex-col items-center justify-center gap-6 transition-all duration-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '1100ms' }}
          >
            <a
              href="https://calendly.com/zubiaml4l/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-[#E07A5F] px-10 py-4 text-base font-semibold text-white shadow-lg transition-all hover:scale-[1.02] hover:bg-[#d46a4e] hover:shadow-xl"
            >
              BOOK A DISCOVERY CALL
            </a>

            <div className="mx-auto max-w-xl">
              <div className="rounded-xl border border-[#2C3E50]/10 bg-white/70 p-5 text-center shadow-sm backdrop-blur-sm">
                <p className="mb-2 text-xs font-medium uppercase tracking-wide text-[#2C3E50]/50">
                  Who&apos;s behind this
                </p>
                <p className="mb-3 text-sm leading-relaxed text-[#2C3E50]/80">
                  Built by an enterprise AI and data research leader specializing in reliable machine learning,
                  decision intelligence, and organizational adoption. Providing applied research and advisory for
                  decision-ready AI systems.
                </p>
                <a
                  href="/?page=about"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#4ECDC4] transition-colors hover:text-[#2C3E50]"
                >
                  Meet Dr. Zubia Mughal
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
              <button
                type="button"
                onClick={onOpenDecisionIntel}
                className="rounded-xl border-2 border-[#2C3E50] bg-white px-8 py-3 font-semibold text-[#2C3E50] transition-colors hover:bg-[#2C3E50] hover:text-white"
              >
                What&apos;s Decision Intelligence?
              </button>
              <button
                type="button"
                onClick={scrollToHowItWorks}
                className="text-sm font-medium text-[#4ECDC4] underline-offset-4 transition-colors hover:text-[#2C3E50] hover:underline"
              >
                Jump to How it works
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FFFCF5] to-transparent" />
    </section>
  );
}
