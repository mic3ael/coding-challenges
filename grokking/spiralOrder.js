class Solution {
  //time: O(row * col), space: O(row * col)
  spiralOrder(matrix) {
    const result = [];
    let rowTop = 0;
    let rowButtom = matrix.length - 1;
    let colLeft = 0;
    let colRight = matrix[0].length - 1;

    while (colLeft <= colRight && rowTop <= rowButtom) {
      for (let c = colLeft; c <= colRight; c++) {
        result.push(matrix[rowTop][c]);
      }

      rowTop++;
      for (let r = rowTop; r <= rowButtom; r++) {
        result.push(matrix[r][colRight]);
      }

      if (rowTop > rowButtom) break;

      colRight--;
      for (let c = colRight; c >= colLeft; c--) {
        result.push(matrix[rowButtom][c]);
      }

      if (colLeft > colRight) break;

      rowButtom--;

      for (let r = rowButtom; r >= rowTop; r--) {
        result.push(matrix[r][colLeft]);
      }
      colLeft++;
    }

    return result;
  }
}

const s = new Solution();

console.log(
  s.spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);

console.log(s.spiralOrder([[7, 9, 11]]));
