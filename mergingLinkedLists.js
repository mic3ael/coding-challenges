class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function mergingLinkedLists(linkedListOne, linkedListTwo) {
  let lengthOfTheFirstList = linkedListLength(linkedListOne);
  let lengthOfTheSecondList = linkedListLength(linkedListTwo);
  let diff = Math.abs(lengthOfTheSecondList - lengthOfTheFirstList);

  if (lengthOfTheFirstList > lengthOfTheSecondList)
    linkedListOne = skipNodes(linkedListOne, diff);
  else if (lengthOfTheFirstList < lengthOfTheSecondList)
    linkedListTwo = skipNodes(linkedListTwo, diff);

  while (linkedListOne) {
    if (linkedListOne.value === linkedListTwo.value) return linkedListOne;

    linkedListOne = linkedListOne.next;
    linkedListTwo = linkedListTwo.next;
  }

  return null;
}

function linkedListLength(linkedList) {
  let current = linkedList;
  let size = 0;
  while (current) {
    size++;
    current = current.next;
  }

  return size;
}

function skipNodes(linkedList, skip) {
  while (linkedList && skip) {
    linkedList = linkedList.next;
    skip--;
  }

  return linkedList;
}
