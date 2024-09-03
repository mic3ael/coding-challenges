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
var sumOfLeftLeaves = function(root) {
    if(root == null) return 0;

    const result = dfs(root);
    return result;
};

function dfs(node){
    if(node == null) return 0; 
    let sum = 0;
    if(node.left && node.left.right == null && node.left.left == null)
        sum =+ node.left.val;
    else 
        sum += dfs(node.left);

    return sum + dfs(node.right);
}