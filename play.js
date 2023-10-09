const response = await fetch("http://localhost:5001/books");
const data = await response.json;

setAuthor(data.title);
setGenre(data.genre);

const [author, setAuthor] = useState("");

const response = await fetch("http://localhost:5001/books");
