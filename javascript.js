
// Produce a Grid with square boxes //

const grid = document.querySelector(".grid");

function createSquareDiv() {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("square");
    grid.appendChild(squareDiv);
}

function createGrid(n){
    let gridSize = n * n;
    console.log(gridSize);
    for (let i = 0; i < gridSize; i++) {
        createSquareDiv();
    }
    grid.style.width = n * 10 + "px";
    grid.style.height = n * 10 + "px";
    grid.style.minWidth = n * 10 + "px";
    grid.style.minHeight = n * 10 + "px";
}
function removeGridSquares() {
    const gridSquares = document.querySelectorAll(".square");
    gridSquares.forEach(square => {
        square.parentNode.removeChild(square);
    });
}

// Create a pop up button that takes in the input of 
// user for size of grid
const inputbtn = document.querySelector(".inputbtn");
inputbtn.addEventListener("click", () => {
    n = prompt("Input new grid size:");
    removeGridSquares();
    createGrid(n);
});

window.onload = () => {
    createGrid(4);
}
// Setting up hover effect so grid divs change color //
// try making new div for new color square?//

const colorSquare = document.querySelectorAll(".square");
for (const color of colorSquare) {
    color.addEventListener("mouseover", () => {
        color.style.backgroundColor = "white";
    });
}