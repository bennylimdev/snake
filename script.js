let gameContainer = document.querySelector(".game-container")

let foodX, foodY;
let headX = 12, headY = 12;
let velocityX = 0, velocityY = 0;
let endboardXY = [0, 26];
let snakeBody = [];

function generateFood() {
    foodX = Math.floor(Math.random()*25) + 1;
    foodY = Math.floor(Math.random()*25) + 1;
    for(let i = 0; i < snakeBody.length; i++) {
        if(snakeBody[i][1] == foodY, snakeBody[i][0] == foodX) {
            generateFood();
        }
    }
}

function gameOver() {
    headX = 12;
    headY = 12;
    generateFood();
    velocityX = 0;
    velocityY = 0;
    alert("Game Over");
}

function renderGame() {
    let updatedGame = `<div class="food" style="grid-area: ${foodY}/${foodX};"></div>`;

    if(foodX == headX && foodY == headY) {
        snakeBody.push(foodX, foodY);
        generateFood();
    }

    headX += velocityX;
    headY += velocityY;
    snakeBody.unshift([headX, headY]);
    snakeBody.pop();

    if(endboardXY.includes(headX) || endboardXY.includes(headY)) {
        gameOver();
    }

    for(let i = 1; i < snakeBody.length; i++) {
        if(snakeBody[0][0] == snakeBody[i][0] || snakeBody[0][1] == snakeBody[i][1]){
            gameOver();
        }
    }

    for(let i = 0; i < snakeBody.length; i++) {
        updatedGame += `<div class="snake" style="grid-area: ${snakeBody[i][1]}/${snakeBody[i][0]};"></div>`;
    }

    updatedGame += `<div class="snake" style="grid-area: ${headY}/${headX};"></div>`;

    gameContainer.innerHTML = updatedGame;
}

generateFood();
setInterval(renderGame, 150);

// if this happens run this function //
document.addEventListener("keydown", function(e){
    console.log(e.key);
    let key = e.key;
    if(key == "w" && velocityY!=1) {
        velocityX = 0;
        velocityY = -1;
    } else if(key == "s" && velocityY!=-1) {
        velocityX = 0;
        velocityY = 1;
    } else if(key == "a" && velocityX!=1) {
        velocityY = 0;
        velocityX = -1;
    } else if(key =="d" && velocityX!=-1) {
        velocityY = 0;
        velocityX = 1;
    }
})