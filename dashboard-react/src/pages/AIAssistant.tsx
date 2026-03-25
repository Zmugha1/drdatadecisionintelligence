import { useState } from 'react';
import { cn, formatCurrency, formatNumber } from '../lib/utils';
import { clientSummaries } from '../data/clients';
import { Send, Sparkles, TrendingUp, AlertTriangle, Trophy, Lightbulb, User } from 'lucide-react';

interface Message {
  role: 'user' | 'bot';
  content: string;
}

export function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    
    // Generate response based on input
    const lowerInput = input.toLowerCase();
    let response = '';
    
    if (lowerInput.includes('performance') || lowerInput.includes('summary')) {
      const avgHealth = Math.round(clientSummaries.reduce((sum, c) => sum + c.healthScore, 0) / clientSummaries.length);
      const onTrack = clientSummaries.filter(c => c.status === 'on_track').length;
      const attention = clientSummaries.filter(c => c.status === 'attention').length;
      const actionRequired = clientSummaries.filter(c => c.status === 'action_required').length;
      
      response = `## Performance Summary

**Overall Health:** ${avgHealth}/100 (Good)

**Client Breakdown:**
• On Track: ${onTrack} clients
• Needs Attention: ${attention} clients  
• Action Required: ${actionRequired} clients

**Top Performers:**
1. Elite HVAC - ROI: 301%, Health: 96
2. Rapid Restoration - ROI: 153%, Health: 91
3. Johnson Law Firm - ROI: 134%, Health: 94

**Need Attention:**
• Premier Fence (Health: 42) - Sessions down 12.5%
• Green Roofing (Health: 58) - Conversions declining`;
    } else if (lowerInput.includes('attention') || lowerInput.includes('problem')) {
      const attentionClients = clientSummaries.filter(c => c.status === 'attention' || c.status === 'action_required');
      
      response = `## Clients Needing Attention

${attentionClients.map(c => `**${c.clientName}** (Health: ${c.healthScore})
• Sessions: ${formatNumber(c.latestSessions)} (${c.sessionTrend > 0 ? '+' : ''}${c.sessionTrend}%)
• Conversions: ${c.latestConversions} (${c.conversionTrend > 0 ? '+' : ''}${c.conversionTrend}%)
• Industry: ${c.industry}
`).join('\n')}

**Recommended Actions:**
1. Schedule check-in calls with these clients
2. Review their recent campaign performance
3. Consider strategy adjustments or additional services`;
    } else if (lowerInput.includes('roi') || lowerInput.includes('best')) {
      const topRoi = [...clientSummaries].sort((a, b) => b.roiPercentage - a.roiPercentage).slice(0, 5);
      
      response = `## Top ROI Clients

${topRoi.map((c, i) => `${i + 1}. **${c.clientName}**
   • ROI: **${c.roiPercentage}%**
   • Revenue Attributed: ${formatCurrency(c.totalFeedbackValue)}
   • Monthly Retainer: ${formatCurrency(c.monthlyRetainer)}
   • Health Score: ${c.healthScore}/100`).join('\n\n')}

**Key Insight:** Elite HVAC is delivering exceptional ROI at 301%! Consider using them as a case study for new business development.`;
    } else if (lowerInput.includes('focus') || lowerInput.includes('week') || lowerInput.includes('recommend')) {
      response = `## This Week's Focus Areas

**1. Client Retention (High Priority)**
   • Premier Fence needs immediate attention (Health: 42)
   • Schedule strategy call to address declining performance
   • Consider campaign adjustments or additional services

**2. Growth Opportunities**
   • Elite HVAC (301% ROI) - ask for testimonial and case study
   • Explore upsell opportunities with top performers

**3. Team Efficiency**
   • Your team can now make data-driven decisions independently
   • Review dashboard daily instead of creating manual reports
   • Use saved time for business development

**4. Client Communication**
   • 3 clients haven't provided feedback in 30+ days
   • Reach out and encourage dashboard usage
   • Share wins and insights proactively

**Time Savings This Week:** ~10 hours (no manual reporting needed!)

You've got this, Jeff! 🚀`;
    } else if (lowerInput.includes('abc') || lowerInput.includes('electric')) {
      const client = clientSummaries.find(c => c.clientName === 'ABC Electric');
      if (client) {
        response = `## ABC Electric Performance

**Current Metrics:**
• Sessions: ${formatNumber(client.latestSessions)} (${client.sessionTrend > 0 ? '+' : ''}${client.sessionTrend}%)
• Conversions: ${client.latestConversions} (${client.conversionTrend > 0 ? '+' : ''}${client.conversionTrend}%)
• Health Score: ${client.healthScore}/100
• ROI: ${client.roiPercentage}%

**Google Search Performance:**
• Impressions: ${formatNumber(18500)}
• Clicks: ${formatNumber(1092)}
• CTR: 5.9%
• Avg Position: 11.2

**Status:** ✅ On Track - Performing well!`;
      }
    } else {
      response = `I'm here to help! Try asking me:

• "Show me a performance summary"
• "Which clients need attention?"
• "Who has the best ROI?"
• "What should I focus on this week?"
• "How is [client name] performing?"

Or use the quick action buttons above!`;
    }
    
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', content: response }]);
    }, 500);
    
    setInput('');
  };

  const handleQuickAction = (action: string) => {
    setInput(action);
    setTimeout(() => handleSend(), 100);
  };

  return (
    <div className="p-8 animate-fade-in h-[calc(100vh-64px)] flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Jeff AI Assistant</h1>
            <p className="text-slate-500">Your intelligent marketing assistant</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <button
          onClick={() => handleQuickAction('Show me a performance summary')}
          className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all text-left"
        >
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <p className="font-medium text-slate-900">Performance</p>
            <p className="text-sm text-slate-500">Summary</p>
          </div>
        </button>

        <button
          onClick={() => handleQuickAction('Which clients need attention?')}
          className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-amber-500 hover:shadow-md transition-all text-left"
        >
          <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <p className="font-medium text-slate-900">Who Needs</p>
            <p className="text-sm text-slate-500">Attention</p>
          </div>
        </button>

        <button
          onClick={() => handleQuickAction('Who has the best ROI?')}
          className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all text-left"
        >
          <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
            <Trophy className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <p className="font-medium text-slate-900">Best ROI</p>
            <p className="text-sm text-slate-500">Clients</p>
          </div>
        </button>

        <button
          onClick={() => handleQuickAction('What should I focus on this week?')}
          className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-purple-500 hover:shadow-md transition-all text-left"
        >
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
            <Lightbulb className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <p className="font-medium text-slate-900">Weekly</p>
            <p className="text-sm text-slate-500">Focus</p>
          </div>
        </button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.length === 0 && (
            <div className="text-center text-slate-400 py-12">
              <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg">Ask Jeff AI anything about your clients</p>
              <p className="text-sm mt-2">Try: "Show me performance summary" or "Who needs attention?"</p>
            </div>
          )}
          
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={cn(
                'flex gap-3',
                msg.role === 'user' ? 'justify-end' : 'justify-start'
              )}
            >
              {msg.role === 'bot' && (
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              )}
              <div
                className={cn(
                  'max-w-[80%] rounded-2xl p-4 whitespace-pre-wrap',
                  msg.role === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-800'
                )}
              >
                {msg.content.split('\n').map((line, i) => {
                  if (line.startsWith('## ')) {
                    return <h3 key={i} className="text-lg font-bold mb-2">{line.replace('## ', '')}</h3>;
                  }
                  if (line.startsWith('**') && line.endsWith('**')) {
                    return <p key={i} className="font-semibold mt-2">{line.replace(/\*\*/g, '')}</p>;
                  }
                  if (line.startsWith('• ')) {
                    return <p key={i} className="ml-4">{line}</p>;
                  }
                  if (line.startsWith('1.') || line.startsWith('2.') || line.startsWith('3.') || line.startsWith('4.')) {
                    return <p key={i} className="ml-2 font-medium">{line}</p>;
                  }
                  return line ? <p key={i}>{line}</p> : <br key={i} />;
                })}
              </div>
              {msg.role === 'user' && (
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="border-t border-slate-200 p-4">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask Jeff AI..."
              className="flex-1 px-4 py-3 bg-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
