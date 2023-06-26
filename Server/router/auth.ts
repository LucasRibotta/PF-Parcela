import express from "express";
import { parcela, condominio, createCondominio, createParcela } from "../controllers/auth";

const router = express.Router();

router.get("/condominio", condominio)//todos los condominios o queri por name
router.get("/parcelas/:id", parcela)
router.post("/condominio",createCondominio)
router.post("/parcela",createParcela)

export default router;