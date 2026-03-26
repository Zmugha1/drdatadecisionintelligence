import PageShell from '@/components/PageShell';
import { Lock, TrendingUp, Shield, Zap } from 'lucide-react';

const DataToDemo = () => {
  return (
    <PageShell>
      <section className="px-4 pb-20 pt-6 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy/10 text-navy text-sm mb-6">
              <Lock className="w-4 h-4" />
              <span>Confidential</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-4 font-display">
              Data to <span className="text-teal">$$$</span> Demo
            </h1>
            
            <p className="text-xl text-navy/70 max-w-2xl mx-auto">
              See how Decision Intelligence transforms your data into recoverable revenue.
            </p>
          </div>

          {/* Interactive Revenue Leak Detector */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-[#e0e0e0] shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-teal" />
              </div>
              <h2 className="text-2xl font-bold text-navy font-display">
                Interactive Revenue Leak Detector
              </h2>
            </div>

            <p className="text-navy/70 leading-relaxed mb-8">
              Try our Artificial Intelligence (AI) powered scenario simulator to see how Machine Learning (ML) identifies hidden profit leaks in e-commerce data, no spreadsheet uploads required. Adjust three critical business levers in real time: set discount caps to recover margin, toggle shipping optimization to reduce fulfillment waste, and filter by product category to isolate high-risk inventory.
            </p>

            <div className="bg-cream rounded-2xl p-6 mb-8">
              <h3 className="font-semibold text-navy mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-teal" />
                Dual Production-Grade Models
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 border border-[#e0e0e0]">
                  <div className="text-3xl font-bold text-teal mb-1 font-display">99.92%</div>
                  <p className="text-navy/70 text-sm">
                    <strong>Random Forest Regression</strong> predicts revenue outcomes with industry-leading accuracy.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-[#e0e0e0]">
                  <div className="text-3xl font-bold text-teal mb-1 font-display">94.3%</div>
                  <p className="text-navy/70 text-sm">
                    <strong>Classification Engine</strong> flags cancellation risks with precision.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-navy/70 leading-relaxed mb-6">
              Every adjustment instantly recalculates projected annual savings, showing exact dollar impact based on 5,000 synthetic transaction patterns.
            </p>

            <div className="bg-navy rounded-2xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Zero-Data Demo</h4>
                  <p className="text-white/70 text-sm">
                    This demo runs entirely on sample Amazon transaction data, meaning your proprietary information never leaves your browser. Experience how Governance-First Decision Intelligence transforms raw transactions into recoverable revenue, then imagine these same models running on your actual data.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-2xl font-bold text-navy font-display mb-2">
                Stop data hunting. <span className="text-teal">Start decision-making.</span>
              </p>
            </div>
          </div>

          {/* Streamlit Embed */}
          <div className="mt-12">
            <div className="bg-white rounded-3xl border border-[#e0e0e0] shadow-lg overflow-hidden">
              <iframe
                src="https://data-to-dollars-demo-4buwfjez8ek3h5zgkpvdmt.streamlit.app/?embed=true"
                width="100%"
                height="850"
                style={{ border: 'none' }}
                allow="clipboard-write; fullscreen"
                title="Data to $$$ Demo"
                className="w-full"
              />
            </div>
            <p className="text-center text-sm text-navy/50 mt-4">
              <a 
                href="https://data-to-dollars-demo-4buwfjez8ek3h5zgkpvdmt.streamlit.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-teal hover:underline"
              >
                Open demo in new tab →
              </a>
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-navy/50 mb-4">
              Want to see this running on your actual data?
            </p>
            <a
              href="https://calendly.com/zubiaml4l/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy/90 transition-colors"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default DataToDemo;
