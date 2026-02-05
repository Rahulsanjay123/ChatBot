# Software Requirements Specification (SRS)
## SkillPulse - ML-Driven Skill Demand Forecaster

**Document Version:** 1.0  
**Last Updated:** February 4, 2026  
**Status:** Active Development

---

## 1. Executive Summary

SkillPulse is an AI-powered web application that analyzes skill demand trends in the job market and provides intelligent forecasts for career development planning. The application combines comprehensive skill data, machine learning analytics, and AI-driven insights to help users understand which technical and professional skills are in highest demand and projected to grow in the future.

---

## 2. Project Overview

### 2.1 Purpose
SkillPulse enables professionals and organizations to:
- Discover current skill demand trends across various industries
- Explore skill categories with detailed analytics and visualizations
- Get AI-powered forecasts on skill growth trajectories
- Manage personal skill datasets for analysis
- Make informed career development and hiring decisions

### 2.2 Project Scope

**In Scope:**
- User authentication and profile management
- Dashboard with key skill metrics and trends
- Interactive skill explorer with filtering and search
- AI-powered forecasting using Google's Generative AI (Gemini)
- Dataset management and visualization
- Historical demand data analysis
- About/information view

**Out of Scope:**
- Direct job marketplace integration
- Real-time job posting scraping
- Advanced ML model training
- Mobile application (currently web-only)

### 2.3 Target Users
- Career professionals seeking skill development guidance
- HR/Talent acquisition specialists for hiring strategies
- Educational institutions planning curriculum
- Job seekers researching industry trends
- Technology teams analyzing skill gaps

---

## 3. Overall Description

### 3.1 Product Perspective
SkillPulse is a standalone web application built with React and TypeScript, utilizing Google's Generative AI API for intelligent forecasting capabilities.

### 3.2 Technology Stack
- **Frontend Framework:** React 19.2.4 with TypeScript 5.8.2
- **Build Tool:** Vite 6.2.0
- **UI/Charting:** Recharts 3.7.0
- **AI Integration:** Google Generative AI (Gemini) API v1.39.0
- **Runtime:** Node.js
- **Styling:** Tailwind CSS (inferred from utility classes)

### 3.3 Key Features Architecture
```
SkillPulse Application
├── Authentication Layer
│   ├── User Login/Registration
│   └── Session Management
├── Dashboard View
│   ├── Key Metrics Display
│   └── Trend Overview
├── Skill Explorer
│   ├── Skill Browsing
│   ├── Filtering & Search
│   └── Detailed Analytics
├── AI Forecasting Engine
│   ├── Gemini API Integration
│   └── Prediction Generation
├── Dataset Management
│   ├── Data Upload/Import
│   ├── Visualization
│   └── Export Capabilities
└── About/Help Section
```

---

## 4. Detailed Requirements

### 4.1 Functional Requirements

#### 4.1.1 Authentication (FR-1)
- **FR-1.1:** Users must be able to register with email and password
- **FR-1.2:** Users must be able to log in with registered credentials
- **FR-1.3:** Users must be able to log out of their session
- **FR-1.4:** Session data must persist across page refreshes
- **FR-1.5:** Unauthorized users must be redirected to authentication screen

#### 4.1.2 Dashboard View (FR-2)
- **FR-2.1:** Display overview of top 10 trending skills
- **FR-2.2:** Show current demand scores for each skill (0-100 scale)
- **FR-2.3:** Display growth rate percentages
- **FR-2.4:** Present skill categories distribution
- **FR-2.5:** Show key market statistics and insights

#### 4.1.3 Skill Explorer (FR-3)
- **FR-3.1:** Display complete list of available skills with search functionality
- **FR-3.2:** Allow filtering by skill category (Programming, Data Science, Cloud, etc.)
- **FR-3.3:** Show detailed skill information including:
  - Current demand score
  - Growth rate
  - Top industries where skill is needed
  - Historical demand trends (2020-2024)
  - Skill description
- **FR-3.4:** Display interactive charts for historical demand data
- **FR-3.5:** Allow sorting by demand, growth rate, or alphabetical order

#### 4.1.4 AI Forecasting (FR-4)
- **FR-4.1:** Users can select a skill to forecast
- **FR-4.2:** System sends skill data to Gemini API for analysis
- **FR-4.3:** AI returns forecast including:
  - Trend prediction (Rising/Stable/Declining)
  - Summary of market analysis
  - Reasons for the trend
  - Suggested learning roadmap
  - Estimated growth over next 3 years
- **FR-4.4:** Display forecast results in formatted, readable layout
- **FR-4.5:** Handle API errors gracefully with user-friendly messages

