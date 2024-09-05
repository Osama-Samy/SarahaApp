import {Router} from 'express'
import { addMessage, deleteMessage, getAllMessages } from './message.controllers.js'
import { verifyToken } from '../middlewares/verifyToken.js'

const msgRouter= Router()

msgRouter.route('/:id').post(addMessage).delete(verifyToken,deleteMessage)
msgRouter.route('/').get(verifyToken,getAllMessages)



export default msgRouter