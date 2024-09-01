/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    if(m * n != original.length) return [];
    
    const result = Array.from(Array(m), () => new Array(n).fill(null));
    let row = 0;
    let col = 0;
    for(let i = 0; i < original.length; i++){
        if(col == n) { 
            row++;
            col = 0;
        }
        const val = original[i];
        result[row][col] = val;
        col++;
    }

    return result;
};