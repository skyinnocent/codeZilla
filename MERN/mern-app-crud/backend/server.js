const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const dotenv = require("dotenv");
dotenv.config();
const userRouter = require("./routes/userRouter");

mongoose
  .connect(process.env.URI)
  .then(() => {
    app.listen(process.env.PORT || 8000, (err) => {
      if (err) {
        console.log("PORT ERROR", err);
      } else {
        console.log("connected successfully");
      }
    });
  })
  .catch((err) => {
    console.log(err);
  });
app.use(userRouter);
