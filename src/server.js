require("dotenv").config();
const express = require("express");

const mongoose = require("mongoose");

const app = express();

app.use(express.json());

async function connection() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Successfully connected.");
  } catch (error) {
    console.log(error);
  }
}

connection();

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
