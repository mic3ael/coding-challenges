class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    const queue = [this];

    while (queue.length) {
      const node = queue.shift();
      array.push(node.name);
      queue.unshift(...node.children);
    }
    return array;
  }
}

const data = {
  nodes: [
    { children: ['B', 'C', 'D'], id: 'A', value: 'A' },
    { children: ['E', 'F'], id: 'B', value: 'B' },
    { children: [], id: 'C', value: 'C' },
    { children: ['G', 'H'], id: 'D', value: 'D' },
    { children: [], id: 'E', value: 'E' },
    { children: ['I', 'J'], id: 'F', value: 'F' },
    { children: ['K'], id: 'G', value: 'G' },
    { children: [], id: 'H', value: 'H' },
    { children: [], id: 'I', value: 'I' },
    { children: [], id: 'J', value: 'J' },
    { children: [], id: 'K', value: 'K' },
  ],
  startNode: 'A',
};
