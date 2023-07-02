
import { Request, Response } from "express";
import express from "express"
import {
    parcela,
    parcelas,
    createCondominio,
    createParcela,
    updateParcela,
    deleteParcela
} from "../controllers/auth"

import users from '../controllers/users'

const router = express.Router();

router.get("/parcelas", parcelas)
router.get("/parcelas/:id", parcela)
router.post("/parcela", createParcela)
// router.use((req,res,next) => {
//     isAuthenticated(req,res,next)
//     next()
// })

router.get('/users', users)
router.post("/condominio", createCondominio)
router.put("/updateParcela/:id", updateParcela)
router.put("/deleteParcela/:id", deleteParcela)


 function isAuthenticated(req: Request, res: Response, next:any) {
    if(req.isAuthenticated()) {
        if(res.app.locals.user.accessLevel === 1) return next()
    }
    res.status(404).json({message: 'requiere loguearse'})
}
export default router;
