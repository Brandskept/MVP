# Backend

This directory contains a starter Express server written in TypeScript and configured with Prisma.

## Development

1. Install dependencies (requires access to npm registry):
   ```bash
   npm install
   ```
2. Generate Prisma client:
   ```bash
   npx prisma generate
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

The server exposes a root endpoint (`/`) returning a simple JSON message and a `/users` endpoint that queries the database using Prisma.

## Brand Authentication Module

`src/brand-auth/` contains a modular authentication system for partner brands. It supports:

- **OTP**: email-based one-time codes with a 5 minute expiration.
- **OAuth**: Google, Discord and GitHub examples via Passport.js.
- **SSO**: pluggable strategy outline for SAML/OIDC providers.

Routes are mounted under `/brand-auth`. Feature flags and provider credentials are configured in `src/brand-auth/config.ts`.
