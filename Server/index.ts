import "dotenv/config"
import express from "express"
import router from "./router"
import connectDB from "./db/connect"
import morgan from "morgan"
import newAuthRouter from "./router/user.router"
/* import cors from "cors" */

/* const mercadopago = require("mercadopago")
const cors = require("cors")
const path = require("path") */

const PORT = process.env.PORT || 3001
// Configuración de CORS
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const app = express();

/* app.use(cors(corsOptions)); */

app.use(express.json());

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

/* mercadopago.configure({
  access_token: "<ACCESS_TOKEN>",
});


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../Client")));
app.use(cors());
app.get("/", function (req, res) {
  res.status(200).sendFile("index.html");
}); */

/* app.post("/create_preference", (req, res) => {

  let preference = {
    items: [
      {
        title: req.body.description,
        unit_price: Number(req.body.price),
        quantity: Number(req.body.quantity),
      }
    ],
    back_urls: {
      "success": "http://localhost:3000",
      "failure": "http://localhost:3000",
      "pending": "http://localhost:3000" */  //esto es cuando pagan en efectivo y tienen que ir con el ticket a pagar a alguna caja
/*     },
    auto_return: "approved",
  };

  mercadopago.preferences.create(preference)
    .then(function (response) {
      res.json({
        id: response.body.id
      });
    }).catch(function (error) {
      console.log(error);
    });
}); */
// aca mercadopago toma la informacion y puede mandar el body y al dashboard del frontend
/* app.get('/dashboard', function (req, res) {
  res.json({
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id
  });
}); */
// aca termina mercadopago



app.listen(PORT, () => {
  connectDB()
  console.log("App escuchando en el puerto :", PORT)
})
