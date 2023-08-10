class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseLinkedList(head) {
  let newHead = null;
  let current = head;

  while (current) {
    const newNode = new LinkedList(current.value);
    newNode.next = newHead;
    newHead = newNode;
    current = current.next;
  }

  return newHead;
}

const data = {
  head: '0',
  nodes: [
    { id: '0', next: '1', value: 0 },
    { id: '1', next: '2', value: 1 },
    { id: '2', next: '3', value: 2 },
    { id: '3', next: '4', value: 3 },
    { id: '4', next: '5', value: 4 },
    { id: '5', next: null, value: 5 },
  ],
};
