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
  this.uniqueBookID = function () {
    return uniqueId;
  };
}

Book.prototype.addBookToLibrary = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
};

const booKOne = new Book("Mockingjay", "Suzanne Collins", 390, "not read");

console.log(booKOne.uniqueBookID());

const bookTwo = new Book("Sample", "Sample", 200, "Sample");
console.log(bookTwo.uniqueBookID());
