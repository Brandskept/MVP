import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { brandAuthConfig } from './config';

export function signToken(payload: object): string {
  return jwt.sign(payload, brandAuthConfig.jwtSecret, { expiresIn: '1h' });
}

export function verifyToken(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ error: 'Missing Authorization header' });
  const token = header.replace(/^Bearer\s+/i, '');
  try {
    (req as any).auth = jwt.verify(token, brandAuthConfig.jwtSecret);
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
}
