/* eslint-disable @next/next/no-img-element */
"use client"
import Link from "next/link"
import Button from "../Button/Button"
import style from "./detail.module.css"
import Paisaje from "../../img/svgs/Paisaje"
import Pago from "@/img/svgs/Pago"
import Camino from "@/img/svgs/Camino"
import Vegetation from "@/img/svgs/Vegetacion"
import Connection from "@/img/svgs/Connection"
import Energy from "@/img/svgs/Energy"
import LocationMaps from "../Maps/Maps"
import { useParams } from "next/navigation"
import { useGetParcelaByIdQuery } from "@/redux/services/parcelApi"


const DetailSection = () => {
  const params = useParams();
  const parcela = {
    id: params.id,
  }
  const { data, error, isLoading, isFetching } = useGetParcelaByIdQuery(parcela);
  if (isLoading || isFetching) return <p>Loading</p>
  if (error) return <p>Some error</p>



  return (


    <>
      <img
        src={data?.image[0] }
        alt="parcela"
        className="absolute object-cover top-0 left-0 w-full h-screen  -z-10 animate-aparition "
      />
      <div className=" rounded-3xl border-solid border-spacing-0 w-[100%] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px] m-auto  relative overflow-hidden bg-white bg-opacity-30 border-transparent">
        <div className="flex flex-col justify-center m-auto w-full h-screen relative">
          <h1 className={`absolute left-[6%] bottom-[50%] lg:bottom-[6%] text-lg md:text-3xl font-semibold text-white text-[25px] ${style.shadowText}`}>
            {data?.name}
          </h1>

          <div className="absolute bottom-0 sm:right-[50%] sm:translate-x-[50%] translate-y-[50%] lg:right-[6%] lg:translate-x-0 p-4 w-[100%] sm:w-[100%] lg:w-[45%] bg-[#f8f8f8] lg:p-8 mt-3 rounded-2xl text-black ">
            <h3 className="font-bold my-10">Lote No. {data?.lote}</h3>
            <span className="my-10 font-bold"></span>  {/* dato posible */}
            <p className="my-10 text-justify">
              {data?.description}
            </p>
            <div className="grid grid-cols-2 mx-auto justify-center my-10">
              <div className="text-center p-5 flex items-center justify-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="h-[30px] w-[30px] mr-3 "
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"
                  />
                </svg>
                <h3>{data?.area?.toLocaleString()} m<sup>2</sup></h3>
              </div>
              {/* <div className="text-center p-5 flex items-center justify-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="h-[30px] w-[30px] mr-3 "
                  viewBox="0 0 16 16"
                >
                  <path d="M0 0h.969v.5H1v.469H.969V1H.5V.969H0V0zm2.844 1h-.938V0h.938v1zm1.875 0H3.78V0h.938v1zm1.875 0h-.938V0h.938v1zm.937 0V.969H7.5V.5h.031V0h.938v.5H8.5v.469h-.031V1H7.53zm2.813 0h-.938V0h.938v1zm1.875 0h-.938V0h.938v1zm1.875 0h-.938V0h.938v1zM15.5 1h-.469V.969H15V.5h.031V0H16v.969h-.5V1zM1 1.906v.938H0v-.938h1zm6.5.938v-.938h1v.938h-1zm7.5 0v-.938h1v.938h-1zM1 3.78v.938H0V3.78h1zm6.5.938V3.78h1v.938h-1zm7.5 0V3.78h1v.938h-1zM1 5.656v.938H0v-.938h1zm6.5.938v-.938h1v.938h-1zm7.5 0v-.938h1v.938h-1zM.969 8.5H.5v-.031H0V7.53h.5V7.5h.469v.031H1v.938H.969V8.5zm1.875 0h-.938v-1h.938v1zm1.875 0H3.78v-1h.938v1zm1.875 0h-.938v-1h.938v1zm1.875-.031V8.5H7.53v-.031H7.5V7.53h.031V7.5h.938v.031H8.5v.938h-.031zm1.875.031h-.938v-1h.938v1zm1.875 0h-.938v-1h.938v1zm1.875 0h-.938v-1h.938v1zm1.406 0h-.469v-.031H15V7.53h.031V7.5h.469v.031h.5v.938h-.5V8.5zM0 10.344v-.938h1v.938H0zm7.5 0v-.938h1v.938h-1zm8.5-.938v.938h-1v-.938h1zM0 12.22v-.938h1v.938H0zm7.5 0v-.938h1v.938h-1zm8.5-.938v.938h-1v-.938h1zM0 14.094v-.938h1v.938H0zm7.5 0v-.938h1v.938h-1zm8.5-.938v.938h-1v-.938h1zM.969 16H0v-.969h.5V15h.469v.031H1v.469H.969v.5zm1.875 0h-.938v-1h.938v1zm1.875 0H3.78v-1h.938v1zm1.875 0h-.938v-1h.938v1zm.937 0v-.5H7.5v-.469h.031V15h.938v.031H8.5v.469h-.031v.5H7.53zm2.813 0h-.938v-1h.938v1zm1.875 0h-.938v-1h.938v1zm1.875 0h-.938v-1h.938v1zm.937 0v-.5H15v-.469h.031V15h.469v.031h.5V16h-.969z" />
                </svg>
                <h3>39 parcelas</h3>
              </div> */}
              <div className="text-center p-5 flex items-center justify-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="h-[30px] w-[30px] mr-3 "
                  viewBox="0 0 16 16"
                >
                  <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                </svg>
                <h3>${data?.price?.toLocaleString()} CLP</h3>
              </div>
              <div className="text-center p-5 flex items-center justify-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="h-[30px] w-[30px] mr-3 "
                  viewBox="0 0 16 16"
                >
                  <path d="M11.473 11a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z" />
                  <path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708l.707-.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708l-.708-.707zm1.734 3.374a2 2 0 1 1 3.296 2.198c.199.281.372.582.516.898a3 3 0 1 0-4.84-3.225c.352.011.696.055 1.028.129zm4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377zM14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
                </svg>
                <h3>19°</h3>
              </div>
            </div>
          </div>
        </div>



        <div className="w-[100%] sm:w-[100%] lg:w-[45%] p-8  rounded-br-2xl text-white mb-20 mt-[350px] lg:mt-0">
          <h3 className="font-bold text-black mb-8">Caracteristicas:</h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 [&>div]:w-[98%] text-gray-950 ">

            <div className="m-1 p-[20px] grid grid-cols-1  bg-[#fff4dd] text-[#ffb41c] rounded-2xl ">
              <div className="flex items-center mb-4">
                <Paisaje />
                <h2 className="pl-2 font-bold">Proyecto Diverso</h2>
              </div>
              <p className="text-justify font-medium">Perfecto para invertir, segunda vivienda o residencia principal.</p>
            </div>
            <div className="m-1 p-[20px] grid grid-cols-1  bg-[#ffe7dc] text-[#ff5f10] rounded-2xl ">
              <div className="flex items-center mb-4">
                <Pago />
                <h2 className=" pl-2 font-bold">Facilidades de Pago</h2>
              </div>
              <p className="text-justify font-medium">Credito directo, pago en cuotas y descuentos en efectivo.</p>
            </div>

            <div className="m-1 p-[20px] grid grid-cols-1  bg-[#d9f3ec] text-[#00b39c] rounded-2xl ">
              <div className="flex items-center mb-4">
                <Camino />
                <h2 className=" pl-2 font-bold">Acceso Optimo</h2>
              </div>
              <p className="text-justify font-medium">Camino de acceso apto para cualquier vehiculo.</p>
            </div>
            <div className="m-1 p-[20px] grid grid-cols-1  bg-[#fed3d3] text-[#fb5252] rounded-2xl ">
              <div className="flex items-center mb-4">
                <Vegetation />
                <h2 className=" pl-2 font-bold">Superficie y Vegetación Mixta</h2>
              </div>
              <p className="text-justify font-medium">Planicies, pendientes, estero, arboles frutales y vegetación variada.</p>
            </div>

            <div className="m-1 p-[20px] grid grid-cols-1  bg-[#d9f7f7] text-[#1fcfcd] rounded-2xl ">
              <div className="flex items-center mb-4 ">
                <Connection />
                <h2 className=" mb-2 pl-2 font-bold">Conectividad digital</h2>
              </div>
              <p className="text-justify font-medium">Excelente señal telefonica y conectividad 4G en el sector.</p>
            </div>
            <div className="m-1 p-[20px] grid grid-cols-1  bg-[#dbe4f8] text-[#00143f] rounded-2xl ">
              <div className="flex items-center mb-4">
                <Energy />
                <h2 className=" pl-2 font-bold">Factibilidad de Energía Eléctrica.</h2>
              </div>
              <p className="text-justify font-medium">Tendido eléctrico de fácil desarrollo comunitario.</p>
            </div>



          </div>
        </div>

        <div className="w-[90%] sm:w-[80%] lg:w-[100%] mx-auto mt-[30px] mb-16 ">
          <h2 className={`mb-10 text-2xl text-black ${style.shadowText}`}>
            Galeria
          </h2>
          <div className="w-full rounded-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {
              data?.image.map((el, index) => <img key={index} src={el} alt={el} className="w-[95%] bg-slate-300 h-[400px] m-2 box-border object-cover rounded-3xl " />)
            }
          </div>
        </div>

        <div className="w-[100%] h-[500px] rounded-3xl overflow-hidden m-5 mx-auto bg-gray-600 mb-28">
          <LocationMaps location={data?.location ?? ""} />
        </div>

        <div className="">
          seccion de movilidad
        </div>

        {/* <Button text={"Agregar a carro"}></Button> */}
        <div className="fixed flex justify-end bottom-6 w-[300px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px]">
          <Link href={`/form/${parcela.id}`}>
            <Button text={"Editar"}></Button>
          </Link>
          <Link href={`/form/${parcela.id}`}>
            <Button text={"Eliminar"}></Button>
          </Link>
          <Link href="/" className="mr-8 shadow-lg">
            <Button text={"Comprar Ahora"}></Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default DetailSection
