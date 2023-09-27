class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
  insert(value) {
    if (this.left && this.value > value) this.left.insert(value);
    else if (this.right && this.value <= value) this.right.insert(value);
    else {
      if (this.value > value) this.left = new BST(value);
      else this.right = new BST(value);
    }
  }
}

function reconstructBst(preOrderTraversalValues) {
  const root = new BST(preOrderTraversalValues[0]);

  for (let i = 1; i < preOrderTraversalValues.length; i++)
    root.insert(preOrderTraversalValues[i]);

  return root;
}
