import { useEffect } from 'react';
import UniversalNav from '@/components/UniversalNav';
import Hero from '@/sections/Hero';
import Problem from '@/sections/Problem';
import HowItWorks from '@/sections/HowItWorks';
import Services from '@/sections/Services';
import Proof from '@/sections/Proof';
import WhyDrData from '@/sections/WhyDrData';
import CTA from '@/sections/CTA';
import Footer from '@/sections/Footer';

/**
 * Composes the full Kimi dynamic layout (sections + UniversalNav + SurveyCTA via HowItWorks/Services).
 * Do not replace this with an inline duplicate of the marketing page — use `src/sections/*`.
 */
export default function Home() {
  useEffect(() => {
    // Avoid landing in the middle of the page if the URL has #cta or another hash
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <UniversalNav />
      <Hero />
      <Problem />
      <HowItWorks />
      <Services />
      <Proof />
      <WhyDrData />
      <CTA />
      <Footer />
    </div>
  );
}
