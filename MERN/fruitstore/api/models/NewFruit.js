const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FruitSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },

  img: {
    type: String,
  },
});

const NewFruit = mongoose.model("NewFruit", FruitSchema);
module.exports = NewFruit;
