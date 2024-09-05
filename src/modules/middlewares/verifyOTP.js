import { User } from "../../../database/models/user.model.js";
import { catchError } from "./catchError.js";

export const verifyOTP= catchError(async (req,res,next)=>{
    let user = User.findOne({email:req.body.email})
    if(user.otp===req.body.otp){
        User.findOneAndUpdate({email:req.body.email},{verified:true})
    }
})