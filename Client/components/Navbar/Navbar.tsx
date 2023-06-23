"use client"
import Link from "next/link"
import Image from "next/image"
import logo from "../../img/logoIcon.png"
import Button from "../Button/Button"

import React, { useEffect, useState } from "react"

export default function Navbar() {
  const [navbarBackground, setNavbarBackground] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 20
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
      className={`flex fixed items-center justify-between p-[0.50rem] px-[3rem] z-[1] w-full ${
        navbarBackground ? "" : "bg-black opacity-50 ease-in-out duration-300"
      }`}
    >
      <div>
        <Image src={logo} alt="#" className="w-[6rem] " />
      </div>
      <ul className="flex justify-end gap-[2rem] items-center text-white">
        <li className=" px-[22px] py-[20px]">
          <Link
            href="/"
            className=" hover:text-[#51a8a1]  ease-in-out duration-300 "
          >
            Home
          </Link>
        </li>
        <li className="px-[22px] py-[20px]">
          <Link
            className="hover:text-[#51a8a1]  ease-in-out duration-300"
            href="/gallery"
          >
            Gallery
          </Link>
        </li>
        <li className="px-[22px] py-[20px]">
          <Link
            className="hover:text-[#51a8a1]  ease-in-out duration-300"
            href="/about"
          >
            About
          </Link>
        </li>
        <li className="px-[22px] py-[20px]">
          <Link
            className="hover:text-[#51a8a1]  ease-in-out duration-300"
            href="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="flex gap-2 ">
        <Button
          text="Sign
        
        in"
        />
      </div>
    </nav>
  )
}
