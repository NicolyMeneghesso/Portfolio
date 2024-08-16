document.addEventListener('DOMContentLoaded', function() { 
    let img = document.getElementById('lamps')
    let cardAbout = document.getElementById('card-about')
    let lightBeam = document.getElementById('light-beam')

    // Mostrar o feixe de luz quando a página for carregada
    lightBeam.classList.add('light-beam');

    img.addEventListener('click', function() {
        lightBeam.classList.toggle('transparent')

        lightBeam.addEventListener('click', toggleThreme)
    })

    
    //código para interação do monitor
    const codeSnippet = [
        "function helloWorld() {",
        "  document.getElementById('hello-world').textContent =",
        "    'Hello, World!'",
        "}",
        "helloWorld();"
    ];

    let currentLine = 0 
    let currentChar = 0 
    const pauseBeforeDelete = 10500 //A pausa antes de começar a excluir o texto
    const deleteSpeed = 250 //A velocidade de exclusão
    const pauseBeforeRestart = 2000 //A pausa antes de reiniciar o ciclo de digitação

    function typeCode() {
        // Verifica se ainda há linhas do codeSnippet para digitar
        if (currentLine < codeSnippet.length) {
            // Verifica se ainda há caracteres na linha atual para digitar
            if (currentChar < codeSnippet[currentLine].length) {
                const lineTextElement = document.getElementById(`line-${currentLine}`)
                lineTextElement.textContent += codeSnippet[currentLine][currentChar]
                currentChar++;
                setTimeout(typeCode, 100) // Chama a função de digitação novamente
            } else {
                currentLine++;
                currentChar = 0;
                setTimeout(typeCode, 500) // Pequena pausa entre as linhas
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
                    setTimeout(typeCode, pauseBeforeRestart); // Reinicia o ciclo após a exclusão completa
                }
            }
        }
    }
    
    typeCode();
})