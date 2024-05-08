//CODIGO DO MENU TOGGLE
document.addEventListener('DOMContentLoaded', function() {
    let menuToggle = document.getElementById('menu-toggle')
    let sidenav = document.getElementById("mySidenav")
  
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('change')
        sidenav.style.display = "block"
  
        setTimeout(() => {
          // Ajuste a largura do sidenav e o posicionamento do card
          if (sidenav.style.width === "0px" || sidenav.style.width === "") {
              sidenav.style.width = "570px" // Abre o sidenav
          } else {
              sidenav.style.width = "0px" // Fecha o sidenav
          }
        }, 100)
    });
});
