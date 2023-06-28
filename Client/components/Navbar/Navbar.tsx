"use client"
import Link from "next/link"
import Image from "next/image"
import logo from "../../img/logoIcon.png"
import Button from "../Button/Button"
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai"
import { BiSolidUserCircle } from "react-icons/bi"
import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import {
  setUserAdmin,
  setUserData,
  setUserLoggedIn,
  setUsersData
} from "@/redux/features/userSlice"
import { useAppSelector, useAppDispatch } from "@/redux/hooks"
import { useGetUsersQuery } from "@/redux/services/userApi"
import { useRouter } from "next/navigation"

export default function Navbar() {
  const [navbarBackground, setNavbarBackground] = useState(false)
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const [userAdmin, setUserAdmin] = useState(true)

  const router = useRouter()
  // const userLoggedIn = useAppSelector((state) => state.user.loggedIn)
  // const userAdmin = useAppSelector((state) => state.user.isAdmin)
  // const users = useAppSelector((state) => state.user.users)
  const dispatch = useAppDispatch()

  // const dispatch = useAppDispatch()
  // const { data, error, isLoading, isFetching } = useGetUsersQuery(null)
  // const otherUsersData = dispatch(setUsersData(data))
  // console.log(otherUsersData)

  const activeLink =
    "border-b-2  border-[#51a8a1] text-[#51a8a1] duration-200 cursor-pointer"
  const inactiveLink =
    "border-b-2  border-[#51a8a1] border-opacity-0 hover:border-opacity-100 hover:text-[#51a8a1] duration-200 cursor-pointer"
  const pathName = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 200
      if (isTop !== navbarBackground) {
        setNavbarBackground(isTop)
      }
    }

    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [navbarBackground])

  // const handleLogout = () => {
  //   dispatch(setUserAdmin(false))
  //   router.push("/")
  // }

  // useEffect(() => {
  //   if (pathName === "/admin" && !userAdmin) {
  //     // Redirect the user to another page or show an error message
  //     router.push("/")
  //   }
  // }, [pathName, userAdmin])

  // useEffect(() => {
  //   // Realizar consulta a la base de datos para verificar si el usuario es administrador
  //   const fetchUserData = async () => {
  //     try {
  //       // Aquí realizas tu consulta a la base de datos
  //       // Puedes usar la biblioteca de tu elección para realizar la consulta
  //       const response = await fetch("/api/user") // Ejemplo de endpoint para obtener los datos del usuario
  //       const userData = await response.json()

  //       // Verificar si el usuario es administrador
  //       if (userData.accesLevel === 2) {
  //         setUserAdmin(true)
  //       }
  //     } catch (error) {
  //       console.log("Error al obtener los datos del usuario:", error)
  //     }
  //   }

  //   if (userLoggedIn) {
  //     fetchUserData()
  //   }
  // }, [userLoggedIn])

  return (
    <nav
      className={`flex fixed  items-center justify-between p-[0.50rem] px-[3rem] z-[1] w-full shadow-md ${
        navbarBackground
          ? "bg-[#22222263]"
          : "bg-[#2222229c] ease-in-out duration-300"
      }`}
    >
      <div className="w-3/12">
        <Image src={logo} alt="#" className="w-[6rem] " />
      </div>
      <ul className="flex justify-end gap-[2rem] items-center text-white">
        <li className=" px-[22px] py-[20px]">
          <Link
            href="/"
            className={pathName === "/" ? activeLink : inactiveLink}
          >
            Inicio
          </Link>
        </li>
        <li className="px-[22px] py-[20px]">
          <Link
            className={pathName === "/gallery" ? activeLink : inactiveLink}
            href="/gallery"
          >
            Parcelas
          </Link>
        </li>
        <li className="px-[22px] py-[20px]">
          <Link
            className={pathName === "/about" ? activeLink : inactiveLink}
            href="/about"
          >
            Nosotros
          </Link>
        </li>
        <li className="px-[22px] py-[20px]">
          <Link
            className={pathName === "/contact" ? activeLink : inactiveLink}
            href="/contact"
          >
            Contacto
          </Link>
        </li>
        {userAdmin ? (
          <li className="px-[22px] py-[20px]">
            <Link
              className={pathName === "/admin" ? activeLink : inactiveLink}
              href="/admin"
            >
              Administrador
            </Link>
          </li>
        ) : null}
      </ul>

      {!userAdmin ? (
        <>
          {userLoggedIn ? (
            <div className="w-3/12 flex items-center justify-end gap-4">
              <AiOutlineSearch className="h-9 w-9 p-1 hover:text-[#51a8a1] duration-200 text-white" />
              <AiOutlineShoppingCart className="h-9 w-9 p-1 hover:text-[#51a8a1] duration-200 text-white" />
              <BiSolidUserCircle className="h-12 w-12 p-1 hover:text-[#51a8a1] duration-200 text-white" />
            </div>
          ) : (
            <div className="w-3/12 flex items-center justify-end">
              <Link href={"/login"}>
                <button className="text-white  font-semibold hover:text-[#51a8a1]  ease-in-out duration-300 px-4 py-[6px]">
                  Iniciar sesión
                </button>
              </Link>

              <div>
                <Link href={"/register"}>
                  <Button text="Inscribirse" />
                </Link>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="w-3/12 flex items-center justify-end gap-4">
          <div>
            <Button text={"cerrar sesión"} />
          </div>
          <BiSolidUserCircle className="h-12 w-12 p-1 hover:text-[#51a8a1] duration-200 text-white" />
        </div>
      )}
    </nav>
  )
}
