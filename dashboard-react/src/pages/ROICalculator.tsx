import { useState, useMemo } from 'react';
import { formatCurrency } from '../lib/utils';
import { TrendingUp, TrendingDown, Clock, Users, DollarSign, Calculator } from 'lucide-react';
import { clients } from '../data/clients';

export function ROICalculator() {
  const [hoursPerWeek, setHoursPerWeek] = useState(11);
  const [hourlyValue, setHourlyValue] = useState(150);
  const [numClients, setNumClients] = useState(8);
  const [newHoursPerWeek, setNewHoursPerWeek] = useState(2);
  const [retentionImprovement, setRetentionImprovement] = useState(10);
  const [newClientsPerYear, setNewClientsPerYear] = useState(2);

  const calculations = useMemo(() => {
    const currentWeeklyCost = hoursPerWeek * hourlyValue;
    const currentAnnualCost = currentWeeklyCost * 52;
    
    const newWeeklyCost = newHoursPerWeek * hourlyValue;
    const newAnnualCost = newWeeklyCost * 52;
    
    const timeSavings = currentAnnualCost - newAnnualCost;
    
    const avgRetainer = clients.reduce((sum, c) => sum + c.monthlyRetainer, 0) / clients.length;
    const retentionValue = (retentionImprovement / 100) * numClients * avgRetainer * 12;
    const newClientValue = newClientsPerYear * avgRetainer * 12;
    
    const totalValue = timeSavings + retentionValue + newClientValue;
    const dashboardCost = 30000;
    const netBenefit = totalValue - dashboardCost;
    const roi = (netBenefit / dashboardCost) * 100;
    
    return {
      currentAnnualCost,
      timeSavings,
      retentionValue,
      newClientValue,
      totalValue,
      dashboardCost,
      netBenefit,
      roi
    };
  }, [hoursPerWeek, hourlyValue, numClients, newHoursPerWeek, retentionImprovement, newClientsPerYear]);

  return (
    <div className="p-8 animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
            <Calculator className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">ROI Calculator</h1>
            <p className="text-slate-500">See the real value this dashboard delivers</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Current State */}
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
            <TrendingDown className="w-5 h-5 text-red-500" />
            Your Current State
          </h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Hours per week on reporting
              </label>
              <input
                type="number"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Your hourly value ($)
              </label>
              <input
                type="number"
                value={hourlyValue}
                onChange={(e) => setHourlyValue(Number(e.target.value))}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Number of clients
              </label>
              <input
                type="number"
                value={numClients}
                onChange={(e) => setNumClients(Number(e.target.value))}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
            <p className="text-red-700 font-semibold">Current Annual Cost</p>
            <p className="text-3xl font-bold text-red-600 mt-1">
              {formatCurrency(calculations.currentAnnualCost)}
            </p>
            <p className="text-red-600 text-sm mt-1">
              {hoursPerWeek} hours/week × ${hourlyValue}/hour × 52 weeks
            </p>
          </div>
        </div>

        {/* With Dashboard */}
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-500" />
            With Dashboard Solution
          </h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                New hours per week on reporting
              </label>
              <input
                type="number"
                value={newHoursPerWeek}
                onChange={(e) => setNewHoursPerWeek(Number(e.target.value))}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Retention improvement (%)
              </label>
              <input
                type="range"
                min="0"
                max="50"
                value={retentionImprovement}
                onChange={(e) => setRetentionImprovement(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-slate-500 mt-1">
                <span>0%</span>
                <span className="font-medium text-blue-600">{retentionImprovement}%</span>
                <span>50%</span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Additional clients per year
              </label>
              <input
                type="number"
                value={newClientsPerYear}
                onChange={(e) => setNewClientsPerYear(Number(e.target.value))}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl p-8 text-white">
          <p className="text-emerald-100 font-medium">ANNUAL VALUE CREATED</p>
          <p className="text-5xl font-bold mt-2">{formatCurrency(calculations.totalValue)}</p>
          <div className="mt-4 space-y-2 text-emerald-100">
            <div className="flex justify-between">
              <span>Time Savings</span>
              <span className="font-medium">{formatCurrency(calculations.timeSavings)}</span>
            </div>
            <div className="flex justify-between">
              <span>Retention Value</span>
              <span className="font-medium">{formatCurrency(calculations.retentionValue)}</span>
            </div>
            <div className="flex justify-between">
              <span>New Client Value</span>
              <span className="font-medium">{formatCurrency(calculations.newClientValue)}</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-8 text-white">
          <p className="text-blue-100 font-medium">NET ROI</p>
          <p className="text-5xl font-bold mt-2">{calculations.roi.toFixed(0)}%</p>
          <div className="mt-4 space-y-2 text-blue-100">
            <div className="flex justify-between">
              <span>Total Value</span>
              <span className="font-medium">{formatCurrency(calculations.totalValue)}</span>
            </div>
            <div className="flex justify-between">
              <span>Dashboard Cost</span>
              <span className="font-medium">-{formatCurrency(calculations.dashboardCost)}</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-blue-400">
              <span>Net Benefit</span>
              <span className="font-bold">{formatCurrency(calculations.netBenefit)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Value Breakdown */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-6 border border-slate-200 text-center">
          <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-3">
            <Clock className="w-6 h-6 text-emerald-600" />
          </div>
          <p className="text-slate-500 text-sm">Time Savings</p>
          <p className="text-2xl font-bold text-emerald-600 mt-1">
            {formatCurrency(calculations.timeSavings)}
          </p>
          <p className="text-slate-400 text-xs mt-1">
            {Math.round(((hoursPerWeek - newHoursPerWeek) / hoursPerWeek) * 100)}% reduction
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200 text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <p className="text-slate-500 text-sm">Retention Value</p>
          <p className="text-2xl font-bold text-blue-600 mt-1">
            {formatCurrency(calculations.retentionValue)}
          </p>
          <p className="text-slate-400 text-xs mt-1">
            +{retentionImprovement}% improvement
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200 text-center">
          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
            <DollarSign className="w-6 h-6 text-purple-600" />
          </div>
          <p className="text-slate-500 text-sm">New Client Value</p>
          <p className="text-2xl font-bold text-purple-600 mt-1">
            {formatCurrency(calculations.newClientValue)}
          </p>
          <p className="text-slate-400 text-xs mt-1">
            +{newClientsPerYear} clients/year
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200 text-center">
          <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-3">
            <Calculator className="w-6 h-6 text-slate-600" />
          </div>
          <p className="text-slate-500 text-sm">Dashboard Cost</p>
          <p className="text-2xl font-bold text-slate-600 mt-1">
            {formatCurrency(calculations.dashboardCost)}
          </p>
          <p className="text-slate-400 text-xs mt-1">
            Annual investment
          </p>
        </div>
      </div>

      {/* Final Highlight */}
      <div className="mt-8 bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-emerald-800">
          Net Annual Benefit: {formatCurrency(calculations.netBenefit)}
        </h3>
        <p className="text-emerald-600 mt-2">
          For every $1 you invest in the dashboard, you get ${(calculations.totalValue / calculations.dashboardCost).toFixed(2)} back in value
        </p>
      </div>
    </div>
  );
}
