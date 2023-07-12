"use client"

import Error from "@/app/error/page"
import { useAppSelector } from "@/redux/hooks"
export default function ErrorWrapper({
  children
}: {
  children: React.ReactNode
}) {
  const error = useAppSelector((state) => state.error.error)
  if (error) {
    return <Error />
  } else {
    return <>{children}</>
  }
}
