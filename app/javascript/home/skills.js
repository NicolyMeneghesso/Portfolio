document.addEventListener('DOMContentLoaded', function() { 
    
    //código para interação do monitor
    const codeSnippet = [
        "function helloWorld() {",
        "  const message = 'Hello World'",
        "  console.log(message)",
        "}",
        "helloWorld();"
    ];

    let currentLine = 0 
    let currentChar = 0 
    const typingSpeed = 150; // Velocidade de digitação
    const linePause = 600; // Pausa entre as linhas digitadas
    const pauseBeforeDelete = 3000; // Pausa antes de começar a excluir o texto
    const deleteSpeed = 100; // Velocidade de exclusão
    const pauseBeforeRestart = 2000; // Pausa antes de reiniciar o ciclo de digitação

    function typeCode() {
        // Verifica se ainda há linhas do codeSnippet para digitar
        if (currentLine < codeSnippet.length) {
            // Verifica se ainda há caracteres na linha atual para digitar
            if (currentChar < codeSnippet[currentLine].length) {
                const lineTextElement = document.getElementById(`line-${currentLine}`)
                lineTextElement.textContent += codeSnippet[currentLine][currentChar]
                currentChar++;
                setTimeout(typeCode, typingSpeed) // Chama a função de digitação novamente
            } else {
                currentLine++;
                currentChar = 0;
                setTimeout(typeCode, linePause) // Pequena pausa entre as linhas
            }
        } else {
            setTimeout(deleteCode, pauseBeforeDelete) // Inicia a exclusão após a pausa
        }
    }

    function deleteCode () {
        if (currentLine >= 0) {
            const lineTextElement = document.getElementById(`line-${currentLine}`);
            if (currentChar > 0) {
                lineTextElement.textContent = lineTextElement.textContent.slice(0, -1);
                currentChar--;
                setTimeout(deleteCode, deleteSpeed);
            } else {
                currentLine--;
                if (currentLine >= 0) {
                    currentChar = codeSnippet[currentLine].length;
                    setTimeout(deleteCode, deleteSpeed);
                } else {
                    resetTyping(); // Reinicia o ciclo após a exclusão completa
                }
            }
        }
    }

    function resetTyping() {
        // Redefine as variáveis para reiniciar o ciclo de digitação
        currentLine = 0;
        currentChar = 0;

        // Limpa o conteúdo das linhas para começar novamente
        for (let i = 0; i < codeSnippet.length; i++) {
            document.getElementById(`line-${i}`).textContent = '';
        }

        setTimeout(typeCode, pauseBeforeRestart);
    }
    
    typeCode();
})