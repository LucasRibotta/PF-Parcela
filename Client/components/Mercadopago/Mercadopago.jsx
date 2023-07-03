import React from 'react';
import { initMercadoPago } from '@mercadopago/sdk-react'
initMercadoPago('TEST-6a20d2a1-f26b-4ee6-b988-b7fb8d44aeb8');


const initialization = {
    amount: 100,
    preferenceId: "<PREFERENCE_ID>",
   };
   const customization = {
    paymentMethods: {
      creditCard: "all",
      debitCard: "all",
      mercadoPago: "all",
    },
   };
   const onSubmit = async (
    { selectedPaymentMethod, formData }
   ) => {
    // callback llamado al hacer clic en el botón enviar datos
    return new Promise((resolve, reject) => {
      fetch("/process_payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((response) => {
          // recibir el resultado del pago
          resolve();
        })
        .catch((error) => {
          // manejar la respuesta de error al intentar crear el pago
          reject();
        });
    });
   };
   const onError = async (error) => {
    // callback llamado para todos los casos de error de Brick
    console.log(error);
   };
   const onReady = async () => {
    /*
      Callback llamado cuando el Brick está listo.
      Aquí puede ocultar cargamentos de su sitio, por ejemplo.
    */
   };
   
   