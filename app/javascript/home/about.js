//1º Garante que o JavaScript seja executado apenas depois que o DOM estiver completamente carregado
//2º criar uma variavel, e seleciona o carrossel pelo ID.
//3º Inicializa o carrossel usando a API JavaScript do Bootstrap.
//4º Define o intervalo entre as transições dos slides
//5º Garante que o carrossel comece a rodar automaticamente quando a página for carregada.

document.addEventListener('DOMContentLoaded', function() { 
    var myCarousel = document.querySelector('#carouselExample');
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 8000, // Intervalo em milissegundos (5 segundos)
      ride: 'carousel'
    });
}); 




// Variavel de decimal
// Timer para aumentar a variavel decimal em 1
// Função para converter o decimal em Binario

/*console.log("O valor é: " + ConvertToBinario())

function ConvertToBinario() {
  let result = 0;
  return result;
}*/