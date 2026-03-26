import PageShell from '@/components/PageShell';
import { ArrowRight, CheckCircle, XCircle } from 'lucide-react';

const SmallBusiness = () => {
  return (
    <PageShell>
      <section className="px-4 pb-16 pt-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mb-6 font-display">Stop Guessing. Start Prioritizing.</h1>
          <p className="text-xl text-navy/70 max-w-2xl mx-auto mb-10">We turn your messy spreadsheets and CRM data into a simple weekly decision dashboard that tells you what to act on next.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://calendly.com/zubiaml4l/15min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-lg font-display font-semibold text-lg hover:bg-navy/90 transition-colors">
              Book a 15-Minute Clarity Call <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#how-it-works" className="inline-flex items-center gap-2 text-navy hover:text-teal transition-colors">See How It Works <ArrowRight className="w-5 h-5" /></a>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-8 font-display text-center">Built for Small Businesses That Want Clarity</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {['1–10 employee businesses', 'Coaches and consultants', 'Professional service firms', 'Local agencies', 'Owners managing data in spreadsheets or simple CRMs', 'Teams that want better decisions without complex AI'].map((item, i) => (
              <div key={i} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" /><span className="text-navy/70">{item}</span></div>
            ))}
          </div>
          <div className="bg-teal/10 rounded-xl p-4 text-center"><p className="text-navy font-medium">If you do not have an IT department, this is designed for you.</p></div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-6 font-display text-center">Why Most Small Businesses Struggle with Data</h2>
          <p className="text-navy/70 text-center max-w-2xl mx-auto mb-10">You have reports. You have dashboards. You have spreadsheets. But you still rely on instinct when making decisions because the numbers do not translate into clear actions.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {['Leads pile up without prioritization', 'Clients leave without early warning', 'Forecasts do not connect to workflow', 'Reports do not drive behavior'].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-[#e0e0e0]"><p className="text-navy/70">{item}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* THE SOLUTION */}
      <section className="py-16 px-4 bg-navy">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 font-display text-center">A Simple Decision Dashboard</h2>
          <p className="text-white/70 text-center max-w-2xl mx-auto mb-10">We build a transparent scoring system that highlights what matters now.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {['Green / Yellow / Red priority bands', 'Early risk signals', 'Revenue opportunity ranking', 'Weekly action prompts', 'Confidence level indicators'].map((item, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-6"><p className="text-white">{item}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-10 font-display text-center">How It Works</h2>
          {[
            { step: '1', title: 'Export Your Data', desc: 'If you can export a CSV from your CRM, we can start.' },
            { step: '2', title: 'We Structure and Score', desc: 'We organize your data and build a transparent scoring model tied to your business outcomes.' },
            { step: '3', title: 'You Get a Secure Dashboard', desc: 'Log in and see what needs attention this week.' },
            { step: '4', title: 'Ongoing Monitoring', desc: 'We keep it updated and calibrated.' }
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-6 mb-8">
              <div className="w-12 h-12 rounded-full bg-teal flex items-center justify-center text-white font-bold text-xl flex-shrink-0">{item.step}</div>
              <div><h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3><p className="text-navy/70">{item.desc}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-10 font-display text-center">Packages</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Package 1 */}
            <div className="bg-white rounded-2xl p-6 border border-[#e0e0e0] flex flex-col">
              <div className="mb-4"><span className="text-sm text-navy/50">2 Weeks</span><h3 className="text-xl font-bold text-navy">Data Clarity Sprint</h3><p className="text-teal font-bold text-lg">Starting at $3,500</p></div>
              <ul className="space-y-2 mb-6 flex-1">{['Data audit', 'Cleaned dataset', 'KPI definitions', 'Data dictionary', 'Decision mapping'].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-navy/70 text-sm"><CheckCircle className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />{item}</li>
              ))}</ul>
              <a href="https://calendly.com/zubiaml4l/15min" target="_blank" rel="noopener noreferrer" className="w-full text-center bg-navy text-white py-3 rounded-lg font-semibold hover:bg-navy/90 transition-colors">Start Here</a>
            </div>

            {/* Package 2 */}
            <div className="bg-white rounded-2xl p-6 border-2 border-teal flex flex-col relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal text-navy text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</div>
              <div className="mb-4"><span className="text-sm text-navy/50">3 Weeks</span><h3 className="text-xl font-bold text-navy">Decision Dashboard Build</h3><p className="text-teal font-bold text-lg">Starting at $5,000</p></div>
              <ul className="space-y-2 mb-6 flex-1">{['Transparent scoring model', 'Green / Yellow / Red prioritization', 'Hosted secure dashboard', 'Training session'].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-navy/70 text-sm"><CheckCircle className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />{item}</li>
              ))}</ul>
              <a href="https://calendly.com/zubiaml4l/15min" target="_blank" rel="noopener noreferrer" className="w-full text-center bg-teal text-navy py-3 rounded-lg font-semibold hover:bg-teal/90 transition-colors">Build My Dashboard</a>
            </div>

            {/* Package 3 */}
            <div className="bg-white rounded-2xl p-6 border border-[#e0e0e0] flex flex-col">
              <div className="mb-4"><span className="text-sm text-navy/50">Monthly</span><h3 className="text-xl font-bold text-navy">Managed Intelligence</h3><p className="text-teal font-bold text-lg">$600–$900/mo</p></div>
              <ul className="space-y-2 mb-6 flex-1">{['Hosting', 'Data refresh', 'Minor refinements', 'Monthly decision summary'].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-navy/70 text-sm"><CheckCircle className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />{item}</li>
              ))}</ul>
              <a href="https://calendly.com/zubiaml4l/15min" target="_blank" rel="noopener noreferrer" className="w-full text-center bg-navy text-white py-3 rounded-lg font-semibold hover:bg-navy/90 transition-colors">Ongoing Support</a>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT THIS IS NOT */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-8 font-display text-center">What This Is Not</h2>
          <div className="space-y-4">
            {['Not enterprise AI transformation', 'Not deep learning research', 'Not complex infrastructure', 'Not experimental modeling'].map((item, i) => (
              <div key={i} className="flex items-center gap-3"><XCircle className="w-5 h-5 text-coral flex-shrink-0" /><span className="text-navy/70">{item}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="py-16 px-4 bg-teal/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy mb-6 font-display">How It Pays for Itself</h2>
          <p className="text-navy/70 max-w-2xl mx-auto">If this system helps you close one additional client per quarter or prevent one avoidable churn event, it likely pays for itself.</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 px-4 bg-navy">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-display">Ready for Clarity?</h2>
          <a href="https://calendly.com/zubiaml4l/15min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-teal text-navy px-8 py-4 rounded-lg font-display font-semibold text-lg hover:bg-teal/90 transition-colors mb-4">
            Book a 15-Minute Clarity Call <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-white/60 text-sm">If it is not a fit, we will tell you.</p>
        </div>
      </section>
    </PageShell>
  );
};

export default SmallBusiness;
