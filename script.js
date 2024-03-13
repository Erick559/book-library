const addButton = document.querySelector('.add-button');
const closeModalButton = document.querySelector('.close')

addButton.addEventListener('click', () => {
    const overlay = document.querySelector('.overlay');
    const modal = document.querySelector('.form-modal');

    modal.classList.add('active');
    overlay.classList.add('active');
})

closeModalButton.addEventListener('click', () =>{
    const overlay = document.querySelector('.overlay');
    const modal = document.querySelector('.form-modal');

    modal.classList.remove('active');
    overlay.classList.remove('active');
})

