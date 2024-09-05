import Joi from "joi"

const addMessageVal= Joi.object({
    content: Joi.string().min(2).required(),
    recieverId: Joi.string().hex().length(24).required()
})

export {
    addMessageVal
}
