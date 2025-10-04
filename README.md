# 🎯 Craft My Prep - AI-Powered Interview Preparation Platform

A modern, interactive web application designed to help developers ace their technical interviews with personalized AI-powered preparation plans, practice sessions, and comprehensive learning resources.

![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.4-38bdf8)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.22-ff0055)
![NextAuth](https://img.shields.io/badge/NextAuth.js-Latest-purple)
![Gemini AI](https://img.shields.io/badge/Gemini_AI-2.0-orange)

## ✨ Features

### 🎨 Beautiful UI/UX
- **Glassmorphism Design** - Modern, elegant interface with liquid glass effects
- **Smooth Animations** - Powered by Framer Motion for delightful interactions
- **Custom Cursor** - Interactive cursor with hover effects
- **Smooth Scrolling** - Enhanced scrolling experience with Lenis
- **Paper-Craft Preloader** - Unique loading animation with floating elements

### 🚀 Core Features
- **🤖 Real Gemini AI Integration** - Powered by Google's Gemini 2.0 Flash for intelligent plan generation
- **🔐 NextAuth Authentication** - Secure Google OAuth login with session management
- **📋 AI Interview Prep** - Generate personalized preparation plans from job descriptions
- **📊 Dashboard** - Track your progress and skill development with protected routes
- **🏆 Leaderboard** - Compete with peers and stay motivated
- **📝 Notes System** - Organize your learning materials
- **📚 Blog Section** - In-depth articles on technical interview topics
- **💡 Career Insights** - Get guidance on your career path
- **🧪 API Testing Dashboard** - Test all Gemini endpoints in real-time

### 📚 Blog & Resources
Six comprehensive blog posts covering:
- React Interview Questions 2025
- SQL Joins Explained with Real Examples
- Python Best Practices for Technical Interviews
- System Design Interview Preparation
- Behavioral Interview Tips from FAANG Engineers
- Essential Data Structures Guide

### 🎯 Interview Prep Tools
- Mock interview sessions
- Skill assessment tracking
- Resume builder (ATS-optimized)
- Career roadmap generator
- Community forum

## 🛠️ Tech Stack

- **Framework:** Next.js 15.5.4 (App Router)
- **UI Library:** React 19.2.0
- **Styling:** TailwindCSS 3.4.4
- **Animations:** Framer Motion 12.23.22
- **Smooth Scroll:** Lenis 1.3.11
- **Authentication:** NextAuth.js (Google OAuth)
- **AI Integration:** Google Gemini AI 2.0 Flash (@google/genai)
- **Fonts:** Inter & Roboto Mono (Google Fonts)
- **Language:** JavaScript (ES6+)

## 📦 Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd Interview_Prep
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env.local` file in the root directory:
```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3001
NEXTAUTH_SECRET=your-nextauth-secret-key

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Gemini AI
GEMINI_API_KEY=your-gemini-api-key
```

**Get your API keys:**
- Google OAuth: [Google Cloud Console](https://console.cloud.google.com/)
- Gemini API: [Google AI Studio](https://makersuite.google.com/app/apikey)
- NextAuth Secret: Run `openssl rand -base64 32`

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to [http://localhost:3001](http://localhost:3001)

📖 **For detailed setup instructions, see [SETUP.md](./SETUP.md)**

## 🚀 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
Interview_Prep/
├── app/
│   ├── api/                    # API routes
│   │   ├── auth/              # NextAuth endpoints
│   │   │   └── [...nextauth]/ # Dynamic auth routes
│   │   ├── generate-plan/     # AI plan generation
│   │   ├── generate-plan-stream/ # Streaming version
│   │   └── test-gemini/       # API testing endpoint
│   ├── components/            # Reusable components
│   │   ├── CustomCursor.js    # Custom cursor
│   │   ├── LenisProvider.js   # Smooth scroll
│   │   ├── SessionProvider.js # Auth session wrapper
│   │   ├── Preloader.jsx      # Loading animation
│   │   └── Sidebar.js         # Navigation sidebar
│   ├── blog/                  # Blog section
│   │   ├── [id]/             # Dynamic blog posts
│   │   └── page.js           # Blog listing
│   ├── dashboard/            # Protected dashboard
│   ├── generate/             # AI plan generator
│   ├── test-api/             # API testing UI
│   ├── login/                # Authentication pages
│   ├── signup/
│   ├── notes/              # Notes management
│   ├── generate/           # AI prep plan generator
│   ├── about/              # About page
│   ├── layout.js           # Root layout
│   ├── page.js             # Home page
│   └── globals.css         # Global styles
├── public/                 # Static assets
│   ├── robot.png          # Preloader image
│   ├── hero.png           # Hero section image
│   └── favicon.ico
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.mjs     # PostCSS configuration
└── package.json           # Dependencies
```

## 🎨 Key Components

### Custom Cursor
Interactive cursor with smooth animations and hover effects on clickable elements.

### Preloader
Paper-craft style loading animation with:
- Floating robot character
- Animated letter tiles
- Orbiting decorative elements

### Glassmorphism Header
Sticky navigation with:
- Liquid glass effect
- Animated gradient background
- Mega menu dropdowns
- Responsive design

### Blog System
Dynamic routing for blog posts with:
- Rich content formatting
- Code syntax highlighting
- Author information
- Reading time estimates

## 🎯 Pages Overview

| Route | Description | Auth Required |
|-------|-------------|---------------|
| `/` | Landing page with hero section and features | ❌ |
| `/blog` | Blog listing with all articles | ❌ |
| `/blog/[id]` | Individual blog post pages | ❌ |
| `/dashboard` | User dashboard with progress tracking | ✅ |
| `/leaderboard` | Community leaderboard | ❌ |
| `/notes` | Personal notes management | ❌ |
| `/generate` | AI prep plan generator (Gemini AI) | ❌ |
| `/test-api` | API testing dashboard | ❌ |
| `/login` | User authentication (Google OAuth) | ❌ |
| `/signup` | User registration | ❌ |
| `/about` | About the platform | ❌ |

## 🔌 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/[...nextauth]` | GET/POST | NextAuth authentication handlers |
| `/api/test-gemini` | GET | Test Gemini API connection |
| `/api/test-gemini` | POST | Test with custom prompt |
| `/api/generate-plan` | POST | Generate interview prep plan |
| `/api/generate-plan-stream` | POST | Generate plan (streaming) |

📖 **For complete API documentation, see [API_DOCUMENTATION.md](./API_DOCUMENTATION.md)**

## 🎨 Design Features

### Color Palette
- **Primary:** `#7ec4b6` (Teal)
- **Secondary:** `#a8d5ba` (Mint)
- **Accent:** `#7ba8d4` (Sky Blue)
- **Background:** Gradient from `#a8d5e2` to `#fef5e7`

### Typography
- **Sans-serif:** Inter
- **Monospace:** Roboto Mono

### Animations
- Smooth page transitions
- Hover effects on interactive elements
- Parallax scrolling effects
- Floating animations
- Glassmorphism effects

## 🔧 Configuration

### Tailwind CSS
Custom configuration with extended theme for fonts and colors.

### PostCSS
Configured with Tailwind CSS and Autoprefixer for optimal browser compatibility.

### Next.js
Using App Router with:
- Server and Client Components
- Dynamic routing
- Image optimization
- Font optimization

## 📝 Blog Post IDs

Available blog posts:
- `react-interview-questions-2025`
- `sql-joins-explained`
- `python-best-practices`
- `system-design-interviews`
- `behavioral-interview-tips`
- `data-structures-guide`

## 📚 Documentation

Comprehensive documentation is available in the following files:

| Document | Description |
|----------|-------------|
| **[SETUP.md](./SETUP.md)** | Complete setup guide with environment configuration |
| **[API_DOCUMENTATION.md](./API_DOCUMENTATION.md)** | Full API reference with examples and testing commands |
| **[GEMINI_ENDPOINTS_SUMMARY.md](./GEMINI_ENDPOINTS_SUMMARY.md)** | Gemini API implementation verification and details |
| **[IMPLEMENTATION_COMPLETE.md](./IMPLEMENTATION_COMPLETE.md)** | Complete implementation summary and checklist |
| **[PROJECT_DOCUMENTATION.md](./PROJECT_DOCUMENTATION.md)** | Original project documentation |

## 🧪 Testing

### Test the Application
1. **Visit the test dashboard:** `http://localhost:3001/test-api`
2. **Test Gemini connection:** Click "Test Connection" button
3. **Test plan generation:** Click "Test Plan Generation" button
4. **Test custom prompts:** Enter your own prompt and test

### Manual API Testing
```bash
# Test Gemini API connection
curl http://localhost:3001/api/test-gemini

# Test plan generation
curl -X POST http://localhost:3001/api/generate-plan \
  -H "Content-Type: application/json" \
  -d '{"jobDescription": "Full Stack Developer with React and Node.js"}'

# Check authentication session
curl http://localhost:3001/api/auth/session
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard:
   - `NEXTAUTH_URL`
   - `NEXTAUTH_SECRET`
   - `GOOGLE_CLIENT_ID`
   - `GOOGLE_CLIENT_SECRET`
   - `GEMINI_API_KEY`
4. Deploy with one click

### Other Platforms
```bash
npm run build
npm start
```

## 🔒 Security Notes

- ✅ API keys stored in environment variables
- ✅ Server-side API calls only (no client-side exposure)
- ✅ JWT-based session management
- ✅ OAuth 2.0 authentication
- ✅ Protected routes with authentication checks
- ✅ CSRF protection via NextAuth

## 🐛 Troubleshooting

### Common Issues

**1. "GEMINI_API_KEY is not configured"**
- Make sure `.env.local` exists in the root directory
- Verify the API key is correct
- Restart the development server

**2. Google OAuth not working**
- Check `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`
- Verify redirect URIs in Google Cloud Console
- Make sure `NEXTAUTH_URL` matches your domain

**3. Port 3000 already in use**
- The app will automatically use port 3001
- Or manually specify: `PORT=3002 npm run dev`

**4. API returns fallback data**
- Check Gemini API key validity
- Verify API quota/rate limits
- Check console for detailed error messages

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- **Next.js** team for the amazing framework
- **Framer Motion** for smooth animations
- **TailwindCSS** for utility-first styling
- **NextAuth.js** for authentication
- **Google Gemini AI** for AI capabilities
- **Vercel** for hosting and deployment

## 📧 Contact

For questions or feedback, please reach out through the platform's contact page.

---

**Built with ❤️ for developers preparing for their dream tech roles**

### 🎉 Quick Start Checklist

- [ ] Clone repository
- [ ] Run `npm install`
- [ ] Create `.env.local` with all required keys
- [ ] Get Google OAuth credentials
- [ ] Get Gemini API key
- [ ] Run `npm run dev`
- [ ] Visit `http://localhost:3001`
- [ ] Test at `http://localhost:3001/test-api`
- [ ] Sign in with Google
- [ ] Generate your first AI plan!

**Status:** ✅ All features implemented and verified!
