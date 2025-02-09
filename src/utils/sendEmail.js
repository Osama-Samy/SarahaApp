import nodemailer from 'nodemailer'
import { emailForm } from './emailForm.js'
export const sendEmail= async (email,otp)=>{
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth: {
        user: "0111317osama@gmail.com",
        pass: "rghtryhyutjuuykjyu",
        },})
            const info = await transporter.sendMail({
                from: '"Msg" <0111317osama@gmail.com>', // sender address
                to: email,
                subject: "Hello ✔", 
                text: "Hello world?", 
                html: emailForm(otp)
            })
        }
