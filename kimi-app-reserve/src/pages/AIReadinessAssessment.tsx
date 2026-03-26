import { useState } from 'react';
import PageShell from '@/components/PageShell';
import { CheckCircle, XCircle, AlertTriangle, ChevronRight, ChevronLeft, RefreshCw, Send } from 'lucide-react';

interface QuestionOption {
  value: number;
  label: string;
  score: number;
}

interface Question {
  id: string;
  question: string;
  why?: string;
  type: 'yesno' | 'scale';
  options?: QuestionOption[];
}

interface Phase {
  title: string;
  subtitle: string;
  questions: Question[];
}

const AIReadinessAssessment = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [answers, setAnswers] = useState<Record<string, { value: string | number; score: number }>>({});
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');

  const phases: Phase[] = [
    {
      title: 'Phase 1: The "Kill Switch" Questions',
      subtitle: 'Pass/Fail Gates - Any "No" here means we need to fix your data foundation first.',
      questions: [
        {
          id: 'kill1',
          question: 'Can you show me the last 3 decisions you made using data from your computer (not intuition)?',
          why: 'If they don\'t currently use data for decisions, AI won\'t change behavior.',
          type: 'yesno',
        },
        {
          id: 'kill2',
          question: 'Do you know where 80% of your critical business documents live right now?',
          why: 'AI needs corpus location. Scattered files = RAG failure.',
          type: 'yesno',
        },
        {
          id: 'kill3',
          question: 'Is there someone on your team who can spend 2 hours/week validating AI outputs for the first 90 days?',
          why: 'AI requires human-in-the-loop. Solo practitioners without bandwidth become "ghost clients".',
          type: 'yesno',
        },
        {
          id: 'kill4',
          question: 'Are you legally allowed to put this data in the cloud (HIPAA, SOX, NDA restrictions)?',
          why: 'If they pause, you have an airgap sale. If "I don\'t know," you have compliance risk.',
          type: 'yesno',
        },
      ],
    },
    {
      title: 'Phase 2: Data Maturity Assessment',
      subtitle: 'Scoring: 0 (chaos) → 5 (structured)',
      questions: [
        {
          id: 'data1',
          question: 'When you search for last year\'s contract with a vendor, how long does it take and where do you look?',
          type: 'scale',
          options: [
            { value: 1, label: 'I text someone / dig through email', score: 1 },
            { value: 2, label: 'I check the shared drive (takes 10+ minutes)', score: 3 },
            { value: 3, label: 'I search our document management system', score: 5 },
          ],
        },
        {
          id: 'data2',
          question: 'Do you have consistent file naming conventions?',
          type: 'scale',
          options: [
            { value: 1, label: '"Usually" or "We try to"', score: 1 },
            { value: 2, label: 'Yes, YYYY-MM-DD_Client_DocumentType_Version', score: 5 },
          ],
        },
        {
          id: 'data3',
          question: 'Have you ever calculated the cost of searching for information manually?',
          type: 'yesno',
        },
        {
          id: 'data4',
          question: 'Do you have duplicate customer records in your system?',
          type: 'yesno',
        },
        {
          id: 'data5',
          question: 'When was the last time you audited your data for accuracy?',
          type: 'scale',
          options: [
            { value: 1, label: 'Never', score: 0 },
            { value: 2, label: 'Over a year ago', score: 2 },
            { value: 3, label: 'Within the last year', score: 4 },
            { value: 4, label: 'We audit quarterly', score: 5 },
          ],
        },
        {
          id: 'data6',
          question: 'Do you have "ghost data"—spreadsheets that feed into decisions but nobody owns?',
          type: 'yesno',
        },
      ],
    },
    {
      title: 'Phase 3: Problem Clarity & Governance',
      subtitle: 'The Compass - If they say "we want to use AI," we need specifics.',
      questions: [
        {
          id: 'gov1',
          question: 'If the AI recommends firing your top salesperson based on data, who has the authority to override it and how do we document that override?',
          type: 'scale',
          options: [
            { value: 1, label: 'I don\'t know / We don\'t have a process', score: 1 },
            { value: 2, label: 'Leadership can override, but no documentation process', score: 3 },
            { value: 3, label: 'Clear authority chain with documented override process', score: 5 },
          ],
        },
        {
          id: 'gov2',
          question: 'What does "success" look like in 90 days? Be specific.',
          type: 'scale',
          options: [
            { value: 1, label: 'Vague ("improve efficiency")', score: 1 },
            { value: 2, label: 'Somewhat specific ("reduce review time")', score: 3 },
            { value: 3, label: 'Very specific ("reduce contract review from 4 hours to 30 minutes")', score: 5 },
          ],
        },
        {
          id: 'gov3',
          question: 'Do you track demographic data (race, gender, age) in your hiring/promotion systems?',
          type: 'yesno',
        },
        {
          id: 'gov4',
          question: 'Have you had a data breach or compliance audit in the last 3 years?',
          type: 'yesno',
        },
        {
          id: 'gov5',
          question: 'Do you need to explain to a regulator or client exactly how the AI reached a specific conclusion?',
          type: 'yesno',
        },
      ],
    },
    {
      title: 'Phase 4: Technical Readiness',
      subtitle: 'The Surface Pro Test',
      questions: [
        {
          id: 'tech1',
          question: 'Do you have a computer that can run without internet for 8 hours?',
          type: 'yesno',
        },
        {
          id: 'tech2',
          question: 'Who updates your software currently—do you have an IT person or is it you?',
          type: 'scale',
          options: [
            { value: 1, label: 'It\'s me / We don\'t have IT', score: 2 },
            { value: 2, label: 'We have an IT person or managed service', score: 5 },
          ],
        },
        {
          id: 'tech3',
          question: 'What systems would this AI need to "talk to"? (QuickBooks, CRM, Email, etc.)',
          type: 'scale',
          options: [
            { value: 1, label: '"Everything" (no priority)', score: 1 },
            { value: 2, label: '3-5 specific systems', score: 4 },
            { value: 3, label: '1-2 critical systems only', score: 5 },
          ],
        },
      ],
    },
    {
      title: 'Phase 5: Change Management',
      subtitle: 'The Human Layer - AI fails when people don\'t trust it.',
      questions: [
        {
          id: 'change1',
          question: 'Who on your team is most resistant to new technology, and why?',
          type: 'scale',
          options: [
            { value: 1, label: 'I don\'t know / Haven\'t thought about it', score: 1 },
            { value: 2, label: 'I know who, but not why', score: 3 },
            { value: 3, label: 'I know who and why, and have a plan', score: 5 },
          ],
        },
        {
          id: 'change2',
          question: 'What happens if this AI system is wrong 5% of the time? Can your business absorb that error rate?',
          type: 'scale',
          options: [
            { value: 1, label: 'No, we need 99%+ accuracy', score: 2 },
            { value: 2, label: 'We can absorb some errors with human review', score: 4 },
            { value: 3, label: 'Yes, we have processes to catch and correct', score: 5 },
          ],
        },
        {
          id: 'change3',
          question: 'If I got hit by a bus tomorrow, who on your team understands what this system does?',
          type: 'scale',
          options: [
            { value: 1, label: 'Nobody / Just me', score: 1 },
            { value: 2, label: 'One other person', score: 3 },
            { value: 3, label: 'Multiple people with documentation', score: 5 },
          ],
        },
      ],
    },
  ];

  const handleAnswer = (questionId: string, value: any, score?: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: { value, score: score || (value === 'yes' ? 5 : value === 'no' ? 0 : value) },
    }));
  };

  const calculateScore = () => {
    let totalScore = 0;
    let maxScore = 0;
    let killSwitchFails = 0;

    // Check kill switch questions
    const killSwitches = ['kill1', 'kill2', 'kill3', 'kill4'];
    killSwitches.forEach(id => {
      if (answers[id]?.value === 'no') {
        killSwitchFails++;
      }
    });

    // Calculate weighted scores
    Object.entries(answers).forEach(([id, answer]: [string, any]) => {
      if (!id.startsWith('kill')) {
        const score = answer.score || 0;
        totalScore += score;
        maxScore += 5;
      }
    });

    const normalizedScore = maxScore > 0 ? (totalScore / maxScore) * 5 : 0;

    return {
      killSwitchFails,
      dataMaturity: normalizedScore,
      totalScore: normalizedScore,
    };
  };

  const getRecommendation = (score: number, killFails: number) => {
    if (killFails >= 2) {
      return {
        status: 'decline',
        title: 'Not Yet AI-Ready',
        message: 'Based on your responses, you have significant foundational gaps that need to be addressed before AI implementation. We recommend starting with a Data Engineering & Audit project first.',
        action: 'Book a Data Foundation Consultation',
      };
    }
    if (score < 2.5) {
      return {
        status: 'conditional',
        title: 'Conditional Acceptance',
        message: 'You\'re at Data Maturity Level 2. Dr. Data\'s Phase 1 (Document Ingestion & Canonicalization) will get you to Level 4 in 6 weeks. The ROI isn\'t just the AI—it\'s finally knowing where all your institutional knowledge lives.',
        action: 'Schedule Phase 0 Assessment',
      };
    }
    return {
      status: 'green',
      title: 'Green Light!',
      message: 'You\'re AI-ready! Your organization can handle Dr. Data\'s 7-phase deterministic pipeline. Let\'s discuss your specific use case.',
      action: 'Book Your AI Strategy Call',
    };
  };

  const nextPhase = () => {
    if (currentPhase < phases.length - 1) {
      setCurrentPhase(currentPhase + 1);
      window.scrollTo(0, 0);
    } else {
      setShowResults(true);
      window.scrollTo(0, 0);
    }
  };

  const prevPhase = () => {
    if (currentPhase > 0) {
      setCurrentPhase(currentPhase - 1);
      window.scrollTo(0, 0);
    }
  };

  const resetAssessment = () => {
    setAnswers({});
    setCurrentPhase(0);
    setShowResults(false);
    setEmail('');
    setCompany('');
    window.scrollTo(0, 0);
  };

  const submitAssessment = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Your AI Readiness Report will be sent to your email within 24 hours.');
  };

  const currentPhaseData = phases[currentPhase];
  const progress = ((currentPhase + 1) / phases.length) * 100;

  if (showResults) {
    const { killSwitchFails, totalScore } = calculateScore();
    const recommendation = getRecommendation(totalScore, killSwitchFails);

    return (
      <PageShell>
        <section className="px-4 pb-20 pt-6 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#2C3E50] mb-4">
                Your AI Readiness Score
              </h1>
              <p className="text-[#2C3E50]/70">
                Based on your responses, here's where you stand.
              </p>
            </div>

            {/* Score Card */}
            <div className={`rounded-3xl p-8 sm:p-10 mb-8 text-center ${
              recommendation.status === 'green' ? 'bg-gradient-to-br from-green-500 to-green-600' :
              recommendation.status === 'conditional' ? 'bg-gradient-to-br from-[#4ECDC4] to-[#3dbdb5]' :
              'bg-gradient-to-br from-[#E07A5F] to-[#d46a4e]'
            }`}>
              <div className="text-6xl sm:text-7xl font-bold text-white mb-2">
                {totalScore.toFixed(1)}
              </div>
              <p className="text-white/80 text-lg mb-6">out of 5.0</p>

              {killSwitchFails > 0 && (
                <div className="flex items-center justify-center gap-2 text-white/90 mb-4">
                  <AlertTriangle className="w-5 h-5" />
                  <span>{killSwitchFails} Kill Switch question(s) flagged</span>
                </div>
              )}

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {recommendation.title}
              </h2>
              <p className="text-white/90 text-lg leading-relaxed max-w-xl mx-auto">
                {recommendation.message}
              </p>
            </div>

            {/* Email Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#2C3E50]/10 mb-8">
              <h3 className="text-xl font-bold text-[#2C3E50] mb-4 text-center">
                Get Your Detailed Report
              </h3>
              <p className="text-[#2C3E50]/60 text-center mb-6">
                We'll send you a comprehensive Data Readiness Report with specific recommendations.
              </p>

              <form onSubmit={submitAssessment} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#2C3E50] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-[#2C3E50]/20 focus:outline-none focus:border-[#4ECDC4]"
                    placeholder="you@company.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2C3E50] mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-[#2C3E50]/20 focus:outline-none focus:border-[#4ECDC4]"
                    placeholder="Your Company"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#4ECDC4] hover:bg-[#3dbdb5] text-white font-semibold py-4 rounded-lg transition-colors"
                >
                  <Send className="w-5 h-5" />
                  {recommendation.action}
                </button>
              </form>
            </div>

            {/* Reset Button */}
            <div className="text-center">
              <button
                onClick={resetAssessment}
                className="inline-flex items-center gap-2 text-[#2C3E50]/60 hover:text-[#4ECDC4] font-medium transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                Start Over
              </button>
            </div>
          </div>
        </section>
      </PageShell>
    );
  }

  return (
    <PageShell>
      {/* Progress Bar — below fixed UniversalNav (h-16) */}
      <div className="fixed left-0 right-0 top-16 z-40 h-1 bg-navy/10">
        <div
          className="h-full bg-teal transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <section className="px-4 pb-20 pt-6 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-[#4ECDC4]/10 text-[#4ECDC4] px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span>📊</span>
              Step {currentPhase + 1} of {phases.length}
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#2C3E50] mb-2">
              {currentPhaseData.title}
            </h1>
            <p className="text-[#2C3E50]/60">
              {currentPhaseData.subtitle}
            </p>
          </div>

          {/* Questions */}
          <div className="space-y-6 mb-10">
            {currentPhaseData.questions.map((q, index) => (
              <div
                key={q.id}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#2C3E50]/10"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="w-8 h-8 bg-[#4ECDC4] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2C3E50] mb-2">
                      {q.question}
                    </h3>
                    {q.why && (
                      <p className="text-sm text-[#2C3E50]/50 italic">
                        Why this matters: {q.why}
                      </p>
                    )}
                  </div>
                </div>

                {/* Answer Options */}
                <div className="ml-12">
                  {q.type === 'yesno' ? (
                    <div className="flex gap-4">
                      <button
                        onClick={() => handleAnswer(q.id, 'yes', 5)}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all ${
                          answers[q.id]?.value === 'yes'
                            ? 'bg-green-500 text-white'
                            : 'bg-[#FFFCF5] text-[#2C3E50] border border-[#2C3E50]/20 hover:border-green-500'
                        }`}
                      >
                        <CheckCircle className="w-5 h-5" />
                        Yes
                      </button>
                      <button
                        onClick={() => handleAnswer(q.id, 'no', 0)}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all ${
                          answers[q.id]?.value === 'no'
                            ? 'bg-[#E07A5F] text-white'
                            : 'bg-[#FFFCF5] text-[#2C3E50] border border-[#2C3E50]/20 hover:border-[#E07A5F]'
                        }`}
                      >
                        <XCircle className="w-5 h-5" />
                        No
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {q.options?.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => handleAnswer(q.id, opt.value, opt.score)}
                          className={`w-full text-left p-4 rounded-xl transition-all ${
                            answers[q.id]?.value === opt.value
                              ? 'bg-[#4ECDC4] text-white'
                              : 'bg-[#FFFCF5] text-[#2C3E50] border border-[#2C3E50]/10 hover:border-[#4ECDC4]'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              onClick={prevPhase}
              disabled={currentPhase === 0}
              className={`flex items-center gap-2 py-3 px-6 rounded-full font-medium transition-all ${
                currentPhase === 0
                  ? 'opacity-0 cursor-default'
                  : 'bg-white text-[#2C3E50] border border-[#2C3E50]/20 hover:border-[#4ECDC4]'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>

            <button
              onClick={nextPhase}
              disabled={!currentPhaseData.questions.every(q => answers[q.id])}
              className={`flex items-center gap-2 py-3 px-6 rounded-full font-medium transition-all ${
                currentPhaseData.questions.every(q => answers[q.id])
                  ? 'bg-[#4ECDC4] text-white hover:bg-[#3dbdb5]'
                  : 'bg-[#2C3E50]/20 text-[#2C3E50]/40 cursor-not-allowed'
              }`}
            >
              {currentPhase === phases.length - 1 ? 'See Results' : 'Next'}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default AIReadinessAssessment;
