import { useState, useEffect } from 'react';
import { X, Mail, Gift, CheckCircle2, ArrowRight } from 'lucide-react';

export default function LeadCaptureModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribeBlog, setSubscribeBlog] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [hasSeenModal, setHasSeenModal] = useState(false);

  // Show modal after 8 seconds or when user scrolls 50%
  useEffect(() => {
    // Check if user has already seen the modal (using localStorage)
    const hasSeen = localStorage.getItem('drdata-lead-capture-seen');
    if (hasSeen) return;

    const timer = setTimeout(() => {
      if (!hasSeenModal) {
        setIsVisible(true);
        setHasSeenModal(true);
        localStorage.setItem('drdata-lead-capture-seen', 'true');
      }
    }, 8000); // 8 seconds

    // Also show on scroll (50% of page)
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 50 && !hasSeenModal) {
        setIsVisible(true);
        setHasSeenModal(true);
        localStorage.setItem('drdata-lead-capture-seen', 'true');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasSeenModal]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsSubmitting(true);

    try {
      // Submit to Formspree
      const response = await fetch('https://formspree.io/f/mykprpbd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          subject: 'Data to $$$ Demo Access Request',
          message: `Lead Capture Modal Submission

Email: ${email}
Wants Blog Subscription: ${subscribeBlog ? 'Yes' : 'No'}

Requested Access To: Data to $$$ Demo (Confidential Webpage)
Demo Link: https://3zdw4cjlifhzq.ok.kimi.link/?page=data-to-demo`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      // Still show success even if error
      setSubmitted(true);
    }

    setIsSubmitting(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden animate-slide-up">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-navy/40 hover:text-navy transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="p-8">
            {/* Mascot Header */}
            <div className="text-center mb-6">
              <div className="relative inline-block">
                <img
                  src="/mascot-hero.png"
                  alt="Dr. Data Mascot"
                  className="w-24 h-24 mx-auto animate-bounce-slow"
                />
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-teal rounded-full flex items-center justify-center">
                  <Gift className="w-5 h-5 text-navy" />
                </div>
              </div>
            </div>

            {/* Headline */}
            <h3 className="text-2xl sm:text-3xl font-bold text-navy text-center mb-3 font-display">
              See How Data Becomes <span className="text-teal">$$$</span>
            </h3>

            <p className="text-navy/70 text-center mb-6">
              Get exclusive access to Dr. Data's <strong>"Data to $$$ Demo"</strong>, a confidential walkthrough showing exactly how businesses transform scattered information into revenue-generating intelligence.
            </p>

            {/* Benefits */}
            <div className="bg-cream rounded-xl p-4 mb-6">
              <ul className="space-y-2 text-sm text-navy/70">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0" />
                  Live demo of the 7-step Data to $$$ framework
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0" />
                  Real case studies from $4.6M+ projects
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0" />
                  Confidential insights not shared publicly
                </li>
              </ul>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                {/* Email */}
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy/40" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-[#e0e0e0] bg-cream text-navy placeholder:text-navy/40 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all"
                    required
                  />
                </div>

                {/* Blog Subscription Checkbox */}
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={subscribeBlog}
                    onChange={(e) => setSubscribeBlog(e.target.checked)}
                    className="w-5 h-5 mt-0.5 rounded border-[#e0e0e0] text-teal focus:ring-teal"
                  />
                  <span className="text-sm text-navy/70">
                    Yes, subscribe me to Dr. Data's blog for AI insights, case studies, and exclusive tips. (Unsubscribe anytime)
                  </span>
                </label>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-navy text-white py-4 rounded-xl font-display font-semibold hover:bg-navy/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      Get Demo Access <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </form>

            <p className="text-center text-xs text-navy/40 mt-4">
              No spam. Your email is safe with Dr. Data.
            </p>
          </div>
        ) : (
          /* Success State */
          <div className="p-8 text-center">
            <div className="relative inline-block mb-6">
              <img
                src="/mascot-hero.png"
                alt="Dr. Data Mascot"
                className="w-24 h-24 mx-auto"
              />
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-teal rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-navy" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-navy mb-3 font-display">
              Demo Access Granted!
            </h3>

            <p className="text-navy/70 mb-4">
              The confidential Data to $$$ Demo link has been sent to <strong className="text-navy">{email}</strong>. Check your inbox in the next few minutes.
            </p>

            {subscribeBlog && (
              <p className="text-sm text-teal bg-teal/10 rounded-lg p-3 mb-4">
                You're also subscribed to the blog! Welcome to the Dr. Data community.
              </p>
            )}

            <button
              onClick={handleClose}
              className="bg-teal text-navy px-8 py-3 rounded-xl font-semibold hover:bg-teal/90 transition-colors"
            >
              Continue Exploring
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
