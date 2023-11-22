const DEFAULT_GRID_SIZE = 16;

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

      gridBox.addEventListener('mousedown', event => {
        gridBox.style.backgroundColor = 'cyan';
      });

      gridBox.addEventListener('mouseover', event => {
        if(event.buttons == 1) {
          gridBox.style.backgroundColor = 'cyan';  
        }
        
      });

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

createGrid(DEFAULT_GRID_SIZE);
displayGridSize();
hover();