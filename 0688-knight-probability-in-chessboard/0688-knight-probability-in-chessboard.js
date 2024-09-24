const directions = [
    [-2, -1],
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2]
];

/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function(n, k, row, col, memo = new Map()) {
    if(k == 0) return 1;
    const key = `${k}:${row}:${col}`;
    if(memo.has(key))
        return memo.get(key);
    let sumProbabilities = 0;
    for(let [dRow, dCol] of directions){
        const nextRow = dRow + row;
        const nextCol = dCol + col;
        if(nextRow < 0 || nextRow > n - 1) continue;
        if(nextCol < 0 || nextCol > n - 1) continue;
        sumProbabilities += knightProbability(n, k - 1, nextRow, nextCol, memo) / 8;
    }
    
    memo.set(key, sumProbabilities);
    return sumProbabilities;
};