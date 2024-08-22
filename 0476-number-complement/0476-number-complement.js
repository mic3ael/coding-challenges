/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    const binaries = [];
    while(num > 0){
        binaries.push(num%2);
        num = Math.floor(num/2);
    }

    const reversed = binaries.reverse();

    const answerBinary = [];

    for(let i = 0; i < reversed.length; i++){
        if(reversed[i] == 1) answerBinary.push(0);
        else answerBinary.push(1);
    }

    let result = 0;
    for(let i = answerBinary.length - 1; i >= 0 ; i--){
        result += answerBinary[i] * Math.pow(2, answerBinary.length - 1 - i);
    }

    return result;
};