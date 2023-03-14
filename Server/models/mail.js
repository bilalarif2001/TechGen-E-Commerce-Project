const mongoose= require ("mongoose")

const mailSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    token:{
        type:String,
    },
    verified:{
        type:Boolean,
    }

})

const Mail=mongoose.model("Mail",mailSchema)
module.exports=Mail