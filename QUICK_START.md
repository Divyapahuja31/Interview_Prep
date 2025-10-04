# 🚀 Quick Start Guide

## Get Up and Running in 5 Minutes!

### Step 1: Install Dependencies ✅
```bash
npm install
```
**Status:** Already completed!

---

### Step 2: Set Up Environment Variables 🔑

Create a `.env.local` file in the root directory:

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3001
NEXTAUTH_SECRET=generate-with-openssl-rand-base64-32

# Google OAuth (Get from Google Cloud Console)
GOOGLE_CLIENT_ID=your-google-client-id-here
GOOGLE_CLIENT_SECRET=your-google-client-secret-here

# Gemini AI (Get from Google AI Studio)
GEMINI_API_KEY=your-gemini-api-key-here
```

#### 🔗 Get Your API Keys:

**Google OAuth Credentials:**
1. Visit [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Go to Credentials → Create OAuth 2.0 Client ID
5. Add redirect URI: `http://localhost:3001/api/auth/callback/google`
6. Copy Client ID and Client Secret

**Gemini API Key:**
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Click "Create API Key"
3. Copy the generated key

**NextAuth Secret:**
```bash
openssl rand -base64 32
```

---

### Step 3: Start Development Server 🎯
```bash
npm run dev
```

The app will start at: **http://localhost:3001**

---

### Step 4: Test Everything 🧪

#### Option A: Use the Test Dashboard (Recommended)
Visit: **http://localhost:3001/test-api**

Click the buttons to test:
- ✅ Gemini API connection
- ✅ Plan generation
- ✅ Custom prompts

#### Option B: Manual Testing
```bash
# Test Gemini connection
curl http://localhost:3001/api/test-gemini

# Test plan generation
curl -X POST http://localhost:3001/api/generate-plan \
  -H "Content-Type: application/json" \
  -d '{"jobDescription": "Full Stack Developer with React and Node.js"}'
```

---

### Step 5: Try the Features! 🎉

1. **Sign In with Google**
   - Go to http://localhost:3001/login
   - Click "Continue with Google"
   - Authorize the app

2. **Generate Your First AI Plan**
   - Go to http://localhost:3001/generate
   - Paste a job description
   - Click "Generate My Plan"
   - Watch the AI create your personalized prep plan!

3. **Explore the Dashboard**
   - Go to http://localhost:3001/dashboard
   - View your progress and stats

---

## 🎯 Key URLs

| URL | Description |
|-----|-------------|
| http://localhost:3001 | Home page |
| http://localhost:3001/login | Sign in with Google |
| http://localhost:3001/generate | AI plan generator |
| http://localhost:3001/dashboard | Your dashboard (requires auth) |
| http://localhost:3001/test-api | API testing dashboard |

---

## 🔍 Verify Everything is Working

### ✅ Checklist

- [ ] Development server running on port 3001
- [ ] `.env.local` file created with all keys
- [ ] Test dashboard shows "Success" for Gemini connection
- [ ] Can sign in with Google
- [ ] Can generate AI plans from job descriptions
- [ ] Dashboard loads after authentication

---

## 🐛 Common Issues & Solutions

### Issue: "GEMINI_API_KEY is not configured"
**Solution:** 
- Check `.env.local` exists in root directory
- Verify key is correct (no extra spaces)
- Restart dev server: `Ctrl+C` then `npm run dev`

### Issue: Google OAuth Error
**Solution:**
- Verify redirect URI in Google Cloud Console
- Check `NEXTAUTH_URL` matches your domain
- Make sure OAuth consent screen is configured

### Issue: Port Already in Use
**Solution:**
- App automatically uses port 3001 if 3000 is busy
- Or specify custom port: `PORT=3002 npm run dev`

---

## 📚 Need More Help?

Check these detailed guides:

1. **[SETUP.md](./SETUP.md)** - Complete setup instructions
2. **[API_DOCUMENTATION.md](./API_DOCUMENTATION.md)** - Full API reference
3. **[GEMINI_ENDPOINTS_SUMMARY.md](./GEMINI_ENDPOINTS_SUMMARY.md)** - Gemini API details
4. **[IMPLEMENTATION_COMPLETE.md](./IMPLEMENTATION_COMPLETE.md)** - Implementation summary

---

## 🎊 You're All Set!

Your AI-powered interview prep platform is ready to use!

**Next Steps:**
1. Generate your first interview prep plan
2. Track your progress on the dashboard
3. Explore all the features
4. Start preparing for your dream job!

---

**Happy Coding! 🚀**
