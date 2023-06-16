const mongoose = require("mongoose");

const UserScheema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    age: {
      type: Number,
    },
  },
  { timestamps: true }
);

const User = new mongoose.model("User", UserScheema);

module.exports = User;
