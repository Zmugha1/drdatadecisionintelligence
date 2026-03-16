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

function App() {
  const [page, setPage] = useState('home');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pageParam = params.get('page');
    if (pageParam) {
      setPage(pageParam);
    }
  }, [window.location.search]);

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
    case 'home':
    default:
      return <Home />;
  }
}

export default App;
