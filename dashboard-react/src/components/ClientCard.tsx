import { cn, formatNumber, formatCurrency, formatPercentage, getHealthStatusColor } from '../lib/utils';
import { TrendingUp, TrendingDown } from 'lucide-react';
import type { ClientSummary } from '../types';

interface ClientCardProps {
  client: ClientSummary;
  onClick?: () => void;
  className?: string;
}

export function ClientCard({ client, onClick, className }: ClientCardProps) {
  const isSessionPositive = client.sessionTrend >= 0;

  return (
    <div 
      onClick={onClick}
      className={cn(
        'bg-white rounded-xl p-5 border border-slate-200 card-hover cursor-pointer',
        className
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="font-semibold text-slate-900">{client.clientName}</h4>
          <p className="text-slate-500 text-sm">{client.industry}</p>
        </div>
        <span className={cn(
          'status-badge',
          getHealthStatusColor(client.status)
        )}>
          {client.status === 'on_track' ? 'On Track' : 
           client.status === 'attention' ? 'Attention' : 'Action Required'}
        </span>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-slate-400 text-xs uppercase tracking-wide">Sessions</p>
          <p className="text-xl font-bold text-slate-900">{formatNumber(client.latestSessions)}</p>
          <div className={cn(
            'flex items-center gap-1 text-sm mt-1',
            isSessionPositive ? 'text-emerald-600' : 'text-red-600'
          )}>
            {isSessionPositive ? (
              <TrendingUp className="w-3 h-3" />
            ) : (
              <TrendingDown className="w-3 h-3" />
            )}
            {formatPercentage(client.sessionTrend)}
          </div>
        </div>
        
        <div>
          <p className="text-slate-400 text-xs uppercase tracking-wide">Health Score</p>
          <div className="flex items-baseline gap-1">
            <p className="text-xl font-bold text-slate-900">{client.healthScore}</p>
            <span className="text-slate-400 text-sm">/ 100</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-1.5 mt-2">
            <div 
              className={cn(
                'h-1.5 rounded-full transition-all',
                client.healthScore >= 80 ? 'bg-emerald-500' :
                client.healthScore >= 60 ? 'bg-amber-500' : 'bg-red-500'
              )}
              style={{ width: `${client.healthScore}%` }}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <div>
          <p className="text-slate-400 text-xs uppercase tracking-wide">ROI</p>
          <p className={cn(
            'text-lg font-bold',
            client.roiPercentage >= 100 ? 'text-emerald-600' : 'text-amber-600'
          )}>
            {client.roiPercentage}%
          </p>
        </div>
        <div className="text-right">
          <p className="text-slate-400 text-xs uppercase tracking-wide">Monthly</p>
          <p className="text-lg font-bold text-slate-900">{formatCurrency(client.monthlyRetainer)}</p>
        </div>
      </div>
    </div>
  );
}
