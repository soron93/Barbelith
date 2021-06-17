

let canvas = document.querySelector('canvas'); // grabs the canvas
// let ctx = canvas.getContext('2d');
// canvas.style.background = '#807a71' // sets canvas background color
canvas.style.background = '#whitesmoke';
canvas.style.border = '6px solid black'; // sets canvas border


// paintbrush
let ctx = canvas.getContext('2d');

// Variables and auido properties
let startBtn = document.querySelector('#start')
let restartBtn = document.querySelector('#restart')
let theEnd = document.querySelector('#gameOver')
let gameOver = false;
let intervalId = null
let ballX = canvas.width / 2, ballY = 50, radius = 20
let isLeft = false, isRight = false
let counter = 0;
let score = 0;
let incrX = 3, incrY = 3;
let blockHeight = 20;
let obsticles = []
let startAudio = new Audio("https://opengameart.org/sites/default/files/audio_preview/Zander%20Noriega%20-%20Darker%20Waves.mp3.ogg")
let gameOverAudio = new Audio("https://opengameart.org/sites/default/files/audio_preview/tnt.mp3.ogg")

startAudio.volume = 0.1;
startAudio.loop = true;
gameOverAudio.volume = 0.1;


//Rectangles random behavior is generated using an "if" statement that multiples the 
//rectangles and with a math.random() method to randomize the width of the rectangels 
function createBlocks() {

    if (counter == 60) {
        let block = {
            width: Math.floor(Math.random() * 130 + 95),
            x: Math.floor(Math.random() * (canvas.width - 5)),
            y: canvas.height,
        }

        obsticles.push(block)
        counter = 0
    } else {
        counter++
    }


}

// Circle is created here using canvas. the drawBall funciton is called again
// with an eventListener to move the ball horizantally across the X axis
function drawBall() {
    ctx.beginPath()
    ctx.fillStyle = '#a30505'
    ctx.arc(ballX, ballY, radius, 0, 2 * Math.PI)
    ctx.fill()
    ctx.closePath()
}

//Rectangles are created using a "for loop" to make the initial block
//and "if" statement is for the collision which points to the gameOver function
function drawBlocks() {
    for (let i = 0; i < obsticles.length; i++) {
        ctx.beginPath()
        ctx.fillStyle = 'black'
        ctx.fillRect(obsticles[i].x, obsticles[i].y, obsticles[i].width, blockHeight)
        ctx.closePath()
        obsticles[i].y -= 6
        if (ballX > obsticles[i].x && ballX < obsticles[i].x + obsticles[i].width && ballY + radius > obsticles[i].y && ballY + radius < blockHeight + obsticles[i].y) {
            gameOver = true

        }

    }
}

//Scoring logic is defined by a "for loop" and a "if" statment when the rectangle
//reached the top of the canvas a point is calculated  
function checkScore() {
    for (let i = 0; i < obsticles.length; i++) {
        if (obsticles[i].y < 0) {
            score++
            obsticles.splice(i, 1)

        }
    }
}

//Basic Animation
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)


    ctx.fillStyle = 'white'
    ctx.font = '22px Veranda'
    ctx.fillText(`Score: ${score}`, 20, 20)




    //Draw Ball
    drawBall()


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
        restartBtn.style.display = 'block'
        theEnd.style.display = 'block'
        startAudio.pause()
        gameOverAudio.play()

    } else {
        intervalId = requestAnimationFrame(animate)
    }

}

// Start logic, hides the restart buttonand ending screen and begins by 
//displayng the canvas and starting the audio
function start() {
    canvas.style.display = 'block'
    restartBtn.style.display = 'none'
    theEnd.style.display = 'none'
    startScreen.style.display = 'none'
    startBtn.style.display = 'none'
    info.style.display = 'none'
    animate()
    startAudio.play()
}

// Reloadd the game
function restart() {
    location.reload()


}

// All event funcitons wll begin in the windows event load listener. 
//"IF's" point to variables with boolena values to control the arrow keys
window.addEventListener('load', () => {

    canvas.style.display = 'none' // hides canvas
    restartBtn.style.display = 'none' // hide restart button
    theEnd.style.display = 'none'

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
        restart()



    })
})

