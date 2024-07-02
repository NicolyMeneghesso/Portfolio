document.addEventListener('DOMContentLoaded', function() { 
    let img = document.getElementById('lamps')
    let rowBody = document.getElementById('row-body')
    let cardMain = document.getElementById('card-main')
    let lightBeam = document.getElementById('light-beam')

    // Mostrar o feixe de luz quando a página for carregada
    lightBeam.classList.add('light-beam');

    img.addEventListener('click', function() {
        rowBody.classList.toggle('row-body-moon') //toggle ele adiciona/remove a classe da lista
        cardMain.classList.toggle('card-main-moon')

        lightBeam.classList.toggle('transparent')
    });
});