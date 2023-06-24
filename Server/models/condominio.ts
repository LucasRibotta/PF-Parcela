import  { Schema, model } from "mongoose";

const condominioschema = new Schema({
    id: {type:String, unique:true, required: true},
    name: {type:String, unique: true, required: true},
    location:{type:String, require:true},
    surroundings:{
        hospital:{
            name:String,
            travelTime:Number
        },
        police:{
            name:String,
            travelTime:Number
        },
        supermarket:{
            name:String,
            travelTime:Number
        },
        schools:{
            name:String,
            travelTime:Number
        },
        firefighters:{
            name:String,
            travelTime:Number
        },
    },//cercanias
    image:String,
    access:{type:String, require:true},//convertir a array
    description: {type:String, require:true}
})

export default  model("Condominio",condominioschema,"condominio");