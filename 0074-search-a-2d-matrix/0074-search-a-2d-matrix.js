/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix.length == 0) return false;

    let row = 0;
    let left = 0;
    let right = matrix[row].length - 1;
    while(left <= right) {
        let mid = Math.floor(( left + right ) / 2);
        const val = matrix[row][mid];
        if(val == target) return true;
        if(val < target) {
            left = mid + 1;
            if(left > right) {
                row++;
                left = 0;
                if(row > matrix.length - 1) break;
                right = matrix[row].length - 1;
            }
        }
        else {
            right = mid - 1;
        }
    }

    return false;
};