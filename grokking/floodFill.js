// time: O(rows * cols), space: O(rows * cols)
class Solution {
  floodFillIter(matrix, x, y, newColor) {
    if (x < 0 || y < 0) return matrix;
    if (matrix.length <= x || matrix[x].length <= y) return matrix;

    const queue = [{ row: x, col: y }];
    const startingColor = matrix[x][y];
    while (queue.length) {
      const { row, col } = queue.pop();
      if (matrix[row][col] != startingColor) continue;
      matrix[row][col] = newColor;
      if (matrix.length > row + 1) queue.push({ row: row + 1, col });
      if (0 <= row - 1) queue.push({ row: row - 1, col });
      if (matrix[row].length > col + 1) queue.push({ row, col: col + 1 });
      if (0 <= col - 1) queue.push({ row, col: col - 1 });
    }

    return matrix;
  }
  floodFill(matrix, x, y, newColor) {
    if (x < 0 || y < 0) return matrix;
    if (matrix.length <= x || matrix[x].length <= y) return matrix;
    this.floodFillRec(matrix, x, y, newColor, matrix[x][y]);
    return matrix;
  }
  floodFillRec(matrix, row, col, newColor, startingColor) {
    if (matrix[row][col] != startingColor) return;
    matrix[row][col] = newColor;
    if (matrix.length > row + 1)
      this.floodFillRec(matrix, row + 1, col, newColor, startingColor);
    if (0 <= row - 1)
      this.floodFillRec(matrix, row - 1, col, newColor, startingColor);
    if (matrix[row].length > col + 1)
      this.floodFillRec(matrix, row, col + 1, newColor, startingColor);
    if (0 <= col - 1)
      this.floodFillRec(matrix, row, col - 1, newColor, startingColor);
  }
}

const s = new Solution();

console.log(
  s.floodFill(
    [
      [0, 1, 1, 1, 0],
      [0, 0, 0, 1, 1],
      [0, 1, 1, 1, 0],
      [0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0],
    ],
    1,
    3,
    2
  )
);

console.log(
  s.floodFill(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 1, 1, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
    ],
    3,
    2,
    5
  )
);

console.log(s.floodFill([[1]], 0, 0, 2));
