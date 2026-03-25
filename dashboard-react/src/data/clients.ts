import { Client, ClientSummary, MonthlyMetrics, ClientFeedback } from '../types';

export const clients: Client[] = [
  {
    id: 'client_001',
    name: 'ABC Electric',
    industry: 'Electrical Services',
    location: 'Milwaukee, WI',
    website: 'abcelectric.com',
    monthlyRetainer: 1500,
    services: ['SEO', 'Google Reviews', 'Live Leads'],
    startDate: '2023-06-15',
    contactName: 'Mike Johnson',
    contactEmail: 'mike@abcelectric.com',
    status: 'active'
  },
  {
    id: 'client_002',
    name: 'Smith Dental Care',
    industry: 'Dental',
    location: 'Waukesha, WI',
    website: 'smithdental.com',
    monthlyRetainer: 2000,
    services: ['SEO', 'Google Reviews'],
    startDate: '2023-08-01',
    contactName: 'Dr. Sarah Smith',
    contactEmail: 'sarah@smithdental.com',
    status: 'active'
  },
  {
    id: 'client_003',
    name: 'Johnson Law Firm',
    industry: 'Legal Services',
    location: 'Brookfield, WI',
    website: 'johnsonlaw.com',
    monthlyRetainer: 2500,
    services: ['SEO', 'Authority Visibility', 'Google Reviews'],
    startDate: '2023-03-10',
    contactName: 'David Johnson',
    contactEmail: 'david@johnsonlaw.com',
    status: 'active'
  },
  {
    id: 'client_004',
    name: 'Metro Plumbing',
    industry: 'Plumbing',
    location: 'Milwaukee, WI',
    website: 'metroplumbing.com',
    monthlyRetainer: 1200,
    services: ['SEO', 'Live Leads'],
    startDate: '2024-01-05',
    contactName: 'Tom Rodriguez',
    contactEmail: 'tom@metroplumbing.com',
    status: 'active'
  },
  {
    id: 'client_005',
    name: 'Green Roofing',
    industry: 'Roofing',
    location: 'Racine, WI',
    website: 'greenroofing.com',
    monthlyRetainer: 1800,
    services: ['SEO', 'Google Reviews', 'Live Leads'],
    startDate: '2023-09-20',
    contactName: 'Lisa Green',
    contactEmail: 'lisa@greenroofing.com',
    status: 'attention'
  },
  {
    id: 'client_006',
    name: 'Rapid Restoration',
    industry: 'Property Restoration',
    location: 'Milwaukee, WI',
    website: 'rapidrestore.com',
    monthlyRetainer: 2200,
    services: ['SEO', 'Authority Visibility', 'Google Reviews', 'Live Leads'],
    startDate: '2023-05-12',
    contactName: 'Chris Williams',
    contactEmail: 'chris@rapidrestore.com',
    status: 'active'
  },
  {
    id: 'client_007',
    name: 'Elite HVAC',
    industry: 'HVAC',
    location: 'Wauwatosa, WI',
    website: 'elitehvac.com',
    monthlyRetainer: 1400,
    services: ['SEO', 'Google Reviews'],
    startDate: '2024-02-01',
    contactName: 'Mark Davis',
    contactEmail: 'mark@elitehvac.com',
    status: 'active'
  },
  {
    id: 'client_008',
    name: 'Premier Fence',
    industry: 'Fence Installation',
    location: 'Menomonee Falls, WI',
    website: 'premierfence.com',
    monthlyRetainer: 1100,
    services: ['SEO', 'Live Leads'],
    startDate: '2023-11-15',
    contactName: 'Jennifer Adams',
    contactEmail: 'jennifer@premierfence.com',
    status: 'action_required'
  }
];

