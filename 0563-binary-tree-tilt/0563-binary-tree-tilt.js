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
var findTilt = function(root) {
    const result = { tilt: 0 };
    dfs(root, result);
    return result.tilt;
};

function dfs(node, result){
    if(!node) return 0;
    const leftSum = dfs(node.left, result);
    const rightSum = dfs(node.right, result);
    result.tilt += Math.abs(leftSum - rightSum);
    return node.val + leftSum + rightSum;
}