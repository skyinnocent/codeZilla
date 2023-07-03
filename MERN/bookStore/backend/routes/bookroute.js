const express = require("express");
const router = express.Router();
const Book = require("./../models/Books");
const bookControllers = require("./../controllers/booksControllers");

router.get("/", bookControllers.getAllBooks);

module.exports = router;
