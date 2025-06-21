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
