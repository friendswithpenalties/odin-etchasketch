



const container = document.querySelector("#container");

function createSquareDiv() {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("square");
    container.appendChild(squareDiv);
    return squareDiv;
}