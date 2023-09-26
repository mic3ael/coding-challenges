class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  let firstSum = '';
  let current = linkedListOne;
  while (current) {
    firstSum = current.value + firstSum;
    current = current.next;
  }

  let secondSum = '';
  current = linkedListTwo;
  while (current) {
    secondSum = current.value + secondSum;
    current = current.next;
  }

  const sum = (Number(firstSum) + Number(secondSum)).toString();
  const sumofTwo = new LinkedList();
  current = sumofTwo;
  for (let i = sum.length - 1; i >= 0; i--) {
    current.next = new LinkedList(Number(sum.charAt(i)));
    current = current.next;
  }

  return sumofTwo.next;
}

const data1 = {
  head: '2',
  nodes: [
    { id: '2', next: '4', value: 2 },
    { id: '4', next: '7', value: 4 },
    { id: '7', next: '1', value: 7 },
    { id: '1', next: null, value: 1 },
  ],
};

const data2 = {
  head: '9',
  nodes: [
    { id: '9', next: '4', value: 9 },
    { id: '4', next: '5', value: 4 },
    { id: '5', next: null, value: 5 },
  ],
};
