document.addEventListener('DOMContentLoaded', function () {
    let day = document.getElementById('day')

    day.addEventListener('change', function () {
        let body = document.body
        let menu = document.getElementsByClassName('navbar')[0]; // Seleciona o primeiro elemento com a classe 'navbar'

        if (this.checked) {
            body.style.background = "linear-gradient(180deg, rgb(148, 163, 184) 0%, rgba(148, 163, 184, 0.986) 50%, rgba(148, 163, 184, 0.876) 100%)";
            menu.style.background = "linear-gradient(180deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%)";
        } else {
            body.style.background = "linear-gradient(180deg, rgb(33, 37, 41) 0%, rgba(33, 37, 41, 0.986) 50%, rgba(33, 37, 41, 0.876) 100%)";
            menu.style.background = "transparent";
        }
    })
})