import { useEffect, useState } from 'react';
import PageShell from '@/components/PageShell';
import { 
  ClipboardCheck, 
  Database, 
  MessageSquare, 
  Brain, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle,
  TrendingUp,
  Shield,
  Phone,
  Calendar
} from 'lucide-react';

interface Question {
  id: number;
  category: string;
  text: string;
}

const questions: Question[] = [
  // Part 1: The "Digital Basement" (Numbers)
  {
    id: 1,
    category: 'Digital Basement',
    text: 'Can you pull a report on your last 3 years of sales performance in under 60 seconds without opening five different apps?'
  },
  {
    id: 2,
    category: 'Digital Basement',
    text: 'If you compare your bank statement to your CRM/Sales dashboard, do the numbers actually match?'
  },
  {
    id: 3,
    category: 'Digital Basement',
    text: 'Is your data "tagged" by category (e.g., customer type, region, product margin), or is it just one big list of transactions?'
  },
  // Part 2: The "Hidden Knowledge" (Words/Unstructured)
  {
    id: 4,
    category: 'Hidden Knowledge',
    text: 'Are your customer emails, service notes, or meeting transcripts stored in a way that you could "search" them for trends right now?'
  },
  {
    id: 5,
    category: 'Hidden Knowledge',
    text: 'Is your qualitative data (customer feedback/complaints) tagged and labeled so an AI could understand why customers are leaving or buying?'
  },
  {
    id: 6,
    category: 'Hidden Knowledge',
    text: 'If your top salesperson or operations manager left today, is their "know-how" documented in a data format, or is it only in their head?'
  },
  // Part 3: The "AI-Ready" Prime
  {
    id: 7,
    category: 'AI-Ready Prime',
    text: 'Do you have a "Safe-Use" policy for putting your business data into tools like ChatGPT Enterprise or Claude?'
  },
  {
    id: 8,
    category: 'AI-Ready Prime',
    text: 'Is your data "cleaned" (no duplicates, no missing fields) so that an AI model won\'t hallucinate or give you "garbage in, garbage out" results?'
  },
  {
    id: 9,
    category: 'AI-Ready Prime',
    text: 'Do you have at least 1,000 "labeled" entries (e.g., "Positive Review," "Urgent Support") to help train a custom business intelligence model?'
  }
];

