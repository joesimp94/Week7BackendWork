require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

require("./db/connection");

const app = express();

app.use(express.json());

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
  },
  genre: {
    type: String,
  },
});

const Book = mongoose.model("book", bookSchema);

app.get("/books", async (request, response) => {
  console.log(request.originalUrl);
  const books = await Book.find({}, "title");

  const successResponse = {
    message: "Success!",
    books: books,
  };

  response.send(successResponse);
});

app.post("/books", async (request, response) => {
  const newBook = await Book.create({
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre,
  });

  const successResponse = {
    message: "Success!",
    newBook: newBook,
  };

  response.send(successResponse);
});

// app.put("/books", async (request, response) => {
//   const updateAuthor = await Book.findOneAndUpdate({
//     title: request.body.title,
//     author: request.body.author,
//     genre: request.body.genre,
//   });

//   const successResponse = {
//     message: "Success!",
//     updateAuthor: updateAuthor,
//   };

//   response.send(successResponse);
// });

app.delete("/books", async (request, response) => {
  const deleteBook = await Book.deleteOne({
    title: request.body.title,
  });

  const successResponse = {
    message: "Success!",
    deleteBook: deleteBook,
  };

  response.send(successResponse);
});

// app.delete("/books", async (request, response) => {
//   const criteria = {
//     title: request.params.title,
//     author: request.params.author,
//     genre: request.params.genre,
//   };

//   const wipeDb = await Book.deleteMany(criteria);

//   const successResponse = {
//     message: "Success!",
//     wipeDb: wipeDb,
//   };

//   response.send(successResponse);
// });

app.put("/books", async (request, response) => {
  const updatedBook = await Book.findOneAndUpdate(
    { title: request.body.title },
    { [request.body.key]: request.body.value },
    { new: true }
  );

  const successResponse = {
    message: "Success!",
    updatedBook: updatedBook,
  };

  response.send(successResponse);
});

app.listen(5001, () => {
  console.log("Server is listening");
});
