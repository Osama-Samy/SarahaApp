
import { Schema,model } from "mongoose"

const schema= new Schema ({
    content: {
        type:String,
        required: true
    },
    recieverId: {
        type: Schema.Types.ObjectId,
        required : true
    }
},{timestamps:true})
export const Message= model('Message',schema)