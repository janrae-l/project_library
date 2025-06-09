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

// Book.prototype.readToggle = function () {
//   read = `${
//       const toggle = document.createElement("input");
//       toggle.setAttribute("type", "checkbox");
//       const slider = document.createElement("span");
//       slider.classList.add("slider round");

//       details.appendChild(toggle);
//       details.appendChild(slider);
//   }`

//     }
//   }
// };

const booKOne = new Book("Mockingjay", "Suzanne Collins", 390, "not read");

console.log(booKOne.addBookToLibrary());

const bookTwo = new Book("Sample", "Sample", 200, "Sample");
console.log(bookTwo.addBookToLibrary());

console.log(myLibrary);

//Use forEach for the array and display the contents in cards.
//1 card for each book
//How do I display the books in each card?
//Do I set a concrete card for the sample details first?
const container = document.querySelector(".container");

const loopAndDisplay = function (arr) {
  arr.forEach((element) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("removeBtn");
    removeBtn.textContent = "Remove Book";
    card.appendChild(removeBtn);

    card.dataset.unique = crypto.randomUUID();
    container.appendChild(card);

    const removeEvent = function () {
      removeBtn.addEventListener("click", (e) => {
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
    };
    removeEvent();
    for (let key in element) {
      const details = document.createElement("p");
      details.classList.add("details");
      details.textContent = `${key} : ${element[key]}`;
      card.appendChild(details);
    }
  });
};
loopAndDisplay(myLibrary);

const bigContainter = document.querySelector("body");

const newBook = document.querySelector(".new-book");
newBook.setAttribute("id", "newBook");
const dialog = document.querySelector("dialog");

const confirmBtn = document.querySelector(".confirmBtn");
confirmBtn.setAttribute("id", "confirmBtn");

bigContainter.addEventListener("click", (event) => {
  if (event.target.id === "newBook") {
    console.log(event.target.textContent);
    dialog.showModal();
  } else if (event.target.id === "confirmBtn") {
    console.log(event.target.textContent);
    event.preventDefault();
    const titleValue = document.querySelector("#title").value;
    const authorValue = document.querySelector("#author").value;
    const pagesValue = document.querySelector("#pages").value;
    const readValue = document.querySelector("#read").value;

    const bookInstance = new Book(
      titleValue,
      authorValue,
      pagesValue,
      readValue
    );
    bookInstance.addBookToLibrary();
    bookInstance.readToggle().bind(bookInstance);
    loopAndDisplay(myLibrary);
    // readToggle();
    dialog.close();
  } else if (event.target.id === "removeBtn") {
    console.log(event.target.textContent);
  }
});
