import Link from "next/link"
import Image from "next/image"
import logo from "../../img/logoIcon.png"
import Button from "../Button/Button"

export default function Navbar() {
  return (
    <nav className="flex fixed items-center justify-between p-[0.50rem] px-[3rem] z-[1] w-full ">
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
        <Button text="Sing in" />
      </div>
    </nav>
  )
}
