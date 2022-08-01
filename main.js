// Creating book objects and storing them in an Array
const booksCard = document.querySelector('.display-books');

const bookCollection = [];
function createbook (event) {
  event.preventDefault();
  const book = {
    'title': document.getElementById('title').value,
    'author': document.getElementById('author').value,
  };
  bookCollection.push(book);
  document.querySelector('form').reset();
}

  let addBtn = document.getElementById('addBtn');
  addBtn.addEventListener('click', (event)  => {
    createbook(event);
    setData();
  
  });
  
  function setData () {
    let newData = localStorage.setItem('books',JSON.stringify(bookCollection));
    return newData;
    
  }

  function getStoredData() {
    return JSON.parse(localStorage.getItem('books'));
  
  }
  
function renderBooks() { 
  let storedData = getStoredData(); 
  storedData.forEach((data) => { 
  booksCard.innerHTML += `<p>${data.title}</p> 
                          <button>Remove</button> 
                          <hr>` 
  }); 
} 
renderBooks(); 




