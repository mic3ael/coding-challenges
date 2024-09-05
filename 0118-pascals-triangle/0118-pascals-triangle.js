/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const result = new Array(numRows);
    for(let i = 0; i < numRows; i++){
        result[i] = new Array();
        
        if(i < 2) {
            let k = i;
            while(k >= 0) {
                result[i].push(1);
                k--;
            }
            continue;
        }

        let j = 1;
        const prev = result[i-1];
        result[i].push(1);
        while(j < i){
            result[i].push(prev[j-1] + prev[j]);
            j++;
        }
        result[i].push(1);
    }

    return result;
};