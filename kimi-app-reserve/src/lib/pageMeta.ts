/**
 * Per-page SEO metadata. Single source of truth, read by the prerender script
 * (build time) and by the browser to keep the document title in sync on navigation.
 * Keys match the page keys used by resolvePageFromLocation in App.tsx.
 */
export type PageMeta = {
  title: string;
  description: string;
  path: string;
};

export const SITE_URL = 'https://drdatadecisionintelligence.com';

export const PAGE_META: Record<string, PageMeta> = {
  home: {
    title: 'Dr. Data | Private AI Apps for Small Business | Milwaukee',
    description:
      'Private AI apps that run on your own machine. Lead generation, bidding, coaching, and more. Built for your business, owned by you. No cloud, no monthly rent. Your data never leaves your building.',
    path: '/',
  },
  about: {
    title: 'About Dr. Zubia Mughal, Ed.D. | Dr. Data Decision Intelligence',
    description: 'Meet Dr. Zubia Mughal, Ed.D., founder of Dr. Data Decision Intelligence. She builds private AI tools that run on your own machine, for businesses that cannot put their data in the cloud.',
    path: '/about/',
  },
  faq: {
    title: 'FAQ | Private AI for Small Business | Dr. Data',
    description: 'Common questions about private, local-first AI: how it works, what it costs, why your data never leaves your building, and whether it fits your business.',
    path: '/faq/',
  },
  products: {
    title: 'Custom Private AI Apps for Small Business | Private LLM on Your Own Machine | Dr. Data',
    description:
      'Custom private AI apps for small business: lead generation, on-site quoting, document reading, client intelligence, and more. A private LLM that runs on your own machine, no cloud, no monthly per-user fees. Dr. Data Pulse brings your leads, website, social, and business numbers into one intelligent view.',
    path: '/products/',
  },
  'private-hub': {
    title: 'Private AI for Law Firms, Accountants, and Clinics | Your Data Never Leaves | Dr. Data',
    description:
      'Private AI for professional services that handle confidential data: law firms, accounting practices, clinics, and financial advisors. Runs on your own hardware, so client files never touch a public cloud. HIPAA and privilege safe by design.',
    path: '/private-hub/',
  },
  'lead-ai': {
    title: 'Pre-Construction Lead Intelligence for Builders | Find Permits First | Lead AI | Dr. Data',
    description:
      'Lead AI finds building permits, licenses, and property signals before your competitors do, and hands builders and property pros a scored morning call list. A private lead intelligence tool that runs on your machine. Milwaukee and beyond.',
    path: '/lead-ai/',
  },
  'bidding-ai': {
    title: 'AI Quoting Tool for Contractors | Quote On Site | Bidding AI | Dr. Data',
    description:
      'An AI quoting tool that lets contractors and home-service pros build market-backed quotes on site in minutes, priced from their own costs, with the margin visible. Runs on your machine. For pest control, restoration, HVAC, energy, and specialist trades.',
    path: '/bidding-ai/',
  },
  'coaching-ai': {
    title: 'Private AI for Coaches | Save Time, Coach Deeper | Dr. Data',
    description:
      'A private AI coaching partner that learns your method, remembers every client, and preps you in seconds. Your data stays yours. Book a walkthrough.',
    path: '/coaching-ai/',
  },
  agentpulse: {
    title: 'AgentPulse | Private Decision Intelligence for Real Estate Agents | Dr. Data',
    description:
      'AgentPulse scores your leads, preps your morning, and writes in your voice, hosted for you and owned by you. Private decision intelligence for real estate agents.',
    path: '/agentpulse/',
  },
  'front-desk-ai': {
    title: 'Front Desk AI | Never Lose a First Impression | Dr. Data',
    description:
      'Front Desk AI greets every visitor, shares your contact in one tap, turns happy clients into Google reviews, and captures every lead into a system you own. Your front desk, always on.',
    path: '/front-desk-ai/',
  },
  'ai-enablement': {
    title: 'AI Enablement for Small Business | Milwaukee and Chicago | Dr. Data',
    description:
      'You already pay for AI. Your team isn\'t using it, or they\'re using the wrong one. Dr. Data configures your Google Workspace and Claude, trains your people by role, and delivers an AI Enablement and Transformation Roadmap. AI enablement and corporate AI training for Wisconsin and Illinois.',
    path: '/ai-enablement/',
  },
  careers: {
    title: 'Careers | Dr. Data',
    description:
      "Join Dr. Data. We build private AI applications that run on our clients' own machines.",
    path: '/careers/',
  },
  governance: {
    title: 'AI Governance and Data Standards | Dr. Data',
    description: 'How Dr. Data Decision Intelligence approaches AI governance, data standards, and privacy-first architecture for regulated and confidentiality-bound businesses.',
    path: '/governance/',
  },
  'small-business': {
    title: 'AI for Small Business | Private and Local-First | Dr. Data',
    description: 'Turn the AI you already pay for into AI that works for your business. Private tools built for small businesses in the Milwaukee metro and Waukesha County.',
    path: '/small-business/',
  },
  blog: {
    title: 'Blog | Dr. Data Decision Intelligence',
    description: 'Writing on private AI, data readiness, and decision intelligence for small business owners who want AI without giving up control of their data.',
    path: '/blog/',
  },
  'blog-why-milwaukee-law-firms-moving-ai-off-cloud': {
    title: 'Why Milwaukee Law Firms Are Moving AI Off the Cloud | Dr. Data',
    description:
      'Milwaukee law firms are moving AI on-premise to protect privilege and client confidentiality. Here is why private, local AI is the answer to the cloud-data problem.',
    path: '/blog/why-milwaukee-law-firms-moving-ai-off-cloud',
  },
  'blog-on-premise-ai-cost-small-business-2026': {
    title: 'What On-Premise AI Actually Costs for a Small Business in 2026 | Dr. Data',
    description:
      'A clear, honest cost breakdown of private on-premise AI versus cloud subscriptions for small business in 2026. Hardware, build, and upkeep, with no scary numbers.',
    path: '/blog/on-premise-ai-cost-small-business-2026',
  },
  'blog-milwaukee-msp-private-ai-services': {
    title: 'How Milwaukee MSPs Can Add Private AI to Their Services | Dr. Data',
    description:
      'Milwaukee MSPs can offer private AI to their clients without building models themselves. Here is how the partnership works: you own the client and hardware, we build the AI.',
    path: '/blog/milwaukee-msp-private-ai-services',
  },
  card: {
    title: 'Dr. Zubia Mughal, Ed.D. | Dr. Data Decision Intelligence',
    description:
      'Private AI for your business. Own your AI, do not rent it. Save my contact, book a call, or reach me directly.',
    path: '/card/',
  },
  review: {
    title: 'Leave a Review | Dr. Data Decision Intelligence',
    description: 'Enjoyed working with Dr. Data? Leave a quick Google review.',
    path: '/review/',
  },
};
