import { Request, Response } from "express"

export const condominio = (req: Request, res: Response) => {
    res.send("condominio")
} 

export const parcela  = (req: Request, res: Response) => {
    const id = req.params.id
    res.send(`parcela con el id: ${id}`)
}