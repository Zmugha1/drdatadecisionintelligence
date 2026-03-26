import { useState } from 'react';
import PageShell from '@/components/PageShell';

const Survey = () => {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [employees, setEmployees] = useState('');

  return (
    <PageShell>
      <section className="px-4 pb-20 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 font-display text-4xl font-bold text-navy sm:text-5xl">Data Readiness Assessment</h1>
            <p className="text-lg text-navy/70">
              Discover your AI readiness score and get personalized recommendations.
            </p>
          </div>

          <div className="rounded-2xl border border-navy/10 bg-white/90 p-8 shadow-card backdrop-blur-sm transition-shadow duration-300 hover:shadow-card-hover">
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you! Your assessment link will be sent to your email.');
              }}
            >
              <div>
                <label className="mb-2 block text-sm font-medium text-navy">Email Address *</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-navy/20 px-4 py-3 transition-colors focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-navy">Company Name *</label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full rounded-lg border border-navy/20 px-4 py-3 transition-colors focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-navy">Number of employees</label>
                <select
                  value={employees}
                  onChange={(e) => setEmployees(e.target.value)}
                  className="w-full rounded-lg border border-navy/20 px-4 py-3 transition-colors focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                >
                  <option value="">Select...</option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="201-500">201-500</option>
                  <option value="501-1000">501-1000</option>
                  <option value="1000+">1000+</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-teal py-4 font-semibold text-white transition-all hover:bg-teal/90 hover:shadow-lg active:scale-[0.99]"
              >
                Start Assessment
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-navy/50">
              No spam. Unsubscribe anytime. Your email is safe with Dr. Data.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default Survey;
