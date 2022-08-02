
const addBookBnt   = document.getElementById('addBtn');
const booksCard = document.querySelector('.display-books');

 let getsrored = localStorage.getItem('books');
 //console.log(getsrored);
  let books;
  if(localStorage.getItem('book') === ''){
  books = [];
  }else{
  books = JSON.parse(getsrored);
  //console.log(books);
  }
 
  addBookBnt.addEventListener('click', (e) => {
    e.preventDefault();
    books.push(addBook());
   // console.log(books);
   localStorage.setItem('books', JSON.stringify(books));
  });
   function addBook(){
    const addedBook = {
      'title': document.getElementById('title').value,
      'author': document.getElementById('author').value,
      'isbn': document.getElementById('isbn').value,
    };
    return addedBook;
   }
  function getStoredData() {
    let storeddata = JSON.parse(localStorage.getItem('books'));
   return storeddata;
  
  }
  getStoredData();
  
function renderBooks() { 
  let storedData = getStoredData(); 
  storedData.forEach((data) => { 
  booksCard.innerHTML += `
  <div class="card-container">
  <h4>${data.title}</h4> 
  <p>${data.author}</p>
  <button id="${data.isbn}" class="remove-book">Remove</button> 
  <hr></div>`
  
  }); 
} 
renderBooks(); 



  







