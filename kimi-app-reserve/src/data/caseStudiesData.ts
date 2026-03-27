export type Stat = { value: string; label: string };

export type DemoStep = { title: string; body: string };

export type CaseStudyDef = {
  page: string;
  navLabel: string;
  tag: string;
  org: string;
  headline: string;
  stats: Stat[];
  demoTitle: string;
  demoSubtitle: string;
  demoCounter?: string;
  demoSteps: DemoStep[];
  /** 'dark' = navy panel + progress (Milwaukee-style); 'metrics' = Austin-style */
  demoVariant: 'dark' | 'metrics' | 'pipeline' | 'health' | 'governance';
  challenge: string;
  solution: string;
  results: string[];
};

export const CASE_STUDY_NAV = [
  { page: 'case-studies', label: 'All case studies' },
  { page: 'case-study-milwaukee', label: 'Milwaukee · Churn prediction' },
  { page: 'case-study-austin', label: 'Austin · Single source of truth' },
  { page: 'case-study-madison', label: 'Madison · ML lifecycle' },
  { page: 'case-study-chicago', label: 'Chicago · No-show reduction' },
  { page: 'case-study-new-york', label: 'New York · Governed AI agents' },
] as const;

const milwaukeeSteps: DemoStep[] = [
  { title: 'Raw Data Ingestion', body: 'Unstructured documents, emails, and spreadsheets enter the system.' },
  { title: 'Semantic Chunking', body: 'Communications are split into semantic units for embedding and labeling.' },
  { title: 'Embedding Generation', body: 'Vectors capture meaning so similar client behavior clusters together.' },
  { title: 'Pattern Detection', body: 'Churn signals are detected across email, CRM, and support history.' },
  { title: 'Structured Intelligence', body: 'Scores and explanations feed the models and teams that act on them.' },
];

const austinSteps: DemoStep[] = [
  {
    title: 'Metric Audit',
    body: 'Identify all metrics across teams and document conflicts between Sales, Marketing, and Finance.',
  },
  { title: 'Canonical Definitions', body: 'One governed definition per KPI with owners and lineage.' },
  { title: 'Semantic Layer', body: 'A shared metrics layer reconciles dashboards to the same numbers.' },
  { title: 'Quality Gates', body: 'Checks before numbers reach leadership reviews.' },
  { title: 'Trusted Reporting', body: 'One source of truth in the tools executives already use.' },
];

