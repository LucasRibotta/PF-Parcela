
import User from "../models/user"
import bcrypt from "bcrypt"
import { Request, Response}  from 'express'
import {v4 as uuidv4} from 'uuid'

import { getTemplate, sendEmail } from '../config/email.config'
import { getToken, getTokenData } from '../config/jwt.config'

interface pe {   
        data: {
            email: string | null,
        code: string | null 
        },
        iat: number,
        exp: number       
}

export const emailRegister = async (req: Request, res: Response) => {
    
    try {
        const { name, lastname, email, password, image, provider, accessToken } = req.body

        if (!password || !email) {
            return res
            .status(400)
            .json({ message: "Please, send your email and password" })
        }

        const user = await User.findOne({ email })
        
        console.log(user, email, password);

        if (user) {
            if (user.provider === "local")
                if(user.status === "VERIFIED") return res.status(400).json({ message: "El usuario ya existe" })
                else return res.status(400).json({ message: 'Se solicita verificar usuario a través del correo enviado'})

            else return res.status(200).json(user)
        }

        const newHashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))

        const code = uuidv4()

        const newUser = new User({ ...req.body, password: newHashedPassword, code: code })
        await newUser.save()

        const token = getToken({email, code})

        const template = getTemplate(name, token) 

        await sendEmail(email, 'Verificando Email','Por favor has click en verificar para confirmar el email', template)

        return res.status(201).json(newUser)

    } catch (error) {
        console.log(error);
        return res.status(404).json({msg: 'error al registrar usuario'})    
    }
     
}  

export const confirm = async (req: Request, res: Response) => {
    try {
        const {token} = req.params

        const data = getTokenData(token) as pe | null

        if(data === null) {return res.json({msg: "error al obtener la data"})}

        const {email, code} = data.data

        const userVerify = await User.findOne({email}) 

        if (userVerify === null) {
            return res.status(404).json({msg: 'usuario no existe'})
        } 
     
        if (userVerify.code !== code) {
              return res.json({msg: "error de verificar: codigos diferentes"})
        }
        else {
        
            userVerify.status = 'VERIFIED'

            const userUpdate = await userVerify.save()

            res.redirect('/verificado.html')
           
        }
     
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "error al verificar usuario"})    
    }
    
}
