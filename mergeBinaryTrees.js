// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function mergeBinaryTrees(tree1, tree2) {
  if (tree1 === null) return tree2;
  if (tree2 === null) return tree1;

  tree1.value += tree2.value;
  tree1.left = mergeBinaryTrees(tree1.left, tree2.left);
  tree1.right = mergeBinaryTrees(tree1.right, tree2.right);
  return tree1;
}

const data1 = {
  nodes: [{ id: '7', left: null, right: null, value: 7 }],
  root: '7',
};

const data2 = {
  nodes: [
    { id: '2', left: '3', right: '6', value: 2 },
    { id: '3', left: null, right: '4', value: 3 },
    { id: '6', left: null, right: '7', value: 6 },
    { id: '4', left: null, right: null, value: 4 },
    { id: '7', left: null, right: null, value: 7 },
  ],
  root: '2',
};
