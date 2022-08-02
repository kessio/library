
const addBookBnt   = document.getElementById('addBtn');
const booksCard = document.querySelector('.display-books');
const isbnField = document.querySelector('.isbn-field');
let errorMsg = document.querySelector('.error');

 let getsrored = localStorage.getItem('books');
  let books = [];
  if(getsrored){
    books = JSON.parse(getsrored);
  }else{
 
  books = [];
 
  }

 
  function addBook(){
    const addedBook = {
      'title': document.getElementById('title').value,
      'author': document.getElementById('author').value,
      'isbn': document.getElementById('isbn').value,
    };
    return addedBook;
   }

  function isbnNumber() {
    let storeddata = JSON.parse(localStorage.getItem('books'));
    let addedBooks = addBook();
    const found = storeddata.find(element => element.isbn === addedBooks.isbn);
    if(found){
    let  errormsg = "Exists";
    return errormsg;
    }

  }

  addBookBnt.addEventListener('click', (e) => {
    e.preventDefault();
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let isbn = document.getElementById('isbn').value;
  
    if(title.length !== 0) {
      if(author.length !== 0) {
        if(isbn.length !== 0) {
          if(isbnNumber() !== "Exists"){
            books.push(addBook());
            localStorage.setItem('books', JSON.stringify(books));
            renderAddedBook();
            errorMsg.textContent = '';
          }else{
            errorMsg.textContent = 'A book with the Same ISBN number Exists!';
            e.preventDefault();

          }
        }else {
          errorMsg.textContent = 'ISBN field must be filled in!';
          e.preventDefault();
        }
      }else {
        errorMsg.textContent = 'Author field must be filled in!';
        e.preventDefault();
      }
    }else {
      errorMsg.textContent = 'Book title must be filled in!';
      e.preventDefault();
    } 
  });

  function getStoredData() {
    let storeddata = JSON.parse(localStorage.getItem('books'));
   return storeddata;
  
  }
  getStoredData();
  
function renderBooks() { 
  let storedData = getStoredData(); 
  if(storedData !== null){
    storedData.forEach((data) => { 
      booksCard.innerHTML += `
      <div class="card-container">
      <h4>${data.title}</h4> 
      <p>${data.author}</p>
      <button id="${data.isbn}" class="remove-book">Remove</button> 
      <hr></div>`
      
      }); 
  }
  
} 
renderBooks(); 

function removeBookUI() {
  booksCard.addEventListener('click', (e) => {
   let element = e.target
   let isbnid=  e.target.id;
   let booksList = getStoredData();
   const newlist =  booksList.filter((items) => { return items.isbn !== isbnid });
    element.parentElement.remove();
   localStorage.setItem('books', JSON.stringify(newlist));

  })
}
removeBookUI();

function renderAddedBook(){
  const listBooks = addBook();
      booksCard.innerHTML += `
      <div class="card-container">
      <h4>${listBooks.title}</h4> 
      <p>${listBooks.author}</p>
      <button id="${listBooks.isbn}" class="remove-book">Remove</button> 
      <hr></div>`
}





  







