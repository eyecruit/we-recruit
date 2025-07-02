import express from 'express';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import jwt from 'jsonwebtoken';
import prisma from '../utils/prisma.ts';
import { generateToken, generateRefreshToken } from '../utils/generateToken.ts';
import { verifyToken } from '../middleware/auth.ts';

const router = express.Router();

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID!,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  callbackURL: process.env.GOOGLE_CALLBACK_URL || "/api/auth/google/callback"
}, async (_, __, profile, done) => {
  const email = profile.emails?.[0].value;
  
  if (!email) {
    return done(new Error('No email found from Google profile'), undefined);
  }
  
  const name = profile.displayName;
  const image = profile.photos?.[0].value;

  try {
    const user = await prisma.user.upsert({
      where: { email },
      update: { name, image },
      create: { email, name, image }
    });

    done(null, user);
  } catch (error) {
    done(error, undefined);
  }
}));

// Initialize passport
router.use(passport.initialize());

router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get('/google/callback',
  passport.authenticate('google', { session: false }),
  (req, res) => {
    const user = req.user as any;
    
    if (!user) {
      return res.status(401).redirect('http://localhost:3000/login?error=authentication_failed');
    }
    
    const token = generateToken(user);
    const refreshToken = generateRefreshToken(user);

    // Set cookies
    res.cookie('token', token, { 
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day
      sameSite: 'lax'
    });
    
    res.cookie('refreshToken', refreshToken, { 
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      sameSite: 'lax'
    });

    // Redirect to dashboard
    res.redirect('http://localhost:3000/dashboard');
  }
);

// Get current user
router.get('/me', verifyToken, (req, res) => {
  const fetchUser = async () => {
    try {
      const user = await prisma.user.findUnique({
        where: { id: req.user!.id }
      });
      
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      
      // Don't send sensitive information
      const { id, name, email, image } = user;
      return res.json({ user: { id, name, email, image } });
    } catch (error) {
      return res.status(500).json({ message: 'Server error' });
    }
  };
  
  fetchUser();
});

// Logout
router.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.clearCookie('refreshToken');
  res.json({ message: 'Logged out successfully' });
});

export default router;
