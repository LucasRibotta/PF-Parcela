
import {Router} from 'express'

import authRoutes from "./auth";
import authentication from './authentication'

const router = Router();
// SECCION DE MERCADOPAGO
const PaymentController = require("../controllers/PaymentController");
const PaymentService = require("../services/PaymentService");

const PaymentInstance = new PaymentController(new PaymentService());
//---------------------------------------------

router.use('/', authentication)

router.get('/profile', (req,res) => {
    
    const userAuth = {    
        user: req.app.locals.user.name,
        accessLevel: req.app.locals.user.accessLevel,
        loggedIn: true,
        error: []
    }  
    res.status(200).json(userAuth)
})

router.get('/profileFail', (req,res) => {
    const usuario = req.flash('error')[0]
    let usuarioFail = ''  
    if(res.locals.signinMessage.length !== 0) usuarioFail = res.locals.signinMessage[0]
    else usuarioFail = res.locals.signupMessage[0]

    const userAuthU = {     
        user: usuario,
        loggedIn: true,
        error: usuarioFail
    }   
    res.status(200).json(userAuthU)  
})

router.get('/logout', (req,res,next)=>{ 
       
    req.logOut(function(err) {
        if(err) next(err)
        res.status(200).json({user:'vacio', error: []})
    })
})

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
