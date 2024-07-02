// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

import "./home/menu.js"
import "./home/about.js"
import "./home/index.js"


let monitorScreen = document.getElementById("monitorScreen");
let randCaracters = ['a', 'b', 'c', 'd', 'e', 'x', '2', ' ', '@']
let screenText = "Hello World!"
setInterval(() => {
    
    let randChar = randCaracters[Math.floor(Math.random()*randCaracters.length)];
    screenText += randChar;

    monitorScreen.innerHTML = screenText;
}, 100)