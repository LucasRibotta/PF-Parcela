
import {Router, Response, Request} from 'express'

import authRoutes from "./auth";
import authentication from './authentication'

const router = Router();

router.use('/', authentication)

router.get('/profile', (req,res) => {
    const userAuth = {    
        user: req.app.locals.user.email,
        error: req.app.locals.signinMessage
    }
    res.status(200).json(userAuth)
})

router.get('/profileUp', (req,res) => {
    const userAuthU = {     
        user: req.app.locals.user.email,
        error: req.app.locals.signupMessage
    }
    res.status(200).json(userAuthU)  
})

router.use((req,res,next) => {
    isAuthenticated(req,res,next)
    next()
})

router.use("/auth", authRoutes)

function isAuthenticated(req: Request, res: Response, next:any) {
    if(req.isAuthenticated()) {
        return next()
    }
    res.status(404).json({message: 'requiere loguearse'})
}

export default router;

