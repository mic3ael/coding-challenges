function inOrderTraverse(tree, array) {
  if (tree !== null) {
    inOrderTraverse(tree.left, array);
    array.push(tree.value);
    inOrderTraverse(tree.right, array);
  }

  return array;
}

function preOrderTraverse(tree, array) {

  if (tree !== null) {
    array.push(tree.value);
    preOrderTraverse(tree.left, array);
    preOrderTraverse(tree.right, array);
  }
  return array;
}

function postOrderTraverse(tree, array) {

  if (tree !== null) {
    postOrderTraverse(tree.left, array);
    postOrderTraverse(tree.right, array);
    array.push(tree.value);
  }
  return array;
}

const data = {
  nodes: [
    { id: '10', left: '5', right: '15', value: 10 },
    { id: '15', left: null, right: '22', value: 15 },
    { id: '22', left: null, right: null, value: 22 },
    { id: '5', left: '2', right: '5-2', value: 5 },
    { id: '5-2', left: null, right: null, value: 5 },
    { id: '2', left: '1', right: null, value: 2 },
    { id: '1', left: null, right: null, value: 1 },
  ],
  root: '10',
};
