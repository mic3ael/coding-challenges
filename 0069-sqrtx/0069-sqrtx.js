/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x < 2) return x;
    let left = 0;
    let right = x - 1;
    let res;
    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        const val = Math.pow(mid, 2);
        if(val < x) {
            left = mid + 1;
            res = mid;    
        }
        else if(val > x) right = mid - 1;
        else 
            return mid;
    }

    return res;
};