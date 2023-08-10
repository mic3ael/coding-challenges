function minHeightBst(array, root = null) {
  // Write your code here.
  if (array.length) {
    const midIdx = Math.floor(array.length / 2);

    if (!root) root = new BST(array[midIdx]);
    else root.insert(array[midIdx]);

    minHeightBst(array.slice(0, midIdx), root);
    minHeightBst(array.slice(midIdx + 1), root);
  }
  return root;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

minHeightBst([1, 2, 5, 7, 10, 13, 14, 15, 22]);
