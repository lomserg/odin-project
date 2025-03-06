const libraryElement = document.querySelector(".library");
const form = document.getElementById("bookForm");

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.read ? "read" : "not read yet"
    }.`;
  };
}

const hobbit = new Book("Hobbit", "Tolkien", 295, false);
console.log(Object.getPrototypeOf(hobbit));
console.log(Book.prototype);
function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}
addBookToLibrary("Hobbit", "Tolkien", 295, false);
addBookToLibrary("Alice in wonderLAN", "Tolkien", 2952, false);
addBookToLibrary("Harry potter", "Tolkien", 595, false);
console.log(myLibrary);
renderBooks();
function renderBooks() {
  myLibrary.forEach((book, index) => {
    const card = document.createElement("div");
    card.dataset.id = index;
    const titleCard = document.createElement("p");
    card.appendChild(titleCard);
    titleCard.textContent = book.title;
    console.log(card);
    console.log(libraryElement);
    card.addEventListener("click", deleteCard);
    libraryElement.appendChild(card);
  });
}

function deleteCard() {
  const booksToAdd = [...myLibrary.slice(libraryElement.childNodes.length)];
  myLibrary = myLibrary.filter((book) => {
    return book.title !== this.children[0].textContent;
  });

  console.log(libraryElement.childNodes.length);
  console.log(this.children[0].textContent);
  libraryElement.innerHTML = "";
  renderBooks();
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  // Get form values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked; //
  addBookToLibrary(title, author, pages, read);
  libraryElement.innerHTML = "";
  renderBooks();
});

let globalAge = 23; // This is a global variable

// This is a function - and hey, a curly brace indicating a block
function printAge(age) {
  var varAge = 34; // This is a function scoped variable

  // This is yet another curly brace, and thus a block
  if (age > 0) {
    // This is a block-scoped variable that exists
    // within its nearest enclosing block, the if's block
    const constAge = age * 2;
    console.log(constAge);
  }

  // ERROR! We tried to access a block scoped variable
  // not within its scope
  console.log(constAge);
}

// printAge(globalAge);

// ERROR! We tried to access a function scoped variable
// outside the function it's defined in
// console.log(varAge);
function createUser(name) {
  const discordName = "@" + name;
  return { name, discordName };
}

console.log(createUser("serg"));
function createUser(name) {
  const discordName = "@" + name;

  let reputation = 0;
  const getReputation = () => reputation;
  const giveReputation = () => reputation++;

  return { name, discordName, getReputation, giveReputation };
}

const josh = createUser("serg");
josh.giveReputation();
josh.giveReputation();

console.log({
  discordName: josh.discordName,
  reputation: josh.getReputation(),
});
// logs { discordName: "@josh", reputation: 2 }
