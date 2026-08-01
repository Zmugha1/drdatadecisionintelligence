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
      'Custom private AI apps for small business: lead generation, on-site quoting, document reading, client intelligence, and more. A private LLM that runs on your own machine, no cloud, no monthly per-user fees. Built for the work that eats your week.',
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
};
