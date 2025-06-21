 codex/initialize-next.js-project-with-tailwind-css-and-shadcn/ui
# MVP

This repository contains planning documents for the BrandSkept project.
A starter Next.js app lives in the `frontend/` directory.

## Getting Started

From the repository root run:

 5d4j0z-codex/create-api-routes-for-polls-and-campaigns

 djgfaa-codex/create-api-routes-for-polls-and-campaigns
 main
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
 5d4j0z-codex/create-api-routes-for-polls-and-campaigns


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
 main

```bash
cd frontend
npm install
npm run dev
```

 codex/initialize-next.js-project-with-tailwind-css-and-shadcn/ui
The app uses Tailwind CSS and is ready for shadcn/ui components.
You can initialize shadcn/ui after dependencies are installed with:

```bash
npx shadcn-ui@latest init
```

The project was created offline, so node modules are not included.

The app will run on `http://localhost:3000`.

## Authentication Flow

`NextAuth.js` is configured to use a **Credentials** provider. When a user signs in, their credentials are sent to the backend API (`/login`) and the returned user object is stored in a JWT session. Registration posts to the `/register` endpoint on the same API.

See `frontend/pages/api/auth/[...nextauth].ts` for the full configuration.
 main
 main
 main
 main
