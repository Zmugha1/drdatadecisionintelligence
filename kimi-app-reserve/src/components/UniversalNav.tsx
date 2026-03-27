import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { CASE_STUDY_NAV } from '@/data/caseStudiesData';

const mainLinks = [
  { label: 'Home', href: '/' },
  { label: 'Private Hub', href: '/?page=private-hub' },
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/?page=about' },
  { label: 'Blog', href: '/?page=blog' },
  { label: 'Governance', href: '/?page=governance' },
  { label: 'FAQ', href: '/?page=faq' },
];

export default function UniversalNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [caseDropdownOpen, setCaseDropdownOpen] = useState(false);
  const [mobileCaseOpen, setMobileCaseOpen] = useState(false);
  const caseDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (caseDropdownRef.current && !caseDropdownRef.current.contains(e.target as Node)) {
        setCaseDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    setCaseDropdownOpen(false);
    setMobileCaseOpen(false);

    if (href === '/') {
      window.location.href = '/';
    } else if (href.startsWith('/#')) {
      const currentPage = new URLSearchParams(window.location.search).get('page');
      if (currentPage) {
        window.location.href = href;
      } else {
        const element = document.getElementById(href.slice(2));
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'border-b border-[#e0e0e0] bg-white/95 shadow-sm backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/');
              }}
              className="font-display text-xl font-bold text-navy transition-colors hover:text-teal"
            >
              Dr. Data
            </a>

            <div className="hidden items-center gap-1 md:flex">
              {mainLinks.slice(0, 3).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-navy/70 transition-all hover:bg-teal/5 hover:text-teal"
                >
                  {link.label}
                </a>
              ))}

              <div
                ref={caseDropdownRef}
                className="relative"
                onMouseEnter={() => setCaseDropdownOpen(true)}
                onMouseLeave={() => setCaseDropdownOpen(false)}
              >
                <button
                  type="button"
                  aria-expanded={caseDropdownOpen}
                  aria-haspopup="true"
                  onClick={() => setCaseDropdownOpen((o) => !o)}
                  className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-navy/70 transition-all hover:bg-teal/5 hover:text-teal"
                >
                  Case Studies
                  <ChevronDown className={`h-4 w-4 transition-transform ${caseDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {caseDropdownOpen ? (
                  <div
                    className="absolute left-0 top-full z-50 min-w-[min(100vw-2rem,18rem)] pt-1"
                    role="menu"
                  >
                    <div className="rounded-xl border border-navy/10 bg-white py-2 shadow-lg">
                      {CASE_STUDY_NAV.map((item) => (
                        <a
                          key={item.page}
                          href={`/?page=${item.page}`}
                          role="menuitem"
                          className="block px-4 py-2.5 text-left text-sm text-navy/85 transition hover:bg-teal/10 hover:text-teal"
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(`/?page=${item.page}`);
                          }}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>

              {mainLinks.slice(3).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-navy/70 transition-all hover:bg-teal/5 hover:text-teal"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden md:block">
              <a
                href="https://calendly.com/zubiaml4l/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy/90"
              >
                Book a Call
              </a>
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-navy transition-colors hover:text-teal md:hidden"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-navy/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />

        <div
          className={`absolute left-0 right-0 top-16 border-b border-[#e0e0e0] bg-white shadow-lg transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="max-h-[calc(100dvh-5rem)] space-y-1 overflow-y-auto px-4 py-6">
            {mainLinks.slice(0, 3).map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block rounded-lg px-4 py-3 font-medium text-navy transition-all hover:bg-teal/5 hover:text-teal"
              >
                {link.label}
              </a>
            ))}

            <div className="border-t border-[#e0e0e0] pt-2">
              <button
                type="button"
                onClick={() => setMobileCaseOpen(!mobileCaseOpen)}
                className="flex w-full items-center justify-between rounded-lg px-4 py-3 font-medium text-navy hover:bg-teal/5"
              >
                Case Studies
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileCaseOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileCaseOpen ? (
                <div className="ml-2 border-l-2 border-teal/30 pl-3">
                  {CASE_STUDY_NAV.map((item) => (
                    <a
                      key={item.page}
                      href={`/?page=${item.page}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(`/?page=${item.page}`);
                      }}
                      className="block rounded-lg py-2.5 pl-2 text-sm text-navy/80 hover:text-teal"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>

            {mainLinks.slice(3).map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block rounded-lg px-4 py-3 font-medium text-navy transition-all hover:bg-teal/5 hover:text-teal"
              >
                {link.label}
              </a>
            ))}

            <div className="border-t border-[#e0e0e0] pt-4">
              <a
                href="https://calendly.com/zubiaml4l/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg bg-navy py-3 text-center font-semibold text-white transition-colors hover:bg-navy/90"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
