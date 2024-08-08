/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
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
};