const container = document.querySelector(".container");
for (let i = 0; i < 16; ++i)
{
    const row = document.createElement(`div`);
    container.appendChild(row);
    row.classList.add('row');
    for (let j = 0; j < 16; ++j){
        const column = document.createElement(`div`);
        row.appendChild(column)
        column.classList.add('column');
    }
}