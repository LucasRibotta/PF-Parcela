"use client"
import UserSettings from "@/components/UserSettings/UserSettings"
import { useAppSession } from "../hook"
import { useAppDispatch } from "@/redux/hooks"
import { setError } from "@/redux/features/errorSlice"

const UserDataRegister = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch()
  const { status } = useAppSession()
  if (status === "unauthenticated") {
    dispatch(setError(true))
  }
  return (
    <div className="flex pt-[7rem]">
      <UserSettings />
      <section className="w-full lg:w-8/12 px-4 mx-auto">{children}</section>
    </div>
  )
}

export default UserDataRegister
