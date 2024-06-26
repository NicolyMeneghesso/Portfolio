document.addEventListener('DOMContentLoaded', function() { 
    let img = document.getElementById("img-main-0");
    let container = document.getElementById("container");

    img.addEventListener('click', function() {
        container.style.transition = 'background-color 0.5s ease';
        container.style.backgroundColor = 'rgb(0, 229, 255)'; // Cor de destino
    });
});