/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
    const result = new Array(queries.length);
    for(let i = 0; i < queries.length; i++){
        let [leftIdx, rightIdx] = queries[i];
        let current = 0;
        while(leftIdx <= rightIdx){
            current ^= arr[leftIdx];
            leftIdx++;
        }
        result[i] = current;
    }

    return result;
};