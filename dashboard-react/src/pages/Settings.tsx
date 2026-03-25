import { useState } from 'react';
import { cn } from '../lib/utils';
import { 
  Plug, 
  Users, 
  Bell, 
  CheckCircle2, 
  AlertCircle, 
  XCircle,
  Plus,
  ChevronRight
} from 'lucide-react';

interface Integration {
  id: string;
  name: string;
  description: string;
  status: 'connected' | 'partial' | 'disconnected';
  icon: string;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  status: 'active' | 'pending';
}

const integrations: Integration[] = [
  {
    id: 'ga4',
    name: 'Google Analytics 4',
    description: 'Website traffic and user behavior',
    status: 'connected',
    icon: 'chart'
  },
  {
    id: 'gsc',
    name: 'Google Search Console',
    description: 'Search performance and visibility',
    status: 'connected',
    icon: 'search'
  },
  {
    id: 'gbp',
    name: 'Google Business Profile',
    description: 'Reviews and local SEO data',
    status: 'partial',
    icon: 'building'
  },
  {
    id: 'callrail',
    name: 'CallRail',
    description: 'Call tracking and attribution',
    status: 'disconnected',
    icon: 'phone'
  }
];

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Jeff Kirk',
    role: 'Owner',
    email: 'jeff@upatdawn.com',
    status: 'active'
  },
  {
    id: '2',
    name: 'Sarah Miller',
    role: 'Campaign Manager',
    email: 'sarah@upatdawn.com',
    status: 'active'
  },
  {
    id: '3',
    name: 'Mike Chen',
    role: 'SEO Specialist',
    email: 'mike@upatdawn.com',
    status: 'active'
  }
];

export function Settings() {
  const [activeTab, setActiveTab] = useState<'integrations' | 'team' | 'notifications'>('integrations');
  const [notifications, setNotifications] = useState({
    trafficDrop: true,
    conversionSpike: true,
    healthScore: true,
    weeklySummary: true,
    monthlyReport: true,
    feedback: true
  });

  const getStatusIcon = (status: Integration['status']) => {
    switch (status) {
      case 'connected':
        return <CheckCircle2 className="w-5 h-5 text-emerald-500" />;
      case 'partial':
        return <AlertCircle className="w-5 h-5 text-amber-500" />;
      case 'disconnected':
        return <XCircle className="w-5 h-5 text-slate-400" />;
    }
  };

  const getStatusText = (status: Integration['status']) => {
    switch (status) {
      case 'connected':
        return <span className="text-emerald-600 font-medium">Connected</span>;
      case 'partial':
        return <span className="text-amber-600 font-medium">Partial</span>;
      case 'disconnected':
        return <span className="text-slate-400 font-medium">Not Connected</span>;
    }
  };

  return (
    <div className="p-8 animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
        <p className="text-slate-500 mt-1">Manage your dashboard preferences and integrations</p>
      </div>

      {/* Tabs */}
      <div className="border-b border-slate-200 mb-6">
        <div className="flex gap-6">
          {[
            { id: 'integrations', label: 'Integrations', icon: Plug },
            { id: 'team', label: 'Team Management', icon: Users },
            { id: 'notifications', label: 'Notifications', icon: Bell }
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

      {/* Integrations Tab */}
      {activeTab === 'integrations' && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Connected Data Sources</h2>
          {integrations.map(integration => (
            <div 
              key={integration.id}
              className="bg-white rounded-xl p-6 border border-slate-200 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                  <Plug className="w-6 h-6 text-slate-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{integration.name}</h3>
                  <p className="text-slate-500 text-sm">{integration.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  {getStatusIcon(integration.status)}
                  {getStatusText(integration.status)}
                </div>
                <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
                  {integration.status === 'connected' ? 'Configure' : 'Connect'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Team Tab */}
      {activeTab === 'team' && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-900">Team Members</h2>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              <Plus className="w-4 h-4" />
              Add Member
            </button>
          </div>
          
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Role</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Status</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody>
                {teamMembers.map((member, idx) => (
                  <tr 
                    key={member.id}
                    className={cn(
                      'border-b border-slate-100 hover:bg-slate-50',
                      idx === teamMembers.length - 1 && 'border-b-0'
                    )}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-medium">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <span className="font-medium text-slate-900">{member.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-600">{member.role}</td>
                    <td className="px-6 py-4 text-slate-600">{member.email}</td>
                    <td className="px-6 py-4">
                      <span className={cn(
                        'px-2 py-1 rounded-full text-xs font-medium',
                        member.status === 'active' 
                          ? 'bg-emerald-100 text-emerald-700' 
                          : 'bg-amber-100 text-amber-700'
                      )}>
                        {member.status === 'active' ? 'Active' : 'Pending'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-slate-400 hover:text-slate-600">
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Notifications Tab */}
      {activeTab === 'notifications' && (
        <div>
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Notification Preferences</h2>
          
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <p className="font-medium text-slate-900">Traffic Drop Alerts</p>
                <p className="text-sm text-slate-500">Get notified when client traffic drops more than 20%</p>
              </div>
              <input
                type="checkbox"
                checked={notifications.trafficDrop}
                onChange={(e) => setNotifications(prev => ({ ...prev, trafficDrop: e.target.checked }))}
                className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
              />
            </label>
            
            <div className="border-t border-slate-100" />
            
            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <p className="font-medium text-slate-900">Conversion Spike Alerts</p>
                <p className="text-sm text-slate-500">Get notified when conversions increase more than 50%</p>
              </div>
              <input
                type="checkbox"
                checked={notifications.conversionSpike}
                onChange={(e) => setNotifications(prev => ({ ...prev, conversionSpike: e.target.checked }))}
                className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
              />
            </label>
            
            <div className="border-t border-slate-100" />
            
            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <p className="font-medium text-slate-900">Health Score Alerts</p>
                <p className="text-sm text-slate-500">Get notified when a client health score drops below 60</p>
              </div>
              <input
                type="checkbox"
                checked={notifications.healthScore}
                onChange={(e) => setNotifications(prev => ({ ...prev, healthScore: e.target.checked }))}
                className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
              />
            </label>
            
            <div className="border-t border-slate-100" />
            
            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <p className="font-medium text-slate-900">Weekly Summary Email</p>
                <p className="text-sm text-slate-500">Receive a weekly summary every Monday</p>
              </div>
              <input
                type="checkbox"
                checked={notifications.weeklySummary}
                onChange={(e) => setNotifications(prev => ({ ...prev, weeklySummary: e.target.checked }))}
                className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
              />
            </label>
            
            <div className="border-t border-slate-100" />
            
            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <p className="font-medium text-slate-900">Monthly Performance Report</p>
                <p className="text-sm text-slate-500">Receive a detailed report on the 1st of each month</p>
              </div>
              <input
                type="checkbox"
                checked={notifications.monthlyReport}
                onChange={(e) => setNotifications(prev => ({ ...prev, monthlyReport: e.target.checked }))}
                className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
              />
            </label>
            
            <div className="border-t border-slate-100" />
            
            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <p className="font-medium text-slate-900">New Client Feedback</p>
                <p className="text-sm text-slate-500">Get notified when clients add new feedback</p>
              </div>
              <input
                type="checkbox"
                checked={notifications.feedback}
                onChange={(e) => setNotifications(prev => ({ ...prev, feedback: e.target.checked }))}
                className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
              />
            </label>
          </div>
          
          <div className="mt-6 flex justify-end">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Save Preferences
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
