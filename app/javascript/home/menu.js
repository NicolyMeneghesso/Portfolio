//CODIGO DO MENU TOGGLE
document.addEventListener('DOMContentLoaded', function() {
    let menuToggle = document.getElementById('menu-toggle')
    let sidenav = document.getElementById("mySidenav")
  
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('change');
        
        // Verifica se o sidenav está visível
        if (sidenav.style.transform === "translateX(0%)") {
            sidenav.style.transform = "translateX(100%)"; // Esconde o sidenav
        } else {
            sidenav.style.transform = "translateX(0%)"; // Mostra o sidenav
        }
    });
});
