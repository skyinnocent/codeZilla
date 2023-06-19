const mongoose = require("mongoose");
const moment = require("moment");
const NotesSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
    length: 249,
  },
  date: {
    type: String,
    default: moment().format("DD/MM/YYYY"),
  },
});

const Note = new mongoose.model("Notes", NotesSchema);

module.exports = Note;
