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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    const result = { diameter: 0 };
    dfs(root, result);
    return result.diameter;
};

function dfs(node, result){
    if(!node) return 0;
    
    const leftDepth = dfs(node.left, result);
    const rightDepth = dfs(node.right, result);

    result.diameter = Math.max(result.diameter, leftDepth + rightDepth);
    return Math.max(leftDepth, rightDepth) + 1;
}