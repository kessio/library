// Creating book objects and storing them in an Array
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
//console.log(bookCollection);

  let addBtn = document.getElementById('addBtn');
  addBtn.addEventListener('click', (event)  => {
    createbook(event);
    setData();
    
  
  });
 
  function setData () {
    let getBooks = localStorage.getItem('books');
  if(getBooks === null){
     books = [];
  }else{
   let oldData = JSON.parse(getBooks);
   bookCollection.push(oldData);
 let newData = localStorage.setItem('books',JSON.stringify(bookCollection));
 return newData
 
  }

  }
 
