import { Request, Response}  from 'express'
import {getToken, getTokenData} from "../db/jwt.config";
import  User  from "../models/user";

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


export default confirm