document.addEventListener('DOMContentLoaded', function () {
    let day = document.getElementById('day')
    let moon = document.getElementById('moon-icon')

    // Alternar entre os modos claro e escuro ao clicar no checkbox
    day.addEventListener('change', toggleThreme)
    moon.addEventListener('click', toggleThreme)
    
    function toggleThreme() {
        document.body.classList.toggle('body-sun')
        document.body.classList.toggle('light-mode')
        document.body.classList.toggle('night-mode')
               
        let menu = document.getElementsByClassName('navbar')[0]
        menu.classList.toggle('menu-sun')
        
        let navTextElements = document.querySelectorAll('.nav-text')
        navTextElements.forEach(function (text) {
            text.classList.toggle('nav-text-sun')
        });

        let navItemElements = document.querySelectorAll('#nav-link .nav-link')
        navItemElements.forEach(function (link) {
            link.classList.toggle('nav-link-sun')
        })
    }
});
