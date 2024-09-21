/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    const result = [];
    if(n < 1) return result;
    for(let i = 1; i <= 9; i++){
        dfs(n, i, result);
    }
    return result;
};

function dfs(n, val, result) {
    if(val > n) return;
    result.push(val);
    val *= 10;
    dfs(n, val, result);
    for(let i = 1; i <= 9; i++)
        dfs(n, val + i, result);
}