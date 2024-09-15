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
var findBottomLeftValue = function(root) {
    if(root == null) return root;
    const result = { level: -1, value: root.val };
    dfs(root, 0, result);
    return result.value;
};

function dfs(node, level, result){
    if(node == null) return;
    
    if(level > result.level) {
        result.value = node.val;
        result.level = level;
    }

    dfs(node.left, level + 1, result);
    dfs(node.right, level + 1, result);
}