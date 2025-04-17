
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
    const gridSize = gridSize * 10;
    container.style.width = gridSize + "px";
    container.style.height = gridSize + "px";
}
resizeContainer();

