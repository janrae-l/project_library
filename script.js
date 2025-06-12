let myLibrary = [];

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

Book.prototype.readToggle = function () {
  //if the uniqueId matches the id in one of the elements in the
  //object array,
  //loop thru the elements and find if the uniqueId matches the id where the slider event got clicked
  console.log(this.id);
  this.read = !this.read;
};

const addBookToLibrary = function (title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  return book;
};

Book.prototype.readToggle = function () {
  //if the uniqueId matches the id in one of the elements in the
  //object array,
  //loop thru the elements and find if the uniqueId matches the id where the slider event got clicked
  console.log(this.id);
  this.read = !this.read;
};

/*const booKOne = new Book("Mockingjay", "Suzanne Collins", 390, "not read");

console.log(booKOne.addBookToLibrary());

const bookTwo = new Book("Sample", "Sample", 200, "Sample");
console.log(bookTwo.addBookToLibrary());

console.log(myLibrary);*/

//Use forEach for the array and display the contents in cards.
//1 card for each book
//How do I display the books in each card?
//Do I set a concrete card for the sample details first?

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
    const readValue = document.querySelector(".read").checked;

    // const bookInstance = new Book(
    //   titleValue,
    //   authorValue,
    //   pagesValue,
    //   readValue
    // );
    // console.log(Object.getPrototypeOf(bookInstance) === Book.prototype);
    const book = addBookToLibrary(
      titleValue,
      authorValue,
      pagesValue,
      readValue
    );
    createCard(book);
    console.log(myLibrary);
    // readToggle();
    document.querySelector(".card-form").reset();
    dialog.close();
  }
}); /*else if (event.target.id === "slider") {
    console.log(style.backgroundColor);

    //No rgb(204, 204, 204)
    //Yes rgb(33, 150, 243)

    const uniqueId = card.dataset["unique"];
    console.log(uniqueId);

    const cardList = document.querySelectorAll(".card");
    console.log(cardList);

    cardList.forEach((card) => {
      if (card.dataset.unique === uniqueId) {
        myLibrary.readToggle();
        console.log(myLibrary);
        //activate the readToggle prototype function
      }
    });*/

/*else if (event.target.id === "removeBtn") {
     console.log(event.target.textContent);
   }*/

function createCard(book) {
  const container = document.querySelector(".container");

  const card = document.createElement("div");
  card.classList.add("card");

  const informContainer = document.createElement("div");
  informContainer.classList.add("infoContainer");

  const title = document.createElement("p");
  title.textContent = `Title : ${book.title}`;
  informContainer.appendChild(title);

  const author = document.createElement("p");
  author.textContent = `Author : ${book.author}`;
  informContainer.appendChild(author);

  const pages = document.createElement("p");
  pages.textContent = `Pages : ${book.pages}`;
  informContainer.appendChild(pages);

  const read = document.createElement("p");
  read.textContent = book.read ? "Already read" : "Not yet read";
  informContainer.appendChild(read);

  card.dataset.unique = book.id;
  card.appendChild(informContainer);

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("btnsContainer");

  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = book.read ? "Mark as unread" : "Mark as read";
  btnContainer.appendChild(toggleBtn);

  toggleBtn.addEventListener("click", (event) => {
    book.readToggle();
    console.log(book.read);

    toggleBtn.textContent = book.read ? "Mark as unread" : "Mark as read";

    read.textContent = book.read ? "Already read" : "Not yet read";
  });

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("removeBtn");
  removeBtn.textContent = "Remove Book";
  btnContainer.appendChild(removeBtn);

  removeBtn.addEventListener("click", (event) => {
    let cardRemove = event.target.parentElement.parentElement;
    let cardId = cardRemove.dataset.unique;

    container.removeChild(cardRemove);
    myLibrary = myLibrary.filter((book) => book.id != cardId);
  });

  card.appendChild(btnContainer);
  container.appendChild(card);
}

function displayBooks(arr) {
  for (let book of arr) {
    createCard(book);
  }
}

displayBooks(myLibrary);

/*
const loopAndDisplay = function (arr) {
  arr.forEach((element) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("removeBtn");
    removeBtn.textContent = "Remove Book";
    card.appendChild(removeBtn);

    const labelSwitch = document.querySelector(".switch");
    const slider = document.querySelector(".slider");
    const style = window.getComputedStyle(slider);
    // card.dataset.unique = crypto.randomUUID();
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
      if (key === "read") {
        const label = document.createElement("label");
        label.classList.add("switch");
        label.setAttribute("for", "read");
        label.textContent = "read : ";

        const input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.classList.add("read");
        input.setAttribute("id", "read");

        const span = document.createElement("span");
        span.setAttribute("class", "slider round");

        label.appendChild(input);
        label.appendChild(span);
        card.appendChild(label);

        const slider = document.querySelector(".slider");
        const style = window.getComputedStyle(slider);
        const toggleChange = function () {
          slider.addEventListener("click", (e) => {
            console.log(style.backgroundColor);

            //No rgb(204, 204, 204)
            //Yes rgb(33, 150, 243)

            const uniqueId = card.dataset["unique"];
            console.log(uniqueId);

            myLibrary.forEach((element, index) => {
              for (let key in element) {
                if (key === "id" && element["id"] === uniqueId) {
                  console.log(
                    Object.getPrototypeOf(myLibrary[index]) === Book.prototype
                  );
                  myLibrary[index].readToggle();
                  console.log(myLibrary);
                }
              }
              /*if (card.dataset.unique === uniqueId) {
                const foundElem = myLibrary.find((obj) => obj.id === uniqueId);
                console.log(foundElem);
                //console.log(myLibrary);
                console.log(
                  Object.getPrototypeOf(myLibrary[0]) === Book.prototype
                );
                console.log(myLibrary.readToggle());
                console.log(myLibrary);

                //activate the readToggle prototype function
              }
            });
          });
        };
        toggleChange();
      } else if (key === "id") {
        card.dataset.unique = element[key];
        const details = document.createElement("p");
        details.classList.add("details");
        details.textContent = `${key} : ${element[key]}`;
        card.appendChild(details);
      } else {
        const details = document.createElement("p");
        details.classList.add("details");
        details.textContent = `${key} : ${element[key]}`;
        card.appendChild(details);
      }
    }
  });
};*/
