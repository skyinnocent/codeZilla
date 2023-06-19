//required dependencies
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/Routes");

//initilizing server:
const app = express();
//middlewares:
app.use(cors());
app.use(express.json());
// connecting to DB and Node Server:
mongoose
  .connect("mongodb://127.0.0.1:27017/MERNNOTES01")
  .then(() => {
    console.log("connected to DB");
    app.listen(5000, console.log("Server running on port 5000"));
  })
  .catch((e) => {
    console.Console.log("Error: ", e.message);
  });

// route middleware
app.use(router);
