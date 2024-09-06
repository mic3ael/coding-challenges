/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    return async function(...args) {
        const result = await Promise.race([fn(...args), sleep(t)]);
        return result;
    }
};

function sleep(t){
    return new Promise((_, reject) => setTimeout(() => reject('Time Limit Exceeded'), t));
}

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */