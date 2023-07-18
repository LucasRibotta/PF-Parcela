import { NextApiRequest, NextApiResponse } from "next";
import mercadopago from "mercadopago";
import { useAppSession } from "@/app/hook"
import axios from "axios";
import Swal from "sweetalert2"
import { useRouter } from "next/navigation"
import { useUpdateParcelaMutation } from "@/redux/services/parcelApi"

mercadopago.configure({
  access_token: "TEST-1121991478303106-071123-211897e3813a959b6199cf6e2d046272-1412742934",
});

const status = async (req: NextApiRequest, res: NextApiResponse) => {

  const { user, session, status } = useAppSession();
  const router = useRouter();
  const [updateParcela] = useUpdateParcelaMutation()


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
        req.query.status; //Estado: aprobado, desaprobado
        req.query.payment_id; // ID de mercadopago en caso de Pagado
        req.query.external_reference; // lo que pago en $$
        req.query.merchant_order_id; // Identificador de la orden de pago

        //******** código base para implementar cualquier notificación en cualquier componente ***************
                  const datos = {
                    "email": user.email,
                    "asunto": 'transacción en Mercado Pago',
                    "cuerpo": `${user.lastname}, ${user.name}, su estado de pago es ${req.query.status}, el pago que fue realizado es de ${req.query.external_reference}, y el id de pago es: ${req.query.merchant_order_id}`
                  } 
                  const email = await axios.post('pf-parcela-production.up.railway.app/emailNotification', datos)
                  Swal.fire(
                    `¡Gracias por su compra ${user.name}!`,
                    "El pago se a realizado correctamente, a su email se ha mandado los datos de pago",
                  "success"
                )
      }else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Se ha producido un error en el pago!",
        })
      }
    }
  } catch (error) {
    res.send(error);
  }
//   const update = {
//     id: parcela.id,
//     data: info,
//   }//updateParcela(update)

  router.push("/")
};
export default status;