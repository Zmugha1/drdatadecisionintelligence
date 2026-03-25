import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { cn } from '../../lib/utils';

interface DonutChartProps {
  data: Array<{ name: string; value: number; color: string }>;
  title?: string;
  className?: string;
}

export function DonutChart({ data, title, className }: DonutChartProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  return (
    <div className={cn('bg-white rounded-xl p-6 border border-slate-200', className)}>
      {title && <h4 className="text-slate-900 font-semibold mb-4">{title}</h4>}
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={4}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
            formatter={(value: number, name: string) => [
              `${value} (${((value / total) * 100).toFixed(0)}%)`, 
              name
            ]}
          />
          <Legend 
            verticalAlign="bottom" 
            height={36}
            iconType="circle"
            formatter={(value: string, entry: any) => (
              <span style={{ color: entry.color }}>{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
