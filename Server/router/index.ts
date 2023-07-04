import { Router } from "express"

import authRoutes from "./auth"


const router = Router()

// SECCION DE MERCADOPAGO
const PaymentController = require("../controllers/PaymentController");
const PaymentService = require("../services/PaymentService");

const PaymentInstance = new PaymentController(new PaymentService());
//---------------------------------------------


router.use("/auth", authRoutes)

// MERCADOPAGO
router.get("/", function (req, res, next) {
    return res.json({
      "/payment": "generates a payment link",
      "/subscription": "generates a subscription link"
    });
  });

router.get("/payment", function (req, res, next) {
    PaymentInstance.getPaymentLink(req, res);
  });
  
  router.get("/subscription", function (req, res, next) {
    PaymentInstance.getSubscriptionLink(req, res);
  });

export default router;
