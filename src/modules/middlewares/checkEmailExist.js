import { dbConnection } from "../../../database/dbConnection.js"
import { User } from "../../../database/models/user.model.js"
import { AppError } from "../../utils/errorClass.js"


const checkEmailExist= async (req,res,next)=>{
    const {email}=req.body
    let found = await User.findOne({email})
    if(found){
        return next(new AppError("email already exists",409))
    }
    next()
    
}

export default checkEmailExist