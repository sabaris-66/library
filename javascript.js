const myLibrary = [];

function Book(title, author, pages, read) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    // do stuff here
    title = prompt('Book title?', 'super gene');
    author = prompt('Author name?', 'super gene');
    pages = prompt('No of pages?', 'super gene');
    read = prompt('Read?', 'super gene');
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

// const black = new Book('jk', 'hl', 90, true);
addBookToLibrary();