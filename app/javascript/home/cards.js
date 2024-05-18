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
    if (innerCard.style.transform === 'rotateY(180deg)') {
        innerCard.style.transform = 'rotateY(0deg)';
    } else {
        innerCard.style.transform = 'rotateY(180deg)';
    }
}