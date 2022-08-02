
const addBookBnt   = document.getElementById('addBtn');
const booksCard = document.querySelector('.display-books');

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

  addBookBnt.addEventListener('click', (e) => {
    e.preventDefault();
   // console.log(addBook(),books);
    books.push(addBook());
   localStorage.setItem('books', JSON.stringify(books));
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




  







