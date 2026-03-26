import { useEffect, type ReactNode } from 'react';
import UniversalNav from '@/components/UniversalNav';
import Footer from '@/sections/Footer';

type PageShellProps = {
  children: ReactNode;
};

/**
 * Same chrome as the home page: UniversalNav, subtle mesh background, full site footer.
 * Use for all marketing subpages so nav + polish stay consistent.
 */
export default function PageShell({ children }: PageShellProps) {
  useEffect(() => {
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <UniversalNav />
      <main className="relative flex-1 pt-20 md:pt-24">
        <div className="pointer-events-none absolute inset-0 opacity-50" aria-hidden>
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at 30% 20%, rgba(78, 205, 196, 0.12) 0%, transparent 55%), radial-gradient(ellipse at 70% 75%, rgba(224, 122, 95, 0.08) 0%, transparent 50%)',
            }}
          />
        </div>
        <div className="relative z-10">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
