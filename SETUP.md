# Setup Instructions

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret-key-here

# Google OAuth Configuration
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Gemini AI Configuration
GEMINI_API_KEY=your-gemini-api-key
```

## Getting API Keys

### 1. Google OAuth Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client IDs"
5. Set application type to "Web application"
6. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google`
   - `https://yourdomain.com/api/auth/callback/google` (for production)
7. Copy Client ID and Client Secret

### 2. Gemini API Key
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy the API key

### 3. NextAuth Secret
Generate a random secret key:
```bash
openssl rand -base64 32
```

## Installation & Running

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file with the variables above

3. Run the development server:
```bash
npm run dev
```

## Features Implemented

### Authentication
- ✅ NextAuth.js integration
- ✅ Google OAuth provider
- ✅ Session management
- ✅ Protected routes

### AI Integration
- ✅ Gemini AI API integration
- ✅ Interview plan generation
- ✅ Structured JSON responses
- ✅ Error handling and fallbacks

### UI Components
- ✅ Updated login page with Google sign-in
- ✅ Real-time plan generation
- ✅ Loading animations
- ✅ Responsive design

## Usage

1. **Authentication**: Users can sign in with Google OAuth
2. **Plan Generation**: Paste job description and get AI-generated interview prep plan
3. **Structured Output**: Skills, projects, questions, resources, and timeline
4. **Error Handling**: Graceful fallbacks if API calls fail

## Next Steps

- Add user dashboard with saved plans
- Implement progress tracking
- Add more authentication providers
- Enhance AI prompts for better responses
