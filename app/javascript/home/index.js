document.addEventListener('DOMContentLoaded', function () {
    let textMain = document.getElementById('text-main')
    const cursor = document.getElementById('cursor')

    let textContent = "Cálculos | Livros | Café | Códigos"
    
    let currentChar = 0 //Um índice que acompanha a posição atual no texto.
    const typingSpeed = 200 //A velocidade de digitação
    const pauseBeforeDelete = 10500 //A pausa antes de começar a excluir o texto
    const deleteSpeed = 250 //A velocidade de exclusão
    const pauseBeforeRestart = 2000 //A pausa antes de reiniciar o ciclo de digitação

    function typeCode() {
        // Remove a animação de piscar enquanto está digitando
        cursor.style.animation = 'none';
        
        // Verifica se ainda há caracteres para digitar
        if (currentChar < textContent.length) {
            textMain.textContent += textContent[currentChar];
            currentChar++;
            setTimeout(typeCode, typingSpeed);
        } else {
            // Adiciona a animação de piscar após a digitação terminar
            cursor.style.animation = 'blink 0.7s step-end infinite';

            // Após terminar de digitar, inicia o processo de exclusão
            setTimeout(deleteCode, pauseBeforeDelete);
        }
    }

    function deleteCode() {

        // Remove a animação de piscar enquanto está deletando
        cursor.style.animation = 'none';

        if (currentChar > 0) {
            textMain.textContent = textMain.textContent.slice(0, -1);
            currentChar--;
            setTimeout(deleteCode, deleteSpeed);
        } else {
            // Adiciona a animação de piscar após o texto ser deletado
            cursor.style.animation = 'blink 0.7s step-end infinite';

            // Deixe o cursor piscando e aguarde antes de reiniciar
            cursor.style.animation = "blink 0.7s step-end infinite";
            setTimeout(typeCode, pauseBeforeRestart);
        }
    }

    typeCode();
});
