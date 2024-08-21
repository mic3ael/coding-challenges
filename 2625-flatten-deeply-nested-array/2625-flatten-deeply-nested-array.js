/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    const result = [];
    dfs(arr, n, 0, result);
    return result;
};

function dfs(item, n, level, result=[]){
    if(n < level)
        result.push(item);
    else {
        for(let i = 0; i < item.length; i++){
            if(Array.isArray(item[i]))
                dfs(item[i], n, level + 1, result);
            else result.push(item[i]);
        }
    }
}