export const clientSummaries: ClientSummary[] = [
  {
    clientId: 'client_001',
    clientName: 'ABC Electric',
    industry: 'Electrical Services',
    monthlyRetainer: 1500,
    healthScore: 92,
    status: 'on_track',
    latestSessions: 1561,
    sessionTrend: 18.5,
    latestConversions: 116,
    conversionTrend: 45.0,
    latestRating: 4.7,
    reviewCount: 45,
    totalFeedbackValue: 18500,
    roiPercentage: 103
  },
  {
    clientId: 'client_002',
    clientName: 'Smith Dental Care',
    industry: 'Dental',
    monthlyRetainer: 2000,
    healthScore: 88,
    status: 'on_track',
    latestSessions: 2340,
    sessionTrend: 12.3,
    latestConversions: 89,
    conversionTrend: 28.0,
    latestRating: 4.8,
    reviewCount: 67,
    totalFeedbackValue: 25400,
    roiPercentage: 106
  },
  {
    clientId: 'client_003',
    clientName: 'Johnson Law Firm',
    industry: 'Legal Services',
    monthlyRetainer: 2500,
    healthScore: 94,
    status: 'on_track',
    latestSessions: 1180,
    sessionTrend: 15.2,
    latestConversions: 47,
    conversionTrend: 32.0,
    latestRating: 4.9,
    reviewCount: 38,
    totalFeedbackValue: 40200,
    roiPercentage: 134
  },
  {
    clientId: 'client_004',
    clientName: 'Metro Plumbing',
    industry: 'Plumbing',
    monthlyRetainer: 1200,
    healthScore: 76,
    status: 'on_track',
    latestSessions: 1750,
    sessionTrend: 8.5,
    latestConversions: 52,
    conversionTrend: 15.0,
    latestRating: 4.5,
    reviewCount: 29,
    totalFeedbackValue: 15800,
    roiPercentage: 110
  },
  {
    clientId: 'client_005',
    clientName: 'Green Roofing',
    industry: 'Roofing',
    monthlyRetainer: 1800,
    healthScore: 58,
    status: 'attention',
    latestSessions: 700,
    sessionTrend: -5.2,
    latestConversions: 21,
    conversionTrend: -8.0,
    latestRating: 4.4,
    reviewCount: 33,
    totalFeedbackValue: 22000,
    roiPercentage: 102
  },
  {
    clientId: 'client_006',
    clientName: 'Rapid Restoration',
    industry: 'Property Restoration',
    monthlyRetainer: 2200,
    healthScore: 91,
    status: 'on_track',
    latestSessions: 980,
    sessionTrend: 22.1,
    latestConversions: 39,
    conversionTrend: 41.0,
    latestRating: 4.8,
    reviewCount: 42,
    totalFeedbackValue: 40400,
    roiPercentage: 153
  },
  {
    clientId: 'client_007',
    clientName: 'Elite HVAC',
    industry: 'HVAC',
    monthlyRetainer: 1400,
    healthScore: 96,
    status: 'on_track',
    latestSessions: 2100,
    sessionTrend: 28.5,
    latestConversions: 78,
    conversionTrend: 52.0,
    latestRating: 4.9,
    reviewCount: 51,
    totalFeedbackValue: 42000,
    roiPercentage: 301
  },
  {
    clientId: 'client_008',
    clientName: 'Premier Fence',
    industry: 'Fence Installation',
    monthlyRetainer: 1100,
    healthScore: 42,
    status: 'action_required',
    latestSessions: 550,
    sessionTrend: -12.5,
    latestConversions: 17,
    conversionTrend: -15.0,
    latestRating: 4.2,
    reviewCount: 24,
    totalFeedbackValue: 7200,
    roiPercentage: 54
  }
];

