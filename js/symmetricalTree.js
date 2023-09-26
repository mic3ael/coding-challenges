class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function symmetricalTree(tree) {
  const leftQueue = [tree.left];
  const rightQueue = [tree.right];

  while (leftQueue.length) {
    const lnode = leftQueue.pop();
    const rnode = rightQueue.shift();

    if (!lnode && !rnode) continue;

    if (!lnode || !rnode) return false;

    if (lnode.value !== rnode.value) return false;

    leftQueue.unshift(lnode.left, lnode.right);
    rightQueue.push(rnode.left, rnode.right);
  }

  if (rightQueue.length) return false;

  return true;
}

const data = {
  nodes: [{ id: '1', left: null, right: null, value: 1 }],
  root: '1',
};
