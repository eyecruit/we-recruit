
### 🎯 Cursor Prompt: Scalable Google Auth App with Custom Backend (Next.js + PostgreSQL)

**📁 Project Structure**
Create a monorepo with the following folder structure:

```
my-auth-app/
│
├── backend/         # Node.js Express or Fastify app with Prisma + PostgreSQL
│
├── frontend/        # Next.js app using ShadCN UI, Axios for API calls
```

---

## ✅ Task 1: **Backend Setup** (Google Auth + PostgreSQL + JWT)

🔧 **Stack**: Node.js + Express or Fastify + Prisma + PostgreSQL

### Goals:

* Handle Google Auth on backend.
* Use Google OAuth2 tokens to verify user.
* On successful login, check if user exists in DB.

  * If exists → Return JWT and user data.
  * If not → Register user, then return JWT and user data.
* Secure all routes using the generated JWT.
* Expose a minimal REST API for login check, user CRUD, etc.

### Requirements:

* `POST /auth/google`: Accept Google ID token → validate → upsert user → return JWT.
* `GET /me`: Validate JWT → return user info.
* Use Prisma for PostgreSQL integration.

```bash
cd backend
npm init -y
npm install express cors dotenv jsonwebtoken prisma axios @prisma/client
npx prisma init
```

Define User model in `prisma/schema.prisma`:

```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String
  image     String?
  createdAt DateTime @default(now())
}
```

---

## ✅ Task 2: **Frontend Setup** (Next.js + ShadCN + Axios)

🔧 **Stack**: Next.js + TypeScript + Axios + Tailwind + ShadCN

```bash
npx create-next-app@latest frontend --typescript --app
cd frontend
npx shadcn@latest init
npx shadcn@latest add login-03
```

### Goals:

* On first load, show **login page** (`login-03` from ShadCN).
* Use Google Sign-In via Google SDK or `@react-oauth/google`.
* Send the Google token to backend `/auth/google`.
* Store the returned JWT in localStorage or cookies.
* Redirect to `/dashboard` on success.
* If no user is present in DB, backend will auto-register.

### Axios setup:

```ts
// frontend/lib/axios.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000', // Backend port
  withCredentials: true,
});

export default api;
```

### Auth flow:

```ts
// frontend/actions/googleLogin.ts
import api from '@/lib/axios';

export const loginWithGoogle = async (googleToken: string) => {
  const response = await api.post('/auth/google', {
    idToken: googleToken,
  });
  const { token, user } = response.data;
  localStorage.setItem('token', token);
  return user;
};
```

---

## 🧠 Key Notes for Scalability

* Handle all business logic (auth, DB, sessions) in backend.
* Frontend just consumes APIs → easier to scale to mobile or desktop.
* You can later switch Google Auth provider (Clerk/Auth0) without affecting frontend.
* Extend `/auth/google` to also support refresh tokens later.

---

## ✅ Summary of Tasks

### 🔁 Backend

* [ ] Implement Google OAuth validation
* [ ] Save users into PostgreSQL using Prisma
* [ ] Return JWT from `/auth/google`
* [ ] Add `/me` route to fetch user profile by verifying JWT

### 💻 Frontend

* [ ] Use ShadCN `login-03` page
* [ ] Implement Google Sign-In button
* [ ] Send token to backend via Axios
* [ ] Save JWT in localStorage/cookies
* [ ] Redirect to dashboard if authenticated

---

Let me know if you want me to **generate code templates** for any of these tasks!
