import express from 'express';
import prisma from '../utils/prisma';
import { verifyGoogleToken } from '../utils/googleAuth';
import { generateToken } from '../utils/jwt';

const router = express.Router();

/**
 * POST /auth/google
 * Authenticate user with Google ID token
 */
router.post('/google', async (req, res) => {
  try {
    const { idToken } = req.body;
    
    if (!idToken) {
      return res.status(400).json({ error: 'ID token is required' });
    }
    
    // Verify the Google token
    const googleUser = await verifyGoogleToken(idToken);
    
    if (!googleUser) {
      return res.status(401).json({ error: 'Invalid Google token' });
    }
    
    const { email, name, picture } = googleUser;
    
    // Check if user exists, if not create a new one (upsert)
    const user = await prisma.user.upsert({
      where: { email },
      update: {
        name,
        image: picture
      },
      create: {
        email,
        name,
        image: picture
      }
    });
    
    // Generate JWT token
    const token = generateToken({
      userId: user.id,
      email: user.email
    });
    
    // Return user data and token
    return res.status(200).json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        image: user.image
      },
      token
    });
  } catch (error) {
    console.error('Google auth error:', error);
    return res.status(500).json({ error: 'Authentication failed' });
  }
});

export default router; 