
// Produce a Grid with square boxes //

const grid = document.querySelector(".grid");

function createSquareDiv() {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("square");
    grid.appendChild(squareDiv);
}

let n = 2;

function createGrid(n){
    let gridSize = n * n;
    console.log(gridSize);
    for (let i = 0; i < gridSize; i++) {
        createSquareDiv();
    }
    grid.style.width = n * 10 + "px";
    grid.style.height = n * 10 + "px";
    grid.style.minWidth = n * 10+ "px";
    grid.style.minHeight = n * 10 + "px";
}
createGrid(n);

/*function resizeContainer(x) {
    const newGrid = x * 10;
    grid.style.width = newGrid + "px";
    grid.style.height = newGrid + "px";
    grid.style.minWidth = newGrid + "px";
    grid.style.minHeight = newGrid + "px";
}
resizeContainer(x); */

// Setting up hover effect so grid divs change color //

// try making new div for new color square?//

const colorSquare = document.querySelectorAll(".square");

for (const color of colorSquare) {
    color.addEventListener("mouseover", () => {
        color.style.backgroundColor = "white";
    });
}

// Create a pop up button that takes in the input of 
// user for size of grid
const inputbtn = document.querySelector(".inputbtn");
function popUpInput() {
    let input = prompt("Input your grid size:");
    if (input > 100){
        alert("Too large!");
        setTimeout(window.location.reload(), 3000);
    } else {
        console.log(input);
        createGrid(input);
        //resizeContainer(input);
    }
}
inputbtn.addEventListener("click", popUpInput);
