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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if(root == null) return root;
    const sequence = [];
    dfs(root, sequence);
    
    for(let i = 1; i < sequence.length; i++){
        sequence[i-1].right = sequence[i];
        sequence[i-1].left = null;
    }

    return root;
};

function dfs(node, sequence){
    if(node == null) return;
    sequence.push(node);
    dfs(node.left, sequence);
    dfs(node.right, sequence);
}