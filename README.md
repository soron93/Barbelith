<!-- # whos-jumping -->
# Barbelith
[Link Deploy](http://github.com)

## Description
Arconangles are on a collision course towards Barbelith; a red satellite object where you are in control by using your keyboards left and right arrow keys to evade incoming objects.

## MVP
MVP definition, deliverables.
- start screen will introduce the title of the game, instrucitons and a start button 
- game will have the protaganist which is a red circle object
- player will be able to move horizontally with left and right keyboard arrows
- rectangles will move upward from the bottom of the canvas to collide while randomly generating width to increase difficulty. 
- game ends when an object collides with the red circle 
- at game end the screen will hide the canvas and display game over, and a restart button

## Backlog
- save high score
- multiple levels and/or difficulty 


## Data structure
- createBlocks()
- drawBall()
- drawBlocks()
- checkScore()
- animate()
- start()
- restart()

## States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
    - gameScreen
- gameoverScreen


## Task
Task definition in order of priority
- main - startScreen
- main - eventListeners
- main - gameScreen 
- main - gameOverScreen
- game - drawCanvas
- game - gameLoop
- circle - drawCircle
- circle - moveCircle
- rect - drawRectangle
- rect - moveRectangle
- rect - multipleRectangles
- rect - randomizeRectangles
- game - calculateCollision
- game - gameOver
- game - restart



## Additional Links


### Trello
[https://trello.com/invite/b/bWbMRD7M/c0322ea9f7bc2f0b876c8f6908159efc/whos-jumping]


### Slides
[Presentation Slides](https://docs.google.com/presentation/d/1AguNbNck6Yt7tfl0nvzGS4zFzRTKKVpNMEU6GtQP16Y/edit#slide=id.gc6f90357f_0_13)

### Game
[Game link](https://soron93.github.io/Barbelith/)