const mongoose= require ("mongoose")

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    img1:{
        type:String,
        required:true,
    },
    img2:{
        type:String,
        required:true,
    },
    img3:{
        type:String,
        required:true,
    },
    img4:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    brand:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    stock:{
        type:Number,
        required:true,
    },
    totalsold:{
        type:Number,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    userrating:{
        type:Array,
        required:true,
    },
})

const Products=mongoose.model("products",productSchema)
module.exports=Products