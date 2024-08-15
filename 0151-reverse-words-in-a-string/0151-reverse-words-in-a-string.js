/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const split = s.split(' ').filter(s => s);
    return split.reverse().join(' ');
};