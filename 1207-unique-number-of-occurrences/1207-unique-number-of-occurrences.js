/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const count = new Map();
    for(let i = 0; i < arr.length; i++) {
        if(!count.has(arr[i]))
            count.set(arr[i], 0);
        count.set(arr[i], count.get(arr[i]) + 1);
    }

    const occs = new Set(Array.from(count.values()));

    return occs.size === count.size;
};