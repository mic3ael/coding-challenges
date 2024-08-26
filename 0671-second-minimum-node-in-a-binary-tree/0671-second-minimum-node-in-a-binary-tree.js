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
var findSecondMinimumValue = function(root) {
    const result = { secondMin: -1 };
    dfs(root, root.val, result);
    return result.secondMin;
};

function dfs(node, min, result){
    if(node == null) return;
    
    if(node.val != min){
        if(result.secondMin == -1)
            result.secondMin = node.val;
        else
            result.secondMin = Math.min(node.val, result.secondMin);
    }
    dfs(node.left, min, result);
    dfs(node.right, min, result);
}