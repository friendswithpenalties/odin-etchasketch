
const container = document.querySelector(".container");

function createSquareDiv() {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("square");
    container.appendChild(squareDiv);
    return squareDiv;
}
let n = 4;
let gridSize = n * n;
console.log(gridSize);
/*
function createGrid(n) {
    let n = 10
    for (let i = 0; i < n; i++) {
        createSquareDiv();
    }
}
*/
for (let i = 0; i < gridSize; i++) {
    createSquareDiv();
}

function resizeContainer() {
    const grid = n * 10;
    container.style.width = grid + "px";
    container.style.height = grid + "px";
}
resizeContainer();

