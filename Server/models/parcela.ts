import { Schema, model, Document, Types } from "mongoose";
import Condominio from "../models/condominio";
interface IParcela extends Document {
  name: string;
  lote: number;
  area: number;
  price: number;
  location: string;
  images: string[];
  deleted: boolean;
  description: string; // Referencia al Condominio
}

const parcelaSchema = new Schema<IParcela>({
  name: { type: String, required: true },
  lote: { type: Number, required: true },
  area: { type: Number, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  images: { type: [String], required: true },
  deleted: { type: Boolean, default: false },
  description: { type: Schema.Types.String, ref: "Condominio", required: true }
});

const Parcela = model<IParcela>("Parcela", parcelaSchema);


export default Parcela;
