const express= require('express');
const imageParser= require('../utils/cloudinary');
const imageSchema= require('../models/image');
const { response } = require('express');


const router= express.Router();

router.post('/addproduct',imageParser.fields([{name:'secondaryImgs',maxCount:3},{name:'displayImg'}]), async (req, res) => {
    

});


router.get('/', async (req, res) =>{
    try{
        const images= await imageSchema.find()
        res.status(200).send(images);
}
catch(err){
    console.log(err)
    res.status(500).send(err)
}});

module.exports=router;