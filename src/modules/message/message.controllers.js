import { Message } from "../../../database/models/message.model.js";
import { AppError } from "../../utils/errorClass.js";

const addMessage= async (req,res)=>{
    await Message.insertMany(req.body)
    res.status(201).json({message:'success'})
}

const getAllMessages= async(req,res)=>{
    const {_id} = req.body.payload.user
    let messages= await Message.find({recieverId:_id}).sort({createdAt:-1})
    console.log(_id)
    res.json(messages)
}

const deleteMessage= async(req,res,next)=>{
    let message= await Message.findOneAndDelete({_id:req.params.id})
    if(!message)
        return next(new AppError('message is not deleted',400))
    res.json('deleted')
}

export{
    addMessage,
    getAllMessages,
    deleteMessage
}