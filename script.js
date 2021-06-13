let canvas = document.getElementById('myCanvas'); // grabs the canvas
let ctx = canvas.getContext('2d');
// canvas.style.background = 'red' // sets canvas background color
canvas.style.border = '2px solid black'; // sets canvas border
// bg.src = './images/bg.png'


// load all images
let bg = new Image();
bg.src = './images/bg.png';
bg.src = './images/skyscraper2.jpeg';


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



//Basic Animation Template 
function draw() {

    ctx.drawImage(bg, 0, 0)


    if (gameOver) {
        cancelAnimationFrame(intervalId)
    }
    else {
        intervalId = cancelAnimationFrame(draw)
    }

}


function start() {
    canvas.style.display = 'block'
    restartBtn.style.display = 'none'
    startBtn.style.display = 'none'
    draw()
}



// All even funciton wll begin in the windows event load listener
window.addEventListener('load', () => {

    canvas.style.display = 'none' // hides canvas
    restartBtn.style.display = 'none' // hide restart button

    startBtn.addEventListener('click', () => {
        start()

    })

    restartBtn.addEventListener('click', () => {

    })
})



// function animate() {
//     if (gameOver) {
//         cancelAnimationFrame()
//     }
//     else {
//         requestAnimationFrame(animate)
//     }
// }