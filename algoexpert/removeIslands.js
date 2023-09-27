function removeIslands(matrix) {
  // Write your code here.
  const queue = [];
  for (let row = 0; row < matrix.length; row++) {
    if (isValidCell(matrix, row, 0)) queue.push({ c: 0, r: row });
  }

  for (let row = 0; row < matrix.length; row++) {
    if (isValidCell(matrix, row, matrix[row].length - 1))
      queue.push({ c: matrix[row].length - 1, r: row });
  }

  for (let col = 0; col < matrix[0].length; col++) {
    if (isValidCell(matrix, 0, col)) queue.push({ c: col, r: 0 });
  }

  for (let col = 0; col < matrix[matrix.length - 1].length; col++) {
    if (isValidCell(matrix, matrix.length - 1, col))
      queue.push({ c: col, r: matrix.length - 1 });
  }
  while (queue.length) {
    const { r, c } = queue.pop();
    if (!isValidCell(matrix, r, c)) continue;
    // visited
    matrix[r][c] = 2;
    if (isValidCell(matrix, r, c + 1)) queue.push({ r, c: c + 1 });
    if (isValidCell(matrix, r, c - 1)) queue.push({ r, c: c - 1 });
    if (isValidCell(matrix, r + 1, c)) queue.push({ r: r + 1, c });
    if (isValidCell(matrix, r - 1, c)) queue.push({ r: r - 1, c });
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const val = matrix[row][col];
      if (val === 1) matrix[row][col] = 0;
      if (val === 2) matrix[row][col] = 1;
    }
  }

  return matrix;
}

function isValidCell(matrix, row, col) {
  if (row > matrix.length - 1) return false;
  if (row < 0) return false;
  if (col > matrix[row].length - 1) return false;
  if (col < 0) return false;

  if (matrix[row][col] === 1) {
    return true;
  }

  return false;
}

const matrix = [
  [0, 1, 0],
  [0, 1, 0],
  [1, 0, 0],
];

const result = removeIslands(matrix);
