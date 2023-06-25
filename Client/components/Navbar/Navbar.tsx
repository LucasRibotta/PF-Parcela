"use client"
import Link from "next/link"
import Image from "next/image"
import logo from "../../img/logoIcon.png"
import Button from "../Button/Button"
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai"
import { BiSolidUserCircle } from "react-icons/bi"

import React, { useEffect, useState } from "react"

export default function Navbar() {
  const [navbarBackground, setNavbarBackground] = useState(false)
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const [userAdmin, setUserAdmin] = useState(false)

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
            className="border-b-2  border-[#51a8a1] border-opacity-0 hover:border-opacity-100 hover:text-[#51a8a1] duration-200 cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li className="px-[22px] py-[20px]">
          <Link
            className="border-b-2  border-[#51a8a1] border-opacity-0 hover:border-opacity-100 hover:text-[#51a8a1] duration-200 cursor-pointer"
            href="/gallery"
          >
            Gallery
          </Link>
        </li>
        <li className="px-[22px] py-[20px]">
          <Link
            className="border-b-2  border-[#51a8a1] border-opacity-0 hover:border-opacity-100 hover:text-[#51a8a1] duration-200 cursor-pointer"
            href="/about"
          >
            About
          </Link>
        </li>
        <li className="px-[22px] py-[20px]">
          <Link
            className="border-b-2  border-[#51a8a1] border-opacity-0 hover:border-opacity-100 hover:text-[#51a8a1] duration-200 cursor-pointer"
            href="/contact"
          >
            Contact
          </Link>
        </li>
        {userAdmin ? (
          <li className="px-[22px] py-[20px]">
            <Link
              className="border-b-2  border-[#51a8a1] border-opacity-0 hover:border-opacity-100 hover:text-[#51a8a1] duration-200 cursor-pointer"
              href="/admin"
            >
              Admin
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
                  Sign in
                </button>
              </Link>

              <div>
                <Link href={"/register"}>
                  <Button text="Sign up" />
                </Link>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="w-3/12 flex items-center justify-end gap-4">
          <BiSolidUserCircle className="h-12 w-12 p-1 hover:text-[#51a8a1] duration-200 text-white" />
        </div>
      )}
    </nav>
  )
}
