import '../sass/main.scss';

//?  Muestra el color de los active-link al hacer scroll vertical, importante dejar los id de nav-icon, ya que cambia el color en formato mobile
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector('.nav__menu a[href*=' + sectionId + ']')
                .classList.add('active-link');
        } else {
            document
                .querySelector('.nav__menu a[href*=' + sectionId + ']')
                .classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

//? Genera en HTML el año actual, asi evito cambiarlo cada año.
document.addEventListener('DOMContentLoaded', function () {
    var year = new Date().getFullYear();
    document.getElementById(
        'copyright',
    ).innerHTML = `<span class="footer-copyright__span"> © ${year} ∾ </span>
                <span class="footer-copyright__span footer-copyright__span--color">
                <a href="https://bydiamondgod.github.io/" target="_blank"> Eddev </a>
                </span>`;
});

//? Desactiva la funcion de descargar en el video

/* document.addEventListener('DOMContentLoaded', function () {
    var miVideo = document.getElementById('miVideo');
    miVideo.controlsList = 'nodownload noremoteplayback';
}); */

//?  Hace un sombreado en el header al hacer scroll vertical
/*  function scrollHeader(){
     const header = document.getElementById('header')

     if(this.scrollY >= 70) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
 }
 window.addEventListener('scroll', scrollHeader) */
