import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { drupalPasswordGrantLogin } from "@/lib/drupal";

const handler = NextAuth({
  debug: true, // ✅ IMPORTANT

  session: { strategy: "jwt" },

  providers: [
    Credentials({
      name: "Drupal",
      // ✅ Make sure these keys match what you pass in signIn()
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {


        const email = credentials?.email?.trim();
        const password = credentials?.password;

        if (!email || !password) {
          console.error("Missing email/password in authorize()");
          return null; // -> causes 401
        }

        const token = await drupalPasswordGrantLogin({
          username: email,
          password,
        });

        console.log("Drupal token OK, expires_in:", token.expires_in);

        try {
          const token = await drupalPasswordGrantLogin({
            username: email,
            password,
          });

          console.log("Drupal token OK, expires_in:", token.expires_in);

          return {
            id: email,
            email,
            accessToken: token.access_token,
            refreshToken: token.refresh_token,
            expiresIn: token.expires_in,
            tokenType: token.token_type,
          } as any;
        } catch (e: any) {
          console.error("Drupal token FAILED:", e?.message || e);
          return null; // -> causes 401 (CredentialsSignin)
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = (user as any).accessToken;
        token.refreshToken = (user as any).refreshToken;
        token.expiresAt = Date.now() + ((user as any).expiresIn ?? 3600) * 1000;
        token.tokenType = (user as any).tokenType ?? "Bearer";
      }
      return token;
    },
    async session({ session, token }) {
      (session as any).accessToken = token.accessToken;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
