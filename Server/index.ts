import "dotenv/config"
import express from "express";
import router from "./router";

const app = express();

app.use("/api",router)

const PORT = process.env.PORT || 3001

app .listen(PORT, () => {
    console.log('App escuchando en el puerto :', PORT);
})