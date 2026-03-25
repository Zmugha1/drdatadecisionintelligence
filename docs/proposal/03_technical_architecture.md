# Technical Architecture Document
## Marketing Dashboard POC for Up At Dawn LLC

**Document Version:** 1.0  
**Date:** January 2025  
**Prepared For:** Jeffrey Kirk, Up At Dawn LLC  
**Project:** drdatadecisionintelligence.com Dashboard Platform

---

## Executive Summary

This document outlines the technical architecture for a multi-tenant marketing analytics dashboard designed for Up At Dawn LLC. The architecture prioritizes cost-effectiveness, rapid deployment, and scalability while maintaining enterprise-grade security standards.

**Key Decisions:**
- **Frontend:** Streamlit (confirmed per Zubia's recommendation) with custom theming
- **Backend:** Python with FastAPI for API layer
- **Database:** PostgreSQL for structured data, Redis for caching
- **Hosting:** Railway/Render for POC (free tier), AWS/GCP for production
- **Data Pipeline:** Apache Airflow (lightweight) or Python scheduled jobs

---

## 1. Architecture Overview

### 1.1 High-Level System Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              CLIENT LAYER                                    │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │   Client A   │  │   Client B   │  │   Client C   │  │   Admin      │     │
│  │  Dashboard   │  │  Dashboard   │  │  Dashboard   │  │   Portal     │     │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘     │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                           APPLICATION LAYER                                  │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                    Streamlit Frontend (Multi-tenant)                 │    │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐ │    │
│  │  │  Auth       │  │  Dashboard  │  │  Reports    │  │  AI Chat    │ │    │
│  │  │  Module     │  │  Views      │  │  Generator  │  │  (Jeff Bot) │ │    │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘ │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                    │                                         │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                    FastAPI Backend Services                          │    │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐ │    │
│  │  │  Auth API   │  │  Data API   │  │  Report API │  │  AI API     │ │    │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘ │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                            DATA LAYER                                        │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐             │
│  │   PostgreSQL    │  │     Redis       │  │   Object Store  │             │
│  │   (Primary DB)  │  │   (Cache/Queue) │  │   (Reports/Logs)│             │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘             │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                         INTEGRATION LAYER                                    │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │  Google     │  │  Google     │  │  Google     │  │  External   │        │
│  │  Analytics  │  │  Search     │  │  Ads API    │  │  APIs       │        │
│  │  4 API      │  │  Console    │  │             │  │             │        │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘        │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 1.2 Component Descriptions

| Component | Purpose | Technology |
|-----------|---------|------------|
| **Streamlit Frontend** | Interactive dashboards, visualizations | Streamlit + Plotly + Custom CSS |
| **FastAPI Backend** | RESTful API, business logic, authentication | Python FastAPI |
| **PostgreSQL** | Primary database for all structured data | PostgreSQL 15+ |
| **Redis** | Session cache, rate limiting, job queue | Redis 7+ |
| **Object Storage** | Report exports, log files | AWS S3 / Cloudflare R2 |
| **ETL Scheduler** | Automated data extraction | Python + APScheduler / Airflow |

---

## 2. Technology Stack Recommendation

### 2.1 Frontend Layer

| Component | Recommendation | Rationale |
|-----------|----------------|-----------|
| **Primary Framework** | **Streamlit** | Rapid development, Python-native, confirmed by Zubia |
| **Visualization** | Plotly + Streamlit-native charts | Interactive, professional look |
| **Styling** | Custom CSS + Streamlit theming | Brand alignment with drdatadecisionintelligence.com |
| **State Management** | Streamlit session_state | Built-in, no additional complexity |

**Streamlit vs Alternatives Analysis:**

| Criteria | Streamlit | Dash | Gradio | Custom React |
|----------|-----------|------|--------|--------------|
| Development Speed | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |
| Python Integration | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ |
| Customization | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Hosting Ease | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| Learning Curve | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |
| **Recommendation** | ✅ **USE** | - | - | Future upgrade |

### 2.2 Backend Layer

| Component | Recommendation | Rationale |
|-----------|----------------|-----------|
| **API Framework** | **FastAPI** | High performance, auto-docs, async support |
| **Language** | Python 3.11+ | Team familiarity, rich ecosystem |
| **Authentication** | JWT + OAuth2 | Industry standard, Google OAuth ready |
| **Validation** | Pydantic | Type safety, auto-validation |

### 2.3 Database Layer

| Component | Recommendation | Rationale |
|-----------|----------------|-----------|
| **Primary Database** | **PostgreSQL** | Robust, scalable, JSON support |
| **Cache Layer** | **Redis** | Fast sessions, rate limiting |
| **Vector Store** | pgvector (PostgreSQL extension) | For AI/semantic search features |

### 2.4 Hosting Options (Cost-Optimized for POC)

| Stage | Platform | Cost | Pros | Cons |
|-------|----------|------|------|------|
| **POC (Now)** | **Railway** or **Render** | $0-20/mo | Free tier, easy deploy, PostgreSQL included | Limited scale |
| **MVP (Month 2)** | **Railway Pro** or **Fly.io** | $20-50/mo | Better performance, custom domains | Manual scaling |
| **Production** | **AWS/GCP** | $100-500/mo | Full control, auto-scaling, SLA | Complexity |

**Recommended POC Stack:**
- **Primary:** Railway (free tier: 500 hours/month, $5 credit)
- **Alternative:** Render (free tier: always-on web services)
- **Database:** Railway PostgreSQL or Supabase (free tier)

### 2.5 Complete Tech Stack Summary

```
┌────────────────────────────────────────────────────────────┐
│                    TECHNOLOGY STACK                         │
├────────────────────────────────────────────────────────────┤
│ Frontend    │ Streamlit 1.28+, Plotly 5.17+, Custom CSS   │
│ Backend     │ FastAPI 0.104+, Pydantic 2.4+, Uvicorn      │
│ Database    │ PostgreSQL 15+, Redis 7+, pgvector          │
│ ETL/Tasks   │ Python 3.11+, APScheduler, Pandas           │
│ Auth        │ JWT, Google OAuth2, python-jose             │
│ APIs        │ google-analytics-data, google-searchconsole │
│ AI/ML       │ OpenAI API, LangChain (for Jeff Bot)        │
│ Hosting     │ Railway/Render (POC), AWS/GCP (Production)  │
│ CI/CD       │ GitHub Actions                              │
│ Monitoring  │ Sentry (free tier), Logtail                 │
└────────────────────────────────────────────────────────────┘
```

---

## 3. Data Pipeline Design

### 3.1 ETL Process Flow

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         ETL PIPELINE ARCHITECTURE                        │
└─────────────────────────────────────────────────────────────────────────┘

  ┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────┐
  │   EXTRACT   │────▶│ TRANSFORM   │────▶│    LOAD     │────▶│  SERVE  │
  └─────────────┘     └─────────────┘     └─────────────┘     └─────────┘
        │                   │                   │                  │
        ▼                   ▼                   ▼                  ▼
  ┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────┐
  │ • GA4 API   │     │ • Data      │     │ • PostgreSQL│     │ • API   │
  │ • GSC API   │     │   Cleaning  │     │ • Upserts   │     │ • Cache │
  │ • Google Ads│     │ • Aggregation│    │ • Partitions│     │ • Views │
  │ • Client CSV│     │ • Enrichment│     │ • Indexes   │     │         │
  └─────────────┘     └─────────────┘     └─────────────┘     └─────────┘
        │                   │                   │
        └───────────────────┴───────────────────┘
                            │
                    ┌───────▼────────┐
                    │  SCHEDULER     │
                    │  (APScheduler) │
                    │  • Hourly      │
                    │  • Daily       │
                    │  • On-demand   │
                    └────────────────┘
```

### 3.2 Data Extraction Strategy

#### Google Analytics 4 (GA4)

| Aspect | Details |
|--------|---------|
| **API** | Google Analytics Data API v1 |
| **Python Library** | `google-analytics-data` |
| **Authentication** | Service Account (OAuth 2.0) |
| **Rate Limits** | 1,200 requests per minute per property |
| **Data Freshness** | 24-48 hours for complete data |

**Key Metrics to Extract:**
```python
GA4_METRICS = [
    "sessions",
    "totalUsers", 
    "newUsers",
    "bounceRate",
    "averageSessionDuration",
    "conversions",
    "eventCount",
    "screenPageViews"
]

GA4_DIMENSIONS = [
    "date",
    "pageTitle",
    "pagePath",
    "deviceCategory",
    "sessionSource",
    "sessionMedium",
    "sessionCampaign"
]
```

#### Google Search Console (GSC)

| Aspect | Details |
|--------|---------|
| **API** | Google Search Console API v3 |
| **Python Library** | `google-searchconsole` or direct API |
| **Authentication** | Service Account (OAuth 2.0) |
| **Rate Limits** | 600 queries per minute |
| **Data Freshness** | 2-3 days delay |

**Key Metrics to Extract:**
```python
GSC_METRICS = [
    "clicks",
    "impressions", 
    "ctr",
    "position"
]

GSC_DIMENSIONS = [
    "date",
    "query",
    "page",
    "device",
    "country"
]
```

### 3.3 Data Transformation Requirements

```
┌─────────────────────────────────────────────────────────────────┐
│                    TRANSFORMATION PIPELINE                       │
└─────────────────────────────────────────────────────────────────┘

Raw Data Input
      │
      ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ 1. VALIDATION   │───▶│ 2. CLEANING     │───▶│ 3. NORMALIZATION│
│ • Schema check  │    │ • Null handling │    │ • Date formats  │
│ • Type casting  │    │ • Outlier detect│    │ • Currency      │
│ • Range checks  │    │ • Deduplication │    │ • Percentages   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                                      │
      ┌───────────────────────────────────────────────┘
      ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ 4. AGGREGATION  │───▶│ 5. ENRICHMENT   │───▶│ 6. OUTPUT       │
│ • Daily/Weekly  │    │ • Calculated    │    │ • Structured    │
│ • Monthly       │    │   metrics       │    │   records       │
│ • Client-level  │    │ • Trends        │    │ • Batch ready   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

**Calculated Metrics to Generate:**
- Conversion Rate = Conversions / Sessions
- Bounce Rate (normalized)
- Traffic Growth % (WoW, MoM)
- Keyword Ranking Changes
- Cost Per Lead (if ad data available)

### 3.4 Data Loading Strategy

| Strategy | Implementation | Purpose |
|----------|----------------|---------|
| **Incremental Load** | `ON CONFLICT UPDATE` | Daily updates without duplicates |
| **Partitioning** | By `client_id` + `date` | Query performance |
| **Batch Size** | 1,000 records per batch | Memory efficiency |
| **Retry Logic** | 3 attempts with backoff | API resilience |

### 3.5 ETL Schedule

```python
ETL_SCHEDULE = {
    "hourly_sync": {
        "sources": ["client_feedback"],
        "time": "Every hour",
        "priority": "high"
    },
    "daily_sync": {
        "sources": ["ga4", "gsc"],
        "time": "03:00 UTC",  # After GA4 data refresh
        "priority": "high"
    },
    "weekly_report": {
        "sources": ["all"],
        "time": "Monday 06:00 UTC",
        "priority": "medium"
    },
    "monthly_rollup": {
        "sources": ["all"],
        "time": "1st of month 08:00 UTC",
        "priority": "low"
    }
}
```

---

## 4. Database Schema Design

### 4.1 Entity Relationship Diagram (Conceptual)

```
┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐
│    clients      │       │  client_users   │       │   api_tokens    │
├─────────────────┤       ├─────────────────┤       ├─────────────────┤
│ PK id           │◄──────┤ PK id           │       │ PK id           │
│    name         │       │ FK client_id    │◄──────┤ FK client_id    │
│    domain       │       │    email        │       │    token_hash   │
│    ga_property  │       │    role         │       │    expires_at   │
│    gsc_property │       │    created_at   │       │    created_at   │
│    created_at   │       └─────────────────┘       └─────────────────┘
└─────────────────┘
         │
         │
         ▼
┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐
│  ga4_metrics    │       │  gsc_metrics    │       │  custom_events  │
├─────────────────┤       ├─────────────────┤       ├─────────────────┤
│ PK id           │       │ PK id           │       │ PK id           │
│ FK client_id    │       │ FK client_id    │       │ FK client_id    │
│    date         │       │    date         │       │    event_type   │
│    sessions     │       │    query        │       │    event_data   │
│    users        │       │    page         │       │    occurred_at  │
│    conversions  │       │    clicks       │       └─────────────────┘
│    bounce_rate  │       │    impressions  │
│    created_at   │       │    position     │
└─────────────────┘       └─────────────────┘
         │
         ▼
┌─────────────────┐       ┌─────────────────┐
│  reports        │       │  ai_conversations│
├─────────────────┤       ├─────────────────┤
│ PK id           │       │ PK id           │
│ FK client_id    │       │ FK client_id    │
│    report_type  │       │ FK user_id      │
│    parameters   │       │    query        │
│    generated_at │       │    response     │
│    file_url     │       │    context_used │
└─────────────────┘       └─────────────────┘
```

### 4.2 Detailed Table Schemas

#### Table: `clients`
```sql
CREATE TABLE clients (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    domain VARCHAR(255) NOT NULL UNIQUE,
    ga_property_id VARCHAR(50),
    gsc_property_url VARCHAR(500),
    google_ads_customer_id VARCHAR(50),
    status VARCHAR(20) DEFAULT 'active',
    settings JSONB DEFAULT '{}',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_clients_status ON clients(status);
CREATE INDEX idx_clients_domain ON clients(domain);
```

#### Table: `client_users`
```sql
CREATE TABLE client_users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_id UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
    email VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255), -- NULL for OAuth users
    google_oauth_id VARCHAR(255),
    role VARCHAR(20) DEFAULT 'viewer', -- admin, editor, viewer
    last_login TIMESTAMP,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(client_id, email)
);

CREATE INDEX idx_client_users_client ON client_users(client_id);
CREATE INDEX idx_client_users_email ON client_users(email);
```

#### Table: `ga4_metrics`
```sql
CREATE TABLE ga4_metrics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_id UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
    date DATE NOT NULL,
    sessions INTEGER DEFAULT 0,
    total_users INTEGER DEFAULT 0,
    new_users INTEGER DEFAULT 0,
    bounce_rate DECIMAL(5,2),
    avg_session_duration_seconds INTEGER,
    conversions INTEGER DEFAULT 0,
    event_count INTEGER DEFAULT 0,
    page_views INTEGER DEFAULT 0,
    source_medium_breakdown JSONB, -- Detailed breakdown
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(client_id, date)
);

CREATE INDEX idx_ga4_client_date ON ga4_metrics(client_id, date);
CREATE INDEX idx_ga4_date ON ga4_metrics(date);
```

#### Table: `gsc_metrics`
```sql
CREATE TABLE gsc_metrics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_id UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
    date DATE NOT NULL,
    query VARCHAR(500),
    page VARCHAR(1000),
    device VARCHAR(20),
    country VARCHAR(10),
    clicks INTEGER DEFAULT 0,
    impressions INTEGER DEFAULT 0,
    ctr DECIMAL(5,4),
    position DECIMAL(5,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(client_id, date, query, page, device, country)
);

CREATE INDEX idx_gsc_client_date ON gsc_metrics(client_id, date);
CREATE INDEX idx_gsc_query ON gsc_metrics(query);
CREATE INDEX idx_gsc_page ON gsc_metrics(page);
```

#### Table: `client_feedback`
```sql
CREATE TABLE client_feedback (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_id UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
    feedback_type VARCHAR(50), -- lead, call, sale, complaint
    description TEXT,
    value DECIMAL(10,2), -- monetary value if applicable
    occurred_at TIMESTAMP NOT NULL,
    recorded_by UUID REFERENCES client_users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_feedback_client_date ON client_feedback(client_id, occurred_at);
CREATE INDEX idx_feedback_type ON client_feedback(feedback_type);
```

#### Table: `ai_conversations`
```sql
CREATE TABLE ai_conversations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_id UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
    user_id UUID REFERENCES client_users(id),
    session_id VARCHAR(100),
    query TEXT NOT NULL,
    response TEXT NOT NULL,
    context_data JSONB, -- Data used for context
    tokens_used INTEGER,
    response_time_ms INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_ai_client_session ON ai_conversations(client_id, session_id);
CREATE INDEX idx_ai_created ON ai_conversations(created_at);
```

### 4.3 Data Retention Policy

| Data Type | Retention Period | Archive Strategy |
|-----------|------------------|------------------|
| Raw API data | 90 days | Compress to S3 after 90 days |
| Aggregated metrics | 2 years | Monthly rollups after 1 year |
| AI conversations | 1 year | Anonymize after 90 days |
| Report files | 6 months | Auto-delete after 6 months |
| Audit logs | 1 year | Archive to cold storage |

---

## 5. API Integration Plan

### 5.1 Google Analytics 4 API Integration

#### Authentication Setup
```python
# Service Account Authentication (Recommended for server-to-server)
from google.oauth2 import service_account
from google.analytics.data_v1beta import BetaAnalyticsDataClient

GA4_CREDENTIALS = service_account.Credentials.from_service_account_file(
    'ga4-service-account.json',
    scopes=['https://www.googleapis.com/auth/analytics.readonly']
)

ga4_client = BetaAnalyticsDataClient(credentials=GA4_CREDENTIALS)
```

#### API Methods

| Method | Purpose | Frequency |
|--------|---------|-----------|
| `run_report()` | Standard metrics | Daily |
| `run_pivot_report()` | Multi-dimensional analysis | Weekly |
| `get_metadata()` | Available dimensions/metrics | On setup |
| `check_compatibility()` | Validate metric combinations | On setup |

#### Sample API Call
```python
def fetch_ga4_metrics(property_id: str, start_date: str, end_date: str):
    """Fetch daily metrics from GA4"""
    from google.analytics.data_v1beta.types import (
        DateRange, Dimension, Metric, RunReportRequest
    )
    
    request = RunReportRequest(
        property=f"properties/{property_id}",
        dimensions=[
            Dimension(name="date"),
            Dimension(name="sessionSource"),
            Dimension(name="sessionMedium")
        ],
        metrics=[
            Metric(name="sessions"),
            Metric(name="totalUsers"),
            Metric(name="conversions")
        ],
        date_ranges=[DateRange(start_date=start_date, end_date=end_date)]
    )
    
    response = ga4_client.run_report(request)
    return process_ga4_response(response)
```

### 5.2 Google Search Console API Integration

#### Authentication Setup
```python
from google.oauth2 import service_account
from googleapiclient.discovery import build

GSC_CREDENTIALS = service_account.Credentials.from_service_account_file(
    'gsc-service-account.json',
    scopes=['https://www.googleapis.com/auth/webmasters.readonly']
)

gsc_service = build('webmasters', 'v3', credentials=GSC_CREDENTIALS)
```

#### API Methods

| Method | Purpose | Frequency |
|--------|---------|-----------|
| `searchanalytics/query` | Search performance data | Daily |
| `sites/list` | List verified properties | On setup |
| `sites/get` | Property details | On setup |

#### Sample API Call
```python
def fetch_gsc_metrics(site_url: str, start_date: str, end_date: str):
    """Fetch search analytics from GSC"""
    request = {
        'startDate': start_date,
        'endDate': end_date,
        'dimensions': ['date', 'query', 'page'],
        'rowLimit': 25000  # Max per request
    }
    
    response = gsc_service.searchanalytics().query(
        siteUrl=site_url, 
        body=request
    ).execute()
    
    return process_gsc_response(response)
```

### 5.3 Rate Limiting & Quota Management

```python
# Rate limiter implementation
from functools import wraps
import time

class RateLimiter:
    def __init__(self, calls_per_minute: int):
        self.calls_per_minute = calls_per_minute
        self.interval = 60.0 / calls_per_minute
        self.last_call = 0
    
    def __call__(self, func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            elapsed = time.time() - self.last_call
            if elapsed < self.interval:
                time.sleep(self.interval - elapsed)
            self.last_call = time.time()
            return func(*args, **kwargs)
        return wrapper

# Apply to API calls
@RateLimiter(calls_per_minute=100)  # Conservative for GA4
def fetch_ga4_with_rate_limit(...):
    ...
```

### 5.4 API Quota Summary

| API | Daily Quota | Per-Minute | Strategy |
|-----|-------------|------------|----------|
| GA4 Data API | 200,000 tokens | 1,200 requests | Batch requests, cache heavily |
| GSC API | 600 queries/min | 600 queries | Spread requests across hour |
| Google Ads API | 10,000 operations | 3,600 operations | Use incremental updates |

---

## 6. Security Architecture

### 6.1 Data Security Layers

```
┌─────────────────────────────────────────────────────────────────┐
│                    SECURITY ARCHITECTURE                         │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ LAYER 1: TRANSPORT SECURITY                                      │
│ • TLS 1.3 for all connections                                    │
│ • HSTS headers                                                   │
│ • Certificate pinning (production)                               │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ LAYER 2: APPLICATION SECURITY                                    │
│ • JWT-based authentication                                       │
│ • OAuth 2.0 for Google services                                  │
│ • Input validation (Pydantic)                                    │
│ • SQL injection prevention (SQLAlchemy ORM)                      │
│ • XSS protection                                                 │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ LAYER 3: DATA SECURITY                                           │
│ • AES-256 encryption at rest                                     │
│ • Field-level encryption for PII                                 │
│ • Secure credential storage (environment variables)              │
│ • Database connection encryption                                 │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ LAYER 4: ACCESS CONTROL                                          │
│ • Role-based access control (RBAC)                               │
│ • Client data isolation (row-level security)                     │
│ • API key rotation                                               │
│ • Session timeout (30 min)                                       │
└─────────────────────────────────────────────────────────────────┘
```

### 6.2 Authentication Flow

```
┌──────────┐                              ┌──────────┐
│  User    │                              │  System  │
└────┬─────┘                              └────┬─────┘
     │                                         │
     │ 1. Login Request                        │
     │────────────────────────────────────────▶│
     │                                         │
     │ 2. Validate Credentials                 │
     │    (or Google OAuth)                    │
     │                                         │
     │ 3. Generate JWT                         │
     │◀────────────────────────────────────────│
     │                                         │
     │ 4. Access Dashboard with JWT            │
     │────────────────────────────────────────▶│
     │                                         │
     │ 5. Validate JWT + Check Client Access   │
     │                                         │
     │ 6. Return Client-Specific Data          │
     │◀────────────────────────────────────────│
```

### 6.3 Client Data Isolation Strategy

```python
# Row-Level Security (RLS) in PostgreSQL
# Enable RLS on tables
ALTER TABLE ga4_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE gsc_metrics ENABLE ROW LEVEL SECURITY;

# Create policy for client isolation
CREATE POLICY client_isolation_policy ON ga4_metrics
    FOR ALL
    USING (client_id = current_setting('app.current_client_id')::UUID);

# Application-level enforcement
def get_client_data(client_id: UUID):
    # Set RLS context
    db.execute("SET app.current_client_id = :client_id", {"client_id": client_id})
    
    # Query automatically filtered by RLS
    return db.query(GA4Metrics).filter(
        GA4Metrics.client_id == client_id
    ).all()
```

### 6.4 Security Checklist

| Category | Requirement | Implementation |
|----------|-------------|----------------|
| **Auth** | Password hashing | bcrypt with salt rounds=12 |
| **Auth** | JWT expiration | 24 hours access, 7 days refresh |
| **Auth** | OAuth scope | Minimum required scopes only |
| **Data** | API keys | Store in environment variables |
| **Data** | Database | Encrypted connections (SSL) |
| **Data** | Backups | Encrypted, tested monthly |
| **App** | Dependencies | Automated vulnerability scanning |
| **App** | Logging | No PII in logs |
| **Infra** | HTTPS only | Redirect HTTP to HTTPS |
| **Infra** | Headers | CSP, X-Frame-Options, X-XSS-Protection |

---

## 7. Deployment Architecture

### 7.1 POC Deployment (Railway)

```
┌─────────────────────────────────────────────────────────────────┐
│                    RAILWAY DEPLOYMENT (POC)                      │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                         Railway Project                          │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │  Streamlit App  │  │   PostgreSQL    │  │     Redis       │ │
│  │  (Web Service)  │  │   (Database)    │  │   (Plugin)      │ │
│  │                 │  │                 │  │                 │ │
│  │  • Auto-deploy  │  │  • Auto-backup  │  │  • Sessions     │ │
│  │  • Custom domain│  │  • 500MB free   │  │  • Caching      │ │
│  │  • 500 hrs/mo   │  │                 │  │                 │ │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      GitHub Repository                           │
│  • Push to main → Auto-deploy                                    │
│  • Environment variables in Railway dashboard                    │
│  • Secrets managed via Railway                                   │
└─────────────────────────────────────────────────────────────────┘
```

### 7.2 Environment Configuration

```yaml
# railway.yaml
services:
  web:
    build:
      dockerfile: Dockerfile
    environment:
      - DATABASE_URL=${{Postgres.DATABASE_URL}}
      - REDIS_URL=${{Redis.REDIS_URL}}
      - SECRET_KEY=${{SECRET_KEY}}
      - GA4_CREDENTIALS=${{GA4_CREDENTIALS}}
      - GSC_CREDENTIALS=${{GSC_CREDENTIALS}}
    healthcheck:
      path: /health
      interval: 10s
```

### 7.3 CI/CD Pipeline (GitHub Actions)

```yaml
# .github/workflows/deploy.yml
name: Deploy to Railway

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.11'
      
      - name: Install dependencies
        run: |
          pip install -r requirements.txt
          pip install pytest
      
      - name: Run tests
        run: pytest
      
      - name: Deploy to Railway
        uses: railway/cli@v2
        with:
          railway_token: ${{ secrets.RAILWAY_TOKEN }}
```

### 7.4 Docker Configuration

```dockerfile
# Dockerfile
FROM python:3.11-slim

WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application
COPY . .

# Expose port
EXPOSE 8501

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:8501/health || exit 1

# Run Streamlit
CMD ["streamlit", "run", "app.py", "--server.port=8501", "--server.address=0.0.0.0"]
```

### 7.5 Environment Variables Template

```bash
# .env.example (NEVER commit actual values)

# Application
APP_NAME="DR Data Dashboard"
APP_ENV=development
SECRET_KEY=your-secret-key-here
DEBUG=true

# Database
DATABASE_URL=postgresql://user:pass@localhost:5432/dashboard

# Cache
REDIS_URL=redis://localhost:6379/0

# Google APIs (Base64 encoded service account JSON)
GA4_CREDENTIALS_BASE64=base64-encoded-service-account-json
GSC_CREDENTIALS_BASE64=base64-encoded-service-account-json

# OpenAI (for Jeff Bot)
OPENAI_API_KEY=sk-...

# Sentry (error tracking)
SENTRY_DSN=https://...
```

---

## 8. Implementation Roadmap

### 8.1 Phase 1: POC (Weeks 1-2)

**Goal:** Demonstrate core functionality with one client

| Week | Task | Deliverable |
|------|------|-------------|
| **W1** | Project setup, database schema | Working local environment |
| **W1** | GA4 API integration | Data extraction working |
| **W1** | Basic Streamlit dashboard | Single-page dashboard |
| **W2** | GSC API integration | Search data displayed |
| **W2** | Authentication system | Login/logout working |
| **W2** | Deploy to Railway | Live POC URL |

**POC Success Criteria:**
- [ ] Single client dashboard displays GA4 and GSC data
- [ ] Data updates daily automatically
- [ ] Basic authentication implemented
- [ ] Deployed and accessible via URL
- [ ] Mobile-responsive design

### 8.2 Phase 2: MVP (Weeks 3-6)

**Goal:** Multi-tenant system ready for 3-5 pilot clients

| Week | Task | Deliverable |
|------|------|-------------|
| **W3** | Multi-tenant architecture | Client isolation working |
| **W3** | User management | Admin portal for clients |
| **W4** | Advanced visualizations | Charts, comparisons, trends |
| **W4** | Report generation | PDF/Excel export |
| **W5** | "Jeff Bot" v1 | Basic AI chat with data context |
| **W5** | Email notifications | Weekly summary emails |
| **W6** | Onboarding flow | Self-service client setup |
| **W6** | Testing & bug fixes | Stable MVP release |

**MVP Success Criteria:**
- [ ] Support 5 concurrent clients
- [ ] Each client sees only their data
- [ ] AI assistant answers basic questions
- [ ] Automated weekly reports
- [ ] Client self-onboarding

### 8.3 Phase 3: Production (Months 3-5)

**Goal:** Scalable platform ready for commercial launch

| Month | Task | Deliverable |
|-------|------|-------------|
| **M3** | Migrate to AWS/GCP | Production infrastructure |
| **M3** | Advanced AI features | Predictive analytics, insights |
| **M4** | White-label options | Custom branding per client |
| **M4** | API for external access | REST API documentation |
| **M5** | Advanced integrations | Google Ads, Facebook, etc. |
| **M5** | Performance optimization | <2s page load times |

**Production Success Criteria:**
- [ ] Support 50+ concurrent clients
- [ ] 99.9% uptime SLA
- [ ] Sub-2-second response times
- [ ] Full white-label capabilities
- [ ] Comprehensive API

### 8.4 Roadmap Visualization

```
Timeline: ──────────────────────────────────────────────────────────▶

PHASE 1: POC (2 weeks)    PHASE 2: MVP (4 weeks)    PHASE 3: PROD (8 weeks)
├────────────────────┤    ├────────────────────┤    ├────────────────────┤
│ • Setup            │    │ • Multi-tenant     │    │ • AWS/GCP infra    │
│ • GA4/GSC APIs     │    │ • User management  │    │ • Advanced AI      │
│ • Basic dashboard  │    │ • Jeff Bot v1      │    │ • White-label      │
│ • Deploy to Railway│    │ • Reports & email  │    │ • Public API       │
└────────────────────┘    └────────────────────┘    └────────────────────┘
         │                          │                         │
         ▼                          ▼                         ▼
    [Demo Ready]              [Pilot Clients]            [Commercial Launch]
```

---

## 9. Cost Estimate

### 9.1 POC Phase (Months 1-2)

| Service | Provider | Monthly Cost |
|---------|----------|--------------|
| Hosting | Railway (free tier) | $0 |
| Database | Railway PostgreSQL | $0 |
| Cache | Railway Redis | $0 |
| Domain | Cloudflare/Namecheap | $10/year |
| Error Tracking | Sentry (free tier) | $0 |
| **Total Monthly** | | **$0-5** |

### 9.2 MVP Phase (Months 2-4)

| Service | Provider | Monthly Cost |
|---------|----------|--------------|
| Hosting | Railway Pro | $20 |
| Database | Railway PostgreSQL (1GB) | $15 |
| Cache | Railway Redis | $10 |
| Object Storage | Cloudflare R2 (1GB) | $0 |
| Email | SendGrid (free tier) | $0 |
| AI (OpenAI) | GPT-4 API (~1000 calls) | $20 |
| Monitoring | Sentry (developer) | $0 |
| **Total Monthly** | | **$65** |

### 9.3 Production Phase (5+ Clients)

| Service | Provider | Monthly Cost |
|---------|----------|--------------|
| Hosting | AWS ECS/Fargate | $50-100 |
| Database | AWS RDS (db.t3.micro) | $15 |
| Cache | ElastiCache (cache.t3.micro) | $15 |
| Storage | S3 (10GB) | $5 |
| CDN | CloudFront | $10 |
| AI (OpenAI) | GPT-4 API (~5000 calls) | $100 |
| Monitoring | DataDog/Sentry | $20 |
| **Total Monthly** | | **$215-265** |

### 9.4 Scaling Projections

| Clients | Infrastructure | AI/ML | Total Monthly |
|---------|----------------|-------|---------------|
| 1-5 | $50 | $20 | $70 |
| 5-15 | $100 | $50 | $150 |
| 15-30 | $200 | $100 | $300 |
| 30-50 | $400 | $200 | $600 |
| 50+ | $800+ | $400+ | $1,200+ |

### 9.5 Cost Optimization Strategies

1. **Use free tiers extensively** during POC/MVP
2. **Reserved instances** for predictable workloads (20-40% savings)
3. **Caching strategy** reduces database load (30-50% savings)
4. **Batch AI requests** instead of real-time (50% savings)
5. **Data archival** to cold storage after 90 days

---

## 10. Risk Assessment

### 10.1 Technical Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| **API Rate Limits** | High | Medium | Implement caching, batch requests, exponential backoff |
| **Data Freshness Delays** | High | Low | Set expectations (24-48h), show "last updated" timestamp |
| **Google API Changes** | Medium | High | Abstract API layer, monitor changelogs, maintain compatibility layer |
| **Database Performance** | Medium | Medium | Indexing, query optimization, connection pooling |
| **Security Breach** | Low | Critical | Encryption, RBAC, regular audits, penetration testing |
| **Third-party Downtime** | Medium | Medium | Graceful degradation, cached data display, status indicators |

### 10.2 Business Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| **Client Data Access Issues** | High | High | Clear onboarding checklist, OAuth flow, support documentation |
| **Scope Creep** | High | Medium | Agile sprints, MVP focus, feature prioritization framework |
| **Competition** | Medium | Medium | AI differentiation, white-label options, superior UX |
| **Scaling Costs** | Medium | Medium | Tiered pricing, usage-based billing, cost monitoring |

### 10.3 Risk Matrix

```
                    IMPACT
              Low    Medium    High
           ┌────────┬────────┬────────┐
    High   │        │ API    │ Client │
           │        │ Limits │ Access │
           ├────────┼────────┼────────┤
Likelihood Medium  │ Data   │ DB     │ Google │
           │ Fresh  │ Perf   │ Changes│
           ├────────┼────────┼────────┤
    Low    │        │ 3rd    │ Security│
           │        │ Party  │ Breach │
           └────────┴────────┴────────┘
```

### 10.4 Contingency Plans

| Scenario | Response |
|----------|----------|
| **Google API deprecated** | 30-day migration window, alternative data sources identified |
| **Major security incident** | Immediate access revocation, forensic analysis, client notification within 24h |
| **Database corruption** | Point-in-time recovery (RPO: 1 hour), automated backups tested weekly |
| **Unexpected traffic spike** | Auto-scaling enabled, rate limiting, graceful degradation |
| **Key team member unavailable** | Documentation, code comments, knowledge sharing sessions |

---

## 11. Appendices

### Appendix A: API Response Examples

#### GA4 API Response Structure
```json
{
  "dimensionHeaders": [{"name": "date"}, {"name": "sessionSource"}],
  "metricHeaders": [{"name": "sessions", "type": "TYPE_INTEGER"}],
  "rows": [
    {
      "dimensionValues": [{"value": "20240101"}, {"value": "google"}],
      "metricValues": [{"value": "150"}]
    }
  ],
  "rowCount": 1,
  "metadata": {
    "dataLossFromOtherRow": false,
    "currencyCode": "USD",
    "timeZone": "America/New_York"
  }
}
```

#### GSC API Response Structure
```json
{
  "rows": [
    {
      "keys": ["2024-01-01", "best seo agency", "/services"],
      "clicks": 25,
      "impressions": 1000,
      "ctr": 0.025,
      "position": 3.5
    }
  ]
}
```

### Appendix B: Recommended Python Packages

```txt
# requirements.txt

# Web Framework
streamlit==1.28.0
fastapi==0.104.1
uvicorn[standard]==0.24.0

# Database
sqlalchemy==2.0.23
psycopg2-binary==2.9.9
alembic==1.12.1
redis==5.0.1

# Google APIs
google-analytics-data==0.18.3
google-api-python-client==2.108.0
google-auth==2.23.4

# Data Processing
pandas==2.1.3
numpy==1.26.2

# Visualization
plotly==5.18.0

# Authentication
python-jose[cryptography]==3.3.0
passlib[bcrypt]==1.7.4
python-multipart==0.0.6

# AI/ML
openai==1.3.5
langchain==0.0.340

# Utilities
python-dotenv==1.0.0
pydantic==2.5.2
pydantic-settings==2.1.0
httpx==0.25.2
apscheduler==3.10.4

# Testing
pytest==7.4.3
pytest-asyncio==0.21.1

# Monitoring
sentry-sdk==1.38.0
```

### Appendix C: Glossary

| Term | Definition |
|------|------------|
| **GA4** | Google Analytics 4 - Google's latest analytics platform |
| **GSC** | Google Search Console - Tool for monitoring search performance |
| **ETL** | Extract, Transform, Load - Data pipeline process |
| **JWT** | JSON Web Token - Authentication token format |
| **OAuth** | Open Authorization - Standard for access delegation |
| **RBAC** | Role-Based Access Control - Permission management |
| **RLS** | Row-Level Security - Database access control |
| **POC** | Proof of Concept - Initial demonstration |
| **MVP** | Minimum Viable Product - First usable version |
| **Multi-tenant** | Single application serving multiple isolated clients |

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-01 | Data Architect | Initial document |

---

*This document is confidential and proprietary to Up At Dawn LLC and drdatadecisionintelligence.com*
