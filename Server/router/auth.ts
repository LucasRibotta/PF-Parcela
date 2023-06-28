import express from "express";
import { parcela, parcelas, /* condominio */createCondominio, createParcela, updateParcela, deleteParcela } from "../controllers/auth";

const router = express.Router()

router.get("/parcelas", parcelas)
router.get("/parcelas/:id", parcela)
router.post("/condominio", createCondominio)
router.post("/parcela", createParcela)
router.put("/updateParcela/:id", updateParcela)
router.put("/deleteParcela/:id", deleteParcela)

export default router
