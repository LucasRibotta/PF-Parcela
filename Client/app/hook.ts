import { useSession } from "next-auth/react"
import { User } from "next-auth"
export interface NewUser extends User {
  _id: string
  name: string
  lastname: string
  phone: number
  date: string
  email: string
  image: string
  password: string
  provider?: string
  accessToken?: string
  isAdmin: boolean
  isCompany: boolean
}
const useAppSession = () => {
  const { data: session, status } = useSession()
  const user = session?.user as NewUser
  return {
    user,
    session,
    status
  }
}

export { useAppSession }
