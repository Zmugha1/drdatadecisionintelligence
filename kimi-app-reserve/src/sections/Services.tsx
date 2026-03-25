import { useEffect, useRef, useState } from 'react';
import { Search, Database, Cog, Brain, Bot, ArrowRight, Table, FileText, Mic, Video, ChevronDown, ChevronUp, ClipboardList, Users } from 'lucide-react';
import SurveyCTA from '@/components/SurveyCTA';

const visitorStages = [
  { stage: 'Just starting', service: 'Data Strategy & AI Readiness', cta: 'Start Here', id: 'strategy' },
  { stage: 'Have data, need trust', service: 'Decision-Ready Data Foundations', cta: 'Build Your Foundation', id: 'foundations' },
  { stage: 'Running pilots', service: 'Reliable ML Lifecycle', cta: 'Operationalize', id: 'lifecycle' },
  { stage: 'Need predictions', service: 'Predictive Decision Intelligence', cta: 'Predict & Act', id: 'predictive' },
  { stage: 'Exploring LLMs/agents', service: 'Reliable AI Systems', cta: 'Design Responsible AI', id: 'ai-systems' },
  { stage: 'Need customer insights', service: 'Survey Design', cta: 'Ask Your Customers', id: 'survey' },
  { stage: 'Want to understand users', service: 'Data-Driven Customer Personas', cta: 'Know Your Users', id: 'personas' },
];

const annotationTypes = [
  { icon: Table, title: 'Structured / Tabular', items: ['Outcome and target variables', 'Predictor vs identifier separation', 'Time logic (pre-event vs post-event)', 'Missingness semantics'] },
  { icon: FileText, title: 'Text & Documents', items: ['Intent, topic, sentiment, entities', 'Semantic chunking & embeddings', 'Meaning → numerical vectors'] },
  { icon: Mic, title: 'Audio', items: ['Transcription & speaker ID', 'Event & outcome tagging', 'Escalation & objection markers'] },
  { icon: Video, title: 'Video', items: ['Scene & event labeling', 'Timestamped actions', 'Time-aligned learning signals'] },
];

