import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div>
        <h1>Welcome to BrandSkept</h1>
        <button onClick={() => signIn()}>Sign In</button>
        <p>
          New here? <Link href="/register">Register</Link>
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1>Hello, {session.user?.name}</h1>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}
