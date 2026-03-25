# 🚀 How to Use Cursor to Build This Dashboard

## What You Have

You now have **TWO Cursor prompts** to choose from:

1. **CURSOR_PROMPT.md** (Comprehensive - 400+ lines)
   - Complete specifications
   - Detailed data schemas
   - Full UI/UX requirements
   - Best for: Understanding every detail

2. **CURSOR_PROMPT_SHORT.md** (Quick Build - 500+ lines)
   - Ready-to-use code
   - Copy-paste implementation
   - Minimal explanation
   - Best for: Fast building

---

## Method 1: Quick Build (Recommended)

Use **CURSOR_PROMPT_SHORT.md** for fastest results.

### Step 1: Open Cursor IDE
1. Launch Cursor (cursor.sh)
2. Create new folder: `jeff_dashboard/`
3. Open folder in Cursor

### Step 2: Create Files
In Cursor, create these files in order:

1. **data/clients.csv** - Copy from prompt
2. **data/metrics.csv** - Generate 12 months per client
3. **data/feedback.csv** - 3-5 entries per client
4. **data/client_summary.csv** - Calculate from metrics
5. **app.py** - Copy the complete code
6. **requirements.txt** - Copy dependencies
7. **.streamlit/config.toml** - Copy theme config

### Step 3: Generate Data
Use Cursor's AI chat:
```
"Generate 12 months of realistic metrics data for 8 clients 
with these fields: client_id, date, month_year, sessions, 
impressions, clicks, ctr, position, avg_session_duration, 
bounce_rate, pages_per_session, conversions, conversion_rate, 
review_count, avg_rating, new_reviews

Make Premier Fence have declining trends, Elite HVAC have 
exceptional growth, others moderate growth."
```

### Step 4: Run & Test
```bash
pip install -r requirements.txt
streamlit run app.py
```

---

## Method 2: Step-by-Step Build

Use **CURSOR_PROMPT.md** for detailed guidance.

### Phase 1: Setup (10 minutes)
1. Create folder structure
2. Create requirements.txt
3. Create .streamlit/config.toml
4. Set up virtual environment

### Phase 2: Data (20 minutes)
1. Create clients.csv (8 clients)
2. Generate metrics.csv (12 months each)
3. Create feedback.csv (3-5 per client)
4. Calculate client_summary.csv

### Phase 3: Core App (30 minutes)
1. Build app.py framework
2. Implement data loading
3. Add navigation
4. Create Executive Dashboard

### Phase 4: Features (40 minutes)
1. Client Management page
2. Jeff AI Bot
3. ROI Calculator
4. Settings page

### Phase 5: Polish (20 minutes)
1. Add custom CSS
2. Test all features
3. Fix any issues
4. Deploy

---

## Using Cursor's AI Features

### Inline Editing (Cmd+K)
Highlight code and press Cmd+K to:
- "Make this card look more modern"
- "Add a trend indicator to this metric"
- "Fix this chart styling"

### AI Chat (Cmd+L)
Ask Cursor:
- "How do I add a new chart to the Performance tab?"
- "Generate fake data for 8 service business clients"
- "Make the health score calculation more accurate"
- "Add error handling to the data loading"

### Code Generation
Select area and type:
- "Generate a function to calculate ROI"
- "Create a styled metric card component"
- "Build a client health scoring algorithm"

---

## Quick Commands for Cursor

### Generate Data
```
"Create a Python script to generate 12 months of fake 
Google Analytics data for 8 service business clients. 
Include sessions, impressions, clicks, conversions. 
Make some trending up, some down."
```

### Create Component
```
"Build a reusable KPI card component with:
- Large number display
- Label above
- Trend indicator (up/down arrow with %)
- Clean white background
- Subtle shadow"
```

### Fix Issue
```
"This chart isn't rendering properly. The x-axis labels 
are overlapping. Fix the layout and make it responsive."
```

### Add Feature
```
"Add a filter to the Executive Dashboard that lets Jeff 
filter clients by status (on_track, attention, action_required)"
```

---

## Testing Checklist

Use Cursor to verify:

- [ ] All 8 clients display correctly
- [ ] Charts render with Plotly
- [ ] Health scores calculate properly
- [ ] AI Bot responds to quick actions
- [ ] ROI Calculator shows 439%
- [ ] Mobile view works
- [ ] No console errors
- [ ] Data loads from CSV files

---

## Deployment with Cursor

### Deploy to Streamlit Cloud
1. In Cursor terminal:
```bash
git init
git add .
git commit -m "Initial commit"
```

