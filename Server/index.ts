import "dotenv/config"
import express from "express"
import router from "./router"
import connectDB from "./db/connect"
import morgan from "morgan"
import newAuthRouter from "./router/user.router"
/* import mercadopago from "mercadopago" */
const mercadopago = require('mercadopago');
const cors = require("cors")//Gonzalo MercadoPago

const app = express();


const PORT = process.env.PORT || 3001

// Configuración de CORS
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(express.json());
app.use(cors()); //Gonzalo MercadoPago
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Credentials", "true")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
  res.header("X-Total-Count", "1000")
  next()
})
app.use("/api", router)
app.use(newAuthRouter)

//aca tenemos lo de mercadopago en el server
app.use(() => {
  mercadopago.configure({
    access_token: "TEST-1121991478303106-071123-211897e3813a959b6199cf6e2d046272-1412742934", // ojo esta con la cuenta prueba de vendedor
  })
});

app.post("/create_preference", (req, res) => {
  let preference = {
    items: [
      {
        title: String(req.body.description),
        unit_price: Number(req.body.price),
        quantity: Number(req.body.quantity),
      }
    ],
    back_urls: {
      "success": "http://localhost:3000",
      "failure": "http://localhost:3000",
      "pending": "" //esto es cuando pagan en efectivo y tienen que ir con el ticket a pagar a alguna caja
    },
    auto_return: "approved" as const,
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response: any) {
      res.json({
        id: response.body.id
      });
    })
    .catch(function (error: any) {
      console.log(error);
    });
});
// aca termina mercadopago



app.listen(PORT, () => {
  connectDB()
  console.log("App escuchando en el puerto :", PORT)
})
