class Solution {
  // time: O(row * col), space: O(row * col) -> when the all matrix is an island.
  countIslands(matrix) {
    let totalIslands = 0;
    const queue = [];

    for (let r = 0; r < matrix.length; r++) {
      for (let c = 0; c < matrix[r].length; c++) {
        if (matrix[r][c] != 1) continue;

        queue.push({ row: r, col: c });
        while (queue.length) {
          const { row, col } = queue.pop();
          matrix[row][col] = 2;
          if (row + 1 < matrix.length && matrix[row + 1][col] == 1)
            queue.push({ row: row + 1, col });

          if (row - 1 >= 0 && matrix[row - 1][col] == 1)
            queue.push({ row: row + 1, col });

          if (col + 1 < matrix[row].length && matrix[row][col + 1] == 1)
            queue.push({ row, col: col + 1 });

          if (col - 1 >= 0 && matrix[row][col - 1] == 1)
            queue.push({ row, col: col - 1 });
        }
        totalIslands++;
      }
    }

    return totalIslands;
  }
}

const s = new Solution();
console.log(
  s.countIslands([
    [0, 1, 1, 1, 0],
    [0, 0, 0, 1, 1],
    [0, 1, 1, 1, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ])
);
