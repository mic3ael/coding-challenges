function sortedSquaredArray(array) {
  const negative = [];
  const positive = [];
  for (let i = 0; i < array.length; i++) {
    let squared = array[i] * array[i];
    if (array[i] <= 0) negative.unshift(squared);
    else positive.push(squared);
  }

  const squaredArr = [];

  while (negative.length && positive.length) {
    if (negative[0] < positive[0]) squaredArr.push(negative.shift());
    else squaredArr.push(positive.shift());
  }

  squaredArr.push(...negative);
  squaredArr.push(...positive);

  return squaredArr;
}

sortedSquaredArray([-10, -5, 0, 5, 10]);
