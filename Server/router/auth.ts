import express from "express";
import { parcela, /* condominio */createCondominio, createParcela, updateParcela, deleteParcela } from "../controllers/auth";

const router = express.Router();

router.get("/parcelas", parcela)//todos los condominios o queri por name
router.get("/parcelas/:id", parcela)
router.post("/condominio",createCondominio)
router.post("/parcela",createParcela)
router.put("/updateParcela/:id",updateParcela)
router.put("/deleteParcela/:id",deleteParcela)

export default router;