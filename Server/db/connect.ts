import mongoose from "mongoose";
import condominioModel from "../models/condominio";
// import parcelaModel from "../models/parcela";

import 'dotenv/config'

async function connectDB() {  
    if (!process.env.MONGODB_URL) {
        throw new Error("falta la variable de entorno MONGODB_URL")
    }
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        // await mongoose.connect(process.env.MONGODB_URL!, {
        // })

        // const newCondo =new condominioModel ({
        //     id: "24",
        //     name: "Rosales",
        //     access:"panamericana"
        // })
        // await newCondo.save()
        // console.log(newCondo);
        
        console.log("exito")
        
    } catch (error) {
        console.log(error); 
        
    }
}

export default connectDB;