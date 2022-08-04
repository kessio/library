const menuItems = document.querySelectorAll('.menu-items');
const container = document.querySelectorAll('.container');

menuItems.forEach((navLink) => {
    navLink.addEventListener('click', (e) => {
        // console.log(e.target.className);
        const linkID = e.target.className;

        container.forEach((section) => {
            console.log(section.id)
            section.classList.remove('active');
            if(section.id === linkID) {
                section.classList.add('active');
            }
        });
    });
})

/* eslint-disable max-classes-per-file */
class Books {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}
// LocalSTorage class
class BookStorage {
  // Get book from local storage
  static getLocalStorageBooks() {
    let bookks;
    if (localStorage.getItem('books') === null) {
      bookks = [];
    } else {
      bookks = JSON.parse(localStorage.getItem('books'));
    }
    return bookks;
  }

  // Add book to local storage
  static addBookToLocalStorage(book) {
    const books = BookStorage.getLocalStorageBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  // Remove book from local storage
  static RemoveBookFromLocalStorage(removeid) {
    const booksList = BookStorage.getLocalStorageBooks();
    const booksArray = booksList;
    const newlist = booksArray.filter((item) => parseInt(removeid, 10) !== item.id);
    localStorage.setItem('books', JSON.stringify(newlist));
  }
}
// UI class
class UserInterface {
  // Loop books for display books
  static displayBooks() {
    const books = BookStorage.getLocalStorageBooks();
    if (books != null) {
      books.forEach((book) => (UserInterface.renderBooks(book)));
    }
  }

  static renderBooks(book) {
    const booksContainer = document.querySelector('.book-details');
    booksContainer.innerHTML += `
      <tr>
      <td colspan="2">
          "${book.title}" by ${book.author}
      </td>
      <td>
          <button class="delete-btn" id="${book.id}">Remove</button>
      </td>
  </tr>
      `;
  }

  static generateID() {
    return Math.floor(Math.random() * 100);
  }
}

// Events: Render on page load
UserInterface.displayBooks();

// Events: Add books
const form = document.getElementById('add-book');
form.addEventListener('submit', (e) => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const id = UserInterface.generateID();

  // Validate form before creating book object
  const errorMsg = document.getElementById('error');
  if(title.length === 0 || author.length === 0) {
    e.preventDefault();
    errorMsg.textContent = 'All fields must be filled in!'
  }
  
      // Instatiate class
      const addedBooks = new Books(title, author, id);
      // Add book to local storage
      BookStorage.addBookToLocalStorage(addedBooks);
      // Render the books added
      UserInterface.renderBooks(addedBooks);
   
});

// Events Remove books
const removeBook = document.querySelectorAll('.delete-btn');
removeBook.forEach((element) => {
  element.addEventListener('click', (e) => {
    const button = e.target;
    const removeid = e.target.id;
    BookStorage.RemoveBookFromLocalStorage(removeid);
    button.parentElement.parentElement.remove();
  });
});
