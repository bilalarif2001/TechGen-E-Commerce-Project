const express = require("express");
const mongoose = require("mongoose");
const userValidation= require("./middleware/userAuthentication")
const cors = require("cors")

const UserRouter = require ('./routes/user.controller')
const ProductRouter= require('./routes/product.controller')
const imageRouter= require('./routes/image.controller')
const orderRouter= require('./routes/order.controller')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
//app.use(userValidation)

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

mongoose
  .connect("mongodb://localhost:27017/bootcamp",options)
  .then(() => console.log("conntected to MongoDB"))
  .catch((error) => console.log(`Can't connect to MongoDB. ${error}`));


  app.use(cors())
  app.use("/users", UserRouter);
  app.use("/image", imageRouter);
  app.use("/products", ProductRouter);
  app.use("/orders",orderRouter)

app.listen(5000, () => console.log("App is listening at port 5000"));
