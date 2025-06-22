import { Router } from 'express';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as DiscordStrategy } from 'passport-discord';
import { Strategy as GitHubStrategy } from 'passport-github2';
import { PrismaClient } from '@prisma/client';
import { brandAuthConfig } from './config';
import { signToken } from './session';

const prisma = new PrismaClient();
export const oauthRouter = Router();

passport.serializeUser((user: any, done) => done(null, user));
passport.deserializeUser((obj: any, done) => done(null, obj));

function ensureProviderAccount(provider: string, id: string, email: string) {
  return prisma.$transaction(async () => {
    let brand = await prisma.brand.findUnique({ where: { email } });
    if (!brand) {
      brand = await prisma.brand.create({ data: { email } });
    }
    const account = await prisma.brandAccount.findFirst({
      where: { provider, providerAccountId: id, brandId: brand.id },
    });
    if (!account) {
      await prisma.brandAccount.create({
        data: { provider, providerAccountId: id, type: 'oauth', brandId: brand.id },
      });
    }
    return brand;
  });
}

if (brandAuthConfig.strategies.oauth) {
  const { google, discord, github } = brandAuthConfig.oauthProviders;
  if (google.clientId) {
    passport.use(
      new GoogleStrategy(
        {
          clientID: google.clientId,
          clientSecret: google.clientSecret,
          callbackURL: '/brand-auth/oauth/google/callback',
        },
        async (_access, _refresh, profile, done) => {
          const email = profile.emails?.[0].value;
          if (!email) return done(null, false);
          const brand = await ensureProviderAccount('google', profile.id, email);
          done(null, brand);
        },
      ),
    );
    oauthRouter.get('/google', passport.authenticate('google', { scope: ['email'] }));
    oauthRouter.get(
      '/google/callback',
      passport.authenticate('google', { session: false }),
      (req, res) => {
        const brand = req.user as any;
        const token = signToken({ brandId: brand.id });
        res.json({ token, brand });
      },
    );
  }
  if (discord.clientId) {
    passport.use(
      new DiscordStrategy(
        {
          clientID: discord.clientId,
          clientSecret: discord.clientSecret,
          callbackURL: '/brand-auth/oauth/discord/callback',
          scope: ['identify', 'email'],
        },
        async (_access, _refresh, profile, done) => {
          const email = profile.email;
          if (!email) return done(null, false);
          const brand = await ensureProviderAccount('discord', profile.id, email);
          done(null, brand);
        },
      ),
    );
    oauthRouter.get('/discord', passport.authenticate('discord'));
    oauthRouter.get(
      '/discord/callback',
      passport.authenticate('discord', { session: false }),
      (req, res) => {
        const brand = req.user as any;
        const token = signToken({ brandId: brand.id });
        res.json({ token, brand });
      },
    );
  }
  if (github.clientId) {
    passport.use(
      new GitHubStrategy(
        {
          clientID: github.clientId,
          clientSecret: github.clientSecret,
          callbackURL: '/brand-auth/oauth/github/callback',
        },
        async (_access, _refresh, profile, done) => {
          const email = profile.emails?.[0].value || profile.username;
          const brand = await ensureProviderAccount('github', profile.id, email);
          done(null, brand);
        },
      ),
    );
    oauthRouter.get('/github', passport.authenticate('github', { scope: ['user:email'] }));
    oauthRouter.get(
      '/github/callback',
      passport.authenticate('github', { session: false }),
      (req, res) => {
        const brand = req.user as any;
        const token = signToken({ brandId: brand.id });
        res.json({ token, brand });
      },
    );
  }
}
