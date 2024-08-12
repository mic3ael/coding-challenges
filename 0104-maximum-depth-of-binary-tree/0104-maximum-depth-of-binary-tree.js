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
// time: O(n), space: O(n)
var maxDepth3 = function(root) {
    if(root == null) return 0;

    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// time: O(n), space: O(n)
var maxDepth2 = function(root) {
    if(root == null) return 0;
    const queue = [{ node: root, depth: 1 }];
    let maxDepth = 0;
    
    while(queue.length){
        const { node, depth } = queue.pop();
        
        if(node.left == null && node.right == null) {
           maxDepth = Math.max(maxDepth, depth);
        }

        if(node.left)
            queue.push({node: node.left, depth: depth + 1});
        if(node.right)
            queue.push({node: node.right, depth: depth + 1});
   }

    return maxDepth;
};

var maxDepth = function(root, count = 0) {
    if(root == null) return count;
    count++;
    return Math.max(maxDepth(root.left, count), maxDepth(root.right, count));
};