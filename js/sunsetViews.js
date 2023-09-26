function sunsetViews(buildings, direction) {
  const stack = [];

  const startIdx = direction === 'EAST' ? 0 : buildings.length - 1;
  const step = direction === 'EAST' ? 1 : -1;

  for (let i = startIdx; i < buildings.length && i >= 0; i += step) {
    if (!stack.length) {
      stack.push({ val: buildings[i], index: i });
      continue;
    }

    while (stack.length && stack[stack.length - 1].val <= buildings[i])
      stack.pop();
    stack.push({ val: buildings[i], index: i });
  }
  if (direction === 'EAST') return stack.map((elem) => elem.index);
  return stack.reverse().map((elem) => elem.index);
}

const east = sunsetViews([3, 5, 4, 4, 3, 1, 3, 2], 'EAST');
const west = sunsetViews([3, 5, 4, 4, 3, 1, 3, 2], 'WEST');
console.log('EAST: ', east);
console.log('west: ', west);
