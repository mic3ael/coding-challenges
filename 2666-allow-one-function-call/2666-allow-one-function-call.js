/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let value = null;
    let key = null;
    return function(...args){
        const nextKey = args.toString();
        if(key == null) {
            key = nextKey;
            value = fn(...args);
            return value;                
        }
        if(nextKey == value) return value;
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
