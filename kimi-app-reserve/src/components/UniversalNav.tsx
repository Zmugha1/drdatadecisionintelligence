import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { CASE_STUDY_NAV } from '@/data/caseStudiesData';
import { BOOKING_URL, hrefPage } from '@/lib/sitePaths';

const PRODUCT_NAV = [
  { label: 'All Products', page: 'products' },
  { label: 'Lead AI', page: 'lead-ai' },
  { label: 'Bidding AI', page: 'bidding-ai' },
  { label: 'Coaching AI', page: 'coaching-ai' },
  { label: 'AgentPulse', page: 'agentpulse' },
  { label: 'Front Desk AI', page: 'front-desk-ai' },
];

const mainLinks = [
  { label: 'Home', href: hrefPage('home') },
  { label: 'Private Hub', href: hrefPage('private-hub') },
  { label: 'AI Enablement', href: hrefPage('ai-enablement') },
  { label: 'About', href: hrefPage('about') },
  { label: 'Careers', href: hrefPage('careers') },
  { label: 'Blog', href: hrefPage('blog') },
  { label: 'Governance', href: hrefPage('governance') },
  { label: 'FAQ', href: hrefPage('faq') },
];

export default function UniversalNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [caseDropdownOpen, setCaseDropdownOpen] = useState(false);
  const [mobileCaseOpen, setMobileCaseOpen] = useState(false);
  const productsDropdownRef = useRef<HTMLDivElement>(null);
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
      if (productsDropdownRef.current && !productsDropdownRef.current.contains(e.target as Node)) {
        setProductsDropdownOpen(false);
      }
      if (caseDropdownRef.current && !caseDropdownRef.current.contains(e.target as Node)) {
        setCaseDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    setMobileProductsOpen(false);
    setCaseDropdownOpen(false);
    setMobileCaseOpen(false);

    if (href.includes('#')) {
      const hashPart = href.split('#')[1];
      const currentPage = new URLSearchParams(window.location.search).get('page');
      if (currentPage) {
        window.location.href = href;
      } else {
        document.getElementById(hashPart)?.scrollIntoView({ behavior: 'smooth' });
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
              href={hrefPage('home')}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(hrefPage('home'));
              }}
              className="font-display text-xl font-bold text-navy transition-colors hover:text-teal"
            >
              Dr. Data
            </a>

            <div className="hidden items-center gap-1 md:flex">
              <a
                href={mainLinks[0].href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(mainLinks[0].href);
                }}
                className="rounded-lg px-4 py-2 text-sm font-medium text-navy/70 transition-all hover:bg-teal/5 hover:text-teal"
              >
                {mainLinks[0].label}
              </a>

              <div
                ref={productsDropdownRef}
                className="relative"
                onMouseEnter={() => setProductsDropdownOpen(true)}
                onMouseLeave={() => setProductsDropdownOpen(false)}
              >
                <button
                  type="button"
                  aria-expanded={productsDropdownOpen}
                  aria-haspopup="true"
                  onClick={() => setProductsDropdownOpen((o) => !o)}
                  className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-navy/70 transition-all hover:bg-teal/5 hover:text-teal"
                >
                  Products
                  <ChevronDown className={`h-4 w-4 transition-transform ${productsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {productsDropdownOpen ? (
                  <div
                    className="absolute left-0 top-full z-50 min-w-[min(100vw-2rem,18rem)] pt-1"
                    role="menu"
                  >
                    <div className="rounded-xl border border-navy/10 bg-white py-2 shadow-lg">
                      {PRODUCT_NAV.map((item) => (
                        <a
                          key={item.page}
                          href={hrefPage(item.page)}
                          role="menuitem"
                          className="block px-4 py-2.5 text-left text-sm text-navy/85 transition hover:bg-teal/10 hover:text-teal"
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(hrefPage(item.page));
                          }}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>

              <a
                href={mainLinks[1].href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(mainLinks[1].href);
                }}
                className="rounded-lg px-4 py-2 text-sm font-medium text-navy/70 transition-all hover:bg-teal/5 hover:text-teal"
              >
                {mainLinks[1].label}
              </a>

              <a
                href={mainLinks[2].href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(mainLinks[2].href);
                }}
                className="rounded-lg px-4 py-2 text-sm font-medium text-navy/70 transition-all hover:bg-teal/5 hover:text-teal"
              >
                {mainLinks[2].label}
              </a>

              {CASE_STUDY_NAV.length > 0 ? (
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
                        <a
                          href={hrefPage('case-studies')}
                          role="menuitem"
                          className="block px-4 py-2.5 text-left text-sm text-navy/85 transition hover:bg-teal/10 hover:text-teal"
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(hrefPage('case-studies'));
                          }}
                        >
                          All case studies
                        </a>
                        {CASE_STUDY_NAV.map((item) => (
                          <a
                            key={item.page}
                            href={hrefPage(item.page)}
                            role="menuitem"
                            className="block px-4 py-2.5 text-left text-sm text-navy/85 transition hover:bg-teal/10 hover:text-teal"
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavClick(hrefPage(item.page));
                            }}
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              ) : (
                <a
                  href={hrefPage('case-studies')}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(hrefPage('case-studies'));
                  }}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-navy/70 transition-all hover:bg-teal/5 hover:text-teal"
                >
                  Case Studies
                </a>
              )}

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
                href={BOOKING_URL}
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
            <a
              href={mainLinks[0].href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(mainLinks[0].href);
              }}
              className="block rounded-lg px-4 py-3 font-medium text-navy transition-all hover:bg-teal/5 hover:text-teal"
            >
              {mainLinks[0].label}
            </a>

            <div className="border-t border-[#e0e0e0] pt-2">
              <button
                type="button"
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="flex w-full items-center justify-between rounded-lg px-4 py-3 font-medium text-navy hover:bg-teal/5"
              >
                Products
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileProductsOpen ? (
                <div className="ml-2 border-l-2 border-teal/30 pl-3">
                  {PRODUCT_NAV.map((item) => (
                    <a
                      key={item.page}
                      href={hrefPage(item.page)}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(hrefPage(item.page));
                      }}
                      className="block rounded-lg py-2.5 pl-2 text-sm text-navy/80 hover:text-teal"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>

            <a
              href={mainLinks[1].href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(mainLinks[1].href);
              }}
              className="block rounded-lg px-4 py-3 font-medium text-navy transition-all hover:bg-teal/5 hover:text-teal"
            >
              {mainLinks[1].label}
            </a>

            <a
              href={mainLinks[2].href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(mainLinks[2].href);
              }}
              className="block rounded-lg px-4 py-3 font-medium text-navy transition-all hover:bg-teal/5 hover:text-teal"
            >
              {mainLinks[2].label}
            </a>

            {CASE_STUDY_NAV.length > 0 ? (
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
                    <a
                      href={hrefPage('case-studies')}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(hrefPage('case-studies'));
                      }}
                      className="block rounded-lg py-2.5 pl-2 text-sm text-navy/80 hover:text-teal"
                    >
                      All case studies
                    </a>
                    {CASE_STUDY_NAV.map((item) => (
                      <a
                        key={item.page}
                        href={hrefPage(item.page)}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(hrefPage(item.page));
                        }}
                        className="block rounded-lg py-2.5 pl-2 text-sm text-navy/80 hover:text-teal"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <a
                href={hrefPage('case-studies')}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(hrefPage('case-studies'));
                }}
                className="block rounded-lg px-4 py-3 font-medium text-navy transition-all hover:bg-teal/5 hover:text-teal"
              >
                Case Studies
              </a>
            )}

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
                href={BOOKING_URL}
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
