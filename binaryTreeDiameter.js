class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function binaryTreeDiameter(tree) {
  const context = { diameter: 0 };
  binaryTreeDiameterHelper(tree, context);
  return context.diameter;
}

function binaryTreeDiameterHelper(tree, context) {
  if (!tree) return 0;

  const lheight = binaryTreeDiameterHelper(tree.left, context);
  const rheight = binaryTreeDiameterHelper(tree.right, context);

  if (context.diameter < lheight + rheight)
    context.diameter = lheight + rheight;

  return Math.max(lheight, rheight) + 1;
}

const data = {
  nodes: [
    { id: '1', left: '3', right: '2', value: 1 },
    { id: '3', left: '7', right: '4', value: 3 },
    { id: '7', left: '8', right: null, value: 7 },
    { id: '8', left: '9', right: null, value: 8 },
    { id: '9', left: null, right: null, value: 9 },
    { id: '4', left: null, right: '5', value: 4 },
    { id: '5', left: null, right: '6', value: 5 },
    { id: '6', left: null, right: null, value: 6 },
    { id: '2', left: null, right: null, value: 2 },
  ],
  root: '1',
};
