// import  { Schema, model } from "mongoose";

// const condominioschema = new Schema({
//     id: {type:String, unique:true, required: true},
//     name: {type:String, unique: true, required: true},
//     location:{type:String, require:true},
//     surroundings:{
//         hospital:{
//             name:String,
//             travelTime:Number
//         },
//         police:{
//             name:String,
//             travelTime:Number
//         },
//         supermarket:{
//             name:String,
//             travelTime:Number
//         },
//         schools:{
//             name:String,
//             travelTime:Number
//         },
//         firefighters:{
//             name:String,
//             travelTime:Number
//         },
//     },//cercanias
//     image:String,
//     access:{type:String, require:true},//convertir a array
//     description: {type:String, require:true}
// })

// export default  model("Condominio",condominioschema,"condominio");


import { Schema, model, Document, Types } from "mongoose";
import  Parcela  from "../models/parcela";


interface ICondominio extends Document {
    id: string;
    name: string;
    location: string;
    image: string;
    access: string;
    description: string;
    parcelas: Types.ObjectId[]; // Array de referencias a Parcelas
  }
  
  const condominioSchema = new Schema<ICondominio>({
    id: { type: String, unique: true, required: true },
    name: { type: String, unique: true, required: true },
    location: { type: String, required: true },
    image: String,
    access: { type: String, required: true },
    description: { type: String, required: true },
    parcelas: [{ type: Schema.Types.ObjectId, ref: "Parcelas" }] // Array de referencias a Parcelas
  });
  
  const Condominio = model<ICondominio>("Condominio", condominioSchema);
  export default Condominio ;