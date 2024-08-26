/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root, values = []) {
    if(root == null) return values;

    for(let i = 0; i < root.children.length; i++){
        postorder(root.children[i], values);
    }
    
    values.push(root.val);
    return values;
};