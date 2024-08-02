document.addEventListener('DOMContentLoaded', function () {
    let textMain = document.getElementById('text-main')
    let textContent = "\nDesenvolvedora"
    
    let currentChar = 0 //Um índice que acompanha a posição atual no texto.
    let typingSpeed = 200 //A velocidade de digitação
    let pauseBeforeDelete = 10500 //A pausa antes de começar a excluir o texto
    let deleteSpeed = 150 //A velocidade de exclusão
    let pauseBeforeRestart = 2000 //A pausa antes de reiniciar o ciclo de digitação

    function typeCode() {

        // Verifica se ainda há caracteres para digitar
        if (currentChar < textContent.length) {
            textMain.textContent += textContent[currentChar];
            currentChar++;
            setTimeout(typeCode, typingSpeed);
        } else {
            setTimeout(deleteCode, pauseBeforeDelete);
        }
    }

    function deleteCode() {
        if (currentChar > 0) {
            textMain.textContent = textMain.textContent.slice(0, -1);
            currentChar--;
            setTimeout(deleteCode, deleteSpeed);
        } else {
            setTimeout(typeCode, pauseBeforeRestart);
        }
    }

    typeCode();
});