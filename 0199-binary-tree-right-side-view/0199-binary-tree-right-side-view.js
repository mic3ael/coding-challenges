/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root, level = 0, result = []) {
    if(root == null) return result;
    
    if(result.length < level + 1)
        result.push(root.val);
    rightSideView(root.right, level+1, result);
    rightSideView(root.left, level+1, result);
    return result;
};