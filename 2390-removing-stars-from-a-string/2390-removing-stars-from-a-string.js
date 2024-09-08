/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
   const stack = [];

   for(let i = 0; i < s.length; i++){
        if(s.charAt(i) == '*'){
            stack.pop();
        } else {
            stack.push(s.charAt(i));
        }
   }

   return stack.join('');
};