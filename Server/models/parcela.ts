import { Schema, model } from "mongoose";


const parcelaSchema = new Schema({
    id:{type:String, require:true},
    lote:{type:String, unique:true},
    favorite:String,
    area:{type:Number, require:true},
    price:{type:Number, require:true},
    services:{type:String, require:true},
    image:{type:String, require:true},
   
})

export default  model("Parcela",parcelaSchema,"parcela");