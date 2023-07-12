/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React, { useState } from "react";
import axios from "axios";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { useParams } from "next/navigation";
import { useGetParcelaByIdQuery } from "@/redux/services/parcelApi";
import Button from "@/components/Button/Button";




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
      const response = await axios.post("https://pf-parcela-production-2bf5.up.railway.app/create_preference", {
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
    <div className="pt-[100px] ps-[20px]">
      <h1>Detalle de su Compra</h1>
      <br/>
      <p>{`Nombre: ${data?.name}`}</p><hr/>
      <p>{`Área: ${data?.area?.toLocaleString()}`} m<sup>2</sup></p><hr/>
      <p>{`Precio: CLP $ ${data?.price?.toLocaleString()}.-`}</p><hr/>
      <br/>
      <div onClick={handleBuy}>
      <Button text={"Comprar"} ></Button>
      </div>
      {preferenceId && <Wallet initialization={{ preferenceId }} />}
    </div>


  )
}
export default pago