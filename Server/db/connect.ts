import mongoose from "mongoose";

async function connectDB() {
    if (!process.env.MONGODB_URL) {
        throw new Error("falta la variable de entorno MONGODB_URL")
    }
    
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("exito");
        
    } catch (error) {
        console.log("error en la BD");
        
    }
}

export default connectDB;