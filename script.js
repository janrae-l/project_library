const myLibrary = [];

function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  //this.id = crypto.randomUUID();
}

Book.prototype.addBookToLibrary = function () {
  const book = {
    title: this.title,
    author: this.author,
    pages: this.pages,
    read: this.read,
    //id: this.id,
  };
  myLibrary.push(book);
};

// const booKOne = new Book("Mockingjay", "Suzanne Collins", 390, "not read");

// console.log(booKOne.addBookToLibrary());

// const bookTwo = new Book("Sample", "Sample", 200, "Sample");
// console.log(bookTwo.addBookToLibrary());

// console.log(myLibrary);

//Use forEach for the array and display the contents in cards.
//1 card for each book
//How do I display the books in each card?
//Do I set a concrete card for the sample details first?
const container = document.querySelector(".container");
let card = document.createElement("div");
card.classList.add("card");

let removeBtn = document.createElement("button");
removeBtn.classList.add("removeBtn");

const loopAndDisplay = function (arr) {
  arr.forEach((element) => {
    card = document.createElement("div");
    card.classList.add("card");
    removeBtn = document.createElement("button");
    removeBtn.classList.add("removeBtn");
    removeBtn.textContent = "Remove Book";
    card.appendChild(removeBtn);

    card.dataset.unique = crypto.randomUUID();
    container.appendChild(card);
    for (let key in element) {
      const details = document.createElement("p");
      details.classList.add("details");
      details.textContent = `${key} : ${element[key]}`;
      card.appendChild(details);
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

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const titleValue = document.querySelector("#title").value;
  const authorValue = document.querySelector("#author").value;
  const pagesValue = document.querySelector("#pages").value;
  const readValue = document.querySelector("#read").value;

  const bookInstance = new Book(titleValue, authorValue, pagesValue, readValue);
  bookInstance.addBookToLibrary();
  loopAndDisplay(myLibrary);
  dialog.close();
});

removeBtn.addEventListener("click", (event) => {
  const removeId = card.dataset["unique"];
  console.log(removeId);
  const cardList = document.querySelectorAll(".card");
  console.log(cardList);

  cardList.forEach((card) => {
    if (card.dataset.unique === removeId) {
      card.remove();
    }
  });
});

const removeBtns = document.querySelectorAll(".removeBtn");
function logText(e) {
  console.log(this);
}

removeBtns.forEach((btn) => btn.addEventListener("click", logText));
