import { useSession } from "next-auth/react"
import { DefaultUser } from "next-auth"
import { Parcela } from "@/redux/services/parcelApi"
export interface NewUser extends DefaultUser {
  isAdmin?: boolean
  isCompany?: boolean
  lastname?: string
  phone?: number
  date?: string
  password?: string
  wishes?: Parcela[]
  _id: string
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
