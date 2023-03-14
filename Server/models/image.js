const mongoose= require ("mongoose")

const imageSchema = new mongoose.Schema({
    name:{
        type:String,
        

    },
    image:{
        type:Object,
        required:true,
    }
})

const Images=mongoose.model("image",imageSchema)
module.exports=Images