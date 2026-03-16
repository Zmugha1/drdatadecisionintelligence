import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';

const stats = [
  { value: 92000, suffix: '+', label: 'Labor hours saved', prefix: '' },
  { value: 40, suffix: '%', label: 'Forecasting accuracy improvement', prefix: '' },
  { value: 20, suffix: '%', label: 'Cost reduction', prefix: '15-' },
];

function AnimatedCounter({ 
  value, 
  suffix, 
  prefix,
  isVisible 
}: { 
  value: number; 
  suffix: string; 
  prefix: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1500;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <span className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-gradient">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Proof() {
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
      id="proof"
      className="relative py-24 sm:py-32 w-full bg-navy overflow-hidden"
    >
      {/* Background Particle Effect */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 20%, rgba(78, 205, 196, 0.3) 0%, transparent 40%), radial-gradient(circle at 70% 80%, rgba(255, 107, 107, 0.2) 0%, transparent 40%)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 200}ms` }}
            >
              <div className="mb-3">
                <AnimatedCounter 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  prefix={stat.prefix}
                  isVisible={isVisible}
                />
              </div>
              <p className="text-white/70 text-base sm:text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div 
          className={`max-w-3xl mx-auto transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0 rotateX-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ 
            transitionDelay: '800ms',
            perspective: '1000px',
          }}
        >
          <div 
            className="relative p-8 sm:p-12 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:-translate-y-2"
            style={{
              transform: isVisible ? 'rotateX(0deg)' : 'rotateX(15deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Quote Icon */}
            <div 
              className={`absolute -top-6 left-8 w-12 h-12 rounded-full bg-teal flex items-center justify-center transition-all duration-500 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}
              style={{ transitionDelay: '1200ms' }}
            >
              <Quote size={24} className="text-white" />
            </div>

            {/* Quote Text */}
            <blockquote className="text-white text-lg sm:text-xl leading-relaxed mb-6 italic">
              "Dr. Data helped us see patterns in our client communications we'd been missing for years. Our churn prediction accuracy improved 40%, and finally we understand WHY clients leave, not just who."
            </blockquote>

            {/* Attribution */}
            <cite className="not-italic text-white/60 text-sm">
              , Professional Services Firm, Milwaukee
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}
