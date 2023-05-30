var canvas;
var ctx;
var loader = setTimeout(() => {
    document.getElementById("loader").remove();
    document.getElementById("main").style.display = "block";
    canvas = document.getElementById("game-canvas");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    ctx = canvas.getContext("2d");
    game_loop();

    clearInterval(loading_text);
}, 3000);

var loading_text = setInterval(() => {
    let text = document.getElementById("loading");
    text.innerText += '.';
},1000);

let dino = new Image();
dino.src = '../imgs/orange_dino.png';

const scale = 2.5;
const width = 20;
const height = 21;
const scaled_width = scale * width;
const scaled_height = scale * height;

function DrawFrame(frame_x, frame_y, canvas_x, canvas_y) {
    ctx.drawImage(dino, frame_x * width, frame_y * height, width, height, canvas_x, canvas_y, scaled_width, scaled_height);
}

const movement_speed = 7;
let pos_x = 240;
let pos_y = 246;

const cycle_loop = [0, 6, 7.2, 8.4, 9.6, 10.8];
let current_loop_index = 0;
let frame_count = 0;
const frame_limit = 5;

function game_loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (pos_x < canvas.width) {
        pos_x += movement_speed;
        has_moved = true;
    }
    else {
        pos_x = 0;
    }

    frame_count++;
    if (frame_count >= frame_limit) {
        frame_count = 0;
        current_loop_index++;
        if (current_loop_index >= cycle_loop.length) {
            current_loop_index = 0;
        }
    }

    DrawFrame(cycle_loop[current_loop_index], 0, pos_x, pos_y);
    window.requestAnimationFrame(game_loop);
}
