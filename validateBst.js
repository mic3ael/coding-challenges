// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree, minValue = -Infinity, maxValue = Infinity) {
  if (!tree) return true;

  if (tree.value >= maxValue || tree.value < minValue) return false;

  const left = validateBst(tree.left, minValue, tree.value);
  const right = validateBst(tree.right, tree.value, maxValue);
  return left && right;
}

const data = {
  nodes: [
    { id: '10', left: '5', right: '15', value: 10 },
    { id: '15', left: '13', right: '22', value: 15 },
    { id: '22', left: null, right: null, value: 22 },
    { id: '13', left: null, right: '14', value: 13 },
    { id: '14', left: null, right: null, value: 14 },
    { id: '5', left: '2', right: '5-2', value: 5 },
    { id: '5-2', left: null, right: null, value: 5 },
    { id: '2', left: '1', right: null, value: 2 },
    { id: '1', left: null, right: null, value: 1 },
  ],
  root: '10',
};
