import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import axios from "axios"
import "dotenv/config"
import { User, Account, Profile } from "next-auth"
import { AdapterUser } from "next-auth/adapters"
import { Session } from "next-auth"

interface profi extends Profile {
  given_name?: string
  family_name?: string
}
interface se extends Session {
  email: string
  password: string
  isAdmin?: boolean
  isCompany?: boolean
}
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
          "http://localhost:3001/login",
          credentials
        )
        const user = response.data

        if (user) {
          return user.user
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
      if (user) {
        token.user = user
      }
      return token
    },
    session({ session, token }) {
      session.user = token.user as se
      return session
    },
    async signIn({
      user,
      account,
      profile
    }: {
      user: User | AdapterUser
      account: Account | null
      profile?: profi | undefined
    }): Promise<boolean> {
      if (account?.provider === "credentials") {
        return true
      } else {
        const userProvider = {
          password: user.id,
          name: profile?.given_name,
          lastname: profile?.family_name,
          email: user.email,
          image: user.image,
          provider: account?.provider,
          accessToken: account?.access_token
        }
        try {
          const response = await axios.post(
            "http://localhost:3001/register",
            userProvider
            //"https://pf-parcela-production.up.railway.app/register", userProvider
          )
          return true
        } catch (error) {
          console.log(error)
          return false
        }
      }
    }
  },
  pages: {
    signIn: "/login"
  }
})

export { handler as GET, handler as POST }
