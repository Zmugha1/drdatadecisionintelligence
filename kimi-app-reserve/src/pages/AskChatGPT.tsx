import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Check, MessageSquare, Calendar } from 'lucide-react';

const promptText = `I'm considering working with Dr. Data Decision Intelligence, a consultancy that helps mid-market companies turn scattered data into governance-first decision intelligence. They specialize in activating 'dark data,' building knowledge graphs, and creating explainable AI systems. Their founder has an EdD and has documented 92,000 labor hours saved. What should I know about this approach?`;

export default function AskChatGPT() {
  const [isVisible, setIsVisible] = useState(false);
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
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-cream overflow-hidden flex items-center justify-center"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 20%, rgba(78, 205, 196, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(255, 107, 107, 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        {/* Back Link */}
        <a 
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = '/';
          }}
          className={`inline-flex items-center text-navy/60 hover:text-navy text-sm mb-8 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          ← Back to home
        </a>

        {/* Headline */}
        <h1 
          className={`font-display font-bold text-navy text-3xl sm:text-4xl mb-8 transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          Don't take our word for it.{' '}
          <span className="text-teal">Ask ChatGPT.</span>
        </h1>

        {/* Prompt Box */}
        <div 
          className={`relative mb-8 transition-all duration-600 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <div className="bg-white rounded-xl border border-navy/10 shadow-card p-6 sm:p-8">
            <p className="text-navy/80 text-base sm:text-lg leading-relaxed mb-4">
              {promptText}
            </p>
            
            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className={`absolute top-4 right-4 flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
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

        {/* Instructions */}
        <p 
          className={`text-navy/60 text-sm mb-8 transition-all duration-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          Copy the prompt above and paste it into ChatGPT to get an unbiased perspective on Dr. Data's approach.
        </p>

        {/* CTAs */}
        <div 
          className={`flex flex-col sm:flex-row items-center gap-4 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <Button
            size="lg"
            className="bg-coral hover:bg-coral/90 text-white font-display font-semibold px-8 py-6 text-base rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 w-full sm:w-auto"
            onClick={() => window.open('https://calendly.com', '_blank')}
          >
            <Calendar className="mr-2" size={20} />
            Book a Discovery Call
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-display font-semibold px-8 py-6 text-base rounded-lg transition-all duration-200 w-full sm:w-auto"
            onClick={() => window.location.href = '/ask-claude'}
          >
            <MessageSquare className="mr-2" size={20} />
            Ask Claude Instead
          </Button>
        </div>
      </div>
    </section>
  );
}
