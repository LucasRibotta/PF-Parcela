import { Request, Response } from "express"

export const parcelas = (req: Request, res: Response) => {
    res.send("parcelas")
} 

export const parcela  = (req: Request, res: Response) => {
    const id = req.params.id
    res.send(`parcela con el id: ${id}`)
}