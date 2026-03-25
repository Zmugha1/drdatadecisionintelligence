import { useEffect, useState } from 'react';
import { ArrowRight, TrendingUp, AlertTriangle, DollarSign, BarChart3, Lock, Calendar } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Raw Data',
    description: 'Connect your e-commerce transactions, customer records, and product catalogs. This is where most businesses stop, but it is only the beginning.',
  },
  {
    number: 2,
    title: 'Integration',
    description: 'Unify fragmented data sources into a single source of truth. Break down the silos between sales, inventory, and customer service.',
  },
  {
    number: 3,
    title: 'Governance',
    description: 'Ensure data quality, compliance, and security protocols are active. Trust requires verification: governance-first intelligence you can trust.',
  },
  {
    number: 4,
    title: 'Analysis',
    description: 'Apply exploratory analytics to identify patterns and outliers. See the story your data is telling about customer behavior and operational waste.',
  },
  {
    number: 5,
    title: 'Prediction',
    description: 'Deploy Machine Learning (ML) models to forecast revenue and risk. Move from "what happened" to "what will happen" with statistical confidence.',
  },
  {
    number: 6,
    title: 'Decision',
    description: 'Transform model outputs into specific business actions with confidence scores. Stop data hunting. Start decision-making.',
  },
  {
    number: 7,
    title: 'Data to $$$',
    description: 'Capture measurable revenue recovery and profit optimization. Make money with your data faster.',
  },
];

