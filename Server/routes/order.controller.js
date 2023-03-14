const express= require("express");
const orderSchema= require ("../models/order")
const router=express.Router();
const {generateAuthToken,logout}= require("../middleware/userAuthentication")
const nodemailer= require("nodemailer")
const twilio = require('twilio')

router.get('/viewOrders', async(req,res)=>{
      const users= await orderSchema.find();
      res.status(200).send(users);
  })

router.post ('/orderplacement',async(req,res)=>{

      const newUser= new orderSchema(req.body) // req.body is the data we send from postman to server.
      await newUser.save()  // saves data in mongo Db
      res.status(200).send({message:`Your Order has been successfully Placed against your email ${req.body.email}`})

})

router.put ('/updateOrder/:id',async(req,res)=>{
let order=orderSchema.findByIdAndUpdate(req.params.id)
console.log(order)
res.status(200).send(req.params.id);
})

  module.exports=router