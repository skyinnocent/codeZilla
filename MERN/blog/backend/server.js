const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/userRoutes");
const blogrouter = require("./routes/blogRoutes");

//username: syeddevelops
//password: BnBPf8FBqr1LIl2T

//app and middlewares
const app = express();
app.use(cors());
app.use(express.json());

//router middleware
app.use("/api/user", router);
app.use("/api/blogs", blogrouter);

//conecting to db and switching on server
mongoose
  .connect(
    "mongodb+srv://syeddevelops:BnBPf8FBqr1LIl2T@cluster0.wjii2xp.mongodb.net/Blog?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to DB");
    app.listen(5000, console.log("app running on port 5000"));
  })
  .catch((err) => {
    console.log(err);
  });
