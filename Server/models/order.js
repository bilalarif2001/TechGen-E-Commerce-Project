const mongoose= require ("mongoose")

const orderShema = new mongoose.Schema({
    email:{
        type:String,
        required:true,

    },
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    postalCode:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:String,
        required:true,
    },
    totalprice:{
        type:Number,
        required:true,
    },
    status:{
        type:String,
        required:true,
    },
    orderdate:{
        type:String,
        required:true,
    },
    products:{
        type:Array,
        required:true,
    }
})

const Order=mongoose.model("orders",orderShema)
module.exports=Order