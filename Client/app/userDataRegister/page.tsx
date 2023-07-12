import { AiOutlineCalendar, AiOutlinePhone } from "react-icons/ai"
import { RiLockPasswordLine } from "react-icons/ri"
import Link from "next/link"

export default function Settings() {
  return (
    <div className="mt-[1rem]">
      <h3 className="text-xl font-bold leading-normal">Mi cuenta</h3>
      <div className="flex flex-col gap-4 mt-4 w-[60%]">
        <Link
          href="/userDataRegister/dateUpdate"
          className="bg-white flex items-center gap-2 w-full mb-6 shadow-xl rounded-lg p-4 hover:bg-[#51a8a1] duration-200 hover:text-white"
        >
          <AiOutlineCalendar className="h-6 w-6 stroke-current" />
          Cambiar fecha de nacimiento
        </Link>
        <Link
          href="/userDataRegister/phoneUpdate"
          className="bg-white flex items-center gap-2  w-full mb-6 shadow-xl rounded-lg p-4 hover:bg-[#51a8a1] duration-200 hover:text-white"
        >
          <AiOutlinePhone className="h-6 w-6 stroke-current" />
          Cambiar telefono
        </Link>
        <Link
          href="/userDataRegister/passwordUpdate"
          className="bg-white flex items-center gap-2  w-full mb-6 shadow-xl rounded-lg p-4 hover:bg-[#51a8a1] duration-200 hover:text-white"
        >
          <RiLockPasswordLine className="h-6 w-6 stroke-current" />
          Cambiar contraseña
        </Link>
      </div>
    </div>
  )
}
