// VER Y OCULTAR MENU
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

// VER MENU
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
// OCULTAR MENU
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
//    Cuando haga click en un elemento del menu, ocultaremos el menu
    navMenu.classList.remove('show-menu')
}

navLink.forEach(element => element.addEventListener('click', linkAction))