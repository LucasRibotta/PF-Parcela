/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React, { useState } from "react"
import axios from "axios"
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react"
import { useParams } from "next/navigation"
import { useGetParcelaByIdQuery } from "@/redux/services/parcelApi"
import Button from "@/components/Button/Button"
import { PiPlantDuotone } from "react-icons/pi"

const url = process.env.NEXT_PUBLIC_URL_MP ? process.env.NEXT_PUBLIC_URL_MP : ""

const pago = () => {
  const [preferenceId, setPreferenceId] = useState(null)
  const params = useParams()
  const parcela = {
    id: params.id.toString()
  }
  const { data } = useGetParcelaByIdQuery(parcela)
  const image = data?.image[0]

  initMercadoPago("TEST-c42d3844-a294-4c79-a1b0-f286391dfabb") //ojo esta con public key de prueba vendedor

  const createPreference = async () => {
    try {
      const response = await axios.post(url, {
        description: data?.name, //ver como traer el producto
        price: data?.price, //ver como traer valor
        quantity: 1
        /* currency_id: "CLP" */
      })

      const { id } = response.data
      return id
    } catch (error) {
      console.error(error)
    }
  }
  const handleBuy = async () => {
    const id = await createPreference()
    if (id) {
      setPreferenceId(id)
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative flex justify-center w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100  shadow-lg">
        <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
          <img className="object-cover w-full" src={image} />
        </div>
        <div className="mt-4 px-4 pb-5">
          <div className="flex items-center justify-between pb-2">
            <div>
              <h5 className="text-xl tracking-tight text-slate-900">
                {data?.name}
              </h5>
            </div>

            <div className="flex items-center">
              <span className="mr-2 ml-3 rounded bg-green-200 px-2.5 py-0.5 text-xs font-semibold">
                {data?.area?.toLocaleString()}m<sup>2</sup>
              </span>
            </div>
          </div>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-3xl font-bold text-slate-900">{`CLP $${data?.price?.toLocaleString()}`}</span>
            </p>
          </div>
          <button
            className="flex w-full items-center justify-center rounded-md bg-green-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-400 duration-200"
            onClick={handleBuy}
          >
            Comprar
          </button>
          {preferenceId && <Wallet initialization={{ preferenceId }} />}
        </div>
      </div>
    </div>

    // <div className="flex justify-center items-center h-screen">
    //   <div className="w-1/3 bg-gray-100 p-10 rounded-lg shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
    //     <div className="flex justify-between">
    //       <h1 className="text-4xl">Detalles de su Compra</h1>
    //       <PiPlantDuotone className="h-[4rem] w-[4rem] text-[#51a8a1]" />
    //     </div>
    //     <br />
    //     <div className="text-lg">
    //       <p>{`Nombre: ${data?.name}`}</p>
    //       <hr />
    //       <p>
    //         {`Área: ${data?.area?.toLocaleString()}`} m<sup>2</sup>
    //       </p>
    //       <hr />
    //       <p>{`Precio: CLP $ ${data?.price?.toLocaleString()}.-`}</p>
    //       <hr />
    //       <br />
    //       <div onClick={handleBuy} className="flex justify-center items-center">
    //         <Button text={"Comprar"}></Button>
    //       </div>
    //       {preferenceId && <Wallet initialization={{ preferenceId }} />}
    //     </div>
    //   </div>
    // </div>
  )
}
export default pago
