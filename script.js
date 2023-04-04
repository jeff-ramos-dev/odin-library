function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  Book.prototype.info = () =>
    `${this.title} by ${this.author}, ${this.pages} pages, ${
      read ? 'read' : 'not read yet'
    }`;
}

const library = [];

const books = document.querySelector('.books');

const theHobbit = new Book('The Hobbit', 'J. R. R. Tolkien', 295);
const harryPotter = new Book(
  "Harry Potter and the Sorcerer's Stone",
  'J. K. Rowling',
  452,
  true
);
const theStand = new Book('The Stand', 'Stephen King', 1050);

function addBookToLibrary(book) {
  const newBook = new Book(book.title, book.author, book.pages, book.read);
  library.push(newBook);
}

addBookToLibrary(theHobbit);
addBookToLibrary(harryPotter);
addBookToLibrary(theStand);

function displayLibrary() {
  for (let i = 0; i < library.length; i++) {
    const text = `${library[i].title} by ${library[i].author}, ${library[i].pages} pages. ${library[i].read ? 'read' : 'unread'}`;
    const currentBook = document.createElement('li');
    currentBook.textContent = text;
    currentBook.classList.add('book');
    books.appendChild(currentBook);
  }
}

displayLibrary();
