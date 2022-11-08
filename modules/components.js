const booksSection = document.getElementById('books-section');
const addBookSection = document.getElementById('add-book-form');
const contactSection = document.getElementById('contact');

// function to display components with refreshing the page
const displayComponents = (id) => {
  switch (id) {
    case 'books-section':
      booksSection.style.display = 'block';
      addBookSection.style.display = 'none';
      contactSection.style.display = 'none';
      break;

    case 'add-book-form':
      booksSection.style.display = 'none';
      addBookSection.style.display = 'block';
      contactSection.style.display = 'none';
      break;

    case 'contact':
      booksSection.style.display = 'none';
      addBookSection.style.display = 'none';
      contactSection.style.display = 'block';
      break;
    default:
      booksSection.style.color = 'block';
      addBookSection.style.display = 'none';
      contactSection.style.display = 'none';
  }
};

// function to listen for clicked even on nav items
const navItemClicked = (navLinks) => {
  navLinks.forEach((item) => {
    item.addEventListener('click', (e) => {
      const id = e.target.getAttribute('displayComponent');
      displayComponents(id);
    });
  });
};

export { displayComponents, navItemClicked };