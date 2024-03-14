const myLibrary = [{title:'48 Laws of Power', author:'Robert Greene', pageSize:496, genre:'Self Help', readStatus:'Started Reading'},
{title:'The Hobbit', author:'JRR Tolkien', pageSize:320, genre:'Fiction', readStatus:'Not Yet'},];

const addButton = document.querySelector('.add-button');
const closeModalButton = document.querySelector('.close')
const modalAddButton = document.querySelector('.add');
const booksContainer = document.querySelector('.books-container');


function Book(title,author,pageSize,genre,readStatus){
    this.title = title;
    this.author = author;
    this.pageSize = pageSize;
    this.genre = genre;
    this.readStatus = readStatus;
};

function addBookToLibrary(){
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pageSize = document.querySelector('#page-size').value;
    const genre = document.querySelector('#genre').value;
    let readStatus = document.querySelector('#read-status');

    if(readStatus.checked){
        readStatus = 'Started Reading';
    }
    else{
        readStatus = 'Not Yet';
    }

    if(title !== '' && author !== '' && pageSize !=='' && genre !== ''){
        const book = new Book(title, author, pageSize, genre, readStatus);
        myLibrary.push(book);

        console.log(myLibrary);
    }
};

function openModal(){
    const overlay = document.querySelector('.overlay');
    const modal = document.querySelector('.form-modal');

    modal.classList.add('active');
    overlay.classList.add('active');
};

function closeModal(){
    const overlay = document.querySelector('.overlay');
    const modal = document.querySelector('.form-modal');
    const inputs = document.querySelectorAll('input');

    inputs.forEach(input => {
        input.value = '';
    })

    modal.classList.remove('active');
    overlay.classList.remove('active');
};

function displayBooks(){
    booksContainer.textContent=''

    myLibrary.forEach(book => {
        const card = document.createElement('div');
        card.classList.add('book-card')

        const title = document.createElement('h2');
        const author = document.createElement('h2')
        const genre = document.createElement('h2');
        const numberOfPages = document.createElement('h2');
        const readStatus = document.createElement('button');
        const removeButton = document.createElement('button');
        const buttonsDiv = document.createElement('div');
        const infoDiv = document.createElement('div');


        title.textContent = `Book Title: ${book.title}`;
        author.textContent = `Author: ${book.author}`;
        genre.textContent = `Genre: ${book.genre}`;
        numberOfPages.textContent =`Number of Pages: ${book.pageSize}`;
        readStatus.textContent = book.readStatus;
        removeButton.textContent = 'Remove';
        readStatus.classList.add('status');
        buttonsDiv.classList.add('button-div');
        removeButton.classList.add('remove-button');
        infoDiv.classList.add('info-div');

        infoDiv.append(title, author, genre, numberOfPages)
        buttonsDiv.append(readStatus,removeButton)

        card.append(infoDiv,buttonsDiv);

        booksContainer.appendChild(card)
    })
};


window.addEventListener('load', displayBooks)

addButton.addEventListener('click', openModal);

closeModalButton.addEventListener('click', closeModal)

modalAddButton.addEventListener('click', ()=>{
    addBookToLibrary();
    closeModal();
    displayBooks();
})







