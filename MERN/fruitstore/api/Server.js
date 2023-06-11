// getting stacks
const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");

// passing middlewares
const app = express();
app.use(express.json());
app.use(cors());
const port = 3001;

// connecting to mongodb
mongoose
  .connect("mongodb://127.0.0.1:27017/mern-fruitStore", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to DB"))
  .catch(console.error);
// importing the Fruit DB
const Fruit = require("./models/NewFruit");

// creating api endpoints
// creating a new fruit
app.post("/newfruit/new", async (req, res) => {
  const fruit = new Fruit({
    name: req.body.name,
    price: req.body.price,
    img: req.body.img,
  });
  await fruit.save();
  res.json(fruit);
});
// getting all the fruits
app.get("/fruits", async (req, res) => {
  const data = await Fruit.find();
  res.json(data);
});

// starting app
app.listen(port, () => {
  console.log("connected to port: ", port);
});
