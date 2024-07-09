let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('active', window.scrollY > 0);
});



document.addEventListener('DOMContentLoaded', setupNavigation);
// footer.js
// main.js
document.getElementById('menu-icon').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});


