class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// time: O(n), space: O(h) - h is the hight of the tree
function splitBinaryTree(tree) {
  const treeSum = binaryTreeSum(tree);
  const midSum = treeSum / 2;
  const [result] = isPath(tree, midSum);
  return result ? midSum : 0;
}

function binaryTreeSum(tree) {
  if (!tree) return 0;
  return binaryTreeSum(tree.left) + binaryTreeSum(tree.right) + tree.value;
}

function isPath(tree, sum) {
  if (!tree) return [false, 0];

  const [isLeftPath, leftBranchSum] = isPath(tree.left, sum);
  const [isRightPath, rightBranchSum] = isPath(tree.right, sum);

  if (leftBranchSum + tree.value === sum) return [true, sum];
  if (rightBranchSum + tree.value === sum) return [true, sum];
  if (rightBranchSum + leftBranchSum + tree.value === sum) return [true, sum];

  if (isLeftPath) return [true, leftBranchSum];
  if (isRightPath) return [true, rightBranchSum];

  return [false, leftBranchSum + rightBranchSum + tree.value];
}
