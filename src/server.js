const express = require("express");

const app = express();

app.use(express.json());

app.get("/books", (request, response) => {
  console.log(request);
  const book = {
    title: "the lord of the rings",
    author: "tolkein",
    genre: "fantasy",
  };

  const successResponse = {
    message: "success",
    book: book,
  };

  response.send(successResponse);
});

app.post("/books", (request, response) => {
  console.log(request.body.title);
  const newBook = {
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre,
  };

  const successResponse = {
    message: "Success!",
    newBook: newBook,
  };

  response.send(successResponse);
});

app.listen(5001, () => {
  console.log("Server is listening");
});
