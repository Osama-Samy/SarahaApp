
import {Schema,model } from "mongoose"

const schema= new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    otp:{
        type:Number,
        default:null
    },
    verified:{
        type: Boolean,
        default: false
    }
})
export const User= model('User',schema)