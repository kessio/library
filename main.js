// Creating book objects and storing them in an Array
const bookCollection = [];
function createbook (event) {
  event.preventDefault();
  const book = {
    'title': document.getElementById('title').value;
    'author': document.getelementById('author').value;
  };
  bookCollection.push(book);
  document.querySelector('form').reset();
}

document.addEventListener('DOMContentLoaded', () => {
  let addBtn = getElementById('addBtn');
  addBtn.addEventListener('click', createbook);
});
