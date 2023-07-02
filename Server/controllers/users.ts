
import { Request, Response } from "express";

import User  from "../models/user";


const users = async(req: Request, res: Response) => {
    const {lastname} = req.query
     
    if(!lastname){
        try {
            const usersData = await User.find()
            if(usersData) res.status(200).json(usersData)
            else throw new Error('No hay usuarios')            
        } catch (error) {
            res.status(500).json(error)
        }
    }else {
        try {
            const userData = await User.findOne({lastname: lastname})
            if(userData) res.status(200).json(userData)
            else throw new Error('No se encuentró ese usuario')
        }
        catch (error) {
            res.status(500).json(error)
        }
    }
   
}

export default users;