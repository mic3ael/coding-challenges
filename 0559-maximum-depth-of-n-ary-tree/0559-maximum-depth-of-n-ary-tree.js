/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(root == null) return 0;
    const {children} = root;
    let max = 0;
    for(let i = 0; i < children.length; i++){
        max = Math.max(maxDepth(children[i]), max);
    }
    return max + 1;
};