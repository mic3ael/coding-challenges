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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const paths = [];
    dfs(root, paths, '');
    return paths;
};

function dfs(node, paths, currentPath){
    if(node == null) return;
    
    if(currentPath.length)
        currentPath += `->${node.val}`
    else
        currentPath = `${node.val}`;
        
    if(node.left == null && node.right == null){
        paths.push(currentPath);
        return;
    }

    dfs(node.left, paths, currentPath);
    dfs(node.right, paths, currentPath);
}