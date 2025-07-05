 codex/create-api-routes-for-polls-and-campaigns
# MVP

This repository contains a very small prototype for the BrandSkept platform. A minimal Express API and a few Next.js style pages demonstrate how brands can create polls/A/B tests and how consumers can participate and track points.

## Running

The project assumes `node` is available. Dependencies such as `express` or `next` are not bundled. In a real environment you would run `npm install` before starting the server.

```bash
npm start
```

The API will run on port 3000 by default.

## Testing

No real automated tests are included. Running:

```bash
npm test
```

will attempt to start the API in test mode.

# BrandSkept MVP

This repository collects planning documents and a minimal prototype for the BrandSkept platform. A starter Next.js application lives in `frontend/`, while the `backend/` folder contains a small TypeScript Express API with Prisma.

## Repository Overview

- `BrandskeptTechStack.md` – recommended tech stack for the project
- `brandskept_roadmap.md` – roadmap outlining upcoming milestones
- `frontend/` – Next.js app with credentials-based authentication
- `backend/` – Express server configured with Prisma

## Getting Started

1. Copy `frontend/.env.example` to `.env.local`.
2. From inside `frontend/` run:

```bash
npm install
npm run dev
```

After dependencies are installed you can optionally initialize shadcn/ui components with:

```bash
npx shadcn-ui@latest init
```

The development server will be available at `http://localhost:3000`.

## Authentication Flow

The project now exposes a comprehensive authentication system. Backend routes are
mounted under `/auth` and support signup, login, email verification, password reset
and OAuth callbacks. Environment variables for JWT and SMTP configuration are
defined in `backend/.env.example`.

To get started:

1. Copy `backend/.env.example` to `backend/.env` and update the values.
2. Run `npm install` inside `backend/` then execute `npx prisma generate` to
   create the Prisma client.
3. Copy `frontend/.env.example` to `frontend/.env.local` and fill in the OAuth
   provider IDs.

NextAuth.js is configured to use the backend endpoints. See
`frontend/pages/api/auth/[...nextauth].ts` for details.
