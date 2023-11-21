function createGrid(gridSize) {
  const gridWrap = document.querySelector(".grid-wrapper");

  for(let i = 0; i < gridSize; i++) {
    const rowDiv = document.createElement('div');

    rowDiv.className = "grid-row";
    gridWrap.append(rowDiv);

    for(let j = 0; j < gridSize; j++) {
      const gridBox = document.createElement('div');

      gridBox.className = 'grid-box';
      rowDiv.append(gridBox);

    }
  }

}

createGrid(16);