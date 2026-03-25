import { LineChart as ReLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { cn } from '../../lib/utils';

interface LineChartProps {
  data: Array<{ name: string; value: number }>;
  title?: string;
  color?: string;
  className?: string;
}

export function LineChart({ data, title, color = '#3b82f6', className }: LineChartProps) {
  return (
    <div className={cn('bg-white rounded-xl p-6 border border-slate-200', className)}>
      {title && <h4 className="text-slate-900 font-semibold mb-4">{title}</h4>}
      <ResponsiveContainer width="100%" height={280}>
        <ReLineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
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
            tickFormatter={(value) => value >= 1000 ? `${(value / 1000).toFixed(1)}k` : value}
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
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke={color} 
            strokeWidth={2}
            dot={{ fill: color, strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, strokeWidth: 0 }}
          />
        </ReLineChart>
      </ResponsiveContainer>
    </div>
  );
}
