"use client"
import Image from "next/image"
import logo from "../../img/forestImage.jpg"
import Link from "next/link"
import { BiLogoFacebook, BiLogoGmail } from "react-icons/bi"
import { useEffect, useState } from "react"
import { useAppSelector, useAppDispatch } from "@/redux/hooks"
import { setUserAdmin } from "@/redux/features/userSlice"
import { useRouter } from "next/navigation"
import Swal from "sweetalert2"
import axios from "axios"

type CustomEvent = {
  target: HTMLInputElement
}

export default function Login() {
  const router = useRouter()
  const [error, setError] = useState("")
  const [input, setInput] = useState({
    email: "",
    password: ""
  })
  const adminLoggedIn = useAppSelector((state) => state.user.isAdmin)
  const dispatch = useAppDispatch()

  const handleInputChange = (event: CustomEvent) => {
    const { name, value } = event.target
    if (name === "name") {
      setInput({
        ...input,
        email: value
      })
    }
    if (name === "password") {
      setInput({
        ...input,
        password: value
      })
    }
  }

  const handleUser = async () => {
    try {
      const response = await axios.post("http://localhost:3001/login", input)

      const data = response.data

      if (data) {
        console.log(data)
      }
    } catch (error) {
      console.log(error.response.data)
      setError("Ocurrió un error al iniciar sesión")
    }
  }

  const handleLogin = () => {
    // Aquí puedes realizar la validación del usuario en tu backend
    // por ejemplo, utilizando una llamada a la API

    // Simulación de verificación de usuario
    if (input.email === "admin" && input.password === "admin123") {
      // Usuario válido, realizar acción de inicio de sesión exitosa
      dispatch(setUserAdmin(true))
      Swal.fire(`¡Bienvenido!`, "Has iniciado sesion", "success")
      router.push("/admin")
    } else {
      // Usuario no válido, mostrar mensaje de error
      setError("Usuario o contraseña incorrectos")
    }
  }

  useEffect(() => {
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Parece que algo salio mal!",
        footer: '<a href="">Tienes una cuenta registrada?</a>'
      })
    }
  }, [error])

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex w-[768px] h-[496px] mt-[5rem] ">
        <div className="w-1/2 bg-gray-100 p-10 flex flex-col justify-center items-center rounded-l-xl shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
          <h2 className="text-3xl font-black mb-6 ">Iniciar sesión</h2>
          <div className="flex pb-4">
            <div className="border-[1px] text[#ddd] rounded-[50%] inline-flex justify-center items-center mx-[5px] h-[40px] w-[40px]">
              <BiLogoGmail className="h-4 w-4 text-[#51a8a1]" />
            </div>
          </div>
          <div className="mb-4">
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#51a8a1]"
              id="email"
              name="name"
              value={input.email}
              type="email"
              placeholder="Email"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#51a8a1]"
              id="password"
              type="password"
              name="password"
              value={input.password}
              onChange={handleInputChange}
              placeholder="Password"
            />
          </div>
          <div className="space-y-4 flex flex-col justify-center items-center">
            <div className="mt-4 text-[#333] leading-[20px] tracking-[0.5px] text-[14px]">
              Olvidate tu constraseña?
            </div>
            <button
              className="bg-[#51a8a1] hover:bg-[#126e67] ease-in-out min-w-[9rem] max-w-[9rem] duration-300 text-white font-bold py-2 px-4 rounded-[20px]  focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleUser}
            >
              Iniciar sesión
            </button>

            <div>
              <Link href={"/register"}>
                <button
                  className="bg-[#51a8a1] hover:bg-[#126e67] min-w-[9rem] max-w-[9rem]  ease-in-out duration-300 text-white font-bold py-2 px-4 rounded-[20px]  focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Registrarse
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-1/2 relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-[90%]">
            <h1 className="text-3xl font-black">¡Bienvenido!</h1>
            <p className="leading-[20px] tracking-[0.5px] text-[14px] my-[20px]">
              Para mantenerse conectado con nosotros, inicie sesión con su
              información personal
            </p>
          </div>
          <Image
            src={logo}
            alt="Imagen"
            className="h-full w-full object-cover rounded-r-xl shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
          />
        </div>
      </div>
    </div>
  )
}
