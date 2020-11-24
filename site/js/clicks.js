const plusik = document.getElementById('plusik');
const tab = document.getElementById('linkOfTab');
const mat = document.getElementById('linkOfMat');
const bed = document.getElementById('linkOfBed');
const tum = document.getElementById('linkOfTum');
const listToShow = document.querySelector('.nav_hidden')

plusik.addEventListener('click', event => {
    listToShow.classList.toggle('toshow');
})

tab.addEventListener('click', event => {
    listToShow.classList.remove('toshow');
})

mat.addEventListener('click', event => {
    listToShow.classList.remove('toshow');
})

bed.addEventListener('click', event => {
    listToShow.classList.remove('toshow');
})

tum.addEventListener('click', event => {
    listToShow.classList.remove('toshow');
})