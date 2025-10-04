# InterviewPrep.ai - Project Vibe

A premium, futuristic Next.js web application for AI-driven interview preparation with immersive animations, 3D mascots, and gamified learning.

## 🎯 Project Overview

**InterviewPrep.ai** (branded as "Project Vibe") is a comprehensive interview preparation platform that uses AI to create personalized study plans based on job descriptions. The application features a beautiful sky-blue gradient theme, glassmorphism UI, animated mascot interactions, and gamified learning experiences.

## 🚀 Features Implemented

### Core Pages

1. **Landing Page (/)** ✅
   - Hero section with "Unlock Your Dream Tech Role" headline
   - Quick navigation pills (Why It Matters, Live Demo, About, Mini Projects)
   - 3D mascot with floating skill icons (React, Python, SQL, JS, Node.js)
   - "Why It Matters" section with glassmorphic card
   - Live Demo section with job description input
   - Comprehensive footer with social links
   - Sky-blue gradient background theme

2. **Dashboard (/dashboard)** ✅
   - Sidebar navigation with 7 menu items
   - Progress rings for React (75%), SQL (40%), Python (20%)
   - Daily Challenge card with "Explain React Hooks"
   - XP progress bar (Level 3 - 450 XP)
   - Skill tags (React, Python, SQL)
   - Achievement badges (First Login, Achievements, Top Scorer)
   - Animated timeline/roadmap with milestones
   - Animated mascot encouragement

3. **Generate Plan (/generate)** ✅
   - Job description input card with glassmorphism
   - "Generate My Plan" CTA button
   - AI loading animation with:
     - Rotating mascot
     - Floating skill icons (Python, SQL, React)
     - Dynamic loading messages: "Extracting Skills...", "Mapping Topics...", "Building Plan...", "Finalizing Your Roadmap..."
   - Generated plan output with expandable cards:
     - Skill Tags (React, Python, SQL)
     - Mini Projects (Todo List, Database Schema, API Integration)
     - Practice Questions (React Hooks, Flexbox, SQL Joins)
     - Resources/Links (Documentation, Tutorials)
     - Timeline/Schedule

4. **Company Insights (/insights)** ✅
   - Company name search input
   - Required Skills Breakdown (Pie Chart):
     - SQL/Cloud (35%)
     - Python (25%)
     - AWS/Cloud (25%)
     - React (20%)
   - Skill Demand Trends (Bar Chart) for Q4 2023
   - Common Interview Questions with avatars
   - Past Employee Tips/Trends section
   - Animated mascot in corner

5. **AI Mentor (/mentor)** ✅
   - Interactive chat interface with Vibe mascot
   - Message bubbles for user and bot
   - Typing indicator with animated dots
   - Quick action buttons: "Explain React Hooks", "SQL Joins Tutorial", "Python Best Practices", "Interview Tips"
   - Send button and Enter key support
   - Glassmorphic chat container

6. **Mini Projects (/projects)** ✅
   - Project grid with 6 coding challenges:
     - React Todo List (Easy, 50 XP)
     - SQL Database Schema (Medium, 75 XP)
     - Python API Integration (Medium, 75 XP)
     - JavaScript Array Methods (Easy, 40 XP)
     - CSS Flexbox Layout (Easy, 45 XP)
     - Node.js Express Server (Hard, 100 XP)
   - Code editor view with:
     - Monaco-style code textarea
     - Run Code and Submit buttons
     - Instructions panel
     - Output console
     - Mascot encouragement
   - XP tracking (Total XP: 450)

7. **Progress (/progress)** ✅
   - Placeholder page with "Coming Soon" message
   - Progress tracking icon and description

8. **Notes (/notes)** ✅
   - Placeholder page with "Coming Soon" message
   - Notes feature description

9. **Leaderboard (/leaderboard)** ✅
   - Top 5 users ranking
   - XP scores and avatars
   - Medal icons for top 3 (🥇🥈🥉)
   - Highlighted current user position
   - Glassmorphic card design

### Components

1. **Sidebar Component** ✅
   - Navigation menu with icons
   - Active state highlighting
   - Hover animations
   - Mascot section at bottom
   - Glassmorphic background

2. **Preloader Component** ✅
   - "LOADING PROJECT VIBE" text animation
   - Mascot with floating icons
   - Smooth fade-in transition

## 🎨 Design System

