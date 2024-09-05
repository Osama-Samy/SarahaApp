import nodemailer from 'nodemailer'
import { emailForm } from './emailForm.js'
export const sendEmail= async (email,otp)=>{
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth: {
        user: "mostafakaram485@gmail.com",
        pass: "rhyxwrcvkulinqiy",
        },})
            const info = await transporter.sendMail({
                from: '"Msg from Node.js" <mostafakaram485@gmail.com>', // sender address
                to: email,
                subject: "Hello ✔", // Subject line
                text: "Hello world?", // plain text body
                html: emailForm(otp), // html body
            })
        }
