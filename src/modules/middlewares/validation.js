import Joi from "joi"
import { AppError } from "../../utils/errorClass.js"

export const validate= (schema)=>{
    return (req,res,next)=>{
        let {error}= schema.validate({...req.body,...req.params,...req.query},{abortEarly:false})
            if(!error){
                return next()
            }
                let errMsg= error.details.map(err => err.message)
                next(new AppError(errMsg,401))
    }
}
    