const toggleBtn = document.querySelector('.icon-container');
const navbarLinks = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
})