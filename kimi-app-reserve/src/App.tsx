import { useEffect, useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import CaseStudies from './pages/CaseStudies';
import Blog from './pages/Blog';
import Governance from './pages/Governance';
import FAQ from './pages/FAQ';
import Survey from './pages/Survey';
import PrivateHub from './pages/PrivateHub';
import BNIReferral from './pages/BNIReferral';
import AIReadinessAssessment from './pages/AIReadinessAssessment';
import AskChatGPT from './pages/AskChatGPT';
import AskClaude from './pages/AskClaude';
import BlogPostDataToMoney from './pages/BlogPost-DataToMoney';
import BlogPostDataReadiness from './pages/BlogPost-DataReadiness';
import BlogPostCoachingCompass from './pages/BlogPost-CoachingCompass';
import BlogPostFollowUpEmail from './pages/BlogPost-FollowUpEmail';
import DataToDemo from './pages/DataToDemo';
import SmallBusiness from './pages/SmallBusiness';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Pulse from './pages/Pulse';
import { CASE_STUDY_ORDER } from './data/caseStudiesData';

const PATH_TO_CASE_STUDY: Record<string, string> = {
  '/case-studies/milwaukee': 'case-study-milwaukee',
  '/case-studies/austin': 'case-study-austin',
  '/case-studies/madison': 'case-study-madison',
  '/case-studies/chicago': 'case-study-chicago',
  '/case-studies/new-york': 'case-study-new-york',
};

function resolvePageFromLocation(): string {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  if (path === '/pulse') return 'pulse';
  if (path === '/ask-chatgpt') return 'ask-chatgpt';
  if (path === '/ask-claude') return 'ask-claude';
  if (path === '/blog') return 'blog';
  if (path === '/blog/data-to-money') return 'blog-data-to-money';
  if (path === '/blog/data-readiness') return 'blog-data-readiness';
  if (path === '/blog/coaching-compass') return 'blog-coaching-compass';
  if (path === '/blog/follow-up-email') return 'blog-follow-up-email';
  if (path === '/data-to-demo') return 'data-to-demo';
  if (path === '/small-business') return 'small-business';
  if (PATH_TO_CASE_STUDY[path]) return PATH_TO_CASE_STUDY[path];
  const pageParam = new URLSearchParams(window.location.search).get('page');
  return pageParam || 'home';
}

function App() {
  const [page, setPage] = useState(resolvePageFromLocation);

  useEffect(() => {
    const sync = () => setPage(resolvePageFromLocation());
    sync();
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, []);

  if (CASE_STUDY_ORDER.includes(page)) {
    return <CaseStudyDetail pageKey={page} />;
  }

  switch (page) {
    case 'about':
      return <About />;
    case 'case-studies':
      return <CaseStudies />;
    case 'blog':
      return <Blog />;
    case 'governance':
      return <Governance />;
    case 'faq':
      return <FAQ />;
    case 'survey':
      return <Survey />;
    case 'private-hub':
      return <PrivateHub />;
    case 'bni-referral':
      return <BNIReferral />;
    case 'ai-readiness':
      return <AIReadinessAssessment />;
    case 'ask-chatgpt':
      return <AskChatGPT />;
    case 'ask-claude':
      return <AskClaude />;
    case 'blog-data-to-money':
      return <BlogPostDataToMoney />;
    case 'blog-data-readiness':
      return <BlogPostDataReadiness />;
    case 'blog-coaching-compass':
      return <BlogPostCoachingCompass />;
    case 'blog-follow-up-email':
      return <BlogPostFollowUpEmail />;
    case 'data-to-demo':
      return <DataToDemo />;
    case 'small-business':
      return <SmallBusiness />;
    case 'pulse':
      return <Pulse />;
    case 'home':
    default:
      return <Home />;
  }
}

export default App;
