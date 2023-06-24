const containerDimension = "500";
const container = document.querySelector(".container");
container.style.width = containerDimension + "px";
container.style.height= containerDimension + "px";

function createGrid(grid) {
    for (let i = 0; i < grid; ++i) {
        const row = document.createElement(`div`);
        container.appendChild(row);
        row.classList.add('row');
        for (let j = 0; j < grid; ++j){
            const column = document.createElement(`div`);
            column.style.width = (containerDimension / grid) + "px";
            column.style.height= (containerDimension / grid) + "px";
            column.style.backgroundColor= "white";
            column.style.boxSizing = "border-box";
            row.appendChild(column)
            column.classList.add('column');
        }
    }
    changeColorOnHover();
}

function removeGrid() {
    container.innerHTML = '';
}

function changeColorOnHover() {
    let items = document.querySelectorAll('.column');
    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = `${randomColors()}`;
        });    
    });
}

function randomColors() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; ++i) {
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}
let grid = 16;
createGrid(grid);

let changeGridlayout = document.querySelector('#promptForGridSize');
changeGridlayout.onclick = function() {
    grid = prompt("Enter new dimnsions for grid (0 to 100)");
    if (isNaN(grid)) {
        grid = prompt ("Enter a valid number between 0 to 100");
    } else if (grid > 100 || grid < 10) {
        grid = prompt("Value should be between 0 to 100");
    } else {
        removeGrid();
        createGrid(grid);
    }
}

let clear = document.querySelector('#clear');
clear.onclick = function() {
    removeGrid();
    createGrid(grid);
}
