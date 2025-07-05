# Frontend

This directory contains a starter [Next.js](https://nextjs.org/) application.
It is configured with **Tailwind CSS** and is ready for [shadcn/ui](https://ui.shadcn.com/) components.

## Local Development

Install dependencies (requires Node.js and access to npm registry):

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

To scaffold shadcn/ui components after installing dependencies, run:

```bash
npx shadcn-ui@latest init
```

## Sidebar Component

The `Sidebar` component in `components/Sidebar.tsx` provides a collapsible navigation menu.
Import and include it in your pages:

```tsx
import Sidebar from '../components/Sidebar';

export default function Page() {
  return (
    <div className="flex">
      <Sidebar currentTeam="Team One" />
      {/* page content */}
    </div>
  );
}
```

This project was generated offline, so no node modules are included.
