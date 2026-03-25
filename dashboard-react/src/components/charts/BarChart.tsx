import { BarChart as ReBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { cn } from '../../lib/utils';

interface BarChartProps {
  data: Array<{ name: string; value: number }>;
  title?: string;
  color?: string;
  className?: string;
}

export function BarChart({ data, title, color = '#10b981', className }: BarChartProps) {
  return (
    <div className={cn('bg-white rounded-xl p-6 border border-slate-200', className)}>
      {title && <h4 className="text-slate-900 font-semibold mb-4">{title}</h4>}
      <ResponsiveContainer width="100%" height={280}>
        <ReBarChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
          <XAxis 
            dataKey="name" 
            stroke="#94a3b8" 
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis 
            stroke="#94a3b8" 
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
            formatter={(value: number) => [value.toLocaleString(), '']}
          />
          <Bar 
            dataKey="value" 
            fill={color}
            radius={[4, 4, 0, 0]}
          />
        </ReBarChart>
      </ResponsiveContainer>
    </div>
  );
}
