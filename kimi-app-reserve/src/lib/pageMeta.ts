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
    title: 'Dr. Data | Private, Air-Gapped AI for Small Business | Pewaukee WI',
    description: 'Private, air-gapped AI systems for small businesses. Dr. Zubia Mughal (Ed.D.) builds local-first decision intelligence so your data never leaves your building.',
    path: '/',
  },
  about: {
    title: 'About Dr. Zubia Mughal, Ed.D. | Dr. Data Decision Intelligence',
    description: 'Meet Dr. Zubia Mughal, Ed.D., founder of Dr. Data Decision Intelligence. She builds private AI tools that run on your own machine, for businesses that cannot put their data in the cloud.',
    path: '/about',
  },
  faq: {
    title: 'FAQ | Private AI for Small Business | Dr. Data',
    description: 'Common questions about private, local-first AI: how it works, what it costs, why your data never leaves your building, and whether it fits your business.',
    path: '/faq',
  },
  governance: {
    title: 'AI Governance and Data Standards | Dr. Data',
    description: 'How Dr. Data Decision Intelligence approaches AI governance, data standards, and privacy-first architecture for regulated and confidentiality-bound businesses.',
    path: '/governance',
  },
  survey: {
    title: 'Data Readiness Assessment | Dr. Data',
    description: 'Find out whether your business is ready for AI. A short assessment that scores your data readiness and shows you what to fix first.',
    path: '/survey',
  },
  'small-business': {
    title: 'AI for Small Business | Private and Local-First | Dr. Data',
    description: 'Turn the AI you already pay for into AI that works for your business. Private tools built for small businesses in the Milwaukee metro and Waukesha County.',
    path: '/small-business',
  },
  blog: {
    title: 'Blog | Dr. Data Decision Intelligence',
    description: 'Writing on private AI, data readiness, and decision intelligence for small business owners who want AI without giving up control of their data.',
    path: '/blog',
  },
};
