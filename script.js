const openBtn = document.querySelector('.primary-btn')
const closeBtn = document.querySelector('.close-btn')
const modalBg = document.querySelector('.modal')


// Display the modal when clicked
openBtn.addEventListener('click', ()=> {
    modalBg.style.display = 'block'
})

// Remove the modal when clicked
closeBtn.addEventListener('click', ()=> {
    modalBg.style.display = 'none'
})


