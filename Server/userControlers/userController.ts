import { Request, Response } from "express"
import {getToken, getTokenData} from "../db/jwt.config";
import User from "../models/user"
import bcrypt from "bcrypt"
import { v4 as uuidv4 } from "uuid";

export const register = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { name, lastname, email, password, image, provider, accessToken } =
    req.body
  console.log("token");
  
  if (!password || !email) {
    return res
      .status(400)
      .json({ message: "Please, send your email and password" })
  }
  const user = await User.findOne({ email })
  if (user) {
    if (user.provider === "local")
    return res.status(400).json({
      success: false,
      msg: 'usuario ya existe'
  })
    else return res.status(200).json(user)
  }

  const code = uuidv4()

  const newHashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
 console.log("Register");
 const newUser = new User({ ...req.body, password: newHashedPassword })

 const token = getToken({email, code})
 //const template = getTemplate(name, token)

 // await sendEmail(email, 'este es un email de prueba', template)
  await newUser.save()

  return res.status(200).json({
    success: true,
    msg: "registrado correctamente"
})
}

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body
console.log("login");

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please. Send your email and password" })
  }
  const user = await User.findOne({ email })
  if (!user) {
    return res.status(400).json({ message: "The user does not exist" })
  }

  const isMatch = bcrypt.compareSync(password, user.password)
  console.log(!isMatch)

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid password" })
  }

  if (user.isAdmin) {
    return res.status(200).json({ user })
  } else {
    return res.status(200).json({ user })
  }
}


export const confirm = async (req: Request, res: Response): Promise<void> => {
  try {
    // Obtener el token
    const { token } = req.params;
    console.log(token);

    // Verificar la data
    const data = getTokenData(token);
    if (data === null) {
      res.json({
        success: false,
        msg: "error al obtener data",
      });
      return;
    }

    console.log(data);
    const { email, code } = data.data;

    // Buscar si existe el usuario
    const user = await User.findOne({ email }) || null;
    if (user === null) {
      res.json({
        success: false,
        msg: "usuario no existe",
      });
      return;
    }

    // Verificar el código en la base de datos y en el usuario
    if (code !== user.code) {
      res.json({ msg: "error en códigos diferentes" });
      return;
    }

    // Actualizar el usuario
    user.veristatus = "VERIFIED";
    const usuarioActualizado = await user.save();

    // Redireccionar a la confirmación
    res.json({ msg: "elemento confirmado", usuarioActualizado });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      msg: "error al confirmar usuario",
    });
  }
};



