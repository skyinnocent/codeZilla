const User = require("../model/user");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// creating a user
router.post("/", async (req, res) => {
  const { name, email, age } = req.body;

  try {
    const userAdded = await User.create({
      name: name,
      email: email,
      age: age,
    });
    res.status(201).json(userAdded);
  } catch (error) {
    console.log({ error: error.message });
    res.sendStatus(400).json({ error: error.message });
  }
});

//getting all user
router.get("/", async (req, res) => {
  try {
    const showAll = await User.find();
    res.status(200).json(showAll);
  } catch (error) {
    console.log({ error: error.message });
    res.sendStatus(400).json({ error: error.message });
  }
});

// get single user

module.exports = router;
