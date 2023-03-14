const express= require("express");
const productSchema= require ("../models/products")
const router=express.Router();
const imageParser= require('../utils/cloudinary');

const userAuthentication= require("../middleware/userAuthentication")


router.get('/viewproducts', async(req,res)=>{
    const users= await productSchema.find();
    res.status(200).send(users);
})

router.post('/addproduct',imageParser.fields([{name:'secondaryImgs',maxCount:3},{name:'displayImg'}]), async (req, res) => {
    let {name,category,description,stock,price,brand}=req.body
    let {displayImg,secondaryImgs}= req.files

    let product= await productSchema.findOne({name:req.body.name});
    if (product) return res.status(400).send({message: "Same product already exists"})
    else if (secondaryImgs.length>3) return res.status(400).send({message: "Maximum 3 images are allowed"})
    
    else {
      let data={
        name:name,
        img1:displayImg[0].path,
        img2:secondaryImgs[0].path,
        img3:secondaryImgs[1].path,
        img4:secondaryImgs[2].path,
        category:category,
        description:description,
        brand:brand,
        quantity:0,
        stock:stock,
        price:price,
        totalsold:0,
        userrating:[]
      }
      const newProduct= new productSchema(data)
      await newProduct.save()
      res.status(200).send({message: "Product added successfully"})
  
  }

});

router.post ('/productpost',async(req,res)=>{
    
    let user= new productSchema(req.body) // req.body is the data we send from postman to server.
     // saves data in mongo Db
     user= await user.save()
    try{res.status(200).send({message:"Data has been sent successfully"})}
    catch{(error)=>{res.status().send({message:`Data already exists ${error}`})}}
    
  })

  



  module.exports=router 