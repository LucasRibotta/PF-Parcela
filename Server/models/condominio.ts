import  { Schema, model } from "mongoose";

const condominioschema = new Schema({
    id: {type:String, unique:true, required: true},
    name: {type:String, unique: true, required: true},
    location:{type:String, require:true},
    surroundings:{
        hospital:{
            name:String,
            distance:Number
        },
        police:{
            name:String,
            distance:Number
        },
        supermarket:{
            name:String,
            distance:Number
        },
        schools:{
            name:String,
            distance:Number
        },
        firefighters:{
            name:String,
            distance:Number
        },
    },//cercanias
    access:{type:String, require:true},
    
})

export default  model("Condominio",condominioschema,"condominio");