### Color Palette
- **Sky Blue**: `#a8d5e2` (primary gradient start)
- **Light Blue**: `#e8f4f8` (gradient middle)
- **Cream**: `#fef5e7` (gradient end)
- **Teal**: `#7ec4b6` (CTA buttons)
- **White**: `rgba(255, 255, 255, 0.7)` (glassmorphism)

### Typography
- **Headings**: Bold, 2xl-7xl sizes
- **Body**: Regular, sm-xl sizes
- **Font**: System fonts (default Next.js)

### Effects
- **Glassmorphism**: `backdrop-blur-lg` with white/70 opacity
- **Shadows**: `shadow-xl` for depth
- **Borders**: `border-white/80` for glass edges
- **Animations**: Framer Motion for all transitions

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.4 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Emoji-based (🤖, ✨, 📊, etc.)

## 📁 Project Structure

```
my-next-app/
├── app/
│   ├── components/
│   │   ├── Preloader.js
│   │   └── Sidebar.js
│   ├── dashboard/
│   │   └── page.js
│   ├── generate/
│   │   └── page.js
│   ├── insights/
│   │   └── page.js
│   ├── mentor/
│   │   └── page.js
│   ├── projects/
│   │   └── page.js
│   ├── progress/
│   │   └── page.js
│   ├── notes/
│   │   └── page.js
│   ├── leaderboard/
│   │   └── page.js
│   ├── layout.js
│   ├── page.js (Landing)
│   └── globals.css
├── package.json
└── tailwind.config.js
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to project directory:
```bash
cd "interview prep/my-next-app"
```

2. Install dependencies (if not already installed):
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open browser:
```
http://localhost:3000
```

## 🎮 User Flow

1. **Landing Page** → User sees hero section with mascot
2. **Click "Generate My Plan"** → Navigate to Generate page
3. **Paste Job Description** → AI analyzes and creates plan
4. **View Dashboard** → See progress rings and daily challenges
5. **Explore Company Insights** → View skill demand charts
6. **Chat with AI Mentor** → Get personalized guidance
7. **Practice Mini Projects** → Code and earn XP
8. **Check Leaderboard** → Compare with other learners

## 🎯 Key Features

### Animations
- ✅ Smooth page transitions with Framer Motion
- ✅ Hover effects on all interactive elements
- ✅ Loading animations with rotating mascot
- ✅ Progress ring animations
- ✅ Typing indicators in chat
- ✅ Floating skill icons
- ✅ Timeline path animations

### Gamification
- ✅ XP system (450 XP total)
- ✅ Achievement badges
- ✅ Leaderboard rankings
- ✅ Difficulty levels (Easy, Medium, Hard)
- ✅ Progress tracking per skill

### AI Features (Simulated)
- ✅ Job description analysis
- ✅ Skill extraction
- ✅ Personalized plan generation
- ✅ Chat responses
- ✅ Company insights

## 🔮 Future Enhancements

### To Be Implemented
- [ ] Real AI integration (OpenAI/HuggingFace API)
- [ ] User authentication (Firebase/Supabase)
- [ ] Database persistence
- [ ] Real-time code execution
- [ ] Voice chat with mascot
- [ ] 3D mascot with React Three Fiber
- [ ] Origami card folding animations
- [ ] Custom cursor effects
- [ ] Sound effects
- [ ] Dark mode toggle
- [ ] Mobile responsive improvements
- [ ] SEO optimization
- [ ] Performance optimization

## 📊 Current Status

✅ **Completed**: 9 pages, 2 components, full UI/UX
🔄 **In Progress**: Testing and polish
⏳ **Pending**: Backend integration, real AI features

## 🎨 Design Inspiration

The UI takes inspiration from:
- Modern glassmorphism trends
- Sky/cloud themes
- Gamified learning platforms
- AI assistant interfaces
- Coding bootcamp dashboards

## 📝 Notes

- All AI features are currently simulated with setTimeout
- Charts are custom SVG implementations
- Mascot is emoji-based (🤖) - can be replaced with 3D model
- Color scheme matches provided mockups
- Responsive design implemented with Tailwind breakpoints

## 🚀 Deployment Ready

The application is ready for deployment to Vercel:

```bash
vercel deploy
```

Or build for production:

```bash
npm run build
npm start
```

## 📄 License

This project is part of the InterviewPrep.ai platform.

---

**Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion**
