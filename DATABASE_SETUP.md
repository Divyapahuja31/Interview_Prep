# 🗄️ Database Setup Guide

## Prerequisites

- PostgreSQL installed locally or access to a cloud PostgreSQL instance
- Node.js and npm installed
- Prisma CLI (installed automatically with the project)

---

## Quick Setup (Local PostgreSQL)

### 1. Install PostgreSQL

**macOS (using Homebrew):**
```bash
brew install postgresql
brew services start postgresql
```

**Ubuntu/Debian:**
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
```

**Windows:**
Download from [PostgreSQL official website](https://www.postgresql.org/download/windows/)

### 2. Create Database

```bash
# Connect to PostgreSQL
psql postgres

# Create database and user
CREATE DATABASE interview_prep;
CREATE USER interview_user WITH PASSWORD 'your_password_here';
GRANT ALL PRIVILEGES ON DATABASE interview_prep TO interview_user;

# Exit psql
\q
```

### 3. Update Environment Variables

Add to your `.env.local`:

```env
# Database
DATABASE_URL="postgresql://interview_user:your_password_here@localhost:5432/interview_prep"

# Existing variables...
NEXTAUTH_URL=http://localhost:3001
NEXTAUTH_SECRET=your-nextauth-secret
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GEMINI_API_KEY=your-gemini-api-key
```

### 4. Run Migrations

```bash
# Generate Prisma client
npx prisma generate

# Create and run migrations
npx prisma migrate dev --name init

# (Optional) Open Prisma Studio to view data
npx prisma studio
```

---

## Cloud Database Setup

### Option 1: Vercel Postgres (Recommended for deployment)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Create a new project or select existing
3. Go to Storage → Create Database → Postgres
4. Copy the connection string
5. Add to `.env.local`:

```env
DATABASE_URL="your-vercel-postgres-connection-string"
```

### Option 2: Supabase (Free tier available)

1. Go to [Supabase](https://supabase.com/)
2. Create new project
3. Go to Settings → Database
4. Copy connection string
5. Add to `.env.local`:

```env
DATABASE_URL="postgresql://postgres:your-password@db.your-project.supabase.co:5432/postgres"
```

### Option 3: Railway (Simple deployment)

1. Go to [Railway](https://railway.app/)
2. Create new project → Add PostgreSQL
3. Copy connection string from Variables tab
4. Add to `.env.local`

---

## Database Schema Overview

Our Prisma schema includes:

### 🔐 Authentication Tables
- **User** - User profiles and authentication data
- **Account** - OAuth account connections
- **Session** - User sessions
- **VerificationToken** - Email verification tokens

### 📊 Application Tables
- **InterviewPlan** - AI-generated interview preparation plans
- **UserProgress** - Skill progress tracking and XP system
- **Note** - Personal study notes with tags

### 🔗 Relationships
- User → InterviewPlan (one-to-many)
- User → UserProgress (one-to-many)
- User → Note (one-to-many)
- User → Account (one-to-many)
- User → Session (one-to-many)

---

## Testing Database Connection

### 1. Check Connection
```bash
# Test database connection
npx prisma db pull
```

### 2. View Database
```bash
# Open Prisma Studio (visual database browser)
npx prisma studio
```

### 3. Test API Endpoints

**Create a test plan:**
```bash
curl -X POST http://localhost:3001/api/plans \
  -H "Content-Type: application/json" \
  -d '{
    "jobDescription": "Test job description",
    "skills": ["JavaScript", "React"],
    "projects": [{"title": "Test Project", "icon": "🚀"}],
    "questions": [{"title": "Test Question", "icon": "❓"}],
    "resources": [{"title": "Test Resource", "icon": "📚"}],
    "timeline": [{"title": "Week 1", "icon": "📅"}]
  }'
```

**Get user plans:**
```bash
curl http://localhost:3001/api/plans
```

---

## Common Issues & Solutions

### Issue: "Environment variable not found: DATABASE_URL"
**Solution:** Make sure `.env.local` exists and contains `DATABASE_URL`

### Issue: "Can't reach database server"
**Solution:** 
- Check PostgreSQL is running: `brew services list | grep postgresql`
- Verify connection string format
- Check firewall settings

### Issue: "Migration failed"
**Solution:**
```bash
# Reset database (WARNING: deletes all data)
npx prisma migrate reset

# Or create new migration
npx prisma migrate dev --name fix-schema
```

### Issue: "Prisma Client not generated"
**Solution:**
```bash
npx prisma generate
```

---

## Database Commands Reference

```bash
# Generate Prisma client
npx prisma generate

# Create new migration
npx prisma migrate dev --name migration-name

# Apply migrations to production
npx prisma migrate deploy

# Reset database (development only)
npx prisma migrate reset

# View database in browser
npx prisma studio

# Pull schema from existing database
npx prisma db pull

# Push schema changes without migration
npx prisma db push

# Seed database (if seed file exists)
npx prisma db seed
```

---

## Production Deployment

### 1. Environment Variables
Set these in your deployment platform:

```env
DATABASE_URL="your-production-database-url"
NEXTAUTH_URL="https://your-domain.com"
NEXTAUTH_SECRET="your-production-secret"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
GEMINI_API_KEY="your-gemini-api-key"
```

### 2. Run Migrations
```bash
# In your deployment script
npx prisma migrate deploy
npx prisma generate
```

### 3. Update OAuth Redirect URLs
Add your production domain to Google OAuth settings:
- `https://your-domain.com/api/auth/callback/google`

---

## Backup & Restore

### Backup
```bash
pg_dump -h localhost -U interview_user interview_prep > backup.sql
```

### Restore
```bash
psql -h localhost -U interview_user interview_prep < backup.sql
```

---

## Security Best Practices

1. **Never commit `.env.local`** to version control
2. **Use strong passwords** for database users
3. **Enable SSL** for production databases
4. **Regularly backup** your data
5. **Monitor database access** logs
6. **Use connection pooling** for high traffic

---

## Next Steps

After setting up the database:

1. ✅ Test authentication flow
2. ✅ Generate an AI interview plan (will auto-save to database)
3. ✅ Check Prisma Studio to see saved data
4. ✅ Test progress tracking APIs
5. ✅ Create some personal notes

**Your interview prep platform now has full data persistence! 🎉**
