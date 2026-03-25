import { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2, Building2, Users } from 'lucide-react';

interface SurveyCTAProps {
  variant?: 'light' | 'dark';
}

export default function SurveyCTA({ variant = 'light' }: SurveyCTAProps) {
  const [email, setEmail] = useState('');
  const [industry, setIndustry] = useState('');
  const [employees, setEmployees] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    if (!industry.trim()) {
      setError('Please enter your industry');
      return;
    }

    if (!employees.trim()) {
      setError('Please enter number of employees');
      return;
    }

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
          industry,
          employees,
          subject: 'Data Readiness Assessment Request',
          message: `Data Readiness Assessment Request

Email: ${email}
Industry: ${industry}
Number of Employees: ${employees}

Survey link: https://3zdw4cjlifhzq.ok.kimi.link/?page=survey`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail('');
        setIndustry('');
        setEmployees('');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }

    setIsSubmitting(false);
  };

  const isDark = variant === 'dark';

  return (
    <div className={`rounded-2xl p-6 lg:p-8 ${isDark ? 'bg-navy' : 'bg-white border border-[#e0e0e0]'} shadow-lg`}>
      {!submitted ? (
        <>
          <div className="text-center mb-6">
            <h3 className={`text-2xl font-bold mb-2 font-display ${isDark ? 'text-white' : 'text-navy'}`}>
              Ready to take a <span className="text-teal">15 minute</span> Data Readiness Assessment?
            </h3>
            <p className={`${isDark ? 'text-white/70' : 'text-navy/70'}`}>
              Discover your AI readiness score and get personalized recommendations.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="space-y-3">
              {/* Email */}
              <div className="relative">
                <Mail className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${isDark ? 'text-white/40' : 'text-navy/40'}`} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border outline-none transition-all ${
                    isDark
                      ? 'bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-teal focus:ring-2 focus:ring-teal/20'
                      : 'bg-cream border-[#e0e0e0] text-navy placeholder:text-navy/40 focus:border-teal focus:ring-2 focus:ring-teal/20'
                  }`}
                  required
                />
              </div>

              {/* Industry */}
              <div className="relative">
                <Building2 className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${isDark ? 'text-white/40' : 'text-navy/40'}`} />
                <input
                  type="text"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  placeholder="Your industry (e.g., Manufacturing, Healthcare)"
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border outline-none transition-all ${
                    isDark
                      ? 'bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-teal focus:ring-2 focus:ring-teal/20'
                      : 'bg-cream border-[#e0e0e0] text-navy placeholder:text-navy/40 focus:border-teal focus:ring-2 focus:ring-teal/20'
                  }`}
                  required
                />
              </div>

              {/* Employees */}
              <div className="relative">
                <Users className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${isDark ? 'text-white/40' : 'text-navy/40'}`} />
                <select
                  value={employees}
                  onChange={(e) => setEmployees(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border outline-none transition-all appearance-none ${
                    isDark
                      ? 'bg-white/10 border-white/20 text-white focus:border-teal focus:ring-2 focus:ring-teal/20'
                      : 'bg-cream border-[#e0e0e0] text-navy focus:border-teal focus:ring-2 focus:ring-teal/20'
                  }`}
                  required
                >
                  <option value="" className={isDark ? 'bg-navy' : 'bg-white'}>Number of employees</option>
                  <option value="1-10" className={isDark ? 'bg-navy' : 'bg-white'}>1-10</option>
                  <option value="11-50" className={isDark ? 'bg-navy' : 'bg-white'}>11-50</option>
                  <option value="51-200" className={isDark ? 'bg-navy' : 'bg-white'}>51-200</option>
                  <option value="201-500" className={isDark ? 'bg-navy' : 'bg-white'}>201-500</option>
                  <option value="501-1000" className={isDark ? 'bg-navy' : 'bg-white'}>501-1000</option>
                  <option value="1000+" className={isDark ? 'bg-navy' : 'bg-white'}>1000+</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-teal text-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal/90 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Me the Link <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
            {error && (
              <p className="text-coral text-sm mt-2 text-center">{error}</p>
            )}
          </form>

          <p className={`text-center text-xs mt-4 ${isDark ? 'text-white/40' : 'text-navy/40'}`}>
            No spam. Unsubscribe anytime. Your email is safe with Dr. Data.
          </p>
        </>
      ) : (
        <div className="text-center py-4">
          <div className="w-16 h-16 rounded-full bg-teal/20 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-teal" />
          </div>
          <h3 className={`text-2xl font-bold mb-2 font-display ${isDark ? 'text-white' : 'text-navy'}`}>
            Thank You!
          </h3>
          <p className={`${isDark ? 'text-white/70' : 'text-navy/70'} max-w-md mx-auto`}>
            Your Data Readiness Assessment link will be emailed to <strong className={isDark ? 'text-white' : 'text-navy'}>{email}</strong> shortly.
          </p>
          <p className={`text-sm mt-4 ${isDark ? 'text-white/50' : 'text-navy/50'}`}>
            Check your inbox (and spam folder) in the next few minutes.
          </p>
        </div>
      )}
    </div>
  );
}
