window.addEventListener("load", function () {
    const loader = document.querySelector('.fundoLoad')
    loader.style.display = "none";
});


const img = document.querySelectorAll('img');

img.forEach(function (img) {
    img.draggable = false;
})


const menu = document.querySelector('.IconMenuMobile');
const menuConteudo = document.querySelector('.navMobile');

menu.addEventListener('click', () => {
    if (menuConteudo.style.display === "none") {
        menu.setAttribute('name', 'close-outline');
        menuConteudo.classList.remove('fecharNav');
        menuConteudo.classList.add('abrirNav');
        menuConteudo.style.display = "block";
    } else {
        menu.setAttribute('name', 'menu-outline');
        menuConteudo.classList.remove('abrirNav');
        menuConteudo.classList.add('fecharNav');
        setTimeout(() => {
            menuConteudo.style.display = "none";
        }, 300);
    }
});
