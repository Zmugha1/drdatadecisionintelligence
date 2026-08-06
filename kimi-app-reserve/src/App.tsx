import { useEffect, useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Governance from './pages/Governance';
import FAQ from './pages/FAQ';
import Products from './pages/Products';
import Careers from './pages/Careers';
import PrivateHub from './pages/PrivateHub';
import LeadAI from './pages/LeadAI';
import BiddingAI from './pages/BiddingAI';
import CoachingAI from './pages/CoachingAI';
import AgentPulse from './pages/AgentPulse';
import FrontDeskAI from './pages/FrontDeskAI';
import AIEnablement from './pages/AIEnablement';
import Card from './pages/Card';
import Review from './pages/Review';
import BNIReferral from './pages/BNIReferral';
import AIReadinessAssessment from './pages/AIReadinessAssessment';
import AskChatGPT from './pages/AskChatGPT';
import AskClaude from './pages/AskClaude';
import BlogPostDataToMoney from './pages/BlogPost-DataToMoney';
import BlogPostDataReadiness from './pages/BlogPost-DataReadiness';
import BlogPostCoachingCompass from './pages/BlogPost-CoachingCompass';
import BlogPostFollowUpEmail from './pages/BlogPost-FollowUpEmail';
import BlogPostWhyMilwaukeeLawFirmsMovingAiOffCloud from './pages/BlogPost-WhyMilwaukeeLawFirmsMovingAiOffCloud';
import BlogPostOnPremiseAiCostSmallBusiness2026 from './pages/BlogPost-OnPremiseAiCostSmallBusiness2026';
import BlogPostMilwaukeeMspPrivateAiServices from './pages/BlogPost-MilwaukeeMspPrivateAiServices';
import DataToDemo from './pages/DataToDemo';
import SmallBusiness from './pages/SmallBusiness';
import Pulse from './pages/Pulse';
import { PAGE_PATHS } from './lib/sitePaths';
import DrDataAssistant from './components/DrDataAssistant';

function resolvePageFromLocation(location?: { pathname: string; search: string }): string {
  const pathname = location?.pathname ?? window.location.pathname;
  const search = location?.search ?? window.location.search;
  const path = pathname.replace(/\/$/, '') || '/';
  if (path === '/pulse') return 'pulse';
  if (path === '/ask-chatgpt') return 'ask-chatgpt';
  if (path === '/ask-claude') return 'ask-claude';
  if (path === '/blog') return 'blog';
  if (path === '/blog/data-to-money') return 'blog-data-to-money';
  if (path === '/blog/data-readiness') return 'blog-data-readiness';
  if (path === '/blog/coaching-compass') return 'blog-coaching-compass';
  if (path === '/blog/follow-up-email') return 'blog-follow-up-email';
  if (path === '/blog/why-milwaukee-law-firms-moving-ai-off-cloud') return 'blog-why-milwaukee-law-firms-moving-ai-off-cloud';
  if (path === '/blog/on-premise-ai-cost-small-business-2026') return 'blog-on-premise-ai-cost-small-business-2026';
  if (path === '/blog/milwaukee-msp-private-ai-services') return 'blog-milwaukee-msp-private-ai-services';
  if (path === '/data-to-demo') return 'data-to-demo';
  if (path === '/small-business') return 'small-business';
  const cleanPathPage = Object.keys(PAGE_PATHS).find((page) => PAGE_PATHS[page] === path);
  if (cleanPathPage) return cleanPathPage;
  const pageParam = new URLSearchParams(search).get('page');
  return pageParam || 'home';
}

function App({ initialPath }: { initialPath?: string } = {}) {
  const [page, setPage] = useState(() => {
    if (initialPath !== undefined) {
      const url = new URL(initialPath, 'http://localhost');
      return resolvePageFromLocation({ pathname: url.pathname, search: url.search });
    }
    return resolvePageFromLocation();
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const sync = () => setPage(resolvePageFromLocation());
    sync();
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, []);

  const renderPage = () => {
    switch (page) {
      case 'about':
        return <About />;
      case 'blog':
        return <Blog />;
      case 'governance':
        return <Governance />;
      case 'products':
        return <Products />;
      case 'careers':
        return <Careers />;
      case 'faq':
        return <FAQ />;
      case 'private-hub':
        return <PrivateHub />;
      case 'lead-ai':
        return <LeadAI />;
      case 'bidding-ai':
        return <BiddingAI />;
      case 'coaching-ai':
        return <CoachingAI />;
    case 'agentpulse':
      return <AgentPulse />;
    case 'front-desk-ai':
      return <FrontDeskAI />;
    case 'ai-enablement':
      return <AIEnablement />;
    case 'card':
        return <Card />;
      case 'review':
        return <Review />;
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
      case 'blog-why-milwaukee-law-firms-moving-ai-off-cloud':
        return <BlogPostWhyMilwaukeeLawFirmsMovingAiOffCloud />;
      case 'blog-on-premise-ai-cost-small-business-2026':
        return <BlogPostOnPremiseAiCostSmallBusiness2026 />;
      case 'blog-milwaukee-msp-private-ai-services':
        return <BlogPostMilwaukeeMspPrivateAiServices />;
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
  };

  return (
    <>
      {renderPage()}
      <DrDataAssistant />
    </>
  );
}

export default App;
