const Note = require("../models/NoteModel");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await Note.find();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

router.post("/newnote", async (req, res) => {
  try {
    const { text } = req.body;
    const newNote = await Note.create({
      text: text,
    });
    res.status(201).json(newNote);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedNote = await Note.findByIdAndDelete({ _id: id });
    res.status(200).json(deletedNote);
  } catch (e) {
    console.log(e);
    res.end(e.message);
  }
});

module.exports = router;
