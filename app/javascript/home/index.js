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
    })

        //código para interação do monitor
        const codeLines = document.getElementById('codeLines');
        const lines = codeLines.innerHTML.split('<br>'); // Divide o conteúdo inicial em linhas.

        // Contém o texto que queremos simular a digitação
        const codeSnippet = [
            "function helloWorld() {",
            "  document.getElementById('hello-world').textContent =",
            "    'Hello, World!'",
            "}",
            "helloWorld();"
        ];

        let currentLine = 0 
        let currentChar = 0 
        const startingLine = 0; // Índice da linha inicial (10 corresponde ao índice 0 do array lines)

        function typeCode() {
            // Verifica se ainda há linhas do codeSnippet para digitar
            if (currentLine < codeSnippet.length) {
                // Verifica se ainda há caracteres na linha atual para digitar
                if (currentChar < codeSnippet[currentLine].length) {
                    lines[startingLine + currentLine] += codeSnippet[currentLine][currentChar];
                    currentChar++;
                } else {
                    currentLine++;
                    currentChar = 0;
                }
                codeLines.innerHTML = lines.join('<br>');
                setTimeout(typeCode, 100);
            }
        }

        typeCode();
})