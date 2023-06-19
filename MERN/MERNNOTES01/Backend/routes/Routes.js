const Notes = require("../models/NoteModel");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await Notes.find();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

router.post("/newnote", async (req, res) => {
  try {
    const { text, date } = req.body;
    const newNote = await Notes.create({
      text: text,
      date: date,
    });
    res.status(201).json(newNote);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
