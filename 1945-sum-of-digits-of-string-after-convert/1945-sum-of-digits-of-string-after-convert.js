/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let sum = '';
    for(let i = 0; i < s.length; i++){
        sum += (s.charCodeAt(i) % 96);
    }

    while(k){
        let currentSum = 0;
        
        for(let i = 0; i < sum.length; i++){
            currentSum += Number(sum.charAt(i));
        }
        
        sum = currentSum.toString();
        k--;
    }

    return Number(sum);
};