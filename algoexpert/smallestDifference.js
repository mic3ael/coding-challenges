function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort(sort);
  arrayTwo.sort(sort);

  let firstIdx = 0;
  let secIdx = 0;
  const smallestDiff = [];
  while (firstIdx < arrayOne.length && secIdx < arrayTwo.length) {
    if (!smallestDiff.length) {
      smallestDiff.push(arrayOne[0]);
      smallestDiff.push(arrayTwo[0]);
    }

    const diff = distance(...smallestDiff);
    const newDiff = distance(arrayOne[firstIdx], arrayTwo[secIdx]);

    if (diff > newDiff) {
      smallestDiff[0] = arrayOne[firstIdx];
      smallestDiff[1] = arrayTwo[secIdx];
    }
    if (arrayOne[firstIdx] <= arrayTwo[secIdx]) firstIdx++;
    else secIdx++;
  }

  return smallestDiff;
}

function sort(a, b) {
  return a - b;
}

function distance(num, num2) {
  return Math.abs(num - num2);
}
