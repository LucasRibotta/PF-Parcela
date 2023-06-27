
import "dotenv/config"
import express from "express";
import router from "./router";
import connectDB from "./db/connect";
import path from "path";
import morgan from "morgan";
import passport from 'passport';
import session from 'express-session'
import flash from 'connect-flash';

import localAauth from "./passport/local-auth";

const PORT = process.env.PORT || 3001

const app = express(); 

app.use( (req,res, next) => {
    localAauth()
    next()
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
                'Access-Control-Allow-Headers',
                'Origin, X-Requested-With, Content-Type, Accept',
               );
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('X-Total-Count', '1000');
    next();
})

app.use(session ({
    secret: 'parcelas venta mapaches',
    cookie: {
        maxAge: 300000,
    },
    resave: false,
    saveUninitialized: false
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req,res,next) => {
    app.locals.signupMessage = req.flash('signupMessage');
    app.locals.signinMessage = req.flash('signinMessage');
    app.locals.user = req.user;
    next();
});

app.use('/api', router);

app .listen(PORT, () => {
    connectDB()
    console.log('App escuchando en el puerto :', PORT);
})