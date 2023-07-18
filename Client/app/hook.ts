"use client"
import { useSession } from "next-auth/react"
import { DefaultUser } from "next-auth"
import { useEffect } from 'react';
export interface NewUser extends DefaultUser {
  isAdmin?: boolean
  isCompany?: boolean
  lastname?: string
  phone?: number
  date?: string
  password?: string
}
const useAppSession = () => {
  useEffect(() => {
    // Verificar si estamos en el lado del cliente
    if (typeof window !== 'undefined') {
      // Acceder a los contextos de React aquí
    }
  }, []);
  const { data: session, status } = useSession()
  const user = session?.user as NewUser
  return {
    user,
    session,
    status
  }
}

export { useAppSession }
