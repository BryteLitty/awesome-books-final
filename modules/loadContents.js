// grab dom elements
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const form = document.querySelector('form');
const booksContainer = document.querySelector('.books-container');

// books collection array
let booksCollection = JSON.parse(localStorage.getItem('books-collection')) || [];

// class for book object
class Book {
  constructor(author, title, id) {
    this.author = author;
    this.title = title;
    this.id = id;
  }
}

const createCollection = (book) => {
  const content = `
      <div class="booklist">
        <article class="book">
          <div>
            <p>"${book.author.charAt(0).toUpperCase() + book.author.slice(1)}" by ${book.title.charAt(0).toUpperCase() + book.title.slice(1)}</p>
          </div>
          <div>
            <button class="removeBtn" id="${book.id}" type="submit">Remove</button>
          </div>
        </article>
      </div>
    `;

  return content;
};

const loadBooks = (arr) => {
  let books = '';

  arr.forEach((object) => {
    books += createCollection(object);
  });
  booksContainer.innerHTML = books;
};

// create book
const createBook = (book) => {
  const booksMarkup = `
        <div class="booklist">
          <article class="book">
            <div>
              <p>"${book.author.charAt(0).toUpperCase() + book.author.slice(1)}" by ${book.title.charAt(0).toUpperCase() + book.title.slice(1)}</p>
            </div>
            <div>
              <button class="removeBtn" id="${book.id}" type="submit">Remove</button>
            </div>
          </article>
        </div>
    `;

  booksContainer.insertAdjacentHTML('beforeend', booksMarkup);
};

// add a new book
const addBook = () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = titleInput.value;
    const author = authorInput.value;
    const id = `${new Date().getTime().toString()}${Math.trunc(Math.random() * 100)}`;

    const book = new Book(title, author, id);

    createBook(book);
    booksCollection.push(book);

    localStorage.setItem('books-collection', JSON.stringify(booksCollection));
    form.reset();
  });
};

// remove book
const removeBook = () => {
  booksContainer.addEventListener('click', (e) => {
    const removeBtn = e.target.closest('.removeBtn');

    if (!removeBtn) return;
    const { id } = removeBtn;

    booksCollection = booksCollection.filter((book) => book.id !== id);

    loadBooks(booksCollection);
    localStorage.setItem('books-collection', JSON.stringify(booksCollection));
  });
};

export { loadBooks, addBook, removeBook };