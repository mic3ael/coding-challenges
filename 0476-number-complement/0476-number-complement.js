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
    const reverseAnswer = answerBinary.reverse();

    for(let i = 0; i < reverseAnswer.length; i++){
        result += reverseAnswer[i] * Math.pow(2, i);
    }

    return result;
};