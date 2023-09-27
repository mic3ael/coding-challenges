class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function findSuccessor(tree, node, nextInOrder = null) {
  if (!tree) {
    return tree;
  }

  if (nextInOrder === null) {
    nextInOrder = tree.right;
  }

  if (tree.value === node.value) {
    return nextInOrder;
  }

  findSuccessor(tree.left, node, nextInOrder);
  findSuccessor(tree.right, node, nextInOrder);
}

const tree = {
  nodes: [
    { id: '1', left: '2', parent: null, right: '3', value: 1 },
    { id: '2', left: '4', parent: '1', right: '5', value: 2 },
    { id: '3', left: null, parent: '1', right: null, value: 3 },
    { id: '4', left: '6', parent: '2', right: null, value: 4 },
    { id: '5', left: null, parent: '2', right: null, value: 5 },
    { id: '6', left: null, parent: '4', right: null, value: 6 },
  ],
  root: '1',
};

const node = '5';
