/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials: any) {
        let user = null;
        if (credentials?.OTP) {
          const { email_or_phone, otp } = credentials;

          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/v1/auth/verify-otp`,
            {
              method: "POST",
              body: JSON.stringify({ email_or_phone: email_or_phone, otp }),
              headers: { "Content-Type": "application/json" },
            }
          );
          const data = await res.json();
          if (res.ok && data) {
            user = data;
            return user;
          } else {
            throw new Error(data?.message || "Wrong OTP | Please try again");
          }
        } else if (credentials?.Login) {
          const { email, password }: any = credentials;
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/v1/auth/signin-user`,
            {
              method: "POST",
              body: JSON.stringify({ email_or_phone: email, password }),
              headers: { "Content-Type": "application/json" },
            }
          );

          const response = await res.json();
          if (res.ok && response) {
            user = response;
            return user;
          } else {
            throw new Error(
              response?.message || "লগইন ব্যর্থ হয়েছে। আবার চেষ্টা করুন।"
            );
          }
        } else if (credentials?.googleLogin) {
          const { userData, accessToken }: any = credentials;
          const user = JSON.parse(userData);
          if (user && accessToken) {
            user.token = user?.token?.replace(/ /g, "+");
            return user;
          }
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      session.user = token.user;
      return session;
    },
  },
  pages: {
    signIn: "/sign-in",
    signOut: "/",
  },
  secret: process.env.NEXT_PUBLIC_NEXT_AUTH_SCRETE,
};
// process.env.NEXTAUTH_SECRET
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
