import { Schema } from "mongoose";

const parcelaSchema = new Schema({
    id:{type:String, require:true},
    name:{type:String, unique:true},
    favorite:String,
    location:{type:String, require:true},
    area:{type:Number, require:true},
    surroundings:{type:String, require:true},//cercanias
    access:{type:String, require:true},
    price:{type:Number, require:true},
    services:{type:String, require:true},
    image:{type:String, require:true},
   
})