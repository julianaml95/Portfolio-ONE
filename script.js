// Obtener la navbar
let navbar = document.querySelector('.navbar');

// Función para cambiar la clase de la navbar cuando se hace scroll
function toggleNavbarColor() {
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Detectar el evento de scroll y llamar a la función
window.addEventListener('scroll', toggleNavbarColor);