import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Search, Network, CheckCircle } from 'lucide-react';
import SurveyCTA from '@/components/SurveyCTA';

const steps = [
  {
    number: '01',
    title: 'DISCOVER',
    description: 'Map your data universe',
    icon: Search,
    color: 'text-teal',
    bgColor: 'bg-teal/10',
  },
  {
    number: '02',
    title: 'CONNECT',
    description: 'Build your knowledge graph',
    icon: Network,
    color: 'text-coral',
    bgColor: 'bg-coral/10',
  },
  {
    number: '03',
    title: 'DECIDE',
    description: 'Act with confidence',
    icon: CheckCircle,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
  },
];

export default function HowItWorks() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative py-24 sm:py-32 w-full bg-mint overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(78, 205, 196, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255, 107, 107, 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <h2 
          className={`font-display font-bold text-navy text-center mb-16 transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
        >
          How It Works
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden md:block absolute top-24 left-[16.67%] right-[16.67%] h-0.5">
            <div 
              className={`h-full bg-gradient-to-r from-teal via-coral to-purple-500 rounded-full transition-all duration-1500 ${
                isVisible ? 'scale-x-100' : 'scale-x-0'
              }`}
              style={{ 
                transformOrigin: 'left',
                transitionDelay: '500ms',
              }}
            />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col items-center text-center transition-all duration-600 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${500 + index * 200}ms` }}
              >
                {/* Step Number (Background) */}
                <div 
                  className={`absolute -top-8 left-1/2 -translate-x-1/2 font-display font-bold text-[120px] leading-none ${step.color} opacity-5 select-none transition-all duration-500 ${
                    isVisible ? 'opacity-5 scale-100' : 'opacity-0 scale-50'
                  }`}
                  style={{ transitionDelay: `${600 + index * 200}ms` }}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div 
                  className={`relative z-10 w-20 h-20 rounded-2xl ${step.bgColor} ${step.color} flex items-center justify-center mb-6 shadow-card transition-all duration-300 hover:scale-110`}
                  style={{
                    animation: isVisible ? `bounce-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${700 + index * 200}ms forwards` : 'none',
                  }}
                >
                  <step.icon size={36} strokeWidth={2} />
                </div>

                {/* Arrow (Desktop, between steps) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(100%+24px)] transform -translate-x-1/2 text-navy/30">
                    <ArrowRight 
                      size={24} 
                      className={`transition-all duration-400 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                      }`}
                      style={{ transitionDelay: `${900 + index * 200}ms` }}
                    />
                  </div>
                )}

                {/* Content */}
                <h3 className={`font-display font-bold text-2xl mb-2 ${step.color}`}>
                  {step.title}
                </h3>
                <p className="text-navy/70 text-base">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Survey CTA */}
        <div className="mt-20 max-w-2xl mx-auto">
          <SurveyCTA variant="light" />
        </div>
      </div>
    </section>
  );
}
