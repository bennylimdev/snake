let gameContainer = document.querySelector(".game-container")

let foodX, foodY;
let headX = 12, headY = 12;
let velocityX = 0, velocityY = 0;
let endboardXY = [0, 26];

function generateFood() {
    foodX = Math.floor(Math.random()*25) + 1;
    foodY = Math.floor(Math.random()*25) + 1;

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

    headX += velocityX;
    headY += velocityY;
    
    if(endboardXY.includes(headX) || endboardXY.includes(headY)) {
        gameOver();
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