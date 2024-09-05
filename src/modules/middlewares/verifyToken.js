
import jwt from 'jsonwebtoken'

export const verifyToken=  (req,res,next)=>{
    jwt.verify(req.headers.token,'longliveyass',(err,payload)=>{
        if(err)
            return next(err)
        req.body.payload=payload
        next()
    })
    }
