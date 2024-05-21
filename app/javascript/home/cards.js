document.addEventListener('DOMContentLoaded', function() {
    var cards = document.querySelectorAll('.flip-card');
    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            var innerCard = card.querySelector('.flip-card-inner');
            innerCard.classList.toggle('flipped');
        });
    });
});
