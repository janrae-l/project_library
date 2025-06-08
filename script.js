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
    for (let key in element) {
      const card = document.createElement("div");
      card.classList.add("card");
      card.textContent = `${key} : ${element[key]}`;
      container.appendChild(card);
    }
  });
};
loopAndDisplay(myLibrary);

const newBook = document.querySelector(".new-book");
const dialog = document.querySelector("dialog");

newBook.addEventListener("click", () => {
  dialog.showModal();
});

const confirmBtn = document.querySelector(".confirmBtn");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const titleValue = title.value;
  const authorValue = author.value;
  const pagesValue = pages.value;
  const readValue = read.value;
  console.log(titleValue, authorValue, pagesValue, readValue);
  const bookInstance = new Book(titleValue, authorValue, pagesValue, readValue);
  bookInstance.addBookToLibrary();
  loopAndDisplay(myLibrary);
  dialog.close();
});
