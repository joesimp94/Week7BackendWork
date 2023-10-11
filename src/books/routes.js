const { Router } = require("express");
const bookRouter = Router();

const Book = require("./model");

bookRouter.get("/books", async (request, response) => {
  console.log(request.originalUrl);
  const books = await Book.find({}, "title");

  const successResponse = {
    message: "Success!",
    books: books,
  };

  response.send(successResponse);
});

bookRouter.post("/books", async (request, response) => {
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

// bookRouter.put("/books", async (request, response) => {
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

bookRouter.delete("/books", async (request, response) => {
  const deleteBook = await Book.deleteOne({
    title: request.body.title,
  });

  const successResponse = {
    message: "Success!",
    deleteBook: deleteBook,
  };

  response.send(successResponse);
});

// bookRouter.delete("/books", async (request, response) => {
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

bookRouter.put("/books", async (request, response) => {
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

module.exports = bookRouter;
