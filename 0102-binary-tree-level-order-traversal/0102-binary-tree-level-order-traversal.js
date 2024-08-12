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
 * @return {number[][]}
 */
var levelOrder = function(root, level = 1, result = []) {
    if(root == null) return result;
    if(result.length < level)
        result.push([]);
    result[level-1].push(root.val);
    levelOrder(root.left, level+1, result);
    levelOrder(root.right, level+1, result);
    return result;
};