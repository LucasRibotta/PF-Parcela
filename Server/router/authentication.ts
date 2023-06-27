
import { Router } from 'express'
import passport from 'passport';

const router = Router();

router.post('/signin', passport.authenticate('local-signin',{
        successRedirect: '/api/profile',
        failureRedirect: '/api/profile',
        failureFlash: true,
        passReqToCallback: true 
}))

router.post('/signup', passport.authenticate('local-signup',{
    successRedirect: '/api/profileUp',
    failureRedirect: '/api/profileUp',
    failureFlash: true,
    passReqToCallback: true
})) 

export default router
