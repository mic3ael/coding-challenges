/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    const startBinary = numToBinary(start);
    const endBinary = numToBinary(goal);
    const len = Math.min(startBinary.length, endBinary.length);
    let operations = 0;
    let i = 0;
    for(; i < len; i++){
        if(startBinary[i] != endBinary[i]) operations++;
    }
    

    while(i < startBinary.length){
        if(startBinary[i] == 1) operations++;
        i++;
    }
    
    while(i < endBinary.length) {
        if(endBinary[i] == 1) operations++;
        i++;
    }

    return operations;
};

function numToBinary(num){
    const stack = [];

    while(num > 0){
        stack.push(num % 2);
        num = Math.floor(num / 2);
    }

    return stack;
}