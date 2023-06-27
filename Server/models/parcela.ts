import { Schema, model } from "mongoose";


const parcelaSchema = new Schema({
    id:{type:String, require:true},
    lote:{type:Number, unique:true},
    idUsersFavorite:String,//combio era favorite
    area:{type:Number, require:true},
    price:{type:Number, require:true},
    services:{type:String, require:true},
    image:{type:String, require:true},
   
})

export default  model("Parcela",parcelaSchema,"parcela");