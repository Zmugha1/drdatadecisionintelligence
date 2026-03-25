import { useState, useMemo } from 'react';
import { LineChart } from '../components/charts/LineChart';
import { BarChart } from '../components/charts/BarChart';
import { DonutChart } from '../components/charts/DonutChart';
import { StatusBadge } from '../components/StatusBadge';
import { clients, clientSummaries, monthlyMetrics, clientFeedback } from '../data/clients';
import { cn, formatCurrency, formatNumber, formatPercentage } from '../lib/utils';
import { ArrowLeft, TrendingUp, TrendingDown, Star, MessageSquare, DollarSign } from 'lucide-react';

interface ClientIntelligenceProps {
  selectedClientId: string | null;
  onBack: () => void;
}

export function ClientIntelligence({ selectedClientId, onBack }: ClientIntelligenceProps) {
  const [activeTab, setActiveTab] = useState<'performance' | 'search' | 'reviews' | 'feedback'>('performance');

  const client = useMemo(() => {
    if (!selectedClientId) return null;
    return clients.find(c => c.id === selectedClientId);
  }, [selectedClientId]);

  const summary = useMemo(() => {
    if (!selectedClientId) return null;
    return clientSummaries.find(s => s.clientId === selectedClientId);
  }, [selectedClientId]);

  const metrics = useMemo(() => {
    if (!selectedClientId) return [];
    return monthlyMetrics.filter(m => m.clientId === selectedClientId);
  }, [selectedClientId]);

  const feedback = useMemo(() => {
    if (!selectedClientId) return [];
    return clientFeedback.filter(f => f.clientId === selectedClientId);
  }, [selectedClientId]);

  if (!client || !summary) {
    // Show all clients list
    return (
      <div className="p-8 animate-fade-in">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900">Client Intelligence</h1>
          <p className="text-slate-500 mt-1">Individual client analytics and insights</p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Client</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Industry</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Monthly</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Health</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">ROI</th>
              </tr>
            </thead>
            <tbody>
              {clientSummaries.map((s, idx) => (
                <tr 
                  key={s.clientId} 
                  className={cn(
                    'border-b border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors',
                    idx === clientSummaries.length - 1 && 'border-b-0'
                  )}
                >
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-slate-900">{s.clientName}</p>
                      <p className="text-sm text-slate-500">{s.industry}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{s.industry}</td>
                  <td className="px-6 py-4">
                    <StatusBadge status={s.status} />
                  </td>
                  <td className="px-6 py-4 font-medium">{formatCurrency(s.monthlyRetainer)}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{s.healthScore}</span>
                      <span className="text-slate-400">/ 100</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      'font-medium',
                      s.roiPercentage >= 100 ? 'text-emerald-600' : 'text-amber-600'
                    )}>
                      {s.roiPercentage}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  const latestMetrics = metrics[metrics.length - 1];
  const isSessionPositive = summary.sessionTrend >= 0;
  const isConversionPositive = summary.conversionTrend >= 0;

  // Chart data
  const sessionsData = metrics.map(m => ({ name: m.monthYear, value: m.sessions }));
  const conversionsData = metrics.map(m => ({ name: m.monthYear, value: m.conversions }));
  const impressionsData = metrics.map(m => ({ name: m.monthYear, value: m.impressions }));
  const clicksData = metrics.map(m => ({ name: m.monthYear, value: m.clicks }));

  const donutData = [
    { name: 'Organic Search', value: 65, color: '#3b82f6' },
    { name: 'Direct', value: 20, color: '#10b981' },
    { name: 'Referral', value: 10, color: '#f59e0b' },
    { name: 'Social', value: 5, color: '#8b5cf6' }
  ];

  const totalFeedbackValue = feedback.reduce((sum, f) => sum + f.value, 0);

  return (
    <div className="p-8 animate-fade-in">
      {/* Back Button & Header */}
      <div className="mb-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-700 mb-4 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Clients
        </button>
        
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">{client.name}</h1>
            <p className="text-slate-500 mt-1">{client.industry} | {client.location}</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-slate-900">{formatCurrency(client.monthlyRetainer)}</p>
            <p className="text-slate-500 text-sm">Monthly Retainer</p>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <p className="text-slate-500 text-sm font-medium">Website Visitors</p>
          <p className="text-2xl font-bold text-slate-900 mt-2">{formatNumber(latestMetrics.sessions)}</p>
          <div className={cn(
            'flex items-center gap-1 mt-2 text-sm',
            isSessionPositive ? 'text-emerald-600' : 'text-red-600'
          )}>
            {isSessionPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            {formatPercentage(summary.sessionTrend)} vs last month
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <p className="text-slate-500 text-sm font-medium">Google Clicks</p>
          <p className="text-2xl font-bold text-slate-900 mt-2">{formatNumber(latestMetrics.clicks)}</p>
          <div className="flex items-center gap-1 mt-2 text-sm text-emerald-600">
            <TrendingUp className="w-4 h-4" />
            +12.5% vs last month
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <p className="text-slate-500 text-sm font-medium">Avg Time on Site</p>
          <p className="text-2xl font-bold text-slate-900 mt-2">
            {Math.floor(latestMetrics.avgSessionDuration / 60)}m {latestMetrics.avgSessionDuration % 60}s
          </p>
          <div className="flex items-center gap-1 mt-2 text-sm text-emerald-600">
            <TrendingUp className="w-4 h-4" />
            +8.3% vs last month
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <p className="text-slate-500 text-sm font-medium">Conversions</p>
          <p className="text-2xl font-bold text-slate-900 mt-2">{latestMetrics.conversions}</p>
          <div className={cn(
            'flex items-center gap-1 mt-2 text-sm',
            isConversionPositive ? 'text-emerald-600' : 'text-red-600'
          )}>
            {isConversionPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            {formatPercentage(summary.conversionTrend)} vs last month
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-slate-200 mb-6">
        <div className="flex gap-6">
          {[
            { id: 'performance', label: 'Performance', icon: TrendingUp },
            { id: 'search', label: 'Search Visibility', icon: Star },
            { id: 'reviews', label: 'Reviews', icon: MessageSquare },
            { id: 'feedback', label: 'Feedback', icon: DollarSign }
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={cn(
                  'flex items-center gap-2 pb-4 text-sm font-medium border-b-2 transition-colors',
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-slate-500 hover:text-slate-700'
                )}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'performance' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <LineChart data={sessionsData} title="Website Sessions Over Time" />
            <BarChart data={conversionsData} title="Conversions Over Time" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <DonutChart data={donutData} title="Traffic Sources" />
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-4">Engagement Metrics</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-500">Bounce Rate</span>
                    <span className="font-medium">{(latestMetrics.bounceRate * 100).toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${latestMetrics.bounceRate * 100}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-500">Pages per Session</span>
                    <span className="font-medium">{latestMetrics.pagesPerSession}</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div 
                      className="bg-emerald-500 h-2 rounded-full"
                      style={{ width: `${(latestMetrics.pagesPerSession / 5) * 100}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-500">Conversion Rate</span>
                    <span className="font-medium">{(latestMetrics.conversionRate * 100).toFixed(2)}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div 
                      className="bg-purple-500 h-2 rounded-full"
                      style={{ width: `${(latestMetrics.conversionRate / 0.1) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-4">Session Duration</h4>
              <div className="space-y-3">
                {metrics.slice(-5).map(m => (
                  <div key={m.monthYear} className="flex justify-between items-center">
                    <span className="text-sm text-slate-500">{m.monthYear}</span>
                    <span className="font-medium">
                      {Math.floor(m.avgSessionDuration / 60)}m {m.avgSessionDuration % 60}s
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'search' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <LineChart data={impressionsData} title="Search Impressions" color="#8b5cf6" />
            <LineChart data={clicksData} title="Search Clicks" color="#10b981" />
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="font-semibold text-slate-900 mb-4">Search Performance Summary</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="text-slate-500 text-sm">Impressions</p>
                <p className="text-2xl font-bold text-slate-900">{formatNumber(latestMetrics.impressions)}</p>
              </div>
              <div>
                <p className="text-slate-500 text-sm">Clicks</p>
                <p className="text-2xl font-bold text-slate-900">{formatNumber(latestMetrics.clicks)}</p>
              </div>
              <div>
                <p className="text-slate-500 text-sm">CTR</p>
                <p className="text-2xl font-bold text-slate-900">{(latestMetrics.ctr * 100).toFixed(2)}%</p>
              </div>
              <div>
                <p className="text-slate-500 text-sm">Avg Position</p>
                <p className="text-2xl font-bold text-slate-900">{latestMetrics.position.toFixed(1)}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'reviews' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200 text-center">
              <p className="text-slate-500 text-sm">Average Rating</p>
              <p className="text-4xl font-bold text-amber-500 mt-2">★ {latestMetrics.avgRating}</p>
              <p className="text-slate-400 text-sm mt-1">out of 5</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200 text-center">
              <p className="text-slate-500 text-sm">Total Reviews</p>
              <p className="text-4xl font-bold text-slate-900 mt-2">{latestMetrics.reviewCount}</p>
              <p className="text-emerald-600 text-sm mt-1">+{latestMetrics.newReviews} this month</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200 text-center">
              <p className="text-slate-500 text-sm">Response Rate</p>
              <p className="text-4xl font-bold text-slate-900 mt-2">94%</p>
              <p className="text-slate-400 text-sm mt-1">to reviews</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200 text-center">
              <p className="text-slate-500 text-sm">Review Velocity</p>
              <p className="text-4xl font-bold text-slate-900 mt-2">{latestMetrics.newReviews}</p>
              <p className="text-slate-400 text-sm mt-1">per month</p>
            </div>
          </div>
          <LineChart 
            data={metrics.map(m => ({ name: m.monthYear, value: m.reviewCount }))} 
            title="Review Count Over Time" 
            color="#f59e0b"
          />
        </div>
      )}

      {activeTab === 'feedback' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <p className="text-slate-500 text-sm">Total Feedback Entries</p>
              <p className="text-3xl font-bold text-slate-900 mt-2">{feedback.length}</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <p className="text-slate-500 text-sm">Attributed Revenue</p>
              <p className="text-3xl font-bold text-emerald-600 mt-2">{formatCurrency(totalFeedbackValue)}</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <p className="text-slate-500 text-sm">ROI</p>
              <p className="text-3xl font-bold text-blue-600 mt-2">{summary.roiPercentage}%</p>
            </div>
          </div>

          <div className="space-y-3">
            {feedback.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl p-5 border-l-4 border-blue-500 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={cn(
                        'px-2 py-1 rounded text-xs font-medium',
                        item.type === 'lead' ? 'bg-blue-100 text-blue-700' :
                        item.type === 'sale' ? 'bg-emerald-100 text-emerald-700' :
                        'bg-red-100 text-red-700'
                      )}>
                        {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                      </span>
                      <span className="text-slate-400 text-sm">{item.date}</span>
                    </div>
                    <p className="text-slate-700">{item.description}</p>
                    <p className="text-slate-400 text-sm mt-2">Recorded by: {item.recordedBy}</p>
                  </div>
                  <p className="text-xl font-bold text-emerald-600">
                    {item.value > 0 ? formatCurrency(item.value) : '-'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