export const generateMonthlyMetrics = (): MonthlyMetrics[] => {
  const metrics: MonthlyMetrics[] = [];
  const months = ['Apr 2024', 'May 2024', 'Jun 2024', 'Jul 2024', 'Aug 2024', 'Sep 2024', 'Oct 2024', 'Nov 2024', 'Dec 2024', 'Jan 2025', 'Feb 2025', 'Mar 2025'];
  
  const baseMetrics: Record<string, { sessions: number; impressions: number; ctr: number }> = {
    'client_001': { sessions: 800, impressions: 15000, ctr: 0.037 },
    'client_002': { sessions: 1200, impressions: 25000, ctr: 0.045 },
    'client_003': { sessions: 600, impressions: 8000, ctr: 0.058 },
    'client_004': { sessions: 900, impressions: 18000, ctr: 0.042 },
    'client_005': { sessions: 700, impressions: 12000, ctr: 0.038 },
    'client_006': { sessions: 500, impressions: 10000, ctr: 0.048 },
    'client_007': { sessions: 850, impressions: 16000, ctr: 0.040 },
    'client_008': { sessions: 550, impressions: 9000, ctr: 0.043 }
  };

  const growthRates: Record<string, number> = {
    'client_001': 0.05,
    'client_002': 0.04,
    'client_003': 0.06,
    'client_004': 0.03,
    'client_005': -0.02,
    'client_006': 0.07,
    'client_007': 0.09,
    'client_008': -0.03
  };

  clients.forEach(client => {
    const base = baseMetrics[client.id];
    const growth = growthRates[client.id];
    
    months.forEach((month, index) => {
      const growthFactor = Math.pow(1 + growth, index) * (0.95 + Math.random() * 0.1);
      const sessions = Math.round(base.sessions * growthFactor);
      const impressions = Math.round(base.impressions * growthFactor);
      const clicks = Math.round(sessions * 0.7);
      const ctr = clicks / impressions;
      
      metrics.push({
        clientId: client.id,
        date: `2024-${String(index + 4).padStart(2, '0')}-01`,
        monthYear: month,
        sessions,
        impressions,
        clicks,
        ctr: Math.round(ctr * 10000) / 10000,
        position: 8 + Math.random() * 10,
        avgSessionDuration: Math.round(90 + Math.random() * 90),
        bounceRate: Math.round((0.35 + Math.random() * 0.2) * 100) / 100,
        pagesPerSession: Math.round((2.5 + Math.random() * 2) * 10) / 10,
        conversions: Math.round(sessions * (0.03 + Math.random() * 0.05)),
        conversionRate: Math.round((0.03 + Math.random() * 0.05) * 1000) / 1000,
        reviewCount: Math.round(20 + index * 2 + Math.random() * 4),
        avgRating: Math.round((4.3 + Math.random() * 0.6) * 10) / 10,
        newReviews: Math.round(2 + Math.random() * 6)
      });
    });
  });
  
  return metrics;
};

export const generateFeedback = (): ClientFeedback[] => {
  const feedback: ClientFeedback[] = [];
  
  const feedbackTemplates: { type: 'lead' | 'sale' | 'complaint'; description: string; value: number }[] = [
    { type: 'lead', description: 'Electrical panel upgrade inquiry', value: 8500 },
    { type: 'sale', description: 'Commercial contract signed', value: 12000 },
    { type: 'lead', description: 'Emergency service call', value: 450 },
    { type: 'sale', description: 'Website lead converted', value: 6200 },
    { type: 'lead', description: 'Google search referral', value: 3800 },
    { type: 'complaint', description: 'Contact form issue reported', value: 0 },
    { type: 'sale', description: 'Multiple service requests', value: 15000 },
    { type: 'lead', description: 'New patient appointment', value: 2500 },
    { type: 'sale', description: 'Legal consultation booked', value: 3500 },
    { type: 'lead', description: 'Roof repair estimate', value: 8900 }
  ];
  
  clients.forEach(client => {
    const numFeedback = 3 + Math.floor(Math.random() * 3);
    for (let i = 0; i < numFeedback; i++) {
      const template = feedbackTemplates[Math.floor(Math.random() * feedbackTemplates.length)];
      const daysAgo = 5 + Math.floor(Math.random() * 85);
      const date = new Date();
      date.setDate(date.getDate() - daysAgo);
      
      feedback.push({
        clientId: client.id,
        date: date.toISOString().split('T')[0],
        type: template.type,
        description: template.description,
        value: template.value,
        recordedBy: client.contactName
      });
    }
  });
  
  return feedback.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const monthlyMetrics = generateMonthlyMetrics();
export const clientFeedback = generateFeedback();
