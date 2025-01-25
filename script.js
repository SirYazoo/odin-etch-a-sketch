const container = document.querySelector(".container");
const body = document.querySelector("body");

container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "960px";
container.style.height = "960px";
container.style.margin = "0";
container.style.padding = "0";

function createGrid(size) {
    container.innerHTML = "";
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.style.width = `${100 / size}%`;
        square.style.height = `${100 / size}%`;
        square.style.boxSizing = "border-box";
        square.style.border = "1px solid black";
        square.style.flexShrink = "0";
        square.addEventListener("mouseover", (event => {
            event.target.style.backgroundColor = "green";
        }));
        container.appendChild(square);
    }
}

const button = document.createElement("button");
button.textContent = "Enter size"
body.insertBefore(button, container);
button.addEventListener("click", () => checkInput());

function checkInput() {
    const userInput = parseInt(prompt("Enter the grid size (Max. 100):"), 10);
    if(userInput > 0 && userInput <= 100) {
        createGrid(userInput);
    } else {
        alert("Needs to be more than 0 and less than 100");
    }
}

createGrid(16);