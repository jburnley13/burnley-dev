const menuItem = document.querySelectorAll('nav ul li a');
const back = document.querySelector('.back'); // Botão de voltar

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
    
    scrollTo("nav");
});