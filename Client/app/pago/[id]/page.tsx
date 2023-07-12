"use client"
import React, { useState } from "react";
import axios from "axios";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { useParams } from "next/navigation";
import { useGetParcelaByIdQuery } from "@/redux/services/parcelApi";
/* import Sell from '../mercadopago/index'; */



const pago = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  const params = useParams()
  const parcela={
    id: params.id
  }
  const { data} = useGetParcelaByIdQuery(parcela);


  initMercadoPago('TEST-c42d3844-a294-4c79-a1b0-f286391dfabb') //ojo esta con public key de prueba vendedor

  const createPreference = async () => {
    try {
      const response = await axios.post("http://localhost:3001/create_preference", {
        description: data?.name, //ver como traer el producto
        price: data?.price, //ver como traer valor
        quantity: 1,
        /* currency_id: "CLP" */
      });

      const { id } = response.data;
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
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />


      <h1>Hola Luquitas</h1>
      <p>{`Nombre del Producto: ${data?.name}`}</p><hr/>
      <p>{`Precio: ${data?.price}`}</p><hr/>
      
      <button onClick={handleBuy}>Comprar</button>
      {preferenceId && <Wallet initialization={{ preferenceId }} />}
    </div>


  )
}
export default pago