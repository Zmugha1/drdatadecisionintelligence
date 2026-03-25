# 🚀 Cursor IDE Prompt: Build Up At Dawn Dashboard

## Context

You are building a Proof of Concept (POC) marketing dashboard for **Up At Dawn LLC**, a digital marketing agency run by Jeffrey Kirk. This dashboard will demonstrate the value of transparent, data-driven client management and help Jeff save 8-10 hours per week on reporting.

## Goal

Build a production-ready Streamlit dashboard with:
1. Executive Dashboard (Jeff's internal view)
2. Individual Client Dashboards (client-facing view)
3. Jeff AI Bot (interactive assistant)
4. ROI Calculator (value demonstration)
5. Professional, modern UI/UX

## Tech Stack

- **Framework:** Streamlit (Python)
- **Visualization:** Plotly
- **Data:** Pandas, NumPy
- **Styling:** Custom CSS in Streamlit
- **Data Storage:** CSV files (for POC)

## Project Structure

Create this folder structure:
```
jeff_dashboard/
├── app.py                    # Main application
├── requirements.txt          # Dependencies
├── data/
│   ├── clients.csv          # Client profiles
│   ├── metrics.csv          # Monthly analytics data
│   ├── feedback.csv         # Client feedback entries
│   └── client_summary.csv   # Calculated health scores
└── .streamlit/
    └── config.toml          # Theme configuration
```

## Data Schema

### 1. clients.csv
```csv
id,name,industry,location,website,monthly_retainer,services,start_date,contact_name,contact_email,status
client_001,ABC Electric,Electrical Services,Milwaukee WI,abcelectric.com,1500,"['SEO','Google Reviews','Live Leads']",2023-06-15,Mike Johnson,mike@abcelectric.com,active
client_002,Smith Dental Care,Dental,Waukesha WI,smithdental.com,2000,"['SEO','Google Reviews']",2023-08-01,Dr. Sarah Smith,sarah@smithdental.com,active
client_003,Johnson Law Firm,Legal Services,Brookfield WI,johnsonlaw.com,2500,"['SEO','Authority Visibility','Google Reviews']",2023-03-10,David Johnson,david@johnsonlaw.com,active
client_004,Metro Plumbing,Plumbing,Milwaukee WI,metropolitanplumbing.com,1200,"['SEO','Live Leads']",2024-01-05,Tom Rodriguez,tom@metroplumbing.com,active
client_005,Green Roofing Solutions,Roofing,Racine WI,greenroofing.com,1800,"['SEO','Google Reviews','Live Leads']",2023-09-20,Lisa Green,lisa@greenroofing.com,active
client_006,Rapid Restoration,Property Restoration,Milwaukee WI,rapidrestore.com,2200,"['SEO','Authority Visibility','Google Reviews','Live Leads']",2023-05-12,Chris Williams,chris@rapidrestore.com,active
client_007,Elite HVAC Services,HVAC,Wauwatosa WI,elitehvac.com,1400,"['SEO','Google Reviews']",2024-02-01,Mark Davis,mark@elitehvac.com,active
client_008,Premier Fence Company,Fence Installation,Menomonee Falls WI,premierfence.com,1100,"['SEO','Live Leads']",2023-11-15,Jennifer Adams,jennifer@premierfence.com,attention
```

### 2. metrics.csv (12 months per client)
```csv
client_id,date,month_year,sessions,impressions,clicks,ctr,position,avg_session_duration,bounce_rate,pages_per_session,conversions,conversion_rate,review_count,avg_rating,new_reviews
client_001,2025-04-01,Apr 2025,800,15000,560,0.037,12.5,120,0.42,3.2,40,0.05,25,4.5,3
... (generate 12 months of data for each client with realistic trends)
```

### 3. feedback.csv
```csv
client_id,date,type,description,value,recorded_by
client_001,2026-01-06,lead,Got a call for $8500 electrical panel upgrade,8500,Mike Johnson
client_001,2026-01-23,lead,Referral from Google search $3800 job,3800,Mike Johnson
... (3-5 entries per client)
```

### 4. client_summary.csv (calculated)
```csv
client_id,client_name,industry,monthly_retainer,health_score,status,latest_sessions,session_trend,latest_conversions,conversion_trend,latest_rating,review_count,total_feedback_value,roi_percentage
client_001,ABC Electric,Electrical Services,1500,95,on_track,1561,18.5,116,45.0,4.7,45,18500,103
... (calculate for all 8 clients)
```

## Dashboard Pages & Features

### Page 1: Executive Dashboard ("🏠 Executive Dashboard")

**Layout:**
- Header with gradient background: "Executive Dashboard - Welcome back, Jeff!"
- 4 KPI cards in a row:
  - Total Clients (with trend)
  - Active Campaigns (with trend)
  - Monthly Revenue (with trend)
  - Avg Health Score (with trend)

**Client Performance Matrix:**
- Grid of client cards (3 columns)
- Each card shows:
  - Client name
  - Status badge (on_track/attention/action_required)
  - Industry
  - Latest sessions with trend indicator (↑/↓)
  - Health score
  - ROI percentage
- Color coding:
  - Green (#10b981) for on_track
  - Yellow (#f59e0b) for attention
  - Red (#ef4444) for action_required

**Alerts Section:**
- List clients with status = "attention" or "action_required"
- Show specific issues (sessions down X%, conversions down Y%)
- Action buttons: "View Details", "Contact Client"

**Performance Charts:**
- Line chart: Total sessions across all clients (last 12 months)
- Bar chart: Total conversions across all clients (last 12 months)

### Page 2: Client Management ("👥 Client Management")

**Client Selector:**
- Dropdown in sidebar to select client
- Shows "All Clients" option

**Individual Client View:**
- Header with client name, industry, location, monthly retainer
- 4 KPI cards:
  - Website Visitors (sessions with trend)
  - Google Clicks (with trend)
  - Avg Time on Site (with trend)
  - Conversions (with trend)

**Tabs:**
1. **📈 Performance Tab**
   - Line chart: Sessions over time (12 months)
   - Bar chart: Conversions over time
   - 3-column layout:
     - Pie chart: Bounce rate
     - Line chart: Pages per session
     - Bar chart: Avg session duration

2. **🔍 Search Visibility Tab**
   - Dual-axis line chart: Impressions + Clicks
   - Line chart: CTR over time
   - Area chart: Average position

3. **⭐ Reviews Tab**
   - 4 metric cards: Avg Rating, Total Reviews, New This Month, Response Rate
   - Line chart: Review count + Rating trend

4. **💬 Feedback Tab**
   - Summary metrics: Total entries, Attributed Revenue, ROI
   - List of feedback entries with:
     - Type icon (💰 for lead/sale, ⚠️ for complaint)
     - Date
     - Description
     - Dollar value
     - Recorded by
   - "Add New Feedback" button

**All Clients List View:**
- Table showing all clients
- Columns: Name, Status, Monthly Retainer, Health Score, ROI
- Status badges with colors

### Page 3: Jeff AI Bot ("🤖 Jeff AI Bot")

**Header:**
- "Jeff AI Bot - Your intelligent marketing assistant"
- List of capabilities

**Quick Action Buttons (4 columns):**
- 📊 Performance Summary
- ⚠️ Who Needs Attention?
- 🏆 Best ROI Clients
- 💡 Weekly Focus

**Chat Interface:**
- Display chat history (user messages + bot responses)
- Text input for custom questions
- Quick question suggestions

**Bot Responses (pre-written):**

**Performance Summary:**
```
Here's your performance summary:

📈 Overall Health: 79/100 (Good)
👥 Total Clients: 8
✅ On Track: 5 clients
⚠️ Needs Attention: 1 client
🔴 Action Required: 2 clients

Top Performers:
• Elite HVAC Services (Health: 95, ROI: 301%)
• Rapid Restoration (Health: 95, ROI: 153%)
• Johnson Law Firm (Health: 95, ROI: 134%)

Needs Attention:
• Premier Fence Company (Health: 35) - Sessions down 12%
• Green Roofing Solutions (Health: 55) - Conversions declining
```

**Who Needs Attention:**
```
⚠️ Clients Needing Attention:

🔴 Premier Fence Company (Health: 35)
   • Sessions: 550 (-12.0%)
   • Conversions: 17 (-15.0%)
   • Industry: Fence Installation

🔴 Green Roofing Solutions (Health: 55)
   • Sessions: 700 (-5.0%)
   • Conversions: 21 (-8.0%)
   • Industry: Roofing

Recommended Actions:
1. Schedule check-in calls with these clients
2. Review their recent campaign performance
3. Consider strategy adjustments
```

**Best ROI Clients:**
```
🏆 Top ROI Clients:

1. Elite HVAC Services
   • ROI: 301%
   • Revenue Attributed: $42,000
   • Monthly Retainer: $1,400
   • Health Score: 95/100

2. Rapid Restoration
   • ROI: 153%
   • Revenue Attributed: $40,400
   • Monthly Retainer: $2,200
   • Health Score: 95/100

3. Johnson Law Firm
   • ROI: 134%
   • Revenue Attributed: $40,200
   • Monthly Retainer: $2,500
   • Health Score: 95/100

Key Insight: Elite HVAC Services is delivering exceptional ROI at 301%! 
Consider using them as a case study for new business.
```

**Weekly Focus:**
```
💡 This Week's Focus Areas:

1. Client Retention (High Priority)
   • Premier Fence Company needs immediate attention (Health: 35)
   • Schedule strategy call to address declining performance
   • Consider campaign adjustments or additional services

2. Growth Opportunities
   • Elite HVAC Services is crushing it (ROI: 301%)
   • Ask for testimonial and case study
   • Explore upsell opportunities

3. Team Efficiency
   • Your team can now make data-driven decisions independently
   • Review dashboard daily instead of creating manual reports
   • Use saved time for business development

4. Client Communication
   • 3 clients haven't provided feedback in 30+ days
   • Reach out and encourage dashboard usage
   • Share wins and insights proactively

Time Savings This Week: ~10 hours (no manual reporting needed!)

You've got this, Jeff! 🚀
```

### Page 4: ROI Calculator ("📊 ROI Calculator")

**Current State Section:**
- 3 input fields:
  - Hours/week on reporting (default: 11)
  - Your hourly value $ (default: 150)
  - Number of clients (default: 8)
- Calculate and display: Current annual cost (hours × value × 52)
- Red highlight box showing cost

**With Dashboard Section:**
- 3 input fields:
  - New hours/week (default: 2)
  - Retention improvement % (slider: 0-50, default: 10)
  - Additional clients/year (default: 2)
- Calculate:
  - New annual cost
  - Time savings
  - Retention value
  - New client value
  - Total value

**Results Display:**
- Two large highlight boxes side by side:
  - Green: "ANNUAL VALUE CREATED" with dollar amount
  - Blue: "NET ROI" with percentage
- 4 metric cards showing breakdown:
  - Time Savings
  - Retention Value
  - New Client Value
  - Dashboard Cost
- Final green box: "Net Annual Benefit" with total

### Page 5: Settings ("⚙️ Settings")

**Tabs:**
1. **🔌 Integrations**
   - List of data sources with status:
     - Google Analytics 4 (Connected)
     - Google Search Console (Connected)
     - Google Business Profile (Partial)
     - CallRail (Not Connected)
   - Configure/Connect buttons

2. **👥 Team Management**
   - List team members with roles
   - Add Team Member button

3. **🔔 Notifications**
   - Checkboxes for:
     - Traffic drop alerts (>20%)
     - Conversion spike alerts (>50%)
     - Health score drops below 60
     - Weekly summary email
     - Monthly performance report
     - New client feedback notifications

## UI/UX Requirements

### Color Scheme
```css
Primary Blue: #3b82f6
Primary Dark: #1e3a8a
Success Green: #10b981
Warning Yellow: #f59e0b
Danger Red: #ef4444
Background: #f8fafc
Card Background: #ffffff
Text Primary: #1f2937
Text Secondary: #6b7280
```

### Typography
- Font family: Inter, sans-serif
- KPI numbers: 36px, bold
- KPI labels: 12px, uppercase, letter-spacing
- Section headers: 24px, bold
- Body text: 14px

### Card Styling
- Background: white
- Border: 1px solid #e5e7eb
- Border radius: 12px
- Padding: 24px
- Shadow: 0 1px 3px rgba(0,0,0,0.1)
- Hover: transform translateY(-2px), enhanced shadow

### Layout
- Max width: 1400px
- Grid: 12-column
- Gutter: 24px
- Responsive: Stack on mobile

## Session State Management

Use st.session_state for:
- chat_history (list of messages)
- selected_client (current client object)

## Custom CSS

Add this CSS at the top of app.py:
```python
st.markdown("""
<style>
    .main { background-color: #f8fafc; }
    .kpi-card { background: white; padding: 1.5rem; border-radius: 12px; 
                box-shadow: 0 1px 3px rgba(0,0,0,0.1); border: 1px solid #e5e7eb; }
    .kpi-value { font-size: 2.5rem; font-weight: 700; color: #1f2937; }
    .kpi-label { font-size: 0.875rem; color: #6b7280; text-transform: uppercase; }
    .trend-up { color: #10b981; font-weight: 600; }
    .trend-down { color: #ef4444; font-weight: 600; }
    .status-on_track { background-color: #d1fae5; color: #065f46; 
                       padding: 0.25rem 0.75rem; border-radius: 9999px; font-weight: 600; }
    .status-attention { background-color: #fef3c7; color: #92400e; 
                        padding: 0.25rem 0.75rem; border-radius: 9999px; font-weight: 600; }
    .status-action_required { background-color: #fee2e2; color: #991b1b; 
                              padding: 0.25rem 0.75rem; border-radius: 9999px; font-weight: 600; }
</style>
""", unsafe_allow_html=True)
```

## Data Loading

```python
@st.cache_data
def load_data():
    clients = pd.read_csv('data/clients.csv')
    metrics = pd.read_csv('data/metrics.csv')
    feedback = pd.read_csv('data/feedback.csv')
    summary = pd.read_csv('data/client_summary.csv')
    
    metrics['date'] = pd.to_datetime(metrics['date'])
    feedback['date'] = pd.to_datetime(feedback['date'])
    
    return clients, metrics, feedback, summary
```

## Navigation

Use st.sidebar.radio for navigation:
```python
page = st.sidebar.radio(
    "Navigation",
    ["🏠 Executive Dashboard", "👥 Client Management", "🤖 Jeff AI Bot", 
     "📊 ROI Calculator", "⚙️ Settings"]
)
```

## Client Selector in Sidebar

```python
st.sidebar.markdown("### Quick Client View")
selected_client_name = st.sidebar.selectbox(
    "Select a client",
    ["All Clients"] + list(clients_df['name'].values)
)
```

## Implementation Order

1. Create folder structure
2. Generate fake data (8 clients, 12 months each)
3. Build app.py with navigation
4. Implement Executive Dashboard
5. Implement Client Management
6. Implement Jeff AI Bot
7. Implement ROI Calculator
8. Implement Settings
9. Add custom CSS styling
10. Test all features
11. Deploy

## Success Criteria

- [ ] All 8 clients display with correct data
- [ ] Health scores calculate correctly
- [ ] Charts render with Plotly
- [ ] AI Bot responds to all quick actions
- [ ] ROI Calculator shows 439% ROI
- [ ] Mobile responsive
- [ ] Professional appearance
- [ ] No errors or warnings

## Notes

- Use realistic fake data that shows trends (some up, some down)
- Make Premier Fence and Green Roofing have declining trends
- Make Elite HVAC have exceptional performance (301% ROI)
- Use industry-appropriate metrics for each client type
- Ensure all dollar values have proper formatting ($X,XXX)
- All percentages should show + or - sign
- Charts should be interactive (hover tooltips)

Build this step by step, testing each component as you go. Start with the data generation, then the Executive Dashboard, then individual features.
