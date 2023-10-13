// const Author = require("./model");

// const findAuthorByName = async (request, response) => {
//   const authorFound = await Author.findOne({
//     authorName: request.params.authorName,
//   });
//   const findBooksByAuthor = await Book.find({ author: authorFound.authorName });
//   const successMessage = {
//     message: "Success!",
//     author: authorFound,
//     findBooksByAuthor,
//   };
//   response.send(successMessage);
// };
