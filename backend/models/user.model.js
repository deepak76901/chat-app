import {Schema,model} from "mongoose"

const userSchema = Schema({
    fullName : {
        type:String,
        required:true,
       
    },
    userName :{
        type:String,
        required:true,
        unique:true
    },
    email : {
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength : 6
    },
    gender : {
        type:String,
        required:true,
        enum:["male","female"]
    },
    profilePic : {
        type:String,
        default:""
    }
})

const User = model("User",userSchema)