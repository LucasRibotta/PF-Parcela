import nodemailer from "nodemailer";

import "dotenv/config"

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
        secure: true,
        port: 465,
        auth: {
            user: process.env.EMAIL_PARCELAS,
            pass: process.env.EMAIL_PASS,
        },
        tls: {
            rejectUnauthorized: false,
        }
})

export const sendEmail = async (email: string, asunto: string, cuerpo: string, html: string) => {
    try {
        transporter.sendMail({
            from: process.env.EMAIL_PARCELAS,
            to: email,
            subject: asunto,
            text: cuerpo,
            html: html,
        }, (error, info) => {
            if (error) {console.log('error al enviar el correo', error);
            }
            else {
                console.log("correo enviado")
            }
        })
        
    } catch (error) {
        console.log('Fallo con el email', error)
    }
}

export const getTemplate = (name: string, token: string) => {    


    return `
    <div id="email_content">
        <h2>Hola: ${name} bienvenido, para verificar tu email, por favor hace click en el botón "Verificar" </h2>
        <a
         href="http://localhost:3001/confirm/${token}"
         target="_top"
         style="background-color: #4CAF50; color: white; padding: 10px 20px; border: none; cursor: pointer;"
         >
         Verificar
         </a> 
         
         </div>
         `
        }
        //<button style="background-color: #4CAF50; color: white; padding: 10px 20px; border: none; cursor: pointer;">Verificar</button>
 
