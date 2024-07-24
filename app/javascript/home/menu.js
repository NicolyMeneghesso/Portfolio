document.addEventListener('DOMContentLoaded', function () {
    let day = document.getElementById('day');

    function applyHoverAnimation(element) {
        element.addEventListener('mouseover', function () {
            this.style.transform = 'translateY(-6px)';
            this.style.color = 'rgb(250, 220, 240)'; // Cor mais clara ao passar o mouse
            this.style.transition = 'transform 0.3s ease, color 0.3s ease';
        });

        element.addEventListener('mouseout', function () {
            this.style.transform = 'translateY(0)';
            if (day.checked) {
                this.style.color = '#030712'; // Cor do modo claro
            } else {
                this.style.color = 'rgb(218, 112, 214)'; // Cor do modo escuro
            }
            this.style.transition = 'transform 0.3s ease, color 0.3s ease';
        });
    }

    function applyDarkMode() {
        let body = document.body;
        let menu = document.getElementsByClassName('navbar')[0]; // Seleciona o primeiro elemento com a classe 'navbar'
        let navTextElements = document.querySelectorAll('.nav-text p'); // Seleciona todos os elementos p dentro de .nav-text
        let navItemElements = document.querySelectorAll('#nav-link .nav-link'); // Seleciona todos os elementos .nav-link dentro do #nav-link

        // Modo escuro
        body.style.background = "linear-gradient(180deg, rgb(34, 41, 55) 0%, rgba(34, 41, 55, 0.978) 50%, rgba(34, 41, 55, 0.858) 100%)";
        menu.style.background = "linear-gradient(180deg, rgb(34, 41, 55) 0%, rgba(34, 41, 55, 0.978) 50%, rgba(34, 41, 55, 0.858) 100%)";

        navTextElements.forEach(function (text) {
            text.style.color = "rgb(218, 112, 214)";
            text.style.transition = "transform 0.3s ease, color 0.3s ease";
            applyHoverAnimation(text);
        });

        navItemElements.forEach(function (link) {
            link.style.color = "rgb(218, 112, 214)";
            link.style.transition = "font-size 0.3s ease, color 0.3s ease";
        });
    }

    function applyLightMode() {
        let body = document.body;
        let menu = document.getElementsByClassName('navbar')[0]; // Seleciona o primeiro elemento com a classe 'navbar'
        let navTextElements = document.querySelectorAll('.nav-text p'); // Seleciona todos os elementos p dentro de .nav-text
        let navItemElements = document.querySelectorAll('#nav-link .nav-link'); // Seleciona todos os elementos .nav-link dentro do #nav-link

        // Modo claro
        body.style.background = "linear-gradient(180deg, rgb(148, 163, 184) 0%, rgba(148, 163, 184, 0.986) 50%, rgba(148, 163, 184, 0.876) 100%)";
        menu.style.background = "linear-gradient(180deg, rgb(148, 163, 184) 0%, rgba(148, 163, 184, 0.986) 50%, rgba(148, 163, 184, 0.876) 100%)";

        navTextElements.forEach(function (text) {
            text.style.color = "#030712";
            text.style.transition = "transform 0.3s ease, color 0.3s ease";
            applyHoverAnimation(text);
        });

        navItemElements.forEach(function (link) {
            link.style.color = "#030712";
            link.style.transition = "font-size 0.3s ease, color 0.3s ease";
        });
    }

    // Aplicar o modo escuro inicial
    applyDarkMode();

    // Alternar entre os modos claro e escuro ao clicar no checkbox
    day.addEventListener('change', function () {
        if (this.checked) {
            applyLightMode();
        } else {
            applyDarkMode();
        }
    });
});
