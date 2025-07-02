import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import authRoutes from './routes/auth';
import userRoutes from './routes/user';

dotenv.config();

const app = express();
const prisma = new PrismaClient();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());

// Health check route
app.get('/', (req, res) => {
  res.send('Backend server is running');
});

// Routes
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

const PORT = process.env.PORT || 8000;

// Test database connection before starting server
const startServer = async () => {
  try {
    // Test database connection
    await prisma.$connect();
    console.log('✅ Database connection established');
    
    app.listen(PORT, () => {
      console.log(`✅ Backend is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Failed to connect to the database:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

startServer(); 