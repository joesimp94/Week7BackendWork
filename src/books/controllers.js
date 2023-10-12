const Book = require("./model");

const findAllBooks = async (request, response) => {
  console.log(request.originalUrl);
  const books = await Book.find({}, "title");

  const successResponse = {
    message: "Success!",
    books: books,
  };

  response.send(successResponse);
};

const addBook = async (request, response) => {
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
};

const updateWriter = async (request, response) => {
  const updateAuthor = await Book.findOneAndUpdate({
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre,
  });

  const successResponse = {
    message: "Success!",
    updateAuthor: updateAuthor,
  };

  response.send(successResponse);
};

const deleteSingle = async (request, response) => {
  const deleteBook = await Book.deleteOne({
    title: request.body.title,
  });

  const successResponse = {
    message: "Success!",
    deleteBook: deleteBook,
  };

  response.send(successResponse);
};

const wipeDatabase = async (request, response) => {
  const { id } = request.query;

  if (id) {
    try {
      const deleteSingle = await Book.findByIdAndDelete(id);
      if (deleteSingle) {
        response.json({ message: "Entry Deleted", deletedEntry: deleteSingle });
      } else {
        response.json({ message: "Entry Not Found", error: error });
      }
    } catch (error) {
      response.json({
        message: "Error Deleting",
        error: error.message,
      });
    }
  } else {
    try {
      const deleteAll = await Book.deleteMany({});
      response.json({ message: "All Entries Deleted", deleteAll: deleteAll });
    } catch (error) {
      response.json({ message: "Error Deleting All", error: error.message });
    }
  }
  //   const deleteAll = await Book.deleteMany({});

  //   const successResponse = {
  //     message: "Success!",
  //     deleteAll: deleteAll,
  //   };

  //   response.send(successResponse);
};

const editName = async (request, response) => {
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
};

const findBookByTitle = async (request, response) => {
  console.log(request.params);
  const bookTitle = await Book.findOne({
    title: request.params.title,
  });
  if (bookTitle) {
    const successResponse = {
      message: "Success!",
      bookTitle: bookTitle,
    };
    response.send(successResponse);
  } else {
    const errorResponse = {
      message: "Book not found",
    };
    response.send(errorResponse);
  }
};

module.exports = {
  findAllBooks: findAllBooks,
  addBook: addBook,
  updateWriter: updateWriter,
  deleteSingle: deleteSingle,
  wipeDatabase: wipeDatabase,
  editName: editName,
  findBookByTitle: findBookByTitle,
};
