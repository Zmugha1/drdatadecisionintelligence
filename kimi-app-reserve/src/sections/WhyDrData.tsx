import { useEffect, useRef, useState } from 'react';
import { Rocket, BookOpen, Building2, Lock } from 'lucide-react';

const benefits = [
  {
    icon: Rocket,
    title: 'Easy Setup',
    rotation: -2,
  },
  {
    icon: BookOpen,
    title: 'Onboard Faster',
    rotation: 2,
  },
  {
    icon: Building2,
    title: 'Any Industry',
    rotation: -2,
  },
  {
    icon: Lock,
    title: 'Total Security',
    rotation: 2,
  },
];

export default function WhyDrData() {
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
      id="why-dr-data"
      className="relative py-24 sm:py-32 w-full bg-white overflow-hidden"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(78, 205, 196, 0.05) 0%, transparent 70%)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <h2 
          className={`font-display font-bold text-navy text-center mb-16 transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}
        >
          No drama. Just data that{' '}
          <span className="text-teal">works.</span>
        </h2>

        {/* Benefit Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div
                className="relative h-full p-8 bg-white rounded-xl border border-navy/10 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-3 text-center"
                style={{
                  transform: isVisible ? `rotate(${benefit.rotation}deg)` : `rotate(${benefit.rotation * 3}deg) translateY(40px)`,
                }}
              >
                {/* Icon */}
                <div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-teal/10 text-teal mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-teal group-hover:text-white"
                  style={{
                    animation: isVisible ? `bounce-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${400 + index * 100}ms forwards` : 'none',
                  }}
                >
                  <benefit.icon size={32} strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="font-display font-semibold text-navy text-lg">
                  {benefit.title}
                </h3>

                {/* Hover Border Glow */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-teal/30 transition-colors duration-300 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
