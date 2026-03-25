# 🚀 Cursor Prompt: Build Up At Dawn Dashboard (Short Version)

## Task

Build a professional Streamlit marketing dashboard for Up At Dawn LLC (digital marketing agency) with fake client data demonstrating 439% ROI.

## Files to Create

### 1. data/clients.csv (8 clients)
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

### 2. data/metrics.csv (Generate 12 months per client)
Fields: client_id, date, month_year, sessions, impressions, clicks, ctr, position, avg_session_duration, bounce_rate, pages_per_session, conversions, conversion_rate, review_count, avg_rating, new_reviews

- Generate realistic data with trends
- Premier Fence: declining trend (sessions down 12%)
- Elite HVAC: exceptional growth
- Others: moderate growth (5-15%)

### 3. data/feedback.csv (3-5 entries per client)
Fields: client_id, date, type, description, value, recorded_by

Types: lead, sale, complaint
Values: $0 to $15,000

### 4. data/client_summary.csv (Calculate from metrics)
Fields: client_id, client_name, industry, monthly_retainer, health_score, status, latest_sessions, session_trend, latest_conversions, conversion_trend, latest_rating, review_count, total_feedback_value, roi_percentage

Health Score Formula:
- Base: 70
- +15 if session_trend > 5%
- -20 if session_trend < -5%
- +10 if conversion_trend > 5%
- -15 if conversion_trend < -10%
- Clamp to 0-100

Status:
- health_score >= 80: "on_track"
- health_score >= 60: "attention"
- health_score < 60: "action_required"

### 5. app.py (Main Application)

