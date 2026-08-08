import { useEffect, useRef, useState } from 'react';
import { Linkedin } from 'lucide-react';
import { hrefHomeHash, hrefPage } from '@/lib/sitePaths';

const MBA_MEMBER_URL =
  'https://www.mbabuilds.org/online-member-directory/dr-data-decision-intelligence';

const BNI_MEMBER_URL =
  'https://bniamerica.com/en-US/memberdetails?encryptedMemberId=k9lwzhwnIt3QbMu851Wksg%3D%3D&cmsv3=true&name=Zubia+Mughal';

function buildFooterLinks() {
  return [
    {
      title: 'Products',
      links: [
        { label: 'All Products', href: hrefPage('products') },
        { label: 'Lead AI', href: hrefPage('lead-ai') },
        { label: 'Bidding AI', href: hrefPage('bidding-ai') },
        { label: 'Coaching AI', href: hrefPage('coaching-ai') },
        { label: 'AgentPulse', href: hrefPage('agentpulse') },
        { label: 'Front Desk AI', href: hrefPage('front-desk-ai') },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: hrefPage('about') },
        { label: 'Private Hub', href: hrefPage('private-hub') },
        { label: 'AI Enablement', href: hrefPage('ai-enablement') },
        { label: 'Careers', href: hrefPage('careers') },
        { label: 'Blog', href: hrefPage('blog') },
        { label: 'Find your zone', href: 'https://drdatadecisionintelligence.com/find-your-zone/' },
        { label: 'FAQ', href: hrefPage('faq') },
        { label: 'Contact', href: hrefHomeHash('cta') },
      ],
    },
    {
      title: 'Governance',
      links: [
        { label: 'Governance & Responsibility', href: hrefPage('governance') },
        { label: 'Deployment Checklist', href: `${hrefPage('governance')}#checklist` },
        { label: 'Standards Alignment', href: `${hrefPage('governance')}#standards` },
      ],
    },
    {
      title: 'Connect',
      links: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zubia-m-947b3578', icon: Linkedin },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Terms of Service', href: '/terms-of-service' },
      ],
    },
  ];
}

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);
  const footerLinks = buildFooterLinks();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-navy overflow-hidden"
    >
      {/* Top Gradient Border */}
      <div 
        className={`h-1 w-full bg-gradient-to-r from-teal via-coral to-teal transition-transform duration-800 ${
          isVisible ? 'scale-x-100' : 'scale-x-0'
        }`}
        style={{ transformOrigin: 'left' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Logo & Tagline */}
          <div 
            className={`col-span-2 md:col-span-1 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <h3 className="font-display font-bold text-2xl text-white mb-2">
              Dr. Data
            </h3>
            <p className="text-white/50 text-sm">
              Decision Intelligence
            </p>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column, index) => (
            <div 
              key={index}
              className={`transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <h4 className="font-display font-semibold text-white text-sm mb-4">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault();
                          scrollToSection(link.href);
                        }
                      }}
                      className="group flex items-center text-white/60 text-sm hover:text-teal transition-all duration-200 hover:translate-x-1"
                    >
                      {'icon' in link && link.icon && (
                        <link.icon size={16} className="mr-2" />
                      )}
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className={`mb-10 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '550ms' }}
        >
          <p className="mb-3 text-center text-xs font-medium uppercase tracking-wide text-white/45">
            Proud member of
          </p>
          <div className="flex flex-wrap items-stretch justify-center gap-4">
            <a
              href={MBA_MEMBER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex max-w-full flex-col items-center gap-2 rounded-xl bg-cream px-4 py-3 shadow-sm transition-colors hover:bg-white sm:flex-row sm:gap-4 sm:px-5"
            >
              <img
                src="/mba-logo.png"
                alt="Metro Builders Association member"
                className="h-12 w-auto max-h-[56px] object-contain"
                loading="lazy"
              />
              <span className="max-w-xs text-center text-xs leading-snug text-navy/65 group-hover:text-navy sm:text-left">
                Proud member of the Metro Builders Association
              </span>
            </a>

            <a
              href={BNI_MEMBER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex max-w-full items-center justify-center rounded-xl bg-cream px-4 py-3 shadow-sm transition-colors hover:bg-white sm:px-5"
            >
              {/* Text credential until approved BNI logo usage; swap for <img> when permitted */}
              <span className="max-w-xs text-center text-xs leading-snug text-navy/65 group-hover:text-navy">
                Proud Member of Wisconsin BNI
              </span>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div 
          className={`pt-8 border-t border-white/10 transition-all duration-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              Made with curiosity in Milwaukee, WI 🧀
            </p>
            <div className="flex items-center gap-6">
              <a 
                href="/privacy-policy" 
                className="text-white/50 text-sm hover:text-teal transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms-of-service" 
                className="text-white/50 text-sm hover:text-teal transition-colors duration-200"
              >
                Terms of Service
              </a>
              <span className="text-white/30 text-sm">
                © {new Date().getFullYear()} Dr. Data
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
