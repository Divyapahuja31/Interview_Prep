# 🎯 Craft My Prep - AI-Powered Interview Preparation Platform

A modern, interactive web application designed to help developers ace their technical interviews with personalized AI-powered preparation plans, practice sessions, and comprehensive learning resources.

![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.4-38bdf8)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.5.4-ff0055)

## ✨ Features

### 🎨 Beautiful UI/UX
- **Glassmorphism Design** - Modern, elegant interface with liquid glass effects
- **Smooth Animations** - Powered by Framer Motion for delightful interactions
- **Custom Cursor** - Interactive cursor with hover effects
- **Smooth Scrolling** - Enhanced scrolling experience with Lenis
- **Paper-Craft Preloader** - Unique loading animation with floating elements

### 🚀 Core Features
- **AI Interview Prep** - Personalized practice sessions tailored to your target role
- **Dashboard** - Track your progress and skill development
- **Leaderboard** - Compete with peers and stay motivated
- **Notes System** - Organize your learning materials
- **Blog Section** - In-depth articles on technical interview topics
- **Career Insights** - Get guidance on your career path

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

- **Framework:** Next.js 14.2.5 (App Router)
- **UI Library:** React 18.3.1
- **Styling:** TailwindCSS 3.4.4
- **Animations:** Framer Motion 11.5.4
- **Smooth Scroll:** Lenis 1.3.11
- **Fonts:** Inter & Roboto Mono (Google Fonts)
- **Language:** JavaScript (ES6+)

## 📦 Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd my-next-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

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
my-next-app/
├── app/
│   ├── components/          # Reusable components
│   │   ├── CustomCursor.js  # Custom cursor implementation
│   │   ├── LenisProvider.js # Smooth scroll provider
│   │   ├── Preloader.jsx    # Loading animation
│   │   └── Sidebar.js       # Navigation sidebar
│   ├── blog/                # Blog section
│   │   ├── [id]/           # Dynamic blog post pages
│   │   └── page.js         # Blog listing page
│   ├── dashboard/          # User dashboard
│   ├── leaderboard/        # Leaderboard page
│   ├── login/              # Authentication pages
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

| Route | Description |
|-------|-------------|
| `/` | Landing page with hero section and features |
| `/blog` | Blog listing with all articles |
| `/blog/[id]` | Individual blog post pages |
| `/dashboard` | User dashboard with progress tracking |
| `/leaderboard` | Community leaderboard |
| `/notes` | Personal notes management |
| `/generate` | AI prep plan generator |
| `/login` | User authentication |
| `/signup` | User registration |
| `/about` | About the platform |

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

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with one click

### Other Platforms
```bash
npm run build
npm start
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Framer Motion for smooth animations
- TailwindCSS for utility-first styling
- Vercel for hosting and deployment

## 📧 Contact

For questions or feedback, please reach out through the platform's contact page.

---

**Built with ❤️ for developers preparing for their dream tech roles**
