class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function middleNode(linkedList) {
  let current = linkedList;
  let size = 0;

  while (current) {
    current = current.next;
    size++;
  }

  current = linkedList;

  let mid = Math.floor(size / 2);

  while (mid > 0) {
    current = current.next;
    mid--;
  }

  return current;
}

const data = {
  head: '1',
  nodes: [{ id: '1', next: null, value: 1 }],
};
