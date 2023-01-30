const grid = document.querySelector('.grid')
const blockWidth = 100
const blockHeigth = 20
const boardWidth = 560
const ballDiameter = 20
const boardHeight = 280
const score = document.querySelector('#score')
const blocksSearch = document.querySelector('block')
let xDiraction = -2;
let yDiraction = 2;
let timerId
const startPosition = [230, 10]
let currentPosition = startPosition;
const ballStartPosition = [270,40]
let ballCuurentPosition = ballStartPosition
class Block{
    constructor(xAxis, yAxis){
        this.bottomLeft = [xAxis,yAxis]
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topLeft = [xAxis, yAxis + blockHeigth]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeigth]
        
    }
}
const blocks = [
    new Block(10, 270, ),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),
    new Block(10, 240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),
    new Block(10, 210),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(450, 210),
  
]
console.log(blocks[0])
function addBlock (){
   
    for(let i = 0; i < blocks.length; i++){
        const block = document.createElement('div')
        block.classList.add('block')
        block.style.left = blocks[i].bottomLeft[0] + 'px'
        block.style.bottom = blocks[i].bottomLeft[1] + 'px';
        grid.appendChild(block)
        //Chaning blocks color
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        block.style.background = '#' + randomColor;
        
    }
}
addBlock()
  
//add user
const user = document.createElement('div')
user.classList.add('user')
user.style.left = currentPosition[0] + 'px';
user.style.bottom = currentPosition[1] + 'px'
grid.appendChild(user)
//draw the user
const drawUser = () => {
    user.style.left = currentPosition[0] + 'px';
    user.style.bottom = currentPosition[1] + 'px'
}
const drawBall = () => {
    ball.style.left = ballCuurentPosition[0] + 'px';
    ball.style.bottom = ballCuurentPosition[1] + 'px'
}
//moveUser
const moveUser = (e) => {
    switch(e.key){
        case 'ArrowLeft':
            if(currentPosition[0] > 10){
            currentPosition[0] -= 20
            drawUser()
            }
            break;
        case 'ArrowRight':
            if(currentPosition[0] < boardWidth - blockWidth){
                currentPosition[0] += 20
                drawUser()
            }
            break
    }
}
document.addEventListener('keydown', moveUser)

// add ball
const ball = document.createElement('div');
ball.classList.add('ball')
drawBall();
grid.appendChild(ball)

//move ball
const moveBall = () => {
    ballCuurentPosition[0] += xDiraction
    ballCuurentPosition[1] += yDiraction
    drawBall()
    checkForCollizion()
}
timerId = setInterval(moveBall, 10)

// check for collizion
const checkForCollizion = () => {
    //check for block collisions
    for(let i = 0; i < blocks.length; i++){
        if(
            (ballCuurentPosition[0] > blocks[i].bottomLeft[0] && ballCuurentPosition[0] < blocks[i].bottomRight[0]) &&
            ((ballCuurentPosition[1] + ballDiameter)> blocks[i].bottomLeft[1] && ballCuurentPosition[1] < blocks[i].topLeft[1])
        ){
            const allBlocks = Array.from(document.querySelectorAll('.block'))
            allBlocks[i].classList.remove('block')
            blocks.splice(i, 1)
            changeDiraction()
            score.innerHTML++ 
            
            //check for win
            if(blocks.length == 0){
                score.innerHTML = " You Win"
                clearInterval(timerId)
                document.removeEventListener('keydown', moveUser)
            }
        }
    }
    if(ballCuurentPosition[0] >= boardWidth - ballDiameter ||
        ballCuurentPosition[1] >=(boardHeight )||
        ballCuurentPosition[0] <= 0
        ) {
        changeDiraction()
    }
    //check for user collisions
    if((ballCuurentPosition[0] > currentPosition[0] && ballCuurentPosition[0] < currentPosition[0] + blockWidth) &&
        (ballCuurentPosition[1] > currentPosition[1] && ballCuurentPosition[1] < currentPosition[1] + blockHeigth)){
            changeDiraction();
    }
    if(ballCuurentPosition[1] <= 0){
        clearInterval(timerId);
        score.innerHTML = "You lose!"
        document.removeEventListener('keydown', moveUser)
    }
}
const changeDiraction = () => {
    if(xDiraction === 2 && yDiraction === 2){
        yDiraction = -2
        return
    }
    if(xDiraction === 2 && yDiraction === -2){
        xDiraction = -2
        return  
    }
    if(xDiraction === -2 && yDiraction === -2){
        yDiraction = 2
        return
    }
    if(xDiraction === -2 && yDiraction === 2)
    {
        xDiraction = 2
        return
    }
}
