/* eslint-disable @next/next/no-img-element */
"use client"
import { PiShoppingCart } from "react-icons/pi"
import {
  AiOutlineHeart,
  AiOutlineSetting,
  AiOutlineCamera
} from "react-icons/ai"
import { BsPencil } from "react-icons/bs"
import { IoLogOutOutline } from "react-icons/io5"
import { useAppSession } from "@/app/hook"
import Link from "next/link"
import { GoHome } from "react-icons/go"
import { signOut } from "next-auth/react"
import { useAppDispatch } from "@/redux/hooks"
import { setUserData } from "@/redux/features/userSlice"
import { FormEvent } from "react"
import { BiSolidUserCircle } from "react-icons/bi"
import { useGetUsersQuery } from "@/redux/services/userApi"

export default function UserSettings() {
  const dispatch = useAppDispatch()
  const { data: dataUser } = useGetUsersQuery({name:""});
  const { user: info } = useAppSession()
  const user = dataUser?.find(el => el.email === info.email)
  console.log(user)
  const handleLogout = async () => {
    const closeSession = await signOut()
    if (closeSession) {
      dispatch(setUserData(null))
    }
  }

  const submitHandler = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  return (
    <section>
      <div className="w-full px-4 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4 flex relative justify-center">
                {user?.image ? (
                  <img
                    src={user?.image ?? "default-image-url"}
                    alt="not found"
                    className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 w-[20px]"
                  />
                ) : (
                  <BiSolidUserCircle className="shadow-xl rounded-full h-auto bg-transparent text-[#939393] w-[40%] align-middle border-none absolute -m-16 -ml-20 lg:-ml-16" />
                )}
                <button className="absolute top-2 right-[36%]">
                  <AiOutlineCamera className="h-7 w-7 stroke-current text-black bg-[#dbdade] rounded-full p-1" />
                </button>
              </div>
            </div>
            <div className="text-center mt-12">
              <h3 className="text-xl font-semibold leading-normal mb-2 flex justify-center items-center gap-2">
                {user?.name}
                <button>
                  <BsPencil className="h-4 w-4 stroke-current" />
                </button>
              </h3>
              <div className="text-sm leading-normal  mt-0 mb-2  ">
                {user?.email}
              </div>
            </div>
            <div className="mt-8 py-4 border-t text-center">
              <div className="w-full px-2">
                <Link href="/">
                  <div className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-[#51a8a1] hover:text-white ">
                    <GoHome className="h-6 w-6 stroke-current" />
                    <span className="ml-2 text-sm font-medium">Inicio</span>
                  </div>
                </Link>
                <Link href="/userDataRegister/purchases">
                  <div className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-[#51a8a1] hover:text-white">
                    <PiShoppingCart className="h-6 w-6 stroke-current" />
                    <span className="ml-2 text-sm font-medium">Compras</span>
                  </div>
                </Link>
                <Link href="/userDataRegister/wishes">
                  <div className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-[#51a8a1] hover:text-white">
                    <AiOutlineHeart className="h-6 w-6 stroke-current" />
                    <span className="ml-2 text-sm font-medium">Deseos</span>
                  </div>
                </Link>
                <Link href="/userDataRegister">
                  <div className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-[#51a8a1] hover:text-white">
                    <AiOutlineSetting className="h-6 w-6 stroke-current" />
                    <span className="ml-2 text-sm font-medium">Ajustes</span>
                  </div>
                </Link>
                <button
                  className="relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-[#51a8a1] hover:text-white"
                  onClick={handleLogout}
                >
                  <IoLogOutOutline className="h-6 w-6 stroke-current" />
                  <span className="ml-2 text-sm font-medium">
                    Cerrar sesion
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
