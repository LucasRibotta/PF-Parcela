import mongoose, { ConnectOptions } from "mongoose";

import "dotenv/config";

async function connectDB(): Promise<void> {
	if (!process.env.MONGODB_URI) {
		throw new Error("falta la variable de entorno MONGODB_URI");
	}
	try {
		await mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			autoIndex: true,
			w: "majority",
		} as ConnectOptions);

		console.log("exito");
	} catch (error) {
		console.log(error);
	}
}

export default connectDB;
