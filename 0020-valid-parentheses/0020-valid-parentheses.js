const closeParentheses = new Map();
closeParentheses.set(")","(");
closeParentheses.set("}","{");
closeParentheses.set("]","[");

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    for(let i = 0; i < s.length; i++){
        if(closeParentheses.has(s.charAt(i))) {
            const lastP = stack.pop();
            const requiredP = closeParentheses.get(s.charAt(i));
            if(requiredP !== lastP) return false;
        } else {
            stack.push(s.charAt(i));
        }
    }
    return stack.length === 0;
};