import jwt from 'jsonwebtoken';

interface UserPayload {
  id: string;
  email: string;
}

export const generateToken = (user: UserPayload): string => {
  return jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET!,
    { expiresIn: '1d' }
  );
};

export const generateRefreshToken = (user: UserPayload): string => {
  return jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET!,
    { expiresIn: '7d' }
  );
};
