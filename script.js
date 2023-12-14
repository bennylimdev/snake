let gameContainer = document.querySelector(".game-container")

let foodX, foodY;
let headX = 12, headY = 12;
let velocityX = 0, velocityY = 0;

function generateFood() {
    foodX = Math.floor(Math.random()*25) + 1;
    foodY = Math.floor(Math.random()*25) + 1;

}

function renderGame() {
    let updatedGame = `<div class="food" style="grid-area: ${foodY}/${foodX};"></div>`;

    headX += velocityX;
    headY += velocityY;
    
    updatedGame += `<div class="snake" style="grid-area: ${headY}/${headX};"></div>`;

    gameContainer.innerHTML = updatedGame;
}

generateFood();
setInterval(renderGame, 150);

// if this happens run this function //
document.addEventListener("keydown", function(e){
    console.log(e.key);
    let key = e.key;
    if(key == "w") {
        velocityX = 0;
        velocityY = -1;
    } else if(key == "s") {
        velocityX = 0;
        velocityY = 1;
    } else if(key == "a") {
        velocityY = 0;
        velocityX = -1;
    } else if(key =="d") {
        velocityY = 0;
        velocityX = 1;
    }
})