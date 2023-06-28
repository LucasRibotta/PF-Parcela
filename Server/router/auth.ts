<<<<<<< HEAD
import express from "express";
import { parcela, parcelas, /* condominio */createCondominio, createParcela, updateParcela, deleteParcela } from "../controllers/auth";
=======
import express from "express"
import {
  parcela,
  parcelas,
  /* condominio */ createCondominio,
  createParcela,
  updateParcela,
  deleteParcela
} from "../controllers/auth"
>>>>>>> d5cf57aeb332c9cc160c84173553db73d300828d

const router = express.Router()

<<<<<<< HEAD
router.get("/parcelas", parcelas)//todos los condominios o queri por name
=======
router.get("/parcelas", parcelas)
>>>>>>> d5cf57aeb332c9cc160c84173553db73d300828d
router.get("/parcelas/:id", parcela)
router.post("/condominio", createCondominio)
router.post("/parcela", createParcela)
router.put("/updateParcela/:id", updateParcela)
router.put("/deleteParcela/:id", deleteParcela)

export default router
