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
    const stack = [{node: root, level: 0}];
    const result = new Array();

    while(stack.length){
        const { node, level } = stack.shift();
        if(node == null) continue;
        
        if(result.length < level + 1)
            result.push([]);
        result[level].push(node.val);

        stack.push({node: node.left, level: level+1});
        stack.push({node: node.right, level: level+1});
    }

    return result.reverse();
};

var levelOrderBottom2 = function(root) {
    const valuesByLevel = combineByLevel(root);
    return valuesByLevel.reverse();
}

function combineByLevel(node, level = 0, result = []){
    if(node == null) return result;
    if(result.length < level + 1)
        result.push([]);
    result[level].push(node.val);

    combineByLevel(node.left, level+1, result);
    combineByLevel(node.right, level+1, result);

    return result;
}