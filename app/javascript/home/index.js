document.addEventListener('DOMContentLoaded', function () {
    const codeTextMain = ["Aspirante a Desenvolvedora"];
    let currentLine = 0;
    let currentChar = 0;
    const lineTextElement = document.getElementById('text-main');

    function typeCode() {
        // Verifica se ainda há linhas do codeTextMain para digitar
        if (currentLine < codeTextMain.length) {
            // Verifica se ainda há caracteres na linha atual para digitar
            if (currentChar < codeTextMain[currentLine].length) {
                lineTextElement.textContent += codeTextMain[currentLine][currentChar];
                currentChar++;
            } else {
                currentLine++;
                currentChar = 0;
            }
            setTimeout(typeCode, 100);
        }
    }

    typeCode();
});