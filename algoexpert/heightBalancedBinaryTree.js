class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function heightBalancedBinaryTree(tree) {
  const context = { balanced: true };
  heightBalancedBinaryTreeHelper(tree, context);

  return context.balanced;
}

function heightBalancedBinaryTreeHelper(tree, context) {
  if (!tree) return 0;

  if (!context.balanced) return -1;

  const lHeight = heightBalancedBinaryTreeHelper(tree.left, context);
  const rHeight = heightBalancedBinaryTreeHelper(tree.right, context);

  if (Math.abs(lHeight - rHeight) > 1) {
    context.balanced = false;
  }

  return Math.max(lHeight, rHeight) + 1;
}

const data = {
  nodes: [
    { id: '1', left: '2', right: '3', value: 1 },
    { id: '2', left: '4', right: '5', value: 2 },
    { id: '3', left: null, right: '6', value: 3 },
    { id: '4', left: null, right: null, value: 4 },
    { id: '5', left: '7', right: '8', value: 5 },
    { id: '6', left: null, right: null, value: 6 },
    { id: '7', left: null, right: null, value: 7 },
    { id: '8', left: null, right: null, value: 8 },
  ],
  root: '1',
};
