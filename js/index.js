const DEFAULT_GRID_SIZE = 16;
const colorPicker = document.querySelector('input[type="color"]');
let boxColor = colorPicker.value;

function createGrid(gridSize) {
  deleteGrid();

  const parentWrap = document.querySelector('.right-inner-wrapper');
  const gridWrap = document.createElement("div");

  gridWrap.className = 'grid-wrapper';
  
  parentWrap.appendChild(gridWrap);

  for(let i = 0; i < gridSize; i++) {
    const rowDiv = document.createElement('div');

    rowDiv.className = "grid-row";
    gridWrap.append(rowDiv);

    for(let j = 0; j < gridSize; j++) {
      const gridBox = document.createElement('div');

      gridBox.className = 'grid-box';

      draw(gridBox);
      rowDiv.append(gridBox);

    }
  }
}

function deleteGrid() {
  const parentGridWrap = document.querySelector('.right-inner-wrapper');
  const gridWrap = document.querySelector('.grid-wrapper');
  parentGridWrap.removeChild(gridWrap);
}

function displayGridSize() {
  const input = document.querySelector('input[type="range"]');
  const label = document.querySelector('label');

  input.addEventListener('input', event => {
    let gridSize = input.value;
    label.textContent = `${gridSize} x ${gridSize}`;

    createGrid(gridSize);
  });

}

function draw(gridBox) {
  gridBox.addEventListener('mousedown', event => {
    if(boxColor == 'rainbow') {
      gridBox.style.backgroundColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
    }
    gridBox.style.backgroundColor = boxColor;
  });

  gridBox.addEventListener('mouseover', event => {
    if(event.buttons == 1) {

      if(boxColor == 'rainbow') {
        gridBox.style.backgroundColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
      }
      gridBox.style.backgroundColor = boxColor;  
    }
  });
}

function colorBtn() {
  const colorPicker = document.querySelector('input[type="color"]');
  const colorBtn = document.querySelector('.btn-color');

  colorPicker.addEventListener('input', () => {
    boxColor = colorPicker.value;
  });

  colorBtn.addEventListener('click', () => {
    boxColor = colorPicker.value;
  });

}

function rainbowBtn() {
  const rainBtn = document.querySelector('.btn-rainbow');

  rainBtn.addEventListener('click', () => {
    boxColor = 'rainbow';
  });
}

function eraserBtn() {
  const eraseBtn = document.querySelector('.btn-eraser');

  eraseBtn.addEventListener('click', () => {
    boxColor = 'white';
  });
}

function randomNum() {
    let rand = Math.floor(Math.random(1) * 255);
  return rand;
}

function clearGridDisplay() {
  const gridBoxes = document.querySelectorAll('.grid-box');
  
  for(box of gridBoxes) {
    box.style.backgroundColor = 'white';
  }
}

function btnClick(classStr, callback) {
  const btn = document.querySelector("." + classStr);
  
  btn.addEventListener('click', event => {
    callback();
  });
}



createGrid(DEFAULT_GRID_SIZE);
displayGridSize();


btnClick('btn-clear', clearGridDisplay);
rainbowBtn();
eraserBtn();
colorBtn();