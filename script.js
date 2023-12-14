let gameContainer = document.querySelector(".game-container")

let foodX, foodY;
let headX = 12, headY = 12;
let velocityX = 0, velocityY = 0;

function generateFood() {
    foodX = Math.floor(Math.random()*25) + 1;
    foodY = Math.floor(Math.random()*25) + 1;

}

function renderGame() {
    let updatedGame = `<div class="food" style="grid-area: ${foodX}/${foodY};"></div>`;
    
    updatedGame += `<div class="snake" style="grid-area: ${headX}/${headY};"></div>`;

    gameContainer.innerHTML = updatedGame;
}

generateFood();
renderGame();
