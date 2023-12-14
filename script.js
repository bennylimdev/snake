let gameContainer = document.querySelector(".game-container")

let foodX;
let foodY;

function generateFood() {
    foodX = Math.floor(Math.random()*25) + 1;
    foodY = Math.floor(Math.random()*25) + 1;

}
function renderGame() {
    let updatedGame = `<div class="food" style="grid-area: ${foodY}/${foodX};"></div>`;

    gameContainer.innerHTML = updatedGame;
}

generateFood();
renderGame();
