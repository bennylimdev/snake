let gameContainer = document.querySelector(".game-container")

let foodX;
let foodY;

function generateFood() {
    foodX = Math.floor(Math.random()*25);
    foodY = Math.floor(Math.random()*25);

}
function renderGame() {
    let updatedGame = `<div class="food" style="grid-area: 25/5;"></div>`;

    gameContainer.innerHTML = updatedGame;
}

renderGame();
generateFood();