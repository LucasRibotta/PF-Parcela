"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useAppSelector } from "@/redux/hooks"

interface PrivateRouteProps {
  children: React.ReactNode
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const router = useRouter()
  const userAdmin = useAppSelector((state) => state.user.isAdmin)

  useEffect(() => {
    if (!userAdmin) {
      router.push("/")
    }
  }, [userAdmin, router])

  return <>{children}</>
}

export default PrivateRoute
