import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ExecutiveDashboard } from './pages/ExecutiveDashboard';
import { ClientIntelligence } from './pages/ClientIntelligence';
import { AIAssistant } from './pages/AIAssistant';
import { ROICalculator } from './pages/ROICalculator';
import { Settings } from './pages/Settings';

function App() {
  const [activePage, setActivePage] = useState('executive');
  const [selectedClientId, setSelectedClientId] = useState<string | null>(null);

  const handleClientSelect = (clientId: string) => {
    setSelectedClientId(clientId);
    setActivePage('clients');
  };

  const handleBackToClients = () => {
    setSelectedClientId(null);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'executive':
        return <ExecutiveDashboard onClientSelect={handleClientSelect} />;
      case 'clients':
        return (
          <ClientIntelligence 
            selectedClientId={selectedClientId} 
            onBack={handleBackToClients} 
          />
        );
      case 'ai':
        return <AIAssistant />;
      case 'roi':
        return <ROICalculator />;
      case 'settings':
        return <Settings />;
      default:
        return <ExecutiveDashboard onClientSelect={handleClientSelect} />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar activePage={activePage} onPageChange={setActivePage} />
      <main className="flex-1 ml-64 overflow-auto">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
