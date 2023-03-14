const mongoose= require ("mongoose")

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,

    },
    lastname:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    birthday:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    block:{
        type:Boolean,
        required:true,
    }

})

const User=mongoose.model("Users",userSchema)
module.exports=User