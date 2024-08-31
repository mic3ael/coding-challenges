/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[row].length; col++){
            if(matrix[row][col] != 0)
                continue;

            let r = row - 1;
            while(r >= 0){
                if(matrix[r][col] != 0)
                    matrix[r][col] = null;
                r--;
            }
            
            r = row + 1;
            while(r < matrix.length){
                if(matrix[r][col] != 0)
                    matrix[r][col] = null;
                r++;
            }

            let c = col - 1;
            while(c >= 0){
                if(matrix[row][c] != 0)
                    matrix[row][c] = null;
                c--;
            }

            c = col + 1;
            while(c < matrix[row].length){
                if(matrix[row][c] != 0)
                    matrix[row][c] = null;
                c++;
            }
        }
    }

    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[row].length; col++){
            if(matrix[row][col] == null)
                matrix[row][col] = 0;
        }
    }
};