#### 4.1.5 Dataset Management (FR-5)
- **FR-5.1:** Display current skill dataset with filtering options
- **FR-5.2:** Show data statistics and summary metrics
- **FR-5.3:** Visualize skill distribution across categories
- **FR-5.4:** Display top demanded skills ranked by current demand
- **FR-5.5:** Export dataset functionality (future enhancement)

#### 4.1.6 Navigation (FR-6)
- **FR-6.1:** Sidebar component for view switching
- **FR-6.2:** Display current user information
- **FR-6.3:** Provide logout functionality
- **FR-6.4:** Highlight active view in sidebar
- **FR-6.5:** Smooth view transitions

#### 4.1.7 About/Information (FR-7)
- **FR-7.1:** Provide project information and overview
- **FR-7.2:** Display how to use the application
- **FR-7.3:** Show data sources and disclaimers
- **FR-7.4:** Contact and support information

### 4.2 Non-Functional Requirements

#### 4.2.1 Performance (NFR-1)
- **NFR-1.1:** Dashboard should load within 2 seconds
- **NFR-1.2:** Skill explorer search results within 500ms
- **NFR-1.3:** AI forecasting response within 10 seconds
- **NFR-1.4:** Support minimum 1000 concurrent users
- **NFR-1.5:** Optimize bundle size (target: <500KB gzipped)

#### 4.2.2 Security (NFR-2)
- **NFR-2.1:** All API communication must use HTTPS
- **NFR-2.2:** Gemini API key must be stored in environment variables (.env.local)
- **NFR-2.3:** User authentication tokens must be securely stored
- **NFR-2.4:** Implement CSRF protection for state-changing operations
- **NFR-2.5:** No sensitive data should be logged to console in production

#### 4.2.3 Usability (NFR-3)
- **NFR-3.1:** Intuitive navigation with clear visual hierarchy
- **NFR-3.2:** Responsive design for desktop viewing
- **NFR-3.3:** Loading indicators for all async operations
- **NFR-3.4:** Clear error messages for user actions
- **NFR-3.5:** Accessibility compliance (WCAG 2.1 AA target)

#### 4.2.4 Reliability (NFR-4)
- **NFR-4.1:** System uptime target: 99.5%
- **NFR-4.2:** Graceful error handling for API failures
- **NFR-4.3:** Data validation on all inputs
- **NFR-4.4:** Fallback UI when external services unavailable

#### 4.2.5 Maintainability (NFR-5)
- **NFR-5.1:** Code follows TypeScript best practices
- **NFR-5.2:** Component-based architecture for reusability
- **NFR-5.3:** Clear separation of concerns (services, components, types)
- **NFR-5.4:** Comprehensive inline documentation
- **NFR-5.5:** ESLint and type checking in build pipeline

#### 4.2.6 Scalability (NFR-6)
- **NFR-6.1:** Modular component structure for feature additions
- **NFR-6.2:** Skill dataset extensible to support 1000+ skills
- **NFR-6.3:** Support for multiple authentication providers (future)
- **NFR-6.4:** API-agnostic architecture for alternative AI providers

---

## 5. Specific Requirements

### 5.1 Data Models

#### 5.1.1 User Object
```typescript
{
  id: string;
  name: string;
  email: string;
}
```

#### 5.1.2 Skill Data Object
```typescript
{
  name: string;
  category: string;
  currentDemand: number;        // 0-100 score
  growthRate: number;            // percentage
  topIndustries: string[];
  historicalDemand: [
    { year: number; score: number }
  ];
  description: string;
}
```

#### 5.1.3 Forecast Response Object
```typescript
{
  summary: string;
  predictedTrend: 'Rising' | 'Stable' | 'Declining';
  reasons: string[];
  suggestedRoadmap: string[];
  estimatedGrowthNext3Years: number;
}
```

#### 5.1.4 View Types
```typescript
'dashboard' | 'explorer' | 'ai-forecasting' | 'dataset' | 'about'
```

### 5.2 API Integrations

#### 5.2.1 Gemini API
- **Service:** `geminiService.ts`
- **Purpose:** AI-powered skill demand forecasting
- **Authentication:** API key via environment variable (GEMINI_API_KEY)
- **Endpoints Used:** Generative AI API
- **Error Handling:** Timeout management, rate limiting, graceful degradation

#### 5.2.2 Authentication Service
- **Service:** `authService.ts`
- **Purpose:** User login/logout and session management
- **Storage:** Local storage / Session storage
- **Validation:** Email format, password strength (future)

### 5.3 User Interface Components

| Component | Purpose | Location |
|-----------|---------|----------|
| Sidebar | Navigation and user info | `components/Sidebar.tsx` |
| DashboardView | Key metrics and trends | `components/DashboardView.tsx` |
| ExplorerView | Skill browsing and search | `components/ExplorerView.tsx` |
| AIForecastingView | AI forecast generation | `components/AIForecastingView.tsx` |
| DatasetView | Data visualization | `components/DatasetView.tsx` |
| AboutView | Information and help | `components/AboutView.tsx` |
| AuthScreen | Login/Registration | `components/AuthScreen.tsx` |

