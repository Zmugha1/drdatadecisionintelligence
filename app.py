"""
Up At Dawn - Marketing Dashboard POC
Built for Jeffrey Kirk and Up At Dawn LLC
Powered by DR Data Decision Intelligence
"""

import ast
import html
from pathlib import Path
from textwrap import dedent

import streamlit as st
import pandas as pd
import numpy as np
import plotly.express as px
import plotly.graph_objects as go
from plotly.subplots import make_subplots


def _html(text: str) -> None:
    """Render HTML; dedent avoids Streamlit Markdown treating indented lines as code blocks."""
    st.markdown(dedent(text).strip(), unsafe_allow_html=True)


def _html_sidebar(text: str) -> None:
    st.sidebar.markdown(dedent(text).strip(), unsafe_allow_html=True)


# Page configuration
st.set_page_config(
    page_title="Up At Dawn - Marketing Dashboard",
    page_icon="🌅",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom CSS for professional styling
_html("""
<style>
    /* Main styling */
    .main {
        background-color: #f8fafc;
    }
    
    /* Header styling */
    .dashboard-header {
        background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
        padding: 2rem;
        border-radius: 12px;
        color: white;
        margin-bottom: 2rem;
    }
    
    /* KPI Card styling */
    .kpi-card {
        background: white;
        padding: 1.5rem;
        border-radius: 12px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        border: 1px solid #e5e7eb;
    }
    
    .kpi-value {
        font-size: 2.5rem;
        font-weight: 700;
        color: #1f2937;
    }
    
    .kpi-label {
        font-size: 0.875rem;
        color: #6b7280;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }
    
    .trend-up {
        color: #10b981;
        font-weight: 600;
    }
    
    .trend-down {
        color: #ef4444;
        font-weight: 600;
    }
    
    /* Status badges */
    .status-on_track {
        background-color: #d1fae5;
        color: #065f46;
        padding: 0.25rem 0.75rem;
        border-radius: 9999px;
        font-size: 0.875rem;
        font-weight: 600;
    }
    
    .status-attention {
        background-color: #fef3c7;
        color: #92400e;
        padding: 0.25rem 0.75rem;
        border-radius: 9999px;
        font-size: 0.875rem;
        font-weight: 600;
    }
    
    .status-action_required {
        background-color: #fee2e2;
        color: #991b1b;
        padding: 0.25rem 0.75rem;
        border-radius: 9999px;
        font-size: 0.875rem;
        font-weight: 600;
    }
    
    /* Client card styling */
    .client-card {
        background: white;
        padding: 1.5rem;
        border-radius: 12px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        border: 1px solid #e5e7eb;
        margin-bottom: 1rem;
        transition: transform 0.2s, box-shadow 0.2s;
    }
    
    .client-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    
    /* Chat styling */
    .chat-message {
        padding: 1rem;
        border-radius: 8px;
        margin-bottom: 0.5rem;
    }
    
    .chat-user {
        background-color: #dbeafe;
        margin-left: 2rem;
    }
    
    .chat-bot {
        background-color: #f3f4f6;
        margin-right: 2rem;
    }
    
    /* Section headers */
    .section-header {
        font-size: 1.5rem;
        font-weight: 700;
        color: #1f2937;
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid #e5e7eb;
    }
    
    /* ROI Calculator styling */
    .roi-highlight {
        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        color: white;
        padding: 2rem;
        border-radius: 12px;
        text-align: center;
    }
    
    .roi-number {
        font-size: 3.5rem;
        font-weight: 800;
    }
</style>
""")

# CSV paths relative to this file (works no matter what the process cwd is)
_APP_DIR = Path(__file__).resolve().parent
_DATA_DIR = _APP_DIR / "data"


# Load data
@st.cache_data
def load_data():
    clients = pd.read_csv(_DATA_DIR / "clients.csv")
    metrics = pd.read_csv(_DATA_DIR / "metrics.csv")
    feedback = pd.read_csv(_DATA_DIR / "feedback.csv")
    summary = pd.read_csv(_DATA_DIR / "client_summary.csv")
    
    # Convert date columns
    metrics['date'] = pd.to_datetime(metrics['date'])
    feedback['date'] = pd.to_datetime(feedback['date'])
    
    return clients, metrics, feedback, summary

# Load all data
clients_df, metrics_df, feedback_df, summary_df = load_data()

# Initialize session state for chat
if 'chat_history' not in st.session_state:
    st.session_state.chat_history = []

if 'selected_client' not in st.session_state:
    st.session_state.selected_client = None

# Sidebar navigation
_html_sidebar("""
<div style="text-align: center; padding: 1rem 0;">
    <h2 style="color: #1e3a8a; margin: 0;">🌅 Up At Dawn</h2>
    <p style="color: #6b7280; font-size: 0.875rem;">Marketing Dashboard</p>
</div>
""")

st.sidebar.markdown("---")

# Navigation
page = st.sidebar.radio(
    "Navigation",
    ["🏠 Executive Dashboard", "👥 Client Management", "🤖 Jeff AI Bot", "📊 ROI Calculator", "⚙️ Settings"]
)

st.sidebar.markdown("---")

# Client selector for individual views
st.sidebar.markdown("### Quick Client View")
selected_client_name = st.sidebar.selectbox(
    "Select a client",
    ["All Clients"] + list(clients_df['name'].values)
)

if selected_client_name != "All Clients":
    st.session_state.selected_client = clients_df[clients_df['name'] == selected_client_name].iloc[0]
else:
    st.session_state.selected_client = None

# Main content based on page selection
if page == "🏠 Executive Dashboard":
    # Header
    _html("""
    <div class="dashboard-header">
        <h1>Executive Dashboard</h1>
        <p>Welcome back, Jeff! Here's what's happening across all your clients.</p>
    </div>
    """)
    
    # Top KPIs (native metrics avoid Markdown code-block quirks with indented HTML)
    col1, col2, col3, col4 = st.columns(4)
    
    total_clients = len(clients_df)
    active_campaigns = sum(
        len(ast.literal_eval(services)) if isinstance(services, str) else len(services)
        for services in clients_df["services"]
    )
    total_monthly_revenue = clients_df['monthly_retainer'].sum()
    avg_health = summary_df['health_score'].mean()
    
    with col1:
        st.metric("Total clients", total_clients, delta="3 new this quarter")
    with col2:
        st.metric("Active campaigns", active_campaigns, delta="2 this month")
    with col3:
        st.metric("Monthly revenue", f"${total_monthly_revenue:,.0f}", delta="8% vs last month")
    with col4:
        st.metric(
            "Avg health score",
            f"{avg_health:.0f}",
            delta=f"{avg_health - 75:+.0f} pts vs target",
        )
    
    st.markdown("")
    
    # Client Performance Matrix
    _html('<div class="section-header">Client Performance Matrix</div>')
    
    # Filter options
    col1, col2, col3 = st.columns([2, 2, 1])
    with col1:
        status_filter = st.selectbox("Filter by Status", ["All", "On Track", "Needs Attention", "Action Required"])
    with col2:
        industry_filter = st.selectbox("Filter by Industry", ["All"] + list(clients_df['industry'].unique()))
    with col3:
        st.markdown("")
        refresh = st.button("🔄 Refresh Data")
    
    # Apply filters
    filtered_summary = summary_df.copy()
    if status_filter != "All":
        status_map = {"On Track": "on_track", "Needs Attention": "attention", "Action Required": "action_required"}
        filtered_summary = filtered_summary[filtered_summary['status'] == status_map.get(status_filter, status_filter)]
    if industry_filter != "All":
        filtered_summary = filtered_summary[filtered_summary['industry'] == industry_filter]
    
    status_emoji = {"on_track": "🟢", "attention": "🟡", "action_required": "🔴"}
    cols = st.columns(3)
    for idx, (_, client) in enumerate(filtered_summary.iterrows()):
        with cols[idx % 3]:
            status_text = client["status"].replace("_", " ").title()
            session_trend = float(client["session_trend"])
            session_trend_icon = "↑" if session_trend > 0 else "↓" if session_trend < 0 else "→"
            emoji = status_emoji.get(client["status"], "⚪")

            st.markdown(f"**{client['client_name']}** · {emoji} {status_text}")
            st.caption(str(client["industry"]))
            r1, r2 = st.columns(2)
            with r1:
                st.metric(
                    "Sessions",
                    f"{int(client['latest_sessions']):,}",
                    delta=f"{session_trend_icon} {abs(session_trend):.1f}%",
                )
            with r2:
                st.metric("Health", f"{int(client['health_score'])}/100")
            r3, r4 = st.columns(2)
            with r3:
                st.metric("ROI", f"{int(client['roi_percentage'])}%")
            with r4:
                st.metric("Retainer", f"${int(client['monthly_retainer']):,}")
            st.markdown("---")
    
    # Alerts Section
    _html('<div class="section-header">Alerts & Action Items</div>')
    
    # Find clients needing attention
    attention_clients = summary_df[summary_df['status'].isin(['attention', 'action_required'])]
    
    if len(attention_clients) > 0:
        for _, client in attention_clients.iterrows():
            alert_icon = "🔴" if client['status'] == 'action_required' else "🟡"
            detail = (
                f"Sessions down {abs(client['session_trend']):.1f}%"
                if client['session_trend'] < 0
                else f"Conversions down {abs(client['conversion_trend']):.1f}%"
                if client['conversion_trend'] < 0
                else "Performance metrics need review"
            )
            body = f"{alert_icon} **{client['client_name']}** — {client['industry']}\n\n{detail}"
            if client["status"] == "action_required":
                st.error(body)
            else:
                st.warning(body)
    else:
        st.success("✅ All clients are on track! No immediate action required.")
    
    # Performance Overview Charts
    _html('<div class="section-header">Performance Overview</div>')
    
    col1, col2 = st.columns(2)
    
    with col1:
        # Total sessions trend
        total_sessions_by_month = metrics_df.groupby('month_year')['sessions'].sum().reset_index()
        total_sessions_by_month = total_sessions_by_month.sort_values('month_year')
        
        fig = px.line(
            total_sessions_by_month, 
            x='month_year', 
            y='sessions',
            title='Total Website Sessions (All Clients)',
            markers=True
        )
        fig.update_layout(
            xaxis_title="Month",
            yaxis_title="Sessions",
            height=350,
            plot_bgcolor='white',
            paper_bgcolor='white'
        )
        st.plotly_chart(fig, use_container_width=True)
    
    with col2:
        # Conversions trend
        total_conversions_by_month = metrics_df.groupby('month_year')['conversions'].sum().reset_index()
        total_conversions_by_month = total_conversions_by_month.sort_values('month_year')
        
        fig = px.bar(
            total_conversions_by_month,
            x='month_year',
            y='conversions',
            title='Total Conversions (All Clients)',
            color_discrete_sequence=['#10b981']
        )
        fig.update_layout(
            xaxis_title="Month",
            yaxis_title="Conversions",
            height=350,
            plot_bgcolor='white',
            paper_bgcolor='white'
        )
        st.plotly_chart(fig, use_container_width=True)

elif page == "👥 Client Management":
    if st.session_state.selected_client is not None:
        client = st.session_state.selected_client
        client_summary = summary_df[summary_df['client_id'] == client['id']].iloc[0]
        client_metrics = metrics_df[metrics_df['client_id'] == client['id']].sort_values('date')
        client_feedback = feedback_df[feedback_df['client_id'] == client['id']].sort_values('date', ascending=False)
        
        # Client header
        _html(f"""
        <div class="dashboard-header">
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
        """)
        
        # Client KPIs
        col1, col2, col3, col4 = st.columns(4)
        
        latest_metrics = client_metrics.iloc[-1]
        avg_time = f"{latest_metrics['avg_session_duration'] // 60}m {latest_metrics['avg_session_duration'] % 60}s"
        
        with col1:
            st.metric(
                "Website visitors",
                f"{int(latest_metrics['sessions']):,}",
                delta=f"{client_summary['session_trend']:.1f}% vs last month",
            )
        with col2:
            st.metric(
                "Google clicks",
                f"{int(latest_metrics['clicks']):,}",
                delta=f"{np.random.uniform(5, 15):.1f}% vs last month",
            )
        with col3:
            st.metric(
                "Avg time on site",
                avg_time,
                delta=f"{np.random.uniform(5, 20):.1f}% vs last month",
            )
        with col4:
            st.metric(
                "Conversions",
                f"{int(latest_metrics['conversions'])}",
                delta=f"{client_summary['conversion_trend']:.1f}% vs last month",
            )
        
        st.markdown("")
        
        # Tabs for different views
        tab1, tab2, tab3, tab4 = st.tabs(["📈 Performance", "🔍 Search Visibility", "⭐ Reviews", "💬 Feedback"])
        
        with tab1:
            col1, col2 = st.columns(2)
            
            with col1:
                # Sessions over time
                fig = px.line(
                    client_metrics,
                    x='month_year',
                    y='sessions',
                    title='Website Sessions Over Time',
                    markers=True
                )
                fig.update_layout(height=350)
                st.plotly_chart(fig, use_container_width=True)
            
            with col2:
                # Conversions over time
                fig = px.bar(
                    client_metrics,
                    x='month_year',
                    y='conversions',
                    title='Conversions Over Time',
                    color_discrete_sequence=['#3b82f6']
                )
                fig.update_layout(height=350)
                st.plotly_chart(fig, use_container_width=True)
            
            # Engagement metrics
            st.markdown("")
            _html('<div class="section-header">Engagement Metrics</div>')
            
            col1, col2, col3 = st.columns(3)
            
            with col1:
                fig = px.pie(
                    values=[latest_metrics['bounce_rate'], 100 - latest_metrics['bounce_rate']],
                    names=['Bounce', 'Stay'],
                    title='Bounce Rate',
                    color_discrete_sequence=['#ef4444', '#10b981']
                )
                fig.update_layout(height=250)
                st.plotly_chart(fig, use_container_width=True)
            
            with col2:
                fig = px.line(
                    client_metrics,
                    x='month_year',
                    y='pages_per_session',
                    title='Pages Per Session',
                    markers=True,
                    color_discrete_sequence=['#8b5cf6']
                )
                fig.update_layout(height=250)
                st.plotly_chart(fig, use_container_width=True)
            
            with col3:
                fig = px.bar(
                    client_metrics,
                    x='month_year',
                    y='avg_session_duration',
                    title='Avg Session Duration (seconds)',
                    color_discrete_sequence=['#f59e0b']
                )
                fig.update_layout(height=250)
                st.plotly_chart(fig, use_container_width=True)
        
        with tab2:
            col1, col2 = st.columns(2)
            
            with col1:
                # Search impressions and clicks
                fig = make_subplots(specs=[[{"secondary_y": True}]])
                
                fig.add_trace(
                    go.Scatter(
                        x=client_metrics['month_year'],
                        y=client_metrics['impressions'],
                        name="Impressions",
                        line=dict(color="#3b82f6")
                    ),
                    secondary_y=False
                )
                
                fig.add_trace(
                    go.Scatter(
                        x=client_metrics['month_year'],
                        y=client_metrics['clicks'],
                        name="Clicks",
                        line=dict(color="#10b981")
                    ),
                    secondary_y=True
                )
                
                fig.update_layout(
                    title_text="Search Impressions vs Clicks",
                    height=400
                )
                
                st.plotly_chart(fig, use_container_width=True)
            
            with col2:
                # CTR trend
                fig = px.line(
                    client_metrics,
                    x='month_year',
                    y='ctr',
                    title='Click-Through Rate (CTR)',
                    markers=True,
                    color_discrete_sequence=['#8b5cf6']
                )
                fig.update_layout(height=400)
                st.plotly_chart(fig, use_container_width=True)
            
            # Search position
            st.markdown("")
            fig = px.area(
                client_metrics,
                x='month_year',
                y='position',
                title='Average Search Position (Lower is Better)',
                color_discrete_sequence=['#f59e0b']
            )
            fig.update_layout(height=350)
            st.plotly_chart(fig, use_container_width=True)
        
        with tab3:
            col1, col2, col3, col4 = st.columns(4)
            response_rate = np.random.randint(85, 98)
            
            with col1:
                st.metric("Average rating", f"⭐ {latest_metrics['avg_rating']}")
                st.caption("out of 5")
            with col2:
                st.metric(
                    "Total reviews",
                    int(latest_metrics["review_count"]),
                    delta=f"{int(latest_metrics['new_reviews'])} new this month",
                )
            with col3:
                st.metric("Response rate", f"{response_rate}%")
                st.caption("to reviews")
            with col4:
                st.metric("Review velocity", int(latest_metrics["new_reviews"]))
                st.caption("per month")
            
            st.markdown("")
            
            # Review trend
            fig = px.line(
                client_metrics,
                x='month_year',
                y=['review_count', 'avg_rating'],
                title='Review Count & Rating Trend',
                markers=True
            )
            fig.update_layout(height=400)
            st.plotly_chart(fig, use_container_width=True)
        
        with tab4:
            _html('<div class="section-header">Client Feedback Loop</div>')
            
            # Feedback summary
            total_feedback_value = client_feedback['value'].sum()
            feedback_count = len(client_feedback)
            
            col1, col2, col3 = st.columns(3)
            
            with col1:
                st.metric("Total Feedback Entries", feedback_count)
            
            with col2:
                st.metric("Attributed Revenue", f"${total_feedback_value:,}")
            
            with col3:
                roi = (total_feedback_value / (client['monthly_retainer'] * 12)) * 100
                st.metric("ROI", f"{roi:.0f}%")
            
            st.markdown("")
            
            # Display feedback entries
            for _, feedback in client_feedback.iterrows():
                feedback_date = feedback['date'].strftime('%b %d, %Y')
                feedback_type_emoji = "💰" if feedback['type'] in ['lead', 'sale'] else "⚠️" if feedback['type'] == 'complaint' else "💬"
                
                _html(f"""
                <div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #3b82f6; margin-bottom: 0.5rem;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                        <div>
                            <span style="font-size: 1.25rem; margin-right: 0.5rem;">{feedback_type_emoji}</span>
                            <strong>{feedback['type'].title()}</strong>
                            <span style="color: #6b7280; margin-left: 1rem; font-size: 0.875rem;">{feedback_date}</span>
                        </div>
                        <div style="font-weight: 700; color: #10b981;">
                            ${int(feedback['value']):,}
                        </div>
                    </div>
                    <div style="margin-top: 0.5rem; color: #4b5563;">
                        {feedback['description']}
                    </div>
                    <div style="margin-top: 0.5rem; font-size: 0.875rem; color: #6b7280;">
                        Recorded by: {feedback['recorded_by']}
                    </div>
                </div>
                """)
            
            # Add feedback button
            st.markdown("")
            if st.button("➕ Add New Feedback", type="primary"):
                st.info("In the full version, this would open a form to add new client feedback.")
    
    else:
        st.info("👈 Select a client from the sidebar to view their detailed dashboard.")
        
        # Show all clients list
        _html('<div class="section-header">All Clients</div>')
        
        list_status_emoji = {"on_track": "🟢", "attention": "🟡", "action_required": "🔴"}
        for _, client in clients_df.iterrows():
            client_summary = summary_df[summary_df['client_id'] == client['id']].iloc[0]
            status_text = client_summary['status'].replace('_', ' ').title()
            se = list_status_emoji.get(client_summary['status'], "⚪")
            
            col1, col2, col3, col4, col5 = st.columns([3, 2, 2, 2, 2])
            
            with col1:
                st.write(f"**{client['name']}**")
                st.caption(f"{client['industry']}")
            
            with col2:
                st.caption(f"{se} {status_text}")
            
            with col3:
                st.write(f"${client['monthly_retainer']:,}")
                st.caption("Monthly")
            
            with col4:
                st.write(f"{client_summary['health_score']}/100")
                st.caption("Health Score")
            
            with col5:
                st.write(f"{client_summary['roi_percentage']}%")
                st.caption("ROI")
            
            st.markdown("---")

elif page == "🤖 Jeff AI Bot":
    _html("""
    <div class="dashboard-header">
        <h1>🤖 Jeff AI Bot</h1>
        <p>Your intelligent marketing assistant. Ask questions about your clients, performance, or recommendations.</p>
    </div>
    """)
    
    # Bot interface
    _html("""
    <div style="background: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
        <h4>What can Jeff Bot help you with?</h4>
        <ul>
            <li>📊 <strong>Performance Analysis:</strong> "How is ABC Electric performing this month?"</li>
            <li>📈 <strong>Trend Insights:</strong> "Which clients are trending up?"</li>
            <li>⚠️ <strong>Alerts:</strong> "Who needs attention?"</li>
            <li>💡 <strong>Recommendations:</strong> "What should I focus on this week?"</li>
            <li>🏆 <strong>ROI Analysis:</strong> "Which clients have the best ROI?"</li>
        </ul>
    </div>
    """)
    
    # Chat interface
    _html('<div class="section-header">Chat with Jeff Bot</div>')
    
    # Display chat history (Markdown, not raw HTML — avoids indentation code-block bug)
    for message in st.session_state.chat_history:
        if message["role"] == "user":
            st.markdown(f"**You:**  \n{html.escape(message['content'])}")
        else:
            st.markdown(f"**🤖 Jeff Bot:**\n\n{message['content']}")
    
    # Quick action buttons
    st.markdown("")
    st.markdown("**Quick Questions:**")
    
    col1, col2, col3, col4 = st.columns(4)
    
    with col1:
        if st.button("📊 Performance Summary"):
            user_message = "Give me a performance summary for all clients"
            st.session_state.chat_history.append({"role": "user", "content": user_message})
            
            # Generate bot response
            total_clients = len(clients_df)
            avg_health = summary_df['health_score'].mean()
            on_track = len(summary_df[summary_df['status'] == 'on_track'])
            attention = len(summary_df[summary_df['status'] == 'attention'])
            action_required = len(summary_df[summary_df['status'] == 'action_required'])
            
            bot_response = f"""Here's your performance summary:

📈 **Overall Health:** {avg_health:.0f}/100 (Good)
👥 **Total Clients:** {total_clients}
✅ **On Track:** {on_track} clients
⚠️ **Needs Attention:** {attention} clients
🔴 **Action Required:** {action_required} clients

**Top Performers:**
• Elite HVAC Services (Health: 95, ROI: 301%)
• Rapid Restoration (Health: 95, ROI: 153%)
• Johnson Law Firm (Health: 95, ROI: 134%)

**Needs Attention:**
• Premier Fence Company (Health: 35) - Sessions down 12%
• Green Roofing Solutions (Health: 55) - Conversions declining

Would you like me to dive deeper into any specific client?"""
            
            st.session_state.chat_history.append({"role": "bot", "content": bot_response})
            st.rerun()
    
    with col2:
        if st.button("⚠️ Who Needs Attention?"):
            user_message = "Which clients need attention?"
            st.session_state.chat_history.append({"role": "user", "content": user_message})
            
            attention_clients = summary_df[summary_df['status'].isin(['attention', 'action_required'])]
            
            bot_response = "⚠️ **Clients Needing Attention:**\n\n"
            
            for _, client in attention_clients.iterrows():
                bot_response += f"🔴 **{client['client_name']}** (Health: {client['health_score']})\n"
                bot_response += f"   • Sessions: {client['latest_sessions']:,} ({client['session_trend']:+.1f}%)\n"
                bot_response += f"   • Conversions: {client['latest_conversions']} ({client['conversion_trend']:+.1f}%)\n"
                bot_response += f"   • Industry: {client['industry']}\n\n"
            
            bot_response += "**Recommended Actions:**\n"
            bot_response += "1. Schedule check-in calls with these clients\n"
            bot_response += "2. Review their recent campaign performance\n"
            bot_response += "3. Consider strategy adjustments\n\n"
            bot_response += "Would you like specific recommendations for any of these clients?"
            
            st.session_state.chat_history.append({"role": "bot", "content": bot_response})
            st.rerun()
    
    with col3:
        if st.button("🏆 Best ROI Clients"):
            user_message = "Show me clients with the best ROI"
            st.session_state.chat_history.append({"role": "user", "content": user_message})
            
            top_roi = summary_df.nlargest(5, 'roi_percentage')
            
            bot_response = "🏆 **Top ROI Clients:**\n\n"
            
            for idx, client in top_roi.iterrows():
                bot_response += f"{idx+1}. **{client['client_name']}**\n"
                bot_response += f"   • ROI: **{client['roi_percentage']}%**\n"
                bot_response += f"   • Revenue Attributed: ${client['total_feedback_value']:,}\n"
                bot_response += f"   • Monthly Retainer: ${client['monthly_retainer']:,}\n"
                bot_response += f"   • Health Score: {client['health_score']}/100\n\n"
            
            bot_response += "**Key Insight:** Elite HVAC Services is delivering exceptional ROI at 301%! Consider using them as a case study for new business."
            
            st.session_state.chat_history.append({"role": "bot", "content": bot_response})
            st.rerun()
    
    with col4:
        if st.button("💡 Weekly Focus"):
            user_message = "What should I focus on this week?"
            st.session_state.chat_history.append({"role": "user", "content": user_message})
            
            bot_response = """💡 **This Week's Focus Areas:**

**1. Client Retention (High Priority)**
   • Premier Fence Company needs immediate attention (Health: 35)
   • Schedule strategy call to address declining performance
   • Consider campaign adjustments or additional services

**2. Growth Opportunities**
   • Elite HVAC Services is crushing it (ROI: 301%)
   • Ask for testimonial and case study
   • Explore upsell opportunities

**3. Team Efficiency**
   • Your team can now make data-driven decisions independently
   • Review dashboard daily instead of creating manual reports
   • Use saved time for business development

**4. Client Communication**
   • 3 clients haven't provided feedback in 30+ days
   • Reach out and encourage dashboard usage
   • Share wins and insights proactively

**Time Savings This Week:** ~10 hours (no manual reporting needed!)

You've got this, Jeff! 🚀"""
            
            st.session_state.chat_history.append({"role": "bot", "content": bot_response})
            st.rerun()
    
    # Text input for custom questions
    st.markdown("")
    user_input = st.text_input("Or type your own question:", placeholder="e.g., How is ABC Electric performing?")
    
    if user_input:
        st.session_state.chat_history.append({"role": "user", "content": user_input})
        
        # Simple response logic based on keywords
        user_input_lower = user_input.lower()
        
        if 'abc electric' in user_input_lower or 'abc' in user_input_lower:
            client_data = summary_df[summary_df['client_name'] == 'ABC Electric'].iloc[0]
            client_metrics_data = metrics_df[metrics_df['client_id'] == 'client_001'].iloc[-1]
            
            bot_response = f"""📊 **ABC Electric Performance:**

**Current Metrics:**
• Sessions: {client_data['latest_sessions']:,} ({client_data['session_trend']:+.1f}%)
• Conversions: {client_data['latest_conversions']} ({client_data['conversion_trend']:+.1f}%)
• Health Score: {client_data['health_score']}/100
• ROI: {client_data['roi_percentage']}%

**Google Search Performance:**
• Impressions: {client_metrics_data['impressions']:,}
• Clicks: {client_metrics_data['clicks']:,}
• CTR: {client_metrics_data['ctr']*100:.2f}%
• Avg Position: {client_metrics_data['position']:.1f}

**Status:** ✅ On Track - Performing well!"""
        
        elif 'trending' in user_input_lower or 'up' in user_input_lower:
            trending = summary_df[summary_df['session_trend'] > 5]
            bot_response = "📈 **Clients Trending Up:**\n\n"
            for _, client in trending.iterrows():
                bot_response += f"• **{client['client_name']}** - Sessions up {client['session_trend']:.1f}%\n"
        
        elif 'roi' in user_input_lower or 'return' in user_input_lower:
            avg_roi = summary_df['roi_percentage'].mean()
            bot_response = f"""💰 **ROI Summary:**

**Average Client ROI:** {avg_roi:.0f}%

This means for every $1 clients spend with Up At Dawn, they're seeing ${avg_roi/100:.2f} in attributed revenue.

**Top Performers:**
• Elite HVAC: 301% ROI
• Rapid Restoration: 153% ROI
• Johnson Law: 134% ROI

This is a powerful selling point for new business!"""
        
        else:
            bot_response = """🤖 I'm here to help! Try asking me:

• "How is [client name] performing?"
• "Which clients are trending up?"
• "Who needs attention?"
• "What's our average ROI?"
• "Show me the best performers"

Or use the quick action buttons above!"""
        
        st.session_state.chat_history.append({"role": "bot", "content": bot_response})
        st.rerun()
    
    # Clear chat button
    if st.button("Clear Chat"):
        st.session_state.chat_history = []
        st.rerun()

elif page == "📊 ROI Calculator":
    _html("""
    <div class="dashboard-header">
        <h1>📊 ROI Calculator</h1>
        <p>See the real value this dashboard delivers to your agency.</p>
    </div>
    """)
    
    # Current State
    _html('<div class="section-header">Your Current State</div>')
    
    col1, col2, col3 = st.columns(3)
    
    with col1:
        hours_per_week = st.number_input("Hours/week on reporting", value=11, min_value=0, max_value=40)
    
    with col2:
        hourly_value = st.number_input("Your hourly value ($)", value=150, min_value=50, max_value=500)
    
    with col3:
        num_clients = st.number_input("Number of clients", value=8, min_value=1, max_value=50)
    
    # Calculate current costs
    weekly_cost = hours_per_week * hourly_value
    annual_cost = weekly_cost * 52
    
    _html(f"""
    <div style="background: #fee2e2; padding: 1.5rem; border-radius: 12px; margin: 2rem 0;">
        <h4 style="color: #991b1b; margin-top: 0;">💸 Current Annual Cost: ${annual_cost:,.0f}</h4>
        <p style="color: #7f1d1d; margin-bottom: 0;">
            You're spending {hours_per_week} hours/week × ${hourly_value}/hour × 52 weeks = <strong>${annual_cost:,.0f}</strong> annually on reporting
        </p>
    </div>
    """)
    
    # With Dashboard
    _html('<div class="section-header">With Dashboard Solution</div>')
    
    col1, col2, col3 = st.columns(3)
    
    with col1:
        new_hours = st.number_input("New hours/week on reporting", value=2, min_value=0, max_value=20)
    
    with col2:
        retention_improvement = st.slider("Retention improvement (%)", 0, 50, 10)
    
    with col3:
        new_clients = st.number_input("Additional clients/year", value=2, min_value=0, max_value=20)
    
    # Calculate savings and gains
    new_weekly_cost = new_hours * hourly_value
    new_annual_cost = new_weekly_cost * 52
    time_savings = annual_cost - new_annual_cost
    
    avg_retainer = clients_df['monthly_retainer'].mean()
    retention_value = (retention_improvement / 100) * num_clients * avg_retainer * 12
    new_client_value = new_clients * avg_retainer * 12
    
    total_value = time_savings + retention_value + new_client_value
    
    # Dashboard investment
    dashboard_cost = 2500 * 12  # Monthly fee
    
    net_benefit = total_value - dashboard_cost
    roi_percentage = (net_benefit / dashboard_cost) * 100
    
    # Display results
    st.markdown("")
    
    col1, col2 = st.columns(2)
    
    with col1:
        _html(f"""
        <div class="roi-highlight">
            <div style="font-size: 1rem; margin-bottom: 0.5rem;">ANNUAL VALUE CREATED</div>
            <div class="roi-number">${total_value:,.0f}</div>
        </div>
        """)
    
    with col2:
        _html(f"""
        <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white; padding: 2rem; border-radius: 12px; text-align: center;">
            <div style="font-size: 1rem; margin-bottom: 0.5rem;">NET ROI</div>
            <div style="font-size: 3.5rem; font-weight: 800;">{roi_percentage:.0f}%</div>
        </div>
        """)
    
    st.markdown("")
    
    # Breakdown
    _html('<div class="section-header">Value Breakdown</div>')
    
    col1, col2, col3, col4 = st.columns(4)
    
    with col1:
        st.metric("Time Savings", f"${time_savings:,}", f"{((time_savings/annual_cost)*100):.0f}% reduction")
    
    with col2:
        st.metric("Retention Value", f"${retention_value:,}", f"+{retention_improvement}%")
    
    with col3:
        st.metric("New Client Value", f"${new_client_value:,}", f"+{new_clients} clients")
    
    with col4:
        st.metric("Dashboard Cost", f"-${dashboard_cost:,}", "Annual investment")
    
    # Final net benefit
    st.markdown("")
    
    _html(f"""
    <div style="background: #d1fae5; padding: 2rem; border-radius: 12px; text-align: center;">
        <h3 style="color: #065f46; margin-top: 0;">🎯 Net Annual Benefit: ${net_benefit:,.0f}</h3>
        <p style="color: #047857; margin-bottom: 0; font-size: 1.1rem;">
            For every $1 you invest in the dashboard, you get ${(total_value/dashboard_cost):.2f} back in value
        </p>
    </div>
    """)
    
    # What you get section
    st.markdown("")
    _html('<div class="section-header">What You Get</div>')
    
    col1, col2, col3 = st.columns(3)
    
    with col1:
        st.markdown("""
        **⏰ Time Savings**
        • 80-90% reduction in reporting time
        • No more manual report creation
        • Automated data collection
        • Instant client insights
        """)
    
    with col2:
        st.markdown("""
        **💼 Business Growth**
        • Higher client retention
        • Easier new client acquisition
        • Tangible differentiator
        • Premium pricing justification
        """)
    
    with col3:
        st.markdown("""
        **🎯 Operational Excellence**
        • Team makes better decisions
        • Proactive client management
        • Data-driven strategies
        • Scalable processes
        """)

elif page == "⚙️ Settings":
    _html("""
    <div class="dashboard-header">
        <h1>⚙️ Settings</h1>
        <p>Manage your dashboard preferences and integrations.</p>
    </div>
    """)
    
    tab1, tab2, tab3 = st.tabs(["🔌 Integrations", "👥 Team Management", "🔔 Notifications"])
    
    with tab1:
        _html('<div class="section-header">Connected Data Sources</div>')
        
        # Google Analytics
        col1, col2, col3 = st.columns([3, 1, 1])
        with col1:
            st.write("**Google Analytics 4**")
            st.caption("Primary website traffic data")
        with col2:
            st.caption("🟢 Connected")
        with col3:
            st.button("Configure", key="ga4_config")
        
        st.markdown("---")
        
        # Google Search Console
        col1, col2, col3 = st.columns([3, 1, 1])
        with col1:
            st.write("**Google Search Console**")
            st.caption("Search performance and visibility")
        with col2:
            st.caption("🟢 Connected")
        with col3:
            st.button("Configure", key="gsc_config")
        
        st.markdown("---")
        
        # Google Business Profile
        col1, col2, col3 = st.columns([3, 1, 1])
        with col1:
            st.write("**Google Business Profile**")
            st.caption("Reviews and local SEO")
        with col2:
            st.caption("🟡 Partial")
        with col3:
            st.button("Configure", key="gbp_config")
        
        st.markdown("---")
        
        # Call Tracking
        col1, col2, col3 = st.columns([3, 1, 1])
        with col1:
            st.write("**CallRail (Call Tracking)**")
            st.caption("Phone call attribution")
        with col2:
            st.caption("⚪ Not connected")
        with col3:
            st.button("Connect", key="callrail_config")
    
    with tab2:
        _html('<div class="section-header">Team Members</div>')
        
        team_members = [
            {"name": "Jeff Kirk", "role": "Owner", "email": "jeff@upatdawn.com", "status": "Active"},
            {"name": "Team Member 1", "role": "Campaign Manager", "email": "team1@upatdawn.com", "status": "Active"},
            {"name": "Team Member 2", "role": "SEO Specialist", "email": "team2@upatdawn.com", "status": "Active"},
        ]
        
        for member in team_members:
            col1, col2, col3, col4 = st.columns([2, 2, 2, 1])
            with col1:
                st.write(f"**{member['name']}**")
            with col2:
                st.write(member['role'])
            with col3:
                st.write(member['email'])
            with col4:
                st.write(member['status'])
            st.markdown("---")
        
        if st.button("➕ Add Team Member"):
            st.info("In the full version, this would open a form to add new team members.")
    
    with tab3:
        _html('<div class="section-header">Notification Preferences</div>')
        
        st.checkbox("📉 Traffic drop alerts (>20%)", value=True)
        st.checkbox("📈 Conversion spike alerts (>50%)", value=True)
        st.checkbox("⚠️ Client health score drops below 60", value=True)
        st.checkbox("📧 Weekly summary email (Mondays)", value=True)
        st.checkbox("📊 Monthly performance report (1st of month)", value=True)
        st.checkbox("💬 New client feedback notifications", value=True)
        
        st.markdown("")
        
        if st.button("Save Preferences"):
            st.success("Preferences saved!")

# Footer
st.markdown("---")
_html("""
<div style="text-align: center; color: #6b7280; padding: 2rem 0;">
    <p><strong>Up At Dawn Marketing Dashboard</strong> | Powered by DR Data Decision Intelligence</p>
    <p style="font-size: 0.875rem;">© 2026 Up At Dawn LLC. All rights reserved.</p>
</div>
""")
