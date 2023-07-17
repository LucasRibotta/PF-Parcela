import { useSession } from "next-auth/react"
import { DefaultUser } from "next-auth"
export interface NewUser extends DefaultUser {
  isAdmin?: boolean
  isCompany?: boolean
  lastname?: string
  phone?: number
  date?: string
  password?: string
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