---

## 6. Interface Requirements

### 6.1 User Interface
- **Framework:** React with TypeScript
- **Styling:** Tailwind CSS with responsive design
- **Dark Theme:** Primary color scheme uses slate-950, indigo-500
- **Icons:** Font Awesome (fas class references)
- **Charts:** Recharts library for data visualization
- **Animations:** CSS animations for loading states

### 6.2 Command Line Interface
- **Development:** `npm run dev` - Start development server
- **Build:** `npm run build` - Production build
- **Preview:** `npm run preview` - Preview production build

---

## 7. Quality Assurance Requirements

### 7.1 Testing Requirements
- **Unit Tests:** Components and utility functions
- **Integration Tests:** API calls and service interactions
- **End-to-End Tests:** Critical user workflows
- **Type Safety:** TypeScript strict mode enabled

### 7.2 Code Quality
- **Linting:** ESLint configuration
- **Type Checking:** TypeScript compilation
- **Code Style:** Consistent formatting with Prettier (recommended)
- **Code Coverage:** Target 80%+ coverage for core features

### 7.3 Performance Testing
- **Load Testing:** Verify performance under 1000+ concurrent users
- **Bundle Analysis:** Monitor bundle size growth
- **Lighthouse Audits:** Target 90+ scores

---

## 8. Design Constraints

### 8.1 Technical Constraints
- **Browser Support:** Modern browsers (Chrome, Firefox, Safari, Edge)
- **Node.js Version:** 18+ (Vite requirement)
- **Package Manager:** npm
- **API Rate Limiting:** Google Generative AI quotas

### 8.2 Regulatory Constraints
- **Data Privacy:** GDPR compliance for user data
- **API Terms:** Compliance with Google Generative AI terms of service
- **Content:** Accuracy of skill demand data

---

## 9. Dependencies and Assumptions

### 9.1 External Dependencies
- **Google Generative AI API:** Must be available and functional
- **Node.js Runtime:** Must be installed on development/deployment machines
- **Internet Connectivity:** Required for API calls and data fetching

### 9.2 Assumptions
- Users have modern web browsers with JavaScript enabled
- Skill dataset remains relatively static (updated periodically)
- Users have valid Google Cloud credentials for Gemini API
- Historical demand data (2020-2024) is reliable and representative

---

## 10. Future Enhancements

### 10.1 Phase 2 Features
- [ ] User-generated skill datasets
- [ ] Personalized learning paths
- [ ] Resume skill gap analysis
- [ ] Job market integration
- [ ] Email notifications for skill trends
- [ ] Social sharing of forecasts

### 10.2 Phase 3 Features
- [ ] Mobile application (React Native)
- [ ] Advanced ML model training on local data
- [ ] Multi-language support
- [ ] Dark/Light theme toggle
- [ ] Premium subscription tiers
- [ ] Team/Organization accounts

### 10.3 Technical Debt & Improvements
- [ ] Implement comprehensive error logging
- [ ] Add unit and integration tests
- [ ] Implement data caching strategy
- [ ] Create component library documentation
- [ ] Setup CI/CD pipeline
- [ ] Database integration for persistent user data

---

## 11. Acceptance Criteria

### 11.1 Completion Criteria
- [x] All functional requirements implemented
- [ ] All non-functional requirements tested
- [ ] Code passes TypeScript compilation
- [ ] UI responsive on desktop
- [ ] API integration functional
- [ ] User can complete full workflow: Login → View Dashboard → Explore Skills → Get Forecast → Logout
- [ ] Error states handled gracefully
- [ ] Performance benchmarks met

### 11.2 Success Metrics
- User can authenticate and access all views
- AI forecasting generates meaningful responses
- Data visualizations render correctly
- No unhandled runtime errors
- Load times within acceptable range
- Mobile-friendly responsive design

---

## 12. Glossary

| Term | Definition |
|------|-----------|
| **Skill Demand** | Job market need for a particular skill measured on 0-100 scale |
| **Growth Rate** | Percentage increase in skill demand year-over-year |
| **Forecast** | AI-generated prediction of future skill demand trajectory |
| **Gemini API** | Google's generative AI service used for analysis |
| **SRS** | Software Requirements Specification document |
| **UI/UX** | User Interface and User Experience |

---

## 13. Document Control

| Version | Date | Author | Status | Changes |
|---------|------|--------|--------|---------|
| 1.0 | 2026-02-04 | Project Team | Active | Initial SRS creation |

---

## 14. Approvals

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Project Manager | [Name] | | |
| Lead Developer | [Name] | | |
| Product Owner | [Name] | | |

---

**End of Document**
