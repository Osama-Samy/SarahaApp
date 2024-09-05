import joi from "joi"

const signupValidation= joi.object({
    username: joi.string().min(3).max(16).required(),
    email: joi.string().email().required(),
    password: joi.string().pattern(/^[A-Z-a-z][A-Za-z0-9]{8,40}$/).required()
})

const signinVal= joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
})

export{
    signupValidation,
    signinVal
}



