
import { Request, Response } from "express";

import User from "../models/user";
import deleteUser from "../handlers/deleteUser";
import updateUser from "../handlers/updateUser";
import user from "../models/user";


export const users = async (req: Request, res: Response) => {
    const { name } = req.query as {name?: string}

    console.log(name);


    if (!name) {
        try {
            const usersData = await User.find()
            if (usersData) res.status(200).json(usersData)
            else throw new Error('No hay usuarios')
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        try {
            const userData = await User.find();
            console.log(userData);

            const info = userData.filter(el => el.name.toLowerCase().includes(name.toString().toLowerCase()))
            console.log(info);

            if (info) res.status(200).json(info)
            else throw new Error('No se encuentra ese usuario')
        }
        catch (error) {
            res.status(500).json(error)
        }
    }

}

export const userDelete = async (req: Request, res: Response) => {

    try {
        const { id  } = req.params;
        console.log(id);

        const borrado = await deleteUser(id)
        console.log(borrado);
        if (!borrado) {
            return res.status(404).json({ error: 'Usuario no encontrado.' });
        }

        return res.status(200).json(borrado);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error al eliminar el usuario de la base de datos.' });
    }

}

export const userUpdate = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const { name, lastname, phone, date, email, password, isAdmin, isCompany } = req.body;

        console.log(name, lastname, phone, date, email, password, isAdmin, isCompany);


        if (!id) {
            throw new Error('El campo id es requerido.');
        }
        const userUpdate = await updateUser(id, name, lastname, phone, date, email, password, isAdmin, isCompany)
        if (!userUpdate) {
            return res.status(404).json({ error: 'El usuario no existe.' });
        }

        return res.status(200).json(userUpdate);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error al actualizar la parcela en la base de datos.' });
    }
}
