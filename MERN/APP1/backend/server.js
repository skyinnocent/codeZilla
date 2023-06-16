const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const router = require("./router/routes");
const app = express();
app.use(express.json());
app.use(cors());
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("connected to BD");
    app.listen(process.env.PORT, console.log("server started"));
  })
  .catch((e) => console.log("ERROR: ", e));

app.use(router);
