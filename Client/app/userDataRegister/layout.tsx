"use client"
import { useAppSession } from "../hook"
import { GoHome } from "react-icons/go"
import { PiShoppingCart } from "react-icons/pi"
import {
  AiOutlineHeart,
  AiOutlineSetting,
  AiOutlineCloseCircle,
  AiOutlineCamera
} from "react-icons/ai"
import { BsPencil } from "react-icons/bs"
import Link from "next/link"

const UserDataRegister = ({
  children // will be a page or nested layout
}: {
  children: React.ReactNode
}) => {
  const { user, status } = useAppSession()
  if (status === "authenticated") {
    console.log("userData", "componente de usuario registrado")
  }

  return (
    <div className="flex pt-[7rem]">
      <section>
        <div className="w-full px-4 mx-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full px-4 flex relative justify-center">
                  <img
                    src={user?.image ?? "default-image-url"}
                    alt="not found"
                    className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                  />
                  <button className="absolute top-2 right-[36%]">
                    <AiOutlineCamera className="h-7 w-7 stroke-current text-black bg-[#dbdade] rounded-full p-1" />
                  </button>
                </div>
              </div>
              <div className="text-center mt-12">
                <h3 className="text-xl font-semibold leading-normal mb-2 flex justify-center items-center gap-2">
                  {user.name}
                  <button>
                    <BsPencil className="h-4 w-4 stroke-current" />
                  </button>
                </h3>
                <div className="text-sm leading-normal  mt-0 mb-2  ">
                  {user.email}
                </div>
              </div>
              <div className="mt-8 py-4 border-t text-center">
                <div className="w-full px-2">
                  <div className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-[#51a8a1] hover:text-white">
                    <GoHome className="h-6 w-6 stroke-current" />
                    <span className="ml-2 text-sm font-medium">Inicio</span>
                  </div>
                  <Link href="userDataRegister/purchases">
                    <div className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-[#51a8a1] hover:text-white">
                      <PiShoppingCart className="h-6 w-6 stroke-current" />
                      <span className="ml-2 text-sm font-medium">Compras</span>
                    </div>
                  </Link>
                  <Link href="userDataRegister/wishes">
                    <div className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-[#51a8a1] hover:text-white">
                      <AiOutlineHeart className="h-6 w-6 stroke-current" />
                      <span className="ml-2 text-sm font-medium">Deseos</span>
                    </div>
                  </Link>
                  <a
                    className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-[#51a8a1] hover:text-white"
                    href="#"
                  >
                    <AiOutlineSetting className="h-6 w-6 stroke-current" />
                    <span className="ml-2 text-sm font-medium">Ajustes</span>
                  </a>
                  <a
                    className="relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-[#51a8a1] hover:text-white"
                    href="#"
                  >
                    <AiOutlineCloseCircle className="h-6 w-6 stroke-current" />
                    <span className="ml-2 text-sm font-medium">
                      Cerrar sesion
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full lg:w-8/12 px-4 mx-auto"> {children}</section>
    </div>
  )
}

export default UserDataRegister
