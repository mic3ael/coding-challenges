function findClosestValueInBst(tree, target, closest = null) {

  if (!tree) return closest;

  if (closest === null) {
    closest = tree.value;
  }

  const closestDiff = Math.abs(target - closest);
  const nextDiff = Math.abs(tree.value - target);
  closest = closestDiff > nextDiff ? tree.value : closest;

  if (tree.value > target)
    return findClosestValueInBst(tree.left, target, closest);
  else if (tree.value < target)
    return findClosestValueInBst(tree.right, target, closest);
  return closest;
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
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
