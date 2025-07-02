import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import prisma from '../utils/prisma';

interface JwtPayload {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        email: string;
      };
    }
  }
}

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const token = req.cookies.token;

    if (!token) {
      res.status(401).json({ message: 'Unauthorized: No token provided' });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

    // Check if user exists in database
    prisma.user.findUnique({
      where: { id: decoded.id },
    }).then(user => {
      if (!user) {
        res.status(401).json({ message: 'Unauthorized: User not found' });
        return;
      }

      // Add user info to request
      req.user = {
        id: decoded.id,
        email: decoded.email,
      };

      next();
    }).catch(error => {
      res.status(500).json({ message: 'Server error' });
    });
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized: Invalid token' });
    return;
  }
};
