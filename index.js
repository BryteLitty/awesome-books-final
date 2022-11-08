import { displayComponents, navItemClicked } from './modules/components.js';
import { loadBooks, addBook, removeBook } from './modules/loadContents.js';
import { DateTime } from './modules/luxon.js';

const navLinks = document.querySelectorAll('.nav-item');
const currentTime = document.querySelector('#current-time');

setInterval(() => {
  currentTime.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
});

// books collection
const booksCollection = JSON.parse(localStorage.getItem('books-collection')) || [];

// call important functions
loadBooks(booksCollection);
addBook();
removeBook();

displayComponents(navLinks);
navItemClicked(navLinks);
