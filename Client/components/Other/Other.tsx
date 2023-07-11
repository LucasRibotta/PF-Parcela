import { MdFence } from "react-icons/md"
import { HiOutlineShieldCheck } from "react-icons/hi"
import { GiGardeningShears } from "react-icons/gi"
export default function Feature() {
  return (
    <div className=" px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6  text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          Nuestros servicios, de la{" "}
          <span className="text-[#51a8a1]">mejor calidad</span>
        </h2>
      </div>
      <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-[#b7fcf6] sm:mx-auto sm:w-24 sm:h-24">
            <MdFence className="w-12 h-12 text-deep-purple-accent-400 sm:w-[3.5rem] sm:h-[3.5rem] text-[#51a8a1]" />
          </div>
          <h6 className="mb-2 font-semibold leading-5">
            Motoniveladora y Cercado
          </h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            Brindamos soluciones profesionales de nivelación de terrenos y
            construcción de cercas, asegurando resultados precisos y duraderos.
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-[#51a8a1] hover:text-deep-purple-800"
          >
            Aprende más
          </a>
        </div>
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-[#b7fcf6] sm:mx-auto sm:w-24 sm:h-24">
            <HiOutlineShieldCheck className="w-12 h-12 text-deep-purple-accent-400 sm:w-[3.5rem] sm:h-[3.5rem] text-[#51a8a1]" />
          </div>
          <h6 className="mb-2 font-semibold leading-5">Legales</h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            Ofrecemos asesoramiento experto en notarías y registros de bienes
            raíces para garantizar transacciones seguras y cumplimiento legal.
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-[#51a8a1] hover:text-deep-purple-800"
          >
            Aprende más
          </a>
        </div>
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-[#b7fcf6] sm:mx-auto sm:w-24 sm:h-24">
            <GiGardeningShears className="w-12 h-12 text-deep-purple-accent-400 sm:w-[3.5rem] sm:h-[3.5rem] text-[#51a8a1]" />
          </div>
          <h6 className="mb-2 font-semibold leading-5">
            Jardinería y paisajismo
          </h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            Transformamos espacios exteriores, creando diseños personalizados y
            manteniendo áreas verdes hermosas y saludables.
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-[#51a8a1] hover:text-deep-purple-800"
          >
            Aprende más
          </a>
        </div>
      </div>
    </div>
  )
}
