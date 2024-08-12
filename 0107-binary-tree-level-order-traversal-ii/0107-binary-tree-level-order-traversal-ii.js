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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    const queue = [{node: root, level: 0}];
    const result = [];

    while(queue.length){
        const { node, level } = queue.pop();
        if(node == null) continue;
        
        if(result.length < level + 1)
            result.push([]);
        result[level].push(node.val);

        queue.push({node: node.right, level: level+1});
        queue.push({node: node.left, level: level+1});
    }

    return result.reverse();
};