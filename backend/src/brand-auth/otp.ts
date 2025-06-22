import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { brandAuthConfig } from './config';
import { signToken } from './session';

const prisma = new PrismaClient();
const otpStore = new Map<string, { code: string; expires: number }>();

export const otpRouter = Router();

otpRouter.post('/send', async (req, res) => {
  if (!brandAuthConfig.strategies.otp) return res.status(404).end();
  const { email } = req.body as { email?: string };
  if (!email) return res.status(400).json({ error: 'Email required' });
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  const expires = Date.now() + brandAuthConfig.otpExpireMinutes * 60 * 1000;
  otpStore.set(email, { code, expires });
  // In real implementation send email here
  console.log(`OTP for ${email}: ${code}`);
  res.json({ success: true });
});

otpRouter.post('/verify', async (req, res) => {
  if (!brandAuthConfig.strategies.otp) return res.status(404).end();
  const { email, code } = req.body as { email?: string; code?: string };
  if (!email || !code) return res.status(400).json({ error: 'Missing fields' });
  const entry = otpStore.get(email);
  if (!entry || entry.code !== code || Date.now() > entry.expires) {
    return res.status(400).json({ error: 'Invalid or expired code' });
  }
  otpStore.delete(email);
  let brand = await prisma.brand.findUnique({ where: { email } });
  if (!brand) {
    brand = await prisma.brand.create({ data: { email } });
  }
  const token = signToken({ brandId: brand.id });
  res.json({ token, brand });
});
