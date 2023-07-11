import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import axios from "axios"
import "dotenv/config"
import { User, Account, Profile } from "next-auth"
import { AdapterUser } from "next-auth/adapters"
interface profi extends Profile {
  given_name?: string
  family_name?: string
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
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string
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
      session.user = token.user as any
      return session
    }
    //     async signIn({
    //       user,
    //       account,
    //       profile
    //     }: {
    //       user: User | AdapterUser
    //       account: Account | null
    //       profile?: profi | undefined
    //     }): Promise<boolean> {
    //       const userProvider = {
    //         password: user.id,
    //         name: profile?.given_name,
    //         lastname: profile?.family_name,
    //         email: user.email,
    //         image: user.image,
    //         provider: account?.provider,
    //         accessToken: account?.access_token
    //       }
    //       try {
    //         const response = await axios.post(
    //           //"http://localhost:3001/register", userProvider
    //           "https://pf-parcela-production.up.railway.app/register",
    //           userProvider
    //         )
    //         return true
    //       } catch (error) {
    //         console.log(error)
    //         return false
    //       }
    //     }
    //   },
  },
  pages: {
    signIn: "/login"
  }
})

export { handler as GET, handler as POST }
