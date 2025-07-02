# We Recruit

A recruitment application with Google Authentication, JWT tokens, and a dashboard.

## Project Structure

- **Backend**: Express.js + Prisma + PostgreSQL
- **Frontend**: Next.js + ShadCN UI + Axios

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Generate Prisma client:
```bash
npm run prisma:generate
```

4. Create a `.env` file in the backend directory with the following variables:
```
DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
JWT_SECRET="your-jwt-secret"
```

5. Run database migrations:
```bash
npm run prisma:migrate
```

6. Start the backend server:
```bash
npm run dev
```

The backend will run on http://localhost:8000

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the frontend directory with your Google Client ID:
```
NEXT_PUBLIC_GOOGLE_CLIENT_ID="your-google-client-id"
```

4. Start the frontend development server:
```bash
npm run dev
```

The frontend will run on http://localhost:3000

## API Endpoints

### Authentication
- `POST /auth/google`: Authenticate with Google ID token
  - Request body: `{ idToken: "google-id-token" }`
  - Response: `{ token: "jwt-token", user: { id, email, name, image } }`

### User
- `GET /user/me`: Get current user information (requires authentication)
  - Response: `{ user: { id, email, name, image } }`
- `PUT /user/me`: Update user information (requires authentication)
  - Request body: `{ name: "New Name", image: "new-image-url" }`
  - Response: `{ user: { id, email, name, image } }`

## Authentication Flow

1. User clicks "Sign in with Google" on the login page
2. Google OAuth returns an ID token
3. Frontend sends the ID token to the backend
4. Backend verifies the token with Google
5. Backend creates or updates the user in the database
6. Backend generates a JWT token and returns it to the frontend
7. Frontend stores the JWT token in localStorage
8. Frontend redirects to the dashboard page
9. Dashboard page fetches user data using the JWT token 