import "dotenv/config";
import express from "express";
import router from "./router";
import connectDB from "./db/connect";
import cors from "cors";
import * as bodyParser from 'body-parser';

const app = express();

connectDB();

// Configuración de CORS
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

app.use(express.json());
app.use("/api", router);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log('App escuchando en el puerto:', PORT);
});
