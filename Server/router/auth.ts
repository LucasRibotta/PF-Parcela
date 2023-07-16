import express from "express"
import {
    parcela,
    parcelas,
    createCondominio,
    createParcela,
    updateParcela,
    deleteParcela,
    desableParcela,
    updateViews
} from "../controllers/auth"

import {
    users,
    userDelete,
    userUpdate,
} from '../controllers/users'

const router = express.Router();

router.get("/parcelas", parcelas)
router.get("/parcelas/:id", parcela)
router.post("/parcela", createParcela)


router.put("/usersDelete/:id", userDelete)
router.put("/updateUser/:id", userUpdate)
router.get('/users', users)
router.post("/condominio", createCondominio)
router.put("/updateParcela/:id", updateParcela)
router.put("/deleteParcela/:id", deleteParcela)
router.put("/desableParcela/:id", desableParcela)
router.put("/updateViews/:id", updateViews)



export default router;