const BlogPostDataReadiness = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [scores, setScores] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const handleScore = (questionId: number, score: number) => {
    setScores(prev => ({ ...prev, [questionId]: score }));
  };

  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
  const maxScore = questions.length * 5;

  const getResultCategory = () => {
    if (totalScore <= 15) return {
      title: 'Data Starvation',
      description: 'You\'re making decisions entirely on gut instinct. High risk of being outpaced by competitors who are leveraging their data.',
      color: 'text-coral',
      bgColor: 'bg-coral/10',
      icon: AlertCircle,
      recommendation: 'Start with Data Annotation & AI Readiness Assessment'
    };
    if (totalScore <= 30) return {
      title: 'Data Mess',
      description: 'You have the data, but it\'s "unprimed." You\'re wasting money on storage without getting insights. This is where most businesses sit, and where Dr. Data can help the most.',
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
      icon: ClipboardCheck,
      recommendation: 'Start with Decision-Ready Data Foundations'
    };
    return {
      title: 'AI-Ready',
      description: 'You\'re ready for advanced modeling and growth automation. Let\'s build predictive systems that move your KPIs.',
      color: 'text-teal',
      bgColor: 'bg-teal/10',
      icon: TrendingUp,
      recommendation: 'Start with Predictive Decision Intelligence'
    };
  };

  const result = getResultCategory();
  const ResultIcon = result.icon;

  const allAnswered = questions.every(q => scores[q.id] !== undefined);

  return (
    <PageShell>
      <section className="px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* SEO Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-teal/10 text-teal text-xs font-medium rounded-full">AI Readiness</span>
            <span className="px-3 py-1 bg-coral/10 text-coral text-xs font-medium rounded-full">Data Strategy</span>
            <span className="px-3 py-1 bg-navy/10 text-navy text-xs font-medium rounded-full">Business Intelligence</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mb-6 font-display leading-tight">
            The "Data Doctor" Readiness Scorecard: <span className="text-teal">Is Your Business AI-Ready?</span>
          </h1>
          
          <p className="text-xl text-navy/70 mb-8 leading-relaxed">
            Most Milwaukee business owners are sitting on a goldmine of data, but the mine is currently 
            <strong className="text-navy"> unstructured</strong> and <strong className="text-navy">unprimed</strong>. 
            Take this 2-minute assessment to discover where you stand.
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

      {/* Introduction */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 border border-[#e0e0e0] shadow-sm mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4 font-display">The Hidden Cost of "Dark Data"</h2>
            <p className="text-navy/70 leading-relaxed mb-4">
              Every day, your business generates valuable data: sales transactions, customer emails, support tickets, 
              meeting notes, and operational logs. But here's the problem: <strong className="text-navy">most of it sits unused</strong>, 
              scattered across different systems, or trapped in formats that AI can't understand.
            </p>
            <p className="text-navy/70 leading-relaxed mb-4">
              I call this <strong className="text-coral">"dark data"</strong>: information that's valuable but invisible to 
              artificial intelligence. And in 2026, businesses that can't activate their dark data are being outpaced 
              by competitors who can.
            </p>
            <p className="text-navy/70 leading-relaxed">
              This scorecard will help you assess your data readiness in three critical areas: your 
              <strong> Digital Basement</strong> (structured numbers), your <strong>Hidden Knowledge</strong> 
              (unstructured text), and your <strong>AI-Readiness Prime</strong> (governance and preparation).
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Scorecard */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-navy rounded-3xl p-8 lg:p-12 shadow-xl">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm mb-4">
                <ClipboardCheck className="w-4 h-4 text-teal" />
                <span>Interactive Assessment</span>
              </div>
              <h2 className="text-3xl font-bold text-white font-display mb-2">
                The Data Doctor Readiness Scorecard
              </h2>
              <p className="text-white/60">
                Rate each statement: 0 (Not at all) to 5 (Fully Optimized)
              </p>
            </div>

            {!showResults ? (
              <div className="space-y-8">
                {/* Part 1 */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-teal/20 flex items-center justify-center text-teal">
                      <Database className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Part 1: The "Digital Basement" (Numbers)</h3>
                  </div>
                  <div className="space-y-4">
                    {questions.filter(q => q.category === 'Digital Basement').map((q) => (
                      <div key={q.id} className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <p className="text-white/90 mb-3 text-sm sm:text-base">{q.text}</p>
                        <div className="flex flex-wrap gap-2">
                          {[0, 1, 2, 3, 4, 5].map((score) => (
                            <button
                              key={score}
                              onClick={() => handleScore(q.id, score)}
                              className={`w-10 h-10 rounded-lg font-semibold text-sm transition-all ${
                                scores[q.id] === score
                                  ? 'bg-teal text-navy'
                                  : 'bg-white/10 text-white/60 hover:bg-white/20'
                              }`}
                            >
                              {score}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Part 2 */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-coral/20 flex items-center justify-center text-coral">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Part 2: The "Hidden Knowledge" (Words/Unstructured)</h3>
                  </div>
                  <div className="space-y-4">
                    {questions.filter(q => q.category === 'Hidden Knowledge').map((q) => (
                      <div key={q.id} className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <p className="text-white/90 mb-3 text-sm sm:text-base">{q.text}</p>
                        <div className="flex flex-wrap gap-2">
                          {[0, 1, 2, 3, 4, 5].map((score) => (
                            <button
                              key={score}
                              onClick={() => handleScore(q.id, score)}
                              className={`w-10 h-10 rounded-lg font-semibold text-sm transition-all ${
                                scores[q.id] === score
                                  ? 'bg-coral text-white'
                                  : 'bg-white/10 text-white/60 hover:bg-white/20'
                              }`}
                            >
                              {score}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Part 3 */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
                      <Brain className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Part 3: The "AI-Ready" Prime</h3>
                  </div>
                  <div className="space-y-4">
                    {questions.filter(q => q.category === 'AI-Ready Prime').map((q) => (
                      <div key={q.id} className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <p className="text-white/90 mb-3 text-sm sm:text-base">{q.text}</p>
                        <div className="flex flex-wrap gap-2">
                          {[0, 1, 2, 3, 4, 5].map((score) => (
                            <button
                              key={score}
                              onClick={() => handleScore(q.id, score)}
                              className={`w-10 h-10 rounded-lg font-semibold text-sm transition-all ${
                                scores[q.id] === score
                                  ? 'bg-purple-500 text-white'
                                  : 'bg-white/10 text-white/60 hover:bg-white/20'
                              }`}
                            >
                              {score}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex justify-between text-white/60 text-sm mb-2">
                    <span>Progress</span>
                    <span>{Object.keys(scores).length} of {questions.length} answered</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-teal transition-all duration-300"
                      style={{ width: `${(Object.keys(scores).length / questions.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  onClick={() => setShowResults(true)}
                  disabled={!allAnswered}
                  className={`w-full py-4 rounded-xl font-display font-semibold text-lg transition-all ${
                    allAnswered
                      ? 'bg-teal text-navy hover:bg-teal/90'
                      : 'bg-white/10 text-white/40 cursor-not-allowed'
                  }`}
                >
                  {allAnswered ? 'Get My Results' : `Answer ${questions.length - Object.keys(scores).length} more questions`}
                </button>
              </div>
            ) : (
              /* Results */
              <div className="text-center animate-slide-up">
                <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${result.bgColor} mb-6`}>
                  <ResultIcon className={`w-6 h-6 ${result.color}`} />
                  <span className={`text-xl font-bold ${result.color}`}>{result.title}</span>
                </div>
                
                <div className="mb-8">
                  <div className="text-6xl font-bold text-white mb-2 font-display">
                    {totalScore}<span className="text-white/40">/{maxScore}</span>
                  </div>
                  <div className="text-white/60">Your Data Readiness Score</div>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-8 text-left">
                  <h4 className="text-white font-semibold mb-2">What This Means</h4>
                  <p className="text-white/70 leading-relaxed">{result.description}</p>
                </div>

                <div className="bg-teal/10 rounded-xl p-6 border border-teal/30 mb-8">
                  <h4 className="text-teal font-semibold mb-2">Recommended Next Step</h4>
                  <p className="text-white/80">{result.recommendation}</p>
                </div>

                {/* The Key Insight */}
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-8 text-left">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">The Pro Tip Most People Miss</h4>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Most businesses skip Step 8 (Priming). If you feed messy data into AI, 
                        you just get messy decisions at a faster speed. I'm here to make sure 
                        your data is cleaned, labeled, and governance-ready before any AI touches it.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-4">
                  <a
                    href="https://calendly.com/zubiaml4l/15min" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-teal text-navy py-4 rounded-xl font-display font-semibold text-lg hover:bg-teal/90 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Book Your Free Data Readiness Call
                  </a>
                  <button
                    onClick={() => { setScores({}); setShowResults(false); }}
                    className="text-white/60 hover:text-white text-sm"
                  >
                    Retake Assessment
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-8 font-display text-center">
            Why Data Readiness Matters in 2026
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 border border-[#e0e0e0] shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center text-coral mb-4">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="text-navy font-semibold text-lg mb-2">80% of AI Projects Fail</h3>
              <p className="text-navy/60 text-sm">
                Not because of bad models, but because of bad data. Garbage in, garbage out, at enterprise scale.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#e0e0e0] shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center text-teal mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-navy font-semibold text-lg mb-2">3x ROI Difference</h3>
              <p className="text-navy/60 text-sm">
                Companies with governance-first AI see 3x higher returns than those who rush to deployment.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#e0e0e0] shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center text-navy mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-navy font-semibold text-lg mb-2">Regulation is Coming</h3>
              <p className="text-navy/60 text-sm">
                NIST, EU AI Act, and state regulations require explainable, auditable AI systems.
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-navy rounded-3xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 font-display">
              Stop Data Hunting. <span className="text-teal">Start Decision-Making.</span>
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Dr. Data turns your scattered information into governance-first intelligence you can actually trust. 
              Your first consultation is completely free.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://calendly.com/zubiaml4l/15min" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal text-navy px-8 py-4 rounded-lg font-display font-semibold text-lg hover:bg-teal/90 transition-colors"
              >
                <Calendar className="w-5 h-5" />
                Book Your Free Discovery Call
              </a>
              <a
                href="/#services"
                className="inline-flex items-center gap-2 text-white hover:text-teal transition-colors"
              >
                Explore Services <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default BlogPostDataReadiness;
