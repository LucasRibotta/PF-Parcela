import express from "express";
import { parcela, condominio, createCondominio } from "../controllers/auth";

const router = express.Router();

router.get("/condominio", condominio)//todos los condominios o queri por name
router.get("/parcelas/:id", parcela)
router.post("/condominio",createCondominio)

export default router;