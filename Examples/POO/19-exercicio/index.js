const Author = require("./Author.js");

const john = new Author("John Doe")

const post = john.writePost("Titulo do post", "lorem ipsum dolor sic")

post.addComment("Isaac Pontes", "Muito bom!")
post.addComment("Lucas queiroga", "Achei interessante")

console.log(john)
console.log(post)