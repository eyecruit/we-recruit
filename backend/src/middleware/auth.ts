import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';

// Extend Express Request type to include user
declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: string;
        email: string;
      };
    }
  }
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  // Get token from Authorization header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN format
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  const payload = verifyToken(token);
  
  if (!payload) {
    return res.status(403).json({ error: 'Invalid or expired token' });
  }
  
  // Add user info to request
  req.user = {
    userId: payload.userId,
    email: payload.email
  };
  
  next();
}; 