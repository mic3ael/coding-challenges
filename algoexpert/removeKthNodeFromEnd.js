// time: O(n), space: O(1) - where n is the number of nodes in the linked list
function removeKthNodeFromEnd(head, k) {
  let numberOfNodes = 0;
  let prevNode = head;
  let current = head;
  while (current) {
    if (numberOfNodes > k) {
      prevNode = prevNode.next;
    }
    current = current.next;
    numberOfNodes++;
  }

  if (numberOfNodes === k) {
    prevNode.value = prevNode.next.value;
    prevNode.next = prevNode.next.next;
  } else prevNode.next = prevNode.next.next;
}
