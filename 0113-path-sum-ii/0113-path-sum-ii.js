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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const result = [];
    dfs(root, targetSum, 0,  result);
    return result;
};

function dfs(node, targetSum, sum, result, current = []){
    if(node == null) return;

    sum += node.val;
    if(node.left == null && node.right == null) {
        current.push(node.val);
        if(targetSum == sum) result.push(current);
        return;
    }
    dfs(node.left, targetSum, sum, result, [...current, node.val]);
    dfs(node.right, targetSum, sum, result, [...current, node.val]);
}