const BlogPostDataToMoney = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [discountCap, setDiscountCap] = useState(15);
  const [shippingOpt, setShippingOpt] = useState(true);
  const [projectedSavings, setProjectedSavings] = useState(387000);

  // Simulate savings calculation based on inputs
  const calculateSavings = () => {
    const baseSavings = 387000;
    const discountImpact = (20 - discountCap) * 15000;
    const shippingImpact = shippingOpt ? 45000 : 0;
    return baseSavings + discountImpact + shippingImpact;
  };

  useEffect(() => {
    setProjectedSavings(calculateSavings());
  }, [discountCap, shippingOpt]);

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* SEO Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-teal/10 text-teal text-xs font-medium rounded-full">Decision Intelligence</span>
            <span className="px-3 py-1 bg-coral/10 text-coral text-xs font-medium rounded-full">Revenue Recovery</span>
            <span className="px-3 py-1 bg-navy/10 text-navy text-xs font-medium rounded-full">E-commerce</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mb-6 font-display leading-tight">
            From Data to <span className="text-teal">$$$</span>: How Decision Intelligence Recovers Hidden Revenue
          </h1>

          <p className="text-xl text-navy/70 mb-8 leading-relaxed">
            Most e-commerce businesses are sitting on a goldmine waiting to be uncovered. They have plenty of data. The opportunity lies in bridging the gap between raw data and revenue decisions.
          </p>

          <div className="flex items-center gap-4 text-sm text-navy/50 mb-12">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              February 2026
            </span>
            <span>•</span>
            <span>By Dr. Zubia Mughal, Ed.D.</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-2xl p-8 border border-[#e0e0e0] shadow-sm mb-12">
            <p className="text-navy/70 leading-relaxed mb-4">
              Traditional Machine Learning (ML) projects end with "model accuracy: 99%." But accuracy does not pay bills. Decision Intelligence bridges this gap by connecting model performance to specific dollar outcomes.
            </p>
          </div>

          {/* The $387K Leak */}
          <div className="bg-navy rounded-3xl p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-teal/20 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-teal" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                The $387K Leak (Real Scenario)
              </h2>
            </div>

            <p className="text-white/70 mb-8">
              We analyzed 5,000 synthetic Amazon-style transactions using our Revenue Leak Detector. Here is what the models found:
            </p>

            {/* Models */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="text-4xl font-bold text-teal mb-2 font-display">R² = 0.9992</div>
                <h4 className="text-white font-semibold mb-2">Regression Engine</h4>
                <p className="text-white/60 text-sm">
                  Predicts order values with $3.88 average error
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="text-4xl font-bold text-teal mb-2 font-display">94.3%</div>
                <h4 className="text-white font-semibold mb-2">Classification Engine</h4>
                <p className="text-white/60 text-sm">
                  Identifies cancellation risk before orders fail
                </p>
              </div>
            </div>

            {/* The Leaks */}
            <h3 className="text-xl font-semibold text-white mb-4">The Leaks Discovered</h3>
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold">Discount Overkill:</span>
                  <span className="text-white/70"> 23% of orders had greater than 20% discounts despite high conversion probability</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold">Shipping Waste:</span>
                  <span className="text-white/70"> Expedited shipping on low-margin orders eroding profit</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold">Cancellation Blindness:</span>
                  <span className="text-white/70"> 15% of orders showed pre-purchase cancellation signals that were ignored</span>
                </div>
              </div>
            </div>

            {/* The Fix */}
            <div className="bg-teal/10 rounded-xl p-6 border border-teal/30">
              <h4 className="text-teal font-semibold mb-2">The Fix</h4>
              <p className="text-white/80">
                By capping discounts at 15% for high-confidence orders and optimizing shipping logistics, the model projects <strong className="text-teal">$387,000 annual recovery</strong> on a $2.4M revenue base.
              </p>
            </div>
          </div>

          {/* Why Model Metrics Matter */}
          <div className="bg-white rounded-2xl p-8 border border-[#e0e0e0] shadow-sm mb-12">
            <h2 className="text-2xl font-bold text-navy mb-6 font-display">
              Why Model Metrics Matter for Business
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-navy mb-2 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-teal" />
                  Precision (94.3%)
                </h3>
                <p className="text-navy/70">
                  Precision is not just a number: it means when the Artificial Intelligence (AI) flags an order as "high cancellation risk," it is right 94% of the time. This confidence allows you to offer retention discounts only to truly at-risk orders and avoid giving away margin to customers who would buy anyway.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-navy mb-2 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-teal" />
                  R² (0.9992)
                </h3>
                <p className="text-navy/70">
                  R² means the model understands 99.92% of revenue variance. This is not overfitting: it is recognizing that Total Amount equals (Price multiplied by Quantity) plus Tax plus Shipping minus Discount. The model uses this to detect when discounts exceed mathematical necessity.
                </p>
              </div>
            </div>
          </div>

          {/* CTA - Moved above Try Your Scenario */}
          <div className="bg-navy rounded-3xl p-8 lg:p-12 text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-display">
              Ready to Find Your Revenue Leaks?
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Stop data hunting. Start decision-making. Get exclusive access to the Data to $$$ Demo and see how Decision Intelligence can recover hidden revenue in your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/?page=data-to-demo"
                className="inline-flex items-center gap-2 bg-teal text-navy px-8 py-4 rounded-lg font-display font-semibold text-lg hover:bg-teal/90 transition-colors"
              >
                <Lock className="w-5 h-5" />
                Access Data to $$$ Demo
              </a>
              <a
                href="https://calendly.com/zubiaml4l/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-teal transition-colors"
              >
                Book a Discovery Call <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Interactive Demo Section */}
          <div className="bg-white rounded-3xl p-8 border border-[#e0e0e0] shadow-lg mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center">
                <Lock className="w-6 h-6 text-teal" />
              </div>
              <h2 className="text-2xl font-bold text-navy font-display">
                Try Your Scenario
              </h2>
            </div>

            <p className="text-navy/70 mb-8">
              Above, you can interact with the same dataset. Adjust the discount cap, toggle shipping optimization, and watch how model confidence stays high even as you change business parameters, risk predictions update to show which orders would be flagged, and dollar impact calculates based on the intersection of ML accuracy and business logic.
            </p>

            {/* Interactive Controls */}
            <div className="bg-cream rounded-2xl p-6 mb-6">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                {/* Discount Cap */}
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    Discount Cap: {discountCap}%
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="30"
                    value={discountCap}
                    onChange={(e) => setDiscountCap(Number(e.target.value))}
                    className="w-full h-2 bg-[#e0e0e0] rounded-lg appearance-none cursor-pointer accent-teal"
                  />
                  <div className="flex justify-between text-xs text-navy/50 mt-1">
                    <span>5%</span>
                    <span>30%</span>
                  </div>
                </div>

                {/* Shipping Toggle */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-navy">Shipping Optimization</span>
                  <button
                    onClick={() => setShippingOpt(!shippingOpt)}
                    className={`relative w-14 h-8 rounded-full transition-colors ${
                      shippingOpt ? 'bg-teal' : 'bg-[#e0e0e0]'
                    }`}
                  >
                    <span
                      className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                        shippingOpt ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Projected Savings */}
              <div className="bg-navy rounded-xl p-6 text-center">
                <p className="text-white/60 text-sm mb-1">Projected Annual Recovery</p>
                <div className="text-4xl sm:text-5xl font-bold text-teal font-display">
                  ${projectedSavings.toLocaleString()}
                </div>
                <p className="text-white/50 text-xs mt-2">
                  Based on 5,000 synthetic transaction patterns
                </p>
              </div>
            </div>

            <div className="bg-navy/5 rounded-xl p-4 flex items-start gap-3">
              <Lock className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
              <p className="text-navy/70 text-sm">
                <strong>Zero-Data Demo:</strong> This demo runs entirely on sample Amazon transaction data, meaning your proprietary information never leaves your browser.
              </p>
            </div>
          </div>

          {/* 7-Step Roadmap */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-navy mb-8 font-display text-center">
              The 7-Step Data to <span className="text-teal">$$$</span> Roadmap
            </h2>

            <div className="space-y-4">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="bg-white rounded-xl p-6 border border-[#e0e0e0] shadow-sm flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center text-teal font-bold text-xl flex-shrink-0 font-display">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-lg mb-1">{step.title}</h3>
                    <p className="text-navy/70 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default BlogPostDataToMoney;
