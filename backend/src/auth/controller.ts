import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { sendVerificationEmail, sendResetEmail } from '../utils/mailer';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'change_me';

export async function signup(req, res) {
  const { email, password, name } = req.body as { email?: string; password?: string; name?: string };
  if (!email || !password) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) return res.status(400).json({ error: 'Email already in use' });
  const hashed = await bcrypt.hash(password, 10);
  const verificationToken = crypto.randomBytes(20).toString('hex');
  const user = await prisma.user.create({
    data: { email, password: hashed, name, verificationToken },
  });
  await sendVerificationEmail(email, verificationToken).catch(() => {});
  res.json({ id: user.id, email: user.email });
}

export async function login(req, res) {
  const { email, password } = req.body as { email?: string; password?: string };
  if (!email || !password) return res.status(400).json({ error: 'Missing fields' });
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(400).json({ error: 'Invalid credentials' });
  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ error: 'Invalid credentials' });
  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token, user: { id: user.id, email: user.email, name: user.name } });
}

export async function verifyEmail(req, res) {
  const { token } = req.params as { token?: string };
  if (!token) return res.status(400).json({ error: 'Missing token' });
  const user = await prisma.user.findFirst({ where: { verificationToken: token } });
  if (!user) return res.status(400).json({ error: 'Invalid token' });
  await prisma.user.update({ where: { id: user.id }, data: { verified: true, verificationToken: null } });
  res.json({ success: true });
}

export async function requestPasswordReset(req, res) {
  const { email } = req.body as { email?: string };
  if (!email) return res.status(400).json({ error: 'Email required' });
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.json({ success: true });
  const resetToken = crypto.randomBytes(20).toString('hex');
  const expires = new Date(Date.now() + 3600 * 1000);
  await prisma.user.update({
    where: { id: user.id },
    data: { resetToken, resetTokenExpires: expires },
  });
  await sendResetEmail(email, resetToken).catch(() => {});
  res.json({ success: true });
}

export async function resetPassword(req, res) {
  const { token, password } = req.body as { token?: string; password?: string };
  if (!token || !password) return res.status(400).json({ error: 'Missing fields' });
  const user = await prisma.user.findFirst({ where: { resetToken: token, resetTokenExpires: { gt: new Date() } } });
  if (!user) return res.status(400).json({ error: 'Invalid or expired token' });
  const hashed = await bcrypt.hash(password, 10);
  await prisma.user.update({
    where: { id: user.id },
    data: { password: hashed, resetToken: null, resetTokenExpires: null },
  });
  res.json({ success: true });
}

export async function oauthCallback(req, res) {
  const { email } = req.body as { email?: string };
  if (!email) return res.status(400).json({ error: 'Missing email' });
  let user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    user = await prisma.user.create({ data: { email, password: '', verified: true } });
  }
  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token, user: { id: user.id, email: user.email, name: user.name } });
}
