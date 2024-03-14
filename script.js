const myLibrary = [];

const addButton = document.querySelector('.add-button');
const closeModalButton = document.querySelector('.close')
const modalAddButton = document.querySelector('.add');


function Book(title,author,pageSize,genre,readStatus){
    this.title = title;
    this.author = author;
    this.pageSize = pageSize;
    this.genre = genre;
    this.readStatus = readStatus;
}

function addBookToLibrary(){
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pageSize = document.querySelector('#page-size').value;
    const genre = document.querySelector('#genre').value;
    const readStatus = document.querySelector('#read-status').value;

    const book = new Book(title, author, pageSize, genre, readStatus);
    myLibrary.push(book);

    console.log(myLibrary);
}

function openModal(){
    const overlay = document.querySelector('.overlay');
    const modal = document.querySelector('.form-modal');

    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(){
    const overlay = document.querySelector('.overlay');
    const modal = document.querySelector('.form-modal');
    const inputs = document.querySelectorAll('input');

    inputs.forEach(input => {
        input.value = '';
    })

    modal.classList.remove('active');
    overlay.classList.remove('active');
}


addButton.addEventListener('click', openModal);

closeModalButton.addEventListener('click', closeModal)

modalAddButton.addEventListener('click', ()=>{
    addBookToLibrary();
    closeModal();
})





