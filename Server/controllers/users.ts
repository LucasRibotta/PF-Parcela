
import { Request, Response } from "express";

import User from "../models/user";
import deleteUser from "../handlers/deleteUser";


export const users = async (req: Request, res: Response) => {
    const { lastname } = req.query

    if (!lastname) {
        try {
            const usersData = await User.find()
            if (usersData) res.status(200).json(usersData)
            else throw new Error('No hay usuarios')
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        try {
            const userData = await User.findOne({ lastname: lastname })
            if (userData) res.status(200).json(userData)
            else throw new Error('No se encuentró ese usuario')
        }
        catch (error) {
            res.status(500).json(error)
        }
    }

}

export const userDelete = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;

        const borrado = await deleteUser(id)
        if (!borrado) {
            return res.status(404).json({ error: 'Usuario no encontrado.' });
        }

        return res.status(200).json(borrado);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error al eliminar el usuario de la base de datos.' });
    }

}
