import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { hrefPage } from '@/lib/sitePaths';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  /** Start visible so above-the-fold content never stays at opacity-0 if JS is slow (see DEPLOYMENT.md). */
  const [isVisible] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-cream"
    >
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 opacity-50">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 30% 20%, rgba(78, 205, 196, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(255, 107, 107, 0.1) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Mascot */}
          <div 
            className={`relative mt-16 mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
            style={{
              transitionDelay: '600ms',
              animation: isVisible ? 'float 4s ease-in-out infinite' : 'none',
            }}
          >
            <img
              src="/mascot-hero.png"
              alt="Dr. Data Mascot"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto drop-shadow-2xl"
            />
          </div>

          {/* Headline */}
          <div className="space-y-2 mb-6">
            <h1 
              className={`font-display font-bold text-navy transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ 
                fontSize: 'clamp(1.75rem, 5vw, 3rem)',
                lineHeight: 1.2,
                transitionDelay: '200ms',
              }}
            >
              OUR DATA IS PERFECTLY ORGANIZED
            </h1>
            <h1 
              className={`font-display font-bold text-navy transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ 
                fontSize: 'clamp(1.75rem, 5vw, 3rem)',
                lineHeight: 1.2,
                transitionDelay: '400ms',
              }}
            >
              AND WE USE ALL OF IT!
            </h1>
            <p 
              className={`font-display text-xl sm:text-2xl text-coral font-medium transition-all duration-800 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '1000ms' }}
            >
              Said no business leader, ever
            </p>
          </div>

          {/* Subheadline */}
          <p 
            className={`max-w-2xl mx-auto text-navy/80 text-base sm:text-lg mb-10 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1200ms' }}
          >
            Stop searching for answers in scattered spreadsheets. Start making confident decisions. Dr. Data organizes your information into clear, actionable insights you can trust.
          </p>

          {/* Money Tagline */}
          <p 
            className={`text-xl sm:text-2xl font-bold text-teal mb-8 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1300ms' }}
          >
            Make $$$ With Your Data Faster
          </p>

          {/* CTAs */}
          <div 
            className={`flex flex-col items-center justify-center gap-6 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1400ms' }}
          >
            {/* Primary CTA */}
            <Button
              size="lg"
              className="bg-coral hover:bg-coral/90 text-white font-display font-semibold px-8 py-6 text-base rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              onClick={() => window.open('https://calendly.com/zubiaml4l/15min', '_blank')}
            >
              BOOK A DISCOVERY CALL
            </Button>

            {/* Credibility Section - Between Buttons */}
            <div className="max-w-xl mx-auto">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-navy/10 text-center">
                <p className="text-navy/50 text-xs uppercase tracking-wide font-medium mb-2">Who's behind this</p>
                <p className="text-navy/80 text-sm leading-relaxed mb-3">
                  Built by an enterprise AI and data research leader specializing in reliable machine learning, decision intelligence, and organizational adoption. Providing applied research and advisory for decision-ready AI systems.
                </p>
                <a 
                  href={hrefPage('about')}
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = hrefPage('about');
                  }}
                  className="inline-flex items-center gap-1 text-teal text-sm font-medium hover:underline"
                >
                  Meet Dr. Zubia Mughal <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Secondary CTA */}
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-display font-semibold px-8 py-6 text-base rounded-lg transition-all duration-200"
              onClick={() => scrollToSection('how-it-works')}
            >
              What's Decision Intelligence?
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent pointer-events-none" />
    </section>
  );
}
