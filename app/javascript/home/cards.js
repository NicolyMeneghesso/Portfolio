document.addEventListener('DOMContentLoaded', function() {
    const flipCards = document.querySelectorAll('.flip-card');
    flipCards.forEach(function(card) {
        card.addEventListener('click', function() {
            flipCard(card);
        });
    });
});

function flipCard(card) {
    const innerCard = card.querySelector('.flip-card-inner');
    innerCard.classList.toggle('is-flipped');
}