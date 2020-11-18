const menuItem = document.querySelectorAll('nav ul li a');
const back = document.querySelector('.back'); // Botão de voltar
const contrate = document.querySelector('#contrate'); //Botão de Contrate-me
/*Atributos do menu fixo */
const nav = document.querySelector("nav");
const distanciaNav = nav.offsetTop;

menuItem.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const elemento = e.target;
        const id = elemento.getAttribute('href');
        const to = document.querySelector(id).offsetTop;

        window.scroll({
            top: to - 60,
            behavior: "smooth",

        });
    });
});

function scrollTo(element) {
    document.querySelector(element).scrollIntoView({behavior: "smooth"});
}

back.addEventListener('click', function(e) {
    e.preventDefault();
    scrollTo("header");
    
});

/*Contrate-me */

contrate.addEventListener('click', function(e) {
    e.preventDefault();
    scrollTo("#contato");
});

/*Menu fixo no topo */

function fixarNav() {
    if(window.pageYOffset > distanciaNav) {
        nav.classList.add("navFixa");
    }
    else {
        nav.classList.remove("navFixa");
    }
}

window.onscroll = function() {
    fixarNav();
}