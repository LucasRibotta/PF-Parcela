import  { Schema } from "mongoose";

const condominioschema = new Schema({
    id: {type:String, required: true},
    name: {type:String, unique: true},
    
})