import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Calendar } from 'lucide-react';

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="relative py-24 sm:py-32 w-full overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #4ECDC4 0%, #3BA99F 100%)',
      }}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full animate-gradient-shift"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)`,
            backgroundSize: '200% 200%',
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 
          className={`font-display font-bold text-white text-3xl sm:text-4xl mb-4 transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Still not sure if Dr. Data is right for you?
        </h2>

        {/* Money Tagline */}
        <p 
          className={`text-2xl font-bold text-white/90 mb-10 transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '150ms' }}
        >
          Make $$ With Your Data Faster
        </p>

        {/* CTAs */}
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-teal font-display font-semibold px-6 py-5 text-base rounded-lg transition-all duration-200 w-full sm:w-auto"
            onClick={() => window.location.href = '/ask-chatgpt'}
          >
            <MessageSquare className="mr-2" size={20} />
            Ask ChatGPT
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-teal font-display font-semibold px-6 py-5 text-base rounded-lg transition-all duration-200 w-full sm:w-auto"
            onClick={() => window.location.href = '/ask-claude'}
          >
            <MessageSquare className="mr-2" size={20} />
            Ask Claude
          </Button>
          
          <Button
            size="lg"
            className="bg-coral hover:bg-coral/90 text-white font-display font-semibold px-6 py-5 text-base rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 animate-pulse-glow-coral w-full sm:w-auto"
            onClick={() => window.open('https://calendly.com/zubiaml4l/15min', '_blank')}
          >
            <Calendar className="mr-2" size={20} />
            Book a Discovery Call
          </Button>
        </div>
      </div>
    </section>
  );
}
