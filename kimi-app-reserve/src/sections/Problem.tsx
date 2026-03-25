import { useEffect, useRef, useState } from 'react';
import { BarChart3, Zap, Eye } from 'lucide-react';

const cards = [
  {
    icon: BarChart3,
    title: 'Data that actually makes sense',
    description: "Your data doesn't talk to itself",
    color: 'border-teal',
    bgColor: 'bg-teal/10',
    iconColor: 'text-teal',
    rotation: -3,
  },
  {
    icon: Zap,
    title: 'Put insight workflows on autopilot',
    description: 'Yes, even the messy qualitative stuff!',
    color: 'border-coral',
    bgColor: 'bg-coral/10',
    iconColor: 'text-coral',
    rotation: 0,
  },
  {
    icon: Eye,
    title: 'Extract and structure signals automatically',
    description: 'Better forecasting, fewer surprises',
    color: 'border-purple-500',
    bgColor: 'bg-purple-500/10',
    iconColor: 'text-purple-500',
    rotation: 3,
  },
];

export default function Problem() {
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
      id="problem"
      className="relative py-24 sm:py-32 w-full bg-white overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, #2C3E50 1px, transparent 1px),
              linear-gradient(to bottom, #2C3E50 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
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
          FOCUS ON HIGH-VALUE DECISIONS.{' '}
          <span className="text-teal">LET DR. DATA HANDLE THE DISCOVERY.</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{
                transitionDelay: `${200 + index * 150}ms`,
              }}
            >
              <div
                className={`relative h-full p-8 bg-white rounded-xl border-t-4 ${card.color} shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-4`}
                style={{
                  transform: isVisible ? `rotate(${card.rotation}deg)` : `rotate(${card.rotation * 2}deg) translateY(60px)`,
                }}
              >
                {/* Icon */}
                <div 
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${card.bgColor} ${card.iconColor} mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
                  style={{
                    animation: isVisible ? `bounce-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${400 + index * 150}ms forwards` : 'none',
                  }}
                >
                  <card.icon size={32} strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 className="font-display font-semibold text-navy text-xl mb-3">
                  {card.title}
                </h3>
                <p className="text-navy/70 text-base leading-relaxed">
                  {card.description}
                </p>

                {/* Hover Glow Effect */}
                <div 
                  className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                  style={{
                    boxShadow: `0 0 40px ${card.color === 'border-teal' ? 'rgba(78, 205, 196, 0.2)' : card.color === 'border-coral' ? 'rgba(255, 107, 107, 0.2)' : 'rgba(168, 85, 247, 0.2)'}`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
