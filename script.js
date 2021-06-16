

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
let ballX = canvas.width / 2, ballY = 50, radius = 20
let isLeft = false, isRight = false
let counter = 0;
let score = 0;
let currentBlocks = [];
let incrX = 3, incrY = 3;
let blockHeight = 20;
let obsticles = []

let startAudio = new Audio("https://opengameart.org/sites/default/files/audio_preview/Kim%20Lightyear%20-%20Falling%20Stars.mp3.ogg")
let gameOverAudio = new Audio("https://opengameart.org/sites/default/files/bzzzt.ogg")

function createBlocks() {

    if (counter == 60) {
        let block = {
            width: Math.floor(Math.random() * 75 + 75),
            x: Math.floor(Math.random() * (canvas.width - 150)),
            y: canvas.height,
        }

        obsticles.push(block)
        counter = 0
    } else {
        counter++
    }


}

function drawBall() {
    ctx.beginPath()
    ctx.fillStyle = '#a30505'
    ctx.arc(ballX, ballY, radius, 0, 2 * Math.PI)
    ctx.fill()
    ctx.closePath()
}

//blocks
function drawBlocks() {
    for (let i = 0; i < obsticles.length; i++) {
        ctx.beginPath()
        ctx.fillStyle = 'black'
        ctx.fillRect(obsticles[i].x, obsticles[i].y, obsticles[i].width, blockHeight)
        ctx.closePath()
        obsticles[i].y -= 8
        if (ballX > obsticles[i].x && ballX < obsticles[i].x + obsticles[i].width && ballY + radius > obsticles[i].y && ballY + radius < blockHeight + obsticles[i].y) {
            gameOver = true
            if (gameOver == true) {
                document.body.innerHTML = "<h1 id='gameOn'>Game Over!!!</h1>"
                // alert("Game Over")
                // document.location.reload();
                // clearInterval(interval);

            }
        }

    }
}


function checkScore() {
    for (let i = 0; i < obsticles.length; i++) {
        if (obsticles[i].y < 0) {
            score++
            obsticles.splice(i, 1)

        }
    }
}










//Basic Animation Template 
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)


    ctx.fillStyle = 'white'
    ctx.font = '22px Veranda'
    ctx.fillText(`Score: ${score}`, 20, 20)




    //Draw Ball
    drawBall()
    // ballX = ballX + incrX
    // ballX = ballX - incrX

    if (isRight && ballX < canvas.width - radius) {
        ballX = ballX + 10
    }
    if (isLeft && ballX > radius) {
        ballX = ballX - 10
    }

    createBlocks()

    drawBlocks()

    checkScore()




    if (gameOver) {
        cancelAnimationFrame(intervalId)
        canvas.style.display = 'none'
        restartBtn.style.display = 'none'
        startAudio.pause()
        gameOverAudio.play()
    } else {
        intervalId = requestAnimationFrame(animate)
    }

}





function start() {
    canvas.style.display = 'block'
    restartBtn.style.display = 'none'
    startBtn.style.display = 'none'
    animate()
    startAudio.play()
}

function retstart() {

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



    restartBtn.addEventListener('click', () => {
        // restart()



    })
})

