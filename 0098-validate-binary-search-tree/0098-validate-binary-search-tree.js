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
var isValidBST = function(root) {
    if(root == null) return true;
    return dfs(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
};

function dfs(node, min, max) {
    if(node.val <= min || node.val >= max) return false;
    
    if(node.left) {
        const result = dfs(node.left, min, node.val);
        if(!result) return false;
    }

    if(node.right) {
        const result = dfs(node.right, node.val, max);
        if(!result) return false;
    }
    
    return true;
}