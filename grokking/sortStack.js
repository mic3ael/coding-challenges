class Solution {
  // time: O(n^2) for the worst case when the stack is already sorted, space: O(n)
  sortStack(stack) {
    let tempStack = [];

    while (stack.length) {
      const value = stack.pop();
      while (tempStack.length && tempStack[tempStack.length - 1] > value) {
        stack.push(tempStack.pop());
      }
      tempStack.push(value);
    }

    return tempStack;
  }
}

const s = new Solution();
console.log(s.sortStack([34, 3, 31, 98, 92, 23]));
console.log(s.sortStack([4, 3, 2, 10, 12, 1, 5, 6]));
console.log(s.sortStack([20, 10, -5, -1]));
