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

function resolvePageFromLocation(): string {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  if (path === '/ask-chatgpt') return 'ask-chatgpt';
  if (path === '/ask-claude') return 'ask-claude';
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
    case 'home':
    default:
      return <Home />;
  }
}

export default App;
