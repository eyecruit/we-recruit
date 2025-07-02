import express from 'express';
import prisma from '../utils/prisma';
import { authenticateToken } from '../middleware/auth';

const router = express.Router();

/**
 * GET /user/me
 * Get current user information
 */
router.get('/me', authenticateToken, async (req, res) => {
  try {
    const userId = req.user?.userId;
    
    if (!userId) {
      return res.status(401).json({ error: 'User not authenticated' });
    }
    
    const user = await prisma.user.findUnique({
      where: { id: userId }
    });
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    return res.status(200).json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        image: user.image
      }
    });
  } catch (error) {
    console.error('Error fetching user:', error);
    return res.status(500).json({ error: 'Failed to fetch user data' });
  }
});

/**
 * PUT /user/me
 * Update current user information
 */
router.put('/me', authenticateToken, async (req, res) => {
  try {
    const userId = req.user?.userId;
    const { name, image } = req.body;
    
    if (!userId) {
      return res.status(401).json({ error: 'User not authenticated' });
    }
    
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        name: name !== undefined ? name : undefined,
        image: image !== undefined ? image : undefined
      }
    });
    
    return res.status(200).json({
      user: {
        id: updatedUser.id,
        email: updatedUser.email,
        name: updatedUser.name,
        image: updatedUser.image
      }
    });
  } catch (error) {
    console.error('Error updating user:', error);
    return res.status(500).json({ error: 'Failed to update user data' });
  }
});

export default router; 