import { useState, useMemo } from 'react';
import { KPICard } from '../components/KPICard';
import { ClientCard } from '../components/ClientCard';
import { LineChart } from '../components/charts/LineChart';
import { BarChart } from '../components/charts/BarChart';
import { StatusBadge } from '../components/StatusBadge';
import { clients, clientSummaries, monthlyMetrics } from '../data/clients';
import { AlertTriangle, RefreshCw, Filter } from 'lucide-react';

interface ExecutiveDashboardProps {
  onClientSelect: (clientId: string) => void;
}

export function ExecutiveDashboard({ onClientSelect }: ExecutiveDashboardProps) {
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [industryFilter, setIndustryFilter] = useState<string>('all');

  const industries = useMemo(() => {
    const unique = new Set(clients.map(c => c.industry));
    return Array.from(unique);
  }, []);

  const filteredClients = useMemo(() => {
    return clientSummaries.filter(client => {
      if (statusFilter !== 'all' && client.status !== statusFilter) return false;
      if (industryFilter !== 'all') {
        const clientData = clients.find(c => c.id === client.clientId);
        if (clientData?.industry !== industryFilter) return false;
      }
      return true;
    });
  }, [statusFilter, industryFilter]);

  const attentionClients = useMemo(() => {
    return clientSummaries.filter(c => c.status === 'attention' || c.status === 'action_required');
  }, []);

  const totalRevenue = clients.reduce((sum, c) => sum + c.monthlyRetainer, 0);
  const avgHealth = Math.round(clientSummaries.reduce((sum, c) => sum + c.healthScore, 0) / clientSummaries.length);

  // Chart data
  const sessionsData = useMemo(() => {
    const grouped = monthlyMetrics.reduce((acc, m) => {
      acc[m.monthYear] = (acc[m.monthYear] || 0) + m.sessions;
      return acc;
    }, {} as Record<string, number>);
    
    return Object.entries(grouped).map(([name, value]) => ({ name, value }));
  }, []);

  const conversionsData = useMemo(() => {
    const grouped = monthlyMetrics.reduce((acc, m) => {
      acc[m.monthYear] = (acc[m.monthYear] || 0) + m.conversions;
      return acc;
    }, {} as Record<string, number>);
    
    return Object.entries(grouped).map(([name, value]) => ({ name, value }));
  }, []);

  return (
    <div className="p-8 animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Executive Dashboard</h1>
        <p className="text-slate-500 mt-1">Real-time KPIs and client performance overview</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <KPICard
          title="Total Clients"
          value={clients.length}
          trend={3}
          trendLabel="new this quarter"
          icon="users"
        />
        <KPICard
          title="Active Campaigns"
          value={18}
          trend={2}
          trendLabel="this month"
          icon="target"
        />
        <KPICard
          title="Monthly Revenue"
          value={totalRevenue}
          trend={8}
          trendLabel="vs last month"
          icon="chart"
          format="currency"
        />
        <KPICard
          title="Avg. Health Score"
          value={avgHealth}
          trend={4}
          trendLabel="points"
          icon="target"
        />
        <KPICard
          title="Total Conversions"
          value={monthlyMetrics.filter(m => m.monthYear === 'Mar 2025').reduce((sum, m) => sum + m.conversions, 0)}
          trend={12}
          trendLabel="vs last month"
          icon="phone"
        />
        <KPICard
          title="Time Saved"
          value={6.5}
          subtitle="hours/week"
          icon="clock"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-400" />
          <span className="text-sm text-slate-500">Filter by Status</span>
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All</option>
          <option value="on_track">On Track</option>
          <option value="attention">Needs Attention</option>
          <option value="action_required">Action Required</option>
        </select>

        <div className="flex items-center gap-2 ml-4">
          <Filter className="w-4 h-4 text-slate-400" />
          <span className="text-sm text-slate-500">Filter by Industry</span>
        </div>
        <select
          value={industryFilter}
          onChange={(e) => setIndustryFilter(e.target.value)}
          className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All</option>
          {industries.map(ind => (
            <option key={ind} value={ind}>{ind}</option>
          ))}
        </select>

        <button className="ml-auto flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50 transition-colors">
          <RefreshCw className="w-4 h-4" />
          Refresh Data
        </button>
      </div>

      {/* Client Performance Matrix */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Client Performance Matrix</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClients.map(client => (
            <ClientCard
              key={client.clientId}
              client={client}
              onClick={() => onClientSelect(client.clientId)}
            />
          ))}
        </div>
      </div>

      {/* Alerts Section */}
      {attentionClients.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            Alerts & Action Items
          </h2>
          <div className="space-y-3">
            {attentionClients.map(client => (
              <div 
                key={client.clientId}
                className="bg-white rounded-xl p-4 border-l-4 border-amber-500 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <StatusBadge status={client.status} />
                    <span className="font-semibold text-slate-900">{client.clientName}</span>
                    <span className="text-slate-500 text-sm">{client.industry}</span>
                  </div>
                  <button 
                    onClick={() => onClientSelect(client.clientId)}
                    className="text-blue-600 text-sm font-medium hover:underline"
                  >
                    View Details
                  </button>
                </div>
                <p className="text-slate-600 text-sm mt-2">
                  Sessions {client.sessionTrend > 0 ? '+' : ''}{client.sessionTrend}% | 
                  Health Score: {client.healthScore}/100
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LineChart 
          data={sessionsData} 
          title="Total Website Sessions (All Clients)" 
          color="#3b82f6"
        />
        <BarChart 
          data={conversionsData} 
          title="Total Conversions (All Clients)" 
          color="#10b981"
        />
      </div>
    </div>
  );
}
