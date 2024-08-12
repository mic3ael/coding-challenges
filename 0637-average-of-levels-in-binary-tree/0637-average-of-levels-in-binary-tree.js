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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    const sums = sumByLevel(root);
    return sums.map(({sum,items}) => sum/items);
};

function sumByLevel(node, level = 0, result = []){
    if(node == null) return result;
    
    if(result.length < level + 1)
        result.push({sum: 0, items: 0});
    result[level].sum += node.val;
    result[level].items += 1;
    
    sumByLevel(node.left, level + 1, result);
    sumByLevel(node.right, level + 1, result);

    return result;
}