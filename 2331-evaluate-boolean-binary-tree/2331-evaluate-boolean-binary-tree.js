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
 * @return {boolean}
 */
var evaluateTree = function(root) {
    return dfs(root);
};

function dfs(node) {
    if(node.val === 0) return false;
    if(node.val === 1) return true;

    const left = dfs(node.left);
    const right = dfs(node.right);

    if(node.val === 2) return left || right;
    return left && right;
}