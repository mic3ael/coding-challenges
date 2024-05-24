/**
 * @param {number} n
 * @return {number[][]}
 */
// time: O(row * col), space: O(row * col)
const generateMatrix = function (n) {
  const matrix = new Array(n);
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(n);
  }

  let rowTop = 0;
  let rowButtom = matrix.length - 1;
  let colLeft = 0;
  let colRight = matrix[colLeft].length - 1;
  let count = 1;

  while (colLeft <= colRight && rowTop <= rowButtom) {
    for (let c = colLeft; c <= colRight; c++) {
      matrix[rowTop][c] = count;
      count++;
    }

    rowTop++;

    for (let r = rowTop; r <= rowButtom; r++) {
      matrix[r][colRight] = count;
      count++;
    }

    if (rowTop > rowButtom) break;

    colRight--;

    for (let c = colRight; c >= colLeft; c--) {
      matrix[rowButtom][c] = count;
      count++;
    }

    if (colLeft > colRight) break;

    rowButtom--;

    for (let r = rowButtom; r >= rowTop; r--) {
      matrix[r][colLeft] = count;
      count++;
    }
    colLeft++;
  }

  return matrix;
};
