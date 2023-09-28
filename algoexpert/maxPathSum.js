//time: O(n), space: O(log(n))
function maxPathSum(tree) {
  const result = { maxPathSum: tree.value };
  maxPathSumHelper(tree, result);
  return result.maxPathSum;
}

function maxPathSumHelper(tree, result) {
  if (!tree) return;
  const maxLeftSum = maxPathSumHelper(tree.left, result);
  const maxRightSum = maxPathSumHelper(tree.right, result);

  const allValues = [tree.value, result.maxPathSum];
  const branchValues = [tree.value];

  if (!isNaN(maxLeftSum)) {
    allValues.push(maxLeftSum, maxLeftSum + tree.value);
    branchValues.push(maxLeftSum + tree.value);
  }

  if (!isNaN(maxRightSum)) {
    allValues.push(maxRightSum, maxRightSum + tree.value);
    branchValues.push(maxRightSum + tree.value);
  }

  if (!isNaN(maxLeftSum) && !isNaN(maxRightSum))
    allValues.push(maxLeftSum + maxRightSum + tree.value);

  result.maxPathSum = Math.max(...allValues);
  return Math.max(...branchValues);
}
