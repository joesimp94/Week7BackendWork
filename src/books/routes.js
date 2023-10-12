const { Router } = require("express");
const bookRouter = Router();

const Book = require("./model");

const {
  findAllBooks,
  addBook,
  updateWriter,
  deleteSingle,
  wipeDatabase,
  editName,
  findBookByTitle,
} = require("./controllers");

bookRouter.get("/books", findAllBooks);

bookRouter.post("/books", addBook);

bookRouter.put("/books", updateWriter);

bookRouter.delete("/books/deleteSingle", deleteSingle);

bookRouter.delete("/books/wipeDatabase", wipeDatabase);

bookRouter.put("/books", editName);

bookRouter.get("/books/:title", findBookByTitle);

module.exports = bookRouter;
