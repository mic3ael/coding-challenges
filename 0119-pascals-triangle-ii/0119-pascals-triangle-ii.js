/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let prev = [1];
    let result = [1];
    
    for(let i = 1; i <= rowIndex + 1; i++){
        if(i == 2){
            result = [1,1];
            prev = result;
            continue;
        }

        let j = 1;
        result = new Array(i);
        result[0] = 1;
        
        while(j < i - 1){
            result[j] = prev[j-1] + prev[j];
            j++;
        }

        result[result.length-1] = 1;
        prev = result;
    }

    return result;
};