// import mongoose, { Schema, Document } from "mongoose";
// interface IParcela extends Document {
//     lote: number;
//     area: number;
//     price: number;
//     services: string[];
//     idUsersFavorite:String;
//     image: string[];
//     deleted: boolean; // Nuevo campo para el borrado lógico
//     condominio: Types.ObjectId;
//   }


// const parcelaSchema = new Schema <IParcela>({
//     id:{type:String, require:true},
//     lote:{type:Number, unique:true},
//     idUsersFavorite:String,//combio era favorite
//     area:{type:Number, require:true},
//     price:{type:Number, require:true},
//     services:{type:[String], require:true},
//     image:{type:[String], require:true},
//     deleted: { type: Boolean, default: false },
//     condominio: { type: Schema.Types.ObjectId, ref: "Condominio", required: true }
   
// })

// export default mongoose.model<IParcela>('Parcela', parcelaSchema);

import { Schema, model, Document, Types } from "mongoose";
import Condominio from "../models/condominio";
interface IParcela extends Document {
  lote: string;
  area: number;
  price: number;
  services: string[];
  image: string;
  deleted: boolean;
  condominio: Types.ObjectId; // Referencia al Condominio
}

const parcelaSchema = new Schema<IParcela>({
  lote: { type: String, required: true },
  area: { type: Number, required: true },
  price: { type: Number, required: true },
  services: { type: [String], required: true },
  image: { type: String, required: true },
  deleted: { type: Boolean, default: false },
  condominio: { type: Schema.Types.ObjectId, ref: "Condominio", required: true }
});

const Parcela = model<IParcela>("Parcela", parcelaSchema);


export default Parcela;