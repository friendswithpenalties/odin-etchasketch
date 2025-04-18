
// Produce a Grid with square boxes //

const grid = document.querySelector(".grid");

function createSquareDiv() {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("square");
    grid.appendChild(squareDiv);
}

let n = 25;
let gridSize = n * n;
console.log(gridSize);

for (let i = 0; i < gridSize; i++) {
    createSquareDiv();
}

function resizeContainer(n) {
    const newGrid = n * 15;
    grid.style.width = newGrid + "px";
    grid.style.height = newGrid + "px";
    grid.style.minWidth = newGrid + "px";
    grid.style.minHeight = newGrid + "px";
}
resizeContainer(n);

// Setting up hover effect so grid divs change color //

// try making new div for new color square?//

const colorSquare = document.querySelectorAll(".square");

for (const color of colorSquare) {
    color.addEventListener("mouseover", () => {
        color.style.backgroundColor = "white";
    });
}