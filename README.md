# We Recruit

A full-stack recruitment application with authentication, dashboard, and user management.

## Project Structure

- **Frontend**: Next.js application with shadcn/ui components
- **Backend**: Express.js API with Prisma ORM and PostgreSQL database

## Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database
- Google OAuth credentials

## Setup Instructions

### 1. Clone the repository

```bash
git clone <repository-url>
cd we-recruit
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Generate Prisma client
npm run prisma:generate

# Apply database migrations
npm run prisma:migrate
```

Make sure to update the `.env` file in the backend directory with your database and Google OAuth credentials:

```
DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
JWT_SECRET="your-jwt-secret"
GOOGLE_CALLBACK_URL="http://localhost:8000/api/auth/google/callback"
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies
npm install
```

### 4. Running the Application

#### Backend

```bash
# From the backend directory
npm run dev
```

The backend server will start at http://localhost:8000

#### Frontend

```bash
# From the frontend directory
npm run dev
```

The frontend development server will start at http://localhost:3000

## Features

- Google OAuth Authentication
- User Dashboard
- JWT-based Authentication
- Protected Routes
- Modern UI with shadcn/ui components

## API Endpoints

### Authentication

- `GET /api/auth/google`: Initiates Google OAuth flow
- `GET /api/auth/google/callback`: Google OAuth callback
- `GET /api/auth/me`: Get current user information
- `POST /api/auth/logout`: Logout user

### User

- `GET /api/user/profile`: Get user profile
- `PUT /api/user/profile`: Update user profile 