const Books = require("./../models/Books");

// get all books
const getAllBooks = async (req, res, next) => {
  let books;
  // querying for all books
  try {
    books = await Books.find();
  } catch (err) {
    console.log("Error:", err.message);
  }
  // checking query
  if (!books) {
    return res.status(400).json({
      Error: "books not found",
    });
  } else if (books) {
    return res.status(200).json({ books });
  }
};

// create a book
const createBook = async (req, res, next) => {
  const { name, author, price, available } = req.body;
  const newBook = {
    name,
    price,
    author,
    available,
  };
  try {
    const response = await Books.createOne(newBook);
  } catch (err) {
    console.log(err);
  }
};

//exports
module.exports.getAllBooks = getAllBooks;
