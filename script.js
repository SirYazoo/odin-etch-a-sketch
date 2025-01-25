const container = document.querySelector(".container");
const body = document.querySelector("body");

container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "960px";
container.style.height = "960px";
container.style.margin = "0";
container.style.padding = "0";

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.style.width = `${100 / size}%`;
        square.style.height = `${100 / size}%`;
        square.style.boxSizing = "border-box";
        square.style.border = "1px solid black";
        square.addEventListener("mouseover", (event => {
            event.target.style.backgroundColor = "green";
        }));
        container.appendChild(square);
    }
}