import "dotenv/config"
import express from "express";
import router from "./router";
import connectDB from "./db/connect";
import * as bodyParser from 'body-parser';

const app = express();
connectDB()
app.use(express.json()); 
app.use("/api",router)


const PORT = process.env.PORT || 3001

app .listen(PORT, () => {
    console.log('App escuchando en el puerto :', PORT);
}) 