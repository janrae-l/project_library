const myLibrary = [];

function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

Book.prototype.addBookToLibrary = function () {
  const book = {
    title: this.title,
    author: this.author,
    pages: this.pages,
    read: this.read,
    id: this.id,
  };
  myLibrary.push(book);
};

const booKOne = new Book("Mockingjay", "Suzanne Collins", 390, "not read");

console.log(booKOne.addBookToLibrary());

const bookTwo = new Book("Sample", "Sample", 200, "Sample");
console.log(bookTwo.addBookToLibrary());
// console.log(myLibrary);

//Use forEach for the array and display the contents in cards.
//1 card for each book
//How do I display the books in each card?
//Do I set a concrete card for the sample details first?
const container = document.querySelector(".container");

const loopAndDisplay = function (arr) {
  arr.forEach((element) => {
    for (let index in element) {
      const card = document.createElement("div");
      card.classList.add("card");
      card.textContent = `${index} : ${element[index]}`;
      container.appendChild(card);
    }
  });
};
//   for (let i = 0; i < element.length; i++) {

//   }

//   console.log(element);

console.log(loopAndDisplay(myLibrary));
