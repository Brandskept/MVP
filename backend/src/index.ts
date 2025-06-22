import express from 'express';
import { PrismaClient } from '@prisma/client';
import passport from 'passport';
import session from 'express-session';
import { brandAuthRouter } from './brand-auth';

const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(
  session({
    secret: process.env.BRAND_JWT_SECRET || 'change_me',
    resave: false,
    saveUninitialized: false,
  }),
);
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (_req, res) => {
  res.json({ message: 'API is running' });
});

// Example endpoint using Prisma
app.get('/users', async (_req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

// Routes for brand authentication
app.use('/brand-auth', brandAuthRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
