"use client"
import React, { useState } from "react";
import axios from "axios";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
/* import Sell from '../mercadopago/index'; */



const Pago = () => {
  const [preferenceId, setPreferenceId] = useState(null);


  initMercadoPago('TEST-c42d3844-a294-4c79-a1b0-f286391dfabb') //ojo esta con public key de prueba vendedor

  const createPreference = async () => {
    try {
      const response = await axios.post("http://localhost:3001/create_preference", {
        description: "Parcelita", //ver como traer el producto
        price: 1100, //ver como traer valor
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
      {/* <Sell /> */}
      <button onClick={handleBuy}>Comprar</button>
      {preferenceId && <Wallet initialization={{ preferenceId }} />}
    </div>


  )
}
