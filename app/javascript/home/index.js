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


    let monitorScreen = document.getElementById("monitorScreen");
    let randCaracters = document.getElementById("randCaracters").innerHTML.trim().split("<br>");
    let screenText = ""; // Inicializa screenText como uma string vazia
    let currentIndex = 0; // Inicia no primeiro elemento da array

    setTimeout(() => {  // Define um atraso antes de executar a função interna.
        monitorScreen.innerHTML = ""; // Limpa o conteúdo atual do elemento monitorScreen.
        let intervalId = setInterval(() => { // Inicia uma função para ser executada a cada milissegundos
            if (currentIndex < randCaracters.length) { // Verifica se ainda há mais elementos na array para exibir
                let randChar = randCaracters[currentIndex]; // Pega o elemento atual da array
                screenText += randChar + "<br>";  // Adiciona o elemento atual e uma nova linha ao texto acumulado
                monitorScreen.innerHTML = screenText; // Atualiza o conteúdo exibido na tela
                currentIndex++; // Passa para o próximo elemento da array
            } else {
                clearInterval(intervalId); // Para quando todos os elementos forem exibidos
            }
        }, 2000);
    }, 2000); // Define um atraso de 2 segundos antes de iniciar a exibição dos elementos da array
});
