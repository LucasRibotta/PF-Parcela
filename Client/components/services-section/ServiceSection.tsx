/* eslint-disable @next/next/no-img-element */
"use client"
// import Image from "next/image";
import Image from "next/image"
import { useEffect, useState } from "react"
import Other from "@/components/Other/Other"
import { PiPlantDuotone } from "react-icons/pi"
const ServiceSection = () => {
  const [image1, setImage1] = useState("")
  const [image2, setImage2] = useState("")
  const [image3, setImage3] = useState("")

  useEffect(() => {
    const fetchImage = async (fn: Function) => {
      try {
        let response = await fetch("http://picsum.photos/500/200")
        const imageUrl = response.url
        fn(imageUrl)
      } catch (error) {
        console.log("Error al obtener imagen", error)
      }
    }
    fetchImage(setImage1)
    fetchImage(setImage2)
    fetchImage(setImage3)
  }, [])

  return (
    <section className="flex flex-col items-center w-[300px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px] mx-auto ">
      <div className="flex items-center flex-col lg:flex-row gap-[4rem] px-4 animate-aparition mt-9">
        <div className="mt-16 w-[50%] h-[500px] ">
          <div className="max-w-[100%] h-[100%] bg-orange-200  rounded-3xl text-center overflow-hidden shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
            <iframe
              title="Imagen 360"
              width="100%"
              height="500px"
              src="https://momento360.com/e/u/412de8e5e53843419bca4bb7e11d8630?utm_campaign=embed&utm_source=other&heading=-13.2&pitch=0&field-of-view=81&size=medium&display-plan=true"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="mt-16 w-[40%] flex flex-col items-start space-y-4 p-4 text-justify">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div className="flex items-center justify-center w-10 my-2 h-10 rounded-full bg-[#b7fcf6] ">
              <PiPlantDuotone className="h-[2rem] w-[2rem] text-[#51a8a1]" />
            </div>
            <h2 className="max-w-lg  text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              Buscamos evidenciar{" "}
              <span className="text-[#51a8a1]">el mejor vivir</span>
            </h2>
          </div>
          <p>
            Somos una E-Commerce encargado de la ventas de parcelas. Tenemos más
            de 10 condominios en funcionamiento y disponibles para que
            encuentres el lugar que tanto estás buscando y revises todas las
            opciones perfectas que tenemos para ti, tus gustos y necesidades.
            Entregándote una paz, tranquilidad y sobre todo una mejor calidad de
            vida. Conoce todo sobre nuestra propuesta y la familia Parcelas de
            Chile.
          </p>
        </div>
      </div>

      <div className="mt-16 mb-16 px-4">
        {/* <h2 className="font-bold mb-5 text-center text-[2rem] ">Servicios</h2>

        <div className="flex p-4 rounded-lg transition-transform animate-aparition">
          <div className="flex flex-col mx-1 items-center [&>p]:text-justify [&>p]:m-4 [&>img]:rounded-xl border-2 border-teal-400 p-3 rounded-lg">
            <img
              src="https://i.pinimg.com/564x/de/de/20/dede20ff2553c7e8927ceefddc2c77ab.jpg"
              alt="motorgrader-fencing service"
              className="w-screen h-48 object-cover"
            />
            <h3 className="text-[1.5rem] font-bold mt-3">
              Motoniveladora y Cercado
            </h3>
            <p>
              Brindamos soluciones profesionales de nivelación de terrenos y
              construcción de cercas, asegurando resultados precisos y
              duraderos.
            </p>
          </div>

          <div className="flex flex-col mx-1 items-center [&>p]:text-justify [&>p]:m-4 [&>img]:rounded-xl border-2 border-teal-400 p-3 rounded-lg">
            <img
              src="https://i.pinimg.com/564x/08/e7/29/08e72918350dad7595c7495ea4411ebf.jpg"
              alt="legal service"
              className="w-screen h-48 object-cover"
            />
            <h3 className="text-[1.5rem] font-bold mt-3">Legales</h3>
            <p>
              Ofrecemos asesoramiento experto en notarías y registros de bienes
              raíces para garantizar transacciones seguras y cumplimiento legal.
            </p>
          </div>

          <div className="flex flex-col mx-1 items-center [&>p]:text-justify [&>p]:m-4 [&>img]:rounded-xl border-2 border-teal-400 p-3 rounded-lg">
            <img
              src="https://i.pinimg.com/564x/72/e0/bc/72e0bc52a1ee76e5ef07e75cc5775b10.jpg"
              alt="gardening-landscaping service"
              className="w-screen h-48 object-cover"
            />
            <h3 className="text-[1.5rem] font-bold mt-3">
              Jardinería y paisajismo
            </h3>
            <p>
              Transformamos espacios exteriores, creando diseños personalizados
              y manteniendo áreas verdes hermosas y saludables.
            </p>
          </div>
        </div> */}
        <Other />
      </div>
    </section>
  )
}

export default ServiceSection
