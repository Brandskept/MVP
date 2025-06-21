 codex/initialize-backend-with-typescript-server-and-prisma
# MVP

This repository contains the initial project setup. The `backend/` directory includes a TypeScript Express server with Prisma configured for a PostgreSQL database.

# BrandSkept MVP

This repository contains early planning documents and a minimal frontend prototype for the BrandSkept MVP. The frontend is built with **Next.js** and uses **NextAuth.js** to handle authentication against backend APIs.

## Repository Overview

- `BrandskeptTechStack.md` – recommended tech stack for the project
- `brandskept_roadmap.md` – three‑month roadmap outlining milestones
- `frontend/` – Next.js app with credentials-based authentication

## Getting Started

1. Copy `frontend/.env.example` to `frontend/.env.local` and adjust the URLs for your environment.
2. Install dependencies and start the development server:

```bash
cd frontend
npm install
npm run dev
```

The app will run on `http://localhost:3000`.

## Authentication Flow

`NextAuth.js` is configured to use a **Credentials** provider. When a user signs in, their credentials are sent to the backend API (`/login`) and the returned user object is stored in a JWT session. Registration posts to the `/register` endpoint on the same API.

See `frontend/pages/api/auth/[...nextauth].ts` for the full configuration.
 main
