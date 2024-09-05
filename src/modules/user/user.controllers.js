
import { User } from "../../../database/models/user.model.js"
import { AppError } from "../../utils/errorClass.js"
import { generateOTP } from "../../utils/generateOTP.js"
import { hashPassword } from "../../utils/hashPassword.js"
import { sendEmail } from "../../utils/sendEmail.js"
import { catchError } from "../middlewares/catchError.js"
import jwt from 'jsonwebtoken'

const signup= catchError(async (req,res)=>{
        let otp= generateOTP()
        req.body.otp=otp
        req.body.password=hashPassword(req.body.password)
        await User.insertMany(req.body)
        sendEmail(req.body.email,otp)
        res.status(201).json({message:"success"})
    })


const verifyOTP= catchError(async (req,res)=>{
    let user = await User.findOne({email:req.body.email})
    if(user.otp!=req.params.otp){
        res.json("otp is invalid")
    }
    await User.findOneAndUpdate({email:req.body.email},{verified:true})
    res.json("verified successfully")
})

const signin= catchError(async(req,res,next)=>{
    jwt.sign({user:req.user},'longliveyass',(err,token)=>{
        if(err)
            next(new AppError(err.stack,409))
        res.json({message:'success',token})
    })
})

export {
    signup,
    verifyOTP,
    signin
}