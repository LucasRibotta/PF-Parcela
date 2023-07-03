import "dotenv/config"
<<<<<<< HEAD
import express from "express";
import router from "./router";
import connectDB from "./db/connect";
import path from 'path';
import morgan from 'morgan'
import passport from 'passport';
import session from 'express-session'
import flash from 'connect-flash';
import localAauth from "./passport/local-auth";
import cors from "cors";
import * as bodyParser from 'body-parser';


const dotenv = require("dotenv");

=======
import express from "express"
import router from "./router"
import connectDB from "./db/connect"
import path from "path"
import morgan from "morgan"
import passport from "passport"
import session from "express-session"
import flash from "connect-flash"
import localAauth from "./passport/local-auth"
import newAuthRouter from "./router/user.router"
import "dotenv/config"
import cors from "cors"
import * as bodyParser from "body-parser"
>>>>>>> 22b6132ac5a7f645a239d597e021a1b1d6e62587
const PORT = process.env.PORT || 3001
// Configuración de CORS
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

<<<<<<< HEAD
const app = express(); 

dotenv.config();

app.use(cors(corsOptions));

app.use(express.json()); 
app.use( (req,res, next) => {
    localAauth()
    next()
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
=======
const app = express()
app.use(cors(corsOptions))
>>>>>>> 22b6132ac5a7f645a239d597e021a1b1d6e62587

app.use(express.json())
app.use((req, res, next) => {
  localAauth()
  next()
})

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(express.json())
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

app.use(
  session({
    secret: "parcelas venta mapaches",
    cookie: {
      maxAge: 300000
    },
    resave: false,
    saveUninitialized: false
  })
)

app.use(flash())
app.use(passport.initialize())
app.use(passport.session())

app.use((req, res, next) => {
  res.locals.signupMessage = req.flash("signupMessage")
  res.locals.signinMessage = req.flash("signinMessage")

  app.locals.user = req.user
  next()
})

app.use("/api", router)

app.use(newAuthRouter)

app.listen(PORT, () => {
  connectDB()
  console.log("App escuchando en el puerto :", PORT)
})
