// time: O(n), space: O(1)
class Solution {
  reverse(head) {
    let previous = null;
    let current = head;
    while (current) {
      const n = current;
      current = current.next;
      n.next = previous;
      previous = n;
    }
    return previous;
  }
}
