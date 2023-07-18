const User = require("../models/user.model");
const {v4: uuidv4} = require("uuid");
const {getToken, getTokenData} = require("../config/jwt.config");
const { getTemplate, sendEmail } = require("../config/mail.config");

const signUp = async (req, res) => {
    try {
        //obtener la data del usuario: name, email

        const {name, email} = req.body

        //verificar que el usuario no exista

        let user = await User.findOne({email}) || null

        if(user !== null) {
            return res.json({
                success: false,
                msg: 'usuario ya existe'
            })
        }
        //generar el código

        const code = uuidv4()

        //registrar o crear un nuevo usuario

            user = new User({name,code,email})
        //generar un token

            const token = getToken({email, code})
        // obtener un template

            const template = getTemplate(name, token)
        //enviar email

        await sendEmail(email, 'este es un email de prueba', template)
        await user.save()

        res.json({
            success: true,
            msg: "registrado correctamente"
        })
    } catch (error) {
        console.log(error);
        return res.json({
            succes: false,
            msg: 'error al registrar usuario'
        })
    }
}

    const confirm = async (req, res) => {
        try {
           //obtener el token

            const {token} = req.params
          console.log(token);
           //verificar la data

           const data = getTokenData(token)
            if(data === null) {
                return res.json({
                    success: false,
                    msg: 'error al obtener data'
                })
            }

            console.log(data);
            const {email, code} = data.data

           //buscar si existe el usuario

            const user = await User.findOne({email}) || null
            if(user === null) {
                return res.json({
                    success: false,
                    msg: 'usuario no existe'
                })
            }
            
           //verificar el código bd y usuario

            if(code !== user.code) {
                return res.json({msg: "error en codigos diferentes"})
            }

           //actualizar usuario 

            user.status = 'VERIFIED'
           const usuarioactualizado = await user.save()
           //redireccionar a la confirmacion

           return res.json({msg: 'elemento confirmado', usuarioactualizado})

        } catch (error) {
            console.log(error);
            return res.json({
                success: false,
                msg: 'error al confirmar usuario'
            })
        }
    }

module.exports = {
   
    confirm
}