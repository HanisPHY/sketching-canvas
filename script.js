//input column and row of the canvas
const container = document.querySelector('.container');
let row = prompt("rows of the canvas");
let column = prompt("columns of the canvas");
/*let rowTmp = "grid-template-rows: repeat(" + row
            + ", 1fr);";*/
let columnTmp = "grid-template-columns: repeat(" + column
            + ", auto);";
container.setAttribute('style', columnTmp);
for (let i = 1; i <= (row * column); i++) {
    let item = document.createElement('div');
    item.className = "grid-item";
    container.appendChild(item);
}