Structure:
```python
import streamlit as st
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
from datetime import datetime

# Page config
st.set_page_config(page_title="Up At Dawn Dashboard", layout="wide")

# Custom CSS
st.markdown("""<style>
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
</style>""", unsafe_allow_html=True)

# Load data
@st.cache_data
def load_data():
    clients = pd.read_csv('data/clients.csv')
    metrics = pd.read_csv('data/metrics.csv')
    feedback = pd.read_csv('data/feedback.csv')
    summary = pd.read_csv('data/client_summary.csv')
    metrics['date'] = pd.to_datetime(metrics['date'])
    feedback['date'] = pd.to_datetime(feedback['date'])
    return clients, metrics, feedback, summary

clients_df, metrics_df, feedback_df, summary_df = load_data()

# Initialize session state
if 'chat_history' not in st.session_state:
    st.session_state.chat_history = []

# Sidebar
st.sidebar.title("🌅 Up At Dawn")
page = st.sidebar.radio("Navigation", [
    "🏠 Executive Dashboard", 
    "👥 Client Management", 
    "🤖 Jeff AI Bot", 
    "📊 ROI Calculator", 
    "⚙️ Settings"
])

st.sidebar.markdown("---")
st.sidebar.markdown("### Quick Client View")
selected_client = st.sidebar.selectbox("Select client", ["All Clients"] + list(clients_df['name']))

# Page routing
if page == "🏠 Executive Dashboard":
    # Header
    st.markdown("""
    <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); 
                padding: 2rem; border-radius: 12px; color: white; margin-bottom: 2rem;">
        <h1>Executive Dashboard</h1>
        <p>Welcome back, Jeff! Here's what's happening across all your clients.</p>
    </div>
    """, unsafe_allow_html=True)
    
    # KPI Cards
    col1, col2, col3, col4 = st.columns(4)
    with col1:
        st.markdown(f'<div class="kpi-card"><div class="kpi-label">Total Clients</div><div class="kpi-value">{len(clients_df)}</div><div class="trend-up">↑ 3 new</div></div>', unsafe_allow_html=True)
    with col2:
        st.markdown(f'<div class="kpi-card"><div class="kpi-label">Active Campaigns</div><div class="kpi-value">18</div><div class="trend-up">↑ 2</div></div>', unsafe_allow_html=True)
    with col3:
        st.markdown(f'<div class="kpi-card"><div class="kpi-label">Monthly Revenue</div><div class="kpi-value">${clients_df["monthly_retainer"].sum():,}</div><div class="trend-up">↑ 8%</div></div>', unsafe_allow_html=True)
    with col4:
        avg_health = summary_df['health_score'].mean()
        st.markdown(f'<div class="kpi-card"><div class="kpi-label">Avg Health Score</div><div class="kpi-value">{avg_health:.0f}</div><div class="trend-up">↑ 4</div></div>', unsafe_allow_html=True)
    
    # Client Performance Matrix
    st.markdown("<br>", unsafe_allow_html=True)
    st.subheader("Client Performance Matrix")
    
    cols = st.columns(3)
    for idx, (_, client) in enumerate(summary_df.iterrows()):
        with cols[idx % 3]:
            status_class = f"status-{client['status']}"
            status_text = client['status'].replace('_', ' ').title()
            trend_icon = "↑" if client['session_trend'] > 0 else "↓"
            trend_class = "trend-up" if client['session_trend'] > 0 else "trend-down"
            
            st.markdown(f"""
            <div style="background: white; padding: 1.5rem; border-radius: 12px; 
                        box-shadow: 0 1px 3px rgba(0,0,0,0.1); border: 1px solid #e5e7eb; margin-bottom: 1rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                    <h4 style="margin: 0;">{client['client_name']}</h4>
                    <span class="{status_class}">{status_text}</span>
                </div>
                <p style="color: #6b7280; font-size: 0.875rem;">{client['industry']}</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem;">
                    <div>
                        <div style="font-size: 0.75rem; color: #6b7280;">Sessions</div>
                        <div style="font-size: 1.25rem; font-weight: 700;">{client['latest_sessions']:,}</div>
                        <div class="{trend_class}">{trend_icon} {abs(client['session_trend']):.1f}%</div>
                    </div>
                    <div>
                        <div style="font-size: 0.75rem; color: #6b7280;">Health</div>
                        <div style="font-size: 1.25rem; font-weight: 700;">{client['health_score']}</div>
                        <div style="font-size: 0.875rem; color: #6b7280;">/ 100</div>
                    </div>
                </div>
                <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #e5e7eb;">
                    <div style="display: flex; justify-content: space-between;">
                        <div>
                            <div style="font-size: 0.75rem; color: #6b7280;">ROI</div>
                            <div style="font-size: 1rem; font-weight: 600; color: #10b981;">{client['roi_percentage']}%</div>
                        </div>
                        <div style="text-align: right;">
                            <div style="font-size: 0.75rem; color: #6b7280;">Retainer</div>
                            <div style="font-size: 1rem; font-weight: 600;">${client['monthly_retainer']:,}</div>
                        </div>
                    </div>
                </div>
            </div>
            """, unsafe_allow_html=True)
    
    # Alerts Section
    st.markdown("<br>", unsafe_allow_html=True)
    st.subheader("Alerts & Action Items")
    
    attention_clients = summary_df[summary_df['status'].isin(['attention', 'action_required'])]
    if len(attention_clients) > 0:
        for _, client in attention_clients.iterrows():
            alert_color = "#ef4444" if client['status'] == 'action_required' else "#f59e0b"
            alert_icon = "🔴" if client['status'] == 'action_required' else "🟡"
            st.markdown(f"""
            <div style="background: white; padding: 1rem; border-radius: 8px; 
                        border-left: 4px solid {alert_color}; margin-bottom: 0.5rem;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <span style="font-size: 1.25rem; margin-right: 0.5rem;">{alert_icon}</span>
                        <strong>{client['client_name']}</strong>
                        <span style="color: #6b7280; margin-left: 1rem;">{client['industry']}</span>
                    </div>
                </div>
                <div style="margin-top: 0.5rem; color: #4b5563;">
                    Sessions {client['session_trend']:+.1f}% | Health Score: {client['health_score']}
                </div>
            </div>
            """, unsafe_allow_html=True)
    else:
        st.success("✅ All clients are on track!")
    
    # Performance Charts
    st.markdown("<br>", unsafe_allow_html=True)
    st.subheader("Performance Overview")
    
    col1, col2 = st.columns(2)
    with col1:
        total_sessions = metrics_df.groupby('month_year')['sessions'].sum().reset_index()
        fig = px.line(total_sessions, x='month_year', y='sessions', title='Total Sessions', markers=True)
        fig.update_layout(height=350)
        st.plotly_chart(fig, use_container_width=True)
    
    with col2:
        total_conversions = metrics_df.groupby('month_year')['conversions'].sum().reset_index()
        fig = px.bar(total_conversions, x='month_year', y='conversions', title='Total Conversions', color_discrete_sequence=['#10b981'])
        fig.update_layout(height=350)
        st.plotly_chart(fig, use_container_width=True)

elif page == "👥 Client Management":
    if selected_client != "All Clients":
        # Show individual client dashboard
        client = clients_df[clients_df['name'] == selected_client].iloc[0]
        client_summary = summary_df[summary_df['client_id'] == client['id']].iloc[0]
        client_metrics = metrics_df[metrics_df['client_id'] == client['id']].sort_values('date')
        client_feedback = feedback_df[feedback_df['client_id'] == client['id']].sort_values('date', ascending=False)
        
        # Header
        st.markdown(f"""
        <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); 
                    padding: 2rem; border-radius: 12px; color: white; margin-bottom: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <h1>{client['name']}</h1>
                    <p>{client['industry']} | {client['location']}</p>
                </div>
                <div style="text-align: right;">
                    <div style="font-size: 2rem; font-weight: 700;">${client['monthly_retainer']:,}</div>
                    <div style="font-size: 0.875rem;">Monthly Retainer</div>
                </div>
            </div>
        </div>
        """, unsafe_allow_html=True)
        
        # KPIs
        col1, col2, col3, col4 = st.columns(4)
        latest = client_metrics.iloc[-1]
        
        with col1:
            st.markdown(f'<div class="kpi-card"><div class="kpi-label">Website Visitors</div><div class="kpi-value">{latest["sessions"]:,}</div><div class="trend-up">↑ {client_summary["session_trend"]:.1f}%</div></div>', unsafe_allow_html=True)
        with col2:
            st.markdown(f'<div class="kpi-card"><div class="kpi-label">Google Clicks</div><div class="kpi-value">{latest["clicks"]:,}</div><div class="trend-up">↑ {np.random.uniform(5, 15):.1f}%</div></div>', unsafe_allow_html=True)
        with col3:
            avg_time = f"{latest['avg_session_duration'] // 60}m {latest['avg_session_duration'] % 60}s"
            st.markdown(f'<div class="kpi-card"><div class="kpi-label">Avg Time on Site</div><div class="kpi-value">{avg_time}</div><div class="trend-up">↑ {np.random.uniform(5, 20):.1f}%</div></div>', unsafe_allow_html=True)
        with col4:
            st.markdown(f'<div class="kpi-card"><div class="kpi-label">Conversions</div><div class="kpi-value">{latest["conversions"]}</div><div class="trend-up">↑ {client_summary["conversion_trend"]:.1f}%</div></div>', unsafe_allow_html=True)
        
        # Tabs
        tab1, tab2, tab3, tab4 = st.tabs(["📈 Performance", "🔍 Search Visibility", "⭐ Reviews", "💬 Feedback"])
        
        with tab1:
            col1, col2 = st.columns(2)
            with col1:
                fig = px.line(client_metrics, x='month_year', y='sessions', title='Sessions Over Time', markers=True)
                fig.update_layout(height=350)
                st.plotly_chart(fig, use_container_width=True)
            with col2:
                fig = px.bar(client_metrics, x='month_year', y='conversions', title='Conversions', color_discrete_sequence=['#3b82f6'])
                fig.update_layout(height=350)
                st.plotly_chart(fig, use_container_width=True)
        
        with tab2:
            fig = make_subplots(specs=[[{"secondary_y": True}]])
            fig.add_trace(go.Scatter(x=client_metrics['month_year'], y=client_metrics['impressions'], name="Impressions", line=dict(color="#3b82f6")), secondary_y=False)
            fig.add_trace(go.Scatter(x=client_metrics['month_year'], y=client_metrics['clicks'], name="Clicks", line=dict(color="#10b981")), secondary_y=True)
            fig.update_layout(title_text="Search Impressions vs Clicks", height=400)
            st.plotly_chart(fig, use_container_width=True)
        
        with tab3:
            col1, col2, col3, col4 = st.columns(4)
            with col1:
                st.metric("Average Rating", f"⭐ {latest['avg_rating']}")
            with col2:
                st.metric("Total Reviews", latest['review_count'])
            with col3:
                st.metric("Response Rate", f"{np.random.randint(85, 98)}%")
            with col4:
                st.metric("New This Month", latest['new_reviews'])
        
        with tab4:
            total_value = client_feedback['value'].sum()
            st.metric("Total Attributed Revenue", f"${total_value:,}")
            
            for _, feedback in client_feedback.iterrows():
                emoji = "💰" if feedback['type'] in ['lead', 'sale'] else "⚠️"
                st.markdown(f"""
                <div style="background: white; padding: 1rem; border-radius: 8px; 
                            border-left: 4px solid #3b82f6; margin-bottom: 0.5rem;">
                    <strong>{emoji} {feedback['type'].title()}</strong> - {feedback['date'].strftime('%b %d, %Y')}
                    <br/>{feedback['description']}
                    <br/><strong>${feedback['value']:,}</strong>
                </div>
                """, unsafe_allow_html=True)
    else:
        st.info("Select a client from the sidebar to view their dashboard")

elif page == "🤖 Jeff AI Bot":
    st.markdown("""
    <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); 
                padding: 2rem; border-radius: 12px; color: white; margin-bottom: 2rem;">
        <h1>🤖 Jeff AI Bot</h1>
        <p>Your intelligent marketing assistant</p>
    </div>
    """, unsafe_allow_html=True)
    
    # Quick actions
    col1, col2, col3, col4 = st.columns(4)
    
    with col1:
        if st.button("📊 Performance Summary"):
            st.session_state.chat_history.append({"role": "user", "content": "Performance summary"})
            response = f"""📈 **Performance Summary**

**Overall Health:** {summary_df['health_score'].mean():.0f}/100
**Total Clients:** {len(clients_df)}
✅ On Track: {len(summary_df[summary_df['status'] == 'on_track'])}
⚠️ Attention: {len(summary_df[summary_df['status'] == 'attention'])}
🔴 Action Required: {len(summary_df[summary_df['status'] == 'action_required'])}

**Top Performers:**
• Elite HVAC (ROI: 301%)
• Rapid Restoration (ROI: 153%)
• Johnson Law (ROI: 134%)"""
            st.session_state.chat_history.append({"role": "bot", "content": response})
    
    with col2:
        if st.button("⚠️ Who Needs Attention?"):
            st.session_state.chat_history.append({"role": "user", "content": "Who needs attention?"})
            attention = summary_df[summary_df['status'].isin(['attention', 'action_required'])]
            response = "⚠️ **Clients Needing Attention:**\n\n"
            for _, client in attention.iterrows():
                response += f"🔴 **{client['client_name']}** (Health: {client['health_score']})\n"
                response += f"   Sessions: {client['latest_sessions']:,} ({client['session_trend']:+.1f}%)\n\n"
            st.session_state.chat_history.append({"role": "bot", "content": response})
    
    with col3:
        if st.button("🏆 Best ROI"):
            st.session_state.chat_history.append({"role": "user", "content": "Best ROI"})
            top_roi = summary_df.nlargest(3, 'roi_percentage')
            response = "🏆 **Top ROI Clients:**\n\n"
            for idx, client in top_roi.iterrows():
                response += f"{idx+1}. **{client['client_name']}** - {client['roi_percentage']}% ROI\n"
                response += f"   Revenue: ${client['total_feedback_value']:,}\n\n"
            st.session_state.chat_history.append({"role": "bot", "content": response})
    
    with col4:
        if st.button("💡 Weekly Focus"):
            st.session_state.chat_history.append({"role": "user", "content": "Weekly focus"})
            response = """💡 **This Week's Focus:**

1. **Client Retention**
   • Premier Fence needs immediate attention
   • Schedule strategy call

2. **Growth Opportunities**
   • Elite HVAC (301% ROI) - ask for testimonial

3. **Team Efficiency**
   • Review dashboard daily
   • Save ~10 hours this week

You've got this! 🚀"""
            st.session_state.chat_history.append({"role": "bot", "content": response})
    
    # Chat history
    st.markdown("<br>", unsafe_allow_html=True)
    for msg in st.session_state.chat_history:
        if msg['role'] == 'user':
            st.markdown(f'<div style="background: #dbeafe; padding: 1rem; border-radius: 8px; margin-bottom: 0.5rem; margin-left: 2rem;"><strong>You:</strong> {msg["content"]}</div>', unsafe_allow_html=True)
        else:
            st.markdown(f'<div style="background: #f3f4f6; padding: 1rem; border-radius: 8px; margin-bottom: 0.5rem; margin-right: 2rem;"><strong>🤖 Jeff Bot:</strong><br/>{msg["content"]}</div>', unsafe_allow_html=True)
    
    # Input
    user_input = st.text_input("Ask Jeff Bot...", placeholder="e.g., How is ABC Electric performing?")
    if user_input:
        st.session_state.chat_history.append({"role": "user", "content": user_input})
        # Simple response logic
        if 'abc' in user_input.lower():
            client = summary_df[summary_df['client_name'] == 'ABC Electric'].iloc[0]
            response = f"📊 **ABC Electric:**\n\nHealth: {client['health_score']}/100\nSessions: {client['latest_sessions']:,} ({client['session_trend']:+.1f}%)\nROI: {client['roi_percentage']}%\n\nStatus: ✅ On Track"
        else:
            response = "🤖 Try asking:\n• How is [client] performing?\n• Who needs attention?\n• Show best ROI"
        st.session_state.chat_history.append({"role": "bot", "content": response})
        st.rerun()

elif page == "📊 ROI Calculator":
    st.markdown("""
    <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); 
                padding: 2rem; border-radius: 12px; color: white; margin-bottom: 2rem;">
        <h1>📊 ROI Calculator</h1>
        <p>See the real value this dashboard delivers</p>
    </div>
    """, unsafe_allow_html=True)
    
    col1, col2, col3 = st.columns(3)
    with col1:
        hours = st.number_input("Hours/week on reporting", value=11)
    with col2:
        hourly = st.number_input("Your hourly value ($)", value=150)
    with col3:
        clients = st.number_input("Number of clients", value=8)
    
    current_cost = hours * hourly * 52
    st.markdown(f'<div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; margin: 2rem 0;"><h4 style="color: #991b1b; margin: 0;">💸 Current Annual Cost: ${current_cost:,}</h4></div>', unsafe_allow_html=True)
    
    col1, col2, col3 = st.columns(3)
    with col1:
        new_hours = st.number_input("New hours/week", value=2)
    with col2:
        retention = st.slider("Retention improvement (%)", 0, 50, 10)
    with col3:
        new_clients = st.number_input("Additional clients/year", value=2)
    
    new_cost = new_hours * hourly * 52
    time_savings = current_cost - new_cost
    avg_retainer = clients_df['monthly_retainer'].mean()
    retention_value = (retention / 100) * clients * avg_retainer * 12
    new_client_value = new_clients * avg_retainer * 12
    total_value = time_savings + retention_value + new_client_value
    dashboard_cost = 30000
    net_benefit = total_value - dashboard_cost
    roi = (net_benefit / dashboard_cost) * 100
    
    col1, col2 = st.columns(2)
    with col1:
        st.markdown(f'<div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 2rem; border-radius: 12px; text-align: center;"><div style="font-size: 1rem;">ANNUAL VALUE</div><div style="font-size: 3.5rem; font-weight: 800;">${total_value:,}</div></div>', unsafe_allow_html=True)
    with col2:
        st.markdown(f'<div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white; padding: 2rem; border-radius: 12px; text-align: center;"><div style="font-size: 1rem;">NET ROI</div><div style="font-size: 3.5rem; font-weight: 800;">{roi:.0f}%</div></div>', unsafe_allow_html=True)
    
    st.markdown(f'<div style="background: #d1fae5; padding: 2rem; border-radius: 12px; text-align: center; margin-top: 2rem;"><h3 style="color: #065f46; margin: 0;">🎯 Net Annual Benefit: ${net_benefit:,}</h3></div>', unsafe_allow_html=True)

elif page == "⚙️ Settings":
    st.markdown("""
    <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); 
                padding: 2rem; border-radius: 12px; color: white; margin-bottom: 2rem;">
        <h1>⚙️ Settings</h1>
        <p>Manage your dashboard preferences</p>
    </div>
    """, unsafe_allow_html=True)
    
    tab1, tab2, tab3 = st.tabs(["🔌 Integrations", "👥 Team", "🔔 Notifications"])
    
    with tab1:
        st.subheader("Connected Data Sources")
        st.markdown("✅ **Google Analytics 4** - Connected")
        st.markdown("✅ **Google Search Console** - Connected")
        st.markdown("🟡 **Google Business Profile** - Partial")
        st.markdown("○ **CallRail** - Not Connected")
    
    with tab2:
        st.subheader("Team Members")
        st.markdown("• **Jeff Kirk** - Owner (Active)")
        st.markdown("• **Team Member 1** - Campaign Manager (Active)")
        st.markdown("• **Team Member 2** - SEO Specialist (Active)")
    
    with tab3:
        st.subheader("Notification Preferences")
        st.checkbox("Traffic drop alerts (>20%)", value=True)
        st.checkbox("Conversion spike alerts (>50%)", value=True)
        st.checkbox("Weekly summary email", value=True)
        st.checkbox("Monthly performance report", value=True)

# Footer
st.markdown("---")
st.markdown("<div style='text-align: center; color: #6b7280;'>Up At Dawn Marketing Dashboard | Powered by DR Data Decision Intelligence</div>", unsafe_allow_html=True)
```

### 6. requirements.txt
```
streamlit==1.28.0
pandas==2.0.3
numpy==1.24.3
plotly==5.17.0
```

### 7. .streamlit/config.toml
```toml
[theme]
primaryColor = "#3b82f6"
backgroundColor = "#f8fafc"
secondaryBackgroundColor = "#ffffff"
textColor = "#1f2937"
font = "sans serif"
```

## Build Instructions

1. Create folder structure
2. Generate CSV files with fake data
3. Create app.py with all pages
4. Test each page
5. Deploy to Streamlit Cloud

Start building now!