2. Push to GitHub (use Cursor's Git integration)

3. Go to streamlit.io/cloud

4. Deploy (Cursor can't do this part - do it in browser)

### Deploy to Railway
1. In Cursor terminal:
```bash
railway login
railway init
railway up
```

---

## Cursor Tips & Tricks

### 1. Use @ Mentions
Type `@` to reference:
- Files: "@app.py add a new function"
- Code: "@line 45 fix this bug"
- Docs: "@docs how do I deploy?"

### 2. Context Awareness
Cursor remembers your codebase. Ask:
- "What functions exist in app.py?"
- "Show me all the places we calculate ROI"
- "Find where we load client data"

### 3. Multi-File Editing
Select multiple files, then:
- "Add error handling to all data loading"
- "Update all chart colors to match theme"
- "Refactor repeated code into functions"

### 4. Terminal Integration
Use Cursor's built-in terminal:
- `pip install -r requirements.txt`
- `streamlit run app.py`
- `git push origin main`

---

## Common Cursor Prompts

### "Generate fake data for me"
```
"Generate a CSV file with 12 months of fake Google Analytics 
data for these 8 clients: [paste client list]. Include: 
sessions, impressions, clicks, conversions, bounce_rate, 
pages_per_session, avg_session_duration. Make Premier Fence 
declining, Elite HVAC exceptional growth, others moderate."
```

### "Build this page"
```
"Create the Executive Dashboard page with:
1. Header with gradient background
2. 4 KPI cards (Total Clients, Campaigns, Revenue, Health)
3. Client Performance Matrix (3-column grid)
4. Alerts section
5. Performance charts (sessions & conversions)"
```

### "Add this feature"
```
"Add a Jeff AI Bot page with:
1. Quick action buttons (Performance, Attention, ROI, Focus)
2. Chat interface
3. Pre-written responses
4. Natural language input"
```

### "Fix this bug"
```
"The health score calculation is wrong. It should be:
- Base: 70
- +15 if session_trend > 5%
- -20 if session_trend < -5%
- Clamp to 0-100

Fix the code in client_summary.csv generation."
```

---

## Example Workflow

### Hour 1: Setup & Data
1. "Create the folder structure for a Streamlit app"
2. "Generate fake client data for 8 service businesses"
3. "Create the CSV files with proper schemas"
4. "Set up the main app.py file"

### Hour 2: Core Dashboard
1. "Build the Executive Dashboard page"
2. "Add KPI cards with trend indicators"
3. "Create the client performance matrix"
4. "Add performance charts"

### Hour 3: Client Views & AI
1. "Build individual client dashboard"
2. "Add tabs for Performance, Search, Reviews, Feedback"
3. "Create the Jeff AI Bot page"
4. "Add quick action buttons and chat"

### Hour 4: ROI & Polish
1. "Build the ROI Calculator"
2. "Add Settings page"
3. "Apply custom CSS styling"
4. "Test and fix any issues"

### Hour 5: Deploy
1. "Create requirements.txt"
2. "Set up Git repository"
3. "Deploy to Streamlit Cloud"
4. "Test live version"

---

## Troubleshooting with Cursor

### Issue: "Module not found"
Ask Cursor:
```
"I'm getting 'ModuleNotFoundError: No module named plotly'. 
Fix the requirements.txt and show me how to install."
```

### Issue: "Chart not displaying"
Ask Cursor:
```
"This Plotly chart isn't showing. Debug the code and fix it."
```

### Issue: "Data not loading"
Ask Cursor:
```
"The CSV files aren't loading properly. Add error handling 
and show me what's wrong."
```

### Issue: "Styling looks bad"
Ask Cursor:
```
"The dashboard looks unprofessional. Improve the CSS styling 
to look modern and polished."
```

---

## Final Checklist

Before showing Jeff, ask Cursor:

- [ ] "Review all the code and fix any bugs"
- [ ] "Make sure all 8 clients display correctly"
- [ ] "Verify the ROI Calculator shows 439%"
- [ ] "Test the AI Bot responses"
- [ ] "Check mobile responsiveness"
- [ ] "Optimize performance"
- [ ] "Add any missing features"

---

## Success Metrics

Your dashboard is ready when:

✅ All pages load without errors  
✅ 8 clients with realistic data  
✅ Charts render properly  
✅ AI Bot responds intelligently  
✅ ROI Calculator shows 439%  
✅ Professional appearance  
✅ Mobile-friendly  
✅ Deployed and accessible  

---

## Need Help?

If you get stuck:

1. **Check the existing files** - Reference the POC I built
2. **Ask Cursor** - "How do I [specific task]?"
3. **Use the prompts** - Copy from CURSOR_PROMPT_SHORT.md
4. **Test incrementally** - Build one page at a time

---

## Time Estimate

- **Quick Build (copy-paste):** 30 minutes
- **Step-by-step with Cursor:** 2-3 hours
- **Full custom build:** 4-5 hours

---

**Ready? Open Cursor and start building! 🚀**

Copy the code from CURSOR_PROMPT_SHORT.md and paste it into Cursor. The AI will help you fill in the gaps and customize as needed.
