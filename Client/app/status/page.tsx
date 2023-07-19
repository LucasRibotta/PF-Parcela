"use client"
import axios from 'axios';

import { useEffect } from 'react';
import { PiPlantDuotone } from "react-icons/pi";
import "dotenv/config";
/* import { venta } from '../api/status/status'; */

export const Recibido = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/status', {
          params: {
            status: '',
            payment_id:'',
            external_reference: '',
            merchant_order_id: '',
          },
        });

        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="w-1/3 bg-gray-100 p-10 rounded-lg shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
        <div className="flex justify-between">
          <h1 className="text-4xl">Detalles de su Compra</h1>
          <PiPlantDuotone className="h-[4rem] w-[4rem] text-[#51a8a1]" />
        </div>
        <br />
        <div className="text-lg">
          <p>{`Status: ${status }`}</p>
          <hr />
          <p>{`ID de Pago de MercadoPago: ${payment_id}`}</p>
          <hr />
          <p>{`Referencia Externa: CLP $ ${external_reference}.-`}</p>
          <hr />
          <p>{`ID Orden de Pago: CLP $ ${merchant_order_id}.-`}</p>
          <br />
        </div>
      </div>
    </div>
  );
};


  // ejemplo de lo que devuelve
  // http://localhost:3000/status?collection_id=1316639083&collection_status=approved&payment_id=1316639083&status=approved&external_reference=null&payment_type=credit_card&merchant_order_id=10516119653&preference_id=1412742934-c4fb2583-9365-4483-8faa-749cf7ba47d5&site_id=MLC&processing_mode=aggregator&merchant_account_id=null

