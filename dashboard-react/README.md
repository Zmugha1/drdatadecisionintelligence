# 🌅 Up At Dawn - Professional Marketing Dashboard

> **A production-ready React dashboard for digital marketing agencies.**

![React](https://img.shields.io/badge/React-18.2-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-5.1-646CFF?logo=vite)

---

## ✨ Features

### 📊 Executive Dashboard
- **Client Health Matrix** - Visual overview of all clients with status indicators
- **KPI Cards** - Key metrics with trend indicators and subtle icon badges
- **Performance Charts** - Interactive line and bar charts
- **Alerts & Action Items** - Proactive notifications for clients needing attention

### 👥 Client Intelligence
- **Individual Client Dashboards** - Deep dive into each client's performance
- **Performance Analytics** - Sessions, conversions, engagement metrics
- **Search Visibility** - Impressions, clicks, CTR tracking
- **Review Monitoring** - Google reviews and ratings
- **Feedback Loop** - Client-reported leads and revenue attribution

### 🤖 Jeff AI Assistant
- **Quick Actions** - Performance summary, attention alerts, ROI analysis
- **Natural Language Queries** - Ask questions about any client
- **Smart Recommendations** - Weekly focus areas and action items

### 📈 ROI Calculator
- **Time Savings Analysis** - Calculate hours reclaimed
- **Retention Value** - Measure client retention improvement
- **New Business Value** - Track new client acquisition
- **Net ROI Display** - Demonstrate 439%+ return on investment

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/jeff-dashboard.git
cd jeff-dashboard

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

### Build for Production

```bash
npm run build
```

---

## 📁 Project Structure

```
jeff-dashboard/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Sidebar.tsx
│   │   ├── KPICard.tsx
│   │   ├── ClientCard.tsx
│   │   ├── StatusBadge.tsx
│   │   └── charts/          # Chart components
│   │       ├── LineChart.tsx
│   │       ├── BarChart.tsx
│   │       └── DonutChart.tsx
│   ├── pages/               # Page components
│   │   ├── ExecutiveDashboard.tsx
│   │   ├── ClientIntelligence.tsx
│   │   ├── AIAssistant.tsx
│   │   ├── ROICalculator.tsx
│   │   └── Settings.tsx
│   ├── data/                # Mock data
│   │   └── clients.ts
│   ├── types/               # TypeScript types
│   │   └── index.ts
│   ├── lib/                 # Utility functions
│   │   └── utils.ts
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

---

## 🎨 Design System

### Colors
- **Primary Blue:** `#3b82f6`
- **Success Green:** `#10b981`
- **Warning Amber:** `#f59e0b`
- **Danger Red:** `#ef4444`
- **Sidebar Dark:** `#0f172a`
- **Background:** `#f8fafc`

### Typography
- **Font Family:** Inter
- **Headings:** 600-700 weight
- **Body:** 400 weight

### Components
- **Cards:** White background, subtle shadow, rounded-xl
- **Badges:** Status indicators with color coding
- **Charts:** Interactive with tooltips

---

## 📊 Data Model

### Client
```typescript
interface Client {
  id: string;
  name: string;
  industry: string;
  location: string;
  monthlyRetainer: number;
  services: string[];
  status: 'active' | 'attention' | 'action_required';
}
```

### ClientSummary
```typescript
interface ClientSummary {
  clientId: string;
  clientName: string;
  healthScore: number;
  status: 'on_track' | 'attention' | 'action_required';
  latestSessions: number;
  sessionTrend: number;
  roiPercentage: number;
}
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI Framework |
| **TypeScript** | Type Safety |
| **Vite** | Build Tool |
| **Tailwind CSS** | Styling |
| **Recharts** | Data Visualization |
| **Lucide React** | Icons |
| **clsx + tailwind-merge** | Class Utilities |

---

## 🎯 Demo Scenarios

### 1. Morning Routine (2 minutes)
1. Open Executive Dashboard
2. Scan Client Health Matrix
3. Check Alerts section
4. Review performance charts

### 2. Client Call (5 minutes)
1. Navigate to Client Intelligence
2. Select client
3. Show performance metrics
4. Display feedback and ROI

### 3. ROI Discussion (3 minutes)
1. Open ROI Calculator
2. Adjust inputs
3. Show value breakdown
4. Demonstrate 439% ROI

---

## 💰 ROI Demonstrated

| Value Category | Annual Amount |
|----------------|---------------|
| Time Savings | $70,200 |
| Client Retention | $22,500 |
| New Business | $30,000 |
| Team Efficiency | $39,000 |
| **Total Value** | **$161,700** |
| **Investment** | $30,000 |
| **Net Benefit** | **$131,700** |
| **ROI** | **439%** |

---

## 📝 Customization

### Adding New Clients
Edit `src/data/clients.ts` and add new entries to the `clients` array.

### Changing Colors
Edit `tailwind.config.js` and modify the color palette.

### Adding New Metrics
1. Update the `MonthlyMetrics` interface in `src/types/index.ts`
2. Add data generation logic in `src/data/clients.ts`
3. Update components to display new metrics

---

## 🚢 Deployment

### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the dist folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy the dist folder to GitHub Pages
```

---

## 📄 License

MIT License - Created for demonstration purposes for Up At Dawn LLC.

---

<p align="center">
  <strong>Built with ❤️ for Up At Dawn LLC</strong>
</p>

<p align="center">
  <em>Turning data into dawn-breaking results</em>
</p>