export const CASE_STUDIES: Record<string, CaseStudyDef> = {
  'case-study-milwaukee': {
    page: 'case-study-milwaukee',
    navLabel: 'Milwaukee',
    tag: 'Data Annotation & AI (Artificial Intelligence) Readiness',
    org: 'Professional Services Firm · Milwaukee, WI',
    headline: 'From Dark Data to 40% Better Churn Prediction',
    stats: [
      { value: '40%', label: 'Churn prediction improvement' },
      { value: '12,000+', label: 'Labor hours saved annually' },
      { value: '8', label: 'Client data sources unified' },
    ],
    demoTitle: 'Live Demo: Dark Data to Structured Intelligence',
    demoSubtitle: 'See how unstructured documents become machine-interpretable',
    demoCounter: '2,847 unstructured documents',
    demoSteps: milwaukeeSteps,
    demoVariant: 'dark',
    challenge:
      'A professional services firm had years of client communications scattered across emails, support tickets, and CRM notes. They knew patterns existed, why some clients stayed, why others left, but had no way to extract meaning from the chaos.',
    solution:
      'We implemented a comprehensive data annotation pipeline: semantic chunking of communications, embedding generation for meaning extraction, and pattern detection to identify churn signals. The dark data became structured intelligence.',
    results: [
      'Churn prediction accuracy improved 40%',
      '12,000+ labor hours saved annually',
      'Client retention improved 15%',
    ],
  },
  'case-study-austin': {
    page: 'case-study-austin',
    navLabel: 'Austin',
    tag: 'Decision-Ready Data Foundations',
    org: 'SaaS Company · Austin, TX',
    headline: 'From Dashboard Chaos to a Single Source of Truth',
    stats: [
      { value: '12', label: 'Metric conflicts resolved' },
      { value: '15hrs/wk', label: 'Reporting time saved' },
      { value: '85%', label: 'Decision confidence' },
    ],
    demoTitle: 'Live Demo: From Chaos to Trusted Metrics',
    demoSubtitle: 'See how conflicting dashboards become a single source of truth',
    demoCounter: '12 conflicting metrics surfaced',
    demoSteps: austinSteps,
    demoVariant: 'metrics',
    challenge:
      'Sales, Marketing, and Finance each had their own dashboards. The same KPIs showed different numbers, so leadership debated which view was “true” instead of deciding what to do next.',
    solution:
      'We ran a metric audit, locked canonical definitions for each KPI, and built a governed semantic layer with data quality gates so every report reconciled to the same source.',
    results: [
      '12 metric conflicts resolved',
      '15 hours per week saved on reporting',
      'Decision confidence increased to 85%',
    ],
  },
  'case-study-madison': {
    page: 'case-study-madison',
    navLabel: 'Madison',
    tag: 'Governance-First ML (Machine Learning) Lifecycle',
    org: 'Manufacturing Company · Madison, WI',
    headline: 'From Notebook Chaos to Production-Ready Models in 10 Weeks',
    stats: [
      { value: '10 weeks', label: 'Time to production' },
      { value: '100%', label: 'Model reproducibility' },
      { value: '-60%', label: 'Analyst onboarding time' },
    ],
    demoTitle: 'Live Demo: Notebook to Production Pipeline',
    demoSubtitle: 'See how experiments become reproducible, monitored models',
    demoSteps: [
      { title: 'Environment Lock', body: 'Dependencies and data snapshots versioned for every training run.' },
      { title: 'Training Pipeline', body: 'Automated feature builds and validation before model fit.' },
      { title: 'Model Registry', body: 'Approved artifacts promoted with signatures and metadata.' },
      { title: 'Deployment', body: 'Blue-green scoring with drift checks in production.' },
      { title: 'Operations', body: 'Dashboards for latency, errors, and retrain triggers.' },
    ],
    demoVariant: 'pipeline',
    challenge:
      'Models lived in notebooks without reproducible training or a monitored path to production scoring.',
    solution:
      'We implemented MLOps: pipelines, registry, validation gates, and deployment hooks so the artifact that passed tests is what runs in production.',
    results: [
      'Production release in 10 weeks',
      '100% reproducibility for audited retrains',
      '60% faster analyst onboarding onto the platform',
    ],
  },
  'case-study-chicago': {
    page: 'case-study-chicago',
    navLabel: 'Chicago',
    tag: 'Predictive Decision Intelligence',
    org: 'Healthcare Provider Network · Chicago, IL',
    headline: 'Early Warning System Reduces Patient No-Shows by 25%',
    stats: [
      { value: '25%', label: 'No-show reduction' },
      { value: '$1.2M', label: 'Revenue recovered annually' },
      { value: '87%', label: 'Prediction accuracy' },
    ],
    demoTitle: 'Live Demo: No-Show Risk Scoring',
    demoSubtitle: 'See how scheduling signals become prioritized outreach',
    demoSteps: [
      { title: 'Signal Ingestion', body: 'History from scheduling, demographics, and visit patterns.' },
      { title: 'Risk Calibration', body: 'Models tuned for fairness and explainability at the bedside.' },
      { title: 'Tiered Actions', body: 'Staff see who to confirm first and which script to use.' },
      { title: 'Feedback Loop', body: 'Outcomes improve the next day’s queue.' },
      { title: 'Measured Impact', body: 'Utilization and revenue tracked in one view.' },
    ],
    demoVariant: 'health',
    challenge:
      'No-shows drained utilization and revenue. Staff had no ranked, explainable list of which appointments to confirm first.',
    solution:
      'We deployed an early-warning model with calibrated risk tiers and workflow hooks in the systems staff already used.',
    results: [
      '25% reduction in no-shows in rollout markets',
      '$1.2M annual revenue impact from recovered utilization',
      '87% prediction accuracy on held-out validation',
    ],
  },
  'case-study-new-york': {
    page: 'case-study-new-york',
    navLabel: 'New York',
    tag: 'Governed AI (Artificial Intelligence) Systems & Agent Design',
    org: 'Financial Services Firm · New York, NY',
    headline: 'AI Agents with Built-In Governance from Day One',
    stats: [
      { value: '99.7%', label: 'Policy violations caught' },
      { value: '100%', label: 'Audit trail coverage' },
      { value: '0', label: 'Compliance incidents' },
    ],
    demoTitle: 'Live Demo: Policy-Gated Agents',
    demoSubtitle: 'See how every agent action is checked, logged, and reviewable',
    demoSteps: [
      { title: 'Policy Layer', body: 'Rules evaluated before any external call or data write.' },
      { title: 'Human Handoff', body: 'Escalation paths when confidence or risk thresholds trip.' },
      { title: 'Immutable Logs', body: 'Who, what, when, and which model version for every step.' },
      { title: 'Audit Views', body: 'Compliance and risk teams can replay decisions on demand.' },
      { title: 'Continuous Control', body: 'Monitoring for drift in behavior, not just model metrics.' },
    ],
    demoVariant: 'governance',
    challenge:
      'The firm needed agentic workflows without trading away policy enforcement, explainability, or audit readiness.',
    solution:
      'We wrapped agents with policy checks, human-in-the-loop steps, and immutable audit trails so automated actions are defensible.',
    results: [
      '99.7% of policy violations caught pre-production',
      '100% audit trail coverage on production agent actions',
      'Zero compliance incidents in the measured rollout window',
    ],
  },
};

export const CASE_STUDY_ORDER: string[] = [
  'case-study-milwaukee',
  'case-study-austin',
  'case-study-madison',
  'case-study-chicago',
  'case-study-new-york',
];

export function getCaseStudy(page: string): CaseStudyDef | undefined {
  return CASE_STUDIES[page];
}
