/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const leafs1 = [];
    dfsLeafs(root1, leafs1);
    const leafs2 = [];
    dfsLeafs(root2, leafs2);

    if(leafs1.length != leafs2.length) return false;

    for(let i = 0; i < leafs1.length; i++){
        if(leafs1[i] != leafs2[i]) return false;
    }

    return true;
};

function dfsLeafs(node, leafs=[]){
    if(node == null) return;

    if(node.left == null && node.right == null){
        leafs.push(node.val);
    }

    dfsLeafs(node.left, leafs);
    dfsLeafs(node.right, leafs);
}