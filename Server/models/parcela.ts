import { Schema, model, Document, Types } from "mongoose";
import Condominio from "../models/condominio";
interface IParcela extends Document {
  name: string;
  lote: number;
  area: number;
  price: number;
  location: string;
  image: string;
  deleted: boolean;
  description: String; // Referencia al Condominio
  condominio: String;
}

const parcelaSchema = new Schema<IParcela>({
  name: { type: String, unique: true, required: true },
  lote: { type: Number, unique: true, required: true },
  area: { type: Number, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
  deleted: { type: Boolean, default: false },
  description: { type: String, required: true },
  condominio: { type: Schema.Types.String, ref: "Condominio", required: true }
});

const Parcela = model<IParcela>("Parcela", parcelaSchema);


export default Parcela;