import {Router} from 'express'
import {signin, signup, verifyOTP } from './user.controllers.js'
import checkEmailExist from '../middlewares/checkEmailExist.js'
import signinValidation from '../middlewares/signinValidation.js'
import { validate } from '../middlewares/validation.js'
import { signinVal, signupValidation } from './user.validation.js'




const userRouter= Router()

userRouter.route('/signup').post(validate(signupValidation),checkEmailExist,signup)
userRouter.route('/:otp').put(verifyOTP)
userRouter.route('/signin').post(validate(signinVal),signinValidation,signin)




export default userRouter