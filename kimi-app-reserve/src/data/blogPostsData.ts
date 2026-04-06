/**
 * Blog index: mirrors kimi.link blog listing. `pageKey` set when a full article route exists in App.tsx.
 */
export type BlogFilterId =
  | 'all'
  | 'coaching'
  | 'ai-strategy'
  | 'data-annotation'
  | 'ml-governance'
  | 'predictive-analytics'
  | 'llm-governance';

export type BlogPostIndex = {
  id: string;
  date: string;
  readTime: string;
  categoryLabel: string;
  title: string;
  excerpt: string;
  tags: string[];
  filter: Exclude<BlogFilterId, 'all'>;
  /** SPA page key when implemented; omit or null for coming-soon posts */
  pageKey?: string | null;
};

export const BLOG_FILTERS: { id: BlogFilterId; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'coaching', label: 'Coaching' },
  { id: 'ai-strategy', label: 'AI Strategy' },
  { id: 'data-annotation', label: 'Data Annotation' },
  { id: 'ml-governance', label: 'ML Governance' },
  { id: 'predictive-analytics', label: 'Predictive Analytics' },
  { id: 'llm-governance', label: 'LLM Governance' },
];

export const BLOG_INDEX_INTRO =
  'Thoughts on decision intelligence, data governance, and building AI systems that actually work.';

export const BLOG_POSTS: BlogPostIndex[] = [
  {
    id: 'follow-up-email',
    date: 'March 28, 2026',
    readTime: '12 min read',
    categoryLabel: 'Productivity',
    title: 'The Follow-Up Email Problem: How Much Expert Time Are You Actually Wasting?',
    excerpt:
      'A simple calculation that will change how you think about the first hour after every meeting. Expert time lost to follow-up emails adds up faster than almost anyone tracks.',
    tags: ['Skill Threshold Zone', 'Professional Practice', 'AI Voice'],
    filter: 'coaching',
    pageKey: 'blog-follow-up-email',
  },
  {
    id: 'coaching-compass',
    date: 'February 14, 2026',
    readTime: '10 min read',
    categoryLabel: 'Coaching',
    title: 'Why Your Next High-Performing Client Will Not Come From Hustle, But From a Compass',
    excerpt:
      'How one 30-year coaching veteran stopped drowning in sticky notes and started trusting her gut again (with a little help from pattern recognition). Discover how AI becomes your external brain without replacing your intuition.',
    tags: ['Pattern Recognition', 'Decision Intelligence', 'Coaching'],
    filter: 'coaching',
    pageKey: 'blog-coaching-compass',
  },
  {
    id: 'data-to-money',
    date: 'February 10, 2026',
    readTime: '8 min read',
    categoryLabel: 'Revenue Recovery',
    title: 'From Data to $$$: How Decision Intelligence Recovers Hidden Revenue',
    excerpt:
      'Most e-commerce businesses are sitting on a goldmine waiting to be uncovered. Discover how our Revenue Leak Detector found $387K in recoverable revenue from 5,000 transactions using dual AI models with 99.92% accuracy.',
    tags: ['Decision Intelligence', 'E-commerce', 'ML Models'],
    filter: 'predictive-analytics',
    pageKey: 'blog-data-to-money',
  },
  {
    id: 'data-readiness',
    date: 'February 5, 2026',
    readTime: '5 min read',
    categoryLabel: 'Data Readiness',
    title: 'The "Data Doctor" Readiness Scorecard: Is Your Business AI-Ready?',
    excerpt:
      'Take this 2-minute interactive assessment to discover if your business data is AI-ready, a data mess, or starving for structure. Most Milwaukee businesses are sitting on a goldmine, but the mine is currently unprimed.',
    tags: ['AI Readiness', 'Data Assessment', 'Business Intelligence'],
    filter: 'ai-strategy',
    pageKey: 'blog-data-readiness',
  },
  {
    id: 'ai-initiatives-fail',
    date: 'January 28, 2026',
    readTime: '6 min read',
    categoryLabel: 'AI Strategy',
    title: 'Why Most AI Initiatives Fail Before Modeling Begins',
    excerpt:
      'The data exists. The budget is approved. The team is excited. And then... nothing. Here is why AI projects stall before they ever reach production, and how to fix it.',
    tags: ['Data Readiness', 'AI Failure', 'Decision Intelligence'],
    filter: 'ai-strategy',
    pageKey: null,
  },
  {
    id: 'dark-data',
    date: 'January 21, 2026',
    readTime: '6 min read',
    categoryLabel: 'Data Annotation',
    title: 'From Dark Data to Decision-Grade Intelligence',
    excerpt:
      'Unstructured documents, audio files, and scattered spreadsheets hold immense value, but only if you can extract meaning. Here is how semantic annotation transforms invisible data into actionable signals.',
    tags: ['Dark Data', 'Semantic Annotation', 'Knowledge Graphs'],
    filter: 'data-annotation',
    pageKey: null,
  },
  {
    id: 'governance-ml-framework',
    date: 'January 14, 2026',
    readTime: '10 min read',
    categoryLabel: 'ML Governance',
    title: 'Governance-First ML: A Practical Framework',
    excerpt:
      'Governance does not have to slow you down. In fact, when designed correctly, it accelerates your path from experiment to production. Here is the framework I use with every client.',
    tags: ['ML Lifecycle', 'Reproducibility', 'Auditability'],
    filter: 'ml-governance',
    pageKey: null,
  },
  {
    id: 'churn-playbook',
    date: 'January 7, 2026',
    readTime: '7 min read',
    categoryLabel: 'Predictive Analytics',
    title: 'The Churn Prediction Playbook: From Scores to Actions',
    excerpt:
      'A churn model that only tells you WHO will leave is useless. Here is how to build predictive systems that tell you WHY they are leaving and WHAT to do about it.',
    tags: ['Churn Prediction', 'Feature Engineering', 'Actionable Insights'],
    filter: 'predictive-analytics',
    pageKey: null,
  },
  {
    id: 'llm-agents-controllable',
    date: 'December 31, 2025',
    readTime: '9 min read',
    categoryLabel: 'LLM Governance',
    title: 'Building LLM Agents That Stay Controllable',
    excerpt:
      'Large language models are powerful but unpredictable. Here is how to design agent systems with built-in governance layers that prevent drift, hallucinations, and runaway behavior.',
    tags: ['LLMs', 'AI Agents', 'Responsible AI'],
    filter: 'llm-governance',
    pageKey: null,
  },
];
