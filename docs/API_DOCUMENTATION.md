# API Documentation

## Gemini AI Endpoints

### 1. Test Gemini Connection
**Endpoint:** `/api/test-gemini`

#### GET Request
Test if Gemini API is properly configured and working.

```bash
curl http://localhost:3001/api/test-gemini
```

**Response:**
```json
{
  "success": true,
  "message": "Gemini API is connected successfully!",
  "response": "Hello! Gemini API is working!",
  "model": "gemini-2.0-flash-001"
}
```

#### POST Request
Test Gemini API with custom prompt.

```bash
curl -X POST http://localhost:3001/api/test-gemini \
  -H "Content-Type: application/json" \
  -d '{"prompt": "What is React?"}'
```

**Response:**
```json
{
  "success": true,
  "response": "React is a JavaScript library...",
  "model": "gemini-2.0-flash-001"
}
```

---

### 2. Generate Interview Plan
**Endpoint:** `/api/generate-plan`

Generate a comprehensive interview preparation plan from a job description.

**Method:** POST

**Request Body:**
```json
{
  "jobDescription": "Looking for a Full Stack Developer with React, Node.js, and MongoDB experience..."
}
```

**Example:**
```bash
curl -X POST http://localhost:3001/api/generate-plan \
  -H "Content-Type: application/json" \
  -d '{
    "jobDescription": "Full Stack Developer position requiring React, Node.js, MongoDB, and AWS experience. Must have 3+ years of experience building scalable web applications."
  }'
```

**Response:**
```json
{
  "skills": ["React", "Node.js", "MongoDB", "AWS", "JavaScript", "REST APIs"],
  "projects": [
    { "title": "Build a Task Management App", "icon": "✅" },
    { "title": "Create REST API with Authentication", "icon": "🔐" },
    { "title": "Deploy to AWS", "icon": "☁️" }
  ],
  "questions": [
    { "title": "Explain React Hooks", "icon": "⚛️" },
    { "title": "MongoDB vs SQL Databases", "icon": "🗄️" },
    { "title": "AWS Deployment Best Practices", "icon": "🚀" }
  ],
  "resources": [
    { "title": "React Official Documentation", "icon": "📚" },
    { "title": "Node.js Best Practices", "icon": "📖" },
    { "title": "AWS Tutorial Series", "icon": "🎥" }
  ],
  "timeline": [
    { "title": "Week 1-2: Core Concepts", "icon": "📅" },
    { "title": "Week 3-4: Projects", "icon": "⏱️" }
  ]
}
```

**Error Response:**
```json
{
  "error": "Failed to generate plan. Please try again.",
  "message": "Error message details",
  "details": "Full error stack"
}
```

---

### 3. Generate Interview Plan (Streaming)
**Endpoint:** `/api/generate-plan-stream`

Same as `/api/generate-plan` but uses streaming API for potentially faster responses.

**Method:** POST

**Request Body:**
```json
{
  "jobDescription": "Job description text..."
}
```

**Example:**
```bash
curl -X POST http://localhost:3001/api/generate-plan-stream \
  -H "Content-Type: application/json" \
  -d '{
    "jobDescription": "Senior Frontend Developer with React and TypeScript..."
  }'
```

**Response:** Same format as `/api/generate-plan`

---

## Authentication Endpoints

### NextAuth.js Endpoints
**Base Path:** `/api/auth`

NextAuth automatically creates these endpoints:

- **GET** `/api/auth/signin` - Sign in page
- **GET** `/api/auth/signout` - Sign out
- **GET** `/api/auth/session` - Get current session
- **GET** `/api/auth/providers` - List available providers
- **GET** `/api/auth/csrf` - Get CSRF token
- **POST** `/api/auth/signin/:provider` - Sign in with provider
- **POST** `/api/auth/signout` - Sign out
- **POST** `/api/auth/callback/:provider` - OAuth callback

### Get Current Session
```bash
curl http://localhost:3001/api/auth/session
```

**Response (authenticated):**
```json
{
  "user": {
    "name": "John Doe",
    "email": "john@example.com",
    "image": "https://..."
  },
  "expires": "2025-11-04T18:11:26.000Z"
}
```

**Response (not authenticated):**
```json
{}
```

---

## Error Codes

- **400** - Bad Request (missing required fields)
- **401** - Unauthorized (authentication required)
- **500** - Internal Server Error (API key not configured, Gemini API error)

---

## Environment Variables Required

```env
# Gemini AI
GEMINI_API_KEY=your-gemini-api-key

# NextAuth
NEXTAUTH_URL=http://localhost:3001
NEXTAUTH_SECRET=your-secret-key

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

---

## Testing the APIs

### 1. Test Gemini Connection
```bash
# Simple GET test
curl http://localhost:3001/api/test-gemini

# Custom prompt test
curl -X POST http://localhost:3001/api/test-gemini \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Explain React in one sentence"}'
```

### 2. Test Plan Generation
```bash
curl -X POST http://localhost:3001/api/generate-plan \
  -H "Content-Type: application/json" \
  -d '{
    "jobDescription": "We are looking for a Python Developer with Django and PostgreSQL experience."
  }'
```

### 3. Test Authentication
```bash
# Check current session
curl http://localhost:3001/api/auth/session

# Get available providers
curl http://localhost:3001/api/auth/providers
```

---

## Gemini API Models Available

According to the documentation, you can use these models:

- `gemini-2.0-flash-001` (default, fastest)
- `gemini-2.5-flash` (newer version)
- `gemini-1.5-pro` (more capable)
- `gemini-1.5-flash` (balanced)

To change the model, update the `model` parameter in the API routes:

```javascript
const response = await ai.models.generateContent({
  model: 'gemini-2.5-flash', // Change model here
  contents: prompt,
});
```

---

## Rate Limits

Gemini API has rate limits based on your API key tier. Check [Google AI Studio](https://makersuite.google.com/) for your limits.

---

## Additional Features

### Streaming Responses
Use `generateContentStream` for real-time streaming:

```javascript
const response = await ai.models.generateContentStream({
  model: 'gemini-2.0-flash-001',
  contents: prompt,
});

for await (const chunk of response) {
  console.log(chunk.text);
}
```

### Function Calling
Gemini supports function calling for structured outputs. See the main documentation for examples.

### Caching
For repeated prompts, use the caching API to reduce costs:

```javascript
const cache = await ai.caches.create({
  model: 'gemini-2.0-flash-001',
  contents: largePrompt,
});
```
