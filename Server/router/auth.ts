import express from "express";
import { parcela, parcelas } from "../controllers/auth";

const router = express.Router();

router.get("/parcelas", parcelas)
router.get("/parcelas/:id", parcela)

export default router;