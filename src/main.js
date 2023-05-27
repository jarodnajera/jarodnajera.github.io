var loader = setTimeout(()=>{
    document.getElementById("loader").style.display = "none";
    document.getElementById("main").classList.toggle("clear")
    clearInterval(loading_text);
}, 3000);
var loading_text = setInterval(()=>{
    let text = document.getElementById("loading");
    text.innerText += '.';
},1000);

// Game Setup
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");


// Game Logic
