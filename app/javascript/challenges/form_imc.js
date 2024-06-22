// Capturar evento de submit do formulário

document.addEventListener('DOMContentLoaded', function () {
    let peso = document.getElementById('peso')
    let altura = document.getElementById('altura')
    let resultado = document.getElementById('resultado')
    let form = document.getElementById('imcForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let valuePeso = Number(peso.value)
        let valueAltura = Number(altura.value)

        if (isNaN(valuePeso) || isNaN(valueAltura) || valuePeso <= 0 || valueAltura <= 0) {
            resultado.textContent = 'Por favor, insira valores válidos para peso e altura.';
            return; // Sai da funcao se os valores nao forem validos
        }

        let imc = valuePeso / (valueAltura * valueAltura)
        let imcResult

        if (imc < 18.5) {
            imcResult = 'Abaixo do peso';
        } else if (imc < 24.9) {
            imcResult = 'Peso normal';
        } else if (imc < 29.9) {
            imcResult = 'Sobrepeso';
        } else if (imc < 34.9) {
            imcResult = 'Obesidade grau 01';
        } else if (imc < 39.9) {
            imcResult = 'Obesidade grau 02';
        } else {
            imcResult = 'Obesidade grau 03';
        }

        resultado.textContent = `Seu IMC é ${imc.toFixed(2)} (${imcResult})`;
    });
});