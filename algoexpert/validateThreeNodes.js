class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
//time: O(h), space: O(h) - where h is the height of the tree
function validateThreeNodes(nodeOne, nodeTwo, nodeThree) {
  // 1 -> 2 -> 3
  const hasTwo = binarySearch(nodeOne, nodeTwo.value);
  const hasThree = binarySearch(nodeTwo, nodeThree.value);

  // 3 -> 2 -> 1
  const hasTwo2 = binarySearch(nodeThree, nodeTwo.value);
  const hasOne = binarySearch(nodeTwo, nodeOne.value);

  return (hasTwo && hasThree) || (hasTwo2 && hasOne);
}

function binarySearch(node, val) {
  if (node.value == val) return true;

  if (node.value < val && node.right) return binarySearch(node.right, val);
  if (node.value > val && node.left) return binarySearch(node.left, val);
  return false;
}
