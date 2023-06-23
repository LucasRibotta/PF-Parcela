import mongoose from "mongoose";
// import condominioModel from "../models/condominio";
// import parcelaModel from "../models/parcela";


async function connectDB() {  
    if (!process.env.MONGODB_URL) {
        throw new Error("falta la variable de entorno MONGODB_URL")
    }
    try {
        // await mongoose.connect(process.env.MONGODB_URL)
        await mongoose.connect(process.env.MONGODB_URL!, {
        })
        console.log("exito")
        
    } catch (error) {
        console.log(error); 
        
    }
}

export default connectDB;