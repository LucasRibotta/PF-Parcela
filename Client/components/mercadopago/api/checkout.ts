import { CreatePreferencePayload } from "mercadopago/models/preferences/create-payload.model";
import { NextApiRequest, NextApiResponse } from "next";
import Product, { IProduct } from "../Mock/product";
import mercadopago from "mercadopago";

mercadopago.configure({
  access_token: process.env.NEXT_ACCESS_TOKEN!,
});

function convertPriceToNumber(product: IProduct): IProduct {
  const convertedPrice = typeof product.price === 'string' ? parseFloat(product.price) : product.price;
  return { ...product, price: convertedPrice };
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("entraste");
  if (req.method === "POST") {
    const product: IProduct = req.body.product; //ESTA ES LA LINEA DONDE VA EL PRODUCTO

    const info = convertPriceToNumber(product)

    const URL = "https://pf-parcela-front.vercel.app/"; //DESPUES CAMBIAR POR EL DE PRODUCCION / UTILIZAR NGROK

    try {
      if (typeof info.price === 'number' || typeof info.price === 'string') {

        const preference: CreatePreferencePayload = {
          items: [
            {
              title: info.name,
              unit_price: info.price ?? undefined,
              quantity: 1,
            },
          ],
          auto_return: "approved",
          back_urls: {
            success: `${URL}`,
            failure: `${URL}`,
          },
          notification_url: `${URL}/api/notify`,
        };

        const response = await mercadopago.preferences.create(preference);

        res.status(200).send({ url: response.body.init_point });
      }
    } catch (error) { }
  } else {
    res.status(400).json({ message: "Method not allowed" });
  }
};

export default handler;
