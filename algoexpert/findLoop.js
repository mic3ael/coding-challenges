class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// time: O(n), space: O(1) - where n is the number of nodes in the linked list
function findLoop(head) {
  let slow = head.next;
  let fast = head.next.next;

  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next.next;
  }

  slow = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}
