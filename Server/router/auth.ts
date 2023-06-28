import express from "express";
import { parcela, parcelas, /* condominio */createCondominio, createParcela, updateParcela, deleteParcela } from "../controllers/auth";

import { Request, Response } from "express";
const router = express.Router();


router.use((req,res,next) => {
    isAuthenticated(req,res,next)
    next()
})



router.get("/parcelas", parcelas)//todos los condominios o queri por name
router.get("/parcelas/:id", parcela)
router.post("/condominio",createCondominio)
router.post("/parcela",createParcela)
router.put("/updateParcela/:id",updateParcela)
router.put("/deleteParcela/:id",deleteParcela)

function isAuthenticated(req: Request, res: Response, next:any) {
    console.log(res.app.locals);

    
    if(req.isAuthenticated()) {
        if(res.app.locals.user.accessLevel === 1) return next()
    }
    res.status(404).json({message: 'requiere loguearse'})
}
export default router;