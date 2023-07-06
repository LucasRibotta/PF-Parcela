import "dotenv/config"
import express from "express"
import router from "./router"
import connectDB from "./db/connect"
import morgan from "morgan"
import newAuthRouter from "./router/user.router"
// import cors from "cors"

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

app.listen(PORT, () => {
  connectDB()
  console.log("App escuchando en el puerto :", PORT)
})
