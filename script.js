let canvas = document.getElementById('myCanvas'); // grabs the canvas
let ctx = canvas.getContext('2d');
canvas.style.background = 'yellow' // sets canvas background color
canvas.style.border = '2px solid black'; // sets canvas border
// bg.src = './images/bg.png'


// load all images
let bg = new Image();


bg.src = './images/skyscraper2.jpeg';

let player1 = new Image();
player1.src = '/images/jumpystill.bmp'










// paintbrush
let context = canvas.getContext('2d');

// DOM start & restart buttons
let startBtn = document.querySelector('#start')
let restartBtn = document.querySelector('#restart')
let GameOver = false;
// let intervalId = null
let intervalId = 0

// function player1() {
//     context.begin

// }




// function draw()
// ctx.drawImage

// function animate() {
//     if (gameOver) {
//         cancelAnimationFrame()
//     }
//     else {
//         requestAnimationFrame(animate)
//     }
// }