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

NextAuth.js uses a **Credentials** provider. When a user signs in, their credentials are sent to the backend (`/login`) and the returned user data is stored in a JWT session. Registration posts to the `/register` endpoint on the same API.

See `frontend/pages/api/auth/[...nextauth].ts` for the full configuration.
