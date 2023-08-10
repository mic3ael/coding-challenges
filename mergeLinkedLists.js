class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function mergeLinkedLists(headOne, headTwo) {
  let current = headOne;
  let current2 = headTwo;
  const mergedList = new LinkedList();
  let mergedCurrent = mergedList;

  while (current && current2) {
    if (current.value > current2.value) {
      mergedCurrent.next = new LinkedList(current2.value);
      current2 = current2.next;
    } else {
      mergedCurrent.next = new LinkedList(current.value);
      current = current.next;
    }

    mergedCurrent = mergedCurrent.next;
  }

  while (current) {
    mergedCurrent.next = new LinkedList(current.value);
    mergedCurrent = mergedCurrent.next;
    current = current.next;
  }

  while (current2) {
    mergedCurrent.next = new LinkedList(current2.value);
    mergedCurrent = mergedCurrent.next;
    current2 = current2.next;
  }

  return mergedList.next;
}

const data1 = {
  head: '2',
  nodes: [
    { id: '2', next: '6', value: 2 },
    { id: '6', next: '7', value: 6 },
    { id: '7', next: '8', value: 7 },
    { id: '8', next: null, value: 8 },
  ],
};

const data2 = {
  head: '1',
  nodes: [
    { id: '1', next: '3', value: 1 },
    { id: '3', next: '4', value: 3 },
    { id: '4', next: '5', value: 4 },
    { id: '5', next: '9', value: 5 },
    { id: '9', next: '10', value: 9 },
    { id: '10', next: null, value: 10 },
  ],
};
