/*class Node {
  constructor(value, next = null) {
    this.val = value;
    this.next = next;
  }
}*/

class Solution {
  // time: O(n), space: O(n)
  reverse(head) {
    let result = null;
    let current = head;
    while (current) {
      if (!result) result = new Node(current.val);
      else result = new Node(current.val, result);

      current = current.next;
    }
    return result;
  }
}
