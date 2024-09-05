import { AppError } from "../../utils/errorClass.js"


export const globalErrorHandler= (err,req,res,next)=>{
    return (err,req,res,next)=>{
        let code= err.statusCode||500
        res.status(code).json({error:"error",message:err.stack})
    }
}