const services = [
  {
    id: 'strategy',
    icon: Search,
    title: 'Data Strategy & AI (Artificial Intelligence) Readiness Assessment',
    subtitle: 'The foundation everything else builds on',
    for: 'Organizations with data but no clear path to AI',
    investment: 'Custom Scope — ongoing advisory available',
    timeline: '4–6 weeks',
    cta: 'Start Here',
    color: 'border-teal',
    bgColor: 'bg-teal/10',
    iconColor: 'text-teal',
    problem: "Most Artificial Intelligence (AI) initiatives fail before modeling even begins. The data exists, but it hasn't been translated into machine-interpretable meaning. Unstructured documents, audio, video? They're dark data: valuable but invisible to AI.",
    delivers: [
      'AI (Artificial Intelligence) readiness assessment (data usability + decision intent)',
      'Annotation strategy by data type (tabular, text, audio, video)',
      'Target and feature definition aligned to business outcomes',
      'Semantic annotation design (embeddings, chunking where appropriate)',
      'Model-facing dataset blueprint: what\'s learnable and why',
    ],
    outcome: 'Data that Artificial Intelligence (AI) can actually interpret. Clear targets, features, and learning signals. A documented handoff from preparation to modeling.',
    hasDetailSection: true,
  },
  {
    id: 'foundations',
    icon: Database,
    title: 'Decision-Ready Data Foundations',
    subtitle: 'From dashboards to decisions',
    for: 'Organizations with reports but no shared truth',
    investment: 'Custom Scope — ongoing advisory available',
    timeline: '6–8 weeks',
    cta: 'Build Your Foundation',
    color: 'border-coral',
    bgColor: 'bg-coral/10',
    iconColor: 'text-coral',
    problem: 'Dashboards everywhere. Trust nowhere. Teams use conflicting metrics. Decisions still run on intuition because nobody believes the numbers.',
    delivers: [
      'Decision-first KPI architecture tied to business outcomes',
      'Canonical definitions, assumptions, interpretation rules',
      'Data quality control matrix with decision thresholds',
      'Governance artifacts for repeatable reporting',
      'Executive-facing frameworks that drive action',
    ],
    outcome: 'A shared source of truth. Reporting leaders trust and act on. Clear ownership of metrics and outcomes.',
    hasDetailSection: false,
  },
  {
    id: 'lifecycle',
    icon: Cog,
    title: 'Reliable ML Lifecycle Design',
    subtitle: 'From experiments to operational systems',
    for: 'Organizations running pilots that never ship',
    investment: 'Custom Scope — ongoing advisory available',
    timeline: '8–12 weeks',
    cta: 'Operationalize Your ML',
    color: 'border-purple-500',
    bgColor: 'bg-purple-500/10',
    iconColor: 'text-purple-500',
    problem: 'Notebooks pile up. Results vary by analyst. "Governance" lives in slide decks, not code. Nothing reaches production because nobody knows when a model is "ready."',
    delivers: [
      'End-to-end Machine Learning (ML) lifecycle (intake → data → modeling → evaluation → deployment → monitoring)',
      'Deterministic run management and reproducibility controls',
      'Governance artifacts that travel with every run',
      'Decision-readiness criteria and evaluation frameworks',
      'Full auditability and lineage design',
    ],
    outcome: 'A lifecycle that produces decision-grade outputs. Clear go/no-go signals. Faster, safer path from research to operations.',
    hasDetailSection: false,
  },
  {
    id: 'predictive',
    icon: Brain,
    title: 'Predictive Decision Intelligence',
    subtitle: 'Early signals. Clear actions. Measurable ROI.',
    for: 'Organizations tired of reacting too late',
    investment: 'Custom Scope — ongoing advisory available',
    timeline: '10–14 weeks',
    cta: 'Predict & Act',
    color: 'border-indigo-500',
    bgColor: 'bg-indigo-500/10',
    iconColor: 'text-indigo-500',
    problem: 'Churn identified after the customer leaves. Forecasts disconnected from action. Risk scores nobody trusts. Models that don\'t connect to workflows.',
    delivers: [
      'Churn, risk, and forecasting models aligned to business meaning',
      'Feature engineering grounded in operational reality',
      'Explainability and attribution for every prediction',
      'Action thresholds (Green/Orange/Red) tied to playbooks',
      'Integration into dashboards and decision workflows',
    ],
    outcome: 'Early-warning systems leaders rely on. Clear actions tied to signals. Reduced reaction time. Measurable ROI.',
    hasDetailSection: false,
  },
  {
    id: 'ai-systems',
    icon: Bot,
    title: 'Reliable AI Systems & Agent Design',
    subtitle: 'AI that stays controllable as it scales',
    for: 'Organizations exploring LLMs (Large Language Models), agents, and advanced AI (Artificial Intelligence)',
    investment: 'Custom Scope — ongoing advisory available',
    timeline: 'Ongoing advisory available',
    cta: 'Design Responsible AI (Artificial Intelligence)',
    color: 'border-emerald-500',
    bgColor: 'bg-emerald-500/10',
    iconColor: 'text-emerald-500',
    problem: 'Agent behavior inconsistent. Hallucinations and drift. Governance exists only as policy. No audit trails. No accountability.',
    delivers: [
      'Governance agents that validate data and decisions',
      'Policy evaluation layers: allow, review, escalate, block',
      'Audience-aware routing to protect business users',
      'Drift and stability detection',
      'Decision logging and audit frameworks',
    ],
    outcome: 'AI systems that behave predictably. Clear accountability and escalation paths. Confidence to deploy responsibly.',
    hasDetailSection: false,
  },
  {
    id: 'survey',
    icon: ClipboardList,
    title: 'Survey Design & Customer Research',
    subtitle: 'Ask the right questions. Get actionable answers.',
    for: 'Organizations that need to understand why customers choose them',
    investment: 'Custom Scope — ongoing advisory available',
    timeline: '4–6 weeks',
    cta: 'Ask Your Customers',
    color: 'border-amber-500',
    bgColor: 'bg-amber-500/10',
    iconColor: 'text-amber-500',
    problem: 'You have behavioral data, but you have not actually asked your customers what they think. You are missing the "why" behind their choices. Pricing decisions, feature prioritization, and customer experience improvements are based on assumptions, not evidence.',
    delivers: [
      'Feature prioritization surveys based on scientific methods',
      'Market intelligence and competitive positioning research',
      'Pricing sensitivity and willingness-to-pay studies',
      'Customer satisfaction and experience feedback design',
      'Actionable insights with clear recommendations for improvement',
    ],
    outcome: 'Direct customer insights that validate your assumptions. Clear direction on pricing, features, and experience improvements. Decisions backed by what customers actually want.',
    hasDetailSection: false,
  },
  {
    id: 'personas',
    icon: Users,
    title: 'Data-Driven Customer Personas',
    subtitle: 'Identify key personas from your behavioral data',
    for: 'Organizations that want to truly understand their users',
    investment: 'Custom Scope — ongoing advisory available',
    timeline: '6–8 weeks',
    cta: 'Know Your Users',
    color: 'border-pink-500',
    bgColor: 'bg-pink-500/10',
    iconColor: 'text-pink-500',
    problem: 'Almost every company has a wealth of data about customers, yet rarely uses it to validate personas and improve experience. Marketing messages miss the mark. Product features do not resonate. You are guessing who your customers are instead of knowing.',
    delivers: [
      'Cluster analysis of behavioral data to identify persona segments',
      'Demographic and psychographic profiling from data patterns',
      'Journey mapping for each identified persona',
      'Persona-specific messaging and channel recommendations',
      'Integration with marketing and product strategy',
    ],
    outcome: 'Data-validated customer personas your whole organization can use. Marketing that resonates. Product decisions aligned with real user needs. Higher engagement and conversion.',
    hasDetailSection: false,
  },
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedService, setExpandedService] = useState<string | null>('strategy');
  const sectionRef = useRef<HTMLElement>(null);

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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleExpand = (id: string) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <section ref={sectionRef} id="services" className="relative py-24 sm:py-32 w-full bg-white overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <h2 className={`font-display font-bold text-navy text-center mb-4 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
          Services
        </h2>
        <p className={`text-navy/60 text-center max-w-2xl mx-auto mb-4 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '100ms' }}>
          From organizing your data to building reliable AI systems, comprehensive services tailored to where you are on your journey.
        </p>
        <p className={`text-xl font-bold text-teal text-center mb-8 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '150ms' }}>
          Make $$$ With Your Data Faster
        </p>

        {/* Visitor Stage Selector */}
        <div className={`mb-12 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
          <p className="text-center text-navy/50 text-sm mb-4 uppercase tracking-wide font-medium">Where are you on your journey?</p>
          <div className="flex flex-wrap justify-center gap-2">
            {visitorStages.map((stage) => (
              <button
                key={stage.id}
                onClick={() => { setExpandedService(stage.id); document.getElementById(stage.id)?.scrollIntoView({ behavior: 'smooth', block: 'center' }); }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${expandedService === stage.id ? 'bg-teal text-white shadow-md' : 'bg-cream text-navy/70 hover:bg-teal/10 hover:text-teal'}`}
              >
                {stage.stage}
              </button>
            ))}
          </div>
        </div>

        {/* "Not sure where to start?" Section */}
        <div className={`mb-12 bg-cream/50 rounded-2xl p-8 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '300ms' }}>
          <h3 className="font-display font-bold text-navy text-xl mb-6 text-center">Not sure where to start?</h3>
          <div className="space-y-4 mb-8">
            {[
              { arrow: 'text-teal', condition: "If you have data but don't know what's usable", action: 'Start with Data Strategy & AI Readiness', id: 'strategy' },
              { arrow: 'text-coral', condition: 'If you have dashboards but no one trusts them', action: 'Start with Decision-Ready Data Foundations', id: 'foundations' },
              { arrow: 'text-purple-500', condition: 'If your pilots never reach production', action: 'Start with Reliable ML Lifecycle', id: 'lifecycle' },
              { arrow: 'text-indigo-500', condition: "If you're always reacting too late", action: 'Start with Predictive Decision Intelligence', id: 'predictive' },
              { arrow: 'text-emerald-500', condition: "If you're exploring LLMs but worried about control", action: 'Start with Reliable AI Systems', id: 'ai-systems' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 cursor-pointer group" onClick={() => { setExpandedService(item.id); document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'center' }); }}>
                <span className={`${item.arrow} mt-1`}>→</span>
                <div>
                  <p className="text-navy/70 text-sm group-hover:text-teal transition-colors">{item.condition}</p>
                  <p className="text-navy font-medium">{item.action}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="https://calendly.com/zubiaml4l/15min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-display font-semibold hover:bg-navy/90 transition-colors">
              Book a discovery call <ArrowRight size={18} />
            </a>
            <p className="text-navy/50 text-sm mt-3">We'll map your current state and recommend the right starting point.</p>
          </div>
        </div>

        {/* Service Cards */}
        <div className="space-y-6">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className={`transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${200 + index * 100}ms` }}>
              <div className={`relative bg-white rounded-xl border-l-4 ${service.color} shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden ${expandedService === service.id ? 'ring-2 ring-teal/20' : ''}`}>
                <div className="p-6 sm:p-8">
                  {/* Header Row */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex-1">
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-lg ${service.bgColor} ${service.iconColor} flex items-center justify-center`}>
                          <service.icon size={24} strokeWidth={2} />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-navy text-xl mb-1">{service.title}</h3>
                          <p className={`${service.iconColor} font-medium text-sm`}>{service.subtitle}</p>
                        </div>
                      </div>
                      <p className="mt-4 text-navy/50 text-sm"><span className="font-medium">For:</span> {service.for}</p>
                      <p className="mt-4 text-navy/80 text-base leading-relaxed"><span className="font-semibold text-navy">The Problem:</span> {service.problem}</p>
                    </div>
                    <div className="flex-shrink-0 lg:text-right">
                      <p className={`font-display font-bold ${service.iconColor} text-lg`}>{service.investment}</p>
                      <p className="text-navy/50 text-sm">{service.timeline}</p>
                    </div>
                  </div>

                  {/* Expandable Content */}
                  {expandedService === service.id && (
                    <div className="mt-6 pt-6 border-t border-navy/10 animate-slide-up">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-display font-semibold text-navy text-sm uppercase tracking-wide mb-3">What You Get</h4>
                          <ul className="space-y-2">
                            {service.delivers.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-navy/70 text-sm">
                                <span className={`flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 ${service.bgColor.replace('/10', '')}`} />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-display font-semibold text-navy text-sm uppercase tracking-wide mb-3">What Exists After</h4>
                          <p className="text-navy/70 text-sm leading-relaxed">{service.outcome}</p>
                        </div>
                      </div>

                      {/* Annotation Types for Annotation service */}
                      {service.id === 'strategy' && (
                        <div className="mt-8 pt-6 border-t border-navy/10">
                          <h4 className="font-display font-semibold text-navy text-sm uppercase tracking-wide mb-4">Annotation by Data Type</h4>
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {annotationTypes.map((type, i) => (
                              <div key={i} className="bg-cream/50 rounded-lg p-4">
                                <div className="flex items-center gap-2 mb-3">
                                  <type.icon size={16} className="text-teal" />
                                  <h5 className="font-display font-semibold text-navy text-xs">{type.title}</h5>
                                </div>
                                <ul className="space-y-1">
                                  {type.items.map((item, j) => (
                                    <li key={j} className="text-navy/60 text-xs">{item}</li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* CTA Row */}
                  <div className="mt-6 flex items-center justify-between">
                    <button onClick={() => toggleExpand(service.id)} className={`text-sm font-medium ${service.iconColor} hover:underline flex items-center gap-1`}>
                      {expandedService === service.id ? <>Show less <ChevronUp size={16} /></> : <>Learn more <ChevronDown size={16} /></>}
                    </button>
                    <a href="https://calendly.com/zubiaml4l/15min" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${service.bgColor} ${service.iconColor} text-sm font-semibold hover:opacity-80 transition-opacity`}>
                      {service.cta} <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Survey CTA */}
        <div className="mt-16 max-w-3xl mx-auto">
          <SurveyCTA variant="light" />
        </div>
      </div>
    </section>
  );
}
