import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus = application

export { application }

// Função para adicionar a classe de animação quando o elemento entra na viewport
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('animate');
            // Redefine a animação para garantir que ela será executada novamente
            void entry.target.offsetWidth; // Força um reflow para reiniciar a animação
            entry.target.classList.add('animate');
        }
    });
}

// Configura o IntersectionObserver
const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.07 // Dispara quando 10% do elemento está visível
});

// Seleciona todos os elementos que precisam ser animados
document.addEventListener('turbo:load', () => {
    const elementsLeft = document.querySelectorAll('.slide-in-left');
    const elementsRight = document.querySelectorAll('.slide-in-right');

    // Observa todos os elementos
    elementsLeft.forEach(element => observer.observe(element));
    elementsRight.forEach(element => observer.observe(element));
});