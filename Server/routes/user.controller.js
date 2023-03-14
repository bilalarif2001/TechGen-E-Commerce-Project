const express= require("express");
const userSchema= require ("../models/user")
const mailSchema= require ("../models/mail")
const router=express.Router();
const {generateAuthToken,logout}= require("../middleware/userAuthentication")
const nodemailer= require("nodemailer")
const twilio = require('twilio')

const authHandler= require("../middleware/auth")


router.get('/viewallusers', async(req,res)=>{
    const users= await userSchema.find();
    res.status(200).send(users);
})

router.post ('/signup',async(req,res)=>{

  const ExisitingUser= await userSchema.findOne({email:req.body.email});
   if (ExisitingUser) {res.status(400).send({message: 'Account is already registered against this email'})}

   
     else{
      const newUser= new userSchema(req.body) // req.body is the data we send from postman to server.
      await newUser.save()  // saves data in mongo Db
      res.status(200).send({message:`Account has been successfully registered against ${req.body.email}`})
    }
})

  router.get('/logout', async(req,res)=>{
    logout
    res.status(200).send("You have been successfully logged out");
})

  router.post ('/login',async(req,res)=>{
  
    let user= await userSchema.findOne({email:req.body.email});
    console.log(user)
    if (!user) return res.status(400).send({message: "Account against this email does not exist. Please Register"})
    
    else {
      let {email,password,block}=user
      if (email!==req.body.email || password!==req.body.password) return res.status(400).send({message: "Invalid email or password"})
      else if (block) return res.status(400).send({message: "Your account has been blocked by administrator"})
      else{
        // generating JWT token
      const token=generateAuthToken({
      email:user.email,
      id:user._id,
    })
    const {firstname,email}= user
    res.status(200).send({message: "Login Successful", token,name:firstname,email})
  }
    console.log(user)
  }
    //localStorage.setItem("token", token)
  })

  // ----------------------- NODE MAILER --------------------

router.post("/signupemail", async (req, res) => {
  // Generate a unique token
  const token=generateAuthToken({
      email:req.body.email,
      password:req.body.password,
    })

  // Save the token and email to the database
  const user = new mailSchema({
    email: req.body.email,
    password:req.body.password,
    token: token,
    verified:false
  });
   await user.save();
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 587, false for other ports
    requireTLS: true,
    auth: {
      user: "bilalarif200@gmail.com",
      pass: "aolfttlxotvwvrsu",
    },
  });
  // Send the verification email
  let mailOptions = {
    from: '"Bilal" <bilalarif200@gmail.com>',
    to: req.body.email,
    subject: "Email Verification",
    text: `Please click the following link to verify your email: http://localhost:5000/users/verify?token=${token}`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  res.send("Verification email sent");
});

router.get("/verify", async (req, res) => {
  // Look up the user with the matching token
  const user = await mailSchema.findOne({ token: req.query.token });

  if (!user) {
    return res.status(404).send("Invalid token");
  }
await mailSchema.findByIdAndUpdate(user._id,{
token:"",
verified:true
})
  // Set the verification flag to true

  res.send("Email verified");
});

// -------------- Twilio Send SMS ----------------

const accountSid = 'ACdcb1a62a9e02785f430c3be4e56b260e'
const authToken = '752d9e828f7ae97ace5315e6b5d1d8d5'
const client = new twilio(accountSid, authToken)

router.get('/send-sms', (req, res) => {
  const accountSid = "ACdcb1a62a9e02785f430c3be4e56b260e";
  const authToken = "752d9e828f7ae97ace5315e6b5d1d8d5";
  const client = require("twilio")(accountSid, authToken);
  
  client.messages
    .create({ body: "Hello there Developer. From Node JS. Bilal Arif", from: "+19789918266", to: "+923072506432" })
    .then(message => console.log(message.sid));
})


 /*  router.put ('/insertUser/:email', async(req,res)=>{
    let userEmail=  await user.findOne({email:})
  }) */

  module.exports=router