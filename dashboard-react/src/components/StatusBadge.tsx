import { cn } from '../lib/utils';

interface StatusBadgeProps {
  status: 'on_track' | 'attention' | 'action_required';
  className?: string;
}

const statusConfig = {
  on_track: {
    label: 'On Track',
    className: 'bg-emerald-100 text-emerald-700 border-emerald-200'
  },
  attention: {
    label: 'Needs Attention',
    className: 'bg-amber-100 text-amber-700 border-amber-200'
  },
  action_required: {
    label: 'Action Required',
    className: 'bg-red-100 text-red-700 border-red-200'
  }
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];
  
  return (
    <span className={cn(
      'inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border',
      config.className,
      className
    )}>
      <span className={cn(
        'w-1.5 h-1.5 rounded-full mr-1.5',
        status === 'on_track' ? 'bg-emerald-500' :
        status === 'attention' ? 'bg-amber-500' : 'bg-red-500'
      )} />
      {config.label}
    </span>
  );
}
