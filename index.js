

let canvas = document.querySelector('canvas'); // grabs the canvas
// let ctx = canvas.getContext('2d');
// canvas.style.background = '#807a71' // sets canvas background color
canvas.style.background = '#whitesmoke';
canvas.style.border = '6px solid black'; // sets canvas border


// paintbrush
let ctx = canvas.getContext('2d');

// DOM start & restart buttons
let startBtn = document.querySelector('#start')
let restartBtn = document.querySelector('#restart')
let gameOver = false;
let intervalId = null
let ballX = 250, ballY = 250, radius = 20
let isLeft = false, isRight = false
let counter = 0;
let currentBlocks = [];
let incrX = 3, incrY = 3







function drawBall() {
    ctx.beginPath()
    ctx.fillStyle = '#a30505'
    ctx.arc(ballX, ballY, radius, 0, 2 * Math.PI)
    ctx.fill()
    ctx.closePath()
}



// //blocks
// function drawBlocks() {
//     ctx.beginPath()
//     ctx.fillStyle = '#yellow'
//     ctx.fillRect(200, 500, 1500, 20)
//     ctx.closePath()
// }







// if (isRight && ballX < canvas.width) {
//     ballX = ballX + 10
// }
// if (isLeft && ballX > 0) {
//     ballX = ballX - 10
// }

function collision() {
    if (isRight) {
        ballX = ballX + incrX
    }
    if (isLeft) {
        ballX = ballX - incrY
    }

    //right
    //     if (ballX + radius > canvas.width) {
    //         incrX = -incrX
    //     }

    //     //left 
    //     if (ballX - radius < 0) {
    //         incrY = -2
    //     }

    // }


    // function moveBall() {
    //     ctx.beginPath()
    //     ctx.closePath()
    // }

    // function collision() {

}




//Basic Animation Template 
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    //Draw Ball
    drawBall()
    ballX = ballX + incrX
    ballX = ballX - incrY

    if (isRight && ballX < canvas.width) {
        ballX = ballX + 10
    }
    if (isLeft && ballX > 0) {
        ballX = ballX - 10
    }


    // drawBlocks()


    //collision
    collision()



    if (gameOver) {
        cancelAnimationFrame(intervalId)
    }
    else {
        intervalId = requestAnimationFrame(animate)
    }

}






function start() {
    canvas.style.display = 'block'
    restartBtn.style.display = 'none'
    startBtn.style.display = 'none'
    animate()
}

// All event funcitons wll begin in the windows event load listener
window.addEventListener('load', () => {

    canvas.style.display = 'none' // hides canvas
    restartBtn.style.display = 'none' // hide restart button


    document.addEventListener('keydown', (event) => {
        if (event.code == 'ArrowRight') {
            isRight = true
            isLeft = false
        }
        if (event.code == 'ArrowLeft') {
            isRight = false
            isLeft = true
        }

        document.addEventListener('keyup', () => {
            isRight = false
            isLeft = false
        })

    })








    startBtn.addEventListener('click', () => {
        start()
    })

    // startBtn.addEventListener('keydown', (event) => {
    //     if (event.code === 40) {
    //         start()
    //     }
    // })

    restartBtn.addEventListener('click', () => {

    })
})

