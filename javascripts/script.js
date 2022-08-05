const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-menu')

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
}); 
