import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import MicrosoftProvider from 'next-auth/providers/microsoft';
import AppleProvider from 'next-auth/providers/apple';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password
          })
        });

        if (!res.ok) {
          return null;
        }

        const user = await res.json();
        return user;
      }
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET || '',
    }),
    MicrosoftProvider({
      clientId: process.env.NEXT_PUBLIC_MICROSOFT_CLIENT_ID || '',
      clientSecret: process.env.NEXT_PUBLIC_MICROSOFT_CLIENT_SECRET || '',
    }),
    AppleProvider({
      clientId: process.env.NEXT_PUBLIC_APPLE_CLIENT_ID || '',
      clientSecret: process.env.NEXT_PUBLIC_APPLE_CLIENT_SECRET || '',
    })
  ],
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account && account.provider !== 'credentials') {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/oauth/${account.provider}/callback`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: (profile as any).email })
        });
        if (res.ok) {
          const data = await res.json();
          (user as any).id = data.user.id;
          (user as any).token = data.token;
        }
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = (user as any).id;
        if ((user as any).token) {
          token.accessToken = (user as any).token;
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
      }
      if ((token as any).accessToken) {
        (session as any).token = (token as any).accessToken;
      }
      return session;
    }
  }
};

export default NextAuth(authOptions);
