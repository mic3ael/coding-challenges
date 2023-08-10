class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const actions = new Set([-1, -2, -3, -4]);

function evaluateExpressionTree(tree) {
  if (!actions.has(tree.value) || (!tree.left && !tree.right))
    return tree.value;

  if (tree.value === -1)
    return (
      evaluateExpressionTree(tree.left) + evaluateExpressionTree(tree.right)
    );

  if (tree.value === -2)
    return (
      evaluateExpressionTree(tree.left) - evaluateExpressionTree(tree.right)
    );

  let value;

  if (tree.value === -3)
    value =
      evaluateExpressionTree(tree.left) / evaluateExpressionTree(tree.right);
  else
    value =
      evaluateExpressionTree(tree.left) * evaluateExpressionTree(tree.right);

  return value > 0 ? Math.floor(value) : Math.ceil(value);
}

const data = {
  nodes: [
    { id: '1', left: '2', right: '3', value: -1 },
    { id: '2', left: null, right: null, value: 2 },
    { id: '3', left: null, right: null, value: 3 },
  ],
  root: '1',
};
