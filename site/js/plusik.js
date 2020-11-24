const plusik = document.getElementById('plusik');
const listToShow = document.querySelector('.nav_hidden')

plusik.addEventListener('click', event => {
    listToShow.classList.toggle('toshow');
})