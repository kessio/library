const addBookBnt = document.getElementById('addBtn');
const booksCard = document.querySelector('.display-books');
const errorMsg = document.querySelector('.error');

const getsrored = localStorage.getItem('books');
let books = [];
if (getsrored) {
  books = JSON.parse(getsrored);
} else {
  books = [];
}
function addBook() {
  const addedBook = {
    title: document.getElementById('title').value,
    author: document.getElementById('author').value,
    isbn: document.getElementById('isbn').value,
  };
  return addedBook;
}

function isbnNumber() {
  const storeddata = JSON.parse(localStorage.getItem('books'));
  const addedBooks = addBook();
  const found = storeddata.find((element) => element.isbn === addedBooks.isbn);
  if (found) {
    const errormsg = 'Exists';
    return errormsg;
  }
  return true;
}

function renderAddedBook() {
  const listBooks = addBook();
  booksCard.innerHTML += `
      <div class="card-container">
      <h4>${listBooks.title}</h4> 
      <p>${listBooks.author}</p>
      <button id="${listBooks.isbn}" class="remove-book">Remove</button> 
      <hr></div>`;
}

addBookBnt.addEventListener('click', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;

  if (title.length !== 0) {
    if (author.length !== 0) {
      if (isbn.length !== 0) {
        if (isbnNumber() !== 'Exists') {
          books.push(addBook());
          localStorage.setItem('books', JSON.stringify(books));
          renderAddedBook();
          errorMsg.textContent = '';
          document.getElementById('add-book').reset();
        } else {
          errorMsg.textContent = 'A book with the Same ISBN number Exists!';
          e.preventDefault();
        }
      } else {
        errorMsg.textContent = 'ISBN field must be filled in!';
        e.preventDefault();
      }
    } else {
      errorMsg.textContent = 'Author field must be filled in!';
      e.preventDefault();
    }
  } else {
    errorMsg.textContent = 'Book title must be filled in!';
    e.preventDefault();
  }
});

function getStoredData() {
  const storeddata = JSON.parse(localStorage.getItem('books'));
  return storeddata;
}
getStoredData();

function renderBooks() {
  const storedData = getStoredData();
  if (storedData !== null) {
    storedData.forEach((data) => {
      booksCard.innerHTML += `
      <div class="card-container">
      <h4>${data.title}</h4> 
      <p>${data.author}</p>
      <button id="${data.isbn}" class="remove-book">Remove</button> 
      <hr></div>`;
    });
  }
}
renderBooks();

function removeBookUI() {
  booksCard.addEventListener('click', (e) => {
    const element = e.target;
    const isbnid = e.target.id;
    const booksList = getStoredData();
    const newlist = booksList.filter((items) => items.isbn !== isbnid);
    element.parentElement.remove();
    localStorage.setItem('books', JSON.stringify(newlist));
  });
}
removeBookUI();
