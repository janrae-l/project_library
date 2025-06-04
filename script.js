const myLibrary = [];

function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  const uniqueId = crypto.randomUUID();
}

Book.prototype.addBookToLibrary = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
};

const booKOne = new Book();
