/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React, { useState } from "react";
import axios from "axios";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { useParams } from "next/navigation";
import { useGetParcelaByIdQuery } from "@/redux/services/parcelApi";
import Button from "@/components/Button/Button";
import { PiPlantDuotone } from "react-icons/pi";


const url = process.env.NEXT_PUBLIC_URL_MP ? process.env.NEXT_PUBLIC_URL_MP : ""



const pago = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  const params = useParams()
  const parcela = {
    id:
      params.id.toString()

  }
  const { data } = useGetParcelaByIdQuery(parcela);


  initMercadoPago('TEST-c42d3844-a294-4c79-a1b0-f286391dfabb') //ojo esta con public key de prueba vendedor

  const createPreference = async () => {
    try {
<<<<<<< HEAD
      const response = await axios.post("https://pf-parcela-production-2bf5.up.railway.app/create_preference", {
        description: data?.name, //ver como traer el producto
        price: data?.price, //ver como traer valor
        quantity: 1,
        /* currency_id: "CLP" */
      });
=======
      const response = await
        axios.post
          (url, {
            description: data?.name, //ver como traer el producto
            price: data?.price, //ver como traer valor
            quantity: 1,
            /* currency_id: "CLP" */
          });
>>>>>>> b1eccdf681d97df88658d49257ca0affc24c6d57

      const { id } =
        response.data
        ;
      return id;

    } catch (error) {
      console.error(error);
    }
  };
  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="w-1/3 bg-gray-100 p-10 rounded-lg shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
        <div className="flex justify-between">
          <h1 className="text-4xl">Detalles de su Compra</h1>
          <PiPlantDuotone className="h-[4rem] w-[4rem] text-[#51a8a1]" />
        </div>
        <br />
        <div className="text-lg">
          <p>{`Nombre: ${data?.name}`}</p>
          <hr />
          <p>{`Área: ${data?.area?.toLocaleString()}`} m<sup>2</sup></p>
          <hr />
          <p>{`Precio: CLP $ ${data?.price?.toLocaleString()}.-`}</p>
          <hr />
          <br />
          <div onClick={handleBuy} className="flex justify-center items-center">
            <Button text={"Comprar"} ></Button>
          </div>
          {preferenceId && <Wallet initialization={{ preferenceId }} />}
        </div>
      </div>
    </div>


  )
}
export default pago
