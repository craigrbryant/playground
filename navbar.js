// navbar.js
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { // Adjust the threshold as needed
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

function toggleNav() {
    const navmenu = document.getElementById('nav-menu');
    const navitems = document.getElementById('nav-items');
    const menuAv = document.getElementById('menu-avatar');
    navmenu.classList.toggle('show');
    navitems.classList.toggle('show');
    menuAv.classList.toggle('show');
    if (navmenu.classList.contains('show')) {
        navbar.style.transition = 'none'; // Disable transitions
    } else {
        navbar.style.transition = ''; // Revert to default transitions
    }
    
};

window.addEventListener('scroll', function() {
    var navmenu = document.getElementById('nav-menu');
    if (window.scrollY > 50) {
        navmenu.classList.add('scrolled');
    } else {
        navmenu.classList.remove('scrolled');
    }

});
