import express from "express";
import { parcela, condominio } from "../controllers/auth";

const router = express.Router();

router.get("/condominio", condominio)
router.get("/parcelas/:id", parcela)

export default router;