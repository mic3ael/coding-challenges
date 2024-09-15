/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let p = 0;
    while(p < n){
        let current = Math.pow(2, p);
        if(current == n) return true;
        if(current > n) break;
        p++;
    }

    return false;
};