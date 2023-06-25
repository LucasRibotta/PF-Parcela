import Image from "next/image"
import logo from "../../img/homePicture.jpg"
import Link from "next/link"

export default function Register() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex w-[768px] h-[496px] mt-[5rem] ">
        <div className="w-1/2 relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-[90%] z-10">
            <h1 className="text-3xl font-black">Bienvenido!</h1>
            <p className="leading-[20px] tracking-[0.5px] text-[14px] my-[20px]">
              Ingresa tus datos personales y comienza tu viaje con nosotros
            </p>
          </div>
          <Image
            src={logo}
            alt="Imagen"
            className="h-full w-full object-cover rounded-l-xl shadow-[0_35px_35px_rgba(0,0,0,0.25)] brightness-75"
          />
        </div>
        <div className="w-1/2 bg-gray-100 p-8 flex flex-col justify-center items-center rounded-r-xl shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
          <h2 className="text-3xl font-black mb-6 ">Crea tu cuenta</h2>
          <div className="gap-2 flex">
            <div>
              <div>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#51a8a1]"
                  id="name"
                  type="name"
                  placeholder="Name"
                />
              </div>
              <div className="mt-4">
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#51a8a1]"
                  id="lastname"
                  type="lastname"
                  placeholder="Lastname"
                />
              </div>
              <div className="mt-4">
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#51a8a1]"
                  id="phone"
                  type="phone"
                  placeholder="Phone"
                />
              </div>
            </div>
            <div>
              <div>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#51a8a1]"
                  id="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="mt-4">
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#51a8a1]"
                  id="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="mt-4">
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#51a8a1]"
                  id="password"
                  type="password"
                  placeholder="Repeat Password"
                />
              </div>
            </div>
          </div>
          <div className="my-4">
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#51a8a1]"
              id="date"
              type="date"
            />
          </div>
          <div className="space-y-4">
            <button
              className="bg-[#51a8a1]  hover:bg-[#126e67] ease-in-out min-w-[9rem] max-w-[9rem] duration-300 text-white font-bold py-2 px-4 rounded-[20px]  focus:outline-none focus:shadow-outline"
              type="button"
            >
              Registrarse
            </button>

            <div className="mt-4 text-[#333] leading-[20px] tracking-[0.5px] text-[14px]">
              Ya posees una cuenta?
            </div>

            <div>
              <Link href={"/login"}>
                <button
                  className="bg-[#51a8a1] hover:bg-[#126e67] min-w-[9rem] max-w-[9rem]  ease-in-out duration-300 text-white font-bold py-2 px-4 rounded-[20px]  focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Iniciar sesión
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
