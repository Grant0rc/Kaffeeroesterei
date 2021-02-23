
//importing and executing shop function defined in shop.js


//For opening and closing the nav-bar on mobile

const navbar = document.querySelector('.navbar-open');
const navbarOpener = document.querySelector('.navbar-menu-mobile');
const navCloser = document.querySelector('.navCloser');

console.log(navbar);
console.log(navbarOpener);

function toggleNavbar() {
  navbar.classList.toggle('noDisplay');
}

navbarOpener.addEventListener('click', toggleNavbar);
navCloser.addEventListener('click', toggleNavbar);


console.log(navCloser);

    