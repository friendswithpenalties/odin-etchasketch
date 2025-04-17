
// Produce a Grid with square boxes //

const grid = document.querySelector(".grid");

function createSquareDiv() {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("square");
    grid.appendChild(squareDiv);
}

let n = 13;
let gridSize = n * n;
console.log(gridSize);

for (let i = 0; i < gridSize; i++) {
    createSquareDiv();
}

function resizeContainer(n) {
    const newGrid = n * 10;
    grid.style.width = newGrid + "px";
    grid.style.height = newGrid + "px";
    grid.style.minWidth = newGrid + "px";
    grid.style.minHeight = newGrid + "px";
}
resizeContainer(n);

// Setting up hover effect so grid divs change color //



