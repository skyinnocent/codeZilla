//password of db: RFFoCmkMSW7Hpctb
//username: syeddevelops
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/bookroute");
//server initializing
const app = express();
//middlewares
app.use(express.json());
app.use("/books", router);

// db and server starting
mongoose
  .connect(
    "mongodb+srv://syeddevelops:RFFoCmkMSW7Hpctb@bookstore-cluster0.g9p9c5k.mongodb.net/bookStore?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected to Atlas"))
  .then(() => {
    app.listen(5050, console.log("app started on port 5050"));
  })
  .catch((err) => console.log("ERROR: ", err.message));
