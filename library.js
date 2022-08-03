// Object constructor class
class Books {
    constructor(title, author, id) {
      this.title = title;
      this.author = author;
      this.id = id;
  
    }
}

// UI class
class UserInterface {
  // Loop books for display books 
  static displayBooks() {
    const books = [
      {
      title: "Book 1",
      author: "Author 1",
      id: 1,
    },
    {
      title: "Book 2",
      author: "Author 2",
      id: 2,
    },
    {
      title: "Book 3",
      author: "Author 3",
      id: 3,
    },
    {
      title: "Book 4",
      author: "Author 4",
      id: 4,
    },
  ];

  books.forEach((book) => (UserInterface.renderBooks(book)));

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
      `
  }
  static generateID() {
    return Math.floor(Math.random() * 100);
  }
  
}

// LocalSTorage class
// Events: Render on page load
document.addEventListener('DOMContentLoaded', UserInterface.displayBooks());

// Events: Add books
const form = document.getElementById('add-book');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
   const id = UserInterface.generateID();
  //Instatiate class
  const addedBooks = new Books (title, author, id);

  // Render the books added
  UserInterface.renderBooks(addedBooks);
})
// Events Remove books

const removeBook = document.querySelectorAll('.delete-btn');
removeBook.forEach((element) => {
  element.addEventListener('click', (e) => {
    const button = e.target;
    button.parentElement.parentElement.remove();

  })
})

// Event: 