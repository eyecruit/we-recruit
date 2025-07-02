import express from 'express';
import { verifyToken } from '../middleware/auth';
import prisma from '../utils/prisma';

const router = express.Router();

// Get user profile
router.get('/profile', verifyToken, (req, res) => {
  const fetchProfile = async () => {
    try {
      const user = await prisma.user.findUnique({
        where: { id: req.user!.id },
      });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json({
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
      });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };

  fetchProfile();
});

// Update user profile
router.put('/profile', verifyToken, (req, res) => {
  const { name } = req.body;
  
  const updateProfile = async () => {
    try {
      const updatedUser = await prisma.user.update({
        where: { id: req.user!.id },
        data: { name },
      });

      res.json({
        id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
        image: updatedUser.image,
      });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };

  updateProfile();
});

export default router; 