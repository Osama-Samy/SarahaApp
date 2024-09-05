process.on('uncaughtException',(err)=>{console.log(`error in code ${err.stack}`)})
import express from 'express'
import userRouter from './src/modules/user/user.routes.js'
import { AppError } from './src/utils/errorClass.js'
import { globalErrorHandler } from './src/modules/middlewares/globalError.js'
import { dbConnection } from './database/dbConnection.js'
import msgRouter from './src/modules/message/message.routes.js'

const app= express()
const PORT= 3000
app.use(express.json())
app.use('/auth',userRouter)
app.use('/verify',userRouter)
app.use('/messages',msgRouter)



//Error Handlers
process.on('unhandledRejection',(err)=>{console.log(`error outside express ${err}`)})

app.use('*',(req,res,next)=>{
    next(new AppError(`Route not found ${req.originalUrl}`,404))
})

app.use(globalErrorHandler())

app.listen(PORT,()=>{console.log('server is running..')})