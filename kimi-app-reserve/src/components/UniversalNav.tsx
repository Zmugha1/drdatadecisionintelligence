import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Private Hub', href: '/?page=private-hub' },
  { label: 'Services', href: '/#services' },
  { label: 'Case Studies', href: '/?page=case-studies' },
  { label: 'About', href: '/?page=about' },
  { label: 'Blog', href: '/?page=blog' },
  { label: 'Governance', href: '/?page=governance' },
  { label: 'FAQ', href: '/?page=faq' },
];

export default function UniversalNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    if (href === '/') {
      window.location.href = '/';
    } else if (href.startsWith('/#')) {
      // For hash links on home page
      const currentPage = new URLSearchParams(window.location.search).get('page');
      if (currentPage) {
        // If on a subpage, navigate to home first
        window.location.href = href;
      } else {
        // Already on home page, just scroll
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
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#e0e0e0]' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a 
              href="/" 
              onClick={(e) => { e.preventDefault(); handleNavClick('/'); }}
              className="font-display font-bold text-xl text-navy hover:text-teal transition-colors"
            >
              Dr. Data
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="px-4 py-2 text-sm font-medium text-navy/70 hover:text-teal rounded-lg hover:bg-teal/5 transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="https://calendly.com/zubiaml4l/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-navy text-white text-sm font-semibold rounded-lg hover:bg-navy/90 transition-colors"
              >
                Book a Call
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-navy hover:text-teal transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-navy/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div 
          className={`absolute top-16 left-0 right-0 bg-white border-b border-[#e0e0e0] shadow-lg transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="px-4 py-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="block px-4 py-3 text-navy font-medium rounded-lg hover:bg-teal/5 hover:text-teal transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-[#e0e0e0]">
              <a
                href="https://calendly.com/zubiaml4l/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-3 bg-navy text-white text-center font-semibold rounded-lg hover:bg-navy/90 transition-colors"
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
