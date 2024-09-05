
import bcrypt from 'bcrypt'
import { User } from '../../../database/models/user.model.js'
import { AppError } from '../../utils/errorClass.js'
const signinValidation= async (req,res,next)=>{
        const {email,password}=req.body
        let user = await User.findOne({email:email})
        if(user){
            let isMatch = bcrypt.compareSync(password,user.password)
            if(isMatch){
                req.user=user
                return next()
            }else{
                return next(new AppError("email or password is incorrect",409))
            }
        }
        next(new AppError("email or password is incorrect",409))
    }

    export default signinValidation