class Solution {
  // time: O(row * col), space: O(row * col)
  countIslands(matrix) {
    let totalIslands = 0;
    // copy matrix to a new array to avoid matrix mutation
    const copy = [];
    for (let row = 0; row < matrix.length; row++) {
      const newRow = [];
      for (let col = 0; col < matrix[row].length; col++) {
        newRow.push(matrix[row][col]);
      }
      newRow.unshift(0);
      newRow.push(0);
      copy.push(newRow);
    }

    copy.unshift(new Array(copy.length + 1).fill(0));
    copy.push(new Array(copy.length + 1).fill(0));

    // calc number of islands
    const queue = [];

    for (let row = 1; row < copy.length; row++) {
      for (let col = 1; col < copy[row].length; col++) {
        if (copy[row][col] !== 1) {
          continue;
        }

        queue.push({ r: row, c: col });
        while (queue.length) {
          const { r, c } = queue.pop();
          if (copy[r - 1][c] === 1) queue.unshift({ r: r - 1, c });
          if (copy[r][c - 1] === 1) queue.unshift({ r, c: c - 1 });
          if (copy[r - 1][c - 1] === 1) queue.unshift({ r: r - 1, c: c - 1 });
          if (copy[r + 1][c] === 1) queue.unshift({ r: r + 1, c });
          if (copy[r][c + 1] === 1) queue.unshift({ r, c: c + 1 });

          copy[r][c] = -1;
        }
        totalIslands++;
      }
    }

    return totalIslands;
  }
}
