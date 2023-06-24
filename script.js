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
createGrid(100);
