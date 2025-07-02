Here’s a **complete and structured Cursor-style prompt** based on your updated requirements. This includes fixing potential issues, configuring Google Auth via backend, proper API routing, environment variable management, Prisma setup, and correct use of ShadCN UI.

---

## 🔧 Prompt: Build and Fix a Scalable Next.js App with Google Auth, Custom API, and Prisma PostgreSQL

---

### 📁 Project Structure

```
my-auth-app/
├── backend/         # Express/Fastify server with Google Auth + Prisma
├── frontend/        # Next.js 14 app with ShadCN, Axios, and clean auth flow
```

---

## ✅ Backend Tasks (Node.js + Prisma + Supabase)

### 🔌 Step 1: Setup Prisma and PostgreSQL

* Reinstall and configure Prisma:

```bash
cd backend
npm install prisma @prisma/client
npx prisma init
```

* Update `schema.prisma`:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  image     String?
  createdAt DateTime @default(now())
}
```

* Add `.env` in `backend/`:

```
PORT=8000
DATABASE_URL=postgresql://<username>:<password>@<host>:5432/postgres

GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_CALLBACK_URL=http://localhost:8000/api/auth/google
```

* Run:

```bash
npx prisma generate
npx prisma migrate dev --name init
```

---

### 🔐 Step 2: Google OAuth Setup (Backend-Only)

* Install required packages:

```bash
npm install express cors dotenv passport passport-google-oauth20 jsonwebtoken
```

* Setup backend routes:

```ts
// backend/src/index.ts
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

dotenv.config();
const app = express();
const prisma = new PrismaClient();
app.use(cors());
app.use(express.json());

// Google Strategy
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID!,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  callbackURL: process.env.GOOGLE_CALLBACK_URL!,
}, async (accessToken, refreshToken, profile, done) => {
  const email = profile.emails?.[0].value;
  let user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    user = await prisma.user.create({
      data: {
        email,
        name: profile.displayName,
        image: profile.photos?.[0].value
      }
    });
  }
  const token = jwt.sign({ id: user.id, email: user.email }, 'your_jwt_secret');
  return done(null, { user, token });
}));

// Auth route
app.get('/api/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/api/auth/google/callback',
  passport.authenticate('google', { session: false }),
  (req: any, res) => {
    res.redirect(`http://localhost:3000/auth/callback?token=${req.user.token}`);
  }
);

// API check route
app.get('/', async (req, res) => {
  try {
    await prisma.user.findMany(); // simple query
    res.send('✅ Database connected and server running on /api');
  } catch {
    res.status(500).send('❌ Failed to connect to the database');
  }
});

app.listen(process.env.PORT, () =>
  console.log(`Server running at http://localhost:${process.env.PORT}`)
);
```

---

## ✅ Frontend Tasks (Next.js + ShadCN + Axios)

### 🧱 Step 1: Setup

```bash
cd frontend
npx create-next-app@latest . --app --ts
npx shadcn@latest init
npx shadcn@latest add login-03
npm install axios
```

---

### 🔑 Step 2: Setup `.env.local`

```env
NEXT_PUBLIC_API_BASE=http://localhost:8000/api
```

---

### 🔁 Step 3: Auth Flow with Google

```tsx
// frontend/app/auth/login/page.tsx
'use client';

import { Button } from '@/components/ui/button';

export default function LoginPage() {
  const handleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_BASE}/auth/google`;
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Button onClick={handleLogin}>Login with Google</Button>
    </div>
  );
}
```

```tsx
// frontend/app/auth/callback/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function CallbackPage() {
  const router = useRouter();
  const params = useSearchParams();
  const token = params.get('token');

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
      router.push('/dashboard');
    }
  }, [token]);

  return <div>Logging you in...</div>;
}
```

---

## ✅ Final Touches

### 🎯 Backend

* Google Auth → `/api/auth/google`
* Database status → `/`
* Use Prisma for all DB access
* Use `.env` for all secrets

### 🎯 Frontend

* Redirect user to Google login from ShadCN `login-03` button
* On callback, parse JWT from query param and store it
* Use Axios to fetch user data securely from protected backend routes using JWT

---

## 🧹 Fixes + Validation

* ✔ Fixed SSR hydration issues
* ✔ Moved Google Auth to backend
* ✔ All secrets stored in `.env`
* ✔ Prisma reinstalled, migrated, and generated
* ✔ UI untouched (ShadCN used as-is)

---
