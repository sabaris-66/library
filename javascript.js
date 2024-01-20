// testing
const body = document.querySelector('body');
// const test1 = document.createElement('div');
// test.textContent = "blacky";
// body.append(test1);
// test.addEventListener('click', () => {
//     alert('blacky');
// })

let myLibrary = [];

function Book(title, author, chapters, read) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.chapters = chapters;
    this.read = read;
    this.remove = false;
}

const container = document.querySelector('.container');

function addBookToLibrary(book) {
    // do stuff here
    // title = prompt('Book title?', 'super gene');
    // author = prompt('Author name?', 'super gene');
    // chapters = prompt('No of chapters?', 'super gene');
    // read = prompt('Read?', 'super gene');
    // const book = new Book(title, author, chapters, read);
    myLibrary.push(book);
    displayLibraryBooks(book);
}

// const black = new Book('jk', 'hl', 90, true);
// addBookToLibrary();
// addBookToLibrary();

// create element to add to html
// const blacky = document.createElement('div');
// blacky.textContent = myLibrary[0].title;
// body.append(blacky);


// default books
const shadowSlave = new Book('Shadow Slave', 'Guilty Three', 1200, 'Read');
const omniscientReader = new Book('Omniscient Reader Viewpoint', 'Sing Shong', 1500, 'On Progress');
const superGene = new Book('Super Gene', 'Twelve-Winged Dark Seraphim', 3462, 'Read');

// add books to myLibrary
addBookToLibrary(shadowSlave);
addBookToLibrary(omniscientReader);
addBookToLibrary(superGene);

function displayLibraryBooks(book){

    const card = document.createElement('div');
    card.classList.add('card');
    container.append(card);

    const content = document.createElement('div');
    content.classList.add('content');
    card.append(content);
    
    const contentLeft = document.createElement('div');
    contentLeft.classList.add('contentLeft');
    content.append(contentLeft);

    const title = document.createElement('div');
    title.textContent = book.title;
    title.classList.add('bookName');
    const author = document.createElement('div');
    author.textContent = `by ${book.author}`;
    author.classList.add('author');
    contentLeft.append(title);
    contentLeft.append(author);

    const chapters = document.createElement('div');
    chapters.classList.add('chapters');
    chapters.textContent = `Chapters: ${book.chapters}`;
    content.append(chapters);

    const buttons = document.createElement('div');
    buttons.classList.add('buttons');
    card.append(buttons);

    const read = document.createElement('button');
    read.classList.add('cardButton');
    read.classList.add('readStatus');
    read.textContent = book.read;
    const remove = document.createElement('button');
    remove.classList.add('cardButton');
    remove.textContent = "Remove";
    buttons.append(read);
    buttons.append(remove);

    changeStatus(book, read);
    removeBook(book, remove, card);
}

// function to change read status
function changeStatus(book, read){
    // const readStatus = document.querySelectorAll('.readStatus');
    read.addEventListener('click', () => {
        if(read.textContent == "Read"){
            read.textContent = "Not Read";
            book.read = "Not Read";
        }
        else if(read.textContent == "Not Read"){
            read.textContent = "On Progress";
            book.read = "On Progress";
        }
        else {
            read.textContent = "Read";
            book.read = "Read";
        }
    });
}

function removeBook(book, remove, card){
    remove.addEventListener('click', () => {
        book.remove = true;
        myLibrary = myLibrary.filter(bookObject => bookObject.remove != true);
        container.removeChild(card);
    });
    
}


// Dialog Interaction 
const addBook = document.querySelector('.addBook');
const showDialog = document.querySelector('dialog');
const submit = document.querySelector('.confirm');
const close = document.querySelector('.close')
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookChapterCount = document.querySelector('#chapters');
const bookStatus = document.querySelector('#status');

addBook.addEventListener('click', () => {
    showDialog.showModal();
});

// temporary.addEventListener('change', () => {
//     console.log(temporary.value);
// });

submit.addEventListener('click', (e) => {
    e.preventDefault();
    if(bookTitle.value !== "" && bookAuthor.value !== "" &&
       bookChapterCount.value !== "" && bookStatus.value !== ""){
        const newBook = new Book(bookTitle.value, 
                                 bookAuthor.value,
                                 bookChapterCount.value,
                                 bookStatus.value);
        addBookToLibrary(newBook);
        bookTitle.value = "";
        bookAuthor.value = "";
        bookChapterCount.value = "";
        bookStatus.value = "Not Read";
        
    }
    showDialog.close();
});

