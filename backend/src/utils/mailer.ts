import nodemailer from 'nodemailer';

const host = process.env.SMTP_HOST || '';
const user = process.env.SMTP_USER || '';
const pass = process.env.SMTP_PASS || '';
const from = process.env.SMTP_FROM || 'noreply@example.com';

const transporter = nodemailer.createTransport({
  host,
  port: Number(process.env.SMTP_PORT) || 587,
  auth: { user, pass },
});

export async function sendVerificationEmail(email: string, token: string) {
  const url = `${process.env.APP_URL}/verify/${token}`;
  await transporter.sendMail({
    from,
    to: email,
    subject: 'Verify your email',
    text: `Click to verify: ${url}`,
  });
}

export async function sendResetEmail(email: string, token: string) {
  const url = `${process.env.APP_URL}/reset-password?token=${token}`;
  await transporter.sendMail({
    from,
    to: email,
    subject: 'Password reset',
    text: `Reset password link: ${url}`,
  });
}
