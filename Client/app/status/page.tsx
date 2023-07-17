import { NextApiRequest, NextApiResponse } from "next";
import mercadopago from "mercadopago";

mercadopago.configure({
  access_token: "TEST-1121991478303106-071123-211897e3813a959b6199cf6e2d046272-1412742934",
});

const status = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req;

  const topic = query.topic || query.type;

  console.log({ query, topic });
  try {
    if (topic === "payment") {
      const paymentId = query.id || query["data.id"];
      let payment = await mercadopago.payment.findById(Number(paymentId));
      let paymentStatus = payment.body.status;

      console.log([payment, paymentStatus]);
      if (paymentStatus === "approved"){
        req.query.status; //Estado: aprovado, desaprobado
        req.query.payment_id; // ID de mercadopago en caso de Pagado
        req.query.external_reference; // lo que pago en $$
        req.query.merchant_order_id; // Identificador de la orden de pago
      }
    }
  } catch (error) {
    res.send(error);
  }
};

export default status;