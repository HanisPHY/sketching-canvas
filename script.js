function random(num) {
    return Math.floor(Math.random() * num);
}

function rainbow_color() {
    let randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    if (mouseDown && !mouseUp) {
        return randomColor;
    }
    return;
}

function createCanvas(row, column) {
    columnTmp = "grid-template-columns: repeat(" + column
            + ", auto);";
    container.setAttribute('style', columnTmp);

    for (let i = 1; i <= (row * column); i++) {
        let item = document.createElement('div');
        item.className = "grid-item";
        container.appendChild(item);
    }
}

function deleteCanvas(parentNode) {
    parentNode.innerHTML = '';
}

function clearInput(input) { 
    input.value = "";
}


//input column and row of the canvas
const container = document.querySelector('.container');
let row = prompt("rows of the canvas");
let column = prompt("columns of the canvas");
/*let rowTmp = "grid-template-rows: repeat(" + row
            + ", 1fr);";*/
/*
let columnTmp = "grid-template-columns: repeat(" + column
            + ", auto);";
container.setAttribute('style', columnTmp);
*/

createCanvas(row, column);

let mouseDown = false;
let mouseUp = false;

// sketching event listener
container.addEventListener('mousedown', (e) => {
    e.preventDefault();
    mouseDown = true;
    mouseUp = false;
    e.target.style.backgroundColor = rainbow_color();
})
container.addEventListener('mouseover', (e) => {
    e.preventDefault();
    e.target.style.backgroundColor = rainbow_color();
})
container.addEventListener('mouseup', (e) => {
    e.preventDefault();
    mouseUp = true;
    e.target.style.backgroundColor = rainbow_color();
})

// redraw
const redraw = document.querySelector('.redraw');
redraw.addEventListener('click', () => {
    deleteCanvas(container);
    createCanvas(row, column);
})

// input row and column
const rInput = document.querySelector('#row');
const cInput = document.querySelector('#column');
const changeSize = document.querySelector('.changeSize');
rInput.addEventListener('click', () => clearInput(rInput));
cInput.addEventListener('click', () => clearInput(cInput));
changeSize.addEventListener('click', () => {
    deleteCanvas(container);
    createCanvas(rInput.value, cInput.value)
});