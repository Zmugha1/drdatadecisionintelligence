import { cn, formatNumber, formatCurrency, formatPercentage } from '../lib/utils';
import { TrendingUp, TrendingDown, Users, Phone, Target, Clock } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: number;
  trend?: number;
  trendLabel?: string;
  subtitle?: string;
  icon: 'users' | 'phone' | 'target' | 'clock' | 'chart';
  format?: 'number' | 'currency' | 'percentage';
  className?: string;
}

const iconMap = {
  users: Users,
  phone: Phone,
  target: Target,
  clock: Clock,
  chart: TrendingUp
};

export function KPICard({ 
  title, 
  value, 
  trend, 
  trendLabel,
  subtitle,
  icon,
  format = 'number',
  className 
}: KPICardProps) {
  const Icon = iconMap[icon];
  const isPositive = trend && trend >= 0;
  
  const formattedValue = format === 'currency' 
    ? formatCurrency(value)
    : format === 'percentage'
    ? `${value}%`
    : formatNumber(value);

  return (
    <div className={cn(
      'bg-white rounded-xl p-6 border border-slate-200 card-hover',
      className
    )}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-slate-500 text-sm font-medium">{title}</p>
          <h3 className="text-3xl font-bold text-slate-900 mt-2">{formattedValue}</h3>
          
          {trend !== undefined && (
            <div className="flex items-center gap-1.5 mt-2">
              <span className={cn(
                'flex items-center gap-1 text-sm font-medium',
                isPositive ? 'text-emerald-600' : 'text-red-600'
              )}>
                {isPositive ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
                {formatPercentage(trend)}
              </span>
              {trendLabel && (
                <span className="text-slate-400 text-sm">{trendLabel}</span>
              )}
            </div>
          )}
          
          {subtitle && !trend && (
            <p className="text-slate-400 text-sm mt-2">{subtitle}</p>
          )}
        </div>
        
        <div className={cn(
          'w-12 h-12 rounded-xl flex items-center justify-center',
          isPositive !== false ? 'bg-emerald-50' : 'bg-red-50'
        )}>
          <Icon className={cn(
            'w-6 h-6',
            isPositive !== false ? 'text-emerald-600' : 'text-red-600'
          )} />
        </div>
      </div>
    </div>
  );
}
