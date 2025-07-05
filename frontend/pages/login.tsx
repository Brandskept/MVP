import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await signIn('credentials', { redirect: false, email, password });
    if (res?.error) setError('Invalid credentials');
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl mb-4">Sign in</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2"
        />
        <button type="submit" className="bg-black text-white p-2">Login</button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <div className="mt-4 flex flex-col gap-2">
        <button onClick={() => signIn('google')} className="border p-2">Sign in with Google</button>
        <button onClick={() => signIn('microsoft')} className="border p-2">Sign in with Microsoft</button>
        <button onClick={() => signIn('apple')} className="border p-2">Sign in with Apple</button>
      </div>
    </div>
  );
}
