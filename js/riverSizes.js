function riverSizes(matrix) {
  // Write your code here.

  const results = [];

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (!isValidCell(matrix, row, col)) {
        continue;
      }

      const queue = [{ c: col, r: row }];
      let result = 0;

      while (queue.length) {
        const { c, r } = queue.pop();
        if (isValidCell(matrix, r, c)) result++;
        matrix[r][c] = -2;
        if (isValidCell(matrix, r, c - 1)) queue.push({ r, c: c - 1 });
        if (isValidCell(matrix, r, c + 1)) queue.push({ r, c: c + 1 });
        if (isValidCell(matrix, r - 1, c)) queue.push({ r: r - 1, c });
        if (isValidCell(matrix, r + 1, c)) queue.push({ r: r + 1, c });
      }
      results.push(result);
    }
  }
  return results;
}

function isValidCell(matrix, row, col) {
  if (row > matrix.length - 1) return false;
  if (row < 0) return false;
  if (col > matrix[row].length) return false;
  if (col < 0) return false;

  const value = matrix[row][col];
  if (value === -2 || !value) {
    return false;
  }
  return true;
}

const matrix = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0],
];

const result = riverSizes(matrix);
console.log('result: ', result);
