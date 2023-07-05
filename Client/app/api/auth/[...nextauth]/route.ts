import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import axios from "axios"
import 'dotenv/config'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "email", type: "email", placeholder: "Email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const response = await axios.post(
          "https://pf-parcela-production.up.railway.app/login",
          credentials
        )
        const user = response.data
        console.log(user)

        if (user) {
          return user
        } else {
          throw new Error("Invalid credentials")
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
          params: {
            prompt: "consent",
            access_type: "offline",
            response_type: "code"
          }
        }
    })
  ],
  callbacks: {
    jwt({ account, user, profile, session, token }) {
      if (user) token.user = user
      return token
    },
    session({ session, token }) {
      session.user = token.user as any
      return session
    }
  },
  pages: {
    signIn: "/login"
  }
})

export { handler as GET, handler as POST }
