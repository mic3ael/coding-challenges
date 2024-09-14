/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
    const prefixSum = new Array(arr.lenght);
    let sum = 0;
    
    for(let i = 0; i < arr.length; i++){
        sum ^= arr[i];
        prefixSum[i] = sum;
    }   

    const result = new Array(queries.length);
    
    for(let i = 0; i < queries.length; i++){
        let [leftIdx, rightIdx] = queries[i];
        let current = prefixSum[rightIdx];
        if(leftIdx > 0)
            current ^= prefixSum[leftIdx - 1];
        result[i] = current;
    }

    return result;
};