const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  autrhor: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Book", bookSchema);
